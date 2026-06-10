// ============================================================
//  SITE DATA — YOUR SINGLE SOURCE OF TRUTH
//  Fill everything in here. Components pull from this file.
//  You never need to dig into component code to update content.
// ============================================================

// === NAMES & DATES ===
export const NAMES = {
  yours: 'Cyrus',           // your name
  hers:  'Corinne Bailey',   // her name
  combined: 'us',           // how you refer to yourselves together
}

export const DATES = {
  anniversary: '2026-06-14',
  firstDate:   '2025-06-14',
  firstText:   '2025-06-01',
  firstint:    '2025-06-01',
}

// ============================================================
//  01 — LANDING
// ============================================================
export const LANDING = {
  // Each string in the typewriter array appears one after another
  typewriterLines: [
    '$ initializing us.exe...',
    '$ loading memories: [████████████] 100%',
    '$ compiling 365 days of data...',
    '$ running sentiment_analysis.py...',
    '> output: overwhelmingly positive ♡',
    '$ rendering: for Corinne, with love.',
  ],
  // The big cinematic headline after the terminal
  headline: 'One year.',
  subheadline: 'Compressed into a dataset of moments I never want to lose.',
  // Small ambient line below
  ambientText: 'scroll to begin ↓',
}

// ============================================================
//  02 — ORIGIN STORY
// ============================================================
export const ORIGIN = {
  sectionLabel: '01 — origin',
  heading: 'How it started',
  // Replace with your actual story — keep it warm, specific, conversational
  paragraphs: [
    `It wasn't a dramatic moment. It never is with the things that matter most.
     We were [WHERE YOU MET — e.g. in the back row of that stats lecture, both
     pretending we understood what the professor was saying].`,

    `I noticed [SOMETHING SPECIFIC — e.g. you had three different colored pens
     laid out perfectly and were color-coding your notes. I thought: this person
     is either very organized or very anxious. Turns out: both. I liked that immediately.]`,

    `The first time we actually talked, you [WHAT SHE DID/SAID — be specific].
     I remember thinking — this is someone I want to keep talking to.`,
  ],
  // Git-log style event timeline for the "how we met" section
  commitLog: [
    { hash: 'a3f2c1',  date: DATES.firstint,   message: 'feat: first encounter — mutual awareness detected' },
    { hash: 'c4d882',  date: DATES.firstDate,   message: 'feat: first date — error rate: 0, smile rate: 100%' },
    { hash: 'd1a773',  date: DATES.firstText,      message: 'refactor: realized I wanted to keep you around' },
    { hash: 'e9b664',  date: DATES.anniversary,      message: 'deploy: officially us.exe launched to production ♡' },
  ],
  // The "spark" quote — one line that captures the feeling
  sparkQuote: 'I didn\'t plan for you. That\'s what made it perfect.',
}

// ============================================================
//  03 — TIMELINE
// ============================================================
export const TIMELINE = {
  sectionLabel: '02 — timeline',
  heading: 'The year we had',
  events: [
    {
      id: 't1',
      date: 'June 14 2025',
      title: 'First date',
      caption: '[WHERE YOU WENT]',
      story: `[Write 2-3 sentences about this moment. What you remember most.
               How you felt. One specific detail that sticks with you.]`,
      image: '/images/timeline/june.jpg',
      tags: ['milestone', 'beginnings'],
      emoji: '✨',
    },
    {
      id: 't2',
      date: 'July 14 2025',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/july14.jpg',
      tags: ['adventure'],
      emoji: '🌊',
    },
    {
      id: 't3',
      date: 'August 1 2025',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/aug1.jpg',
      tags: ['everyday'],
      emoji: '☀️',
    },
    {
      id: 't4',
      date: 'November 14 2025',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/nov14.jpg',
      tags: ['adventure'],
      emoji: '🌿',
    },
    {
      id: 't5',
      date: 'January 7 2026',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/january7.jpg',
      tags: ['cozy'],
      emoji: '🍂',
    },
    {
      id: 't6',
      date: 'January 14 2026',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/january14.jpg',
      tags: ['milestone'],
      emoji: '🎃',
    },
    {
      id: 't7',
      date: 'February 14 2026',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/feb14.jpg',
      tags: ['cozy'],
      emoji: '🫂',
    },
    {
      id: 't8',
      date: 'March 31 2026',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/march31.jpg',
      tags: ['holiday'],
      emoji: '✨',
    },
    {
      id: 't9',
      date: 'May 3 2026',
      title: '[MEMORY TITLE]',
      caption: '[Short caption]',
      story: `[Story for this moment]`,
      image: '/images/timeline/may3.jpeg',
      tags: ['new'],
      emoji: '🌙',
    },
  ],
}

