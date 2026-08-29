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
        a: 'They overlap heavily at the start. Data Analytics is the faster route to a first job and stays closer to reporting, dashboards and business questions. Data Science goes further into programming, statistics and machine learning, so it takes longer but reaches higher. If you are unsure, start here — the analytics skills are inside this course anyway.',
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
    title: 'Best Data Analytics Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Turn raw data into decisions — Excel, SQL and visualization tools used daily by working analysts.',
    overview: 'Five months turning raw data into decisions: statistics you genuinely use, SQL you can be tested on, and dashboards built to answer a specific business question rather than to look busy.',
    demand: 'Analytics is the most reachable well-paid role in the data field: SQL and a BI tool are enough to be hired, and both can be learned from scratch in months.',
    modules: [
      {
        title: 'Excel & analytical thinking',
        summary: 'Framing a question before touching a tool.',
        topics: ['Pivot tables', 'Lookup functions', 'Data hygiene', 'Framing an analysis'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'SQL',
        summary: 'Getting exactly the rows you need out of a real database.',
        topics: ['SELECT & filtering', 'Joins', 'Window functions', 'Query performance'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Python for analysis',
        summary: 'Pandas for the work spreadsheets cannot carry.',
        topics: ['Dataframes', 'Cleaning', 'Merging', 'Time series'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Statistics that matter',
        summary: 'Enough inference to avoid confident wrong answers.',
        topics: ['Distributions', 'Hypothesis testing', 'A/B testing', 'Correlation vs causation'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Power BI & Tableau',
        summary: 'Dashboards designed for the person who has to decide something.',
        topics: ['Data modelling', 'DAX basics', 'Visual design', 'Publishing & refresh'],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Capstone analysis',
        summary: 'One end-to-end analysis, presented and defended.',
        topics: ['Problem framing', 'Analysis', 'Storytelling', 'Presentation'],
        duration: '3 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Write SQL against a real schema with confidence',
      'Clean and reshape messy data in Pandas',
      'Choose the right chart for the question',
      'Run and interpret a basic experiment',
      'Build dashboards in Power BI and Tableau',
      'Present findings so a decision follows',
    ],
    tools: [
      'SQL',
      'MySQL',
      'Python',
      'Pandas',
      'NumPy',
      'Power BI',
      'Tableau',
      'Excel',
      'Git',
      'Jupyter',
    ],
    roles: [
      'Data Analyst',
      'Business Analyst',
      'BI Developer',
      'Reporting Analyst',
      'Analytics Consultant',
    ],
    hiring: [
      'Business intelligence teams',
      'E-commerce and retail analytics',
      'Finance and operations teams',
      'Consulting and reporting roles',
    ],
    nextSteps: [
      'Machine learning foundations',
      'Data engineering basics',
      'Advanced statistics',
      'Cloud data platforms',
    ],
    industries: ['Retail & e-commerce', 'Finance', 'Healthcare', 'Logistics'],
    salary: {
      role: 'Data Analyst',
      summary: 'Cleans, queries and visualises data so a team can see what is actually happening.',
      starting: '₹3–5 LPA',
      after2: '₹6–11 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹3–5 LPA',
          after2: '₹6–11 LPA',
          scale: { fresher: 3.9, after2: 8.5 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–15.5 LPA',
          scale: { fresher: 5.46, after2: 11.9 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4.5–8 LPA',
          after2: '₹9.5–17 LPA',
          scale: { fresher: 6.04, after2: 13.18 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Data Analytics?',
        a: 'Graduates move into Data Analyst, Business Analyst, BI Developer, Reporting Analyst and similar roles. Analytics is the most reachable well-paid role in the data field: SQL and a BI tool are enough to be hired, and both can be learned from scratch in months.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹23,000 – ₹42,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes. A Phagwara address costs you nothing on a remote brief. Students bill clients in Delhi, Dubai and Canada. The course covers client handling, proposals and reporting so you can price and defend your work, not just do it.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Beyond IT companies, the agro and food processing units, immigration consultancies, hospitals, schools, hotels and the university belt around Phagwara all now hire for these skills directly.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Most students move on to an adjacent techcadd track. The tools overlap, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Sales analytics dashboard',
        summary: 'Revenue, cohorts and regional performance in one publishable dashboard.',
        tech: ['SQL', 'Power BI'],
        level: 'Intermediate',
        skills: ['Data modelling', 'Visual design', 'DAX'],
      },
      {
        name: 'Customer churn analysis',
        summary: 'Find who leaves, when, and which signals precede it.',
        tech: ['Python', 'Pandas', 'SQL'],
        level: 'Advanced',
        skills: ['Feature analysis', 'Segmentation', 'Reporting'],
      },
      {
        name: 'Pricing experiment review',
        summary: 'Read an A/B test properly and say what it does and does not prove.',
        tech: ['Python', 'Statistics'],
        level: 'Intermediate',
        skills: ['Hypothesis testing', 'Interpretation', 'Communication'],
      },
    ],
    instructor: {
      heading: 'Why learn with us?',
      intro: 'Every trainer here still ships production code. That is the whole basis of the teaching: answers come from current practice rather than from a slide deck written three years ago.',
      points: [
        {
          title: 'Practitioners, not presenters',
          copy: 'Sessions are run by engineers working on live systems, so the examples come from real codebases.',
        },
        {
          title: 'Project-based from week one',
          copy: 'You build as you learn. Each module ends in something that runs, not in a quiz.',
        },
        {
          title: 'Personalised guidance',
          copy: 'Small batches mean your mentor knows what you are stuck on and what you are aiming at.',
        },
        {
          title: 'Doubt support that continues',
          copy: 'Doubt sessions and mentor hours carry on after the certificate is printed.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the Data Analytics course in Phagwara?',
        a: 'techcadd runs Data Analytics over 3 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Data Analytics course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Data Analytics course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Data Analytics course?',
        a: 'Graduates move into Data Analyst, Business Analyst, BI Developer, Reporting Analyst and similar roles. Analytics is the most reachable well-paid role in the data field: SQL and a BI tool are enough to be hired, and both can be learned from scratch in months.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Data Analyst roles start around ₹23,000 – ₹42,000 a month for a fresher with a working portfolio, rising to ₹6–11 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. It starts with Excel and analytical framing before SQL, so no prior coding is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Comfort with numbers and basic spreadsheets. Programming experience is helpful but not required.',
      },
    ],
    whyNow: {
      title: 'Data Analytics Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Data Analyst roles in Punjab start around ₹23,000 – ₹42,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'python-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'java-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'deep-learning-course-in-phagwara',
    ],
    keywords: [
      'data analytics course phagwara',
      'power bi training in phagwara',
      'sql course in phagwara',
      'data analyst training in phagwara',
    ],
  }),

  makeCourse({
    slug: 'power-bi-course-in-phagwara',
    label: 'Power BI',
    title: 'Best Power BI Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Microsoft\'s leading BI tool — connect, model and visualize data into dashboards that decision-makers actually use.',
    overview: 'Six weeks in Power BI: connecting and shaping with Power Query, modelling relationships, writing DAX and publishing dashboards that refresh.',
    demand: 'Power BI sits on almost every corporate desktop in India, which makes it the single fastest reporting skill to convert into a job offer.',
    modules: [
      {
        title: 'Connect & transform',
        summary: 'Power Query, and cleaning at the source.',
        topics: ['Connectors', 'Power Query', 'Cleaning', 'Merging'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Data modelling',
        summary: 'Relationships and star schemas.',
        topics: ['Relationships', 'Star schema', 'Date tables', 'Cardinality'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'DAX',
        summary: 'Measures that answer real questions.',
        topics: ['Calculated columns', 'Measures', 'CALCULATE', 'Time intelligence'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Dashboards & sharing',
        summary: 'Design, publish and refresh.',
        topics: ['Visual design', 'Bookmarks', 'Publishing', 'Scheduled refresh'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Clean and shape data in Power Query',
      'Build a sound star-schema model',
      'Write DAX measures with confidence',
      'Design dashboards for decisions',
      'Publish and schedule refreshes',
    ],
    tools: ['Power BI Desktop', 'Power Query', 'DAX', 'Power BI Service', 'Excel', 'SQL'],
    roles: ['BI Developer', 'Data Analyst', 'Reporting Analyst', 'Business Analyst'],
    hiring: [
      'Corporate reporting teams',
      'Finance and operations departments',
      'Consulting and audit firms',
      'Freelance dashboard projects',
    ],
    nextSteps: ['Tableau', 'Data Analytics', 'SQL in depth', 'Machine Learning'],
    industries: ['Finance', 'Retail', 'Manufacturing', 'Healthcare'],
    salary: {
      role: 'BI Analyst',
      summary: 'Builds the dashboards and data models a business runs its weekly decisions on.',
      starting: '₹2.5–4.5 LPA',
      after2: '₹5.5–10 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2.5–4.5 LPA',
          after2: '₹5.5–10 LPA',
          scale: { fresher: 3.55, after2: 7.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3.5–6.5 LPA',
          after2: '₹7.5–14 LPA',
          scale: { fresher: 4.97, after2: 10.85 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–15.5 LPA',
          scale: { fresher: 5.5, after2: 12.01 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Power BI?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Business Analyst and similar roles. Power BI sits on almost every corporate desktop in India, which makes it the single fastest reporting skill to convert into a job offer.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹22,000 – ₹38,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes. A Phagwara address costs you nothing on a remote brief. Students bill clients in Delhi, Dubai and Canada. The course covers client handling, proposals and reporting so you can price and defend your work, not just do it.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Beyond IT companies, the agro and food processing units, immigration consultancies, hospitals, schools, hotels and the university belt around Phagwara all now hire for these skills directly.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Most students move on to an adjacent techcadd track. The tools overlap, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Executive sales dashboard',
        summary: 'A modelled, DAX-driven dashboard with scheduled refresh.',
        tech: ['Power BI', 'DAX'],
        level: 'Intermediate',
        skills: ['Modelling', 'DAX', 'Design'],
      },
      {
        name: 'Operations report',
        summary: 'Power Query cleaning feeding a daily operations view.',
        tech: ['Power Query'],
        level: 'Beginner',
        skills: ['Cleaning', 'Merging', 'Visuals'],
      },
    ],
    instructor: {
      heading: 'Why learn with us?',
      intro: 'Every trainer here still ships production code. That is the whole basis of the teaching: answers come from current practice rather than from a slide deck written three years ago.',
      points: [
        {
          title: 'Practitioners, not presenters',
          copy: 'Sessions are run by engineers working on live systems, so the examples come from real codebases.',
        },
        {
          title: 'Project-based from week one',
          copy: 'You build as you learn. Each module ends in something that runs, not in a quiz.',
        },
        {
          title: 'Personalised guidance',
          copy: 'Small batches mean your mentor knows what you are stuck on and what you are aiming at.',
        },
        {
          title: 'Doubt support that continues',
          copy: 'Doubt sessions and mentor hours carry on after the certificate is printed.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the Power BI course in Phagwara?',
        a: 'techcadd runs Power BI over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Power BI course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Power BI course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Power BI course?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Business Analyst and similar roles. Power BI sits on almost every corporate desktop in India, which makes it the single fastest reporting skill to convert into a job offer.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'BI Analyst roles start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio, rising to ₹5.5–10 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Power BI begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Power BI Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'BI Analyst roles in Punjab start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'tableau-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
    ],
    keywords: [
      'power bi course phagwara',
      'dax training in phagwara',
      'power query course in phagwara',
      'bi dashboard classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'tableau-course-in-phagwara',
    label: 'Tableau',
    title: 'Best Tableau Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Industry-standard visual analytics — build the kind of interactive dashboards used across BI and analyst roles.',
    overview: 'Six weeks turning data into decisions in Tableau: connecting and shaping sources, choosing the right visual, and publishing dashboards people return to.',
    demand: 'Tableau is what larger analytics teams and international clients standardise on, and it travels particularly well on remote briefs.',
    modules: [
      {
        title: 'Connecting & shaping data',
        summary: 'Getting clean, joined data into Tableau.',
        topics: ['Connections', 'Joins & blends', 'Extracts', 'Data prep'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Core visualisations',
        summary: 'Choosing the chart the question deserves.',
        topics: ['Bar & line', 'Maps', 'Scatter', 'Chart choice'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Calculations & LOD',
        summary: 'Where Tableau gets genuinely powerful.',
        topics: ['Calculated fields', 'Table calcs', 'LOD expressions', 'Parameters'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Dashboards & publishing',
        summary: 'Layout, interactivity and getting it in front of people.',
        topics: ['Actions', 'Filters', 'Layout', 'Tableau Public / Server'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Connect, join and extract from real sources',
      'Choose the right chart for the question',
      'Write calculated fields and LOD expressions',
      'Build interactive dashboards with actions',
      'Publish and share dashboards that stay current',
    ],
    tools: ['Tableau Desktop', 'Tableau Public', 'SQL', 'Excel', 'Tableau Prep'],
    roles: ['BI Developer', 'Data Analyst', 'Reporting Analyst', 'Visualisation Specialist'],
    hiring: [
      'Analytics and BI teams',
      'Consulting firms',
      'Multinational reporting teams',
      'Freelance visualisation work',
    ],
    nextSteps: ['Power BI', 'Data Analytics', 'SQL in depth', 'Machine Learning'],
    industries: ['Retail', 'Finance', 'Healthcare', 'Logistics'],
    salary: {
      role: 'Data Visualisation Analyst',
      summary: 'Turns messy datasets into dashboards an executive can read in ten seconds.',
      starting: '₹2.5–4.5 LPA',
      after2: '₹5.5–10 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2.5–4.5 LPA',
          after2: '₹5.5–10 LPA',
          scale: { fresher: 3.55, after2: 7.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3.5–6.5 LPA',
          after2: '₹7.5–14 LPA',
          scale: { fresher: 4.97, after2: 10.85 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–15.5 LPA',
          scale: { fresher: 5.5, after2: 12.01 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Tableau?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Visualisation Specialist and similar roles. Tableau is what larger analytics teams and international clients standardise on, and it travels particularly well on remote briefs.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹22,000 – ₹38,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes. A Phagwara address costs you nothing on a remote brief. Students bill clients in Delhi, Dubai and Canada. The course covers client handling, proposals and reporting so you can price and defend your work, not just do it.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Beyond IT companies, the agro and food processing units, immigration consultancies, hospitals, schools, hotels and the university belt around Phagwara all now hire for these skills directly.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Most students move on to an adjacent techcadd track. The tools overlap, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Sales performance dashboard',
        summary: 'Revenue, region and cohort views in one publishable dashboard.',
        tech: ['Tableau', 'SQL'],
        level: 'Intermediate',
        skills: ['Data modelling', 'LOD', 'Layout'],
      },
      {
        name: 'Operations KPI board',
        summary: 'A live-refreshing board built for a daily stand-up.',
        tech: ['Tableau Prep', 'Tableau'],
        level: 'Beginner',
        skills: ['Data prep', 'Chart choice', 'Publishing'],
      },
    ],
    instructor: {
      heading: 'Why learn with us?',
      intro: 'Every trainer here still ships production code. That is the whole basis of the teaching: answers come from current practice rather than from a slide deck written three years ago.',
      points: [
        {
          title: 'Practitioners, not presenters',
          copy: 'Sessions are run by engineers working on live systems, so the examples come from real codebases.',
        },
        {
          title: 'Project-based from week one',
          copy: 'You build as you learn. Each module ends in something that runs, not in a quiz.',
        },
        {
          title: 'Personalised guidance',
          copy: 'Small batches mean your mentor knows what you are stuck on and what you are aiming at.',
        },
        {
          title: 'Doubt support that continues',
          copy: 'Doubt sessions and mentor hours carry on after the certificate is printed.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the Tableau course in Phagwara?',
        a: 'techcadd runs Tableau over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Tableau course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Tableau course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Tableau course?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Visualisation Specialist and similar roles. Tableau is what larger analytics teams and international clients standardise on, and it travels particularly well on remote briefs.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Data Visualisation Analyst roles start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio, rising to ₹5.5–10 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. It starts from connecting a spreadsheet and assumes no prior BI experience.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Comfort with spreadsheets. SQL helps but is introduced where it is needed.',
      },
    ],
    whyNow: {
      title: 'Tableau Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Data Visualisation Analyst roles in Punjab start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'data-analytics-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
    ],
    keywords: [
      'tableau course phagwara',
      'tableau training in phagwara',
      'data visualisation course in phagwara',
      'bi dashboard course in phagwara',
    ],
  }),
]
