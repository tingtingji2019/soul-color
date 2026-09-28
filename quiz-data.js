// ==================== 八种灵魂色彩 ====================
const SOUL_COLORS = [
  {
    id: 'blue',
    name: '深海蓝',
    enName: 'Deep Ocean Blue',
    keyword: '沉静 / 深邃',
    color: '#4a7fb5',
    lightColor: '#e8f0f8',
    desc: '你的灵魂住在大海最深处。表面平静，内心却有着无尽的深度与力量。你善于思考，习惯在沉默中观察世界，在独处中找到真正的自己。',
    traits: ['深度思考者', '安静的力量', '内在丰富', '观察者'],
    shadow: '你有时过于内敛，把太多情绪藏在心底。学会表达脆弱，也是一种勇敢。',
    advice: '你的深度是稀缺的天赋。试着把内心的想法写下来或说出来，你会发现，表达本身就是一种治愈。',
    books: [{ title: '《悉达多》', author: '赫尔曼·黑塞', reason: '一本关于内心探索的书，与你深邃的灵魂共鸣。' }, { title: '《瓦尔登湖》', author: '梭罗', reason: '独处与沉思的经典，你会在其中找到自己。' }],
    letter: '亲爱的朋友，我知道你习惯把世界关在门外，独自面对内心的潮汐。但请记住，深海也有光照进来的时刻。你不需要总是坚强，允许自己被看见，也是一种力量。'
  },
  {
    id: 'white',
    name: '月光白',
    enName: 'Moonlight White',
    keyword: '纯粹 / 理想',
    color: '#8fa8c8',
    lightColor: '#f0f4f8',
    desc: '你的灵魂像月光一样清澈。你追求纯粹与真实，对世界抱有理想主义的信念。你不愿妥协，不愿随波逐流，始终守护着内心的那片净土。',
    traits: ['理想主义者', '追求纯粹', '精神洁癖', '不妥协'],
    shadow: '你对完美的执着有时让你对现实失望。世界不完美，但你的纯粹本身就是一种光芒。',
    advice: '保持你的理想主义，但也学会在不完美中发现美。纯粹不是拒绝世界，而是在看清世界后依然选择相信。',
    books: [{ title: '《月亮与六便士》', author: '毛姆', reason: '关于追求理想的故事，你会懂那种不顾一切的冲动。' }, { title: '《小王子》', author: '圣埃克苏佩里', reason: '写给大人的童话，守护你心中的那个孩子。' }],
    letter: '我知道你常常觉得这个世界不够好，人群不够真。但你的存在本身就在证明——纯粹是可能的。不要害怕与众不同，月光从不需要太阳的认可。'
  },
  {
    id: 'green',
    name: '森林绿',
    enName: 'Forest Green',
    keyword: '生长 / 治愈',
    color: '#5a9e6f',
    lightColor: '#e8f5ec',
    desc: '你的灵魂住在一片安静的森林里。你有着天然的治愈力，身边的人总能在你这里找到安慰。你相信生长，相信时间，相信一切都会慢慢变好。',
    traits: ['治愈者', '温和包容', '相信生长', '自然亲和'],
    shadow: '你总是照顾别人的感受，却常常忽略自己。记住，园丁也需要被浇灌。',
    advice: '你的温柔是这个世界最需要的力量。但也请记得给自己留一片森林，在照顾他人之前，先照顾好自己。',
    books: [{ title: '《解忧杂货店》', author: '东野圭吾', reason: '温暖的治愈故事，像你一样给人力量。' }, { title: '《草木人间》', author: '李娟', reason: '关于自然与生活的书写，你会感受到久违的平静。' }],
    letter: '你总是那个默默支持别人的人，像一棵树，给路过的人遮风挡雨。但今天，我想对你说：你也值得被照顾。累了就停下来，森林不会因为一棵树的休息而消失。'
  },
  {
    id: 'orange',
    name: '暖阳橙',
    enName: 'Warm Sun Orange',
    keyword: '热情 / 创造',
    color: '#e8943a',
    lightColor: '#fef3e6',
    desc: '你的灵魂是一团温暖的火焰。你充满热情与创造力，走到哪里都能点亮周围的空气。你相信行动的力量，喜欢把想法变成现实，用热情感染每一个人。',
    traits: ['行动派', '热情感染', '创造力强', '乐观主义'],
    shadow: '你的热情有时会让你忽略细节，或在不该燃烧的时候耗尽自己。学会节奏，热情才能持久。',
    advice: '你的能量是宝贵的财富。学会在热情与休息之间找到平衡，你的光芒才能持续照亮更多人。',
    books: [{ title: '《人类群星闪耀时》', author: '茨威格', reason: '关于激情与创造力的故事，会让你热血沸腾。' }, { title: '《活着》', author: '余华', reason: '在苦难中依然热爱生活的力量，与你共鸣。' }],
    letter: '你的热情是这个世界的礼物。但亲爱的，火焰也需要燃料。别忘了给自己补充能量，你的光芒值得被持续守护。去创造吧，世界需要你的温度。'
  },
  {
    id: 'purple',
    name: '暮光紫',
    enName: 'Twilight Purple',
    keyword: '神秘 / 灵性',
    color: '#8b6fb0',
    lightColor: '#f3eef8',
    desc: '你的灵魂游走在现实与梦境之间。你有着超越常人的直觉与灵性，能感知到别人忽略的层面。你对神秘事物充满好奇，相信世界不止眼前所见。',
    traits: ['直觉敏锐', '精神探索', '艺术气质', '超然视角'],
    shadow: '你有时过于沉浸在自己的精神世界，与现实脱节。灵性需要扎根，才能开花。',
    advice: '你的直觉是天赋，但也需要理性的锚点。在仰望星空的同时，也记得感受脚下的土地。',
    books: [{ title: '《百年孤独》', author: '马尔克斯', reason: '魔幻与现实的交织，你会在其中看到世界的另一面。' }, { title: '《牧羊少年奇幻之旅》', author: '保罗·柯艾略', reason: '关于追随内心召唤的旅程，与你灵魂同频。' }],
    letter: '你看到的 world 比别人多一层。那些别人觉得"奇怪"的直觉和感受，其实是你灵魂的雷达。不要怀疑自己，这个世界需要能看到更多维度的人。'
  },
  {
    id: 'red',
    name: '烈焰红',
    enName: 'Flame Red',
    keyword: '浓烈 / 极致',
    color: '#c0392b',
    lightColor: '#fdecea',
    desc: '你的灵魂是一团不灭的烈火。你追求极致，无论是爱还是痛，都要全力以赴。你不接受平庸，不满足于浅尝辄止，要用最浓烈的方式活过这一生。',
    traits: ['极致追求', '情感浓烈', '不妥协', '生命力强'],
    shadow: '你对极致的追求有时会让你燃烧过度。不是所有事情都需要全力以赴，学会留白也是一种智慧。',
    advice: '你的浓烈是生命的礼物。但也请学会在适当的时候收一收，让火焰变成温暖的壁炉，而不是燎原的大火。',
    books: [{ title: '《荆棘鸟》', author: '考琳·麦卡洛', reason: '关于极致之爱的故事，你会懂那种飞蛾扑火的勇气。' }, { title: '《红与黑》', author: '司汤达', reason: '野心与激情的碰撞，与你灵魂深处的火焰共鸣。' }],
    letter: '你活得比大多数人都要用力。这份浓烈让人敬佩，但也让人心疼。亲爱的，你不需要每次都燃烧自己来证明活着。有时候，安静地存在，就已经足够美。'
  },
  {
    id: 'gold',
    name: '琥珀金',
    enName: 'Amber Gold',
    keyword: '智慧 / 通透',
    color: '#c8960c',
    lightColor: '#fdf6e3',
    desc: '你的灵魂像琥珀一样，历经时间沉淀而愈发通透。你有着超越年龄的智慧与洞察力，能看透事物的本质。你从容、通透，不被表象迷惑。',
    traits: ['洞察力强', '从容通透', '智慧沉淀', '全局视角'],
    shadow: '你的通透有时让你显得过于冷静，甚至冷漠。智慧也需要温度，理性之外也请保留感性。',
    advice: '你的智慧是岁月给你的礼物。但也请记得，有时候不需要看透一切，允许自己偶尔"糊涂"，也是一种幸福。',
    books: [{ title: '《道德经》', author: '老子', reason: '东方智慧的源头，与你的通透灵魂深度契合。' }, { title: '《沉思录》', author: '马可·奥勒留', reason: '一位帝王的内心独白，你会在其中找到共鸣。' }],
    letter: '你总是看得太清楚，想得太多。这份智慧让你少走了很多弯路，但也让你错过了很多"不知道"的快乐。偶尔放下分析，让自己纯粹地感受一次，好吗？'
  },
  {
    id: 'black',
    name: '暗夜黑',
    enName: 'Midnight Black',
    keyword: '独立 / 自由',
    color: '#2c3e50',
    lightColor: '#eef1f4',
    desc: '你的灵魂属于无边的暗夜。你独立、自由，不愿被任何标签定义。你在黑暗中反而感到自在，因为那里没有目光，没有期待，只有真实的自己。',
    traits: ['独立思考', '拒绝定义', '自由灵魂', '内在坚定'],
    shadow: '你的独立有时变成了一种防御，让你拒绝所有靠近。自由不等于孤独，允许别人走进你的世界。',
    advice: '你的独立是你最强大的铠甲。但也请记得，偶尔卸下铠甲，让别人看到真实的你，并不会让你变弱。',
    books: [{ title: '《局外人》', author: '加缪', reason: '关于拒绝被定义的故事，你会深深共鸣。' }, { title: '《1984》', author: '乔治·奥威尔', reason: '对自由的终极思考，与你灵魂深处的渴望呼应。' }],
    letter: '你不需要向任何人解释自己。你的独立和自由，是这个世界上最珍贵的东西之一。但如果你某天累了，记得——黑暗里也可以有星光，你不需要独自走完所有路。'
  }
];

