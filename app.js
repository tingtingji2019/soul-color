// ==================== 应用状态 ====================
let shuffledQuestions = [];
let currentQuestion = 0;
let answers = [];
let scores = {};

// ==================== 初始化 ====================
function init() {
  renderWriterGrid();
}

function renderWriterGrid() {
  const grid = document.getElementById('writer-grid');
  grid.innerHTML = WRITERS.map(w => `
    <div class="writer-card" style="background:${w.color}12">
      <div class="writer-card-name" style="color:${w.color}">${w.name}</div>
      <div class="writer-card-en">${w.enName}</div>
      <div class="writer-card-keyword">${w.keyword}</div>
    </div>
  `).join('');
}

// ==================== 题目打乱 ====================
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ==================== 页面导航 ====================
function scrollToPanel2() {
  document.getElementById('panel2').scrollIntoView({ behavior: 'smooth' });
}

function startQuiz() {
  shuffledQuestions = shuffleArray(QUESTIONS_RAW);
  shuffledQuestions = shuffledQuestions.map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));

  currentQuestion = 0;
  answers = new Array(shuffledQuestions.length).fill(null);
  scores = {};
  WRITERS.forEach(w => { scores[w.id] = 0; });

  document.getElementById('cover-page').classList.remove('active');
  document.getElementById('quiz-page').classList.add('active');
  document.getElementById('result-page').classList.remove('active');

  renderProgressDots();
  renderQuestion();
  window.scrollTo(0, 0);
}

// ==================== 测试页逻辑 ====================
function renderProgressDots() {
  const dots = document.getElementById('progress-dots');
  const total = shuffledQuestions.length;
  dots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    dot.id = `dot-${i}`;
    dots.appendChild(dot);
  }
}

function updateProgress() {
  const total = shuffledQuestions.length;
  const pct = ((currentQuestion + 1) / total) * 100;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('progress-text').textContent = `${currentQuestion + 1} / ${total}`;

  for (let i = 0; i < total; i++) {
    const dot = document.getElementById(`dot-${i}`);
    dot.className = 'progress-dot';
    if (i < currentQuestion) dot.classList.add('done');
    if (i === currentQuestion) dot.classList.add('current');
  }
}

function renderQuestion() {
  const q = shuffledQuestions[currentQuestion];
  const total = shuffledQuestions.length;

  updateProgress();

  document.getElementById('q-category').textContent = q.category;
  document.getElementById('q-badge').textContent = `Q${String(currentQuestion + 1).padStart(2, '0')}`;
  document.getElementById('q-text').textContent = q.text;

  const wrap = document.getElementById('options-wrap');
  wrap.innerHTML = q.options.map((opt, i) => {
    const colors = OPTION_COLORS[i % OPTION_COLORS.length];
    const isSelected = answers[currentQuestion] === i;
    return `
      <button class="option-btn ${isSelected ? 'selected' : ''}"
        style="background:${colors.bg}; color:${colors.text}; border-color:${isSelected ? colors.text : 'transparent'}"
        onclick="selectOption(${i})">
        ${opt.text}
      </button>
    `;
  }).join('');

  const btnPrev = document.getElementById('btn-prev-q');
  btnPrev.disabled = currentQuestion === 0;
}

function selectOption(idx) {
  answers[currentQuestion] = idx;

  const q = shuffledQuestions[currentQuestion];
  const opt = q.options[idx];
  if (opt.scores) {
    for (const [writerId, score] of Object.entries(opt.scores)) {
      scores[writerId] = (scores[writerId] || 0) + score;
    }
  }

  renderQuestion();

  const delay = currentQuestion === shuffledQuestions.length - 1 ? 600 : 400;
  setTimeout(() => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      currentQuestion++;
      renderQuestion();
      window.scrollTo(0, 0);
    } else {
      showResult();
    }
  }, delay);
}

function prevQuestion() {
  if (currentQuestion > 0) {
    const prevQ = shuffledQuestions[currentQuestion];
    const prevAns = answers[currentQuestion];
    if (prevAns !== null && prevQ.options[prevAns].scores) {
      for (const [writerId, score] of Object.entries(prevQ.options[prevAns].scores)) {
        scores[writerId] = (scores[writerId] || 0) - score;
      }
    }
    currentQuestion--;
    renderQuestion();
    window.scrollTo(0, 0);
  }
}