// ============================================================
//  04 — OUR DATA
// ============================================================
export const OUR_DATA = {
  sectionLabel: '03 — our data',
  heading: 'Us, quantified',
  subheading: 'A year of data. Unscientific. Completely accurate.',

  // Big stat counters (animated on scroll)
  stats: [
    { label: 'Days together',        value: 365,   suffix: '',    description: 'and counting' },
    { label: 'Hours on calls',       value: 847,   suffix: 'h',   description: 'approx. (conservative estimate)' },
    { label: 'Inside jokes',         value: 48,    suffix: '+',   description: 'officially catalogued' },
    { label: 'Dates',                value: 23,    suffix: '',    description: 'rough estimate — the ones that mattered' },
    { label: '"I miss you" texts',   value: 1203,  suffix: '',    description: 'mutual' },
  ],

  // Bar chart: time distribution (percentages, should sum to 100)
  timeDistribution: [
    { name: 'Spending us time',        value: 28, color: '#e8a598' },
    { name: 'playing together',        value: 22, color: '#8aaa8c' },
    { name: 'going on dates',          value: 18, color: '#c9a96e' },
    { name: 'late night calls',        value: 16, color: '#7b9ea8' },
    { name: 'Big back activities (eating)', value: 10, color: '#c27b6e' },
    { name: 'everrything else with u', value: 6,  color: '#3a3a52' },
  ],

  // Line chart: "relationship happiness index" over months
  // Scale 1-10 — you annotate the peaks and dips
  happinessIndex: [
    { month: 'May',  value: 7.5, note: 'nervous, hopeful' },
    { month: 'Jun',  value: 8.2, note: 'getting to know you' },
    { month: 'Jul',  value: 8.8, note: '[your note here]' },
    { month: 'Aug',  value: 7.9, note: '[your note here]' },
    { month: 'Sep',  value: 8.5, note: '[your note here]' },
    { month: 'Oct',  value: 9.1, note: '[your note here]' },
    { month: 'Nov',  value: 8.7, note: '[your note here]' },
    { month: 'Dec',  value: 9.4, note: 'best month so far' },
    { month: 'Jan',  value: 9.0, note: '[your note here]' },
    { month: 'Feb',  value: 9.3, note: '[your note here]' },
    { month: 'Mar',  value: 9.2, note: '[your note here]' },
    { month: 'Apr',  value: 9.6, note: 'almost a year' },
    { month: 'May',  value: 10,  note: 'right now ♡' },
  ],

  // Funny / absurd metrics — displayed as a "dataset table"
  funnyMetrics: [
    { metric: 'P(me annoying her on any given day)',  value: '0.34', unit: 'probability' },
    { metric: 'Avg. response time (her to me)',       value: '< 3',  unit: 'minutes' },
    { metric: 'Avg. response time (me to her)',       value: '< 2',  unit: 'minutes (trying harder)' },
    { metric: 'Times I\'ve rewatched our first photo',value: '∞',    unit: 'iterations' },
    { metric: 'Sleep calls logged',                   value: '89',   unit: 'nights' },
    { metric: 'Times she was right',                  value: '94%',  unit: 'of the time' },
    { metric: 'Times I admitted it',                  value: '41%',  unit: 'of the time (working on it)' },
    { metric: 'Correlation: her smile → my mood',     value: '0.97', unit: 'R² value' },
    { metric: 'Null hypothesis: "this is nothing"',   value: 'p < 0.001', unit: 'REJECTED' },
  ],

  // Nicknames word cloud data
  nicknames: [
    { word: 'Babi',      size: 5 },  // 5 = largest
    { word: 'lovelove',  size: 4 },
    { word: 'eri',       size: 3 },
    { word: 'baby',      size: 3 },
    { word: 'cor',       size: 2 },
    { word: 'bebe',      size: 2 },
    { word: 'my wife',   size: 1 },
  ],

  // Playlist / music section
  topSongs: [
    { rank: 1, title: '[Song that became "your song"]',     artist: '[Artist]',  context: 'that drive in [month]' },
    { rank: 2, title: '[Song from a specific memory]',      artist: '[Artist]',  context: 'she showed me this one' },
    { rank: 3, title: '[Song you always replay together]',  artist: '[Artist]',  context: 'our [place] playlist' },
    { rank: 4, title: '[A comfort song]',                   artist: '[Artist]',  context: 'late nights' },
    { rank: 5, title: '[Song from a trip or date]',         artist: '[Artist]',  context: '[context]' },
  ],

  // Food rankings — bar chart or a fun list
  foodRankings: [
    { food: '[Her favorite food]',       score: 10 },
    { food: '[Food you always get]',     score: 9 },
    { food: '[Surprise hit]',            score: 8 },
    { food: '[Comfort food together]',   score: 8 },
    { food: '[Controversial choice]',    score: 6 },
  ],
}

