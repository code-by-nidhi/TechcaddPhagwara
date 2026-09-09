/**
 * The After 12th career-certificate courses, and the design tracks.
 *
 * These are the programmes that sit outside the 3/6/9-month ladder: nine
 * subject tracks running six months to a year, and four CAD and visualisation
 * courses that have no equivalent on the ladder at all.
 *
 * Why a local template
 * --------------------
 * The nine subject tracks are published from one template — they share their
 * eligibility grid, their "why this programme" argument, their project
 * sequence, their FAQ set and their salary band, and differ only in the
 * overview, the learning outcomes and the toolchain. `certificate()` below
 * encodes exactly that: the shared half is written once, and each entry states
 * only what is genuinely its own. Repeating the shared half thirteen times
 * would be thirteen places for one sentence to drift.
 *
 * The design courses pass their own `whyNow`, roles and salary, because a
 * drafting career is not a software one and the shared argument does not fit.
 */

import { makeAfter12, type After12Spec } from './factory'
import type { CourseContent, CourseProject } from '@/data/courses/types'

const COURSES = { category: 'after-12th-courses', categoryTitle: 'After 12th Courses' }
const DESIGN = { category: 'civil-mechanical', categoryTitle: 'Civil / Mechanical' }

/* ------------------------------------------------------- shared template -- */

/** The audience grid every one of these courses addresses. */
const AUDIENCE = [
  {
    label: 'Students after 12th',
    copy: 'Join from any stream. You start from fundamentals with no assumed knowledge, and most students run the course alongside a degree at a Phagwara college using the weekday or weekend batch.',
  },
  {
    label: 'Graduates and final-year students',
    copy: 'If you are finishing a BA, BBA, B.Com, BCA or B.Tech, this is the shortest route from degree to salary. Enter placement season with project work in hand instead of a blank CV.',
  },
  {
    label: 'Working professionals',
    copy: 'The weekend batch exists for people already earning. Career switchers typically become interview-ready for Trainee Executive roles within five to six months without leaving their current job.',
  },
  {
    label: 'Business owners and freelancers',
    copy: 'Owners take this course to stop outsourcing work they cannot judge. Freelancers take it to bill clients beyond Punjab, since location does not limit remote work in this field.',
  },
  {
    label: 'Career restarters',
    copy: 'A gap on the CV counts for less than work you can point at. The course starts at zero and finishes with a portfolio and a documented internship letter, which is what an interviewer asks about after a break.',
  },
  {
    label: 'Self-taught learners',
    copy: 'If free videos left you with notes but nothing built, what changes here is a trainer who reviews what you produced this week and a deadline attached to every module.',
  },
]

/** The four-part argument each of these pages makes for itself. */
const WHY_CHOOSE = [
  {
    title: 'Demand employers state plainly',
    copy: 'Employers here consistently ask for demonstrable project work over certificates alone. That gap is the whole argument for this course: there is local demand, there are budgets, and there are very few trained people to hand the work to.',
  },
  {
    title: 'Supervision on real work',
    copy: 'What separates this from a playlist of tutorials is supervision. From the second half of the course you build on live client projects with a trainer beside you, make decisions that have consequences, and correct them the following week. That loop is the skill.',
  },
  {
    title: 'Honest about the money',
    copy: 'A fresher who finishes with a working portfolio typically starts around ₹15,000 – ₹28,000 a month locally, and moves up quickly with experience. The ceiling is high, but it is earned — nobody pays a beginner well for a certificate alone.',
  },
  {
    title: 'Better than the usual alternative',
    copy: 'The alternative is what most people try first: free videos, a cheap online course, six months of drifting, and knowledge you cannot demonstrate. A mentor who corrects you, an internship letter and a placement cell that actually calls employers is the difference between knowing the subject and being hired to do it.',
  },
]

/**
 * The four projects each course produces.
 *
 * Named per course, because "your first working piece" reads as boilerplate
 * when the subject is not in the sentence.
 */
const projects = (subject: string, tools: string[]): CourseProject[] => [
  {
    name: `${subject} Fundamentals Build`,
    summary: `Your first working piece, applying the foundations and the tool setup end to end rather than as isolated exercises.`,
    tech: tools.slice(0, 2),
    level: 'Beginner',
    skills: ['Fundamentals', 'Tooling'],
  },
  {
    name: 'Real-World Data Challenge',
    summary:
      'Work with messy, real inputs against industry standards and best practice — and defend the choices you made to a trainer.',
    tech: tools.slice(2, 4).length ? tools.slice(2, 4) : ['VS Code'],
    level: 'Intermediate',
    skills: ['Real Inputs', 'Judgement'],
  },
  {
    name: 'Live Client Brief',
    summary:
      'A genuine requirement from techcadd’s delivery pipeline, scoped, built and shipped under supervision. This is the one interviewers ask about.',
    tech: ['Live work', 'Supervised'],
    level: 'Advanced',
    skills: ['Client Delivery', 'Scoping'],
  },
  {
    name: 'Portfolio Capstone',
    summary: `A ${subject.toLowerCase()} project you specify yourself, covering testing, review, iteration and deployment, and present as your final piece.`,
    tech: ['Deployment', 'Presentation'],
    level: 'Advanced',
    skills: ['Ownership', 'Presentation'],
  },
]

/** The "why techcadd" case, identical across these courses. */
const WHY_TECHCADD = [
  {
    title: 'Trainers who still do the work',
    copy: 'Your trainer is not a full-time lecturer. They deliver client projects for techcadd’s services arm, so examples in class are current rather than a case study from five years ago.',
  },
  {
    title: 'Live projects, real consequences',
    copy: 'You work on genuine client requirements under supervision. This is where a portfolio comes from, and it is the first thing an interviewer asks to see.',
  },
  {
    title: 'Small batches and open lab hours',
    copy: 'Batches stay small enough that a trainer sees your screen daily. Lab time runs outside class hours and doubt sessions continue until the concept lands.',
  },
  {
    title: 'Internship letter and certificate',
    copy: 'Every student finishes with an industry-recognised certificate and a documented internship on real work, accepted for university industrial training requirements.',
  },
  {
    title: 'A placement cell that persists',
    copy: 'Mock interviews, CV reviews and drives with hiring partners across Phagwara, Jalandhar and Ludhiana, repeated after a rejection, not abandoned.',
  },
  {
    title: 'Since 2007, 25,000+ students',
    copy: 'Nearly two decades of hiring relationships in Punjab is why a call from our placement cell gets answered and why local employers know what our certificate means.',
  },
]

/** What a course of this shape can honestly say about pay. */
const salary = (role: string) => ({
  role,
  summary:
    'Pay here follows the portfolio rather than the certificate. With two years of delivery experience the starting figure typically doubles, and specialists who keep learning move well beyond it.',
  starting: '₹15,000–₹28,000/month',
  after2: '₹30,000–₹56,000/month',
  markets: [
    {
      name: 'Phagwara / Jalandhar',
      fresher: '₹15,000–₹28,000/month',
      after2: '₹30,000–₹56,000/month',
      scale: { fresher: 21500, after2: 43000 },
    },
    {
      name: 'Delhi / NCR & Bengaluru',
      fresher: '₹24,000–₹42,000/month',
      after2: '₹50,000–₹95,000+/month',
      scale: { fresher: 33000, after2: 72500 },
    },
    {
      name: 'Remote / Freelance Work',
      fresher: '₹10,000–₹26,000/month',
      after2: '₹40,000–₹90,000+/month',
      scale: { fresher: 18000, after2: 65000 },
    },
  ],
})

/** The questions every one of these pages answers identically. */
const faqs = (subject: string, duration: string, toolList: string) => [
  {
    q: `What is the duration of the ${subject} course in Phagwara?`,
    a: `techcadd runs ${subject} over ${duration}. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.`,
  },
  {
    q: `What is the fee for the ${subject} course in Phagwara?`,
    a: 'Shorter 2–3 month courses in this region typically cost ₹8,000 to ₹15,000, while comprehensive 4–6 month programmes with live projects, an internship and placement support run roughly ₹18,000 to ₹40,000. techcadd counsellors share the current fee sheet and EMI options on request, and a demo class is free.',
  },
  {
    q: 'Can I join this course straight after 12th?',
    a: 'Yes. This programme is designed for students joining directly after 12th, from any stream. There is no prior technical requirement. You start from fundamentals and build up to live project work.',
  },
  {
    q: 'Which tools and software will I learn?',
    a: `You will work hands-on with ${toolList} and the supporting toolchain used on live projects. All practice happens in the lab on licensed software, not on demo screenshots.`,
  },
  {
    q: 'Do you work on real projects or only theory?',
    a: `Every module ends with something you built. The ${subject} course finishes with a live project drawn from techcadd’s own client delivery work, supervised by a trainer, which becomes the portfolio you take to interviews.`,
  },
]

