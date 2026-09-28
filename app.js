// ==================== 应用状态 ====================
let shuffledQuestions = [];
let currentQuestion = 0;
let answers = [];
let scores = {};

// ==================== 初始化 ====================
function init() {
  renderColorGrid();
}

function renderColorGrid() {
  const grid = document.getElementById('color-grid');
  grid.innerHTML = SOUL_COLORS.map(c => `
    <div class="color-card" style="background:${c.lightColor}">
      <div class="color-card-name" style="color:${c.color}">${c.name}</div>
      <div class="color-card-en">${c.enName}</div>
      <div class="color-card-keyword">${c.keyword}</div>
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
  // 打乱题目顺序
  shuffledQuestions = shuffleArray(QUESTIONS_RAW);
  // 每题的选项也打乱
  shuffledQuestions = shuffledQuestions.map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));

  currentQuestion = 0;
  answers = new Array(shuffledQuestions.length).fill(null);
  scores = {};
  SOUL_COLORS.forEach(c => { scores[c.id] = 0; });

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

  // 更新圆点
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
    const colors = OPTION_COLORS[opt.color] || OPTION_COLORS.blue;
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

  // 计分
  const q = shuffledQuestions[currentQuestion];
  const opt = q.options[idx];
  if (opt.scores) {
    for (const [colorId, score] of Object.entries(opt.scores)) {
      scores[colorId] = (scores[colorId] || 0) + score;
    }
  }

  renderQuestion();

  // 自动进入下一题
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
    // 减去上一题的分数
    const prevQ = shuffledQuestions[currentQuestion];
    const prevAns = answers[currentQuestion];
    if (prevAns !== null && prevQ.options[prevAns].scores) {
      for (const [colorId, score] of Object.entries(prevQ.options[prevAns].scores)) {
        scores[colorId] = (scores[colorId] || 0) - score;
      }
    }
    currentQuestion--;
    renderQuestion();
    window.scrollTo(0, 0);
  }
}

// ==================== 计分与匹配 ====================
function getTopColors() {
  const sorted = SOUL_COLORS.map(c => ({
    ...c,
    totalScore: scores[c.id] || 0
  })).sort((a, b) => b.totalScore - a.totalScore);

  const maxPossible = shuffledQuestions.length * 3; // 每题最高3分
  sorted.forEach(c => {
    c.percentage = Math.round((c.totalScore / maxPossible) * 100);
  });

  return sorted;
}

// ==================== 结果页 ====================
function showResult() {
  const ranked = getTopColors();
  const top = ranked[0];

  document.getElementById('quiz-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');

  const scroll = document.getElementById('result-scroll');
  scroll.innerHTML = `
    <!-- 主结果卡片 -->
    <div class="result-hero fade-enter">
      <div class="result-label">ANIMA COLORIS / 灵魂色彩索引</div>
      <div class="result-color-name" style="color:${top.color === '#2c3e50' ? '#fff' : top.color}">${top.name}</div>
      <div class="result-color-en">${top.enName}</div>
      <div class="result-divider"></div>
      <div class="result-desc">${top.desc}</div>
      <div class="result-match">匹配度 <strong>${top.percentage}%</strong></div>
    </div>

    <!-- 灵魂特质 -->
    <div class="result-card fade-enter" style="animation-delay:0.1s">
      <div class="result-card-title">你的灵魂特质</div>
      <div class="traits-wrap">
        ${top.traits.map(t => `<span class="trait-tag" style="color:${top.color}; border-color:${top.color}; background:${top.lightColor}">${t}</span>`).join('')}
      </div>
      <div class="shadow-text">
        <strong>阴影面：</strong>${top.shadow}
      </div>
    </div>

    <!-- 成长建议 -->
    <div class="result-card fade-enter" style="animation-delay:0.2s">
      <div class="result-card-title">专属成长建议</div>
      <div class="shadow-text" style="border-left-color:${top.color}">${top.advice}</div>
    </div>

    <!-- 他对你说的话 -->
    <div class="result-card fade-enter" style="animation-delay:0.3s">
      <div class="result-card-title">${top.name}会对你说</div>
      <div class="letter-text">"${top.letter}"</div>
    </div>

    <!-- 推荐书籍 -->
    <div class="result-card fade-enter" style="animation-delay:0.4s">
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
    <div class="result-card fade-enter" style="animation-delay:0.5s">
      <div class="result-card-title">你的灵魂家族</div>
      <p style="font-size:14px; color:#5a7a92; margin-bottom:14px; line-height:1.7;">与你最契合的前三种色彩：</p>
      ${ranked.slice(0, 3).map((c, i) => `
        <div style="display:flex; align-items:center; gap:14px; padding:14px; background:#f6f9fc; border-radius:12px; margin-bottom:10px;">
          <div style="width:36px; height:36px; border-radius:50%; background:${c.color}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:14px; font-weight:700; flex-shrink:0;">${['I','II','III'][i]}</div>
          <div style="flex:1;">
            <div style="font-size:15px; font-weight:600; color:#1a2a3a;">${c.name}</div>
            <div style="font-size:12px; color:#7a9ab5;">${c.keyword}</div>
          </div>
          <div style="font-size:18px; font-weight:700; color:${c.color};">${c.percentage}%</div>
        </div>
      `).join('')}
    </div>

    <!-- 重新测试 -->
    <button class="btn-restart fade-enter" style="animation-delay:0.6s" onclick="restartQuiz()">重新鉴定</button>
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
