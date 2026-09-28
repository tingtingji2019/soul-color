// ==================== 16位作家 ====================
const WRITERS = [
  {
    id: 'salinger', name: '塞林格', enName: 'J.D. Salinger', years: '1919-2010',
    keyword: '真实 / 疏离', color: '#6a7e68',
    desc: '你像塞林格一样，对虚伪的世界保持警惕，对真实有着近乎执拗的追求。你内心柔软却外表疏离，在人群中感到孤独，在独处时反而自在。',
    traits: ['拒绝虚伪', '内心柔软', '观察者', '精神洁癖'],
    shadow: '你对真实的执着有时让你与世界格格不入。但请记住，保持真实不等于拒绝连接。',
    letter: '我知道你觉得这个世界太吵、太假。但你知道吗，你的敏感和真实，正是这个世界最缺少的东西。不需要改变自己去迎合，只需要找到那些和你一样真实的人。',
    books: [{ title: '《麦田里的守望者》', author: '塞林格', reason: '霍尔顿就是另一个你——拒绝长大，拒绝虚伪，只想守护纯真。' }, { title: '《九故事》', author: '塞林格', reason: '短篇里的每一个灵魂，都和你一样在寻找真实。' }]
  },
  {
    id: 'woolf', name: '伍尔夫', enName: 'Virginia Woolf', years: '1882-1941',
    keyword: '意识 / 流动', color: '#686898',
    desc: '你的意识像河流一样不停流动。你对细微的感受有着惊人的捕捉力，一个眼神、一阵风、一束光都能在你心中掀起波澜。你活在感受的深处。',
    traits: ['感受力极强', '意识流动', '细腻敏感', '内在丰富'],
    shadow: '你的感受力是天赋也是负担。情绪的海浪有时会将你淹没，学会在感受与理性之间找到锚点。',
    letter: '你的内心世界比大多数人看到的要深邃得多。那些别人觉得"想太多"的时刻，其实是你在用另一种方式理解世界。给自己一间"自己的房间"，让思绪自由流淌。',
    books: [{ title: '《到灯塔去》', author: '伍尔夫', reason: '意识流的经典，你会在其中看到自己思维的影子。' }, { title: '《一间自己的房间》', author: '伍尔夫', reason: '写给每一个需要精神空间的灵魂。' }]
  },
  {
    id: 'fitzgerald', name: '菲茨杰拉德', enName: 'F. Scott Fitzgerald', years: '1896-1940',
    keyword: '幻梦 / 消逝', color: '#a08850',
    desc: '你像盖茨比一样，心中永远有一盏绿灯。你追求美好，相信梦想，即使知道一切终将消逝，依然愿意全力以赴地爱、全力以赴地活。',
    traits: ['浪漫主义', '追求美好', '理想化', '深情'],
    shadow: '你对美好的执着有时让你忽视现实。梦很美，但也要学会在梦醒之后继续前行。',
    letter: '你心里那盏绿灯从未熄灭。你知道它可能永远够不到，但你依然向着它奔跑。这份勇气本身就值得敬佩。只是别忘了，沿途的风景也是生命的一部分。',
    books: [{ title: '《了不起的盖茨比》', author: '菲茨杰拉德', reason: '你会懂盖茨比对那盏绿灯的执着，因为你也一样。' }, { title: '《夜色温柔》', author: '菲茨杰拉德', reason: '关于才华、爱情与幻灭，你会在其中看到自己的影子。' }]
  },
  {
    id: 'irving', name: '约翰·欧文', enName: 'John Irving', years: '1942-',
    keyword: '命运 / 温情', color: '#b06040',
    desc: '你相信命运的安排，相信每一个相遇都有意义。你的内心有着深沉的温情，对家人、朋友、甚至陌生人都有着天然的关怀。你用温暖的眼光看世界。',
    traits: ['相信命运', '温情脉脉', '故事感强', '关怀他人'],
    shadow: '你对温情的渴望有时让你害怕失去。但真正的连接不会因为距离而消失。',
    letter: '你相信一切都有安排，这份信念让你在困难时也能保持希望。你的温暖是周围人的光。但也要记得，你同样值得被温暖对待。',
    books: [{ title: '《盖普眼中的世界》', author: '约翰·欧文', reason: '关于命运、家庭和成长的故事，与你的灵魂共鸣。' }, { title: '《苹果酒屋的规则》', author: '约翰·欧文', reason: '温情与道德的交织，你会在其中找到答案。' }]
  },
  {
    id: 'maugham', name: '毛姆', enName: 'W. Somerset Maugham', years: '1874-1965',
    keyword: '旁观 / 世故', color: '#7a8a78',
    desc: '你像毛姆一样，习惯站在人群之外观察。你看得透人情世故，却选择不参与其中。你的冷静不是冷漠，而是一种清醒的选择。',
    traits: ['冷静旁观', '洞察人性', '清醒独立', '不随波逐流'],
    shadow: '你的旁观者视角让你清醒，但也可能让你错过投入生活的乐趣。有时候，下场参与也是一种勇气。',
    letter: '你总是看得太清楚，这让你少了很多盲目的快乐，但也让你活得更明白。世界需要清醒的人，但也需要偶尔糊涂一下。试着在某件事上全情投入一次吧。',
    books: [{ title: '《月亮与六便士》', author: '毛姆', reason: '关于理想与现实的永恒命题，你会懂那种挣扎。' }, { title: '《人性的枷锁》', author: '毛姆', reason: '一个灵魂寻找自由的故事，与你同频。' }]
  },
  {
    id: 'mishima', name: '三岛由纪夫', enName: 'Yukio Mishima', years: '1925-1970',
    keyword: '美 / 极致', color: '#b83030',
    desc: '你追求极致的美，无论是文字、身体还是精神。你不接受平庸，不满足于"差不多"。你用燃烧的方式活着，宁可短暂绚烂，不要漫长平淡。',
    traits: ['追求极致', '美学至上', '意志坚定', '不妥协'],
    shadow: '你对极致的追求可能让你对自己和他人过于苛刻。美有很多种，不完美也是一种美。',
    letter: '你对美的执着让人敬佩。但亲爱的，不是所有事物都需要达到极致才有价值。有时候，粗糙的、未完成的、有瑕疵的，反而更真实、更动人。',
    books: [{ title: '《金阁寺》', author: '三岛由纪夫', reason: '关于美与毁灭的极致书写，你会深深共鸣。' }, { title: '《假面的告白》', author: '三岛由纪夫', reason: '对真实自我的探索，与你内心的挣扎呼应。' }]
  },
  {
    id: 'qiu', name: '邱妙津', enName: 'Qiu Miaojin', years: '1969-1995',
    keyword: '绝对 / 燃烧', color: '#5068a0',
    desc: '你追求绝对的爱、绝对的真诚、绝对的存在。你的情感浓烈到近乎燃烧，你无法接受任何模棱两可。你用全部的生命力去爱、去感受、去活着。',
    traits: ['情感绝对', '全情投入', '真诚极致', '生命力强'],
    shadow: '你的绝对主义让你活得浓烈，但也容易受伤。世界不是非黑即白，灰色地带也有它的价值。',
    letter: '你的爱是全力以赴的，这份勇气不是每个人都有。但请记得，爱别人的同时也要爱自己。你值得被温柔对待，包括被你自己。',
    books: [{ title: '《鳄鱼手记》', author: '邱妙津', reason: '关于爱与存在的极致书写，你会在其中找到自己。' }, { title: '《蒙马特遗书》', author: '邱妙津', reason: '一封封灵魂的信，与你内心的声音共振。' }]
  },
  {
    id: 'duras', name: '杜拉斯', enName: 'Marguerite Duras', years: '1914-1996',
    keyword: '欲望 / 碎裂', color: '#b87040',
    desc: '你的情感像碎裂的镜子，每一片都折射出不同的光。你敢于面对欲望，不回避痛苦，在破碎中找到美。你的文字和灵魂都带着一种危险的吸引力。',
    traits: ['敢于面对欲望', '破碎中找美', '危险魅力', '情感复杂'],
    shadow: '你对破碎的迷恋有时让你回避完整和幸福。允许自己拥有平静的快乐，不代表背叛你的深度。',
    letter: '你的灵魂有一种别人无法复制的魅力。那些痛苦和破碎塑造了你的深度，但你同样值得拥有完整的、平静的幸福。不要害怕快乐。',
    books: [{ title: '《情人》', author: '杜拉斯', reason: '关于欲望与记忆的经典，你会懂那种复杂的感受。' }, { title: '《广岛之恋》', author: '杜拉斯', reason: '爱与痛的交织，与你灵魂深处的节奏一致。' }]
  },
  {
    id: 'camus', name: '加缪', enName: 'Albert Camus', years: '1913-1960',
    keyword: '荒诞 / 反抗', color: '#508888',
    desc: '你看透了世界的荒诞，但选择反抗而非屈服。你不相信虚无，不相信命运，只相信自己的行动。你在无意义中创造意义，在荒诞中保持尊严。',
    traits: ['反抗精神', '清醒独立', '行动派', '尊严感强'],
    shadow: '你的反抗精神让你坚强，但也可能让你过于紧绷。有时候，接受世界的荒诞也是一种解脱。',
    letter: '你像西西弗斯一样，知道石头会滚下来，依然选择推上去。这份勇气令人敬佩。但别忘了，推石头的路上也可以看看风景。',
    books: [{ title: '《局外人》', author: '加缪', reason: '关于荒诞与真实的经典，你会深深共鸣。' }, { title: '《鼠疫》', author: '加缪', reason: '在荒诞中反抗的故事，与你的精神同频。' }]
  },
  {
    id: 'atwood', name: '阿特伍德', enName: 'Margaret Atwood', years: '1939-',
    keyword: '预言 / 权力', color: '#607858',
    desc: '你有着超越时代的洞察力。你关注权力结构、社会议题，对不公有着敏锐的感知和强烈的不满。你用文字作为武器，为无声者发声。',
    traits: ['社会洞察', '关注权力', '为弱者发声', '前瞻性思维'],
    shadow: '你对不公的敏感让你成为优秀的观察者，但也可能让你过度消耗在愤怒中。找到平衡，让愤怒转化为建设性的力量。',
    letter: '你看到的比大多数人多，这份洞察力是礼物也是负担。你的声音很重要，但也要记得照顾好自己的内心。改变世界之前，先让自己好好的。',
    books: [{ title: '《使女的故事》', author: '阿特伍德', reason: '关于权力与反抗的预言，与你的关切深度契合。' }, { title: '《盲刺客》', author: '阿特伍德', reason: '叙事的力量，你会懂文字如何改变世界。' }]
  },
  {
    id: 'chandl', name: '钱德勒', enName: 'Raymond Chandler', years: '1888-1959',
    keyword: '孤独 / 骑士', color: '#887058',
    desc: '你像硬汉派侦探一样，外表冷硬内心柔软。你独来独往，但心中有一套不可动摇的道德准则。你在黑暗的城市里行走，却始终守护着自己的光。',
    traits: ['外冷内热', '道德准则', '独行侠', '守护正义'],
    shadow: '你的独立和坚强有时让你拒绝帮助。但即使是硬汉也需要偶尔放下铠甲。',
    letter: '你在这座城市里独自走着，像那个永远不低头的侦探。你的坚持和原则让人敬佩。但偶尔也可以停下来，让别人为你做点什么。',
    books: [{ title: '《漫长的告别》', author: '钱德勒', reason: '关于友谊与忠诚的硬汉故事，与你的灵魂共鸣。' }, { title: '《长眠不醒》', author: '钱德勒', reason: '黑暗中的正义之光，你会懂那种坚持。' }]
  },
  {
    id: 'vonnegut', name: '冯内古特', enName: 'Kurt Vonnegut', years: '1922-2007',
    keyword: '悲悯 / 玩笑', color: '#907898',
    desc: '你用幽默面对悲伤，用玩笑消解痛苦。你看透了世界的荒谬，却选择用笑声回应。你的幽默背后是深深的悲悯，你的玩笑里藏着最真的关怀。',
    traits: ['黑色幽默', '悲悯之心', '看透不说透', '温暖有趣'],
    shadow: '你用幽默保护自己，但有时也需要直面痛苦。笑声是良药，但不能替代真正的疗愈。',
    letter: '你的幽默是你最强大的武器，也是你最温柔的铠甲。但亲爱的，你不需要总是用笑来掩饰。在你信任的人面前，可以哭，可以脆弱，可以只是存在。',
    books: [{ title: '《五号屠场》', author: '冯内古特', reason: '用幽默书写战争与创伤，与你的方式一致。' }, { title: '《猫的摇篮》', author: '冯内古特', reason: '荒诞中的悲悯，你会懂那种笑中带泪。' }]
  },
  {
    id: 'cioran', name: '齐奥朗', enName: 'Emil Cioran', years: '1911-1995',
    keyword: '失眠 / 格言', color: '#4a4a5a',
    desc: '你是深夜的思想者。失眠对你来说不是痛苦，而是思考的礼物。你用格言式的语言捕捉存在的本质，在黑暗中写出最锋利的文字。',
    traits: ['深夜思考者', '格言式表达', '存在主义', '锋利洞察'],
    shadow: '你的深度思考有时让你陷入虚无。思想是工具，不是目的——别忘了用它来更好地生活。',
    letter: '你在别人睡觉的时候思考，在别人欢笑的时候追问。这份深度让你与众不同。但偶尔也让自己睡个好觉吧，世界不会因为你的休息而崩塌。',
    books: [{ title: '《解体概要》', author: '齐奥朗', reason: '格言式的哲学思考，与你的思维方式一致。' }, { title: '《在绝望之巅》', author: '齐奥朗', reason: '在黑暗中寻找光芒，你会懂那种感受。' }]
  },
  {
    id: 'christie', name: '阿加莎', enName: 'Agatha Christie', years: '1890-1976',
    keyword: '秩序 / 洞察', color: '#8a7060',
    desc: '你有着惊人的观察力和逻辑推理能力。你善于从细节中发现真相，在混乱中建立秩序。你的冷静和理性让你成为人群中最可靠的人。',
    traits: ['逻辑清晰', '细节敏锐', '建立秩序', '冷静可靠'],
    shadow: '你对秩序的追求有时让你对混乱过于焦虑。生活本质上是无序的，学会在不确定中保持平静。',
    letter: '你的理性和洞察力是你的超能力。但生活不是推理小说，不是所有事情都有答案。有时候，"不知道"也是一种答案。',
    books: [{ title: '《无人生还》', author: '阿加莎', reason: '精密的逻辑与人性洞察，与你的思维方式契合。' }, { title: '《东方快车谋杀案》', author: '阿加莎', reason: '真相背后的复杂性，你会欣赏那种深度。' }]
  },
  {
    id: 'hesse', name: '黑塞', enName: 'Hermann Hesse', years: '1877-1962',
    keyword: '寻找 / 两个灵魂', color: '#5a8a6a',
    desc: '你的心里住着两个灵魂，一个向往世俗，一个追求精神。你终其一生在寻找自我，在两条路之间徘徊。你的旅程本身就是答案。',
    traits: ['自我探索', '精神追求', '双重性', '永不停歇'],
    shadow: '你的寻找让你丰富，但也可能让你永远无法安定。有时候，"到了"也是一种答案。',
    letter: '你一直在路上，寻找那个完整的自己。但你知道吗，两个灵魂不需要合并，它们可以共存。你的矛盾本身就是你的美。',
    books: [{ title: '《悉达多》', author: '黑塞', reason: '关于自我寻找的旅程，与你的灵魂深度共鸣。' }, { title: '《荒原狼》', author: '黑塞', reason: '两个灵魂的挣扎，你会在其中看到自己。' }]
  },
  {
    id: 'dostoevsky', name: '陀思妥耶夫斯基', enName: 'Fyodor Dostoevsky', years: '1821-1881',
    keyword: '深渊 / 救赎', color: '#6a3030',
    desc: '你敢于直视人性的深渊，相信痛苦是通向救赎的路。你对灵魂深处的黑暗有着非凡的承受力，在绝望中寻找信仰，在痛苦中寻找意义。',
    traits: ['直面深渊', '精神深度', '信仰力量', '承受痛苦'],
    shadow: '你对深度的追求有时让你沉溺于痛苦。救赎不一定来自痛苦，快乐也可以是通往光明的路。',
    letter: '你敢于走进别人不敢去的地方，这份勇气令人敬畏。但请记住，你不需要通过痛苦来证明自己的深度。阳光下的快乐同样有价值。',
    books: [{ title: '《罪与罚》', author: '陀思妥耶夫斯基', reason: '关于罪与救赎的深度探索，与你的灵魂共鸣。' }, { title: '《卡拉马佐夫兄弟》', author: '陀思妥耶夫斯基', reason: '信仰、自由与爱的终极追问，你会在其中找到答案。' }]
  }
];