/** The career questions, in the shared template's own words. */
const careerFaqs = (subject: string) => [
  {
    q: `What job roles open up after ${subject}?`,
    a: 'Graduates move into Trainee Executive, Junior Developer, Analyst, Freelance Consultant and similar roles. Employers here consistently ask for demonstrable project work over certificates alone.',
  },
  {
    q: 'What can I earn, and how fast does it grow?',
    a: 'A fresher with a working portfolio starts around ₹15,000 – ₹28,000 a month in this market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
  },
  {
    q: 'Can I freelance or work remotely with this skill?',
    a: 'Yes. A Phagwara address costs you nothing on a remote brief. Students bill clients in Delhi, Dubai and Canada. The course covers client handling, proposals and reporting so you can price and defend your work, not just do it.',
  },
  {
    q: 'Which industries hire for this in Punjab?',
    a: 'Beyond IT companies, the export houses, sports goods and hand tool manufacturers, immigration consultancies, hospitals, schools and real estate firms across the region all now hire for these skills directly.',
  },
]

/**
 * One course on the shared template.
 *
 * `spec` carries only what differs — the overview, the outcomes, the tools and
 * the module split. Everything else is filled from the constants above, and any
 * field passed explicitly still wins.
 */
type CertificateSpec = Omit<
  After12Spec,
  | 'category'
  | 'categoryTitle'
  | 'audience'
  | 'whyChooseUs'
  | 'whyTechcadd'
  | 'projects'
  | 'salary'
  | 'careerFaqs'
  | 'extraFaqs'
  | 'hiring'
  | 'nextSteps'
  | 'industries'
  | 'roles'
> &
  Partial<
    Pick<
      After12Spec,
      | 'whyNow'
      | 'roles'
      | 'roleDetails'
      | 'salary'
      | 'careerFaqs'
      | 'projects'
      | 'hiring'
      | 'nextSteps'
      | 'industries'
    >
  > & {
    category?: string
    categoryTitle?: string
    /** The headline role the salary card describes. */
    salaryRole?: string
  }

function certificate(spec: CertificateSpec): CourseContent {
  const { salaryRole, ...rest } = spec

  return makeAfter12({
    ...COURSES,
    ...rest,
    audience: AUDIENCE,
    whyChooseUs: WHY_CHOOSE,
    whyTechcadd: WHY_TECHCADD,
    roles: spec.roles ?? [
      'Trainee Executive',
      'Junior Developer',
      'Analyst',
      'Freelance Consultant',
    ],
    hiring: spec.hiring ?? [
      'IT companies and software firms across Phagwara, Jalandhar and Ludhiana',
      'Export houses, sports goods and hand tool manufacturers with in-house teams',
      'Immigration consultancies, hospitals and schools running their own systems',
      'Real estate firms, agencies and remote or freelance client work',
    ],
    nextSteps: spec.nextSteps ?? [
      'An adjacent techcadd track — the tools overlap, so the second course is faster',
      'A specialisation once you know which half of the work you prefer',
      'Freelance client work alongside employment',
      'Vendor certification in your chosen platform',
    ],
    industries: spec.industries ?? [
      'IT & software',
      'Manufacturing & export',
      'Healthcare & education',
      'Freelance / remote',
    ],
    projects: spec.projects ?? projects(spec.label, spec.tools),
    salary: spec.salary ?? salary(salaryRole ?? 'Trainee Executive'),
    careerFaqs: spec.careerFaqs ?? careerFaqs(spec.label),
    extraFaqs: faqs(spec.label, spec.duration, spec.tools.slice(0, 4).join(', ')),
    whyNow: spec.whyNow ?? {
      title: `${spec.label} Is Powering the Next Generation of Industry Leaders`,
      points: [
        'Live client work from the second half of the course, supervised by a trainer — not slides, not simulations.',
        'Trainee Executive roles in Punjab start around ₹15,000 – ₹28,000 a month for a fresher with a working portfolio.',
        'Beyond IT companies, export houses, manufacturers, immigration consultancies, hospitals, schools and real estate firms across the region all now hire for these skills directly.',
        'A Phagwara address costs you nothing on a remote brief — students bill clients in Delhi, Dubai and Canada.',
      ],
    },
  })
}

/**
 * The four-stage module split these courses share.
 *
 * The template publishes the same nine learning outcomes as four stages; this
 * maps a course's own outcomes onto that shape so the curriculum section
 * reflects the syllabus rather than a generic list.
 */
const stages = (o: string[]) => [
  {
    title: 'Stage 1 — Foundations & Environment',
    summary: 'The concepts and the working setup, before anything is built on them.',
    topics: o.slice(0, 2),
    duration: '2–3 months',
    lessons: 48,
  },
  {
    title: 'Stage 2 — Techniques, Workflows & Real Data',
    summary: 'The working loop, applied to inputs that arrive imperfect.',
    topics: o.slice(2, 4),
    duration: '2–3 months',
    lessons: 48,
  },
  {
    title: 'Stage 3 — Standards & the Live Build',
    summary: 'The practice a team expects, and the first substantial thing you ship.',
    topics: o.slice(4, 6),
    duration: '2–3 months',
    lessons: 48,
  },
  {
    title: 'Stage 4 — Review, Portfolio & Placement',
    summary: 'Correcting under review, then turning the work into an interview.',
    topics: o.slice(6),
    duration: '2–3 months',
    lessons: 48,
  },
]

/* --------------------------------------------------------------- courses -- */

const PYTHON_OUTCOMES = [
  'Foundations and core concepts — syntax, data types, control flow and functions, written until reading code is faster than reading about it',
  'Hands-on tools and environment setup — Python, a virtual environment, VS Code and Git configured as working developers keep them',
  'Practical techniques and workflows — modules, packages, and the cycle of writing, running and refactoring scripts to handover quality',
  'Working with real data and files — files, CSV and JSON, databases with SQLite and PostgreSQL, including malformed real-world data',
  'Industry standards and best practice — PEP 8, docstrings, error handling and the code review habits that keep a team readable',
  'Live project build — an end-to-end application, a FastAPI or Django service with a database behind it, on a trainer-set brief',
  'Testing, review and iteration — debugging, testing and the discipline of self-correction after review rather than restarting',
  'Portfolio, CV and interview preparation — the repository, README and walkthrough that turn the work into interview material',
  'Live project work and placement preparation — a supervised live client requirement, then placement drives and mock interviews',
]

const GENAI_OUTCOMES = [
  'Foundations and core concepts — what a language model is doing, what it cannot do, and the vocabulary used around it',
  'Hands-on tools and environment setup — API keys, a Python environment, and ChatGPT, Claude and Gemini set up side by side to be compared rather than trusted',
  'Practical techniques and workflows — prompting, chaining and retrieval: the patterns that turn a chat window into something a business can rely on',
  'Working with real data and files — documents, embeddings and a vector store, including the chunking decisions that quietly decide whether retrieval works',
  'Industry standards and best practice — evaluation, hallucination checks, cost per call, and the privacy limits on what may be sent to a model at all',
  'Live project build — a retrieval-augmented assistant built on a real document set, with a Gradio or Streamlit front end',
  'Testing, review and iteration — measuring answers against a test set, and correcting the pipeline after a trainer has probed it for failures',
  'Portfolio, CV and interview preparation — the demos, repositories and written evaluations that turn coursework into something an interviewer can try',
  'Live project work and placement preparation — a live client brief under supervision, then the placement drives and mock interviews that follow',
]

const CLOUD_OUTCOMES = [
  'Foundations and core concepts — what a cloud actually gives you: compute, storage, networking and identity, in the words used in interviews',
  'Hands-on tools and environment setup — an AWS account, the CLI, Linux, Git and Docker set up the way an engineer who carries a pager keeps them',
  'Practical techniques and workflows — the delivery loop: build an image, ship it through a pipeline, watch it run, roll it back when it misbehaves',
  'Working with real data and files — configuration, secrets, logs and state files, and the difference between what belongs in Git and what never does',
  'Industry standards and best practice — least privilege, immutable infrastructure, tagging, and the review habits that keep both a bill and a blast radius small',
  'Live project build — an application containerised, deployed to Kubernetes, and delivered by a Jenkins or GitHub Actions pipeline you wrote',
  'Testing, review and iteration — monitoring with Prometheus and Grafana, and repairing a deployment a trainer has broken on purpose',
  'Portfolio, CV and interview preparation — the repositories, pipeline files and architecture diagrams an interviewer can inspect',
  'Live project work and placement preparation — a live client environment under supervision, then placement drives and mock interviews',
]