// ============================================================
//  05 — MEMORY GALLERY
// ============================================================
export const GALLERY = {
  sectionLabel: '04 — gallery',
  heading: 'The moments I keep.',
  subheading: 'Each one a frame I\'d pause forever.',

  memories: [
    {
      id: 'g1',
      image: '/images/gallery/g1.jpg',
      title: '[Memory title]',
      date: '[Month Year]',
      story: '[Short emotional caption — 1-2 sentences max. What this moment meant.]',
      tags: ['us', 'adventure'],
      size: 'large', // 'large' | 'medium' | 'small' — controls grid sizing
    },
    {
      id: 'g2',
      image: '/images/gallery/g2.jpg',
      title: '[Memory title]',
      date: '[Month Year]',
      story: '[Caption]',
      tags: ['everyday'],
      size: 'medium',
    },
    {
      id: 'g3',
      image: '/images/gallery/g3.jpg',
      title: '[Memory title]',
      date: '[Month Year]',
      story: '[Caption]',
      tags: ['cozy'],
      size: 'small',
    },
    {
      id: 'g4',
      image: '/images/gallery/g4.jpg',
      title: '[Memory title]',
      date: '[Month Year]',
      story: '[Caption]',
      tags: ['milestone'],
      size: 'medium',
    },
    {
      id: 'g5',
      image: '/images/gallery/g5.jpg',
      title: '[Memory title]',
      date: '[Month Year]',
      story: '[Caption]',
      tags: ['adventure'],
      size: 'large',
    },
    {
      id: 'g6',
      image: '/images/gallery/g6.jpg',
      title: '[Memory title]',
      date: '[Month Year]',
      story: '[Caption]',
      tags: ['everyday'],
      size: 'small',
    },
  ],
}

// ============================================================
//  06 — THE LETTER
// ============================================================
export const LETTER = {
  sectionLabel: '05 — the letter',
  openingLine: 'My Eri,',   // Her name, or a pet name

  // Write your letter here. Use \n\n for paragraph breaks.
  // This is the most important content on the entire site — take your time with it.
  // Structure: specific moment → who she is to you → what changed → what you're looking forward to → signature
  body: `[START WITH A SPECIFIC MOMENT — not "this year was amazing" but a single
scene that captures everything. Maybe a random Tuesday. Something small that stayed with you.]

[Second paragraph: tell her who she IS to you. Not what she does — who she is.
The specific things you notice. The things you love that you didn't expect to love.]

[Third paragraph: what this year changed in you. Be honest. One difficult moment
is okay to acknowledge — it makes everything else feel real, not just a highlight reel.]

[Fourth paragraph: what you're looking forward to. Make it specific, not vague.
Real things. Future moments you're already thinking about.]

[Close with something only you two would say. An inside joke. Your phrase.
Something that'll make her smile through the tears.]`,

  signature: `Always yours,\n${NAMES.yours}`,

  // The small terminal line that appears at the very end
  terminalClose: '$ end_of_file.txt — to be continued ♡',
}