// ==================== 32道测试题目 ====================
const QUESTIONS_RAW = [
  {
    category: '关于一个瞬间',
    text: '洗碗、走路或等人的时候忽然愣住，那一刻你脑子里最可能在想什么？',
    options: [
      { text: '刚才那件事，我是不是处理得不够好', scores: { salinger: 2, maugham: 2, christie: 1 } },
      { text: '如果当初做了另一个选择，现在会怎样', scores: { fitzgerald: 2, hesse: 2, woolf: 1 } },
      { text: '什么都不想，就享受这一刻的空白', scores: { camus: 2, chandl: 2, vonnegut: 1 } },
      { text: '突然冒出一个新想法，迫不及待想试试', scores: { atwood: 2, mishima: 1, duras: 1 } }
    ]
  },
  {
    category: '关于失眠',
    text: '凌晨三点还醒着，你的脑子在做什么？',
    options: [
      { text: '反复回放白天说过的话，分析哪里不妥', scores: { salinger: 2, maugham: 2, christie: 1 } },
      { text: '思绪像河流一样不停流淌，停不下来', scores: { woolf: 3, cioran: 2 } },
      { text: '在想明天要做的事，列计划', scores: { atwood: 2, christie: 2, irving: 1 } },
      { text: '享受这份安静，全世界都睡了只有我醒着', scores: { cioran: 3, chandl: 2, camus: 1 } }
    ]
  },
  {
    category: '关于小孩',
    text: '在公园看到一群小孩在玩耍，你最先注意到什么？',
    options: [
      { text: '某个孩子脸上的表情，快乐还是不安', scores: { salinger: 2, woolf: 2, irving: 1 } },
      { text: '他们之间的互动方式，谁在主导谁在跟随', scores: { maugham: 2, christie: 2, atwood: 1 } },
      { text: '想加入他们，一起玩耍', scores: { vonnegut: 2, irving: 2, fitzgerald: 1 } },
      { text: '想起自己的童年，陷入回忆', scores: { hesse: 2, qiu: 2, duras: 1 } }
    ]
  },
  {
    category: '关于身体',
    text: '站在镜子前看自己的身体，你的第一感觉是？',
    options: [
      { text: '这是我的容器，我在意它但不执着于它', scores: { camus: 2, maugham: 2, chandl: 1 } },
      { text: '想让它变得更好，开始规划运动计划', scores: { mishima: 3, atwood: 1 } },
      { text: '觉得它承载了太多情绪和故事', scores: { woolf: 2, duras: 2, qiu: 1 } },
      { text: '不太在意，身体只是存在的工具', scores: { cioran: 2, dostoevsky: 2, vonnegut: 1 } }
    ]
  },
  {
    category: '关于一个完美的下午',
    text: '什么样的下午让你觉得"活着真好"？',
    options: [
      { text: '一个人待在安静的房间，看书或发呆', scores: { salinger: 2, cioran: 2, woolf: 1 } },
      { text: '和一群好朋友在一起，笑声不断', scores: { vonnegut: 2, irving: 2, fitzgerald: 1 } },
      { text: '在大自然里，感受风和阳光', scores: { hesse: 2, camus: 2, irving: 1 } },
      { text: '完成了一件有挑战性的事，充满成就感', scores: { mishima: 2, atwood: 2, christie: 1 } }
    ]
  },
  {
    category: '关于爱里的极限',
    text: '你最爱的人对你说"我爱你，但没有那么强烈"，你会？',
    options: [
      { text: '理解并尊重，爱的方式本来就不一样', scores: { maugham: 2, camus: 2, christie: 1 } },
      { text: '内心翻涌，但表面保持平静', scores: { salinger: 2, chandl: 2, cioran: 1 } },
      { text: '无法接受，要么全部要么没有', scores: { qiu: 3, mishima: 2 } },
      { text: '开始反思是不是自己要求太多', scores: { fitzgerald: 2, hesse: 2, woolf: 1 } }
    ]
  },
  {
    category: '关于受伤之后',
    text: '经历了一件很受伤的事，你的第一反应是？',
    options: [
      { text: '躲起来，独自消化，不想让任何人看到', scores: { salinger: 2, cioran: 2, chandl: 1 } },
      { text: '找信任的人倾诉，把情绪释放出来', scores: { irving: 2, vonnegut: 2, fitzgerald: 1 } },
      { text: '分析为什么会这样，从中吸取教训', scores: { christie: 2, maugham: 2, atwood: 1 } },
      { text: '用创作或行动来转化这份痛苦', scores: { duras: 2, dostoevsky: 2, qiu: 1 } }
    ]
  },
  {
    category: '关于自己最不愿承认的',
    text: '心里有一个自己都觉得不太好的想法，你会怎么对待它？',
    options: [
      { text: '正视它，分析它从哪来，为什么会有', scores: { dostoevsky: 2, christie: 2, maugham: 1 } },
      { text: '压抑它，不让它影响自己的行为', scores: { chandl: 2, salinger: 2, camus: 1 } },
      { text: '接受它，人本来就有阴暗面', scores: { duras: 2, cioran: 2, vonnegut: 1 } },
      { text: '想办法改变它，不想成为那样的人', scores: { hesse: 2, irving: 2, fitzgerald: 1 } }
    ]
  },
  {
    category: '关于意外',
    text: '朋友跟你讲述一段荒诞的遭遇，你的反应是？',
    options: [
      { text: '太有意思了！追问每一个细节', scores: { christie: 2, vonnegut: 2, atwood: 1 } },
      { text: '安静地听，在心里分析整件事的脉络', scores: { maugham: 2, camus: 2, salinger: 1 } },
      { text: '觉得世界真奇妙，什么都可能发生', scores: { cioran: 2, duras: 2, woolf: 1 } },
      { text: '关心朋友现在还好不好', scores: { irving: 2, hesse: 2, fitzgerald: 1 } }
    ]
  },
  {
    category: '关于一个人的夜',
    text: '深夜独自走在城市的街道上，你最熟悉的感觉是？',
    options: [
      { text: '自由，终于不用扮演任何角色', scores: { camus: 2, chandl: 2, cioran: 1 } },
      { text: '孤独，但享受这种孤独', scores: { salinger: 2, woolf: 2, hesse: 1 } },
      { text: '灵感涌现，很多想法在脑海里碰撞', scores: { woolf: 2, duras: 2, atwood: 1 } },
      { text: '平静，像被整个城市温柔地包裹', scores: { irving: 2, vonnegut: 2, fitzgerald: 1 } }
    ]
  },
  {
    category: '关于一个细节',
    text: '见到许久未见的朋友，你最先注意到什么变化？',
    options: [
      { text: '眼神，一个人的眼神藏不住秘密', scores: { salinger: 2, woolf: 2, duras: 1 } },
      { text: '气质和状态，整个人是舒展还是紧绷', scores: { maugham: 2, christie: 2, atwood: 1 } },
      { text: '穿着打扮，外在是内心的投射', scores: { mishima: 2, fitzgerald: 2, duras: 1 } },
      { text: '说话的方式，语气里藏着经历', scores: { hesse: 2, irving: 2, qiu: 1 } }
    ]
  },
  {
    category: '关于一种气味',
    text: '闻到某种气味突然回到多年前的场景，这种事对你来说？',
    options: [
      { text: '经常发生，我的记忆和感官紧密相连', scores: { woolf: 3, duras: 2 } },
      { text: '很珍贵的体验，像收到时间的礼物', scores: { fitzgerald: 2, hesse: 2, irving: 1 } },
      { text: '偶尔会有，但不会太在意', scores: { maugham: 2, chandl: 2, camus: 1 } },
      { text: '不太有这种体验，我活在当下', scores: { mishima: 2, atwood: 2, christie: 1 } }
    ]
  },
  {
    category: '关于一桌人',
    text: '聚餐时你感觉到有人在撒谎，你会？',
    options: [
      { text: '看破不说破，心里有数就好', scores: { maugham: 2, chandl: 2, christie: 1 } },
      { text: '观察其他人有没有发现', scores: { christie: 2, salinger: 2, atwood: 1 } },
      { text: '找个合适的时机私下提醒', scores: { irving: 2, hesse: 2, fitzgerald: 1 } },
      { text: '直接戳穿，受不了虚假', scores: { qiu: 2, mishima: 2, camus: 1 } }
    ]
  },
  {
    category: '关于让你受不了的人',
    text: '哪种人最让你无法忍受？',
    options: [
      { text: '虚伪的人，表里不一', scores: { salinger: 2, qiu: 2, camus: 1 } },
      { text: '肤浅的人，从不深入思考', scores: { cioran: 2, woolf: 2, dostoevsky: 1 } },
      { text: '控制欲强的人，喜欢支配别人', scores: { atwood: 2, chandl: 2, camus: 1 } },
      { text: '消极的人，永远在抱怨', scores: { vonnegut: 2, mishima: 2, irving: 1 } }
    ]
  },
  {
    category: '关于一条新闻',
    text: '看到一条奇怪但确实存在的新法律，你的第一反应是？',
    options: [
      { text: '研究背后的原因和逻辑', scores: { christie: 2, atwood: 2, maugham: 1 } },
      { text: '觉得世界真荒诞，但又合理', scores: { camus: 2, vonnegut: 2, cioran: 1 } },
      { text: '想想这对自己有什么影响', scores: { salinger: 2, chandl: 2, hesse: 1 } },
      { text: '一笑而过，世界本来就疯狂', scores: { vonnegut: 2, duras: 2, fitzgerald: 1 } }
    ]
  },
  {
    category: '关于内心的两个声音',
    text: '心里有两种完全相反的渴望在拉扯，你会？',
    options: [
      { text: '允许它们共存，矛盾也是生命的一部分', scores: { hesse: 3, duras: 2 } },
      { text: '必须做出选择，不能一直犹豫', scores: { mishima: 2, qiu: 2, camus: 1 } },
      { text: '深入分析哪个更符合真实的自己', scores: { salinger: 2, dostoevsky: 2, woolf: 1 } },
      { text: '先放一放，时间会给出答案', scores: { irving: 2, maugham: 2, vonnegut: 1 } }
    ]
  },
  {
    category: '关于一场灾难',
    text: '看到一场大型悲剧的新闻报道后，你心里剩下最多的是什么？',
    options: [
      { text: '对人类命运的深深悲悯', scores: { dostoevsky: 2, woolf: 2, hesse: 1 } },
      { text: '想要做点什么来改变', scores: { atwood: 2, camus: 2, irving: 1 } },
      { text: '对生命脆弱性的深刻认知', scores: { cioran: 2, maugham: 2, chandl: 1 } },
      { text: '一种说不清的无力感', scores: { fitzgerald: 2, duras: 2, qiu: 1 } }
    ]
  },
  {
    category: '关于一对夫妻',
    text: '你觉得结婚十年的夫妻，最容易在什么地方出问题？',
    options: [
      { text: '不再真正倾听对方', scores: { woolf: 2, salinger: 2, irving: 1 } },
      { text: '失去了对彼此的好奇心', scores: { maugham: 2, duras: 2, hesse: 1 } },
      { text: '日常琐碎消磨了激情', scores: { fitzgerald: 2, qiu: 2, mishima: 1 } },
      { text: '各自成长的速度不一致', scores: { atwood: 2, christie: 2, camus: 1 } }
    ]
  },
  {
    category: '关于你自己的底线',
    text: '身边有人做了一件灰色地带但很赚钱的事，你会？',
    options: [
      { text: '理解但不参与，守住自己的线', scores: { maugham: 2, chandl: 2, christie: 1 } },
      { text: '内心纠结，但尊重每个人的选择', scores: { hesse: 2, vonnegut: 2, irving: 1 } },
      { text: '明确反对，有些钱不能赚', scores: { camus: 2, atwood: 2, salinger: 1 } },
      { text: '不评价，每个人有自己的处境', scores: { cioran: 2, dostoevsky: 2, duras: 1 } }
    ]
  },
  {
    category: '关于说出来',
    text: '你很在乎一个人，怎么让他知道？',
    options: [
      { text: '直接用行动证明，不说太多', scores: { chandl: 2, camus: 2, maugham: 1 } },
      { text: '直接说出来，不想留遗憾', scores: { qiu: 2, fitzgerald: 2, mishima: 1 } },
      { text: '用细节和陪伴慢慢表达', scores: { irving: 2, hesse: 2, woolf: 1 } },
      { text: '写下来，文字比语言更准确', scores: { woolf: 2, cioran: 2, duras: 1 } }
    ]
  },
  {
    category: '关于时间',
    text: '以下哪种时间体验你最熟悉？',
    options: [
      { text: '时间像河流，我站在岸边看它流过', scores: { woolf: 2, maugham: 2, hesse: 1 } },
      { text: '时间像螺旋，总在重复相似的模式', scores: { cioran: 2, dostoevsky: 2, camus: 1 } },
      { text: '时间像沙漏，总觉得不够用', scores: { mishima: 2, atwood: 2, qiu: 1 } },
      { text: '时间像树轮，每一圈都有意义', scores: { irving: 2, fitzgerald: 2, vonnegut: 1 } }
    ]
  },
  {
    category: '关于一段重要的往事',
    text: '如果要写下你生命中最重要的一段经历，你会怎么写？',
    options: [
      { text: '像小说一样，有情节有细节有情感', scores: { fitzgerald: 2, irving: 2, duras: 1 } },
      { text: '像日记一样，真实记录当时的感受', scores: { salinger: 2, woolf: 2, qiu: 1 } },
      { text: '像论文一样，分析它对我的影响', scores: { christie: 2, atwood: 2, maugham: 1 } },
      { text: '像诗一样，只留下最精华的感受', scores: { hesse: 2, cioran: 2, mishima: 1 } }
    ]
  },
  {
    category: '关于一句话',
    text: '哪种话最容易激怒你？',
    options: [
      { text: '"你想太多了"', scores: { woolf: 2, cioran: 2, dostoevsky: 1 } },
      { text: '"大家都这样，你有什么特别的"', scores: { salinger: 2, chandl: 2, camus: 1 } },
      { text: '"差不多就行了"', scores: { mishima: 2, qiu: 2, atwood: 1 } },
      { text: '"你这样不行的"', scores: { vonnegut: 2, fitzgerald: 2, irving: 1 } }
    ]
  },
  {
    category: '关于命运',
    text: '回头看自己的人生路径，你最认同哪种说法？',
    options: [
      { text: '一切都是最好的安排', scores: { irving: 2, hesse: 2, fitzgerald: 1 } },
      { text: '命运掌握在自己手里', scores: { camus: 2, atwood: 2, mishima: 1 } },
      { text: '命运是一条河，我只能顺势而行', scores: { woolf: 2, duras: 2, maugham: 1 } },
      { text: '命运是荒诞的，但我选择反抗', scores: { camus: 2, dostoevsky: 2, cioran: 1 } }
    ]
  },
  {
    category: '关于一个混乱的房间',
    text: '回到家发现房间被弄得一团糟，你的第一反应是？',
    options: [
      { text: '深呼吸，开始整理', scores: { christie: 2, atwood: 2, mishima: 1 } },
      { text: '先坐下来，想想是谁干的、为什么', scores: { maugham: 2, camus: 2, chandl: 1 } },
      { text: '无所谓，乱了再整理就好', scores: { vonnegut: 2, duras: 2, woolf: 1 } },
      { text: '感到烦躁，秩序被打破了', scores: { christie: 2, salinger: 2, cioran: 1 } }
    ]
  },
  {
    category: '关于你想拥有的能力',
    text: '如果可以拥有一种超能力，你会选？',
    options: [
      { text: '读心术，了解每个人的真实想法', scores: { salinger: 2, woolf: 2, christie: 1 } },
      { text: '时间旅行，回到过去或去往未来', scores: { fitzgerald: 2, hesse: 2, duras: 1 } },
      { text: '治愈力，让身边的人不再痛苦', scores: { irving: 2, vonnegut: 2, dostoevsky: 1 } },
      { text: '创造力，把想象变成现实', scores: { atwood: 2, mishima: 2, qiu: 1 } }
    ]
  },
  {
    category: '关于痛苦',
    text: '你怎么看待自己经历过的最痛苦的事？',
    options: [
      { text: '它塑造了现在的我，我感谢它', scores: { hesse: 2, camus: 2, irving: 1 } },
      { text: '它让我更深刻地理解了生命', scores: { dostoevsky: 2, woolf: 2, cioran: 1 } },
      { text: '我还在和它和解的路上', scores: { qiu: 2, duras: 2, fitzgerald: 1 } },
      { text: '它让我变得更强大', scores: { mishima: 2, atwood: 2, chandl: 1 } }
    ]
  },
  {
    category: '关于出生这件事',
    text: '你怎么看待"被生下来"这件事？',
    options: [
      { text: '生命本身就是一份礼物', scores: { irving: 2, fitzgerald: 2, vonnegut: 1 } },
      { text: '没有选择权，但既然来了就好好活', scores: { camus: 2, chandl: 2, maugham: 1 } },
      { text: '这是一个深刻的哲学问题', scores: { cioran: 2, dostoevsky: 2, hesse: 1 } },
      { text: '要去创造属于自己的意义', scores: { atwood: 2, mishima: 2, qiu: 1 } }
    ]
  },
  {
    category: '关于一段感情的结束',
    text: '和很重要的人不再在一起了，最后阶段你通常是？',
    options: [
      { text: '已经预感到，平静地接受', scores: { maugham: 2, camus: 2, christie: 1 } },
      { text: '拼命挽回，不甘心就这样结束', scores: { qiu: 2, fitzgerald: 2, duras: 1 } },
      { text: '默默退场，不想让场面太难看', scores: { salinger: 2, chandl: 2, cioran: 1 } },
      { text: '反复问自己到底哪里做错了', scores: { hesse: 2, woolf: 2, dostoevsky: 1 } }
    ]
  },
  {
    category: '关于「成熟」',
    text: '你怎么定义"成熟"？',
    options: [
      { text: '能接纳世界的不完美', scores: { maugham: 2, vonnegut: 2, irving: 1 } },
      { text: '能在痛苦中保持体面', scores: { salinger: 2, chandl: 2, cioran: 1 } },
      { text: '依然保持对世界的好奇', scores: { fitzgerald: 2, woolf: 2, hesse: 1 } },
      { text: '能看清自己并接纳自己', scores: { hesse: 2, dostoevsky: 2, camus: 1 } }
    ]
  },
  {
    category: '关于意义',
    text: '如果有一天你发现人生没有"意义"，你会？',
    options: [
      { text: '那就自己创造意义', scores: { camus: 2, atwood: 2, mishima: 1 } },
      { text: '没有意义也是一种答案', scores: { cioran: 2, duras: 2, chandl: 1 } },
      { text: '在过程中找意义，不在结果里找', scores: { hesse: 2, irving: 2, fitzgerald: 1 } },
      { text: '深入思考这个问题本身就有意义', scores: { dostoevsky: 2, woolf: 2, salinger: 1 } }
    ]
  },
  {
    category: '关于活着这件事',
    text: '用一句话概括你对"活着"的态度？',
    options: [
      { text: '全力以赴地活，不留遗憾', scores: { mishima: 2, qiu: 2, fitzgerald: 1 } },
      { text: '安静地存在，感受每一刻', scores: { woolf: 2, salinger: 2, cioran: 1 } },
      { text: '自由地活，不被任何人定义', scores: { camus: 2, chandl: 2, atwood: 1 } },
      { text: '认真地活，对得起这趟旅程', scores: { hesse: 2, dostoevsky: 2, irving: 1 } }
    ]
  }
];

// 选项颜色（浅蓝色主题下的四种选项色）
const OPTION_COLORS = [
  { bg: '#e4eef6', border: '#b8d4e8', text: '#2c5f8a' },
  { bg: '#e6f0e8', border: '#b8d8c4', text: '#2d6a4a' },
  { bg: '#f0ece4', border: '#d8cbb8', text: '#8a6a3a' },
  { bg: '#ece4f0', border: '#cbb8d8', text: '#6a3a8a' }
];