const AIDS_OUTCOMES = [
  'Foundations and core concepts — what machine learning actually is, where statistics sits underneath it, and the vocabulary you will be interviewed in',
  'Hands-on tools and environment setup — Python, Jupyter, NumPy and Pandas installed and configured the way a working analyst keeps them',
  'Practical techniques and workflows — the analysis loop: framing a question, cleaning the data, choosing a model, and reporting what it found',
  'Working with real data and files — messy CSVs, missing values, joins across tables, and the exploratory work that happens before anything is trained',
  'Industry standards and best practice — train/test splits, leakage, evaluation metrics and the checks that stop a model looking better than it is',
  'Live project build — a model trained on a real dataset and reported as a dashboard in Power BI or Tableau, on a brief a trainer sets',
  'Testing, review and iteration — cross-validation, tuning, and re-fitting after a trainer has questioned both your numbers and your conclusion',
  'Portfolio, CV and interview preparation — the notebooks, dashboards and written findings that turn coursework into something an interviewer can read',
  'Live project work and placement preparation — a live client dataset under supervision, then placement drives and mock interviews',
]

const MLDL_OUTCOMES = [
  'Regression, classification, and the mathematics underneath them, in the vocabulary an interview will use',
  'Python, Jupyter, NumPy, Pandas and scikit-learn set up the way a working practitioner keeps them',
  'The modelling loop: a baseline first, then features, then a model, then an honest measurement of whether it improved',
  'Real datasets — missing values, imbalanced classes, images and text — prepared before anything is trained on them',
  'Train/test discipline, leakage, overfitting, and the metrics that stop a model looking better than it is',
  'A deep learning model trained in TensorFlow or PyTorch on a real problem, served behind a small application',
  'Tuning, cross-validation, and re-training after a trainer has questioned both the score and the method behind it',
  'The notebooks, model cards and results that turn coursework into something an interviewer can read',
  'A live client dataset under supervision, then the placement drives, mock interviews and CV work that follow it',
]

const MLAI_OUTCOMES = [
  'What machine learning is, where AI sits around it, and the vocabulary you will be interviewed in',
  'Python, Jupyter and the scikit-learn stack installed and configured the way a working practitioner keeps them',
  'The modelling loop: a baseline, then features, then a model, then an honest measurement',
  'Real datasets — messy tables, images and text — cleaned and prepared before a model ever sees them',
  'Evaluation metrics, leakage, overfitting, and the checks that keep a result defensible',
  'A model trained end to end on a real problem and served behind an application a trainer set',
  'Tuning and re-training after review, and explaining why a change worked rather than only that it did',
  'The notebooks, demos and written results that turn coursework into something an interviewer can open',
  'A live client dataset under supervision, then placement drives, mock interviews and CV work',
]

const CYBER_OUTCOMES = [
  'How networks, operating systems and authentication actually work — the ground every attack and every defence stands on',
  'Kali Linux, a lab network, and the toolchain around Nmap, Wireshark and Burp Suite',
  'The assessment loop: scope it, enumerate it, exploit it in the lab, document it, and recommend the fix',
  'Packet captures, log files and scan output, read for the one line in them that matters',
  'The OWASP Top 10, responsible disclosure, and the legal limits that separate a professional from a liability',
  'A full assessment of a deliberately vulnerable environment, written up as a report a client could act on',
  'Re-testing after a fix, and defending each finding to a trainer who will argue the other side of it',
  'The reports, lab write-ups and CTF work that turn coursework into something an interviewer can read',
  'A live client engagement under supervision, then the placement drives, mock interviews and CV work that follow it',
]

const CYBER_EH_OUTCOMES = [
  'Networking, Linux and web fundamentals from the attacker’s side: what a target actually exposes, and why it does',
  'Kali Linux, a deliberately vulnerable lab, Burp Suite and Metasploit, set up as a range that is yours to break',
  'The kill chain in practice — reconnaissance, enumeration, exploitation, privilege escalation and cleanup',
  'Scan output, intercepted requests, hashes and logs: the evidence a finding has to be built on',
  'Scope agreements, the OWASP Top 10, disclosure, and the rules that keep this work lawful',
  'A full penetration test of a lab environment, reported with severity, evidence and a remediation path',
  'Re-testing after remediation, and defending each finding to a trainer who will try to knock it down',
  'The reports, proofs of concept and CTF write-ups that turn coursework into something an interviewer can read',
  'A live client engagement under supervision, then the placement drives, mock interviews and CV work that follow it',
]

const DMC_OUTCOMES = [
  'Where digital marketing actually sits in a business: channels, funnels, audiences and the vocabulary you will be interviewed in',
  'Accounts, tracking and dashboards built from scratch — Meta Business Suite, Google Ads, Analytics and Search Console on a live property',
  'The working week of a marketer: briefs, content calendars, creative reviews and the checks that run before anything is published',
  'Reading what the numbers say — campaign exports, conversion tracking and reports built on a client’s own account rather than sample data',
  'Naming conventions, ad policy, consent and the compliance details that decide whether an account survives its first review',
  'A full campaign taken from brief to launch on a real budget, with a trainer reviewing every decision before it goes out',
  'A/B tests, budget reallocation and the discipline of correcting a campaign mid-flight rather than waiting for it to end',
  'The case studies, tracked results and mock interviews that turn six months of work into something an employer can inspect',
  'A live client account under supervision, then the placement drives, mock interviews and CV work that follow it',
]

