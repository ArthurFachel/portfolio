export const profile = {
  name: 'Arthur Domingues Fachel Nunes',
  handle: 'Fachel',
  title: 'Data Analyst // ML Research Engineer',
  location: 'Porto Alegre, Brazil',
  email: 'arthur.nunes6889@gmail.com',
  github: 'https://github.com/ArthurFachel',
  linkedin: 'https://www.linkedin.com/in/arthur-fachel-801218176/',
  resumeUrl: `${import.meta.env.BASE_URL}Arthur_Fachel_Nunes_Resume.pdf`,
  tagline:
    'Designing and evaluating RAG architectures for domain-specific QA, fine-tuning LLMs on geological and municipal datasets, and shipping the pipelines that keep them running in production.',
}

export const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'TIMELINE', href: '#timeline' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]

export const stats = [
  { value: '03', label: 'PAPERS CO-AUTHORED' },
  { value: '2026', label: 'BRACIS ACCEPTANCE' },
  { value: '12+', label: 'PUBLIC REPOS' },
]

export const specialties = [
  {
    id: '01',
    title: 'MACHINE LEARNING & NLP',
    body: 'Fine-tuning LLMs on domain corpora, designing RAG pipelines, and evaluating retrieval-augmented QA for geoscience benchmarks.',
  },
  {
    id: '02',
    title: 'DATA ENGINEERING & ANALYSIS',
    body: 'Pandas/Scikit-learn pipelines, clustering, and visualization over stratigraphic, municipal, and misinformation datasets.',
  },
  {
    id: '03',
    title: 'AUTOMATION & DEPLOYMENT',
    body: 'Flask APIs wrapping local LLMs, AWS (Bedrock/Lightsail/EC2) deployments, and cron-scheduled agent pipelines.',
  },
]

export const bio = `Undergraduate researcher at PUCRS, working at the intersection of NLP and
applied data science. My research track runs from fine-tuning LLMs on geological corpora for Petrobras,
to building RAG-based misinformation detectors, to turning raw municipal data into public dashboards.
One line runs across all of it: get the model grounded in real data before you trust its output.`

export const projects = [
  {
    name: 'Contextual-Grounding',
    tag: 'RESEARCH // BRACIS 2026',
    description:
      'Companion repo for "The Role of Contextual Grounding in Geoscience Benchmarks": evaluating how grounding context affects LLM QA accuracy on geoscience corpora.',
    stack: ['Python', 'PyTorch', 'RAG'],
    url: 'https://github.com/ArthurFachel/Contextual-Grounding',
  },
  {
    name: 'GeoRAG',
    tag: 'PETROBRAS // GEOSCIENCE',
    description:
      'RAG architecture for domain-specific geoscience question answering, built on structured, vector-searchable geological documents.',
    stack: ['Python', 'RAG', 'Vector Search'],
    url: 'https://github.com/ArthurFachel/GeoRAG',
  },
  {
    name: 'Lightsail-Hermes',
    tag: 'AGENT INFRA // DEPLOY',
    description:
      'Hermes Agent API deployed on AWS Lightsail with an orchestrator/subagent architecture, scheduling Markdown-to-vector pipelines via cron.',
    stack: ['Python', 'Flask', 'AWS Lightsail'],
    url: 'https://github.com/ArthurFachel/Lightsail-Hermes',
  },
  {
    name: 'Literacy-Data',
    tag: 'PUBLIC DATA // DASHBOARD',
    description:
      'Municipal-level analysis linking literacy rates, sanitation coverage, and school infrastructure across Brazil, exposed through per-dimension API endpoints.',
    stack: ['Python', 'HTML', 'REST APIs'],
    url: 'https://github.com/ArthurFachel/Literacy-Data',
  },
  {
    name: 'Clustering-Analysis-Pipeline',
    tag: 'DATA SCIENCE // ML',
    description:
      'Clustering pipeline for exploratory data analysis over stratigraphic datasets, built with Scikit-learn and Pandas.',
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    url: 'https://github.com/ArthurFachel/Clustering-Analysis-Pipeline',
  },
  {
    name: 'weather-forecast',
    tag: 'APPLIED ML // ASSESSMENT',
    description:
      'PM Accelerator technical assessment on weather trend forecasting: time-series exploration and modeling in a notebook workflow.',
    stack: ['Python', 'Jupyter', 'Forecasting'],
    url: 'https://github.com/ArthurFachel/weather-forecast',
  },
]

export const archiveUrl = 'https://github.com/ArthurFachel?tab=repositories'

export const publication = {
  citation:
    'Nunes, A. F., Parraga, O., Spigolon, A. L. D., de Barros, G., Gonzaga Jr, L., Veronez, M. R., Barros, R. C., & Kupssinskü, L. S. (2026).',
  title: 'The Role of Contextual Grounding in Geoscience Benchmarks.',
  venue: 'BRACIS 2026, Brazilian Conference on Intelligent Systems. Accepted.',
}

export const timeline = [
  {
    period: 'AUG 2024 - PRESENT',
    role: 'Undergraduate Research Assistant',
    org: 'MALTA-LAB (Machine Learning Theory Lab and Applications), PUCRS',
    tags: ['Machine Learning', 'LLM', 'PyTorch', 'Data Visualization'],
    points: [
      'Co-authored three scientific papers across two research projects; one accepted at BRACIS 2026.',
      'Designed, implemented, and evaluated RAG architectures for domain-specific geoscience LLMs.',
      'Conducted data analysis and visualization for stratigraphic datasets.',
    ],
  },
  {
    period: '2024 - PRESENT',
    role: 'Research Project: Petrobras, Fine-tuning LLMs for Geoscience',
    org: 'MALTA-LAB, PUCRS',
    tags: ['Machine Learning', 'Python', 'Flask', 'Hermes Agent'],
    points: [
      'Fine-tuned an LLM on geological corpora for downstream field tasks.',
      'Built a Flask API wrapping the local LLM for real-time inference by geologists in the field.',
      'Automated Markdown-to-vector document pipelines via Hermes Agent on cron-based workflows.',
    ],
  },
]

export const skillGroups = [
  {
    label: 'PROGRAMMING LANGUAGES',
    items: [
      { name: 'Python', level: 'PROFICIENT', pct: 92 },
      { name: 'SQL', level: 'INTERMEDIATE', pct: 65 },
      { name: 'JavaScript', level: 'FAMILIAR', pct: 45 },
      { name: 'Java / C', level: 'FAMILIAR', pct: 40 },
    ],
  },
  {
    label: 'ML / DATA FRAMEWORKS',
    items: [
      { name: 'PyTorch', level: 'PROFICIENT', pct: 85 },
      { name: 'Scikit-learn / Pandas', level: 'PROFICIENT', pct: 88 },
      { name: 'Matplotlib', level: 'PROFICIENT', pct: 80 },
      { name: 'Flask / REST APIs', level: 'INTERMEDIATE', pct: 65 },
    ],
  },
  {
    label: 'DATA & INFRA',
    items: [
      { name: 'RAG / NLP Pipelines', level: 'PROFICIENT', pct: 85 },
      { name: 'Web Scraping (Selenium/BS4)', level: 'INTERMEDIATE', pct: 70 },
      { name: 'AWS (Bedrock/Lightsail/EC2)', level: 'INTERMEDIATE', pct: 60 },
      { name: 'Git / GitHub', level: 'PROFICIENT', pct: 90 },
    ],
  },
]

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Advanced' },
  { name: 'Finnish', level: 'Intermediate' },
]
