/**
 * AI & Data course pages.
 *
 * Only what genuinely differs between tracks is written here — the audience
 * grid, the "why this programme" cards, the instructor panel, the shared FAQs
 * and the student reviews all come from `./shared` via `makeCourse`.
 *
 * @see ./factory for what each field becomes on the page.
 */

import { makeCourse } from './factory'
import type { CourseContent } from './types'

export const AI_DATA_COURSES: CourseContent[] = [
  makeCourse({
    slug: 'artificial-intelligence-course-in-phagwara',
    label: 'Artificial Intelligence',
    title: 'Artificial Intelligence Course in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'sparkles',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn AI from Python fundamentals to Machine Learning, Deep Learning, NLP and Generative AI — with live projects and placement assistance.',
    overview:
      'Techcadd’s Artificial Intelligence Programming Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, entrepreneurs and aspiring freelancers who want practical skill in AI and modern programming. It covers Python, data analysis, Machine Learning, Deep Learning, Neural Networks, Natural Language Processing, Computer Vision, Generative AI, prompt engineering, APIs, automation and AI-powered application development. The training is hands-on throughout — live projects, practical assignments and industry-standard tools — so you learn to collect, prepare, analyse and use data while building models and applications that solve real problems. Unlike purely theoretical AI learning, you get exposure to real programming scenarios, machine learning workflows, model development and performance evaluation, and you finish understanding how businesses actually use AI to automate work, recognise patterns, generate content and make better decisions.',
    demand:
      'Every sector hiring in Punjab now has an AI line in its budget, and the shortage is not people who can prompt a chatbot — it is people who can prepare data, train a model and tell you whether the result is any good.',
    modules: [
      {
        title: 'AI Foundations & Python Programming',
        summary:
          'Understand how Artificial Intelligence works and how programming supports intelligent systems.',
        topics: [
          'Python fundamentals, variables, data types and operators',
          'Conditions, loops and functions',
          'Lists, dictionaries and other data structures',
          'Problem-solving and programming logic',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Analysis & Data Preparation',
        summary:
          'Learn how AI professionals work with data — the unglamorous part that decides whether a model works.',
        topics: [
          'Structured and unstructured data',
          'Cleaning, organising and preparing datasets',
          'Data analysis techniques in Python',
          'Identifying patterns and meaningful information',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Machine Learning & Model Development',
        summary:
          'Learn to build and train Machine Learning models, and to judge whether their predictions hold up.',
        topics: [
          'Supervised and unsupervised learning',
          'Regression and classification algorithms',
          'Training and testing datasets',
          'Features, labels, accuracy and performance',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Artificial Intelligence & Predictive Systems',
        summary:
          'Build intelligent solutions that identify patterns and make predictions on real business scenarios.',
        topics: [
          'How algorithms process information',
          'Model selection and problem-solving approaches',
          'Prediction and classification systems',
          'Real-world AI applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Deep Learning & Neural Networks',
        summary:
          'Learn how modern AI systems use Neural Networks to handle patterns simpler models cannot.',
        topics: [
          'Neurons, layers and activation functions',
          'Deep Learning concepts',
          'How models process complex patterns',
          'Training, validation and model performance',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Natural Language Processing & AI Applications',
        summary:
          'Discover how Artificial Intelligence works with human language, from raw text to a working chat system.',
        topics: [
          'Text processing and language data',
          'Natural Language Processing fundamentals',
          'Text classification and intelligent chat systems',
          'How AI applications process and generate language',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Generative AI & Prompt Engineering',
        summary:
          'Discover how Generative AI is changing technology, and how to use it without surrendering your judgement.',
        topics: [
          'How Large Language Models work at a practical level',
          'AI tools for research, coding, content and automation',
          'Prompt engineering techniques',
          'Responsible AI practice, accuracy and human judgement',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI APIs, Automation & Intelligent Workflows',
        summary:
          'Learn how modern AI connects to applications and takes repetitive work off people’s hands.',
        topics: [
          'APIs and AI integration',
          'Working with AI-powered tools and services',
          'Building automation workflows',
          'Connecting AI models to practical applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live AI Projects, Portfolio & Career Preparation',
        summary:
          'One end-to-end project from problem to presentation, then learning to defend it out loud.',
        topics: [
          'An end-to-end AI project: problem, data, model, testing',
          'Portfolio projects that demonstrate technical skill',
          'Discussing AI projects in interviews and client meetings',
          'Career paths in AI, ML, Data Science, Python and Generative AI',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Write Python confidently enough to build AI workflows from scratch',
      'Collect, clean and prepare real datasets for modelling',
      'Train, test and evaluate supervised and unsupervised models',
      'Build introductory Deep Learning and NLP applications',
      'Use Generative AI and APIs to automate real workflows',
      'Ship an end-to-end AI project you can defend in an interview',
    ],
    tools: [
      'Python',
      'Jupyter Notebook',
      'Google Colab',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Hugging Face',
      'OpenAI APIs',
      'Git & GitHub',
      'VS Code',
      'SQL',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need to understand advanced AI before learning the fundamentals. A structured course covers Python, problem solving, data handling, Machine Learning basics and practical workflows — a smart way to start exploring modern technology alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical technology skill. Whatever you study — computer science, engineering, mathematics, commerce, management or arts — AI shows you how intelligent systems use data and algorithms to solve hard problems.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning programming, mathematics, Machine Learning and AI tools alone is confusing. A structured path replaces tutorial-collecting with understanding how real projects work — preparing data, training models, testing predictions and building applications.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, software development, data analysis, digital marketing or automation? AI makes your existing experience more valuable. Software professionals learn how AI features get built in; data professionals learn how models find patterns and generate predictions.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become an AI engineer to benefit. Understanding how automation works, how AI tools process information and how customer data can be analysed makes you a better judge of technology decisions — and easier for developers to work with.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'AI automation, Python work, Machine Learning projects, chatbot development, Generative AI applications, data analysis and API integration are all billable. The course teaches you to think like an AI developer, not just operate the tools.',
      },
    ],
    whyChooseUs: [
      {
        title: 'AI skills are in demand across industries',
        copy: 'Healthcare, finance, e-commerce, education, IT, manufacturing, startups and digital businesses are all exploring AI to automate processes, analyse data and build smarter products. Python, ML, Deep Learning, NLP and Generative AI apply across all of them.',
      },
      {
        title: 'Learn how AI actually works',
        copy: 'Using a tool is the beginning. Python fundamentals, data structures, OOP, data preparation and analysis, supervised and unsupervised learning, regression and classification, model training and testing, Neural Networks, NLP, Generative AI, APIs and evaluation.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials introduce concepts; practical training teaches you to solve problems. Hands-on work spans Python, data cleaning, ML models, prediction systems, chatbots, automation, visualisation, evaluation and Generative AI applications.',
      },
      {
        title: 'Solve problems, not just operate tools',
        copy: 'Generating an answer with AI is easy; building a useful solution is the challenge. You learn to evaluate data, select algorithms, train, test and improve — and to judge whether a solution is actually worth anything.',
      },
      {
        title: 'AI and Generative AI are changing technology',
        copy: 'AI is changing how code gets written and how businesses automate. But tools do not replace understanding: problem framing, data quality, model limitations, accuracy, ethics and real-world requirements still need a person who knows what they are looking at.',
      },
    ],
    whyNow: {
      title: 'Build AI Skills You Can Show, Not Just Talk About',
      points: [
        'Practical projects give you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates Python, data analysis, ML, Deep Learning, Generative AI and automation in interviews or freelance discussions.',
        'AI and Python roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher with real project work.',
        'The goal is not learning to use an AI chatbot — it is turning data, programming and real problems into intelligent solutions.',
      ],
    },
    roles: [
      'AI Developer',
      'Machine Learning Engineer',
      'Data Analyst',
      'Python Developer',
      'Generative AI Specialist',
      'AI Automation Specialist',
      'Deep Learning Associate',
      'Freelance AI Developer',
    ],
    roleDetails: [
      {
        role: 'AI Developer',
        copy: 'Build AI-powered applications that solve real problems, working across Python, data processing, AI APIs, Machine Learning and intelligent workflows. The most popular path after this course.',
      },
      {
        role: 'Machine Learning Engineer',
        copy: 'Develop and improve models that analyse patterns and make predictions — data preparation, algorithm selection, training, testing and performance evaluation.',
      },
      {
        role: 'Data Analyst',
        copy: 'Use analysis tools and programming to find meaningful patterns in data, working with datasets, visualisation, reporting and the workflows behind better decisions.',
      },
      {
        role: 'Python Developer',
        copy: 'Build applications and automation in Python — programming logic, APIs, databases, data processing and AI libraries as the project needs them.',
      },
      {
        role: 'Generative AI Specialist',
        copy: 'Work with Generative AI tools and Large Language Models to build intelligent applications, automation workflows, AI assistants and content or data-processing solutions.',
      },
      {
        role: 'AI Automation Specialist',
        copy: 'Build automated workflows that use AI to remove repetitive work, connecting APIs, AI tools, prompts and real business processes.',
      },
      {
        role: 'Deep Learning Associate',
        copy: 'Work with Neural Networks and Deep Learning on complex patterns in text, images and other data — model development, training and experimentation.',
      },
      {
        role: 'Freelance AI Developer',
        copy: 'Build a freelance practice helping businesses with AI applications, automation, Python solutions, chatbots, ML projects and Generative AI workflows, locally or remotely.',
      },
    ],
    hiring: [
      'IT companies developing AI-powered software and applications',
      'Startups building Machine Learning and intelligent products',
      'Data-driven companies using AI for predictions and automation',
      'E-commerce businesses using recommendation and analytics systems',
      'Healthcare and finance organisations using data intelligence',
    ],
    nextSteps: [
      'Deep Learning specialisation',
      'Computer Vision',
      'MLOps & model deployment',
      'Data Science in depth',
    ],
    industries: ['IT & software', 'Startups', 'E-commerce', 'Healthcare & finance'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They run above the programming courses, which is the AI
     * premium the client's own research reports. `scale` is the midpoint in
     * ₹/month; remote sits below Punjab at the fresher end on purpose, since
     * freelance income ramps rather than starting at a salary.
     */
    salary: {
      role: 'AI Developer',
      summary:
        'Builds AI-powered applications, models and automation. Earnings vary with your skills, programming experience, portfolio, certifications, company, location and project capability.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹35,000–₹65,000/month',
      markets: [
        {
          name: 'Punjab — AI / Python',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹35,000–₹65,000/month',
          scale: { fresher: 27500, after2: 50000 },
        },
        {
          name: 'Delhi / NCR — AI / ML',
          fresher: '₹30,000–₹50,000/month',
          after2: '₹50,000–₹90,000+/month',
          scale: { fresher: 40000, after2: 70000 },
        },
        {
          name: 'Remote / Freelance AI Work',
          fresher: '₹15,000–₹30,000/month',
          after2: '₹40,000–₹1,00,000+/month',
          scale: { fresher: 22500, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'AI Developer, Machine Learning Engineer, Data Analyst, Python Developer, Generative AI Specialist, AI Automation Specialist and Deep Learning Associate. Practical project experience and problem-solving ability matter more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real project work starts around ₹20,000 – ₹35,000 a month in the Punjab market, rising to ₹35,000 – ₹65,000 with two years of experience. Delhi/NCR runs materially higher, and specialists move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and AI freelancing has the widest ceiling of anything in the catalogue — ₹40,000 to over ₹1,00,000 a month once you have delivered real work. It starts lower, around ₹15,000 – ₹30,000, because freelance income ramps rather than starting at a salary.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies building AI-powered software, startups building ML products, data-driven companies using AI for prediction and automation, e-commerce businesses running recommendation and analytics systems, and healthcare and finance organisations — plus remote and freelance clients.',
      },
      {
        q: 'Do I need to be good at mathematics?',
        a: 'Less than people fear. The course teaches the concepts you need as you meet them, and the practical work is programming and data handling rather than proofs. Comfort with school-level algebra and statistics is plenty to start; the depth comes later, if you specialise.',
      },
    ],
    projects: [
      {
        name: 'Machine Learning Model Development',
        summary:
          'Build a complete ML project from scratch: prepare datasets, identify features, select an algorithm, train the model and evaluate predictions against real problem scenarios.',
        tech: ['Machine Learning', 'Python'],
        level: 'Beginner',
        skills: ['Data Analysis', 'Model Training'],
      },
      {
        name: 'AI Prediction System',
        summary:
          'Build a prediction application that analyses data and produces useful outcomes, working through training, testing and performance evaluation.',
        tech: ['Python', 'Machine Learning'],
        level: 'Beginner',
        skills: ['Prediction Models', 'Evaluation'],
      },
      {
        name: 'Data Analysis & Visualisation',
        summary:
          'Run a complete analysis project in Python: clean and organise datasets, find useful patterns, build visualisations and draw conclusions that hold.',
        tech: ['Pandas', 'Matplotlib'],
        level: 'Intermediate',
        skills: ['Data Analysis', 'Visualisation'],
      },
      {
        name: 'AI-Powered Classification Project',
        summary:
          'Build a classification system that organises or identifies information from data patterns — training data, model, evaluation and how the algorithm reaches its answer.',
        tech: ['Machine Learning', 'Scikit-learn'],
        level: 'Intermediate',
        skills: ['Classification', 'Model Training'],
      },
      {
        name: 'AI Automation Project',
        summary:
          'Build an automation workflow with AI tools and programming, connecting models, APIs, prompts and a real business process.',
        tech: ['APIs', 'Python'],
        level: 'Intermediate',
        skills: ['AI Automation', 'Intelligent Workflows'],
      },
      {
        name: 'Natural Language Processing Project',
        summary:
          'Build an intelligent text-processing system: analyse language data, find text patterns and work through classification or generation workflows.',
        tech: ['NLP', 'Python'],
        level: 'Advanced',
        skills: ['Text Analysis', 'Artificial Intelligence'],
      },
      {
        name: 'Generative AI Application',
        summary:
          'Build an intelligent application on Generative AI tools and APIs — prompts, responses, automation and practical workflows, with accuracy and responsible use kept central.',
        tech: ['Generative AI', 'OpenAI APIs'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Automation'],
      },
      {
        name: 'End-to-End AI Capstone',
        summary:
          'Build a complete AI solution for a real problem: identify it, prepare the data, develop and test the model, integrate it and present the finished work.',
        tech: ['Artificial Intelligence', 'Python'],
        level: 'Advanced',
        skills: ['Machine Learning', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a real problem into a structured AI solution: research it, understand the data available, identify the variables that matter and choose an approach with measurable goals.',
        artefact: 'Problem Analysis & AI Project Brief',
      },
      {
        title: 'Build',
        copy: 'Develop with trainer guidance — Python, data preparation, ML algorithms, model training, AI APIs, Generative AI and automation — then improve on what the results actually show.',
        artefact: 'Machine Learning Model & AI Development',
      },
      {
        title: 'Present & Improve',
        copy: 'Present the problem, dataset, approach, results and technical decisions like a professional. Learn to name a solution’s limitations and explain your work convincingly.',
        artefact: 'End-to-End AI Project & Portfolio',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready AI certificate',
        copy: 'A certificate reflecting practical understanding of Python, data analysis, Machine Learning, Deep Learning, Generative AI, Neural Networks and AI application development.',
      },
      {
        title: 'Learn through practical AI projects',
        copy: 'Work on projects that mirror real technology challenges — preparing datasets, building models, analysing information, evaluating predictions and improving through testing.',
      },
      {
        title: 'Build an AI portfolio',
        copy: 'ML models, data analysis projects, prediction systems, chatbots, automation workflows and Generative AI applications — proof of skill you can put in front of an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, interview preparation for AI and Python roles, guidance on presenting technical projects, and a clear picture of the career paths in AI, ML and Data Science.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand AI',
        copy: 'AI moves constantly — new ML techniques, Generative AI tools, platforms and workflows. Teaching uses current practice and practical examples, so you understand how intelligent systems work rather than only how to operate them.',
      },
      {
        title: 'Live and practical AI projects',
        copy: 'Without practical work it is hard to see how data, programming and models fit together. Projects span Python, data analysis, ML, model training, prediction systems, Generative AI, NLP, automation and APIs.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss a difficult concept and get guidance mid-project — whether you are starting from scratch or strengthening existing programming skill.',
      },
      {
        title: 'Build an AI portfolio',
        copy: 'Finishing should mean more than a certificate. Practical projects produce portfolio work demonstrating Python, data analysis, ML, Generative AI and automation — something real to discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across AI development, ML, Data Science and automation.',
      },
      {
        title: 'A practical approach to AI',
        copy: 'The goal is confidence solving technology problems, not memorising algorithms or copying AI-generated code — practical Python, ML, data analysis, Deep Learning, Generative AI, automation and APIs.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'AI curriculum',
          techcadd:
            'Industry-focused training covering Python, Data Analysis, Machine Learning, Deep Learning, Generative AI, APIs and AI automation',
          others: 'Often focuses mainly on basic AI concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real technology scenarios',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical AI training',
          techcadd:
            'Students learn data preparation, model development, testing, AI tools and application workflows',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Machine Learning skills',
          techcadd: 'Covers algorithms, data processing, model training, testing and evaluation',
          others: 'May cover only selected ML concepts',
        },
        {
          feature: 'AI project development',
          techcadd: 'Focus on solving problems through practical AI projects',
          others: 'Project exposure can vary',
        },
        {
          feature: 'Data analysis',
          techcadd:
            'Practical understanding of datasets, analysis, visualisation and model inputs',
          others: 'Data preparation may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and AI projects that help students demonstrate their skills',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
        },
        {
          feature: 'Doubt support',
          techcadd:
            'Trainer guidance throughout to help clarify programming and AI concepts',
          others: 'Support may be limited to scheduled sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification combined with practical learning exposure',
          others: 'Certification format and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing an AI institute in Phagwara, ask what you will actually learn, whether you will work on practical projects, how Machine Learning is taught, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your AI fundamentals',
        blurb:
          'Understand how AI works and how Python is used to build intelligent solutions — programming fundamentals, data handling and introductory Machine Learning.',
        covers: [
          'Introduction to Artificial Intelligence',
          'Python programming fundamentals',
          'Variables, data types and operators',
          'Conditions and loops',
          'Functions and data structures',
          'Introduction to data analysis',
          'Introduction to Machine Learning',
          'Basic algorithms',
          'Data visualisation basics',
          'AI tools and prompt fundamentals',
        ],
        skills: ['Python', 'Jupyter Notebook', 'Google Colab', 'NumPy', 'Pandas', 'Matplotlib'],
        recommendedFor: 'AI Trainee, Python Trainee, Data Intern and junior technology roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic AI',
        blurb:
          'Build practical skill in data analysis, Machine Learning, model development, prediction systems and AI workflows — the level that makes you job-ready for technical roles.',
        covers: [
          'Advanced Python programming',
          'Data cleaning and processing',
          'Advanced data analysis',
          'Machine Learning algorithms',
          'Regression and classification',
          'Model training and testing',
          'Feature engineering basics',
          'Data visualisation',
          'AI APIs',
          'Natural Language Processing basics',
          'AI automation concepts',
          'Project development',
        ],
        skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'APIs', 'GitHub'],
        recommendedFor:
          'Junior AI Developer, Machine Learning Trainee, Python Developer, Data Analyst and AI Automation roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete AI skill set',
        blurb:
          'Combine Machine Learning with Deep Learning, Generative AI, NLP, AI APIs, automation and advanced application development.',
        covers: [
          'Advanced Machine Learning',
          'Deep Learning fundamentals',
          'Neural Networks',
          'Natural Language Processing',
          'Generative AI',
          'Large Language Models',
          'Prompt engineering',
          'AI APIs and integrations',
          'AI automation workflows',
          'Computer Vision fundamentals',
          'Model evaluation and optimisation',
          'AI application development',
          'Advanced portfolio projects',
          'Project presentation and career preparation',
        ],
        skills: ['TensorFlow', 'Keras', 'PyTorch', 'Hugging Face', 'OpenAI APIs', 'GitHub'],
        recommendedFor:
          'AI Developer, Machine Learning Engineer, Generative AI Specialist, AI Automation Specialist, Data Science Associate and advanced AI pathways.',
      },
    ],
    capabilities: [
      { capability: 'Artificial Intelligence fundamentals', included: [true, true, true] },
      { capability: 'Python programming', included: [true, true, true] },
      { capability: 'Data structures & functions', included: [true, true, true] },
      { capability: 'Data analysis', included: [true, true, true] },
      { capability: 'Machine Learning basics', included: [true, true, true] },
      { capability: 'Regression & classification', included: [false, true, true] },
      { capability: 'Model training & evaluation', included: [false, true, true] },
      { capability: 'Data visualisation', included: [false, true, true] },
      { capability: 'AI APIs', included: [false, true, true] },
      { capability: 'Natural Language Processing', included: [false, true, true] },
      { capability: 'Deep Learning', included: [false, false, true] },
      { capability: 'Neural Networks', included: [false, false, true] },
      { capability: 'Generative AI', included: [false, false, true] },
      { capability: 'Large Language Models', included: [false, false, true] },
      { capability: 'AI automation', included: [false, false, true] },
      { capability: 'Advanced AI projects', included: [false, false, true] },
      { capability: 'Prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional data analysis, Machine Learning, model development and AI workflows. The 9-month programme combines all of it with Deep Learning, Neural Networks, NLP, Generative AI, AI APIs, automation and advanced portfolio projects — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Artificial Intelligence with us?',
      intro:
        'The goal is not learning to use an AI tool. It is understanding how AI works, how data is processed, how models learn patterns, what the results actually mean, and how a solution can be improved.',
      points: [
        {
          title: 'Data first, models second',
          copy: 'Most AI projects fail on the data, not the algorithm. Preparation and analysis are taught properly, before anything is trained.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You write Python, clean real datasets and train your own models from early on. That is where the understanding comes from.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering ML models, prediction, analysis, classification, automation, NLP, Generative AI and a capstone you own.',
        },
        {
          title: 'Judgement over tooling',
          copy: 'Model limitations, accuracy, ethics and knowing when an answer is wrong — the things that separate an AI professional from someone with a chatbot open.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Artificial Intelligence Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how AI systems use programming, data, algorithms and Machine Learning to solve problems. The focus is practical: Python, Data Analysis, Machine Learning, Deep Learning, Generative AI, NLP, AI automation, APIs and project development — real skills rather than theory.',
      },
      {
        q: 'Who can join an Artificial Intelligence Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs and aspiring freelancers. Beginners start with programming fundamentals; technical professionals use it to strengthen their AI and ML skills.',
      },
      {
        q: 'Is Artificial Intelligence a good career option for freshers?',
        a: 'Yes. AI opens opportunities in development, Machine Learning, data analysis, Python, automation and Generative AI. Depending on skills and experience, learners can explore roles such as AI Developer, Machine Learning Engineer, Python Developer, Data Analyst, AI Automation Specialist and Generative AI Specialist.',
      },
      {
        q: 'What will I learn in the Artificial Intelligence Course?',
        a: 'Python, Data Analysis, Machine Learning fundamentals, supervised and unsupervised learning, regression, classification, model training, Neural Networks, Deep Learning, NLP, Generative AI, prompt engineering, APIs, automation and AI project development — plus how to evaluate datasets, understand accuracy and improve solutions.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'AI becomes much easier once you work with real programming, datasets, models and tools. The approach includes practical programming exercises, data analysis, model development, AI projects and automation activities, so you see how solutions are actually created.',
      },
      {
        q: 'Will I work on AI projects during the course?',
        a: 'Yes. Assignments include Machine Learning projects, prediction systems, data analysis projects, AI automation workflows, NLP applications, Generative AI applications and end-to-end AI projects — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Artificial Intelligence after 12th?',
        a: 'Absolutely, if you are interested in programming, technology, data, automation or software development. It lets students develop a specialised technical skill while continuing formal education or preparing for future technology roles.',
      },
      {
        q: 'Can Artificial Intelligence help me become a freelancer?',
        a: 'Yes. Freelancers can offer AI automation, Python development, chatbot development, Machine Learning projects, data analysis, Generative AI applications, API integration and intelligent workflow development. But successful freelancing needs more than tool knowledge: a portfolio, an understanding of client problems and clear communication matter just as much.',
      },
      {
        q: 'Does the course include Generative AI and modern AI tools?',
        a: 'Yes. Modern workflows use Generative AI for coding assistance, research, automation, content processing, chatbots and intelligent applications. The course covers how these tools and APIs support development while keeping programming, problem solving, accuracy and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Artificial Intelligence Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, Python training, Machine Learning modules, practical projects, data analysis, Generative AI exposure, tools covered, trainer experience, portfolio development, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'machine-learning-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
      'python-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'power-bi-course-in-phagwara',
    ],
    keywords: [
      'artificial intelligence course in phagwara',
      'ai programming course in phagwara',
      'artificial intelligence training institute in phagwara',
      'artificial intelligence classes in phagwara',
      'machine learning course in phagwara',
      'artificial intelligence course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'machine-learning-course-in-phagwara',
    label: 'Machine Learning',
    title: 'Machine Learning Course in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Turn data into predictions — Python, preprocessing, supervised and unsupervised learning, model evaluation and live ML projects, with placement assistance.',
    overview:
      'Techcadd’s Machine Learning Programming Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, aspiring data scientists, developers, entrepreneurs and professionals who want practical skill in machine learning and AI. It covers Python, data analysis, data preprocessing, supervised and unsupervised learning, regression, classification, clustering, feature engineering, model evaluation, deep learning fundamentals and AI-powered development tools. The training is hands-on throughout — live projects, practical assignments and industry-standard tooling — so you learn to collect, clean, analyse and transform data before building models that find patterns, make predictions and solve real problems. Unlike purely theoretical learning, you work with real datasets, algorithm selection, model training, performance evaluation and predictive analytics, and you finish understanding how businesses use data to automate decisions and predict outcomes.',
    demand:
      'Prediction work is where the budget actually is — pricing, churn, demand, fraud — and the shortage is not people who know algorithm names but people who can tell a good model from a flattering one.',
    modules: [
      {
        title: 'Python Programming & ML Foundations',
        summary:
          'Understand how Python supports machine learning, and build the programming base the rest depends on.',
        topics: [
          'Programming fundamentals, variables, conditions, loops and functions',
          'OOP concepts, data structures and Python libraries',
          'The basics of machine learning and AI',
          'How data is used to train intelligent systems',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Analysis & Preprocessing',
        summary:
          'Learn to work with real datasets — the part that decides whether anything you train afterwards works.',
        topics: [
          'Data cleaning and missing values',
          'Data transformation and normalisation',
          'Exploratory data analysis',
          'Preparing clean, meaningful training data',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Supervised Machine Learning',
        summary:
          'Learn how machines learn from labelled data, and build your first models that actually predict something.',
        topics: [
          'Regression and classification algorithms',
          'Linear Regression, Logistic Regression, Decision Trees, Random Forest',
          'Model training and prediction',
          'Training and testing datasets',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Unsupervised Machine Learning',
        summary:
          'Discover how machines find hidden structure in data nobody has labelled.',
        topics: [
          'Clustering concepts',
          'K-Means and hierarchical clustering',
          'Dimensionality reduction basics',
          'Pattern discovery and customer segmentation',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Model Evaluation',
        summary:
          'Learn to tell whether a model is genuinely working — the skill that separates practitioners from tutorial-followers.',
        topics: [
          'Accuracy, precision, recall and F1-score',
          'Confusion matrices and regression metrics',
          'Identifying overfitting and underfitting',
          'Comparing multiple algorithms',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Feature Engineering & Optimisation',
        summary:
          'Building a model is the beginning. Learn how professionals improve one over time.',
        topics: [
          'Selecting and transforming useful features',
          'Tuning model parameters',
          'Cross-validation',
          'Making data-driven decisions instead of guessing',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Machine Learning',
        summary:
          'Discover how modern AI tools support ML workflows without replacing the thinking.',
        topics: [
          'AI for coding assistance and research',
          'Using AI to understand datasets and algorithms',
          'Practical prompt techniques for programming',
          'Responsible use, keeping accuracy and originality central',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Data Visualisation & Insights',
        summary:
          'Learn how data teams communicate — turning a technical result into something a decision-maker can act on.',
        topics: [
          'Creating meaningful visualisations',
          'Understanding trends and patterns',
          'Presenting model outcomes clearly',
          'Building a practical reporting workflow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live ML Projects, Portfolio & Career Preparation',
        summary:
          'End-to-end projects from problem to presentation, then learning to defend the work out loud.',
        topics: [
          'Problem understanding, data collection and preprocessing',
          'Model development, evaluation and presentation',
          'Portfolio projects that demonstrate real skill',
          'Career guidance across AI, data science, Python and ML',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Write Python confidently enough to build full ML workflows',
      'Clean, transform and explore real datasets before modelling',
      'Train and compare regression, classification and clustering models',
      'Judge a model honestly using accuracy, precision, recall and F1',
      'Diagnose overfitting and improve models through feature engineering',
      'Ship an end-to-end ML project you can defend in an interview',
    ],
    tools: [
      'Python',
      'Jupyter Notebook',
      'Google Colab',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'SQL',
      'Git & GitHub',
      'VS Code',
      'Power BI Basics',
      'Tableau Basics',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Start with programming, Python fundamentals, data handling and the basics of AI. A structured course takes you through data types, functions, analysis, algorithms, model training and prediction step by step — a smart way to explore AI alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical data skill. Whatever you study — computer science, engineering, mathematics, statistics, IT or commerce — ML shows you how data-driven applications and intelligent systems actually work.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning this alone is confusing. A structured path replaces certificate-collecting with understanding how real projects run: collecting and preparing data, selecting algorithms, training, testing and evaluating accuracy.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in software development, IT, analytics or testing? ML makes your experience more valuable. Developers learn how intelligent features get built in; analysts learn how data becomes predictive insight.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become an ML engineer. Understanding how customer data is analysed, how predictions are generated and where automation applies makes you a better judge of technology decisions — and easier for a data team to work with.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'Data analysis, model development, predictive modelling, visualisation, AI automation and Python projects are all billable. The course teaches you to think like an ML professional, not just run algorithms.',
      },
    ],
    whyChooseUs: [
      {
        title: 'ML skills are in demand across industries',
        copy: 'Healthcare, banking, e-commerce, education, IT, manufacturing, finance and startups all use data and AI to improve decisions and automate work. Python, ML, predictive analytics, regression, classification, clustering and Deep Learning apply across all of them.',
      },
      {
        title: 'Learn how machine learning actually works',
        copy: 'Training a model is one part. Python and data structures, collection and preprocessing, visualisation, feature selection, supervised and unsupervised learning, evaluation, overfitting, hyperparameter tuning and deployment basics are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you algorithm names. Practical training teaches you to apply them — data cleaning, exploratory analysis, feature engineering, training, prediction, visualisation and performance evaluation.',
      },
      {
        title: 'Solve problems, not just train models',
        copy: 'Running an algorithm is easy; knowing which one fits the problem is the challenge. You learn to read accuracy, precision, recall, F1, mean squared error and confusion matrices, and judge whether results are genuinely useful.',
      },
      {
        title: 'Machine Learning and AI are changing technology',
        copy: 'AI is changing how developers analyse data and experiment with algorithms. But tools do not replace understanding: the problem, dataset, features, training process, metrics, limitations and business objective still need a person who knows what they are looking at.',
      },
    ],
    whyNow: {
      title: 'Build ML Skills You Can Show, Not Just Talk About',
      points: [
        'Project-based learning gives you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates Python, data analysis, algorithms, model development and predictive analytics in interviews or freelance discussions.',
        'ML and data science roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher with real project work.',
        'The goal is not learning algorithm names — it is transforming data into useful predictions.',
      ],
    },
    roles: [
      'Machine Learning Engineer',
      'Junior Data Scientist',
      'AI Developer',
      'Data Analyst with ML Skills',
      'Python ML Developer',
      'Machine Learning Analyst',
      'AI-Powered Automation Specialist',
      'Freelance ML Developer',
    ],
    roleDetails: [
      {
        role: 'Machine Learning Engineer',
        copy: 'Build, train, test and improve models against real requirements, working across Python, datasets, algorithms, evaluation, feature engineering and predictive analytics. The most popular path after this course.',
      },
      {
        role: 'Junior Data Scientist',
        copy: 'Analyse datasets with statistical and ML techniques to find patterns and generate predictions — preparation, analysis, visualisation, experimentation and model development.',
      },
      {
        role: 'AI Developer',
        copy: 'Build intelligent applications using ML models and modern AI technologies, across programming, algorithms, APIs, automation and data.',
      },
      {
        role: 'Data Analyst with ML Skills',
        copy: 'Analyse structured information and use predictive technique to surface trends and business insight, working with Python, SQL, visualisation and statistics.',
      },
      {
        role: 'Python ML Developer',
        copy: 'Build Python applications and ML solutions on NumPy, Pandas, Scikit-learn, TensorFlow and the surrounding AI tooling.',
      },
      {
        role: 'Machine Learning Analyst',
        copy: 'Track and evaluate model performance against real metrics — what is working, how algorithms compare, and where the workflow can improve.',
      },
      {
        role: 'AI-Powered Automation Specialist',
        copy: 'Combine programming and ML with modern AI tools to build intelligent workflows, automate repetitive work and analyse information at scale.',
      },
      {
        role: 'Freelance ML Developer',
        copy: 'Build a freelance practice on Python, data analysis, predictive modelling, ML projects and AI-powered solutions for businesses and remote clients.',
      },
    ],
    hiring: [
      'IT companies developing AI-powered applications',
      'Startups working with data, automation and intelligent products',
      'Software companies integrating machine learning features',
      'E-commerce businesses using recommendation and prediction systems',
      'Healthcare, finance and analytics organisations',
    ],
    nextSteps: [
      'Deep Learning specialisation',
      'Natural Language Processing',
      'MLOps & model deployment',
      'Data Science in depth',
    ],
    industries: ['IT & software', 'Startups', 'E-commerce', 'Healthcare & finance'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They carry the same AI premium as the AI course, with a
     * slightly lower Punjab ceiling. `scale` is the midpoint in ₹/month;
     * remote sits below Punjab at the fresher end on purpose, since freelance
     * income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Machine Learning Engineer',
      summary:
        'Builds, trains and improves predictive models on real data. Earnings vary with your skills, project experience, portfolio, certifications, company, location and technical depth.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹35,000–₹60,000/month',
      markets: [
        {
          name: 'Punjab — Machine Learning / Data Science',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹35,000–₹60,000/month',
          scale: { fresher: 27500, after2: 47500 },
        },
        {
          name: 'Delhi / NCR — Machine Learning / AI',
          fresher: '₹30,000–₹50,000/month',
          after2: '₹50,000–₹90,000+/month',
          scale: { fresher: 40000, after2: 70000 },
        },
        {
          name: 'Remote / Freelance ML Projects',
          fresher: '₹15,000–₹30,000/month',
          after2: '₹40,000–₹1,00,000+/month',
          scale: { fresher: 22500, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Machine Learning Engineer, Junior Data Scientist, AI Developer, Python Developer and Data Analyst. Practical project experience and the ability to read model performance matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real project work starts around ₹20,000 – ₹35,000 a month in the Punjab market, rising to ₹35,000 – ₹60,000 with two years of experience. Delhi/NCR runs materially higher, and specialists move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and the ceiling is high — ₹40,000 to over ₹1,00,000 a month once you have delivered real work. It starts lower, around ₹15,000 – ₹30,000, because freelance income ramps rather than starting at a salary.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies building AI-powered applications, startups working on data and intelligent products, software companies adding ML features, e-commerce businesses running recommendation and prediction systems, and healthcare, finance and analytics organisations — plus remote and freelance clients.',
      },
      {
        q: 'Should I take this or the Artificial Intelligence course?',
        a: 'They overlap and either is a sound start. Machine Learning goes deeper into models, metrics and evaluation — the statistical core. Artificial Intelligence covers more ground, adding Deep Learning, NLP, Generative AI and APIs. Take ML if you want to be the person who builds and judges models; take AI if you want the broader picture including Generative AI.',
      },
    ],
    projects: [
      {
        name: 'Data Analysis & Preprocessing Project',
        summary:
          'Work a real dataset from scratch: clean missing values, transform information, analyse patterns, visualise it and prepare something a model can actually learn from.',
        tech: ['Python', 'Pandas'],
        level: 'Beginner',
        skills: ['Data Cleaning', 'Data Analysis'],
      },
      {
        name: 'Predictive Machine Learning Model',
        summary:
          'Build a model that predicts future outcomes from historical data — training algorithms, testing predictions, comparing results and reading performance honestly.',
        tech: ['Scikit-learn', 'Python'],
        level: 'Beginner',
        skills: ['Regression', 'Prediction'],
      },
      {
        name: 'Classification Project',
        summary:
          'Build a model that sorts information into categories: prepare features, train classification algorithms and evaluate what the accuracy figure really means.',
        tech: ['Decision Tree', 'Random Forest'],
        level: 'Intermediate',
        skills: ['Classification', 'Model Evaluation'],
      },
      {
        name: 'Customer Segmentation Project',
        summary:
          'An unsupervised project finding groups inside a dataset — how clustering helps a business understand the different kinds of customer it actually has.',
        tech: ['K-Means', 'Clustering'],
        level: 'Intermediate',
        skills: ['Unsupervised Learning', 'Data Patterns'],
      },
      {
        name: 'Local Business Data Prediction',
        summary:
          'Build a practical solution on a real business scenario: analyse the data, find the variables that matter, model it and present insight that supports a decision.',
        tech: ['Machine Learning', 'Predictive Analytics'],
        level: 'Intermediate',
        skills: ['Data Science', 'Business Insight'],
      },
      {
        name: 'Model Optimisation Project',
        summary:
          'Take an existing model and make it better. Analyse features, algorithms, predictions, accuracy and errors the way a working ML developer does.',
        tech: ['Feature Engineering', 'Python'],
        level: 'Advanced',
        skills: ['Model Optimisation', 'Performance Analysis'],
      },
      {
        name: 'AI-Powered Data Science Project',
        summary:
          'Use modern AI tools to speed up programming, research, dataset understanding, experimentation and documentation — with technical understanding kept central.',
        tech: ['AI Tools', 'Python'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Automation'],
      },
      {
        name: 'End-to-End ML Capstone',
        summary:
          'A complete solution for a real problem: collection, preprocessing, algorithm selection, training, evaluation, visualisation and presentation.',
        tech: ['Machine Learning', 'Python'],
        level: 'Advanced',
        skills: ['Artificial Intelligence', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a real problem into a structured ML objective: research the dataset, identify relevant features, understand the target outcome and select suitable algorithms with measurable goals.',
        artefact: 'Problem Analysis & Machine Learning Strategy',
      },
      {
        title: 'Build',
        copy: 'Create and train models with trainer guidance — Python, preprocessing, regression, classification, clustering, visualisation and AI-powered workflows — improving on what the metrics show.',
        artefact: 'Python Programming & ML Model Development',
      },
      {
        title: 'Present & Improve',
        copy: 'Present the problem, dataset analysis, algorithm choice, performance and optimisation like a professional. Learn to spot a weak model and say why it is weak.',
        artefact: 'End-to-End ML Project & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready ML certificate',
        copy: 'A certificate reflecting practical understanding of Python, data analysis, supervised and unsupervised learning, regression, classification, clustering, evaluation and predictive analytics.',
      },
      {
        title: 'Learn through practical ML projects',
        copy: 'Work on projects mirroring real technical challenges — cleaning datasets, analysing patterns, selecting algorithms, training, testing predictions, measuring performance and improving results.',
      },
      {
        title: 'Build an ML portfolio',
        copy: 'Data analysis projects, prediction models, classification systems, clustering work, notebooks, visualisations and end-to-end solutions — proof you can put in front of an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, technical interview preparation, guidance on presenting your projects, and a clear picture of career paths in AI, ML, Python and data science.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand AI and ML',
        copy: 'The field moves constantly — new algorithms, AI tools, frameworks and practices. Teaching uses current workflows and practical examples, so you understand not only how to build a model but why one approach beats another.',
      },
      {
        title: 'Live and practical ML projects',
        copy: 'Without practical work it is hard to understand real datasets or model behaviour. Projects span Python, preprocessing, regression, classification, clustering, feature engineering, evaluation, visualisation and AI-powered development.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss a difficult algorithm and get guidance mid-project — whether you are a beginner or strengthening existing programming and data skill.',
      },
      {
        title: 'Build an ML portfolio',
        copy: 'Finishing should mean more than a certificate. Practical projects produce portfolio work demonstrating Python, data analysis, algorithms, model development and AI — something real to discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across ML, data science, programming and automation.',
      },
      {
        title: 'A practical approach to machine learning',
        copy: 'The goal is confidence solving technical problems, not memorising algorithms — practical ML, Python, data science, predictive analytics, data processing, model training and AI development.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Machine Learning curriculum',
          techcadd:
            'Industry-focused training covering Python, data analysis, regression, classification, clustering, model evaluation and AI',
          others: 'Often focuses mainly on basic concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real-world datasets',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical project training',
          techcadd: 'Students learn data preparation, model training, testing and optimisation',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Python skills',
          techcadd: 'Covers Python programming and the machine learning libraries',
          others: 'May cover only selected concepts',
        },
        {
          feature: 'Model optimisation',
          techcadd: 'Focus on understanding performance and improving models',
          others: 'Optimisation training can vary',
        },
        {
          feature: 'Data analysis',
          techcadd: 'Practical understanding of datasets, preprocessing and visualisation',
          others: 'Data preparation may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and projects that demonstrate technical skills',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews and portfolio preparation',
          others: 'Career assistance can vary',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Trainer guidance throughout the learning journey',
          others: 'Support may be limited to scheduled sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification combined with practical learning exposure',
          others: 'Certification format and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a Machine Learning institute in Phagwara, ask what you will actually learn, whether you will work on real datasets and projects, how trainers teach model development, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your ML fundamentals',
        blurb:
          'Understand how Python, data and machine learning fit together — programming, data handling, analysis and the first algorithms.',
        covers: [
          'Introduction to AI and Machine Learning',
          'Python programming fundamentals',
          'Variables, conditions and loops',
          'Functions and data structures',
          'NumPy and Pandas',
          'Data analysis basics',
          'Data visualisation',
          'Introduction to supervised learning',
          'Basic regression and classification',
          'Training, testing and predictions',
        ],
        skills: ['Python', 'Jupyter Notebook', 'Google Colab', 'NumPy', 'Pandas', 'Matplotlib'],
        recommendedFor:
          'Machine Learning Trainee, Python Intern, Data Analyst Intern, AI Trainee and junior technical roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic ML',
        blurb:
          'Practical skill in preprocessing, supervised and unsupervised learning, evaluation, feature engineering and predictive analytics — the job-ready level.',
        covers: [
          'Advanced Python for data science',
          'Data cleaning and preprocessing',
          'Exploratory data analysis',
          'Linear and logistic regression',
          'Decision Trees and Random Forest',
          'K-Nearest Neighbors',
          'Support Vector Machines',
          'Clustering techniques',
          'Feature engineering',
          'Model evaluation metrics',
          'Cross validation',
          'Machine learning project development',
        ],
        skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'SQL basics', 'GitHub'],
        recommendedFor:
          'Junior Machine Learning Engineer, Data Analyst, Python Developer, AI Intern and Data Science Trainee.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete AI & ML skill set',
        blurb:
          'Combine machine learning with deep learning, neural networks, automation, deployment concepts and AI-powered application development.',
        covers: [
          'Advanced machine learning algorithms',
          'Ensemble learning',
          'Advanced feature engineering',
          'Deep Learning fundamentals',
          'Neural Networks',
          'TensorFlow and Keras',
          'Natural Language Processing basics',
          'Computer Vision basics',
          'Model deployment concepts',
          'APIs and AI integration',
          'Advanced data visualisation',
          'AI tools and prompt engineering',
          'Capstone project and portfolio presentation',
        ],
        skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'SQL', 'GitHub', 'APIs'],
        recommendedFor:
          'Machine Learning Engineer, AI Developer, Data Scientist, Python AI Developer, Deep Learning Trainee and AI Specialist pathways.',
      },
    ],
    capabilities: [
      { capability: 'Python fundamentals', included: [true, true, true] },
      { capability: 'Machine Learning basics', included: [true, true, true] },
      { capability: 'Data analysis', included: [true, true, true] },
      { capability: 'Data preprocessing', included: [true, true, true] },
      { capability: 'Regression', included: [true, true, true] },
      { capability: 'Classification', included: [true, true, true] },
      { capability: 'Model evaluation', included: [false, true, true] },
      { capability: 'Feature engineering', included: [false, true, true] },
      { capability: 'Clustering', included: [false, true, true] },
      { capability: 'Advanced algorithms', included: [false, true, true] },
      { capability: 'Deep Learning', included: [false, false, true] },
      { capability: 'Neural Networks', included: [false, false, true] },
      { capability: 'TensorFlow & Keras', included: [false, false, true] },
      { capability: 'NLP basics', included: [false, false, true] },
      { capability: 'Computer Vision basics', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional data analysis, model development, evaluation and optimisation. The 9-month programme combines all of it with advanced machine learning, deep learning, neural networks and modern AI development — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Machine Learning with us?',
      intro:
        'The goal is not learning to run an algorithm. It is understanding why a model works, how data shapes predictions, what the performance metrics actually mean, and how a weak solution can be improved.',
      points: [
        {
          title: 'Metrics taught honestly',
          copy: 'Accuracy alone flatters a bad model. Precision, recall, F1 and confusion matrices are taught as the tools for telling whether your work is real.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You clean real datasets and train your own models from early on. That is where the understanding comes from.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering analysis, prediction, classification, segmentation, a local business scenario, optimisation, AI tooling and a capstone you own.',
        },
        {
          title: 'Judgement over algorithms',
          copy: 'Choosing the right approach for a problem — and knowing when a result is too good to be true — is the skill that gets hired.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Machine Learning Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how machines learn from data and make predictions. The focus is practical: Python, data analysis, preprocessing, supervised and unsupervised learning, regression, classification, clustering, model training and performance evaluation — real technical skill rather than theory.',
      },
      {
        q: 'Who can join a Machine Learning Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, developers, entrepreneurs and aspiring freelancers. Beginners start with programming fundamentals; technical professionals use it to strengthen their AI and data science skills.',
      },
      {
        q: 'Is Machine Learning a good career option for freshers?',
        a: 'Yes. It opens opportunities in artificial intelligence, data science, predictive analytics, automation and software development. Depending on skills and experience, learners can explore roles such as Machine Learning Engineer, Junior Data Scientist, AI Developer, Python Developer and Data Analyst.',
      },
      {
        q: 'What will I learn in the Machine Learning Course?',
        a: 'Python, data analysis, preprocessing, regression, classification, clustering, supervised and unsupervised learning, feature engineering, model evaluation, data visualisation, AI fundamentals and project development — plus accuracy, precision, recall, F1-score, confusion matrices, overfitting and underfitting.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Machine learning becomes much easier once you work with real datasets, Python code, algorithms and predictions. The approach includes practical data exercises, ML projects, model development, testing, visualisation and real technical scenarios.',
      },
      {
        q: 'Will I work on Machine Learning projects during the course?',
        a: 'Yes. Assignments include data analysis projects, regression models, classification systems, clustering projects, predictive analytics, model optimisation and AI-powered applications — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Machine Learning after 12th?',
        a: 'Absolutely, if you are interested in programming, artificial intelligence, data science, mathematics or technology. It lets students develop specialised technical skill while continuing formal education or preparing for future roles.',
      },
      {
        q: 'Can Machine Learning help me become a freelancer?',
        a: 'Yes. Freelancers can work on Python programming, data analysis, predictive models, classification projects, AI automation and ML solutions. But successful freelancing needs more than algorithms: a portfolio, an understanding of client requirements and clear communication matter just as much.',
      },
      {
        q: 'Does the course include AI in Machine Learning?',
        a: 'Yes. Modern workflows use AI for programming assistance, data understanding, algorithm research, documentation, automation and experimentation. The course covers how these tools support technical work while keeping programming knowledge, problem solving and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Machine Learning Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, practical training, Python programming, data science modules, ML projects, trainers, tools covered, model evaluation techniques, portfolio development, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'artificial-intelligence-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
      'python-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'power-bi-course-in-phagwara',
    ],
    keywords: [
      'machine learning course in phagwara',
      'machine learning training in phagwara',
      'machine learning classes in phagwara',
      'ai and machine learning course in phagwara',
      'python machine learning course in phagwara',
      'machine learning course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'deep-learning-course-in-phagwara',
    label: 'Deep Learning',
    title: 'Deep Learning Course in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'sparkles',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Build and train neural networks — CNNs, RNNs, computer vision and NLP on TensorFlow and Keras, with live AI projects and placement assistance.',
    overview:
      'Techcadd’s Deep Learning Programming Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, aspiring AI engineers, developers and professionals who want practical skill in deep learning. It covers Python, data processing, neural networks and deep neural networks, computer vision, natural language processing, convolutional and recurrent networks, model training, TensorFlow, Keras and AI-powered development tools. The training is hands-on throughout — live projects, practical assignments and industry-standard tooling — so you learn to prepare datasets, design architectures, train models, evaluate results and build applications that recognise patterns and solve genuinely hard problems. Unlike purely theoretical education, you work with real datasets, real architectures and real performance optimisation, and finish understanding how companies use deep learning for image recognition, language processing, automation and recommendation.',
    demand:
      'Deep learning is where the AI premium actually sits — vision and language work pays more than general ML because far fewer people can take a model from architecture to something that performs on real data.',
    modules: [
      {
        title: 'Python & Deep Learning Foundations',
        summary:
          'Understand how Python supports AI, and build the programming base neural networks are written on.',
        topics: [
          'Programming fundamentals, data structures, functions and OOP',
          'Machine learning and neural network basics',
          'How artificial neurons learn from data',
          'The foundation for deep learning programming',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Neural Networks & Core Concepts',
        summary:
          'Learn how an artificial neural network actually processes information, from the inside out.',
        topics: [
          'Neurons, layers, weights and biases',
          'Activation functions and loss functions',
          'Forward propagation and backpropagation',
          'Optimisers and gradient descent',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Deep Neural Network Development',
        summary:
          'Design and train deeper architectures, and learn what hidden layers are really buying you.',
        topics: [
          'Hidden layers and complex representations',
          'Working with TensorFlow and Keras',
          'Training models on structured datasets',
          'Validating predictions',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Computer Vision & CNNs',
        summary:
          'Discover how machines learn to understand images, and build one that does.',
        topics: [
          'Image preprocessing and feature extraction',
          'Convolutional Neural Networks',
          'Building image classification models',
          'Object recognition concepts',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'NLP & Sequence Models',
        summary:
          'Learn how intelligent systems process human language, where order and context matter.',
        topics: [
          'Text preprocessing and language data',
          'Sequence modelling concepts',
          'RNN and LSTM fundamentals',
          'Building practical text-based AI applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Model Evaluation & Optimisation',
        summary:
          'Building a network is the beginning. Learn how AI professionals make one perform.',
        topics: [
          'Analysing training and validation results',
          'Identifying overfitting and underfitting',
          'Regularisation concepts',
          'Tuning hyperparameters and comparing architectures',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Deep Learning Development',
        summary:
          'Discover how modern AI tools speed up deep learning work without doing the thinking for you.',
        topics: [
          'AI for coding assistance and technical research',
          'Generating ideas for model architectures',
          'Faster experimentation workflows',
          'Responsible use, keeping technical accuracy central',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'TensorFlow, Keras & Application Development',
        summary:
          'Learn how professional AI developers work with the frameworks the industry actually runs.',
        topics: [
          'Building and training networks in TensorFlow and Keras',
          'Layers and model pipelines',
          'Saving and loading trained models',
          'AI application integration concepts',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Deep Learning Projects, Portfolio & Career Preparation',
        summary:
          'End-to-end AI projects from problem to presentation, then learning to defend them out loud.',
        topics: [
          'Problem understanding, data preparation and architecture design',
          'Model training, evaluation and presentation',
          'Portfolio projects that demonstrate real skill',
          'Career guidance across AI, ML, deep learning and Python',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build a neural network from first principles and explain how it learns',
      'Train deep architectures in TensorFlow and Keras',
      'Build image classification and computer vision models with CNNs',
      'Process language data with RNNs and sequence models',
      'Diagnose overfitting and improve models through regularisation and tuning',
      'Ship an end-to-end deep learning project you can defend in an interview',
    ],
    tools: [
      'Python',
      'Jupyter Notebook',
      'Google Colab',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'PyTorch Basics',
      'Hugging Face Basics',
      'Git & GitHub',
      'VS Code',
      'SQL Basics',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Start with Python, data handling, AI and machine learning before neural networks themselves. A structured course walks through datasets, ML basics, networks and deep learning models step by step — a smart way to explore AI alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical AI skill. Whatever you study — computer science, engineering, IT, mathematics, statistics or data science — deep learning shows you how modern systems process genuinely complex information.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning advanced AI alone is confusing. A structured path replaces certificate-collecting with understanding how real projects run: preparing datasets, designing networks, training, testing outputs and improving performance.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in software development, IT, data science or analytics? Deep learning makes your experience more valuable. Developers learn how AI models get integrated; data professionals learn how deep networks find patterns simpler methods miss.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become an AI engineer. Understanding deep learning helps you judge decisions about automation, intelligent products and AI-powered solutions — and makes working with AI developers and data scientists far easier.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'AI model development, image classification, object detection, NLP applications, predictive systems and deep learning automation are all billable — and command higher rates than general programming work.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Deep learning skills are growing across industries',
        copy: 'Healthcare, finance, autonomous systems, e-commerce, cybersecurity, IT, robotics, media and intelligent automation all use deep learning for problems nothing else solves. Neural networks, computer vision, NLP, TensorFlow, CNN and RNN apply across all of them.',
      },
      {
        title: 'Learn how deep learning actually works',
        copy: 'Training a network is one part. Python and data handling, AI and ML fundamentals, deep networks, activation and loss functions, forward and backward propagation, optimisers, CNNs, RNNs, computer vision, NLP, validation, regularisation and tuning are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials introduce neural networks. Practical training teaches you to build them — preprocessing, network development, image classification, model training, computer vision, NLP and performance optimisation.',
      },
      {
        title: 'Build intelligence, not just write code',
        copy: 'Writing Python matters; building systems that learn from data is the bigger challenge. Recognising images, understanding text, detecting objects, processing speech and automating complex decisions all need judgement about accuracy, loss and validation.',
      },
      {
        title: 'Deep Learning and Generative AI are changing technology',
        copy: 'AI is changing how applications get built and how information is processed. But tools do not replace understanding: the problem, dataset, architecture, training process, limitations and metrics still need someone who knows what they are looking at.',
      },
    ],
    whyNow: {
      title: 'Build Deep Learning Skills You Can Show, Not Just Talk About',
      points: [
        'Practical AI projects give you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates Python, neural networks, computer vision, NLP, TensorFlow and model development in interviews.',
        'AI and deep learning roles in Punjab start around ₹25,000 – ₹40,000 a month for a fresher — the highest fresher band in the catalogue.',
        'The goal is not understanding neural network concepts — it is building, training, evaluating and improving intelligent systems.',
      ],
    },
    roles: [
      'Deep Learning Engineer',
      'AI Engineer',
      'Computer Vision Engineer',
      'NLP Engineer',
      'Python AI Developer',
      'Deep Learning Research Associate',
      'AI Automation Specialist',
      'Freelance AI & Deep Learning Developer',
    ],
    roleDetails: [
      {
        role: 'Deep Learning Engineer',
        copy: 'Build, train, test and optimise advanced neural networks against real requirements, working across Python, TensorFlow, Keras, datasets, architectures and performance evaluation. The major path after this course.',
      },
      {
        role: 'AI Engineer',
        copy: 'Develop intelligent software systems using machine learning, deep learning and modern AI — programming, models, data, automation, APIs and application features.',
      },
      {
        role: 'Computer Vision Engineer',
        copy: 'Build systems that process and understand images, working with image datasets, CNNs, OpenCV, classification and object detection.',
      },
      {
        role: 'NLP Engineer',
        copy: 'Build applications that work with human language and text — preprocessing, sequence models, language processing and AI-powered communication systems.',
      },
      {
        role: 'Python AI Developer',
        copy: 'Build Python-based AI applications on TensorFlow, Keras, NumPy, Pandas and the surrounding development tooling.',
      },
      {
        role: 'Deep Learning Research Associate',
        copy: 'Experiment with architectures, datasets, algorithms and performance technique — testing ideas, analysing results and improving models.',
      },
      {
        role: 'AI Automation Specialist',
        copy: 'Combine deep learning with modern AI tools to build intelligent workflows, automate complex tasks and analyse information at scale.',
      },
      {
        role: 'Freelance AI & Deep Learning Developer',
        copy: 'Build a freelance practice on AI models, Python, computer vision, NLP, automation and deep learning projects for businesses and remote clients.',
      },
    ],
    hiring: [
      'IT companies building AI-powered software',
      'Startups developing intelligent products and automation solutions',
      'Technology companies working with computer vision',
      'Data science and artificial intelligence teams',
      'Healthcare and finance organisations using AI',
      'Research and development teams',
    ],
    nextSteps: [
      'Transformers & modern architectures',
      'Computer Vision specialisation',
      'MLOps & model deployment',
      'Generative AI in depth',
    ],
    industries: ['IT & software', 'Startups', 'Computer vision', 'Healthcare & finance'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. These are the highest in the catalogue, which is the deep
     * learning premium the client's own research reports. `scale` is the
     * midpoint in ₹/month; remote sits below Punjab at the fresher end on
     * purpose, since freelance income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Deep Learning Engineer',
      summary:
        'Designs, trains and optimises neural networks for vision, language and complex pattern problems. Earnings vary with your skills, project experience, portfolio, certifications, company, location and technical depth.',
      starting: '₹25,000–₹40,000/month',
      after2: '₹40,000–₹70,000/month',
      markets: [
        {
          name: 'Punjab — AI / Deep Learning',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Delhi / NCR — AI / Deep Learning Engineer',
          fresher: '₹35,000–₹60,000/month',
          after2: '₹60,000–₹1,00,000+/month',
          scale: { fresher: 47500, after2: 80000 },
        },
        {
          name: 'Remote / Freelance AI Projects',
          fresher: '₹15,000–₹35,000/month',
          after2: '₹50,000–₹1,20,000+/month',
          scale: { fresher: 25000, after2: 85000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Deep Learning Engineer, AI Engineer, Computer Vision Engineer, NLP Engineer, Machine Learning Engineer and Python AI Developer. These are specialist roles, and practical project work matters far more than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real project work starts around ₹25,000 – ₹40,000 a month in the Punjab market — the highest fresher band in the catalogue — rising to ₹40,000 – ₹70,000 with two years of experience. Delhi/NCR reaches ₹1,00,000+ for engineers with a track record.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and deep learning has the highest freelance ceiling here — ₹50,000 to over ₹1,20,000 a month once you have shipped real work. It starts around ₹15,000 – ₹35,000, because freelance income ramps rather than starting at a salary.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies building AI-powered software, startups developing intelligent products, technology companies working on computer vision, data science and AI teams, healthcare and finance organisations, and R&D teams — plus remote and freelance clients.',
      },
      {
        q: 'Should I do Machine Learning before Deep Learning?',
        a: 'It helps but is not required — this course covers ML fundamentals before reaching neural networks. If you are undecided: Machine Learning is broader and reaches employable sooner, Deep Learning is narrower, harder and pays more. If you already know Python and some ML, come straight here.',
      },
    ],
    projects: [
      {
        name: 'Neural Network From Scratch',
        summary:
          'Build a neural network in Python and understand every part of it — neurons, layers, weights, activation functions, training and predictions.',
        tech: ['Python', 'Neural Networks'],
        level: 'Beginner',
        skills: ['Deep Learning Fundamentals', 'Backpropagation'],
      },
      {
        name: 'Image Classification Model',
        summary:
          'Build a model that recognises and classifies images: prepare the dataset, design a CNN, train it and evaluate what the accuracy really says.',
        tech: ['CNN', 'TensorFlow'],
        level: 'Beginner',
        skills: ['Computer Vision', 'Image Classification'],
      },
      {
        name: 'Text Classification Project',
        summary:
          'Build a model that processes and classifies text — language datasets, preprocessing, sequence-based training and prediction evaluation.',
        tech: ['NLP', 'Python'],
        level: 'Intermediate',
        skills: ['Text Processing', 'Deep Learning'],
      },
      {
        name: 'Pattern Recognition Project',
        summary:
          'Find complex patterns in a large dataset, and see where a deep network learns relationships that traditional approaches struggle with.',
        tech: ['Deep Neural Networks', 'Python'],
        level: 'Intermediate',
        skills: ['Pattern Recognition', 'Artificial Intelligence'],
      },
      {
        name: 'Computer Vision AI Project',
        summary:
          'Build a computer vision solution on a real scenario — images, preprocessing, neural networks and visual recognition technique.',
        tech: ['OpenCV', 'CNN'],
        level: 'Intermediate',
        skills: ['Computer Vision', 'Deep Learning'],
      },
      {
        name: 'Model Optimisation Project',
        summary:
          'Take an existing network and make it perform. Analyse training loss, validation accuracy, architecture and parameters the way an AI engineer does.',
        tech: ['Hyperparameters', 'TensorFlow'],
        level: 'Advanced',
        skills: ['Model Optimisation', 'AI Performance'],
      },
      {
        name: 'AI-Powered Deep Learning Project',
        summary:
          'Use modern AI tools to accelerate programming, research, model experimentation and documentation — with technical understanding kept central.',
        tech: ['Generative AI', 'Python'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'AI Development'],
      },
      {
        name: 'End-to-End Deep Learning Capstone',
        summary:
          'A complete solution for a real problem: data preparation, architecture design, training, evaluation, optimisation and presentation.',
        tech: ['Deep Learning', 'TensorFlow'],
        level: 'Advanced',
        skills: ['Artificial Intelligence', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a real problem into a structured AI objective: research the dataset, understand inputs and outputs, identify suitable architectures and define measurable goals.',
        artefact: 'Problem Analysis & Deep Learning Strategy',
      },
      {
        title: 'Build',
        copy: 'Design and train models with trainer guidance — Python, datasets, neural networks, CNNs, NLP, TensorFlow, Keras and AI-powered workflows — improving on what the metrics show.',
        artefact: 'Neural Network Development & AI Model Training',
      },
      {
        title: 'Present & Improve',
        copy: 'Present the problem, data preparation, architecture decisions, performance and optimisation like a professional. Learn to spot a weak model and explain exactly why it is weak.',
        artefact: 'End-to-End Deep Learning Project & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready deep learning certificate',
        copy: 'A certificate reflecting practical understanding of Python, neural networks, TensorFlow, Keras, computer vision, NLP, CNN, RNN, model training and AI development.',
      },
      {
        title: 'Learn through practical AI projects',
        copy: 'Work on projects mirroring real technical challenges — preparing datasets, building networks, training models, classifying images, processing language and optimising systems.',
      },
      {
        title: 'Build a deep learning portfolio',
        copy: 'Neural network projects, image classification systems, computer vision applications, NLP projects, TensorFlow notebooks and intelligent application concepts — proof you can show an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, preparation for AI and technical interviews, guidance on presenting your projects, and a clear picture of the paths in AI, ML, computer vision and NLP.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand artificial intelligence',
        copy: 'The field moves constantly — new architectures, frameworks, generative technologies and practices. Teaching uses current workflows and practical examples, so you understand not only how to train a model but why an architecture behaves as it does.',
      },
      {
        title: 'Live and practical deep learning projects',
        copy: 'Without practical work it is hard to see how models behave on real data. Projects span Python, neural networks, TensorFlow, Keras, computer vision, image classification, NLP, training and optimisation.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss a difficult architecture and get guidance mid-project — whether you are starting out or strengthening existing programming and ML skill.',
      },
      {
        title: 'Build a deep learning portfolio',
        copy: 'Finishing should mean more than a certificate. Practical projects produce portfolio work demonstrating Python, neural networks, computer vision, NLP, TensorFlow and AI — something real to discuss.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across AI, ML, data science, computer vision, NLP and automation.',
      },
      {
        title: 'A practical approach to deep learning',
        copy: 'The goal is confidence developing intelligent solutions, not memorising neural network concepts — practical deep learning, AI, networks, Python, computer vision, NLP, TensorFlow and Keras.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Deep Learning curriculum',
          techcadd:
            'Industry-focused training covering Python, neural networks, TensorFlow, CNN, NLP and AI projects',
          others: 'Often focuses mainly on basic AI concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real-world AI problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical project training',
          techcadd: 'Students learn neural network development, model training and evaluation',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'AI framework skills',
          techcadd: 'Covers TensorFlow, Keras and real deep learning workflows',
          others: 'May cover only selected tools',
        },
        {
          feature: 'Model optimisation',
          techcadd: 'Focus on understanding performance and improving results',
          others: 'Optimisation training can vary',
        },
        {
          feature: 'Computer Vision & NLP',
          techcadd: 'Practical introduction to intelligent visual and language systems',
          others: 'Advanced topics may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and AI projects that demonstrate technical skills',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews and portfolio preparation',
          others: 'Career assistance can vary',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Trainer guidance throughout the learning journey',
          others: 'Support may be limited to scheduled sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification combined with practical learning exposure',
          others: 'Certification format and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a Deep Learning institute in Phagwara, ask what you will actually learn, whether you will work on practical AI projects, how trainers teach neural network development, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your deep learning fundamentals',
        blurb:
          'Understand how Python, AI, machine learning and neural networks fit together — programming, AI concepts, data handling and your first networks.',
        covers: [
          'Introduction to Artificial Intelligence',
          'Machine Learning fundamentals',
          'Python programming for AI',
          'Data handling basics',
          'Introduction to Neural Networks',
          'Artificial neurons and layers',
          'Activation functions',
          'Loss functions',
          'Gradient descent basics',
          'Introduction to TensorFlow and Keras',
          'Basic neural network models',
        ],
        skills: ['Python', 'Jupyter Notebook', 'Google Colab', 'NumPy', 'TensorFlow', 'Keras'],
        recommendedFor:
          'AI Trainee, Deep Learning Intern, Python AI Intern, Machine Learning Trainee and junior technical roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic neural networks',
        blurb:
          'Practical skill in deep networks, model training, TensorFlow, computer vision basics, NLP fundamentals and optimisation — the job-ready level.',
        covers: [
          'Advanced neural network concepts',
          'Deep neural networks',
          'Backpropagation',
          'Optimisers and loss functions',
          'TensorFlow and Keras development',
          'Convolutional Neural Networks',
          'Image classification',
          'Computer Vision basics',
          'RNN and sequence models',
          'NLP fundamentals',
          'Model validation',
          'Overfitting and regularisation',
          'Deep learning project development',
        ],
        skills: ['TensorFlow', 'Keras', 'OpenCV', 'Pandas', 'Matplotlib', 'GitHub'],
        recommendedFor:
          'Junior AI Engineer, Deep Learning Developer, Computer Vision Trainee, NLP Trainee and Machine Learning Engineer roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete advanced AI skill set',
        blurb:
          'Advanced architectures with computer vision, NLP, generative AI concepts, automation, deployment and professional project development.',
        covers: [
          'Advanced deep learning architectures',
          'CNN and advanced computer vision',
          'Transfer learning concepts',
          'Object detection basics',
          'Advanced NLP concepts',
          'LSTM and sequence models',
          'Transformers fundamentals',
          'Generative AI basics',
          'PyTorch introduction',
          'Model optimisation',
          'AI APIs and application integration',
          'Deployment concepts',
          'AI tools and prompt engineering',
          'Capstone project and portfolio presentation',
        ],
        skills: ['PyTorch', 'Hugging Face', 'TensorFlow', 'OpenCV', 'APIs', 'GitHub'],
        recommendedFor:
          'Deep Learning Engineer, AI Engineer, Computer Vision Engineer, NLP Engineer, AI Developer and advanced ML pathways.',
      },
    ],
    capabilities: [
      { capability: 'Python for AI', included: [true, true, true] },
      { capability: 'AI fundamentals', included: [true, true, true] },
      { capability: 'Neural Networks', included: [true, true, true] },
      { capability: 'Deep Neural Networks', included: [true, true, true] },
      { capability: 'TensorFlow & Keras', included: [true, true, true] },
      { capability: 'Model training', included: [true, true, true] },
      { capability: 'Model optimisation', included: [false, true, true] },
      { capability: 'CNN', included: [false, true, true] },
      { capability: 'Computer Vision', included: [false, true, true] },
      { capability: 'NLP fundamentals', included: [false, true, true] },
      { capability: 'Advanced NLP', included: [false, false, true] },
      { capability: 'Transfer learning', included: [false, false, true] },
      { capability: 'Object detection basics', included: [false, false, true] },
      { capability: 'Transformers basics', included: [false, false, true] },
      { capability: 'Generative AI concepts', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the foundation in AI, Python and neural networks. The 6-month course includes those fundamentals and continues into professional network development, TensorFlow, computer vision, NLP and optimisation. The 9-month programme adds advanced architectures, transfer learning, object detection, transformers, generative AI concepts and advanced portfolio work — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Deep Learning with us?',
      intro:
        'The goal is not learning to run a neural network. It is understanding how intelligent models learn, why architectures perform differently, how datasets shape results, what the metrics mean, and how an AI system can be improved.',
      points: [
        {
          title: 'Built from first principles',
          copy: 'You write a network by hand before reaching for a framework. Understanding backpropagation once is worth more than a dozen copied notebooks.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You train your own models on real datasets from early on, on Colab where GPU time is free.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering networks from scratch, image classification, text classification, pattern recognition, vision, optimisation, AI tooling and a capstone you own.',
        },
        {
          title: 'Architecture as a decision',
          copy: 'Knowing which architecture suits a problem — and why a model is underperforming — is what separates an AI engineer from someone running a tutorial.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Deep Learning Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how advanced neural networks learn from complex data. The focus is practical: Python, neural networks, TensorFlow, Keras, CNN, RNN, computer vision, NLP, model training and AI development — real skill rather than theory.',
      },
      {
        q: 'Who can join a Deep Learning Course in Phagwara?',
        a: 'It suits students, graduates, freshers, job seekers, working professionals, programmers, developers and aspiring AI professionals. Beginners start by building programming and AI fundamentals; technical professionals use it to strengthen their AI expertise.',
      },
      {
        q: 'Is Deep Learning a good career option for freshers?',
        a: 'Yes. It opens opportunities in artificial intelligence, machine learning, computer vision, NLP, automation and intelligent application development. Depending on skills and experience, learners can explore roles such as Deep Learning Engineer, AI Engineer, Computer Vision Engineer, NLP Engineer and Python AI Developer.',
      },
      {
        q: 'What will I learn in the Deep Learning Course?',
        a: 'Python, AI fundamentals, neural networks and deep networks, TensorFlow, Keras, CNN, RNN, computer vision, NLP, model training, evaluation, optimisation and project development — plus activation functions, loss functions, backpropagation, optimisers, overfitting, validation and accuracy.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Deep learning becomes much easier once you work with real datasets, networks, frameworks and trained models. The approach includes practical AI exercises, network development, image processing, NLP, model training, testing and real project scenarios.',
      },
      {
        q: 'Will I work on Deep Learning projects during the course?',
        a: 'Yes. Assignments include neural network development, image classification, computer vision projects, text processing models, AI automation, optimisation and end-to-end AI projects — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Deep Learning after 12th?',
        a: 'Absolutely, if you are interested in programming, artificial intelligence, mathematics or technology. It lets students develop specialised technical skill while continuing formal education or preparing for future AI roles.',
      },
      {
        q: 'Can Deep Learning help me become a freelancer?',
        a: 'Yes. Freelancers can work on Python programming, image classification, computer vision, NLP applications, AI automation and deep learning solutions. But successful freelancing needs more than understanding networks: a portfolio, an understanding of client requirements and clear communication matter just as much.',
      },
      {
        q: 'Does the course include AI tools in Deep Learning?',
        a: 'Yes. Modern workflows use AI for coding assistance, research, model experimentation, dataset understanding, documentation and automation. The course covers how these tools support technical work while keeping programming knowledge, critical thinking and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Deep Learning Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, practical training, Python programming, AI modules, neural network projects, TensorFlow training, computer vision, NLP, trainers, portfolio development, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'data-science-course-in-phagwara',
      'python-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'tableau-course-in-phagwara',
    ],
    keywords: [
      'deep learning course in phagwara',
      'deep learning training in phagwara',
      'deep learning classes in phagwara',
      'ai and deep learning course in phagwara',
      'neural networks course in phagwara',
      'deep learning course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'data-science-course-in-phagwara',
    label: 'Data Science',
    title: 'Data Science Course in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Turn raw data into insight — Python, SQL, statistics, visualisation and machine learning, with live projects and placement assistance.',
    overview:
      'Techcadd’s Data Science Programming Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, working professionals, entrepreneurs and aspiring analysts who want practical data skills. It covers Python, data analysis, statistics, SQL, visualisation, machine learning fundamentals, predictive modelling, data cleaning, exploratory analysis and AI-powered data tools. The training is hands-on throughout — practical datasets, real projects and industry-standard tooling — so you learn to collect, clean, analyse, visualise and interpret data to find insight that supports a decision. Unlike purely theoretical learning, you work with real datasets, analytical workflows, machine learning technique and visualisation methods, and finish understanding how businesses use data to spot patterns, predict outcomes, understand customers and decide better.',
    demand:
      'Every business in Phagwara already has the data — sales, customers, stock, campaigns — and almost none of them has anyone who can turn it into a decision, which is exactly the gap this fills.',
    modules: [
      {
        title: 'Python Programming for Data Science',
        summary:
          'Understand Python fundamentals and how programming supports modern data analysis.',
        topics: [
          'Variables, data types, conditions, loops and functions',
          'OOP concepts and file handling',
          'How Python is used for automation and analytics',
          'Practical coding exercises on real data',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Analysis & Data Cleaning',
        summary:
          'Learn to work with raw datasets — the messy reality that decides whether any analysis is worth anything.',
        topics: [
          'Missing values, duplicates and inconsistent formats',
          'Data transformation techniques in Python',
          'Structured and unstructured information',
          'Building a preprocessing workflow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Exploratory Data Analysis & Statistics',
        summary:
          'Learn to understand a dataset properly before making any decision based on it.',
        topics: [
          'Descriptive statistics, distributions and correlations',
          'Mean, median, mode, variance and standard deviation',
          'Identifying trends and patterns',
          'Exploratory analysis on practical datasets',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'SQL & Database Analysis',
        summary:
          'Learn to retrieve and analyse information where most business data actually lives.',
        topics: [
          'SELECT statements, filtering and sorting',
          'Joins, grouping and aggregations',
          'Working with relational datasets',
          'How analysts use SQL for business reporting',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Visualisation & Dashboarding',
        summary:
          'Learn to turn numbers into something a decision-maker can read in ten seconds.',
        topics: [
          'Charts, graphs, dashboards and visual reporting',
          'Python visualisation libraries',
          'Choosing the right chart for the problem',
          'Building clear, useful visualisations',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Machine Learning Fundamentals',
        summary:
          'Discover how machines learn patterns from data, and build models that predict.',
        topics: [
          'Supervised and unsupervised learning',
          'Regression and classification algorithms',
          'Training and testing workflows',
          'Model evaluation and prediction',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI-Powered Data Science',
        summary:
          'Discover how AI is changing data workflows without replacing the reasoning behind them.',
        topics: [
          'AI for coding assistance, exploration and documentation',
          'Faster research and analytical workflows',
          'Automating repetitive analysis tasks',
          'Responsible use, keeping accuracy and reasoning central',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Reporting, Business Insights & Presentation',
        summary:
          'Learn how professional analysts communicate — the part that decides whether your work gets used.',
        topics: [
          'Data reports and the metrics that matter',
          'Identifying trends and actionable insight',
          'Presenting technical findings to managers and clients',
          'Building a practical reporting workflow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Projects, Portfolio & Career Preparation',
        summary:
          'End-to-end projects from collection to presentation, then learning to defend the work out loud.',
        topics: [
          'Data collection, cleaning, analysis, visualisation and modelling',
          'Assignments based on real-world scenarios',
          'A portfolio project demonstrating analytical skill',
          'Career guidance across Data Science, Analytics, ML and AI',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Write Python confidently enough to run a full analysis end to end',
      'Clean and prepare messy real-world datasets',
      'Query relational databases fluently with SQL',
      'Explore data statistically and know what the numbers mean',
      'Build dashboards and visualisations that answer a business question',
      'Ship an end-to-end data science project you can defend in an interview',
    ],
    tools: [
      'Python',
      'Jupyter Notebook',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'SQL',
      'MySQL',
      'Power BI',
      'Tableau',
      'Scikit-learn',
      'Google Colab',
      'Excel',
      'Git & GitHub',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need previous programming experience to start understanding how data works. A structured course covers Python basics, data handling, spreadsheets, statistics, visualisation, SQL and introductory machine learning — a smart way to explore analytics alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical technical skill. Whatever you study — computer science, engineering, commerce, mathematics, management or arts — data science shows you how information becomes meaningful insight.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning several tools alone is confusing. A structured path replaces certificate-collecting with understanding how real projects run: collecting and cleaning datasets, analysing trends, building dashboards and models, and presenting what you found.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, software, business analysis, finance, marketing or operations? Data science makes your experience more valuable. Business professionals learn how data supports decisions; software professionals move into analytics, ML and AI-driven applications.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become a data scientist. Understanding your own customer behaviour, sales trends, business performance and marketing results makes you a better decision-maker — and easier for analysts and agencies to work with.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'Data analysis, Python programming, visualisation, dashboards, SQL analysis, predictive analytics and business reporting are all billable. The course teaches you to think like a data professional, not just operate the tools.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Data science skills are in demand across industries',
        copy: 'IT companies, e-commerce brands, healthcare, financial institutions, manufacturing, education platforms and local businesses all use data to understand performance. Python, SQL, analysis, statistics, visualisation, ML and predictive modelling apply across all of them.',
      },
      {
        title: 'Learn how data science actually works',
        copy: 'Writing code is one part. Data collection and preparation, cleaning, exploratory analysis, statistics and probability, SQL, visualisation, feature engineering, ML algorithms, model evaluation and business problem-solving are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you where the functions are. Practical training teaches you to solve problems — data cleaning, Python, SQL queries, exploratory analysis, visualisation, ML models and business analytics.',
      },
      {
        title: 'Think about insights, not just numbers',
        copy: 'Having data is easy; finding the right insight is the challenge. You learn to read mean, median, correlation, accuracy, precision, recall, trends and distributions well enough to know whether your analysis is genuinely useful.',
      },
      {
        title: 'Data Science and AI are changing technology',
        copy: 'AI is changing how professionals analyse datasets and build models. But it does not replace analytical thinking: the dataset, business problem, data quality, statistical concepts and model limitations still need a person who understands them.',
      },
    ],
    whyNow: {
      title: 'Build Data Science Skills You Can Show, Not Just Talk About',
      points: [
        'Project-based learning gives you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates Python, SQL, analytics, visualisation and machine learning during interviews.',
        'Data Analyst and Data Science roles in Punjab start around ₹18,000 – ₹35,000 a month for a fresher with real project work.',
        'The goal is not learning tools — it is turning raw information into insight and better decisions.',
      ],
    },
    roles: [
      'Data Analyst',
      'Junior Data Scientist',
      'Business Data Analyst',
      'Python Data Analyst',
      'Machine Learning Associate',
      'Data Visualization Specialist',
      'AI-Powered Data Analyst',
      'Freelance Data Analyst',
    ],
    roleDetails: [
      {
        role: 'Data Analyst',
        copy: 'Analyse business data and find the patterns that matter, working across Python, SQL, Excel, dashboards, visualisation and reporting. The most common path after this course.',
      },
      {
        role: 'Junior Data Scientist',
        copy: 'Work with datasets, statistical technique, machine learning models and predictive analysis to discover patterns and build data-driven solutions.',
      },
      {
        role: 'Business Data Analyst',
        copy: 'Combine analytical and business understanding to study performance, customer behaviour, sales trends and operational information.',
      },
      {
        role: 'Python Data Analyst',
        copy: 'Use Python libraries and programming to clean, analyse, automate and visualise datasets too large for a spreadsheet.',
      },
      {
        role: 'Machine Learning Associate',
        copy: 'Prepare datasets, train models, evaluate performance and help develop predictive solutions using ML algorithms.',
      },
      {
        role: 'Data Visualization Specialist',
        copy: 'Build dashboards and reports in Power BI, Tableau, Python and Excel that make complex information immediately legible.',
      },
      {
        role: 'AI-Powered Data Analyst',
        copy: 'Combine data skill with modern AI tools to speed up exploration, coding, analysis, reporting and automation — with analytical thinking still doing the real work.',
      },
      {
        role: 'Freelance Data Analyst',
        copy: 'Build a freelance practice on data analysis, dashboards, Python, SQL, business reports and predictive analytics, locally in Phagwara or remotely.',
      },
    ],
    hiring: [
      'IT companies and software organisations working with data-driven applications',
      'Startups and SaaS companies focused on analytics and business intelligence',
      'E-commerce and D2C brands analysing customers, sales and market behaviour',
      'Financial and healthcare organisations using data for research and decisions',
    ],
    nextSteps: [
      'Machine Learning in depth',
      'Power BI & business intelligence',
      'Advanced SQL & data engineering',
      'Artificial Intelligence',
    ],
    industries: ['IT & software', 'E-commerce', 'Finance & healthcare', 'Startups & SaaS'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. The fresher floor sits below the ML and AI courses, which
     * reflects data analysis being the broader, more accessible entry point.
     * `scale` is the midpoint in ₹/month; remote sits below Punjab at the
     * fresher end on purpose, since freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Data Analyst',
      summary:
        'Analyses business data and turns it into insight leaders act on. Earnings vary with your skills, project experience, portfolio, certifications, company, location and performance.',
      starting: '₹18,000–₹35,000/month',
      after2: '₹35,000–₹60,000/month',
      markets: [
        {
          name: 'Punjab — Data Analyst / Data Science',
          fresher: '₹18,000–₹35,000/month',
          after2: '₹35,000–₹60,000/month',
          scale: { fresher: 26500, after2: 47500 },
        },
        {
          name: 'Delhi / NCR — Data Analytics / Data Science',
          fresher: '₹25,000–₹45,000/month',
          after2: '₹50,000–₹90,000+/month',
          scale: { fresher: 35000, after2: 70000 },
        },
        {
          name: 'Remote / Freelance Data Projects',
          fresher: '₹15,000–₹30,000/month',
          after2: '₹40,000–₹1,00,000+/month',
          scale: { fresher: 22500, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Data Analyst, Junior Data Scientist, Business Analyst, Python Analyst and Machine Learning Associate. Practical project experience and analytical thinking matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real project work starts around ₹18,000 – ₹35,000 a month in the Punjab market, rising to ₹35,000 – ₹60,000 with two years of experience. Delhi/NCR runs higher, and analysts who add machine learning move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and data work is unusually good for it — dashboards, reports and SQL analysis are self-contained, deliverable pieces. Freelance income ramps rather than starting at a salary: around ₹15,000 – ₹30,000 a month early on, and ₹40,000 to over ₹1,00,000 once you have real client work behind you.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies and software organisations, startups and SaaS companies working on analytics and business intelligence, e-commerce and D2C brands studying customers and sales, and financial and healthcare organisations — plus remote and freelance clients.',
      },
      {
        q: 'Should I take Data Science or Data Analytics?',
        a: 'They overlap heavily at the start. Data Analytics is the faster route to a first job and stays closer to Excel, SQL, dashboards and business questions. Data Science goes further into Python, statistics and machine learning, so it takes longer but reaches higher. If you want to be working sooner, start with Analytics and move across later; if you are set on the modelling side, come straight here.',
      },
    ],
    projects: [
      {
        name: 'Data Analysis Using Python',
        summary:
          'Build a complete analysis project from scratch: import datasets, clean the information, analyse patterns and produce summaries that answer a real business question.',
        tech: ['Python', 'Pandas'],
        level: 'Beginner',
        skills: ['Data Analysis', 'Data Cleaning'],
      },
      {
        name: 'Exploratory Data Analysis Project',
        summary:
          'Understand a dataset before deciding anything from it — distributions, correlations, missing values and the visual insight underneath.',
        tech: ['EDA', 'Statistics'],
        level: 'Beginner',
        skills: ['Data Visualisation', 'Statistical Analysis'],
      },
      {
        name: 'SQL Data Analysis Project',
        summary:
          'A complete database analysis in SQL: retrieve, filter, join, group and analyse while answering practical business questions.',
        tech: ['SQL', 'MySQL'],
        level: 'Intermediate',
        skills: ['Database Queries', 'Business Reporting'],
      },
      {
        name: 'Business Intelligence Dashboard',
        summary:
          'Build a dashboard focused on business performance — the key metrics, the trends behind them, and a presentation a manager can act on.',
        tech: ['Power BI', 'Dashboards'],
        level: 'Intermediate',
        skills: ['Business Insights', 'Data Visualisation'],
      },
      {
        name: 'Customer Data Analysis Project',
        summary:
          'Build an analytical strategy for a real business dataset: customer behaviour, purchasing patterns, preferences and the trends that matter.',
        tech: ['Python', 'Customer Analytics'],
        level: 'Intermediate',
        skills: ['Data Insights', 'Business Analysis'],
      },
      {
        name: 'Machine Learning Prediction Project',
        summary:
          'Take a real dataset and build a predictive model — analyse features, train it, evaluate performance and understand what the numbers claim.',
        tech: ['Machine Learning', 'Scikit-learn'],
        level: 'Advanced',
        skills: ['Predictive Analytics', 'Model Evaluation'],
      },
      {
        name: 'AI-Powered Data Analysis Project',
        summary:
          'Use modern AI tools to accelerate coding, dataset exploration, research and reporting — with accuracy, reasoning and originality kept central.',
        tech: ['AI Tools', 'Python'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Automation'],
      },
      {
        name: 'End-to-End Data Science Capstone',
        summary:
          'A complete solution for a real problem: collection, preprocessing, analysis, visualisation, machine learning, reporting and presentation.',
        tech: ['Python', 'SQL'],
        level: 'Advanced',
        skills: ['Machine Learning', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Start from a real business or technical problem: research the data available, identify the useful variables, assess data quality and define clear analytical objectives.',
        artefact: 'Data Research & Problem Definition',
      },
      {
        title: 'Build',
        copy: 'Work with Python, SQL, analysis, visualisation and machine learning under trainer guidance — clean, analyse, visualise, train and improve on what the results show.',
        artefact: 'Data Analysis & Machine Learning Workflow',
      },
      {
        title: 'Present & Improve',
        copy: 'Present findings, visualisations, model results and recommendations like a professional, and learn to explain your approach confidently in an interview or client meeting.',
        artefact: 'End-to-End Data Science Project & Presentation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready data science certificate',
        copy: 'A certificate reflecting practical understanding of Python, SQL, data analysis, statistics, visualisation, machine learning and predictive analytics.',
      },
      {
        title: 'Learn through practical projects',
        copy: 'Work on projects mirroring real analytical workflows — cleaning datasets, analysing patterns, writing Python, building visualisations and models, and presenting insight.',
      },
      {
        title: 'Build a data science portfolio',
        copy: 'Python projects, SQL queries, analysis reports, dashboards, machine learning models and business insight reports — proof you can put in front of an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, interview preparation, guidance on presenting your projects, and a clear picture of the paths in Data Analytics, Data Science, ML and AI.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand data and technology',
        copy: 'The field keeps moving — AI, machine learning, automation, analytics platforms and visualisation tools all change. Teaching uses practical examples and current approaches, so you understand not only how to analyse data but why a method works.',
      },
      {
        title: 'Live and practical projects',
        copy: 'Without practical work it is hard to understand a real analytical workflow. Projects span Python, SQL, cleaning, exploratory analysis, statistics, visualisation, machine learning, predictive analytics and AI-powered workflows.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss an analytical approach and get guidance while working on real datasets — whether you are a beginner or strengthening existing technical skill.',
      },
      {
        title: 'Build a data science portfolio',
        copy: 'Finishing should mean more than a certificate. Practical exercises produce portfolio work demonstrating Python, SQL, analysis, visualisation, machine learning and business insight.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across analytics, software, AI and technology.',
      },
      {
        title: 'A practical approach to data science',
        copy: 'The goal is confidence solving data problems, not memorising tools or algorithms — practical Python, SQL, analytics, statistics, visualisation, machine learning, AI tools and predictive modelling.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Data Science curriculum',
          techcadd:
            'Industry-focused training covering Python, SQL, statistics, visualisation, machine learning and AI tools',
          others: 'Often focuses mainly on basic concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real datasets',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical project training',
          techcadd: 'Students learn data cleaning, analysis, visualisation, modelling and reporting',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Programming skills',
          techcadd: 'Covers Python programming, data libraries, automation and analytical workflows',
          others: 'May cover only selected programming concepts',
        },
        {
          feature: 'Machine Learning',
          techcadd: 'Focus on understanding algorithms, training, testing and evaluation',
          others: 'Machine learning depth can vary',
        },
        {
          feature: 'Analytics & visualisation',
          techcadd: 'Practical understanding of insights, dashboards, reporting and data storytelling',
          others: 'Visualisation may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and project-based learning that demonstrate real skill',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Trainer guidance throughout the learning journey to clarify concepts',
          others: 'Support may be limited to scheduled sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification combined with practical learning exposure',
          others: 'Certification format and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a Data Science institute in Phagwara, ask what you will actually learn, whether you will work on practical projects, how trainers teach analytics, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your data science fundamentals',
        blurb:
          'Understand how data is collected, processed and analysed — Python, data handling, statistics and visualisation.',
        covers: [
          'Introduction to Data Science',
          'Python programming fundamentals',
          'Variables, loops and functions',
          'Introduction to data analysis',
          'NumPy and Pandas basics',
          'Data cleaning fundamentals',
          'Basic statistics',
          'Exploratory data analysis',
          'Data visualisation basics',
          'Understanding trends and patterns',
        ],
        skills: ['Python', 'Jupyter Notebook', 'NumPy', 'Pandas', 'Excel', 'Basic SQL'],
        recommendedFor:
          'Data Analyst Trainee, Python Trainee, Data Intern and junior analytics roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic data analysis',
        blurb:
          'Practical skill in SQL, advanced analysis, visualisation, statistics and introductory machine learning — the level analytics roles want.',
        covers: [
          'Advanced Python for data analysis',
          'Data cleaning and preprocessing',
          'Advanced Pandas',
          'SQL and database queries',
          'Exploratory data analysis',
          'Probability and statistics',
          'Data visualisation',
          'Power BI fundamentals',
          'Tableau basics',
          'Machine Learning fundamentals',
          'Regression and classification',
          'Data reporting and business insights',
        ],
        skills: ['SQL', 'MySQL', 'Power BI', 'Tableau', 'Matplotlib', 'Seaborn'],
        recommendedFor:
          'Data Analyst, Business Analyst, Junior Data Scientist, Python Analyst and BI Analyst roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete data science & AI skill set',
        blurb:
          'Advanced analytics with machine learning, predictive modelling, AI tools, business intelligence and end-to-end projects.',
        covers: [
          'Advanced Python programming',
          'Advanced data analysis',
          'Feature engineering',
          'Advanced statistics',
          'Machine Learning algorithms',
          'Regression and classification',
          'Clustering',
          'Model evaluation',
          'Predictive analytics',
          'Power BI and dashboarding',
          'Tableau visualisation',
          'SQL for data science',
          'AI tools and prompt engineering',
          'End-to-end data science projects',
        ],
        skills: ['Scikit-learn', 'Power BI', 'Tableau', 'SQL', 'GitHub', 'AI tools'],
        recommendedFor:
          'Data Scientist, Data Analyst, Machine Learning Associate, Business Intelligence Analyst, AI Data Analyst and advanced analytics pathways.',
      },
    ],
    capabilities: [
      { capability: 'Python fundamentals', included: [true, true, true] },
      { capability: 'Data analysis basics', included: [true, true, true] },
      { capability: 'NumPy & Pandas', included: [true, true, true] },
      { capability: 'Basic statistics', included: [true, true, true] },
      { capability: 'Data visualisation', included: [true, true, true] },
      { capability: 'SQL & databases', included: [false, true, true] },
      { capability: 'Advanced data cleaning', included: [false, true, true] },
      { capability: 'Power BI / Tableau', included: [false, true, true] },
      { capability: 'Machine Learning', included: [false, true, true] },
      { capability: 'Regression & classification', included: [false, true, true] },
      { capability: 'Advanced statistics', included: [false, false, true] },
      { capability: 'Feature engineering', included: [false, false, true] },
      { capability: 'Advanced Machine Learning', included: [false, false, true] },
      { capability: 'Predictive analytics', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional analysis, SQL, visualisation, statistics and machine learning. The 9-month programme combines all of it with advanced data science, predictive analytics, AI tools, dashboards and portfolio development — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Data Science with us?',
      intro:
        'The goal is not learning to write Python or drive a tool. It is understanding what the data means, how patterns get found, how models are built, and how an insight actually supports a decision.',
      points: [
        {
          title: 'Cleaning taught properly',
          copy: 'Most of the job is preparing data, and most courses skip it. Missing values, duplicates and inconsistent formats get real time here.',
        },
        {
          title: 'SQL alongside Python',
          copy: 'Business data lives in databases. Analysts who can only open a CSV are limited from their first week.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering analysis, EDA, SQL, a BI dashboard, customer analytics, prediction, AI tooling and a capstone you own.',
        },
        {
          title: 'Communication counts',
          copy: 'An insight nobody understands changes nothing. Reporting and presentation are taught as part of the work, not an afterthought.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Data Science Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how data is collected, cleaned, analysed, visualised and used for predictions and decisions. The focus is practical: Python, SQL, statistics, analysis, visualisation, machine learning and AI-powered workflows — real skills rather than theory.',
      },
      {
        q: 'Who can join a Data Science Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs and aspiring freelancers. Beginners can start without previous professional experience; technical professionals use it to strengthen analytical skills.',
      },
      {
        q: 'Is Data Science a good career option for freshers?',
        a: 'Yes. It opens opportunities in Data Analytics, Business Intelligence, Machine Learning, AI and technology-driven business roles. Depending on skills and experience, learners can explore roles such as Data Analyst, Junior Data Scientist, Business Analyst, Python Analyst and Machine Learning Associate.',
      },
      {
        q: 'What will I learn in the Data Science Course?',
        a: 'Python, NumPy, Pandas, SQL, data cleaning, exploratory analysis, statistics, visualisation, machine learning, regression, classification, model evaluation and AI tools — plus distributions, correlation, accuracy, precision, recall, trends and model performance.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Data science becomes much easier once you work with real datasets, programming tasks, visualisations and databases. The approach includes practical assignments, Python coding, SQL exercises, analysis projects, visualisation and machine learning work.',
      },
      {
        q: 'Will I work on Data Science projects during the course?',
        a: 'Yes. Assignments include Python analysis projects, SQL projects, dashboard development, exploratory analysis, machine learning models, predictive analytics and AI-powered workflows — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Data Science after 12th?',
        a: 'Absolutely, if you are interested in technology, programming, mathematics, analytics or AI. It lets students develop specialised skills while continuing formal education or preparing for future technical roles.',
      },
      {
        q: 'Can Data Science help me become a freelancer?',
        a: 'Yes. Freelancers can offer data analysis, dashboard creation, Python automation, SQL reporting, visualisation, predictive analysis and business intelligence. But successful freelancing needs more than tools: a portfolio, an understanding of client problems and clear communication matter just as much.',
      },
      {
        q: 'Does the course include AI in Data Science?',
        a: 'Yes. Modern workflows use AI for coding assistance, data exploration, documentation, reporting, automation and model development. The course covers how these tools support analytical work while keeping logical thinking, validation and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Data Science Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, Python training, SQL training, practical projects, statistics, machine learning modules, visualisation tools, trainer experience, portfolio development, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'data-analytics-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'power-bi-course-in-phagwara',
      'python-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'tableau-course-in-phagwara',
    ],
    keywords: [
      'data science course in phagwara',
      'data science training in phagwara',
      'data science classes in phagwara',
      'data science programming course in phagwara',
      'python for data science in phagwara',
      'data science course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'data-analytics-course-in-phagwara',
    label: 'Data Analytics',
    title: 'Data Analytics Course in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Turn numbers into decisions — Excel, SQL, Python, Power BI and Tableau, with dashboards, live projects and placement assistance.',
    overview:
      'Techcadd’s Data Analytics Programming Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, entrepreneurs, business owners and aspiring analysts who want practical analytical skill. It covers Excel, SQL, Python, data cleaning, visualisation, Power BI, Tableau, business reporting, statistics, dashboard creation and AI-powered analytics tools. The training is hands-on throughout — real datasets, practical projects and industry-standard tooling — so you learn to collect, clean, organise, analyse, visualise and interpret data into insight that supports a decision. Unlike purely theoretical learning, you work with real datasets, reporting workflows, dashboard development and business intelligence technique, and finish understanding how organisations use data to spot trends, measure performance and decide well.',
    demand:
      'Excel and a dashboard is the most immediately hireable data skill in Punjab — every firm with sales figures needs someone to read them, long before it needs anyone who can train a model.',
    modules: [
      {
        title: 'Excel & Data Analytics Foundations',
        summary:
          'Understand how Excel supports real analysis — still the tool most business data actually arrives in.',
        topics: [
          'Formulas, functions, sorting, filtering and conditional formatting',
          'Pivot Tables and charts',
          'Working with practical business datasets',
          'KPIs and reporting',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Cleaning & Preparation',
        summary:
          'Learn to work with raw, unstructured information — the messy reality behind every clean report.',
        topics: [
          'Missing values, duplicates and inconsistent formats',
          'Data transformation techniques',
          'Organising datasets for analysis and reporting',
          'Building a structured preparation workflow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'SQL & Database Analytics',
        summary:
          'Learn to retrieve and analyse information where business data actually lives.',
        topics: [
          'SELECT statements, filtering and sorting',
          'Joins, grouping, aggregations and subqueries',
          'Working with practical business datasets',
          'How analysts use SQL for reporting',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Python for Data Analytics',
        summary:
          'Learn how Python takes over when the dataset outgrows a spreadsheet.',
        topics: [
          'Python fundamentals and the data libraries',
          'Working with Pandas and NumPy',
          'Analysing datasets programmatically',
          'Automating repetitive data tasks',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Visualisation & Dashboarding',
        summary:
          'Learn to turn raw numbers into a visual story someone can act on.',
        topics: [
          'Charts, graphs, KPIs, dashboards and business reports',
          'Selecting the right visualisation for the question',
          'Building interactive, professional dashboards',
          'Presenting information clearly',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Power BI & Business Intelligence',
        summary:
          'Discover how businesses actually run their reporting, and build one that works.',
        topics: [
          'Data importing, transformation and modelling',
          'Relationships and DAX fundamentals',
          'KPIs and dashboard creation',
          'Building interactive reports',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Tableau & Advanced Visualisation',
        summary:
          'Explore professional visualisation and the storytelling that makes a dashboard persuasive.',
        topics: [
          'Worksheets, dashboards and filters',
          'Calculated fields and interactive reports',
          'Working with practical datasets',
          'Building visually meaningful dashboards',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Business Reporting, KPIs & Insights',
        summary:
          'Learn how professional analysts communicate — the part that decides whether your work changes anything.',
        topics: [
          'Business reports and the metrics that matter',
          'Identifying trends and actionable insight',
          'Presenting findings to managers, clients and employers',
          'Building a practical reporting workflow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Analytics, Live Projects & Career Preparation',
        summary:
          'End-to-end projects from collection to boardroom, with AI used where it genuinely helps.',
        topics: [
          'Collection, cleaning, SQL analysis, dashboards and reporting',
          'Using AI tools to improve analytical workflows',
          'A portfolio project demonstrating your skills',
          'Career guidance across Analytics, BI, Reporting and Business Analysis',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Analyse business data confidently in Excel, including Pivot Tables and KPIs',
      'Clean and prepare messy real-world datasets',
      'Query relational databases fluently with SQL',
      'Automate analysis in Python with Pandas and NumPy',
      'Build interactive Power BI and Tableau dashboards a business can use',
      'Present findings and defend your analysis in an interview',
    ],
    tools: [
      'Microsoft Excel',
      'Advanced Excel',
      'SQL',
      'MySQL',
      'Python',
      'Jupyter Notebook',
      'Pandas',
      'NumPy',
      'Power BI',
      'Tableau',
      'Google Sheets',
      'Matplotlib',
      'Seaborn',
      'Git & GitHub',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need previous technical experience to understand how businesses use data. A structured course covers Excel, basic SQL, Python fundamentals, cleaning, charts and dashboards — a smart way to explore business analytics alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical analytical skill. Whatever you study — commerce, management, arts, computer science, engineering or mathematics — analytics shows you how information becomes insight.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning several tools alone is confusing. A structured path replaces certificate-collecting with understanding how real projects run: cleaning raw data, writing queries, building dashboards, analysing trends and presenting business insight.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, finance, sales, marketing, operations or management? Analytics makes your experience more valuable. Sales professionals learn to analyse performance; business professionals learn how dashboards support decisions.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become an analyst. Understanding your own sales trends, customer behaviour, marketing performance and operational data makes you a better decision-maker — and easier for analysts and agencies to work with.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'Excel reporting, SQL analysis, Power BI and Tableau dashboards, visualisation, business reporting and performance analytics are all billable — and dashboards are among the easiest deliverables to sell.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Analytics skills are in demand across businesses',
        copy: 'IT companies, e-commerce brands, hospitals, financial organisations, manufacturers, education companies and local service providers all use data to measure performance. Excel, SQL, Python, Power BI, Tableau, visualisation and BI apply across all of them.',
      },
      {
        title: 'Learn how data analytics actually works',
        copy: 'Creating a chart is the beginning. Data collection and organisation, Excel formulas, cleaning, SQL, database fundamentals, Python, exploratory analysis, statistics, visualisation, dashboards, BI and storytelling are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you where the buttons are. Practical training teaches you to solve problems — cleaning, Excel analysis, SQL queries, Python, dashboards, Power BI reporting, Tableau and business analysis.',
      },
      {
        title: 'Think about insights, not just reports',
        copy: 'Creating reports is easy; finding the right insight is the challenge. You learn to read revenue, growth rate, conversion, customer trends, averages, percentages, KPIs and correlations well enough to know whether the data tells a useful story.',
      },
      {
        title: 'Analytics and AI are changing business intelligence',
        copy: 'AI is changing how analysts clean data, write queries and build dashboards. But it does not replace analytical thinking: the business problem, data quality, KPIs, trends and context still need a person who understands them.',
      },
    ],
    whyNow: {
      title: 'Build Analytics Skills You Can Show, Not Just Talk About',
      points: [
        'Project-based learning gives you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates Excel, SQL, Power BI, Tableau, Python and dashboard development in interviews.',
        'Data Analyst and BI roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with real project work.',
        'The goal is not learning software tools — it is turning raw information into decisions a business can act on.',
      ],
    },
    roles: [
      'Data Analyst',
      'Business Analyst',
      'MIS Executive / MIS Analyst',
      'Power BI Developer',
      'SQL Data Analyst',
      'Reporting Analyst',
      'AI-Powered Data Analyst',
      'Freelance Data Analyst',
    ],
    roleDetails: [
      {
        role: 'Data Analyst',
        copy: 'Collect, clean, analyse and interpret business information across Excel, SQL, Python, Power BI, dashboards and reports. The most common path after this course.',
      },
      {
        role: 'Business Analyst',
        copy: 'Analyse business processes, performance metrics, customer trends and operational data to find opportunities and support strategy.',
      },
      {
        role: 'MIS Executive / MIS Analyst',
        copy: 'Create reports, maintain business data, monitor KPIs and deliver regular insight using Excel, databases and reporting tools.',
      },
      {
        role: 'Power BI Developer',
        copy: 'Build interactive dashboards and BI reports, working with data modelling, DAX, visualisation, KPIs and business reporting.',
      },
      {
        role: 'SQL Data Analyst',
        copy: 'Use SQL to retrieve, organise, filter, join and analyse large datasets held in relational databases.',
      },
      {
        role: 'Reporting Analyst',
        copy: 'Build reports and dashboards in Excel, Power BI, Tableau, SQL and Google Sheets that make trends and performance legible.',
      },
      {
        role: 'AI-Powered Data Analyst',
        copy: 'Combine analytics with modern AI tools to speed up reporting, cleaning, SQL generation and visualisation — with analytical thinking still doing the real work.',
      },
      {
        role: 'Freelance Data Analyst',
        copy: 'Build a freelance practice on Excel reporting, SQL analysis, Power BI and Tableau dashboards, KPI tracking and business intelligence, locally or remotely.',
      },
    ],
    hiring: [
      'IT companies and software organisations managing business and customer data',
      'Startups and SaaS companies focused on analytics and performance reporting',
      'E-commerce and D2C brands analysing sales, customers and product performance',
      'Financial, healthcare and manufacturing organisations using reports and dashboards',
    ],
    nextSteps: [
      'Data Science with Python',
      'Power BI in depth',
      'Advanced SQL & data engineering',
      'Machine Learning fundamentals',
    ],
    industries: ['IT & software', 'E-commerce', 'Finance & healthcare', 'Manufacturing'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. These sit below the Data Science bands, which is consistent:
     * analytics is the faster, more accessible entry point into data work.
     * `scale` is the midpoint in ₹/month; remote sits below Punjab at the
     * fresher end on purpose, since freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Data Analyst',
      summary:
        'Turns business data into the reports and dashboards decisions get made from. Earnings vary with your skills, project experience, portfolio, certifications, company, location and performance.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Data Analyst / BI',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Data Analytics / Business Intelligence',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Data Analytics',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, Power BI Developer and BI Analyst. Practical project experience and the ability to explain an insight matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real project work starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of experience. Delhi/NCR runs higher, and analysts who add Python and machine learning move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and analytics is one of the easiest skills to freelance with because a dashboard or report is a self-contained deliverable. Freelance income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have real client work behind you.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies and software organisations, startups and SaaS companies focused on analytics, e-commerce and D2C brands studying sales and customers, and financial, healthcare and manufacturing organisations — plus remote and freelance clients.',
      },
      {
        q: 'Should I take Data Analytics or Data Science?',
        a: 'Analytics is the faster route to a first job. It stays closer to Excel, SQL, dashboards and business questions, and those skills are hireable in months. Data Science goes further into Python, statistics and machine learning — it takes longer but reaches higher. Many people start here, get working, and move across later.',
      },
    ],
    projects: [
      {
        name: 'Excel Business Analysis Project',
        summary:
          'Build a complete Excel analysis from scratch: organise business data, use formulas and functions, create Pivot Tables, analyse KPIs and produce a report someone can use.',
        tech: ['Excel', 'Pivot Tables'],
        level: 'Beginner',
        skills: ['Business Analysis', 'KPI Reporting'],
      },
      {
        name: 'SQL Data Analysis Project',
        summary:
          'An analytics project answering real business questions in SQL — writing queries, filtering, joining, grouping and analysing datasets.',
        tech: ['SQL', 'MySQL'],
        level: 'Beginner',
        skills: ['Database Queries', 'Data Analysis'],
      },
      {
        name: 'Python Data Analytics Project',
        summary:
          'A complete Python project on practical datasets: clean the information, analyse trends, manipulate data and build useful visualisations.',
        tech: ['Python', 'Pandas'],
        level: 'Intermediate',
        skills: ['Data Analysis', 'Automation'],
      },
      {
        name: 'Power BI Dashboard Project',
        summary:
          'Build an interactive dashboard on business performance — data models, KPIs, charts, filters and reports that make the trends obvious.',
        tech: ['Power BI', 'DAX'],
        level: 'Intermediate',
        skills: ['Business Intelligence', 'Dashboards'],
      },
      {
        name: 'Sales & Customer Analytics Project',
        summary:
          'An analytical solution for a real business dataset: sales performance, customer behaviour, purchasing trends and the growth indicators that matter.',
        tech: ['Excel', 'Power BI'],
        level: 'Intermediate',
        skills: ['Sales Analytics', 'Customer Insights'],
      },
      {
        name: 'Tableau Visualisation Project',
        summary:
          'Turn a dataset into an interactive visual story with worksheets, dashboards, filters and charts that carry a business argument.',
        tech: ['Tableau', 'Dashboards'],
        level: 'Advanced',
        skills: ['Data Visualisation', 'Storytelling'],
      },
      {
        name: 'AI-Powered Data Analytics Project',
        summary:
          'Use modern AI tools to accelerate cleaning, SQL, reporting, research and visualisation ideas — with accuracy, reasoning and originality kept central.',
        tech: ['AI Analytics', 'Automation'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Reporting'],
      },
      {
        name: 'End-to-End Data Analytics Capstone',
        summary:
          'A complete solution for a real business problem: collection, cleaning, SQL analysis, visualisation, dashboard development, reporting and presentation.',
        tech: ['Excel', 'SQL', 'Power BI'],
        level: 'Advanced',
        skills: ['Business Intelligence', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Start from a real business objective and work out what information answers it — the KPIs, the data sources, the customer trends and the performance metrics that matter.',
        artefact: 'Business Problem & Data Brief',
      },
      {
        title: 'Build',
        copy: 'Work with Excel, SQL, Python, Power BI, Tableau and dashboards under trainer guidance — clean the data, analyse it, build the report and develop the insight.',
        artefact: 'Data Analysis & Dashboard Development',
      },
      {
        title: 'Present & Improve',
        copy: 'Present findings, dashboards, KPIs, trends and recommendations like a professional, and learn to explain your analytical approach in an interview or client meeting.',
        artefact: 'End-to-End Data Analytics Project & Reporting',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready analytics certificate',
        copy: 'A certificate reflecting practical understanding of Excel, SQL, Python, Power BI, Tableau, data cleaning, dashboards, visualisation and business reporting.',
      },
      {
        title: 'Learn through practical projects',
        copy: 'Work on projects mirroring real business scenarios — cleaning datasets, analysing performance, writing SQL, creating dashboards, building reports and presenting insight.',
      },
      {
        title: 'Build an analytics portfolio',
        copy: 'Excel reports, SQL projects, Power BI dashboards, Tableau visualisations, Python analysis, KPI reports and insight presentations — proof you can show an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, interview preparation, guidance on presenting your projects, and a clear picture of the paths in Analytics, BI, Reporting and Business Analysis.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand analytics and BI',
        copy: 'The field keeps moving — AI, automation, BI platforms, cloud data tools and visualisation methods all change. Teaching uses practical examples and current approaches, so you understand not only how to build a report but why an insight matters.',
      },
      {
        title: 'Live and practical projects',
        copy: 'Without practical work it is hard to understand a real business problem. Projects span Excel, SQL, Python, cleaning, Power BI dashboards, Tableau, KPI reporting, BI and AI-powered workflows.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss an analytical approach and get guidance while working on real datasets — whether you are a beginner or strengthening existing skill.',
      },
      {
        title: 'Build an analytics portfolio',
        copy: 'Finishing should mean more than a certificate. Practical exercises produce portfolio work demonstrating Excel, SQL, Python, Power BI, Tableau, visualisation, dashboards and reporting.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across analytics, BI, reporting and operations.',
      },
      {
        title: 'A practical approach to analytics',
        copy: 'The goal is confidence understanding data, not memorising formulas or software interfaces — practical Excel, SQL, Python, Power BI, Tableau, visualisation, BI, KPI reporting and AI-powered analytics.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Data Analytics curriculum',
          techcadd:
            'Industry-focused training covering Excel, SQL, Python, Power BI, Tableau, dashboards and reporting',
          others: 'Often focuses mainly on basic tool concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real datasets',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical project training',
          techcadd:
            'Students learn data cleaning, analysis, visualisation, dashboarding and reporting',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Analytics skills',
          techcadd: 'Covers Excel, SQL, Python, KPIs, reporting, dashboards and business intelligence',
          others: 'May cover only selected tools',
        },
        {
          feature: 'Business intelligence',
          techcadd: 'Focus on data models, dashboards, KPIs and performance insight',
          others: 'BI training can vary',
        },
        {
          feature: 'Visualisation & reporting',
          techcadd:
            'Practical understanding of charts, dashboards, storytelling and business reports',
          others: 'Visualisation may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and analytics projects that demonstrate real skill',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Trainer guidance throughout the learning journey to clarify concepts',
          others: 'Support may be limited to scheduled sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification combined with practical learning exposure',
          others: 'Certification format and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a Data Analytics institute in Phagwara, ask what you will actually learn, whether you will work on practical projects, how trainers teach analysis, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your analytics fundamentals',
        blurb:
          'Understand how business information is organised and analysed — Excel, data cleaning, basic SQL, visualisation and reporting.',
        covers: [
          'Introduction to Data Analytics',
          'Excel fundamentals',
          'Advanced Excel functions',
          'Data cleaning basics',
          'Sorting and filtering',
          'Pivot Tables',
          'Basic charts and visualisation',
          'Introduction to SQL',
          'Understanding KPIs',
          'Basic business reporting',
        ],
        skills: ['Microsoft Excel', 'Google Sheets', 'Basic SQL', 'Power BI basics'],
        recommendedFor:
          'Data Analyst Trainee, MIS Trainee, Reporting Intern and junior analytics roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic data analysis',
        blurb:
          'Practical skill in SQL, Python, Power BI, Tableau, dashboards and business reporting — the level professional analytics roles want.',
        covers: [
          'Advanced Excel',
          'Data cleaning and preparation',
          'Advanced SQL queries',
          'Database fundamentals',
          'Python for data analytics',
          'Pandas and NumPy',
          'Data visualisation',
          'Power BI dashboard development',
          'Tableau fundamentals',
          'KPI analysis',
          'Business intelligence reporting',
          'Data storytelling',
        ],
        skills: ['SQL', 'MySQL', 'Python', 'Pandas', 'Power BI', 'Tableau'],
        recommendedFor:
          'Data Analyst, MIS Analyst, Reporting Analyst, Business Analyst, Power BI Developer and BI Analyst roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete analytics & BI skill set',
        blurb:
          'Advanced analytics with business intelligence, dashboard development, Python, advanced visualisation, reporting automation and AI-powered strategy.',
        covers: [
          'Advanced Excel analytics',
          'Advanced SQL',
          'Python programming for analytics',
          'Advanced Pandas',
          'Data cleaning automation',
          'Advanced Power BI',
          'Data modelling and DAX',
          'Advanced Tableau',
          'Business intelligence',
          'KPI and performance analysis',
          'Data storytelling',
          'Reporting automation',
          'AI tools and prompt engineering',
          'End-to-end analytics projects',
        ],
        skills: ['Power BI', 'DAX', 'Tableau', 'Python', 'SQL', 'GitHub', 'AI tools'],
        recommendedFor:
          'Senior Data Analyst pathway, Business Intelligence Analyst, Power BI Developer, Reporting Specialist, Business Analyst and advanced analytics pathways.',
      },
    ],
    capabilities: [
      { capability: 'Excel fundamentals', included: [true, true, true] },
      { capability: 'Data cleaning', included: [true, true, true] },
      { capability: 'Pivot Tables & reports', included: [true, true, true] },
      { capability: 'Basic visualisation', included: [true, true, true] },
      { capability: 'SQL fundamentals', included: [true, true, true] },
      { capability: 'Advanced SQL', included: [false, true, true] },
      { capability: 'Python for analytics', included: [false, true, true] },
      { capability: 'Power BI', included: [false, true, true] },
      { capability: 'Tableau', included: [false, true, true] },
      { capability: 'Dashboard development', included: [false, true, true] },
      { capability: 'Advanced Power BI & DAX', included: [false, false, true] },
      { capability: 'Advanced Tableau', included: [false, false, true] },
      { capability: 'Data modelling', included: [false, false, true] },
      { capability: 'Reporting automation', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional SQL, Python, Power BI, Tableau, dashboards and reporting. The 9-month programme combines all of it with advanced business intelligence, data modelling, reporting automation, AI tools and end-to-end projects — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Data Analytics with us?',
      intro:
        'The goal is not learning where to click inside Excel, Power BI or Tableau. The focus is on what the numbers mean, which trends matter, how a dashboard tells a story, and how data supports a better decision.',
      points: [
        {
          title: 'Excel taken seriously',
          copy: 'Most business data still arrives in a spreadsheet. Excel is taught properly here rather than rushed past on the way to the fancier tools.',
        },
        {
          title: 'SQL from early on',
          copy: 'Business data lives in databases. An analyst who can only open a CSV is limited from their first week.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering Excel, SQL, Python, a Power BI dashboard, sales analytics, Tableau, AI tooling and a capstone you own.',
        },
        {
          title: 'Communication counts',
          copy: 'A dashboard nobody understands changes nothing. Reporting and presentation are taught as part of the work, not an afterthought.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Data Analytics Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how business data is collected, cleaned, analysed, visualised and turned into insight. The focus is practical: Excel, SQL, Python, Power BI, Tableau, cleaning, dashboards, reporting and business intelligence — real analytical skill rather than software concepts.',
      },
      {
        q: 'Who can join a Data Analytics Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs and aspiring freelancers. Beginners can start without programming experience; professionals use it to strengthen their data and reporting skills.',
      },
      {
        q: 'Is Data Analytics a good career option for freshers?',
        a: 'Yes. It opens opportunities in data analysis, business intelligence, reporting, MIS, business analysis and technology-driven business roles. Depending on skills and experience, learners can explore roles such as Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, Power BI Developer and BI Analyst.',
      },
      {
        q: 'What will I learn in the Data Analytics Course?',
        a: 'Advanced Excel, SQL, Python, data cleaning, exploratory analysis, statistics, Power BI, Tableau, dashboards, KPIs, visualisation, reporting and AI-powered analytics — plus business KPIs, growth trends, averages, percentages, customer behaviour, sales performance and conversion rates.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Analytics becomes much easier once you work with real datasets, spreadsheets, databases, dashboards and reports. The approach includes practical Excel exercises, SQL projects, Python analysis, dashboard development, visualisation and reporting tasks.',
      },
      {
        q: 'Will I work on Data Analytics projects during the course?',
        a: 'Yes. Assignments include Excel analysis projects, SQL queries, Python data analysis, Power BI dashboards, Tableau visualisations, KPI reports, sales analysis and AI-powered workflows — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Data Analytics after 12th?',
        a: 'Absolutely, if you are interested in technology, business, programming, reporting or mathematics. It lets students develop specialised skills while continuing formal education or preparing for future analytics roles.',
      },
      {
        q: 'Can Data Analytics help me become a freelancer?',
        a: 'Yes. Freelancers can offer Excel reporting, SQL analysis, Power BI dashboards, Tableau visualisation, Python analysis, KPI reporting and business intelligence. But successful freelancing needs more than tools: a portfolio, an understanding of client goals and clear communication matter just as much.',
      },
      {
        q: 'Does the course include AI in Data Analytics?',
        a: 'Yes. Modern workflows use AI for cleaning, formula assistance, SQL generation, reporting, research, dashboard ideas and automation. The course covers how these tools support analytics while keeping critical thinking, validation and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Data Analytics Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, Excel training, SQL training, Python modules, Power BI, Tableau, practical projects, dashboard development, trainer experience, portfolio building, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'power-bi-course-in-phagwara',
      'tableau-course-in-phagwara',
      'data-science-course-in-phagwara',
      'python-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
    ],
    keywords: [
      'data analytics course in phagwara',
      'data analytics training in phagwara',
      'data analytics classes in phagwara',
      'business analytics course in phagwara',
      'data analyst course in phagwara',
      'data analytics course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'power-bi-course-in-phagwara',
    label: 'Power BI',
    title: 'Power BI Course in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Turn raw data into dashboards a business runs on — Power Query, DAX, data modelling and interactive reports, with live projects and placement assistance.',
    overview:
      'Techcadd’s Power BI Programming Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, entrepreneurs, business owners and aspiring data professionals who want practical business intelligence skill. It covers Power BI Desktop, data transformation, Power Query, data modelling, DAX, visualisation, KPI development, interactive reports, dashboard creation and AI-powered analytics tools. The training is hands-on throughout — real datasets, practical projects and industry-standard BI workflows — so you learn to connect, clean, transform, model, analyse, visualise and present data for decisions that get made from it. Unlike purely theoretical learning, you work with real datasets, dashboard development, reporting workflows and performance analysis, and finish understanding how organisations use Power BI to track KPIs, spot trends and monitor performance.',
    demand:
      'Power BI is the reporting layer most Indian businesses have already bought and few can properly use, which makes a competent developer immediately useful rather than a long-term investment.',
    modules: [
      {
        title: 'Power BI & Business Intelligence Foundations',
        summary:
          'Understand how Power BI supports modern business intelligence, and get your first dashboard working.',
        topics: [
          'The Power BI interface and data importing',
          'Basic reports, charts, filters and slicers',
          'KPIs and dashboards',
          'Working with practical business datasets',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Cleaning & Power Query',
        summary:
          'Learn to work with raw, unstructured information — the step that decides whether a dashboard is trustworthy.',
        topics: [
          'Missing values, duplicates and inconsistent formats',
          'Practical Power Query transformation techniques',
          'Organising datasets for analysis and reporting',
          'Building a structured preparation workflow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Modelling & Relationships',
        summary:
          'Learn to structure data for reporting — where most self-taught Power BI work quietly falls apart.',
        topics: [
          'Tables, relationships and cardinality',
          'Star schema and data models',
          'Working with multiple business datasets',
          'How professional dashboards connect information',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'DAX Programming',
        summary:
          'Learn the language behind every real calculation in Power BI, and the metrics a business actually asks for.',
        topics: [
          'Measures and calculated columns',
          'DAX functions and aggregations',
          'Time intelligence',
          'Conditional calculations',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Data Visualisation & Dashboarding',
        summary:
          'Learn to turn raw numbers into a visual story someone can read in ten seconds.',
        topics: [
          'Charts, graphs, KPIs, cards, slicers and maps',
          'Selecting the right visualisation for the question',
          'Dashboards and business reports',
          'Building interactive, professional dashboards',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Advanced Power BI Development',
        summary:
          'Discover the reporting techniques that separate a working dashboard from a professional one.',
        topics: [
          'Drill-through, bookmarks and tooltips',
          'Conditional formatting and report navigation',
          'Advanced DAX and data modelling',
          'Interactive dashboard design',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Business Intelligence & Reporting',
        summary:
          'Explore professional reporting and the storytelling that makes a dashboard persuasive.',
        topics: [
          'Analysing KPIs and comparing performance',
          'Identifying trends worth acting on',
          'Communicating business insight',
          'Building meaningful BI reports',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'KPIs, Performance & Data Insights',
        summary:
          'Learn how BI developers communicate findings — the part that decides whether your work changes anything.',
        topics: [
          'Business reports and the metrics that matter',
          'Identifying trends and actionable insight',
          'Presenting findings to managers, clients and employers',
          'Building a practical reporting workflow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Power BI, Live Projects & Career Preparation',
        summary:
          'End-to-end projects from raw data to boardroom, with AI used where it genuinely helps.',
        topics: [
          'Collection, transformation, modelling, DAX and dashboards',
          'Using AI tools to improve analytical workflows',
          'A portfolio project demonstrating your skills',
          'Career guidance across Power BI, Analytics, BI and Reporting',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Connect, clean and transform messy data in Power Query',
      'Build a proper data model with relationships and a star schema',
      'Write DAX measures, calculated columns and time intelligence',
      'Design interactive dashboards with drill-through and bookmarks',
      'Define KPIs that answer a real business question',
      'Ship an end-to-end Power BI project you can defend in an interview',
    ],
    tools: [
      'Power BI Desktop',
      'Power BI Service',
      'Power Query',
      'DAX',
      'Data Modelling',
      'Microsoft Excel',
      'SQL',
      'MySQL',
      'Python Basics for Analytics',
      'Power BI Dashboards',
      'Data Visualisation',
      'BI Reporting',
      'KPI Development',
      'Git & GitHub',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need previous technical experience to understand how businesses use dashboards. A structured course covers data fundamentals, Power BI Desktop, Power Query, visualisation, dashboards and KPIs — a smart way to explore reporting and analytics alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical analytical skill. Whatever you study — commerce, management, arts, computer science, engineering or mathematics — Power BI shows you how information becomes business insight.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning several tools alone is confusing. A structured path replaces certificate-collecting with understanding how real projects run: importing and cleaning data, building relationships, writing DAX, creating dashboards and presenting insight.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, finance, sales, marketing, operations or management? Power BI makes your experience more valuable. Sales professionals build performance dashboards; business professionals learn how interactive reports support decisions.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become a developer. A dashboard of your own sales trends, customer behaviour, marketing performance and operational data makes you a better decision-maker — and easier for analysts and agencies to work with.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'Dashboard development, visualisation, KPI reporting, DAX calculations, business reporting, data modelling and performance analytics are all billable — and a dashboard is among the cleanest deliverables to sell.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Power BI skills are in demand across businesses',
        copy: 'IT companies, e-commerce brands, hospitals, financial organisations, manufacturers, education companies and local service providers all use Power BI to monitor performance. Power Query, DAX, modelling, dashboards, KPIs and BI apply across all of them.',
      },
      {
        title: 'Learn how Power BI actually works',
        copy: 'Creating a dashboard is the beginning. Data importing and connections, Power Query, cleaning and transformation, modelling, relationships, DAX formulas, measures and calculated columns, KPIs, visualisation, BI and storytelling are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you where the buttons are. Practical training teaches you to solve problems — importing, Power Query transformation, DAX calculations, modelling, dashboard development, KPI reporting and business analysis.',
      },
      {
        title: 'Think about insights, not just dashboards',
        copy: 'Creating dashboards is easy; finding the right insight is the challenge. You learn to read revenue, growth rate, conversion, customer trends, averages, percentages and KPIs well enough to know whether the dashboard tells a useful story.',
      },
      {
        title: 'Power BI and AI are changing business intelligence',
        copy: 'AI is changing how professionals clean data, write formulas and build reports. But it does not replace analytical thinking: the business problem, data quality, KPIs, relationships and context still need a person who understands them.',
      },
    ],
    whyNow: {
      title: 'Build Power BI Skills You Can Show, Not Just Talk About',
      points: [
        'Project-based learning gives you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates dashboards, DAX, data modelling, Power Query and visualisation in interviews.',
        'Power BI and BI roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with real dashboards to show.',
        'The goal is not learning software tools — it is turning raw information into dashboards and decisions.',
      ],
    },
    roles: [
      'Power BI Developer',
      'Data Analyst',
      'BI Analyst',
      'Reporting Analyst',
      'DAX Developer',
      'MIS Analyst',
      'AI-Powered BI Analyst',
      'Freelance Power BI Developer',
    ],
    roleDetails: [
      {
        role: 'Power BI Developer',
        copy: 'Build interactive dashboards and BI reports across Power Query, DAX, data modelling, visualisation, KPIs and business reporting. The most common path after this course.',
      },
      {
        role: 'Data Analyst',
        copy: 'Collect, clean, analyse and interpret business information using Power BI, Excel, SQL, dashboards and reports to surface the trends that matter.',
      },
      {
        role: 'BI Analyst',
        copy: 'Analyse business performance, build dashboards, monitor KPIs and deliver regular insight through Power BI and the surrounding BI stack.',
      },
      {
        role: 'Reporting Analyst',
        copy: 'Build reports and dashboards in Power BI, Excel, SQL and visualisation tools that make trends and performance legible.',
      },
      {
        role: 'DAX Developer',
        copy: 'Build calculations, measures, time intelligence formulas and advanced business metrics inside Power BI data models.',
      },
      {
        role: 'MIS Analyst',
        copy: 'Create reports, maintain business information and monitor KPIs using Excel, Power BI, databases and reporting tools.',
      },
      {
        role: 'AI-Powered BI Analyst',
        copy: 'Combine Power BI with modern AI tools to speed up reporting, formula generation, preparation and visualisation ideas — with analytical thinking still doing the real work.',
      },
      {
        role: 'Freelance Power BI Developer',
        copy: 'Build a freelance practice on dashboards, KPI reporting, DAX, data modelling and performance tracking, locally in Phagwara or remotely.',
      },
    ],
    hiring: [
      'IT companies and software organisations managing business and customer data',
      'Startups and SaaS companies focused on analytics and performance reporting',
      'E-commerce and D2C brands analysing sales, customers and product performance',
      'Financial, healthcare and manufacturing organisations using reports and dashboards',
    ],
    nextSteps: [
      'Tableau & advanced visualisation',
      'Advanced SQL for BI',
      'Data Analytics in depth',
      'Data Science with Python',
    ],
    industries: ['IT & software', 'E-commerce', 'Finance & healthcare', 'Manufacturing'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They match the Data Analytics bands, which is consistent:
     * Power BI is the tool most of those analyst roles are hired against.
     * `scale` is the midpoint in ₹/month; remote sits below Punjab at the
     * fresher end on purpose, since freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Power BI Developer',
      summary:
        'Builds the dashboards and reports a business runs its decisions from. Earnings vary with your skills, project experience, portfolio, certifications, company, location and performance.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Power BI / BI',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Power BI / Data Analytics',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Power BI Projects',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Power BI Developer, Data Analyst, BI Analyst, MIS Executive, Reporting Analyst and Business Intelligence Consultant. Practical project experience and the ability to explain an insight matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real dashboards to show starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of experience. Delhi/NCR runs higher, and developers who add SQL and modelling depth move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — Power BI is one of the best freelance skills in the catalogue, because a dashboard is a self-contained deliverable a client can see the value of immediately. Income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ with real client work behind you.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies and software organisations, startups and SaaS companies focused on reporting, e-commerce and D2C brands studying sales and customers, and financial, healthcare and manufacturing organisations — plus remote and freelance clients.',
      },
      {
        q: 'Is Power BI enough on its own, or do I need Data Analytics too?',
        a: 'Power BI alone will get you hired for dashboard work. What limits people is everything around it — SQL to get at the data, and enough analytical judgement to know which KPI matters. This course covers SQL basics and KPI thinking for that reason; the Data Analytics course goes wider still, adding Python and Tableau.',
      },
    ],
    projects: [
      {
        name: 'Sales Performance Dashboard',
        summary:
          'Build a complete sales dashboard from scratch: import business data, transform it, create KPIs, analyse performance and produce an interactive report.',
        tech: ['Power BI', 'KPIs'],
        level: 'Beginner',
        skills: ['Sales Analytics', 'Dashboards'],
      },
      {
        name: 'DAX Business Analysis Project',
        summary:
          'A DAX project answering real business questions — measures, calculated columns, aggregations and time intelligence calculations.',
        tech: ['DAX', 'Measures'],
        level: 'Beginner',
        skills: ['Business Intelligence', 'Calculations'],
      },
      {
        name: 'Customer Analytics Dashboard',
        summary:
          'A complete customer analytics project on practical data: behaviour, purchasing trends, segmentation and the performance metrics that matter.',
        tech: ['Power BI', 'Data Analysis'],
        level: 'Intermediate',
        skills: ['Customer Insights', 'Segmentation'],
      },
      {
        name: 'Financial Performance Dashboard',
        summary:
          'An interactive financial dashboard on revenue and business performance — data models, KPIs, charts, filters and reports that make trends obvious.',
        tech: ['Power BI', 'Finance'],
        level: 'Intermediate',
        skills: ['Data Modelling', 'Dashboards'],
      },
      {
        name: 'Marketing Performance Project',
        summary:
          'An analytical solution for marketing data: campaign performance, customer engagement, conversions and the growth indicators behind them.',
        tech: ['Power BI', 'KPIs'],
        level: 'Intermediate',
        skills: ['Marketing Analytics', 'Reporting'],
      },
      {
        name: 'HR Analytics Dashboard',
        summary:
          'Turn HR datasets into a working BI solution — dashboards, filters, charts, KPIs and workforce visualisations people will actually use.',
        tech: ['Power BI', 'HR Analytics'],
        level: 'Advanced',
        skills: ['Visualisation', 'Dashboards'],
      },
      {
        name: 'AI-Powered Power BI Project',
        summary:
          'Use modern AI tools to accelerate formula development, reporting, preparation and visualisation ideas — with accuracy, reasoning and originality kept central.',
        tech: ['AI Analytics', 'DAX'],
        level: 'Advanced',
        skills: ['Reporting', 'Automation'],
      },
      {
        name: 'End-to-End Power BI Capstone',
        summary:
          'A complete solution for a real business problem: collection, transformation, modelling, DAX, dashboard development, reporting and presentation.',
        tech: ['Power Query', 'DAX', 'Power BI'],
        level: 'Advanced',
        skills: ['Business Intelligence', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Start from a real business objective and work out what information answers it — the KPIs, the data sources, the customer trends and the performance metrics that matter.',
        artefact: 'Business Problem & Data Brief',
      },
      {
        title: 'Build',
        copy: 'Work with Power BI, Power Query, DAX, data models, dashboards and KPIs under trainer guidance — transform the data, build the relationships and develop the insight.',
        artefact: 'Dashboard Development & Business Intelligence',
      },
      {
        title: 'Present & Improve',
        copy: 'Present findings, dashboards, KPIs, trends and recommendations like a professional, and learn to explain your development approach in an interview or client meeting.',
        artefact: 'End-to-End Power BI Project & Reporting',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready Power BI certificate',
        copy: 'A certificate reflecting practical understanding of Power Query, DAX, data modelling, dashboards, visualisation, KPIs and business reporting.',
      },
      {
        title: 'Learn through practical projects',
        copy: 'Work on projects mirroring real business scenarios — transforming datasets, building models, writing DAX, creating dashboards, analysing KPIs and presenting insight.',
      },
      {
        title: 'Build a Power BI portfolio',
        copy: 'Dashboards, DAX projects, KPI reports, sales dashboards, customer analytics, performance dashboards and insight presentations — proof you can show an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, interview preparation, guidance on presenting your projects, and a clear picture of the paths in Power BI, Analytics, BI, Reporting and Business Analysis.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand business intelligence',
        copy: 'The field keeps moving — AI, automation, BI platforms, cloud data tools and visualisation methods all change. Teaching uses practical examples and current approaches, so you understand not only how to build a dashboard but why an insight matters.',
      },
      {
        title: 'Live and practical Power BI projects',
        copy: 'Without practical work it is hard to understand a real business problem. Projects span transformation, Power Query, DAX, modelling, dashboards, KPI reporting, BI and AI-powered workflows.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss a dashboard approach and get guidance while working on real datasets — whether you are a beginner or strengthening existing analytical skill.',
      },
      {
        title: 'Build a Power BI portfolio',
        copy: 'Finishing should mean more than a certificate. Practical exercises produce portfolio work demonstrating Power Query, DAX, modelling, dashboards, visualisation, KPIs and reporting.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across BI, analytics, reporting and operations.',
      },
      {
        title: 'A practical approach to Power BI',
        copy: 'The goal is confidence understanding data, not memorising software interfaces — practical Power BI, Power Query, DAX, modelling, visualisation, BI, KPI reporting and dashboard development.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Power BI curriculum',
          techcadd:
            'Industry-focused training covering Power Query, DAX, data modelling, dashboards and reporting',
          others: 'Often focuses mainly on basic tool concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real datasets',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical project training',
          techcadd:
            'Students learn transformation, modelling, visualisation, dashboarding and reporting',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Business intelligence skills',
          techcadd: 'Covers Power BI, DAX, KPIs, reporting, dashboards and business intelligence',
          others: 'May cover only selected concepts',
        },
        {
          feature: 'Data modelling',
          techcadd: 'Focus on relationships, models, measures and analytical structure',
          others: 'Modelling training can vary',
        },
        {
          feature: 'Visualisation & reporting',
          techcadd:
            'Practical understanding of charts, dashboards, storytelling and business reports',
          others: 'Visualisation may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and Power BI projects that demonstrate real skill',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Trainer guidance throughout the learning journey to clarify concepts',
          others: 'Support may be limited to scheduled sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification combined with practical learning exposure',
          others: 'Certification format and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a Power BI institute in Phagwara, ask what you will actually learn, whether you will work on practical projects, how trainers teach business intelligence, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your Power BI fundamentals',
        blurb:
          'Understand how business information is connected and visualised — Power BI Desktop, data importing, Power Query, basic dashboards, KPIs and reporting.',
        skills: ['Power BI Desktop', 'Power Query', 'Microsoft Excel', 'Basic visualisation'],
        recommendedFor:
          'Power BI Trainee, Reporting Intern, MIS Trainee and junior analytics roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic dashboard development',
        blurb:
          'Practical skill in Power Query, DAX, data modelling, dashboards, business intelligence and reporting — the level professional BI roles want.',
        skills: ['Power BI Desktop', 'DAX', 'Data modelling', 'SQL basics', 'Visualisation'],
        recommendedFor:
          'Power BI Developer, Data Analyst, BI Analyst, Reporting Analyst, MIS Analyst and business intelligence roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete Power BI & BI skill set',
        blurb:
          'Advanced dashboard development with advanced DAX, data modelling, business intelligence, visualisation, reporting automation and AI-powered strategy.',
        skills: ['Power BI Service', 'Advanced DAX', 'SQL', 'Data modelling', 'GitHub', 'AI tools'],
        recommendedFor:
          'Advanced Power BI Developer pathway, Business Intelligence Analyst, Data Analyst, Reporting Specialist, BI Consultant and advanced analytics pathways.',
      },
    ],
    capabilities: [
      { capability: 'Power BI fundamentals', included: [true, true, true] },
      { capability: 'Data importing', included: [true, true, true] },
      { capability: 'Power Query', included: [true, true, true] },
      { capability: 'Basic dashboards', included: [true, true, true] },
      { capability: 'KPIs & visualisation', included: [true, true, true] },
      { capability: 'Data modelling', included: [false, true, true] },
      { capability: 'DAX fundamentals', included: [false, true, true] },
      { capability: 'Interactive dashboards', included: [false, true, true] },
      { capability: 'Advanced DAX', included: [false, false, true] },
      { capability: 'Time intelligence', included: [false, false, true] },
      { capability: 'Advanced data modelling', included: [false, false, true] },
      { capability: 'Advanced Power BI', included: [false, false, true] },
      { capability: 'Reporting automation', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional Power Query, DAX, data modelling, dashboards and business intelligence. The 9-month programme combines all of it with advanced development, advanced DAX, modelling, reporting automation, AI tools and end-to-end BI projects — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Power BI with us?',
      intro:
        'The goal is not learning where to click inside Power BI. The focus is on what the numbers mean, which trends matter, how a dashboard tells a story, and how business intelligence supports a better decision.',
      points: [
        {
          title: 'Modelling before prettiness',
          copy: 'Most self-taught Power BI falls apart at the data model. Relationships and star schema are taught properly, before the visuals.',
        },
        {
          title: 'DAX given real time',
          copy: 'Four weeks on DAX rather than an afternoon. Measures, time intelligence and conditional logic are where the actual capability lives.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical dashboards covering sales, DAX, customers, finance, marketing, HR, AI tooling and a capstone you own.',
        },
        {
          title: 'Communication counts',
          copy: 'A dashboard nobody understands changes nothing. Reporting and presentation are taught as part of the work, not an afterthought.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Power BI Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how business data is connected, cleaned, transformed, modelled, visualised and turned into insight. The focus is practical: Power BI Desktop, Power Query, DAX, modelling, dashboards, KPI reporting, visualisation and business intelligence — real skill rather than software concepts.',
      },
      {
        q: 'Who can join a Power BI Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs and aspiring freelancers. Beginners can start without programming experience; professionals use it to strengthen their reporting and analytical skills.',
      },
      {
        q: 'Is Power BI a good career option for freshers?',
        a: 'Yes. It opens opportunities in Power BI development, data analytics, business intelligence, reporting, MIS and technology-driven business roles. Depending on skills and experience, learners can explore roles such as Power BI Developer, Data Analyst, BI Analyst, MIS Executive, Reporting Analyst and BI Consultant.',
      },
      {
        q: 'What will I learn in the Power BI Course?',
        a: 'Power BI Desktop, Power Query, data transformation, DAX, data modelling, relationships, KPIs, dashboard development, visualisation, reporting, business intelligence and AI-powered analytics — plus business KPIs, growth trends, averages, percentages, customer behaviour, sales performance and conversion rates.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Power BI becomes much easier once you work with real datasets, dashboards, data models, DAX formulas and business reports. The approach includes practical dashboard exercises, Power Query projects, DAX calculations, modelling, KPI development, visualisation and reporting tasks.',
      },
      {
        q: 'Will I work on Power BI projects during the course?',
        a: 'Yes. Assignments include sales dashboards, customer analytics, financial reports, DAX calculations, Power Query transformations, KPI reports, HR analytics and AI-powered BI workflows — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Power BI after 12th?',
        a: 'Absolutely, if you are interested in technology, business, reporting or mathematics. It lets students develop specialised skills while continuing formal education or preparing for future analytics roles.',
      },
      {
        q: 'Can Power BI help me become a freelancer?',
        a: 'Yes. Freelancers can offer dashboard development, DAX calculations, KPI reporting, data modelling, BI reporting, visualisation and performance analytics. But successful freelancing needs more than tools: a portfolio, an understanding of client goals and clear communication matter just as much.',
      },
      {
        q: 'Does the course include AI in Power BI?',
        a: 'Yes. Modern BI workflows use AI for data preparation, formula assistance, DAX generation, reporting, research, dashboard ideas and automation. The course covers how these tools support business intelligence while keeping critical thinking, validation and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Power BI Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, Power Query training, DAX training, data modelling modules, dashboard development, visualisation, practical projects, trainer experience, portfolio building, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'data-analytics-course-in-phagwara',
      'tableau-course-in-phagwara',
      'data-science-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'python-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
    ],
    keywords: [
      'power bi course in phagwara',
      'power bi training in phagwara',
      'power bi classes in phagwara',
      'business intelligence course in phagwara',
      'dax course in phagwara',
      'power bi course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'tableau-course-in-phagwara',
    label: 'Tableau',
    title: 'Tableau Course in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Make numbers speak — Tableau dashboards, calculated fields, filters, parameters and data storytelling, with live projects and placement assistance.',
    overview:
      'Techcadd’s Tableau Programming Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, business professionals, entrepreneurs and aspiring analysts who want practical skill in data visualisation and business intelligence. It covers Tableau Desktop, data connections, charts, dashboards, calculated fields, filters, parameters, data blending, joins, Tableau Prep, analytics, storytelling and AI-powered analysis tools. The training is hands-on throughout — live dashboards, practical projects and industry-standard tooling — so you learn to connect, clean, analyse, visualise and present data that supports a real decision. Unlike purely theoretical learning, you work with real datasets, dashboard development technique, visualisation strategy and insight-driven reporting, and finish understanding how organisations use dashboards to spot trends, monitor performance and communicate clearly.',
    demand:
      'Tableau is what the larger firms and the analytics teams standardise on, so it opens the doors Excel alone will not — and dashboard work is visible enough that a good portfolio speaks for itself.',
    modules: [
      {
        title: 'Tableau Foundations & Data Visualisation',
        summary:
          'Understand how Tableau works and where visualisation fits into business intelligence.',
        topics: [
          'Tableau fundamentals, data types and analytical concepts',
          'Dimensions, measures, worksheets and dashboards',
          'Choosing the right chart for a business question',
          'Building a first working dashboard',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Connections & Preparation',
        summary:
          'Learn to connect data from wherever it actually lives, and get it into a shape worth charting.',
        topics: [
          'Excel, CSV, database and cloud connections',
          'Basic data cleaning and preparation',
          'Joins, relationships and data blending',
          'Building structured datasets for analysis',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Tableau Charts & Visualisations',
        summary:
          'Learn to build professional visualisations, and why a chart type is a decision rather than a preference.',
        topics: [
          'Bar, line and pie charts, maps and advanced visuals',
          'Dimensions, measures and aggregation',
          'Meaningful comparisons and trend analysis',
          'Visualisation best practice',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Calculated Fields, Filters & Parameters',
        summary:
          'Analyse data through calculations and the interactive controls that make a dashboard genuinely useful.',
        topics: [
          'Calculated fields and formulas',
          'Filters, groups and sets',
          'Parameters for interactive dashboards',
          'Calculations for business KPIs',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Dashboards & Business Intelligence',
        summary:
          'Learn to combine visualisations into a dashboard a manager will actually use.',
        topics: [
          'Dashboard layouts and design principles',
          'Tracking KPIs, trends and business metrics',
          'Interactive filters and actions',
          'Designing for management reporting',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Analysis & Performance Reporting',
        summary:
          'Creating dashboards is the beginning. Learn how analysts find the insight inside them.',
        topics: [
          'Analysing trends, comparisons and patterns',
          'Identifying opportunities and performance gaps',
          'KPIs and analytical metrics',
          'Dashboard optimisation and performance',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Tableau Analytics',
        summary:
          'Discover how AI is changing analytics without replacing the judgement behind it.',
        topics: [
          'AI for data exploration and calculation ideas',
          'Faster research and analytical workflows',
          'Using AI to identify patterns in datasets',
          'Responsible use, keeping analysis accurate and business-focused',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Reporting, Storytelling & Business Strategy',
        summary:
          'Learn how professional analysts present insight — the part that decides whether it gets acted on.',
        topics: [
          'Organising data stories and reports',
          'Identifying what needs attention',
          'Creating clear performance reports',
          'Communicating insight to managers and clients',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Tableau Projects, Portfolio & Career Preparation',
        summary:
          'An end-to-end project from raw data to presentation, then learning to defend it out loud.',
        topics: [
          'Collection, preparation, visualisation and dashboard creation',
          'Assignments based on real business scenarios',
          'A portfolio project demonstrating analytics skill',
          'Career guidance across Tableau, analytics, BI and reporting',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Connect Tableau to Excel, CSV, SQL and cloud data sources',
      'Choose and build the right visualisation for a business question',
      'Write calculated fields and use filters, groups, sets and parameters',
      'Design interactive dashboards with actions and drill-downs',
      'Read a dashboard for insight rather than decoration',
      'Ship an end-to-end Tableau project you can defend in an interview',
    ],
    tools: [
      'Tableau Desktop',
      'Tableau Public',
      'Tableau Prep',
      'Tableau Cloud',
      'Microsoft Excel',
      'SQL Databases',
      'Google Sheets',
      'Power BI Concepts',
      'Python Basics for Data',
      'MySQL',
      'Google Analytics',
      'Looker Studio',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need an advanced technical background to understand how data visualisation works. A structured course covers data connections, charts, dashboards, filters, calculations and business reporting — a smart way to explore analytics alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical analytical skill. Whatever you study — commerce, management, arts, computer science or engineering — Tableau shows you how businesses analyse information and decide from it.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning this alone is confusing. A structured path replaces certificate-collecting with understanding how real dashboards work: connecting datasets, creating charts, analysing trends, building interactive reports and presenting insight.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in business, operations, finance, marketing, sales, HR or IT? Tableau makes your experience more useful. Sales professionals learn how dashboards track performance; business professionals learn how visualisation drives smarter decisions.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become an analyst. A dashboard of your own sales trends, customer behaviour and operational performance tells you why some areas do better than others — and makes working with analysts far easier.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'Dashboard development, visualisation, business reporting, data cleaning, analytics and interactive reports are all billable — and a dashboard is a deliverable a client can see the value of immediately.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Tableau skills are in demand across industries',
        copy: 'IT companies, e-commerce businesses, hospitals, financial organisations, educational institutes, retail brands and local businesses all use dashboards to understand performance. Visualisation, dashboard development, calculated fields, analytics and BI apply across all of them.',
      },
      {
        title: 'Learn how Tableau actually works',
        copy: 'Creating a dashboard is the beginning. Data connections and sources, cleaning and preparation, dimensions and measures, charts, calculated fields, filters and parameters, joins and relationships, blending, stories, KPIs and optimisation are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you where the options are. Practical training teaches you to make analytical decisions — data connections, visualisation design, calculated fields, dashboard planning, KPI tracking and performance analysis.',
      },
      {
        title: 'Think about insights, not just charts',
        copy: 'Creating charts is easy; finding meaningful insight is the challenge. You learn to read revenue, profit, growth rate, conversion, customer trends and KPIs well enough to know what the data is actually telling you.',
      },
      {
        title: 'Tableau and AI are changing data analytics',
        copy: 'AI is changing how professionals analyse data and generate insight. But it does not replace analytical thinking: the business problem, data quality, KPIs, context, trends and audience still need a person who understands them.',
      },
    ],
    whyNow: {
      title: 'Build Tableau Skills You Can Show, Not Just Talk About',
      points: [
        'Dashboard-based projects give you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates visualisation, dashboard development, calculated fields and analytics in interviews.',
        'Tableau and analytics roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with real dashboards to show.',
        'The goal is not learning where the buttons are — it is turning raw data into insight and better decisions.',
      ],
    },
    roles: [
      'Tableau Developer',
      'Data Analyst',
      'Business Intelligence Analyst',
      'Data Visualization Specialist',
      'Reporting Analyst',
      'Tableau Analyst',
      'AI-Powered Data Analyst',
      'Freelance Tableau Developer',
    ],
    roleDetails: [
      {
        role: 'Tableau Developer',
        copy: 'Build and maintain dashboards against real business requirements — data connections, visualisation, calculations, dashboard design, filters, parameters and reporting. The most popular path after this course.',
      },
      {
        role: 'Data Analyst',
        copy: 'Analyse business datasets to find patterns, trends and insight, working across cleaning, visualisation, reporting and KPIs.',
      },
      {
        role: 'Business Intelligence Analyst',
        copy: 'Use Tableau alongside databases and analytics tools to build the reports business decisions get made from.',
      },
      {
        role: 'Data Visualization Specialist',
        copy: 'Build clear, interactive visualisations that make complex information legible — charts, dashboards, calculated fields and storytelling.',
      },
      {
        role: 'Reporting Analyst',
        copy: 'Manage reports and dashboards for an organisation: development, KPI tracking, analysis, maintenance and performance reporting.',
      },
      {
        role: 'Tableau Analyst',
        copy: 'Track and analyse business performance across Tableau, Excel, SQL and analytics platforms, using revenue, profit, growth and conversion to show what is working.',
      },
      {
        role: 'AI-Powered Data Analyst',
        copy: 'Combine Tableau with modern AI tools to speed up exploration, calculation development, insight generation and reporting — with analytical thinking still doing the real work.',
      },
      {
        role: 'Freelance Tableau Developer',
        copy: 'Build a freelance practice on dashboards, business reports, visualisation, KPI dashboards and analytical solutions, locally in Phagwara or remotely.',
      },
    ],
    hiring: [
      'IT companies and software organisations using business intelligence dashboards',
      'Startups and SaaS companies focused on data-driven decision-making',
      'E-commerce and D2C brands analysing sales and customer data',
      'Financial and business organisations using reporting dashboards',
    ],
    nextSteps: [
      'Power BI & the Microsoft BI stack',
      'Advanced SQL for analytics',
      'Data Analytics in depth',
      'Data Science with Python',
    ],
    industries: ['IT & software', 'E-commerce', 'Finance & business', 'Startups & SaaS'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They match the Data Analytics and Power BI bands, which is
     * consistent: all three hire into the same analyst roles. `scale` is the
     * midpoint in ₹/month; remote sits below Punjab at the fresher end on
     * purpose, since freelance income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Tableau Developer',
      summary:
        'Builds the dashboards a business reads its performance from. Earnings vary with your skills, project experience, portfolio, certifications, company, location and performance.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Tableau / Data Analytics',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Tableau / Business Intelligence',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Tableau Projects',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Tableau Developer, Data Analyst, Business Intelligence Analyst, Reporting Analyst and Data Visualization Specialist. Practical dashboard experience and the ability to analyse insight matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real dashboards to show starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of experience. Delhi/NCR runs higher, and analysts who add SQL depth move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — Tableau dashboards are self-contained deliverables a client can judge at a glance, which makes them unusually easy to sell. Income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ with real client work behind you.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies and software organisations running BI dashboards, startups and SaaS companies focused on data-driven decisions, e-commerce and D2C brands analysing sales and customers, and financial and business organisations — plus remote and freelance clients.',
      },
      {
        q: 'Should I learn Tableau or Power BI?',
        a: 'Both do the same job and the concepts transfer, so neither is a wasted choice. Power BI is more common in Indian companies already on Microsoft, and tends to appear in more local job listings. Tableau is stronger on visualisation and storytelling and is standard in larger analytics teams. If you are aiming locally, Power BI opens more doors first; if you want the visualisation craft, learn Tableau. Analysts who know both are rare and are paid accordingly.',
      },
    ],
    projects: [
      {
        name: 'Tableau Dashboard Setup',
        summary:
          'Build a dashboard from scratch: connect datasets, work with dimensions and measures, create visualisations and plan a dashboard around a business objective.',
        tech: ['Tableau', 'Data Connections'],
        level: 'Beginner',
        skills: ['Dashboard Structure', 'Visualisation'],
      },
      {
        name: 'Sales Performance Dashboard',
        summary:
          'A dashboard analysing sales performance — charts, KPIs, trends, filters, and the usability decisions that make it worth opening twice.',
        tech: ['Tableau', 'KPIs'],
        level: 'Beginner',
        skills: ['Sales Analytics', 'Dashboards'],
      },
      {
        name: 'Data Analysis Project',
        summary:
          'A complete analysis on structured data: find the trends, comparisons and insight while judging data quality and analytical requirements.',
        tech: ['Tableau', 'Data Analysis'],
        level: 'Intermediate',
        skills: ['Business Insights', 'Visualisation Strategy'],
      },
      {
        name: 'Customer Analytics Dashboard',
        summary:
          'An interactive dashboard on customer behaviour — metrics, segmentation, and which patterns are actually generating insight.',
        tech: ['Tableau', 'Calculations'],
        level: 'Intermediate',
        skills: ['Customer Analytics', 'Interactive Dashboards'],
      },
      {
        name: 'Local Business Analytics Project',
        summary:
          'An analytics strategy for a Phagwara business: sales, customers, services and operational performance, combining Tableau, Excel data and real KPIs.',
        tech: ['Tableau', 'Excel'],
        level: 'Intermediate',
        skills: ['Business Analytics', 'KPI Dashboards'],
      },
      {
        name: 'Dashboard Optimisation Project',
        summary:
          'Take an existing dashboard and make it better. Analyse charts, filters, calculations, KPIs and user interaction the way a working analyst does.',
        tech: ['Tableau', 'KPIs'],
        level: 'Advanced',
        skills: ['Dashboard Optimisation', 'Performance Analysis'],
      },
      {
        name: 'AI-Powered Data Analytics Project',
        summary:
          'Use modern AI tools to accelerate exploration, calculation ideas, pattern analysis and dashboard concepts — with accuracy and critical thinking kept central.',
        tech: ['AI Analytics', 'Tableau'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Data Insights'],
      },
      {
        name: 'End-to-End Tableau Capstone',
        summary:
          'A complete analytics solution for a real business scenario: preparation, visualisation, dashboard development, KPI analysis, reporting and insight.',
        tech: ['Tableau', 'Business Intelligence'],
        level: 'Advanced',
        skills: ['Analytics', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a real business requirement into a focused analysis strategy — research the dataset, understand the objective, identify the KPIs and choose the visualisations that answer it.',
        artefact: 'Data Research & Tableau Analytics Brief',
      },
      {
        title: 'Build',
        copy: 'Create and manage dashboards with trainer guidance — connections, charts, calculated fields, filters, parameters, KPIs and AI-powered workflows — improving on what the data shows.',
        artefact: 'Tableau Dashboards & Data Visualisation',
      },
      {
        title: 'Present & Analyse',
        copy: 'Present your data strategy, visualisations, KPIs, insight and calculations like a professional, and learn to explain your analytical process in an interview or client meeting.',
        artefact: 'End-to-End Tableau Dashboard & Analytics Project',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready Tableau certificate',
        copy: 'A certificate reflecting practical understanding of visualisation, dashboards, calculated fields, filters, parameters, analytics, reporting and business intelligence.',
      },
      {
        title: 'Learn through practical projects',
        copy: 'Work on projects mirroring real analytics scenarios — connecting datasets, creating visualisations, building dashboards, analysing KPIs and presenting insight.',
      },
      {
        title: 'Build a Tableau portfolio',
        copy: 'Dashboards, visualisation reports, calculated fields, KPI analysis, interactive reports and analytical strategies — proof you can show an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, preparation for Tableau and data analyst interviews, guidance on presenting your dashboard work, and a clear picture of the paths in analytics, BI and reporting.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand data analytics',
        copy: 'Tableau and BI keep changing — analytics practice, AI-powered tools, dashboard design, data integration and reporting all move. Teaching uses practical examples and current practice, so you understand not only how to build a dashboard but why an insight matters.',
      },
      {
        title: 'Live and practical Tableau projects',
        copy: 'Without practical work it is hard to understand real data analysis. Projects span dashboards, visualisation, calculated fields, filters, parameters, KPI analysis, reporting and optimisation.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss an analytical strategy and get guidance while working on practical tasks — whether you are a beginner or strengthening existing skill.',
      },
      {
        title: 'Build a Tableau portfolio',
        copy: 'Finishing should mean more than a certificate. Practical exercises produce portfolio work demonstrating visualisation, dashboards, calculations, analytics, reporting and BI.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across analytics and business intelligence.',
      },
      {
        title: 'A practical approach to Tableau',
        copy: 'The goal is confidence making data-driven decisions, not memorising the interface — practical Tableau, visualisation, BI, dashboard development, calculated fields, analytics and reporting.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Tableau curriculum',
          techcadd:
            'Industry-focused training covering dashboards, visualisation, calculated fields, filters, parameters, data connections, analytics and reporting',
          others: 'Often focuses mainly on basic Tableau concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real data scenarios',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical dashboard training',
          techcadd:
            'Students learn dashboard planning, visualisation design, KPI analysis, data preparation and reporting',
          others: 'Practical exposure may be limited or simulated',
        },
        {
          feature: 'Data analytics skills',
          techcadd:
            'Covers analytics fundamentals, KPIs, calculated fields, data trends, business metrics and performance analysis',
          others: 'May cover only selected analytics concepts',
        },
        {
          feature: 'Dashboard optimisation',
          techcadd: 'Focus on understanding data and improving dashboard usability',
          others: 'Optimisation training can vary between institutes',
        },
        {
          feature: 'Analytics & reporting',
          techcadd: 'Practical understanding of business insight, KPIs, dashboards and reporting',
          others: 'Analytics and reporting may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd:
            'Practical assignments and dashboard projects that help students demonstrate their skills',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
        },
        {
          feature: 'Doubt support',
          techcadd:
            'Trainer guidance throughout to clarify analytical and visualisation concepts',
          others: 'Support may be limited to scheduled sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification combined with practical learning exposure',
          others: 'Certification format and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a Tableau institute in Phagwara, ask what you will actually learn, whether you will work on practical dashboard exercises, how trainers teach analytics, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your Tableau fundamentals',
        blurb:
          'Understand how visualisation works and how businesses use dashboards — Tableau fundamentals, data connections, charts and basic analytics.',
        skills: ['Tableau Desktop', 'Tableau Public', 'Microsoft Excel', 'Google Sheets', 'Basic SQL'],
        recommendedFor:
          'Tableau Trainee, Data Analytics Trainee, Reporting Intern and Junior Data Analyst roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic Tableau',
        blurb:
          'Practical skill in dashboard development, calculated fields, data preparation, analytics and reporting — the job-ready level for analytics roles.',
        skills: ['Tableau Desktop', 'Tableau Prep', 'SQL', 'MySQL', 'Looker Studio', 'AI tools'],
        recommendedFor:
          'Tableau Developer, Data Analyst, Reporting Analyst, Business Intelligence Executive and Analytics Executive roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete data analytics skill set',
        blurb:
          'Tableau combined with advanced analytics, SQL, business intelligence, reporting, dashboard optimisation and AI-powered strategy.',
        skills: ['Tableau Prep', 'Tableau Public', 'SQL', 'Power BI concepts', 'Looker Studio', 'AI tools'],
        recommendedFor:
          'Tableau Developer, Data Analyst, Business Intelligence Analyst, Senior Reporting Analyst, Data Visualization Specialist and Analytics Consultant pathways.',
      },
    ],
    capabilities: [
      { capability: 'Tableau fundamentals', included: [true, true, true] },
      { capability: 'Data visualisation', included: [true, true, true] },
      { capability: 'Tableau dashboards', included: [true, true, true] },
      { capability: 'Data connections', included: [true, true, true] },
      /* Your matrix marks this "Basic" at 3 months rather than a tick, so the
         row says so rather than overstating what the foundation tier covers. */
      { capability: 'Calculated fields (basic at 3 months)', included: [true, true, true] },
      { capability: 'Advanced dashboards', included: [false, true, true] },
      { capability: 'Parameters & sets', included: [false, true, true] },
      { capability: 'Data preparation', included: [false, true, true] },
      { capability: 'SQL analytics', included: [false, true, true] },
      { capability: 'Tableau Prep', included: [false, true, true] },
      { capability: 'Advanced business intelligence', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional dashboard development, analytics and reporting. The 9-month programme combines all of it with advanced Tableau, SQL, business intelligence, data storytelling and AI-powered workflows — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Tableau with us?',
      intro:
        'The goal is not learning where to click inside Tableau. The focus is on what the data means, which patterns matter, how business performance is tracked, and how insight gets presented clearly.',
      points: [
        {
          title: 'Chart choice as a decision',
          copy: 'Picking the right visualisation for a question is a skill, not a preference. It is taught as one.',
        },
        {
          title: 'Calculated fields given real time',
          copy: 'Four weeks on calculations, filters and parameters — where a static chart becomes an interactive analysis.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical dashboards covering setup, sales, analysis, customers, a local business, optimisation, AI tooling and a capstone you own.',
        },
        {
          title: 'Storytelling counts',
          copy: 'Tableau’s real advantage is communication. Presenting a dashboard so it persuades is taught as part of the work.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Tableau Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how data visualisation and business intelligence work. The focus is practical: data connections, charts, dashboards, calculated fields, filters, parameters, analysis, reporting and dashboard optimisation — real analytics skill rather than Tableau concepts.',
      },
      {
        q: 'Who can join a Tableau Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs and aspiring freelancers. Beginners can start without previous analytics experience; professionals use it to strengthen their analytical skills.',
      },
      {
        q: 'Is Tableau a good career option for freshers?',
        a: 'Yes. It opens opportunities in data analytics, business intelligence, reporting, dashboard development and visualisation. Depending on skills and experience, learners can explore roles such as Tableau Developer, Data Analyst, Business Intelligence Analyst, Reporting Analyst and Data Visualization Specialist.',
      },
      {
        q: 'What will I learn in the Tableau Course?',
        a: 'Tableau fundamentals, data connections, charts, dashboards, calculated fields, filters, parameters, joins, data blending, business intelligence, KPI analysis, storytelling, reporting and dashboard optimisation — plus revenue, profit, growth, conversion rate and customer trends.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Tableau becomes much easier once you work with real datasets, visualisations, dashboards, calculations, filters and business metrics. The approach includes practical dashboard exercises, data analysis, visualisation development, reporting and real business scenarios.',
      },
      {
        q: 'Will I work on Tableau projects during the course?',
        a: 'Yes. Assignments include sales dashboards, customer analytics, business intelligence reports, KPI dashboards, visualisation projects, dashboard optimisation and performance analysis — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Tableau after 12th?',
        a: 'Absolutely, if you are interested in technology, business, analytics or data visualisation. It lets students develop a specialised skill while continuing formal education or preparing for future analytics roles.',
      },
      {
        q: 'Can Tableau help me become a freelancer?',
        a: 'Yes. Freelancers can offer dashboard development, visualisation, business reporting, KPI analysis, optimisation and analytics consulting. But successful freelancing needs more than the platform: a portfolio, an understanding of client requirements and clear communication matter just as much.',
      },
      {
        q: 'Does the course include AI in Tableau and data analytics?',
        a: 'Yes. Modern workflows use AI for exploration, insight generation, calculation ideas, reporting, research, pattern identification and automation. The course covers how these tools support analytics while keeping critical thinking, data accuracy, validation and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Tableau Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, practical training, dashboard exercises, visualisation training, calculated fields, analytics tools, trainer experience, portfolio projects, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'power-bi-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'data-science-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'python-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
    ],
    keywords: [
      'tableau course in phagwara',
      'tableau training in phagwara',
      'tableau classes in phagwara',
      'tableau data visualization course in phagwara',
      'data analytics course in phagwara',
      'tableau course after 12th in phagwara',
    ],
  }),
]