export const AFTER12_CERTIFICATES: CourseContent[] = [
  certificate({
    slug: 'after-12th-python-programming-course-in-phagwara',
    label: 'Python Programming',
    title: 'Best Python Programming Course After 12th in Phagwara',
    icon: 'code',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Python Programming Course begins with fundamentals — syntax, data types and control flow — before progressing through functions, modules and object-oriented programming. Error handling, file operations and JSON and CSV processing follow. The curriculum then introduces databases and SQL, and web services development. Automation scripting, web scraping and data manipulation with Pandas make up the later stages.\nEvery session includes code review by a trainer rather than a check that it merely ran. Projects build sequentially into a portfolio rather than standing as isolated exercises. The programme concludes with CV preparation and interview coaching for junior developer and analyst positions.',
    demand:
      'Employers here consistently ask for demonstrable project work over certificates alone, and there are very few trained people to hand that work to.',
    outcomes: PYTHON_OUTCOMES,
    modules: stages(PYTHON_OUTCOMES),
    tools: [
      'Python 3',
      'VS Code',
      'Git & GitHub',
      'SQLite & PostgreSQL',
      'FastAPI / Django',
      'Pandas',
      'Virtual environments',
    ],
    salaryRole: 'Junior Python Developer',
    relatedCourses: [
      'after-12th-machine-learning-ai-course-in-phagwara',
      'after-12th-ai-data-science-course-in-phagwara',
      'after-12th-generative-ai-course-in-phagwara',
      'after-12th-6-month-full-stack-development-program-in-phagwara',
      'after-12th-cloud-computing-devops-course-in-phagwara',
      'after-12th-cybersecurity-course-in-phagwara',
    ],
    keywords: [
      'python programming course after 12th in Phagwara',
      'python course Phagwara',
      'python training with placement Phagwara',
      'learn python after 12th Punjab',
      'python developer course Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-generative-ai-course-in-phagwara',
    label: 'Generative AI',
    title: 'Best Generative AI Course After 12th in Phagwara',
    icon: 'sparkles',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Generative AI Course After 12th in Phagwara is a one-year track for students who want to work with AI systems rather than around them, and it starts with no assumed background. The opening stage is Python and the basics of how these models are built and behave. You then move into working with language models directly: designing prompts, testing whether they hold up, and getting output structured enough to feed into something else.\nThe middle stage covers embeddings and retrieval so a model can answer from a specific set of documents, plus image and audio generation. Later modules are about building: small applications in Python, deployed somewhere people can use them, with attention to cost, safety and the mistakes these systems reliably make. A trainer reviews your work each week, and you finish with a working project, a portfolio, CV preparation and interview practice.',
    demand:
      'Every business here is being sold AI and almost none can tell a working system from a demo — which is exactly the judgement this course builds.',
    outcomes: GENAI_OUTCOMES,
    modules: stages(GENAI_OUTCOMES),
    tools: [
      'Python',
      'ChatGPT, Claude & Gemini',
      'OpenAI API',
      'Vector stores & embeddings',
      'Gradio & Streamlit',
      'Git & GitHub',
      'VS Code',
    ],
    salaryRole: 'AI Application Developer',
    relatedCourses: [
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-machine-learning-ai-course-in-phagwara',
      'after-12th-ai-data-science-course-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-machine-learning-deep-learning-course-in-phagwara',
    ],
    keywords: [
      'generative AI course after 12th in Phagwara',
      'generative AI training Phagwara',
      'LLM and prompt engineering course Phagwara',
      'AI course after 12th Punjab',
      'generative AI course with placement Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-cloud-computing-devops-course-in-phagwara',
    label: 'Cloud Computing & DevOps',
    title: 'Best Cloud Computing & DevOps Course After 12th in Phagwara',
    icon: 'cloud',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Cloud Computing & DevOps Course After 12th in Phagwara is a one-year programme for school leavers heading into infrastructure work, and it begins with fundamentals rather than certification shortcuts. You start with how networks and operating systems work, then Linux administration in depth, since it sits underneath everything that follows.\nCloud comes next: what the major services do, how regions and pricing work, and how to run and secure a server you are responsible for. From there you move into containers with Docker, the basics of orchestration, and building pipelines that test and deploy code automatically. Later modules cover monitoring, logging and keeping costs under control, which is what employers actually worry about. Labs run on real cloud accounts with a trainer supervising. You finish with infrastructure you have built and can walk someone through, a portfolio, CV preparation and interview practice.',
    demand:
      'Employers worry about monitoring, logging and cost long before they worry about certifications, and those are the parts most candidates have never touched.',
    outcomes: CLOUD_OUTCOMES,
    modules: stages(CLOUD_OUTCOMES),
    tools: [
      'AWS & the AWS CLI',
      'Linux',
      'Docker',
      'Kubernetes',
      'Jenkins / GitHub Actions',
      'Prometheus & Grafana',
      'Git & GitHub',
      'VS Code',
    ],
    salaryRole: 'Cloud Support Engineer',
    relatedCourses: [
      'after-12th-6-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
      'after-12th-cybersecurity-course-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-generative-ai-course-in-phagwara',
    ],
    keywords: [
      'cloud computing and devops course after 12th in Phagwara',
      'devops training Phagwara',
      'AWS course after 12th Punjab',
      'docker and kubernetes training Phagwara',
      'cloud devops course with placement Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-ai-data-science-course-in-phagwara',
    label: 'AI & Data Science',
    title: 'Best AI & Data Science Course After 12th in Phagwara',
    icon: 'chart',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s AI & Data Science Course After 12th in Phagwara is a one-year track that takes students from no background to working with data properly. It opens with Python and SQL, then spends real time on cleaning and preparing data, which is most of the work in any actual project.\nExploratory analysis and visualisation follow, along with the statistics you need to defend a conclusion when someone questions it. The middle stage covers machine learning models end to end, from framing a problem to judging whether the result is trustworthy. You then build dashboards and learn to present findings to people who will not read your code. Later modules introduce AI tools and language models as part of the analysis workflow. Every stage runs on real datasets with a trainer reviewing your work weekly, and you finish with a portfolio of analyses, CV preparation and interview practice for junior analyst roles.',
    demand:
      'Cleaning and preparing data is most of the work in any real project, and it is the part no tutorial ever shows — which is why analysts who can do it are scarce.',
    outcomes: AIDS_OUTCOMES,
    modules: stages(AIDS_OUTCOMES),
    tools: [
      'Python & Jupyter',
      'NumPy & Pandas',
      'SQL',
      'Power BI',
      'Tableau',
      'scikit-learn',
      'Git & GitHub',
      'VS Code',
    ],
    salaryRole: 'Data Analyst',
    relatedCourses: [
      'after-12th-6-month-data-science-program-in-phagwara',
      'after-12th-6-month-data-analytics-program-in-phagwara',
      'after-12th-machine-learning-ai-course-in-phagwara',
      'after-12th-machine-learning-deep-learning-course-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
      'after-12th-generative-ai-course-in-phagwara',
    ],
    keywords: [
      'AI and data science course after 12th in Phagwara',
      'data science training Phagwara',
      'data analyst course after 12th Punjab',
      'python and power bi training Phagwara',
      'data science course with placement Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-machine-learning-deep-learning-course-in-phagwara',
    label: 'Machine Learning & Deep Learning',
    title: 'Best Machine Learning & Deep Learning Course After 12th in Phagwara',
    icon: 'brain',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Advanced',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Machine Learning & Deep Learning Course After 12th in Phagwara is a one-year programme for students who want to go further than an introductory course takes them. The first stage builds the foundation: Python, the mathematics involved, and statistics applied to real data rather than exam questions.\nYou then work through the standard machine learning models, learning how to prepare features, evaluate honestly and avoid fooling yourself with a good-looking score. The second half is deep learning: how neural networks train, then convolutional networks for images and sequence models for text, with transfer learning covered because training from scratch is rarely the right call. Later modules deal with deploying a model and monitoring it once it is running. Sessions are hands-on, with a trainer reviewing both your code and your reasoning. You finish with trained models you can explain, a portfolio and interview preparation.',
    demand:
      'Anyone can fit a model; far fewer can tell you honestly whether the score means anything, and that judgement is what the second half of this course is for.',
    outcomes: MLDL_OUTCOMES,
    modules: stages(MLDL_OUTCOMES),
    tools: [
      'Python & Jupyter',
      'NumPy & Pandas',
      'scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Git & GitHub',
      'VS Code',
    ],
    salaryRole: 'Junior ML Engineer',
    relatedCourses: [
      'after-12th-machine-learning-ai-course-in-phagwara',
      'after-12th-ai-data-science-course-in-phagwara',
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-generative-ai-course-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
    ],
    keywords: [
      'machine learning and deep learning course after 12th in Phagwara',
      'deep learning training Phagwara',
      'neural networks course Punjab',
      'tensorflow and pytorch training Phagwara',
      'machine learning course with placement Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-machine-learning-ai-course-in-phagwara',
    label: 'Machine Learning & AI',
    title: 'Best Machine Learning & AI Course After 12th in Phagwara',
    icon: 'brain',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Machine Learning & AI Course After 12th in Phagwara is a longer programme for students who want to enter the field early, and it starts from zero. The first stage is Python and the mathematics and statistics machine learning rests on, taught at the level you need to use rather than as pure theory.\nYou then move into supervised and unsupervised models, working with real datasets and learning to judge whether a result is actually any good. Neural networks and deep learning follow, along with an introduction to computer vision and language models. Later modules cover preparing data properly, evaluating models honestly, and putting one somewhere people can use it. Sessions are hands-on, with a trainer reviewing your notebooks and your reasoning each week. You finish with several projects built on real data, a portfolio and CV built around them, and interview preparation for junior machine learning and data roles.',
    demand:
      'Judging whether a result is actually any good is the scarce half of this work, and it is what a trainer reviewing your reasoning each week is there to build.',
    outcomes: MLAI_OUTCOMES,
    modules: stages(MLAI_OUTCOMES),
    tools: [
      'Python & Jupyter',
      'scikit-learn',
      'NumPy & Pandas',
      'TensorFlow basics',
      'Git & GitHub',
      'VS Code',
    ],
    salaryRole: 'Junior ML / Data Analyst',
    relatedCourses: [
      'after-12th-machine-learning-deep-learning-course-in-phagwara',
      'after-12th-ai-data-science-course-in-phagwara',
      'after-12th-generative-ai-course-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
      'after-12th-6-month-data-science-program-in-phagwara',
    ],
    keywords: [
      'machine learning and AI course after 12th in Phagwara',
      'machine learning training Phagwara',
      'AI course after 12th Punjab',
      'scikit-learn and python training Phagwara',
      'machine learning course with placement Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-cybersecurity-course-in-phagwara',
    label: 'Cybersecurity',
    title: 'Best Cybersecurity Course After 12th in Phagwara',
    icon: 'shield',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Cybersecurity Course After 12th in Phagwara is a career track for school leavers who want to work in security, and it assumes no technical background. It starts with how networks and the internet actually work, then Linux, because nearly everything you will defend runs on it.\nFrom there you cover the common categories of threat and vulnerability, and how organisations assess their own risk. The practical stage introduces scanning and vulnerability assessment, web application security, and analysing network traffic to see what is really happening on a connection. Later modules cover responding to an incident and writing it up clearly, which is a large part of the job. All lab work runs inside a controlled environment on systems you are permitted to test, with a trainer supervising every exercise. You finish with documented lab work, a portfolio, CV preparation and interview practice for junior security and SOC support roles.',
    demand:
      'Writing an incident up clearly is a large part of the job and almost nobody arrives able to do it — which is why reporting is treated as coursework here rather than an afterthought.',
    outcomes: CYBER_OUTCOMES,
    modules: stages(CYBER_OUTCOMES),
    tools: ['Kali Linux', 'Nmap', 'Wireshark', 'Burp Suite', 'Linux', 'Git & GitHub', 'VS Code'],
    salaryRole: 'Junior Security / SOC Support',
    relatedCourses: [
      'after-12th-cybersecurity-ethical-hacking-course-in-phagwara',
      'after-12th-6-month-cyber-security-program-in-phagwara',
      'after-12th-3-month-cyber-security-program-in-phagwara',
      'after-12th-cloud-computing-devops-course-in-phagwara',
      'after-12th-9-month-cyber-security-program-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
    ],
    keywords: [
      'cybersecurity course after 12th in Phagwara',
      'cyber security training Phagwara',
      'SOC support course after 12th Punjab',
      'nmap wireshark burp suite training Phagwara',
      'cybersecurity course with placement Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-cybersecurity-ethical-hacking-course-in-phagwara',
    label: 'Cybersecurity & Ethical Hacking',
    title: 'Best Cybersecurity & Ethical Hacking Course After 12th in Phagwara',
    icon: 'shield',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Advanced',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Cybersecurity & Ethical Hacking Course After 12th in Phagwara is a one-year programme covering both sides of security work, and it starts with no technical background assumed. The foundation stage is networking and Linux, taught until you are comfortable working on a server from the command line.\nYou then cover threats, vulnerabilities and how organisations assess risk, before moving into the offensive material: reconnaissance, scanning and enumeration, exploitation, privilege escalation, web application attacks and wireless testing. Social engineering is covered too, since it accounts for a large share of real incidents. The defensive modules deal with detection, incident response and the basics of forensics. Throughout, reporting is treated as part of the work, because a finding nobody can reproduce is worth little. Labs run in a controlled environment on systems you are authorised to test, supervised by a trainer. You finish with written assessment reports and interview preparation.',
    demand:
      'A finding nobody can reproduce is worth little, which is why reporting is treated as part of the work here rather than as paperwork after it.',
    outcomes: CYBER_EH_OUTCOMES,
    modules: stages(CYBER_EH_OUTCOMES),
    tools: [
      'Kali Linux',
      'Burp Suite',
      'Metasploit',
      'Nmap & Wireshark',
      'Vulnerable lab environments',
      'Git & GitHub',
      'VS Code',
    ],
    salaryRole: 'Junior Penetration Tester',
    relatedCourses: [
      'after-12th-cybersecurity-course-in-phagwara',
      'after-12th-9-month-cyber-security-program-in-phagwara',
      'after-12th-6-month-cyber-security-program-in-phagwara',
      'after-12th-cloud-computing-devops-course-in-phagwara',
      'after-12th-3-month-cyber-security-program-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
    ],
    keywords: [
      'cybersecurity and ethical hacking course after 12th in Phagwara',
      'ethical hacking training Phagwara',
      'penetration testing course after 12th Punjab',
      'kali linux and metasploit training Phagwara',
      'ethical hacking course with placement Phagwara',
    ],
  }),

  certificate({
    slug: 'after-12th-digital-marketing-communication-course-in-phagwara',
    label: 'Digital Marketing & Communication',
    title: 'Best Digital Marketing & Communication Course After 12th in Phagwara',
    icon: 'megaphone',
    duration: '6 Months – 1 Year',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn a job-oriented programme built around live projects rather than theory, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Digital Marketing & Communication Course After 12th in Phagwara is built for school leavers from any stream, and it assumes no marketing background at all. The early months cover how buyers actually decide, how a funnel is structured, and the numbers that tell you whether a campaign is working.\nFrom there you move through SEO and content, social media and Meta Ads, Google Ads, email marketing and analytics, along with brand and communication work that includes writing and presenting. AI marketing tools are taught as part of the workflow rather than as a novelty. You learn by running things: a live website, keywords you rank yourself, ad accounts with a real budget, and campaigns a trainer reviews with you week by week. By the end you have a portfolio of campaigns with results attached, a CV built around them, and interview practice for entry-level marketing and communication roles, freelance work or your own business.',
    demand:
      'Ad accounts survive or die on naming conventions, policy and consent details nobody teaches — and an account that fails its first review takes the campaign with it.',
    outcomes: DMC_OUTCOMES,
    modules: stages(DMC_OUTCOMES),
    tools: [
      'Google Analytics 4',
      'Meta Business Suite',
      'Google Ads',
      'Google Search Console',
      'Google Business Profile',
      'Looker Studio',
      'Semrush',
      'WordPress',
      'Canva',
      'Mailchimp',
      'Google Tag Manager',
    ],
    salaryRole: 'Digital Marketing Executive',
    relatedCourses: [
      'after-12th-6-month-digital-marketing-program-in-phagwara',
      'after-12th-3-month-digital-marketing-program-in-phagwara',
      'after-12th-4-month-digital-marketing-program-in-phagwara',
      'after-12th-9-month-digital-marketing-program-in-phagwara',
      'after-12th-6-month-data-analytics-program-in-phagwara',
      'after-12th-ai-data-science-course-in-phagwara',
    ],
    keywords: [
      'digital marketing and communication course after 12th in Phagwara',
      'digital marketing training Phagwara',
      'SEO and google ads course after 12th Punjab',
      'social media marketing training Phagwara',
      'digital marketing course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------ civil / mechanical -- */

  certificate({
    ...DESIGN,
    slug: 'after-12th-autocad-course-in-phagwara',
    label: 'AutoCAD',
    title: 'AutoCAD Course After 12th in Phagwara',
    icon: 'ruler',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Industry-standard 2D and 3D drafting — the first tool every civil and mechanical drawing career starts with, taught on real drawings rather than exercise sheets.',
    overview:
      'AutoCAD is where a drafting career begins, and this three-month course treats it as a working tool rather than a menu tour. You start with the drawing environment, coordinate systems and the discipline of drawing to scale, then move through the commands a draughtsman actually uses all day — lines, arcs, trims, offsets, arrays and hatching — until they are muscle memory rather than something you look up.\nFrom there the course covers the parts that separate a drawing from a deliverable: layers and object properties, blocks and attributes, dimensioning to standard, annotation scaling, and layouts with title blocks and viewports set up for print. 3D modelling basics follow for students who need them. Every module ends in a drawing a trainer marks against drafting standards rather than for appearance, and you finish with a portfolio of print-ready drawings you can show to a site office or a design firm.',
    demand:
      'Every construction, fabrication and interior firm in this region runs on drawings, and a fresher who can produce one to standard without supervision is immediately billable.',
    outcomes: [
      'The drawing environment, coordinate systems and the discipline of drawing to scale',
      'The daily command set — lines, arcs, trim, offset, array, mirror and hatching — at working speed',
      'Layers, object properties and drawing organisation a second person can pick up',
      'Blocks, attributes and reusable libraries that cut repeat work',
      'Dimensioning and annotation to drafting standards, with annotation scaling handled properly',
      '3D modelling basics for solids and simple assemblies',
      'Layouts, title blocks and viewports set up for print-ready output',
      'A portfolio of drawings marked against standards rather than appearance',
    ],
    modules: [
      {
        title: 'Month 1 — Drawing Environment & Core Commands',
        summary: 'The interface, coordinates and the commands that become muscle memory.',
        topics: [
          'The AutoCAD interface, workspaces and file management',
          'Coordinate systems, units and drawing to scale',
          'Draw commands: line, polyline, circle, arc, rectangle and polygon',
          'Modify commands: trim, extend, offset, mirror, array, fillet and chamfer',
          'Object snaps, tracking and precision drawing',
          'Hatching, gradients and boundary handling',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Organisation, Blocks & Documentation',
        summary: 'What turns a sketch into a drawing another professional can read.',
        topics: [
          'Layers, linetypes, lineweights and object properties',
          'Blocks, attributes and reusable block libraries',
          'External references and drawing coordination',
          'Dimensioning styles and drafting standards',
          'Text, leaders, tables and annotation scaling',
          'A full 2D working drawing set',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — 3D Basics, Layouts & Portfolio',
        summary: '3D where it helps, then print-ready output and the portfolio.',
        topics: [
          '3D workspace, solid primitives and basic modelling',
          'Extrude, revolve, union and subtract operations',
          'Visual styles and simple rendering',
          'Layouts, viewports, title blocks and plot styles',
          'Plotting, publishing and PDF output to scale',
          'A drafted portfolio project reviewed against standards',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    tools: [
      'AutoCAD',
      'AutoCAD LT',
      'Layer & block libraries',
      'Dimension styles',
      'Layouts & viewports',
      'PDF plotting',
      'DWG / DXF',
    ],
    roles: [
      'CAD Draughtsman',
      'Junior Design Engineer',
      'Site Engineer (Drawing Support)',
      'CAD Technician',
      'Freelance Draughtsman',
    ],
    hiring: [
      'Construction and civil contracting firms with a drawing office',
      'Fabrication and mechanical workshops working from drawings',
      'Architecture and interior design practices',
      'Freelance drafting work for local builders and consultants',
    ],
    nextSteps: [
      'Revit for BIM and construction documentation',
      'SolidWorks for parametric mechanical design',
      '3ds Max for visualisation and rendering',
      'Site and project coordination roles',
    ],
    industries: ['Construction & civil', 'Mechanical & fabrication', 'Architecture & interiors', 'Freelance'],
    salaryRole: 'CAD Draughtsman',
    careerFaqs: [
      {
        q: 'What jobs can I get after an AutoCAD course?',
        a: 'CAD Draughtsman, Junior Design Engineer, CAD Technician and drawing-support roles on site. In this region the demand comes from construction contractors, fabrication workshops and architecture and interior practices.',
      },
      {
        q: 'What can I earn to start?',
        a: 'A fresher draughtsman typically starts around ₹12,000 – ₹22,000 a month locally, rising with experience and with a second tool such as Revit or SolidWorks on the CV. Freelance drafting is billed per drawing and is realistic once you are fast and accurate.',
      },
      {
        q: 'Is AutoCAD alone enough for a career?',
        a: 'It is enough for a first job and it is where almost every drafting career starts. What moves you beyond draughtsman is a second tool — Revit for building work, SolidWorks for mechanical — which is why both follow naturally from here.',
      },
      {
        q: 'Do I need a technical or science background?',
        a: 'No. What helps is spatial sense and patience with detail. Students from all streams complete this course; the drawing standards are taught from scratch.',
      },
    ],
    projects: [
      {
        name: 'Precision Drawing Set',
        summary:
          'A set of 2D drawings produced to scale with correct object snaps, layers and linetypes — marked on accuracy rather than appearance.',
        tech: ['AutoCAD', 'Layers'],
        level: 'Beginner',
        skills: ['Precision Drafting', 'Drawing Organisation'],
      },
      {
        name: 'Block Library & Annotated Plan',
        summary:
          'A reusable block library with attributes, applied to a fully dimensioned and annotated floor or component plan.',
        tech: ['Blocks', 'Dimension styles'],
        level: 'Intermediate',
        skills: ['Blocks & Attributes', 'Dimensioning'],
      },
      {
        name: '3D Model & Visual Study',
        summary:
          'A solid model built from a 2D drawing using extrude, revolve, union and subtract, presented with visual styles.',
        tech: ['AutoCAD 3D'],
        level: 'Intermediate',
        skills: ['3D Modelling', 'Solids'],
      },
      {
        name: 'Print-Ready Drawing Portfolio',
        summary:
          'A complete drawing set laid out with title blocks, viewports and plot styles, published to scale as PDF — the portfolio piece a drawing office asks to see.',
        tech: ['Layouts', 'Plot styles', 'PDF'],
        level: 'Advanced',
        skills: ['Documentation', 'Print Output'],
      },
    ],
    whyNow: {
      title: 'Every Build in This Region Starts as a Drawing',
      points: [
        'Construction, fabrication and interior firms all work from drawings, and all of them need someone who can produce one to standard.',
        'A fresher draughtsman typically starts around ₹12,000 – ₹22,000 a month locally, rising with experience and a second tool.',
        'Three months is enough to become genuinely useful in a drawing office, which makes this the fastest route in the section to a first technical job.',
        'It is also the foundation the Revit, SolidWorks and 3ds Max tracks build on — nothing here is wasted if you specialise later.',
      ],
    },
    relatedCourses: [
      'after-12th-revit-course-in-phagwara',
      'after-12th-solidworks-course-in-phagwara',
      'after-12th-3ds-max-course-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-digital-marketing-program-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
    ],
    keywords: [
      'autocad course after 12th in Phagwara',
      'autocad training Phagwara',
      '2D and 3D drafting course Punjab',
      'CAD draughtsman course Phagwara',
      'autocad course with placement Phagwara',
    ],
  }),

  certificate({
    ...DESIGN,
    slug: 'after-12th-solidworks-course-in-phagwara',
    label: 'SolidWorks',
    title: 'SolidWorks Course After 12th in Phagwara',
    icon: 'ruler',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Parametric 3D mechanical design — part modelling, assemblies and drawings for mechanical and product design roles, taught on components rather than tutorials.',
    overview:
      'SolidWorks is how mechanical parts are designed now, and the difference between someone who has watched tutorials and someone a workshop will hire is whether their models are built to be changed. This three-month course is organised around that idea from the first sketch.\nYou begin with sketching discipline — fully defined sketches, relations and dimensions — because a sloppy sketch is what makes a model collapse when a dimension changes later. Part modelling follows through extrudes, revolves, sweeps, lofts, fillets, patterns and the feature tree that records your intent. The second half is assemblies: mates, sub-assemblies, interference detection and motion, then engineering drawings generated from the model with sections, details, bills of materials and GD&T basics. Simulation and analysis tools are introduced so you can sanity-check a design before it is cut. Every model is reviewed for design intent, not just for looking right, and you finish with a modelled assembly and its drawing set.',
    demand:
      'Manufacturing and hand tool firms across this region design in 3D now, and a modeller whose parts survive a dimension change is worth considerably more than one whose do not.',
    outcomes: [
      'Sketching discipline — fully defined sketches with relations, because that is what makes a model editable',
      'Part modelling through extrude, revolve, sweep, loft, fillet and pattern features',
      'Design intent captured in the feature tree so a change propagates instead of breaking',
      'Assemblies with mates, sub-assemblies, interference detection and basic motion',
      'Engineering drawings generated from the model: sections, details, BOMs and GD&T basics',
      'Sheet metal and weldment basics for fabrication work',
      'Simulation and analysis tools used to sanity-check a design before it is made',
      'A modelled assembly and its full drawing set as a portfolio piece',
    ],
    modules: [
      {
        title: 'Month 1 — Sketching & Part Modelling',
        summary: 'Fully defined sketches first, then the features built on them.',
        topics: [
          'The SolidWorks interface, planes and the feature tree',
          'Sketch entities, relations and full definition',
          'Extrude, revolve, sweep and loft features',
          'Fillets, chamfers, shells and draft',
          'Linear, circular and sketch-driven patterns',
          'Design intent and building a model that survives a change',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Assemblies, Sheet Metal & Weldments',
        summary: 'Parts brought together, and the fabrication features a workshop needs.',
        topics: [
          'Assembly modelling: mates, degrees of freedom and sub-assemblies',
          'Interference detection and collision checking',
          'Basic motion study',
          'Top-down versus bottom-up assembly approaches',
          'Sheet metal: flanges, bends and flat patterns',
          'Weldments: structural members, trim and cut lists',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Drawings, Simulation & Portfolio',
        summary: 'The documentation a workshop actually manufactures from.',
        topics: [
          'Drawing views: standard, section, detail, broken-out and auxiliary',
          'Dimensioning, tolerances and GD&T basics',
          'Bills of materials, balloons and revision tables',
          'Sheet formats, title blocks and printing',
          'Introduction to SimulationXpress: loads, fixtures and results',
          'A modelled assembly and its complete drawing set',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    tools: [
      'SolidWorks',
      'Part & assembly modelling',
      'Sheet metal & weldments',
      'SolidWorks Drawings',
      'SimulationXpress',
      'GD&T',
      'STEP / IGES exchange',
    ],
    roles: [
      'Mechanical Design Engineer (Junior)',
      'CAD Design Engineer',
      'Product Design Assistant',
      'Draughtsman (3D)',
      'Freelance 3D Modeller',
    ],
    hiring: [
      'Hand tool, sports goods and auto component manufacturers',
      'Fabrication workshops and sheet metal firms',
      'Product design and prototyping studios',
      'Machine builders and industrial equipment suppliers',
    ],
    nextSteps: [
      'Advanced surfacing and complex geometry',
      'Simulation and finite element analysis in depth',
      'AutoCAD for 2D documentation alongside',
      'Manufacturing process and CAM training',
    ],
    industries: ['Manufacturing', 'Auto components', 'Product design', 'Fabrication'],
    salaryRole: 'Junior Mechanical Design Engineer',
    careerFaqs: [
      {
        q: 'What jobs can I get after a SolidWorks course?',
        a: 'Junior Mechanical Design Engineer, CAD Design Engineer, Product Design Assistant and 3D Draughtsman. In this region the demand comes from hand tool, sports goods and auto component manufacturers, fabrication workshops and machine builders.',
      },
      {
        q: 'What can I earn to start?',
        a: 'A fresher typically starts around ₹14,000 – ₹25,000 a month locally, above the AutoCAD-only band because 3D parametric modelling is a scarcer skill. Experience with assemblies and drawings moves it faster than certificates do.',
      },
      {
        q: 'Should I learn AutoCAD first?',
        a: 'It helps but it is not required. AutoCAD gives you drafting standards and 2D discipline; SolidWorks is where mechanical design actually happens. Students who take both are noticeably more employable in a drawing office.',
      },
      {
        q: 'Do I need a mechanical background?',
        a: 'No. What matters is spatial reasoning and care with detail. The engineering conventions — tolerances, GD&T basics, BOMs — are taught from scratch.',
      },
    ],
    projects: [
      {
        name: 'Parametric Component Set',
        summary:
          'A set of parts built from fully defined sketches, then deliberately re-dimensioned to prove the models rebuild instead of failing.',
        tech: ['SolidWorks', 'Sketching'],
        level: 'Beginner',
        skills: ['Design Intent', 'Parametric Modelling'],
      },
      {
        name: 'Sheet Metal & Weldment Build',
        summary:
          'A fabricated component modelled with flanges, bends and a flat pattern, plus a weldment frame with a cut list.',
        tech: ['Sheet metal', 'Weldments'],
        level: 'Intermediate',
        skills: ['Fabrication Modelling', 'Cut Lists'],
      },
      {
        name: 'Multi-Part Assembly with Motion',
        summary:
          'An assembly mated correctly, checked for interference and driven through a basic motion study.',
        tech: ['Assemblies', 'Mates'],
        level: 'Advanced',
        skills: ['Assembly Design', 'Interference Checking'],
      },
      {
        name: 'Complete Drawing Set (Portfolio)',
        summary:
          'Full manufacturing drawings generated from the assembly — sections, details, tolerances, GD&T and a bill of materials on a proper sheet format.',
        tech: ['SolidWorks Drawings', 'GD&T', 'BOM'],
        level: 'Advanced',
        skills: ['Manufacturing Drawings', 'Documentation'],
      },
    ],
    whyNow: {
      title: 'Manufacturing Here Designs in 3D Now',
      points: [
        'Hand tool, sports goods and auto component firms across this region have moved to 3D parametric design, and the modellers have not caught up.',
        'A fresher typically starts around ₹14,000 – ₹25,000 a month locally — above the AutoCAD-only band, because the skill is scarcer.',
        'The difference between a hire and a rejection is whether your models survive a dimension change, which is what design intent means and what this course drills.',
        'Assemblies and manufacturing drawings are what a workshop actually needs, and both are portfolio deliverables here.',
      ],
    },
    relatedCourses: [
      'after-12th-autocad-course-in-phagwara',
      'after-12th-3ds-max-course-in-phagwara',
      'after-12th-revit-course-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-3-month-digital-marketing-program-in-phagwara',
    ],
    keywords: [
      'solidworks course after 12th in Phagwara',
      'solidworks training Phagwara',
      'mechanical design course Punjab',
      '3D CAD modelling training Phagwara',
      'solidworks course with placement Phagwara',
    ],
  }),

  certificate({
    ...DESIGN,
    slug: 'after-12th-3ds-max-course-in-phagwara',
    label: '3ds Max',
    title: '3ds Max Course After 12th in Phagwara',
    icon: 'image',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      '3D modelling, texturing and rendering for architectural visualisation and design presentation work — taught to the standard a client actually approves from.',
    overview:
      'A visualisation is how a client decides whether to build something, which means the standard is not "does it look 3D" but "does it look real enough to sign off". This three-month course is aimed squarely at that standard.\nYou start with modelling — primitives, splines, editable poly workflows and modifiers — building interiors and exteriors from real plans rather than from imagination. Materials and texturing follow, including UV basics, PBR material setup and the map types that make a surface read as wood, fabric or metal. Lighting is where most amateur renders fail, so it gets proper time: daylight systems, interior lighting, exposure and the difference between a lit scene and a bright one. Cameras and composition come next, then rendering with V-Ray or Corona including render settings, passes and denoising, and finally post-production in Photoshop. You finish with a rendered visualisation set — exterior, interior and a detail shot — presented as a client would receive it.',
    demand:
      'Architecture and interior practices across this region sell work with renders, and a visualiser who can light a scene properly is the difference between a client signing off and asking to see it again.',
    outcomes: [
      'Modelling from real plans — primitives, splines, editable poly and modifier workflows',
      'Interior and exterior modelling to scale from architectural drawings',
      'Materials and texturing: UV basics, PBR setup and the map types that sell a surface',
      'Lighting properly — daylight systems, interior lighting and exposure control',
      'Camera setup, composition and framing a scene the way a photographer would',
      'Rendering with V-Ray or Corona: settings, passes, denoising and render time control',
      'Post-production in Photoshop, which is where a good render becomes a great one',
      'A rendered visualisation set presented as a client would receive it',
    ],
    modules: [
      {
        title: 'Month 1 — Modelling & Scene Building',
        summary: 'Building accurately from plans, not from imagination.',
        topics: [
          'The 3ds Max interface, units, and working to real-world scale',
          'Standard and extended primitives; spline modelling',
          'Editable poly workflow: vertex, edge, border, polygon and element',
          'Essential modifiers — bend, taper, shell, turbosmooth, symmetry',
          'Modelling interiors and exteriors from an architectural plan',
          'Scene organisation, layers and file management',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Materials, Texturing & Lighting',
        summary: 'The two things that decide whether a render reads as real.',
        topics: [
          'Material editor, PBR material setup and material libraries',
          'Map types: diffuse, roughness, normal, bump, displacement and opacity',
          'UVW mapping and unwrapping basics',
          'Daylight systems, HDRI environments and sun positioning',
          'Interior lighting: area lights, IES profiles and light portals',
          'Exposure, white balance and the difference between lit and merely bright',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Cameras, Rendering & Post-Production',
        summary: 'Composition, render settings, and the post-production that finishes it.',
        topics: [
          'Physical cameras, focal length, depth of field and composition',
          'V-Ray or Corona render setup and quality settings',
          'Global illumination, render passes and denoising',
          'Render time management and batch rendering',
          'Post-production in Photoshop: colour, contrast and pass compositing',
          'A presented visualisation set — exterior, interior and detail',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    tools: [
      '3ds Max',
      'V-Ray',
      'Corona Renderer',
      'Adobe Photoshop',
      'PBR material libraries',
      'HDRI environments',
      'UVW mapping',
    ],
    roles: [
      '3D Visualiser',
      'Architectural Rendering Artist',
      '3D Modelling Artist',
      'Interior Visualisation Assistant',
      'Freelance 3D Artist',
    ],
    hiring: [
      'Architecture practices and interior design studios',
      'Real estate developers selling projects before they are built',
      'Furniture and product manufacturers producing catalogue imagery',
      'Freelance and remote visualisation work, which is common in this field',
    ],
    nextSteps: [
      'Revit for BIM alongside visualisation',
      'Advanced V-Ray and Corona techniques',
      'Animation and walkthrough production',
      'Real-time visualisation with Unreal Engine',
    ],
    industries: ['Architecture & interiors', 'Real estate', 'Furniture & product', 'Freelance / remote'],
    salaryRole: '3D Visualiser',
    careerFaqs: [
      {
        q: 'What jobs can I get after a 3ds Max course?',
        a: '3D Visualiser, Architectural Rendering Artist, 3D Modelling Artist and interior visualisation roles. Architecture practices, interior studios and real estate developers here all commission this work, and much of it is also freelance.',
      },
      {
        q: 'What can I earn to start?',
        a: 'A fresher visualiser typically starts around ₹13,000 – ₹24,000 a month locally. Freelance rendering is billed per image or per project and often pays better once your portfolio is strong, since the work is not tied to location.',
      },
      {
        q: 'Is freelance realistic in this field?',
        a: 'More than in most of this section. A render is a deliverable a client can judge instantly, and a strong portfolio travels — students take on work for architects and developers well outside Punjab.',
      },
      {
        q: 'Do I need drawing or artistic ability?',
        a: 'Not drawing ability, but an eye helps and it develops with practice. Composition and lighting are taught deliberately, because they are what separate a competent render from a convincing one.',
      },
    ],
    projects: [
      {
        name: 'Interior Model from Plan',
        summary:
          'A room modelled accurately to scale from an architectural plan using editable poly and modifier workflows.',
        tech: ['3ds Max', 'Editable Poly'],
        level: 'Beginner',
        skills: ['Modelling', 'Working to Scale'],
      },
      {
        name: 'Material & Texture Study',
        summary:
          'One scene rendered with a full PBR material set — wood, fabric, metal and glass — with UV mapping handled properly.',
        tech: ['PBR materials', 'UVW mapping'],
        level: 'Intermediate',
        skills: ['Texturing', 'Material Setup'],
      },
      {
        name: 'Daylight & Interior Lighting Study',
        summary:
          'The same scene lit three ways — daylight, evening and artificial — with exposure controlled rather than corrected afterwards.',
        tech: ['Daylight systems', 'IES lights'],
        level: 'Advanced',
        skills: ['Lighting', 'Exposure Control'],
      },
      {
        name: 'Rendered Visualisation Set (Portfolio)',
        summary:
          'A finished exterior, interior and detail render with cameras composed, passes rendered and Photoshop post-production applied — presented as a client would receive it.',
        tech: ['V-Ray / Corona', 'Photoshop'],
        level: 'Advanced',
        skills: ['Rendering', 'Post-Production'],
      },
    ],
    whyNow: {
      title: 'Clients Approve a Render, Not a Drawing',
      points: [
        'Architecture practices, interior studios and developers across this region sell projects with visualisations before anything is built.',
        'A fresher visualiser typically starts around ₹13,000 – ₹24,000 a month locally, and freelance rendering often pays better once the portfolio is strong.',
        'Lighting is where most amateur renders fail, which is why it gets a third of this course rather than a session.',
        'A render is a deliverable a client can judge instantly — which makes a strong portfolio unusually persuasive in this field.',
      ],
    },
    relatedCourses: [
      'after-12th-autocad-course-in-phagwara',
      'after-12th-revit-course-in-phagwara',
      'after-12th-solidworks-course-in-phagwara',
      'after-12th-3-month-digital-marketing-program-in-phagwara',
      'after-12th-digital-marketing-communication-course-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
    ],
    keywords: [
      '3ds max course after 12th in Phagwara',
      '3ds max training Phagwara',
      'architectural visualisation course Punjab',
      'vray rendering training Phagwara',
      '3d visualiser course with placement Phagwara',
    ],
  }),

  certificate({
    ...DESIGN,
    slug: 'after-12th-revit-course-in-phagwara',
    label: 'Revit',
    title: 'Revit Course After 12th in Phagwara',
    icon: 'building',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Building Information Modelling for architecture and construction — the standard tool on modern project teams, taught as a coordinated model rather than a drawing package.',
    overview:
      'Revit is not AutoCAD with 3D bolted on, and treating it that way is the most common mistake a new user makes. This three-month course teaches BIM as what it actually is: one coordinated model from which every drawing, schedule and quantity is generated, so a change made once appears everywhere.\nYou start with the Revit environment, levels and grids, and the discipline of modelling with real building elements — walls, floors, roofs, stairs and openings — rather than lines that look like them. Families follow, because the ability to build and edit a family is what separates a Revit user from a Revit modeller. The second half covers what BIM is actually for: views, sheets and construction documentation generated from the model, schedules and quantity take-offs that update themselves, and coordination across architectural, structural and MEP models with clash awareness. Every module ends in model work a trainer reviews, and you finish with a modelled building and its documentation set.',
    demand:
      'Project teams have standardised on BIM and now expect a coordinated model rather than a drawing package — and there are far more people who can draw than people who can model.',
    outcomes: [
      'BIM fundamentals and why a coordinated model differs from a set of drawings',
      'The Revit environment, levels, grids and project setup',
      'Modelling with real building elements — walls, floors, roofs, ceilings, stairs and openings',
      'Families: using, editing and building the components a project depends on',
      'Views, sheets and construction documentation generated from the model',
      'Schedules and quantity take-offs that update themselves when the model changes',
      'Coordination across architectural, structural and MEP models, with clash awareness',
      'A modelled building delivered with its full documentation set',
    ],
    modules: [
      {
        title: 'Month 1 — BIM Fundamentals & Building Elements',
        summary: 'Modelling with real elements rather than lines that resemble them.',
        topics: [
          'What BIM is, and how a coordinated model differs from drawings',
          'The Revit interface, project browser, levels and grids',
          'Walls, wall types and compound structures',
          'Floors, ceilings, roofs and openings',
          'Doors, windows and hosted components',
          'Stairs, ramps and railings',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Families, Views & Documentation',
        summary: 'The skill that separates a Revit user from a Revit modeller.',
        topics: [
          'System, loadable and in-place families',
          'Editing and building a parametric family',
          'View types: plans, sections, elevations, callouts and 3D views',
          'View templates, filters and graphic control',
          'Sheets, title blocks and drawing numbering',
          'Annotation, dimensioning and tags driven by model data',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Schedules, Coordination & Project',
        summary: 'What BIM is actually for — data, quantities and coordination.',
        topics: [
          'Schedules, material take-offs and quantity extraction',
          'Parameters, shared parameters and model data',
          'Linking architectural, structural and MEP models',
          'Copy/monitor, coordination review and clash awareness',
          'Worksharing basics and collaboration on a project team',
          'Export, printing and a full building documentation set',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    tools: [
      'Autodesk Revit',
      'Revit families',
      'Schedules & take-offs',
      'View templates',
      'Linked models & coordination',
      'Worksharing basics',
      'IFC / DWG export',
    ],
    roles: [
      'BIM Modeller',
      'Architectural Assistant',
      'Revit Draughtsman',
      'BIM Coordinator (Junior)',
      'Freelance BIM Modeller',
    ],
    hiring: [
      'Architecture practices working to BIM deliverables',
      'Construction and project management firms',
      'MEP and structural consultancies',
      'BIM outsourcing studios serving overseas projects',
    ],
    nextSteps: [
      'BIM coordination and Navisworks clash detection',
      '3ds Max for visualisation from the Revit model',
      'AutoCAD for legacy 2D documentation',
      'Project and construction management',
    ],
    industries: ['Architecture', 'Construction & PM', 'MEP consulting', 'BIM outsourcing'],
    salaryRole: 'BIM Modeller',
    careerFaqs: [
      {
        q: 'What jobs can I get after a Revit course?',
        a: 'BIM Modeller, Architectural Assistant, Revit Draughtsman and junior BIM coordination roles. Architecture practices, construction and project management firms, MEP consultancies and BIM outsourcing studios all hire for it.',
      },
      {
        q: 'What can I earn to start?',
        a: 'A fresher BIM modeller typically starts around ₹15,000 – ₹26,000 a month locally — the highest of the four design tracks here, because BIM outsourcing studios serving overseas projects compete for the same people.',
      },
      {
        q: 'Is Revit replacing AutoCAD?',
        a: 'For building projects it largely has, though AutoCAD remains everywhere for legacy drawings and for work that never needed a model. The practical answer is that Revit is where new building work is going and AutoCAD is what you will still be handed — knowing both is the strongest position.',
      },
      {
        q: 'Is there outsourcing work in this?',
        a: 'A great deal. BIM studios in India model for practices in the UK, the Gulf and North America, and that work is one of the more reliable routes from a first job to a well-paid one.',
      },
    ],
    projects: [
      {
        name: 'Building Shell Model',
        summary:
          'A building modelled with real elements — walls, floors, roofs, stairs and openings — set out on correct levels and grids.',
        tech: ['Revit', 'Levels & grids'],
        level: 'Beginner',
        skills: ['BIM Modelling', 'Project Setup'],
      },
      {
        name: 'Custom Parametric Family',
        summary:
          'A loadable family built from scratch with parameters that drive its geometry, then used across the project model.',
        tech: ['Revit families', 'Parameters'],
        level: 'Intermediate',
        skills: ['Family Creation', 'Parametric Design'],
      },
      {
        name: 'Schedules & Quantity Take-Off',
        summary:
          'Schedules and material take-offs generated from the model, then proved to update correctly after the model is changed.',
        tech: ['Schedules', 'Take-offs'],
        level: 'Advanced',
        skills: ['Model Data', 'Quantification'],
      },
      {
        name: 'Coordinated Documentation Set (Portfolio)',
        summary:
          'A full construction documentation set — plans, sections, elevations, details and schedules on sheets — with linked structural and MEP models coordinated against it.',
        tech: ['Sheets', 'Linked models', 'Coordination'],
        level: 'Advanced',
        skills: ['Documentation', 'Coordination'],
      },
    ],
    whyNow: {
      title: 'Project Teams Have Standardised on BIM',
      points: [
        'A coordinated model, not a drawing package, is now the deliverable on most building projects — and far more people can draw than can model.',
        'A fresher BIM modeller typically starts around ₹15,000 – ₹26,000 a month locally, the highest of the four design tracks here.',
        'BIM outsourcing studios in India model for practices in the UK, the Gulf and North America, which widens the market considerably.',
        'The ability to build and edit a family is what separates a Revit user from a Revit modeller, and it is a whole month of this course.',
      ],
    },
    relatedCourses: [
      'after-12th-autocad-course-in-phagwara',
      'after-12th-3ds-max-course-in-phagwara',
      'after-12th-solidworks-course-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-digital-marketing-communication-course-in-phagwara',
      'after-12th-python-programming-course-in-phagwara',
    ],
    keywords: [
      'revit course after 12th in Phagwara',
      'revit training Phagwara',
      'BIM course after 12th Punjab',
      'building information modelling training Phagwara',
      'revit course with placement Phagwara',
    ],
  }),
]