// ==================== 32道测试题目 ====================
// 每题4个选项，每个选项对应不同灵魂色彩
const QUESTIONS_RAW = [
  {
    category: '关于一个瞬间',
    text: '洗碗、走路或等人的时候忽然愣住，那一刻你脑子里最可能在想什么？',
    options: [
      { text: '刚才那件事，我是不是处理得不够好', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '如果当初做了另一个选择，现在会怎样', color: 'purple', scores: { purple: 3, white: 1 } },
      { text: '什么都不想，就享受这一刻的空白', color: 'green', scores: { green: 3, gold: 1 } },
      { text: '突然冒出一个新想法，迫不及待想试试', color: 'orange', scores: { orange: 3, red: 1 } }
    ]
  },
  {
    category: '关于失眠',
    text: '凌晨三点还醒着，你的脑子在做什么？',
    options: [
      { text: '反复回放白天说过的话，分析哪里不妥', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '思绪像电影一样不停切换，停不下来', color: 'purple', scores: { purple: 3, red: 1 } },
      { text: '在想明天要做的事，列计划', color: 'orange', scores: { orange: 3, gold: 1 } },
      { text: '享受这份安静，全世界都睡了只有我醒着', color: 'black', scores: { black: 3, blue: 1 } }
    ]
  },
  {
    category: '关于小孩',
    text: '在公园看到一群小孩在玩耍，你最先注意到什么？',
    options: [
      { text: '某个孩子脸上的表情，快乐还是不安', color: 'blue', scores: { blue: 3, green: 1 } },
      { text: '他们之间的互动方式，谁在主导谁在跟随', color: 'gold', scores: { gold: 3, black: 1 } },
      { text: '想加入他们，一起玩耍', color: 'orange', scores: { orange: 3, green: 1 } },
      { text: '想起自己的童年，陷入回忆', color: 'purple', scores: { purple: 3, white: 1 } }
    ]
  },
  {
    category: '关于身体',
    text: '站在镜子前看自己的身体，你的第一感觉是？',
    options: [
      { text: '这是我的容器，我在意它但不执着于它', color: 'gold', scores: { gold: 3, black: 1 } },
      { text: '想让它变得更好，开始规划运动计划', color: 'orange', scores: { orange: 3, red: 1 } },
      { text: '觉得它承载了太多情绪和故事', color: 'purple', scores: { purple: 3, blue: 1 } },
      { text: '不太在意，身体只是存在的工具', color: 'black', scores: { black: 3, gold: 1 } }
    ]
  },
  {
    category: '关于一个完美的下午',
    text: '什么样的下午让你觉得"活着真好"？',
    options: [
      { text: '一个人待在安静的房间，看书或发呆', color: 'blue', scores: { blue: 3, black: 1 } },
      { text: '和一群好朋友在一起，笑声不断', color: 'orange', scores: { orange: 3, green: 1 } },
      { text: '在大自然里，感受风和阳光', color: 'green', scores: { green: 3, white: 1 } },
      { text: '完成了一件有挑战性的事，充满成就感', color: 'red', scores: { red: 3, orange: 1 } }
    ]
  },
  {
    category: '关于爱里的极限',
    text: '你最爱的人对你说"我爱你，但没有那么强烈"，你会？',
    options: [
      { text: '理解并尊重，爱的方式本来就不一样', color: 'gold', scores: { gold: 3, green: 1 } },
      { text: '内心翻涌，但表面保持平静', color: 'blue', scores: { blue: 3, black: 1 } },
      { text: '无法接受，要么全部要么没有', color: 'red', scores: { red: 3, purple: 1 } },
      { text: '开始反思是不是自己要求太多', color: 'white', scores: { white: 3, blue: 1 } }
    ]
  },
  {
    category: '关于受伤之后',
    text: '经历了一件很受伤的事，你的第一反应是？',
    options: [
      { text: '躲起来，独自消化，不想让任何人看到', color: 'blue', scores: { blue: 3, black: 1 } },
      { text: '找信任的人倾诉，把情绪释放出来', color: 'green', scores: { green: 3, orange: 1 } },
      { text: '分析为什么会这样，从中吸取教训', color: 'gold', scores: { gold: 3, blue: 1 } },
      { text: '用创作或行动来转化这份痛苦', color: 'purple', scores: { purple: 3, red: 1 } }
    ]
  },
  {
    category: '关于自己最不愿承认的',
    text: '心里有一个自己都觉得不太好的想法，你会怎么对待它？',
    options: [
      { text: '正视它，分析它从哪来，为什么会有', color: 'gold', scores: { gold: 3, blue: 1 } },
      { text: '压抑它，不让它影响自己的行为', color: 'black', scores: { black: 3, blue: 1 } },
      { text: '接受它，人本来就有阴暗面', color: 'purple', scores: { purple: 3, red: 1 } },
      { text: '想办法改变它，不想成为那样的人', color: 'white', scores: { white: 3, orange: 1 } }
    ]
  },
  {
    category: '关于意外',
    text: '朋友跟你讲述一段荒诞的遭遇，你的反应是？',
    options: [
      { text: '太有意思了！追问每一个细节', color: 'orange', scores: { orange: 3, purple: 1 } },
      { text: '安静地听，在心里分析整件事的脉络', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '觉得世界真奇妙，什么都可能发生', color: 'purple', scores: { purple: 3, white: 1 } },
      { text: '关心朋友现在还好不好', color: 'green', scores: { green: 3, white: 1 } }
    ]
  },
  {
    category: '关于一个人的夜',
    text: '深夜独自走在城市的街道上，你最熟悉的感觉是？',
    options: [
      { text: '自由，终于不用扮演任何角色', color: 'black', scores: { black: 3, blue: 1 } },
      { text: '孤独，但享受这种孤独', color: 'blue', scores: { blue: 3, purple: 1 } },
      { text: '灵感涌现，很多想法在脑海里碰撞', color: 'purple', scores: { purple: 3, orange: 1 } },
      { text: '平静，像被整个城市温柔地包裹', color: 'green', scores: { green: 3, white: 1 } }
    ]
  },
  {
    category: '关于一个细节',
    text: '见到许久未见的朋友，你最先注意到什么变化？',
    options: [
      { text: '眼神，一个人的眼神藏不住秘密', color: 'blue', scores: { blue: 3, purple: 1 } },
      { text: '气质和状态，整个人是舒展还是紧绷', color: 'gold', scores: { gold: 3, green: 1 } },
      { text: '穿着打扮，外在是内心的投射', color: 'orange', scores: { orange: 3, red: 1 } },
      { text: '说话的方式，语气里藏着经历', color: 'purple', scores: { purple: 3, blue: 1 } }
    ]
  },
  {
    category: '关于一种气味',
    text: '闻到某种气味突然回到多年前的场景，这种事对你来说？',
    options: [
      { text: '经常发生，我的记忆和感官紧密相连', color: 'purple', scores: { purple: 3, blue: 1 } },
      { text: '很珍贵的体验，像收到时间的礼物', color: 'white', scores: { white: 3, green: 1 } },
      { text: '偶尔会有，但不会太在意', color: 'gold', scores: { gold: 3, black: 1 } },
      { text: '不太有这种体验，我活在当下', color: 'orange', scores: { orange: 3, red: 1 } }
    ]
  },
  {
    category: '关于一桌人',
    text: '聚餐时你感觉到有人在撒谎，你会？',
    options: [
      { text: '看破不说破，心里有数就好', color: 'gold', scores: { gold: 3, black: 1 } },
      { text: '观察其他人有没有发现', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '找个合适的时机私下提醒', color: 'green', scores: { green: 3, white: 1 } },
      { text: '直接戳穿，受不了虚假', color: 'red', scores: { red: 3, black: 1 } }
    ]
  },
  {
    category: '关于让你受不了的人',
    text: '哪种人最让你无法忍受？',
    options: [
      { text: '虚伪的人，表里不一', color: 'white', scores: { white: 3, red: 1 } },
      { text: '肤浅的人，从不深入思考', color: 'blue', scores: { blue: 3, purple: 1 } },
      { text: '控制欲强的人，喜欢支配别人', color: 'black', scores: { black: 3, gold: 1 } },
      { text: '消极的人，永远在抱怨', color: 'orange', scores: { orange: 3, green: 1 } }
    ]
  },
  {
    category: '关于一条新闻',
    text: '看到一条奇怪但确实存在的新法律，你的第一反应是？',
    options: [
      { text: '研究背后的原因和逻辑', color: 'gold', scores: { gold: 3, blue: 1 } },
      { text: '觉得世界真荒诞，但又合理', color: 'purple', scores: { purple: 3, black: 1 } },
      { text: '想想这对自己有什么影响', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '一笑而过，世界本来就疯狂', color: 'orange', scores: { orange: 3, red: 1 } }
    ]
  },
  {
    category: '关于内心的两个声音',
    text: '心里有两种完全相反的渴望在拉扯，你会？',
    options: [
      { text: '允许它们共存，矛盾也是生命的一部分', color: 'purple', scores: { purple: 3, gold: 1 } },
      { text: '必须做出选择，不能一直犹豫', color: 'red', scores: { red: 3, orange: 1 } },
      { text: '深入分析哪个更符合真实的自己', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '先放一放，时间会给出答案', color: 'green', scores: { green: 3, white: 1 } }
    ]
  },
  {
    category: '关于一场灾难',
    text: '看到一场大型悲剧的新闻报道后，你心里剩下最多的是什么？',
    options: [
      { text: '对人类命运的深深悲悯', color: 'blue', scores: { blue: 3, purple: 1 } },
      { text: '想要做点什么来改变', color: 'orange', scores: { orange: 3, red: 1 } },
      { text: '对生命脆弱性的深刻认知', color: 'gold', scores: { gold: 3, black: 1 } },
      { text: '一种说不清的无力感', color: 'purple', scores: { purple: 3, blue: 1 } }
    ]
  },
  {
    category: '关于一对夫妻',
    text: '你觉得结婚十年的夫妻，最容易在什么地方出问题？',
    options: [
      { text: '不再真正倾听对方', color: 'blue', scores: { blue: 3, green: 1 } },
      { text: '失去了对彼此的好奇心', color: 'purple', scores: { purple: 3, white: 1 } },
      { text: '日常琐碎消磨了激情', color: 'red', scores: { red: 3, orange: 1 } },
      { text: '各自成长的速度不一致', color: 'gold', scores: { gold: 3, black: 1 } }
    ]
  },
  {
    category: '关于你自己的底线',
    text: '身边有人做了一件灰色地带但很赚钱的事，你会？',
    options: [
      { text: '理解但不参与，守住自己的线', color: 'gold', scores: { gold: 3, black: 1 } },
      { text: '内心纠结，但尊重每个人的选择', color: 'green', scores: { green: 3, purple: 1 } },
      { text: '明确反对，有些钱不能赚', color: 'white', scores: { white: 3, red: 1 } },
      { text: '不评价，每个人有自己的处境', color: 'black', scores: { black: 3, blue: 1 } }
    ]
  },
  {
    category: '关于说出来',
    text: '你很在乎一个人，怎么让他知道？',
    options: [
      { text: '直接用行动证明，不说太多', color: 'black', scores: { black: 3, blue: 1 } },
      { text: '直接说出来，不想留遗憾', color: 'red', scores: { red: 3, orange: 1 } },
      { text: '用细节和陪伴慢慢表达', color: 'green', scores: { green: 3, white: 1 } },
      { text: '写下来，文字比语言更准确', color: 'purple', scores: { purple: 3, blue: 1 } }
    ]
  },
  {
    category: '关于时间',
    text: '以下哪种时间体验你最熟悉？',
    options: [
      { text: '时间像河流，我站在岸边看它流过', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '时间像螺旋，总在重复相似的模式', color: 'purple', scores: { purple: 3, black: 1 } },
      { text: '时间像沙漏，总觉得不够用', color: 'orange', scores: { orange: 3, red: 1 } },
      { text: '时间像树轮，每一圈都有意义', color: 'green', scores: { green: 3, white: 1 } }
    ]
  },
  {
    category: '关于一段重要的往事',
    text: '如果要写下你生命中最重要的一段经历，你会怎么写？',
    options: [
      { text: '像小说一样，有情节有细节有情感', color: 'purple', scores: { purple: 3, red: 1 } },
      { text: '像日记一样，真实记录当时的感受', color: 'blue', scores: { blue: 3, white: 1 } },
      { text: '像论文一样，分析它对我的影响', color: 'gold', scores: { gold: 3, black: 1 } },
      { text: '像诗一样，只留下最精华的感受', color: 'white', scores: { white: 3, purple: 1 } }
    ]
  },
  {
    category: '关于一句话',
    text: '哪种话最容易激怒你？',
    options: [
      { text: '"你想太多了"', color: 'purple', scores: { purple: 3, blue: 1 } },
      { text: '"大家都这样，你有什么特别的"', color: 'black', scores: { black: 3, red: 1 } },
      { text: '"差不多就行了"', color: 'white', scores: { white: 3, red: 1 } },
      { text: '"你这样不行的"', color: 'orange', scores: { orange: 3, red: 1 } }
    ]
  },
  {
    category: '关于命运',
    text: '回头看自己的人生路径，你最认同哪种说法？',
    options: [
      { text: '一切都是最好的安排', color: 'green', scores: { green: 3, gold: 1 } },
      { text: '命运掌握在自己手里', color: 'orange', scores: { orange: 3, red: 1 } },
      { text: '命运是一条河，我只能顺势而行', color: 'blue', scores: { blue: 3, purple: 1 } },
      { text: '命运是荒诞的，但我选择反抗', color: 'black', scores: { black: 3, red: 1 } }
    ]
  },
  {
    category: '关于一个混乱的房间',
    text: '回到家发现房间被弄得一团糟，你的第一反应是？',
    options: [
      { text: '深呼吸，开始整理', color: 'orange', scores: { orange: 3, gold: 1 } },
      { text: '先坐下来，想想是谁干的、为什么', color: 'blue', scores: { blue: 3, gold: 1 } },
      { text: '无所谓，乱了再整理就好', color: 'green', scores: { green: 3, black: 1 } },
      { text: '感到烦躁，秩序被打破了', color: 'gold', scores: { gold: 3, white: 1 } }
    ]
  },
  {
    category: '关于你想拥有的能力',
    text: '如果可以拥有一种超能力，你会选？',
    options: [
      { text: '读心术，了解每个人的真实想法', color: 'blue', scores: { blue: 3, purple: 1 } },
      { text: '时间旅行，回到过去或去往未来', color: 'purple', scores: { purple: 3, white: 1 } },
      { text: '治愈力，让身边的人不再痛苦', color: 'green', scores: { green: 3, white: 1 } },
      { text: '创造力，把想象变成现实', color: 'orange', scores: { orange: 3, red: 1 } }
    ]
  },
  {
    category: '关于痛苦',
    text: '你怎么看待自己经历过的最痛苦的事？',
    options: [
      { text: '它塑造了现在的我，我感谢它', color: 'gold', scores: { gold: 3, green: 1 } },
      { text: '它让我更深刻地理解了生命', color: 'blue', scores: { blue: 3, purple: 1 } },
      { text: '我还在和它和解的路上', color: 'purple', scores: { purple: 3, black: 1 } },
      { text: '它让我变得更强大', color: 'red', scores: { red: 3, orange: 1 } }
    ]
  },
  {
    category: '关于出生这件事',
    text: '你怎么看待"被生下来"这件事？',
    options: [
      { text: '生命本身就是一份礼物', color: 'green', scores: { green: 3, white: 1 } },
      { text: '没有选择权，但既然来了就好好活', color: 'black', scores: { black: 3, gold: 1 } },
      { text: '这是一个深刻的哲学问题', color: 'purple', scores: { purple: 3, blue: 1 } },
      { text: '要去创造属于自己的意义', color: 'orange', scores: { orange: 3, red: 1 } }
    ]
  },
  {
    category: '关于一段感情的结束',
    text: '和很重要的人不再在一起了，最后阶段你通常是？',
    options: [
      { text: '已经预感到，平静地接受', color: 'gold', scores: { gold: 3, blue: 1 } },
      { text: '拼命挽回，不甘心就这样结束', color: 'red', scores: { red: 3, orange: 1 } },
      { text: '默默退场，不想让场面太难看', color: 'blue', scores: { blue: 3, black: 1 } },
      { text: '反复问自己到底哪里做错了', color: 'white', scores: { white: 3, purple: 1 } }
    ]
  },
  {
    category: '关于「成熟」',
    text: '你怎么定义"成熟"？',
    options: [
      { text: '能接纳世界的不完美', color: 'gold', scores: { gold: 3, green: 1 } },
      { text: '能在痛苦中保持体面', color: 'blue', scores: { blue: 3, black: 1 } },
      { text: '依然保持对世界的好奇', color: 'orange', scores: { orange: 3, white: 1 } },
      { text: '能看清自己并接纳自己', color: 'purple', scores: { purple: 3, blue: 1 } }
    ]
  },
  {
    category: '关于意义',
    text: '如果有一天你发现人生没有"意义"，你会？',
    options: [
      { text: '那就自己创造意义', color: 'orange', scores: { orange: 3, red: 1 } },
      { text: '没有意义也是一种答案', color: 'black', scores: { black: 3, purple: 1 } },
      { text: '在过程中找意义，不在结果里找', color: 'green', scores: { green: 3, gold: 1 } },
      { text: '深入思考这个问题本身就有意义', color: 'blue', scores: { blue: 3, purple: 1 } }
    ]
  },
  {
    category: '关于活着这件事',
    text: '用一句话概括你对"活着"的态度？',
    options: [
      { text: '全力以赴地活，不留遗憾', color: 'red', scores: { red: 3, orange: 1 } },
      { text: '安静地存在，感受每一刻', color: 'blue', scores: { blue: 3, green: 1 } },
      { text: '自由地活，不被任何人定义', color: 'black', scores: { black: 3, white: 1 } },
      { text: '认真地活，对得起这趟旅程', color: 'gold', scores: { gold: 3, white: 1 } }
    ]
  }
];

// 选项颜色映射
const OPTION_COLORS = {
  blue: { bg: '#e8f0f8', border: '#b8d4e8', text: '#2c5f8a' },
  white: { bg: '#f0f4f8', border: '#c8d8e4', text: '#4a6a82' },
  green: { bg: '#e6f5ec', border: '#b8dcc4', text: '#2d7a4a' },
  orange: { bg: '#fef3e6', border: '#f0d4a8', text: '#c47a20' },
  purple: { bg: '#f3eef8', border: '#d0c0e0', text: '#6a4a8a' },
  red: { bg: '#fdecea', border: '#e8b8b0', text: '#a0302a' },
  gold: { bg: '#fdf6e3', border: '#e8d8a8', text: '#9a7a10' },
  black: { bg: '#eef1f4', border: '#c0ccd4', text: '#2c3e50' }
};
