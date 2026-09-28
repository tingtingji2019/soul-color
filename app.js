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

// 罗马数字
function toRoman(num) {
  const map = [[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  let r = '';
  for (const [v, s] of map) { while (num >= v) { r += s; num -= v; } }
  return r;
}

// 把 **text** 转成 <strong>
function boldify(text) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

// ==================== 雷达图 ====================
function drawRadar(canvasId, radar) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const R = Math.min(W, H) / 2 - 46;
  const dims = RADAR_DIMS;
  const n = dims.length;

  ctx.clearRect(0, 0, W, H);

  // 背景网格（4层六边形）
  for (let ring = 1; ring <= 4; ring++) {
    const rr = R * ring / 4;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const ang = -Math.PI / 2 + (i % n) * (2 * Math.PI / n);
      const x = cx + rr * Math.cos(ang);
      const y = cy + rr * Math.sin(ang);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(120,110,90,0.18)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  // 轴线
  for (let i = 0; i < n; i++) {
    const ang = -Math.PI / 2 + i * (2 * Math.PI / n);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + R * Math.cos(ang), cy + R * Math.sin(ang));
    ctx.strokeStyle = 'rgba(120,110,90,0.15)';
    ctx.stroke();
  }

  // 数据多边形
  ctx.beginPath();
  const pts = [];
  for (let i = 0; i < n; i++) {
    const val = (radar[dims[i].key] || 50) / 100;
    const ang = -Math.PI / 2 + i * (2 * Math.PI / n);
    const x = cx + R * val * Math.cos(ang);
    const y = cy + R * val * Math.sin(ang);
    pts.push([x, y]);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(160,130,70,0.22)';
  ctx.fill();
  ctx.strokeStyle = '#a0823c';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 数据点
  pts.forEach(([x, y]) => {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#a0823c';
    ctx.fill();
  });

  // 标签
  ctx.font = '13px "Noto Sans SC", sans-serif';
  ctx.fillStyle = '#8a8070';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 0; i < n; i++) {
    const ang = -Math.PI / 2 + i * (2 * Math.PI / n);
    const lx = cx + (R + 26) * Math.cos(ang);
    const ly = cy + (R + 22) * Math.sin(ang);
    ctx.fillText(dims[i].label, lx, ly);
  }
}

// ==================== 结果页 ====================
function showResult() {
  const ranked = getTopWriters();
  const top = ranked[0];
  const detail = WRITER_DETAILS[top.id];
  const rankIndex = WRITERS.findIndex(w => w.id === top.id) + 1;

  document.getElementById('quiz-page').classList.remove('active');
  document.getElementById('result-page').classList.add('active');

  const scroll = document.getElementById('result-scroll');
  scroll.innerHTML = `
    <!-- ① 分享卡片 -->
    <div class="share-card fade-enter">
      <div class="share-title">你 的 作 家 灵 魂 是</div>
      <div class="share-meta">
        <span class="share-num">N° <em>${toRoman(rankIndex)}</em> / XVI</span>
        <span class="share-series">ANIMA LITTERARIA<br><small>文 学 灵 魂 索 引</small></span>
      </div>
      <div class="share-writer-en" style="color:${top.color}">${top.enName}</div>
      <div class="share-writer-name">${top.name}</div>
      <div class="share-writer-years">${top.years.replace('-', ' — ')}</div>
      <div class="share-divider"><span>✦</span></div>
      <div class="share-stanzas">
        ${detail.shareStanzas.map(st => `<p>${st.join('<br>')}</p>`).join('')}
      </div>
      <div class="share-quote">
        <div class="share-quote-text">${detail.quote.text}</div>
        <div class="share-quote-src">— 《${detail.quote.source.replace(/[《》]/g, '')}》</div>
      </div>
      <div class="share-footer">
        <span class="share-book">《文学灵魂之书》<br><em>A Book of Literary Souls</em></span>
        <span class="share-affinity">AFFINITY <strong>${top.percentage}%</strong></span>
      </div>
    </div>

    <!-- ② 他的创作动机 -->
    <div class="result-section fade-enter" style="animation-delay:0.1s">
      <div class="section-head">他 的 创 作 动 机</div>
      <div class="motive-box">
        <div class="motive-quote">
          <div class="motive-quote-text">${detail.quote.text}</div>
          <div class="motive-quote-src">— 《${detail.quote.source.replace(/[《》]/g, '')}》</div>
        </div>
        <div class="motive-divider"></div>
        ${detail.motive.map(p => `<p class="motive-p">${boldify(p)}</p>`).join('')}
      </div>
    </div>

    <!-- ③ 共享文学DNA -->
    <div class="result-section fade-enter" style="animation-delay:0.15s">
      <div class="section-head">你 们 共 享 的 文 学 D N A</div>
      <div class="dna-wrap">
        ${detail.dna.map((d, i) => `<span class="dna-tag" style="border-color:${top.color}">${d}</span>`).join('')}
      </div>
    </div>

    <!-- ④ 灵魂分析 -->
    <div class="result-section fade-enter" style="animation-delay:0.2s">
      <div class="section-head">灵 魂 分 析</div>
      <div class="analysis-box">
        ${detail.analysis.map(p => `<p class="analysis-p">${p}</p>`).join('')}
        <div class="pull-quote">${detail.pullQuote}</div>
      </div>
    </div>

    <!-- ⑤ 气质雷达图 -->
    <div class="result-section fade-enter" style="animation-delay:0.25s">
      <div class="section-head">气 质 雷 达 图</div>
      <div class="radar-box">
        <canvas id="radar-canvas" width="300" height="300"></canvas>
        <div class="radar-legend">
          ${RADAR_DIMS.map(d => `
            <div class="radar-legend-item">
              <span class="radar-dot" style="background:${d.color}"></span>
              <span class="radar-label">${d.label}</span>
              <span class="radar-value">${detail.radar[d.key]}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- ⑥ 你的文学家族 -->
    <div class="result-section fade-enter" style="animation-delay:0.3s">
      <div class="section-head">你 的 文 学 家 族</div>
      <div class="family-list">
        ${ranked.slice(0, 3).map((w, i) => `
          <div class="family-item">
            <div class="family-rank" style="background:${w.color}">${['I','II','III'][i]}</div>
            <div class="family-info">
              <div class="family-name">${w.name}</div>
              <div class="family-sub">${w.enName} · ${w.keyword}</div>
            </div>
            <div class="family-pct" style="color:${w.color}">${w.percentage}%</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ⑦ 他会对你说 -->
    <div class="result-section fade-enter" style="animation-delay:0.35s">
      <div class="section-head">他 会 对 你 说</div>
      <div class="letter-box">
        <p class="letter-p">${top.letter}</p>
        <div class="letter-sign">—— ${top.name}</div>
      </div>
    </div>

    <!-- ⑧ 为你推荐的书 -->
    <div class="result-section fade-enter" style="animation-delay:0.4s">
      <div class="section-head">为 你 推 荐 的 书</div>
      <div class="books-wrap">
        ${top.books.map(b => `
          <div class="book-card">
            <div class="book-title">${b.title}</div>
            <div class="book-author">${b.author}</div>
            <div class="book-reason">${b.reason}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ⑨ 操作按钮 -->
    <button class="btn-restart fade-enter" style="animation-delay:0.45s" onclick="restartQuiz()">重 新 测 试</button>
  `;

  window.scrollTo(0, 0);

  // 绘制雷达图
  setTimeout(() => drawRadar('radar-canvas', detail.radar), 100);
}

function restartQuiz() {
  document.getElementById('result-page').classList.remove('active');
  document.getElementById('cover-page').classList.add('active');
  window.scrollTo(0, 0);
}

// ==================== 启动 ====================
init();