// ==================== 计分与匹配 ====================
function getTopWriters() {
  const maxPerQuestion = 3;
  const maxPossible = shuffledQuestions.length * maxPerQuestion;

  const ranked = WRITERS.map(w => ({
    ...w,
    totalScore: scores[w.id] || 0,
    percentage: Math.round(((scores[w.id] || 0) / maxPossible) * 100)
  })).sort((a, b) => b.totalScore - a.totalScore);

  return ranked;
}

// ==================== 结果页 ====================
function showResult() {
  const ranked = getTopWriters();
  const top = ranked[0];
  const top2 = ranked[1];
  const top3 = ranked[2];

  document.getElementById('quiz-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');

  const scroll = document.getElementById('result-scroll');
  scroll.innerHTML = `
    <!-- 主结果卡片 -->
    <div class="result-hero fade-enter" style="background:linear-gradient(170deg, ${top.color}dd, ${top.color}88)">
      <div class="result-label">ANIMA LITTERARIA / 文学灵魂索引</div>
      <div class="result-writer-name">${top.name}</div>
      <div class="result-writer-en">${top.enName}</div>
      <div class="result-writer-years">${top.years}</div>
      <div class="result-divider"></div>
      <div class="result-desc">${top.desc}</div>
      <div class="result-match">灵魂匹配度 <strong>${top.percentage}%</strong></div>
    </div>

    <!-- 灵魂特质 -->
    <div class="result-card fade-enter" style="animation-delay:0.1s">
      <div class="result-card-title">你们共享的文学DNA</div>
      <div class="traits-wrap">
        ${top.traits.map(t => `<span class="trait-tag" style="color:${top.color}; border-color:${top.color}40; background:${top.color}10">${t}</span>`).join('')}
      </div>
      <div class="shadow-text" style="border-left-color:${top.color}">
        <strong>你的阴影面：</strong>${top.shadow}
      </div>
    </div>

    <!-- 成长建议 -->
    <div class="result-card fade-enter" style="animation-delay:0.2s">
      <div class="result-card-title">专属成长建议</div>
      <div class="shadow-text" style="border-left-color:${top.color}">${top.letter}</div>
    </div>

    <!-- 推荐书籍 -->
    <div class="result-card fade-enter" style="animation-delay:0.3s">
      <div class="result-card-title">为你推荐的书</div>
      ${top.books.map(b => `
        <div class="book-card">
          <div class="book-title">${b.title}</div>
          <div class="book-author">${b.author}</div>
          <div class="book-reason">${b.reason}</div>
        </div>
      `).join('')}
    </div>

    <!-- 灵魂家族 -->
    <div class="result-card fade-enter" style="animation-delay:0.4s">
      <div class="result-card-title">你的文学家族</div>
      <p style="font-size:14px; color:#5a7a92; margin-bottom:14px; line-height:1.7;">与你最契合的前三位作家：</p>
      ${[top, top2, top3].map((w, i) => `
        <div style="display:flex; align-items:center; gap:14px; padding:14px; background:#f6f9fc; border-radius:12px; margin-bottom:10px;">
          <div style="width:36px; height:36px; border-radius:50%; background:${w.color}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:14px; font-weight:700; flex-shrink:0; font-family:'Noto Serif SC',serif;">${['I','II','III'][i]}</div>
          <div style="flex:1;">
            <div style="font-size:15px; font-weight:600; color:#1a2a3a; font-family:'Noto Serif SC',serif;">${w.name}</div>
            <div style="font-size:12px; color:#7a9ab5;">${w.enName} · ${w.keyword}</div>
          </div>
          <div style="font-size:18px; font-weight:700; color:${w.color};">${w.percentage}%</div>
        </div>
      `).join('')}
    </div>

    <!-- 重新测试 -->
    <button class="btn-restart fade-enter" style="animation-delay:0.5s" onclick="restartQuiz()">重新鉴定</button>
  `;

  window.scrollTo(0, 0);
}

function restartQuiz() {
  document.getElementById('result-page').classList.remove('active');
  document.getElementById('cover-page').classList.add('active');
  window.scrollTo(0, 0);
}

// ==================== 启动 ====================
init();
