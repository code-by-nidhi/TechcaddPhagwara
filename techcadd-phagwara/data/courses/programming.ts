/**
 * Programming course pages.
 *
 * Only what genuinely differs between tracks is written here — the audience
 * grid, the "why this programme" cards, the instructor panel, the shared FAQs
 * and the student reviews all come from `./shared` via `makeCourse`.
 *
 * @see ./factory for what each field becomes on the page.
 */

import { makeCourse } from './factory'
import type { CourseContent } from './types'

export const PROGRAMMING_COURSES: CourseContent[] = [
  makeCourse({
    slug: 'python-course-in-phagwara',
    label: 'Python',
    title: 'Python Programming Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'code',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn Python from first syntax to live projects — OOP, functions, file handling, databases, APIs and automation, with placement assistance.',
    overview:
      'Techcadd’s Python Programming Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners the art of coding using Python. It covers all the core concepts — Python basics, OOP, data structures, files, databases, APIs, automation and the Python libraries used in practice. The training is built on practical knowledge rather than theory: you learn through coding exercises, assignments and actual projects, so you see how Python is used in software development, automation, data handling and other technology work. The approach is beginner-friendly throughout, and the emphasis stays on problem solving, logic and coding rather than memorising syntax — by the end you are confident writing, debugging and developing Python programs of your own.',
    demand:
      'Python reaches further than any other first language — software development, automation, data science, AI and machine learning all run on it, and even non-programmers can learn to code with it.',
    modules: [
      {
        title: 'Python Programming Fundamentals',
        summary:
          'Build your Python knowledge from scratch and grow as a coder step by step, writing clear programs that develop real programming logic.',
        topics: [
          'Syntax, variables, data types and operators',
          'Conditions, loops and functions',
          'Strings, lists, tuples, sets and dictionaries',
          'Writing clear and understandable Python code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Logic, Functions & Problem-Solving',
        summary:
          'Get deeper insight into coding and learn how programmers actually think about a problem before writing any of it down.',
        topics: [
          'Solving problems with conditions, loops and functions',
          'Arguments, return values and scope',
          'Error handling and debugging techniques',
          'Decomposing large problems into smaller coding tasks',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Object-Oriented Python Programming',
        summary:
          'Find out how professional Python applications are structured, and build the skills a Python developer role assumes.',
        topics: [
          'Classes, objects, methods and constructors',
          'Inheritance, encapsulation and polymorphism',
          'Structuring code into reusable components',
          'Building structured Python applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Libraries, APIs & Automation',
        summary:
          'Find out what Python can do beyond its basics — the libraries, the file system, and talking to services that are not yours.',
        topics: [
          'Popular Python libraries and modules',
          'Files, folders and data management',
          'What an API is and how Python consumes one',
          'Automating repetitive tasks with Python',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Python for Data Handling',
        summary:
          'Find out how Python is used on real-world data, from a messy export through to something a business can read.',
        topics: [
          'Reading, cleaning and processing datasets',
          'CSV, JSON and other data formats',
          'Python tools used for data analysis',
          'The basics of data visualisation',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Python for AI & Machine Learning',
        summary:
          'Advance your Python for modern AI work — the foundations a machine learning track assumes you already have.',
        topics: [
          'The Python foundations machine learning needs',
          'Data preparation and basic ML pipelines',
          'How Python is used in AI and intelligent applications',
          'Python libraries behind current AI development',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI-Powered Python Development',
        summary:
          'Learn how AI tools have changed the way developers write and learn code — and how to use them without becoming dependent on them.',
        topics: [
          'Using AI assistants to understand code and troubleshoot errors',
          'Generating and improving ideas with effective prompts',
          'Using AI ethically and knowing when not to',
          'Faster debugging, documentation and coding workflows',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Projects, Git & Developer Workflow',
        summary:
          'Apply your coding skills the way a team does — version controlled, organised, and readable by somebody else.',
        topics: [
          'Building projects against real-world requirements',
          'Git and version control workflow',
          'Developer workflow and project organisation',
          'Writing readable, reusable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Python Projects & Career Preparation',
        summary:
          'Apply everything in one end-to-end project, then learn to explain it the way an interviewer needs to hear it.',
        topics: [
          'An end-to-end Python project on a real scenario',
          'Building the project into a coding portfolio',
          'Explaining your code and decisions confidently in interviews',
          'Career paths in development, automation, data science and AI',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Write, debug and structure Python programs from scratch',
      'Think in logic and problem decomposition, not memorised syntax',
      'Build object-oriented applications with reusable components',
      'Work with files, databases and third-party APIs',
      'Automate repetitive work and process real datasets',
      'Ship an end-to-end project you can defend in an interview',
    ],
    tools: [
      'Python',
      'Jupyter Notebook',
      'Google Colab',
      'VS Code',
      'PyCharm',
      'Git & GitHub',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'SQL & Databases',
      'Flask',
      'Django',
      'REST APIs',
      'OpenAI & AI Tools',
      'ChatGPT for Development',
      'Selenium',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Python’s readable syntax makes it the easiest place to start. Learn variables, loops, functions, data structures, file handling and problem solving alongside your academics — a genuinely useful skill to carry into whatever you study next.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Whatever your discipline — computer science, engineering, commerce or management — Python fits. Coding exercises in automation, databases, APIs and application development also strengthen your college projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Employers do not hire for syntax; they hire for problem solving. This builds coding logic, debugging skill and the practical portfolio that matters far more than a certificate when you apply for Python jobs in Phagwara.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, operations, analytics or testing? Python automates the routine parts of your current job. You do not have to switch careers — it becomes the additional skill that makes the work you already do easier.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to become a developer to benefit. Understanding programming basics makes automation, data processing and software decisions legible — and makes briefing and judging a developer far easier.',
      },
      {
        label: 'Aspiring Developers & Freelancers',
        copy: 'A solid basis for building real digital solutions: Python development, automation, APIs, databases, web technologies and project work you can bill for as a freelancer.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Python skills are genuinely in demand',
        copy: 'Python reaches well beyond computer science. Startups, software companies, AI, data analytics, automation and web development all use it — which makes one skillset qualify you for several different career paths.',
      },
      {
        title: 'Understanding how Python really works',
        copy: 'Not memorising commands. Logical thinking and program construction — syntax, control flow, data structures, OOP, exceptions, modules, APIs, debugging and databases — so you move from copying examples to thinking like a developer.',
      },
      {
        title: 'Practical training is how programming is learned',
        copy: 'Watching tutorials is useful. Writing and debugging your own code teaches far more. Hands-on assignments and project-based training are where application development, automation and data handling actually stick.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on where your interest goes, Python leads into development, web development, automation testing, data analytics, machine learning, AI or software engineering — from one foundation.',
      },
    ],
    whyNow: {
      title: 'Gain Python Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that proves you can code.',
        'A strong portfolio shows you can handle fundamentals, automation, data, APIs and problem solving — in interviews and on freelance briefs alike.',
        'Python Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'Concentrate on building projects and solving problems rather than memorising syntax — that is what separates candidates.',
      ],
    },
    roles: [
      'Python Developer',
      'Python Backend Developer',
      'Python Software Developer',
      'Python Automation Developer',
      'Python Data Analyst',
      'Python AI & Machine Learning Developer',
      'Python Developer with AI',
      'Freelance Python Developer',
    ],
    roleDetails: [
      {
        role: 'Python Developer',
        copy: 'Develop applications, backend systems and software solutions in Python — fundamentals, functions, OOP, databases and APIs. The most common path after this course.',
      },
      {
        role: 'Python Backend Developer',
        copy: 'Work behind the scenes on reliable web applications and server-side systems using Django or Flask, databases, APIs and authentication.',
      },
      {
        role: 'Python Software Developer',
        copy: 'Build software for real business needs: clean code, debugging, database work and integrating the various technologies a product depends on.',
      },
      {
        role: 'Python Automation Developer',
        copy: 'Write scripts that remove repetitive work — file handling, web automation, data processing and API integration.',
      },
      {
        role: 'Python Data Analyst',
        copy: 'Collect, clean and analyse data to answer questions about business performance, using Pandas, NumPy, Matplotlib and Seaborn.',
      },
      {
        role: 'Python AI & Machine Learning Developer',
        copy: 'Move into AI and ML with a solid Python base, working with Scikit-learn, TensorFlow and PyTorch.',
      },
      {
        role: 'Python Developer with AI',
        copy: 'Combine Python with AI tooling to build more, faster. AI helps with coding, debugging and documentation — solid Python is what lets you judge its output.',
      },
      {
        role: 'Freelance Python Developer',
        copy: 'Build a freelance practice on Python work for clients in Phagwara, Jalandhar and further out, growing a portfolio from real briefs.',
      },
    ],
    hiring: [
      'Software development companies building websites, applications and business solutions',
      'IT startups and tech companies using Python for backend development and automation',
      'Data and analytics companies working with Python for data processing and analysis',
      'AI and machine learning companies developing intelligent applications and models',
    ],
    nextSteps: [
      'Django / Flask web development',
      'Data Science with Python',
      'Machine Learning & AI',
      'Automation & web scraping at scale',
    ],
    industries: ['Software development', 'IT startups', 'Data & analytics', 'AI & machine learning'],
    /*
     * Bands come from the client's own market research and are monthly, which
     * is the unit a fresher in this market actually recognises — so unlike the
     * derived LPA bands elsewhere in the catalogue these are written out as
     * given. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Python Developer',
      summary:
        'Builds applications, backend systems and automation in Python. Earnings depend on your coding skill, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Python Developer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Python & Software Development',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Python',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Python?',
        a: 'Python Developer, Backend Developer, Software Developer, Automation Developer, Data Analyst and AI/ML Developer. Python reaches further than any other first language — software development, automation, data science, AI and machine learning all run on it.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of delivery experience. Delhi/NCR runs higher, and specialists who keep learning move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes. A Phagwara address costs you nothing on a remote brief. Freelance income ramps rather than starting at a salary — around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have delivered real client work.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software development companies, IT startups using Python for backend and automation, data and analytics firms, and AI/ML companies — plus freelance and remote projects where Python developers are needed for all sorts of business purposes.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Python is the foundation for Data Science, Machine Learning and AI tracks, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Python Programming & Logical Thinking Project',
        summary:
          'Write a Python program that develops logical thinking across variables, data types, operators, conditions, loops and functions. You write the code yourself and know exactly how it works.',
        tech: ['Python', 'Python Basics'],
        level: 'Beginner',
        skills: ['Logical Thinking', 'Programming Fundamentals'],
      },
      {
        name: 'Python Application Development',
        summary:
          'Build a working application from functions, modules, user input, file handling and error handling — and see how separate components fit together to solve one problem.',
        tech: ['Python', 'Modules'],
        level: 'Beginner',
        skills: ['Functions', 'File Handling'],
      },
      {
        name: 'Python Data Handling Project',
        summary:
          'Work with real datasets: organise, clean, filter and analyse data in Python. Data handling learned practically rather than from a textbook.',
        tech: ['Pandas', 'NumPy'],
        level: 'Intermediate',
        skills: ['Data Handling', 'Python Data Analysis'],
      },
      {
        name: 'Python Automation Project',
        summary:
          'Build an automation project that removes repetitive manual work — Python handling files, processing information and streamlining an everyday workflow.',
        tech: ['Python', 'Scripting'],
        level: 'Intermediate',
        skills: ['File Automation', 'Productivity'],
      },
      {
        name: 'Python API Integration Project',
        summary:
          'Learn how a Python application talks to other services. Build something that fetches, processes and displays real-time information over an API.',
        tech: ['REST API', 'JSON'],
        level: 'Intermediate',
        skills: ['API Integration', 'Python Development'],
      },
      {
        name: 'Problem Solving with Python',
        summary:
          'Take real problem statements and turn them into working Python. Develop your problem-solving approach, sharpen code logic, handle errors and write cleaner code.',
        tech: ['Python', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'AI & Python Project',
        summary:
          'See how Python connects to Artificial Intelligence through a practical project covering libraries, data processing and the workflows that lead into Machine Learning.',
        tech: ['Python for AI', 'Python Libraries'],
        level: 'Advanced',
        skills: ['Artificial Intelligence', 'Machine Learning'],
      },
      {
        name: 'End-to-End Python Capstone',
        summary:
          'Bring every skill together into one complete project: plan the solution, write the code, test it, fix what breaks, and present the finished work as your portfolio piece.',
        tech: ['Python', 'Application Development'],
        level: 'Advanced',
        skills: ['Coding', 'Portfolio'],
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training course',
        copy: 'Practical topics — variables, functions, OOP, files, databases, APIs and problem solving — that turn basic coding knowledge into industry-relevant skill.',
      },
      {
        title: 'Learn by doing Python projects',
        copy: 'Practical projects and exercises that build the ability to write clean code, debug it, manipulate data and develop useful applications.',
      },
      {
        title: 'Develop a Python project portfolio',
        copy: 'Industry-relevant projects you can put on a CV — work that proves your coding and problem-solving ability in an interview or job hunt.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume guidance, technical interview preparation, project presentation and career direction across development, automation, data science and AI/ML.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain Python simply',
        copy: 'Python is a good place to begin, and it should feel that way. Trainers here explain programming and coding logic through simple, practical examples rather than jargon.',
      },
      {
        title: 'Live and practical Python projects',
        copy: 'Projects make theory mean something. You learn through hands-on work spanning applications, automation, file handling, APIs, database connectivity and problem solving.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Coding is easier when you can ask in real time. A focused environment means doubts on coding logic get solved while you are still practising the concept.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with a project portfolio demonstrating logic, automation, applications, databases and APIs — real examples a fresher can actually talk about in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because Python spans software development, automation, data science, AI and backend work, guidance is career-oriented: resume building, mock interviews and project presentation.',
      },
      {
        title: 'Learning Python the practical way',
        copy: 'The aim is not to learn codes but to solve problems with Python logic — programming, OOP, data structures, automation, databases, APIs and application development.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Python curriculum',
          techcadd:
            'Industry-focused training covering Python fundamentals, OOPs, functions, modules, file handling, libraries and advanced concepts',
          others: 'Often focuses mainly on basic Python syntax',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, coding-focused learning built around real programming problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work on coding assignments and project-based tasks to strengthen problem-solving skills',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Programming skills',
          techcadd:
            'Focus on logic building, debugging, data handling and writing efficient Python code',
          others: 'May cover concepts without enough coding practice',
        },
        {
          feature: 'Advanced Python',
          techcadd: 'Exposure to Python libraries, APIs, automation and application-based programming',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular coding exercises designed to improve logical thinking and programming confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd:
            'Projects and assignments that help students showcase their Python programming skills',
          others: 'Portfolio development may not be a major focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, interview preparation, portfolio support and career-oriented guidance',
          others: 'Career assistance varies between institutes',
        },
        {
          feature: 'Doubt support',
          techcadd:
            'Trainer guidance to help students understand coding concepts and solve programming challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a Python programming institute in Phagwara, ask how much coding practice is included, whether students build real projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of Python programming',
        blurb:
          'Gain fundamental Python skills step by step through practical coding and easy-to-start projects, until writing a program stops feeling difficult.',
        skills: ['Python', 'VS Code', 'Jupyter Notebook', 'Basic Git', 'Google Colab', 'AI coding'],
        recommendedFor:
          'Python Trainee, Programming Intern, Junior Python Developer, and anyone starting a Python course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in Python development',
        blurb:
          'Go further into real-world development. Work with databases, APIs, automation and application development alongside advanced coding and problem solving.',
        skills: ['Python', 'MySQL', 'Git & GitHub', 'Flask / Django', 'REST APIs', 'Selenium'],
        recommendedFor:
          'Python Developer, Junior Software Developer, Python Web Developer, Automation Developer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master Python development',
        blurb:
          'Combine Python development with web development, databases, automation, APIs, data handling and AI — the full path from foundation to specialisation.',
        skills: ['Django', 'Flask', 'REST API', 'NumPy', 'Pandas', 'Google Colab', 'AI tools'],
        recommendedFor:
          'Python Developer, Full-Stack Python Developer, Automation Developer, Backend Developer, Data Analyst, and the entry-level AI/ML pathway.',
      },
    ],
    capabilities: [
      { capability: 'Python fundamentals', included: [true, true, true] },
      { capability: 'Variables & data types', included: [true, true, true] },
      { capability: 'Loops & functions', included: [true, true, true] },
      { capability: 'Python data structures', included: [true, true, true] },
      { capability: 'OOP basics', included: [true, true, true] },
      { capability: 'File handling', included: [true, true, true] },
      { capability: 'Advanced Python', included: [false, true, true] },
      { capability: 'MySQL & database connectivity', included: [false, true, true] },
      { capability: 'APIs', included: [false, true, true] },
      { capability: 'Web development', included: [false, true, true] },
      { capability: 'Flask / Django', included: [false, true, true] },
      { capability: 'Automation & web scraping', included: [false, true, true] },
      { capability: 'Git & GitHub', included: [false, true, true] },
      { capability: 'NumPy & Pandas', included: [false, false, true] },
      { capability: 'Data analysis with Python', included: [false, false, true] },
      { capability: 'AI & Python integration', included: [false, false, true] },
      { capability: 'Advanced projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your programming foundation. The 6-month track includes those fundamentals and moves into databases, APIs, automation and application development. The 9-month programme builds further with advanced development, data analysis and AI-focused Python skills. Choose 3 months for fundamentals and problem-solving; 6 months to build applications with databases, APIs and web frameworks; 9 months to add data science and AI.',
    instructor: {
      heading: 'Why learn Python programming with us?',
      intro:
        'Learning Python is about more than knowing its syntax. The emphasis here is on how code executes and how problems get solved with it — through practical coding, assignments, projects and the tools the industry actually uses.',
      points: [
        {
          title: 'Beginner-friendly by design',
          copy: 'Python’s readable syntax makes it a good first language, and the course is paced so nothing is assumed. Non-programmers finish it.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You write and debug your own programs from the first session. That is where programming is actually learned.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering logic, applications, data, automation, APIs, problem solving, AI and a capstone you own.',
        },
        {
          title: 'A path that keeps going',
          copy: 'Python is the foundation under data science, AI and backend work — the syllabus is written to lead there rather than stop.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Python Programming Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn Python through practical, career-focused training. Students learn Python fundamentals, variables, functions, OOPs, data structures, file handling, modules and real-world programming concepts with hands-on practice.',
      },
      {
        q: 'Who can join a Python Programming Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start from the basics without prior coding experience, while learners with programming knowledge can strengthen their Python development skills.',
      },
      {
        q: 'Is Python a good career option for freshers?',
        a: 'Yes. Python is widely used across software development, web development, automation, data science, artificial intelligence, machine learning and backend development. After gaining practical skills, freshers can explore roles such as Python Developer, Junior Software Developer, Backend Developer, Automation Developer and Data Analyst.',
      },
      {
        q: 'What will I learn in the Python Programming Course?',
        a: 'Python basics, data types, operators, conditional statements, loops, functions, lists, tuples, dictionaries, sets, exception handling, file handling, OOPs, modules, packages and database connectivity — plus how Python is used in AI, data science, automation and web development.',
      },
      {
        q: 'Is the Python course practical or theory-based?',
        a: 'Learning Python becomes much easier when you write and test code yourself. The approach focuses on hands-on coding, programming exercises, debugging, mini-projects and real-world problem-solving rather than theory alone, so you become confident writing Python programs.',
      },
      {
        q: 'Will I work on Python projects during the course?',
        a: 'Yes. Practical learning includes mini-projects, automation programs, database-based applications, problem-solving tasks and application development projects. These show how Python concepts work together and strengthen your portfolio when applying for Python developer jobs or internships.',
      },
      {
        q: 'Can I learn Python after 12th?',
        a: 'Absolutely. Students can start after 12th, especially if interested in coding, software development, AI, data science or technology careers. It provides a strong programming foundation to build on during college and beyond.',
      },
      {
        q: 'Can Python help me get a job or internship?',
        a: 'Yes, but Python alone is not enough. Employers also look for problem-solving ability, practical projects, programming fundamentals, databases, Git and relevant development skills. A job-oriented course helps you build these and prepare for entry-level opportunities through practical training and project work.',
      },
      {
        q: 'Does the course include Python for AI and Data Science?',
        a: 'Python is one of the most commonly used languages for Artificial Intelligence, Machine Learning and Data Science. The course introduces the libraries and concepts used in these fields, building a foundation before moving toward advanced AI, ML and data science tracks.',
      },
      {
        q: 'How do I choose the best Python Programming Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical coding sessions, trainer experience, project work, programming exercises, tools and libraries covered, doubt support, career guidance and placement assistance. A good course should take you from Python basics to actually building projects and solving coding problems.',
      },
    ],
    relatedCourses: [
      'data-science-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'web-development-course-in-phagwara',
      'java-course-in-phagwara',
    ],
    keywords: [
      'python programming course in phagwara',
      'python course in phagwara',
      'python training institute in phagwara',
      'python programming classes in phagwara',
      'python course after 12th in phagwara',
      'python certification course in phagwara',
    ],
  }),

  makeCourse({
    slug: 'java-course-in-phagwara',
    label: 'Java',
    title: 'Java Programming Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'code',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn Java from first syntax to live projects — OOP, collections, exception handling, databases, APIs and backend development, with placement assistance.',
    overview:
      'The Java Programming Course at Techcadd in Phagwara is a practice-oriented course that helps students, graduates, job aspirants and complete beginners get to grips with coding in Java. It covers Java basics, Object-Oriented Programming, data structures, exception handling, collections, databases, APIs, application development and project work. The training is built on a practical approach: students learn through programming exercises and assignments, seeing how Java is actually used for software development rather than reading about it. The route in is beginner-friendly throughout, and the emphasis stays on logic, problem solving and programming confidence — by the end you can write, debug and build Java applications of your own.',
    demand:
      'Java still runs banking, insurance, enterprise systems and Android, which is why it remains the most reliable campus-placement language in Punjab and one of the few skills companies hire for every year rather than in waves.',
    modules: [
      {
        title: 'Java Programming Basics',
        summary:
          'Learn Java from the very beginning and build your programming skills gradually, writing clean, readable code from the first session.',
        topics: [
          'Java syntax, variables, data types and operators',
          'Conditions, loops and methods',
          'Arrays and strings',
          'Writing clean and readable Java code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Logic, Methods & Problem Solving',
        summary:
          'Understand how programmers actually approach a problem — and how to break a large one into pieces small enough to code.',
        topics: [
          'Solving problems with conditions, loops and methods',
          'Arguments, return values and method scope',
          'Debugging and error handling',
          'Dividing big problems into small coding tasks',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Object-Oriented Java Programming',
        summary:
          'Understand how professional Java applications are built, and pick up the skills a Java developer role assumes you have.',
        topics: [
          'Classes, objects, methods and constructors',
          'Inheritance, encapsulation, abstraction and polymorphism',
          'Organising code into reusable components',
          'Building structured Java applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Collections, APIs & Application Development',
        summary:
          'Move beyond the basics into the parts of Java that real applications are actually assembled from.',
        topics: [
          'Collections — List, Set and Map',
          'Packages and reusable components',
          'How Java talks to other services over APIs',
          'Working with files and data',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Java Database Connectivity',
        summary:
          'Get to know how Java applications connect to real-world data, and build something that persists what it is given.',
        topics: [
          'Databases and SQL fundamentals',
          'Connecting Java applications to databases',
          'CRUD operations and managing data',
          'JDBC and database integration',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Java for Web & Backend Development',
        summary:
          'Develop advanced Java skills in the direction of server-side application development.',
        topics: [
          'Backend programming fundamentals',
          'How Java is used in web apps and server-side code',
          'Java frameworks and the application development workflow',
          'APIs and application architecture',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI for Java Development',
        summary:
          'Learn how modern AI tooling helps you write and learn Java — and how to use it responsibly rather than lean on it.',
        topics: [
          'Using AI assistants to understand and debug code',
          'Generating and improving ideas with proper prompts',
          'Responsible use without over-reliance',
          'Faster debugging, documentation and development workflow',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Java Projects, Git & Developer Workflow',
        summary:
          'Put your coding skills to work the way a team does — version controlled, structured, and readable by somebody else.',
        topics: [
          'Building projects against real-life requirements',
          'Git and version control workflow',
          'Project structure and developer workflow',
          'Writing clean, reusable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Java Projects & Career Preparation',
        summary:
          'Bring everything together in an end-to-end project, then learn to explain it the way an interviewer needs to hear it.',
        topics: [
          'An end-to-end Java project on a real scenario',
          'Practical coding tasks from real-life situations',
          'Explaining your code and projects in a job interview',
          'Career options in Java, software and backend development',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Write, debug and structure Java programs from scratch',
      'Think in logic and problem decomposition rather than memorised syntax',
      'Build object-oriented applications with reusable components',
      'Work with collections, exception handling and the Java standard library',
      'Connect applications to MySQL and consume third-party APIs',
      'Ship an end-to-end project you can defend in an interview',
    ],
    tools: [
      'Java',
      'IntelliJ IDEA',
      'Eclipse',
      'VS Code',
      'Git & GitHub',
      'MySQL',
      'JDBC',
      'Maven',
      'Spring',
      'Spring Boot',
      'REST APIs',
      'Postman',
      'Hibernate',
      'ChatGPT for Development',
      'AI Coding Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'If you have finished 12th and technology interests you, Java is a solid place to begin. You will meet variables, data types, operators, conditions, loops, methods, classes and objects — a genuinely valuable skill to carry into whatever you study next.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'College should mean programming practice, not textbook theory. Whatever your background — computer science, engineering, IT, commerce or management — coding practice in OOP, databases, APIs and application development also strengthens your college projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Java opens up software and application development roles, but employers look past syntax for logical thinking and debugging ability. This is where coding logic, problem solving and real project development get built.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, testing, support or operations? Java deepens your understanding of programming and the software development process — OOP, databases, APIs and backend work become an additional skill without forcing a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to become a developer to benefit. Knowing Java basics makes software applications, automation, databases and technology decisions legible — and makes briefing a developer far easier.',
      },
      {
        label: 'Aspiring Developers & Freelancers',
        copy: 'A strong basis for building software solutions and applications: Java development, OOP, databases, APIs, backend and project development you can later apply to client work.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Java skills are in high demand',
        copy: 'Software companies, startups and enterprises all still build on Java for application development and backend programming. Java, OOP, collections, databases, APIs and problem solving form the base of a range of technology careers.',
      },
      {
        title: 'Learn how Java actually works',
        copy: 'Not memorising code. Fundamentals, variables, control flow, methods and arrays, OOP, inheritance, encapsulation, polymorphism, exception handling, collections, database connectivity and APIs — so you move from copying Java to thinking like a Java programmer.',
      },
      {
        title: 'Practical training is how programming is learned',
        copy: 'Tutorials help, but writing, testing and debugging your own programs is a different level entirely. Project-based training is where application development, database connectivity and problem solving actually stick.',
      },
      {
        title: 'Skills that open several career options',
        copy: 'Depending on where your interest goes, Java leads into software development, backend development, web application development, enterprise applications or Android — from one foundation.',
      },
    ],
    whyNow: {
      title: 'Acquire Java Skills That Prove Useful in the Real World',
      points: [
        'Practical Java projects let you apply what you have learned instead of only reading about it.',
        'A working portfolio demonstrates OOP, databases, APIs and problem solving — in interviews and on freelance briefs alike.',
        'Java Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'Learn from projects and solve problems rather than remembering syntax — that is what separates candidates.',
      ],
    },
    roles: [
      'Java Programmer',
      'Java Backend Developer',
      'Java Software Developer',
      'Java Application Developer',
      'Java Web Developer',
      'Java Backend Engineer',
      'Java Developer with AI',
      'Freelance Java Developer',
    ],
    roleDetails: [
      {
        role: 'Java Programmer',
        copy: 'Develop applications and software solutions in Java — fundamentals, object-oriented programming, collections, databases and APIs. The most common path after this course.',
      },
      {
        role: 'Java Backend Developer',
        copy: 'Work behind the scenes building reliable web applications and server-side systems with Java, Spring Boot, databases, APIs and authentication.',
      },
      {
        role: 'Java Software Developer',
        copy: 'Build software solutions in Java: writing clean code, debugging applications, working with databases and integrating various technologies.',
      },
      {
        role: 'Java Application Developer',
        copy: 'Develop applications using Java and its frameworks — business requirements, application logic, databases, APIs and testing.',
      },
      {
        role: 'Java Web Developer',
        copy: 'Build web applications on Java-based backend technologies, using server-side programming, APIs, databases and frameworks.',
      },
      {
        role: 'Java Backend Engineer',
        copy: 'Develop server-side functionality, APIs and database-driven applications in Java and the surrounding backend stack.',
      },
      {
        role: 'Java Developer with AI',
        copy: 'Combine Java with AI tooling to speed up coding, debugging, documentation and development. AI assists — solid Java is what lets you judge its output.',
      },
      {
        role: 'Freelance Java Developer',
        copy: 'Start a freelance practice building applications and software products in Java for firms in Phagwara, Jalandhar and further out.',
      },
    ],
    hiring: [
      'Software development firms building applications and business solutions',
      'Startups and IT firms using Java for backend development',
      'Enterprise-level firms running Java-based applications',
      'Web and application development firms',
    ],
    nextSteps: [
      'Spring & Spring Boot in depth',
      'Android development with Java',
      'Microservices & system design',
      'Enterprise application architecture',
    ],
    industries: [
      'Software development',
      'Banking & enterprise IT',
      'IT services & startups',
      'Web & application development',
    ],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Java Developer',
      summary:
        'Builds applications, backend systems and enterprise software in Java. Earnings depend on your programming skill, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Java Developer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Java & Software Development',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Java',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Java?',
        a: 'Java Programmer, Backend Developer, Software Developer, Application Developer and Web Developer. Java is used across software development, backend systems, enterprise applications and Android, which is what makes it such a broad first language.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of delivery experience. Delhi/NCR runs higher, and specialists who keep learning move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes. A Phagwara address costs you nothing on a remote brief. Freelance income ramps rather than starting at a salary — around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have delivered real client work.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software development firms building applications and business solutions, startups and IT firms using Java for backend work, enterprise-level companies running Java-based systems, and web and application development firms — plus freelance and remote projects.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Java leads naturally into Spring Boot, Android and enterprise architecture, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Java Programming & Logical Thinking Project',
        summary:
          'Write Java programs that build insight into variables, data types, operators, conditions, loops and methods. You code it yourself, so you know how every part of it works.',
        tech: ['Java', 'Java Basics'],
        level: 'Beginner',
        skills: ['Logical Thinking', 'Programming Fundamentals'],
      },
      {
        name: 'Java Application Development',
        summary:
          'Build a practical application from classes, objects, methods, user input, file handling and exception handling — and see how the components fit together to solve one problem.',
        tech: ['Java', 'OOPs'],
        level: 'Beginner',
        skills: ['Classes & Objects', 'Exception Handling'],
      },
      {
        name: 'Java Database Project',
        summary:
          'Create a database-driven application and learn how Java talks to MySQL. Create, read, update and delete records while picking up practical database connectivity.',
        tech: ['JDBC', 'MySQL'],
        level: 'Intermediate',
        skills: ['CRUD Operations', 'Java Database'],
      },
      {
        name: 'Java Application Project',
        summary:
          'Build a working application applying OOP, collections, methods and exception handling together — the point where separate concepts start behaving like one program.',
        tech: ['Java', 'Collections'],
        level: 'Intermediate',
        skills: ['Application Development', 'Java Development'],
      },
      {
        name: 'Java API Integration Project',
        summary:
          'Understand how a Java application communicates with an external service. Build something that fetches, processes and displays information over requests and JSON.',
        tech: ['REST API', 'JSON'],
        level: 'Intermediate',
        skills: ['API Integration', 'Java Development'],
      },
      {
        name: 'Problem Solving with Java',
        summary:
          'Turn real problem statements into working Java. Develop the ability to write good code, debug your own program and handle errors properly.',
        tech: ['Java', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'Java & AI Project',
        summary:
          'See how Java programming integrates with modern AI tooling on a real project — how AI helps with development, data processing and writing Java.',
        tech: ['Java for AI', 'AI Tools'],
        level: 'Advanced',
        skills: ['Java Programming', 'AI-Assisted Development'],
      },
      {
        name: 'Java End-to-End Capstone',
        summary:
          'Put everything into one project: design the solution, code it, integrate the components, test it and fix what breaks — then present it as your portfolio piece.',
        tech: ['Java', 'Application Development'],
        level: 'Advanced',
        skills: ['Coding', 'Portfolio'],
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training course',
        copy: 'Practical topics — variables, methods, OOP, collections, exception handling, databases, APIs and problem solving — that turn basic coding into industry-relevant skill.',
      },
      {
        title: 'Learn practical coding and application development',
        copy: 'Coding projects and exercises that build the ability to write clean code, debug programs, connect databases and create working applications.',
      },
      {
        title: 'Develop a Java project portfolio',
        copy: 'Industry-relevant Java projects you can put on a CV — work that shows your coding and problem-solving ability in interviews and job applications.',
      },
      {
        title: 'Guidance and career assistance',
        copy: 'Resume preparation, technical interview practice, project presentation and career direction across Java, software, backend and application development.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain Java simply',
        copy: 'Java gets difficult when it is taught only through theory. Experienced trainers give learners the idea behind the programming concept and the coding logic, using examples rather than definitions.',
      },
      {
        title: 'Live and practical Java projects',
        copy: 'Projects make programming concepts interesting. You learn through project-based work spanning OOP, application development, databases, APIs, exception handling and problem solving.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Programming becomes far easier when you can clear a doubt in real time and practise the concept while it is still fresh.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with a Java project portfolio demonstrating OOP, database connectivity, APIs and application development — real work a fresher can actually discuss in an interview.',
      },
      {
        title: 'Career and placement assistance',
        copy: 'Because Java spans so many areas, guidance is career-oriented: resume building, mock interviews, project presentation and direction toward Java Developer, Software Developer, Backend Developer or Application Developer roles.',
      },
      {
        title: 'Java taught the practical way',
        copy: 'The goal of any Java course is solving problems with programming logic. Here that means practical knowledge of Java, OOP, collections, exception handling, databases, APIs and application development.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Java curriculum',
          techcadd:
            'Industry-focused training covering Java fundamentals, OOPs, methods, collections, exception handling, databases and APIs',
          others: 'Often focuses mainly on basic Java syntax',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, coding-focused learning built around real programming problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work on coding assignments and project-based tasks to strengthen problem-solving skills',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Programming skills',
          techcadd:
            'Focus on logic building, debugging, OOPs, database connectivity and writing efficient Java code',
          others: 'May cover concepts without enough coding practice',
        },
        {
          feature: 'Advanced Java',
          techcadd: 'Exposure to APIs, databases, backend development and application-based programming',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular coding exercises designed to improve logical thinking and programming confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help students showcase Java programming skills',
          others: 'Portfolio development may not be a major focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, interview preparation, portfolio support and career-oriented guidance',
          others: 'Career assistance varies between institutes',
        },
        {
          feature: 'Doubt support',
          techcadd:
            'Trainer guidance to help students understand coding concepts and solve programming challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a Java programming institute in Phagwara, ask how much coding practice is included, whether students build real projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn Java programming basics',
        blurb:
          'Acquire Java skills step by step through practical coding and beginner-friendly projects, until writing a program stops feeling difficult.',
        skills: ['Java', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Basic Git', 'AI coding'],
        recommendedFor:
          'Java Trainee, Programming Intern, Junior Java Developer, and anyone beginning a Java course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Master Java development',
        blurb:
          'Go further into real development work — databases, APIs, application development and the coding concepts behind them, in more depth.',
        skills: ['Java', 'IntelliJ IDEA', 'MySQL', 'JDBC', 'Git & GitHub', 'Maven', 'REST API'],
        recommendedFor:
          'Java Developer, Junior Software Developer, Java Backend Developer, Application Developer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Become a Java development pro',
        blurb:
          'Combine Java with backend development, databases, APIs, frameworks and application architecture — the full path from foundation to specialisation.',
        skills: ['Spring', 'Spring Boot', 'Hibernate', 'MySQL', 'REST API', 'Postman', 'AI tools'],
        recommendedFor:
          'Java Developer, Backend Developer, Software Developer, Application Developer.',
      },
    ],
    capabilities: [
      { capability: 'Java fundamentals', included: [true, true, true] },
      { capability: 'Variables & data types', included: [true, true, true] },
      { capability: 'Loops & methods', included: [true, true, true] },
      { capability: 'Arrays & strings', included: [true, true, true] },
      { capability: 'OOP basics', included: [true, true, true] },
      { capability: 'Exception handling', included: [true, true, true] },
      { capability: 'Advanced Java', included: [false, true, true] },
      { capability: 'MySQL & database connectivity', included: [false, true, true] },
      { capability: 'APIs', included: [false, true, true] },
      { capability: 'Backend development', included: [false, true, true] },
      { capability: 'Spring / Spring Boot', included: [false, true, true] },
      { capability: 'Git & GitHub', included: [false, true, true] },
      { capability: 'Hibernate', included: [false, false, true] },
      { capability: 'Advanced API integration', included: [false, false, true] },
      { capability: 'AI-assisted Java development', included: [false, false, true] },
      { capability: 'Advanced projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your programming foundation. The 6-month track includes those fundamentals and moves into databases, APIs, backend and application development. The 9-month programme builds further with advanced Java, frameworks, backend technologies, API integration and AI-assisted development. Choose 3 months for fundamentals, OOP and problem solving; 6 months to build applications with databases, APIs and backend skills; 9 months to add frameworks and modern AI-assisted development.',
    instructor: {
      heading: 'Why learn Java programming with us?',
      intro:
        'Java is far more than its syntax. The course teaches how programs run, how applications are structured, and how real problems get solved in Java — through assignments, project work, debugging and the development tools professionals actually use.',
      points: [
        {
          title: 'Structure taught early',
          copy: 'Java rewards understanding how an application is organised. OOP arrives as something you build with, not a chapter to memorise.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You write, test and debug your own programs from the first session. That is where programming is actually learned.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering logic, applications, databases, collections, APIs, problem solving, AI and a capstone you own.',
        },
        {
          title: 'The enterprise path stays open',
          copy: 'Java leads into Spring Boot, Android and enterprise architecture — the syllabus is written to lead there rather than stop.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Java Programming Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn Java through practical, career-focused training. Students learn Java fundamentals, variables, methods, OOPs, collections, exception handling, databases and real-world programming concepts through hands-on practice.',
      },
      {
        q: 'Who can join a Java Programming Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start from the basics without prior coding experience, while learners with programming knowledge can strengthen their Java development skills.',
      },
      {
        q: 'Is Java a good career option for freshers?',
        a: 'Yes. Java is widely used in software development, backend development, web applications, enterprise applications and application development. After developing practical skills, freshers can explore roles such as Java Developer, Junior Software Developer, Backend Developer and Application Developer.',
      },
      {
        q: 'What will I learn in the Java Programming Course?',
        a: 'Java basics, data types, operators, conditional statements, loops, methods, arrays, strings, OOPs, inheritance, polymorphism, exception handling, collections, packages and database connectivity — plus how Java is used in backend, web and application development.',
      },
      {
        q: 'Is the Java course practical or theory-based?',
        a: 'Learning Java becomes easier when you write, test and debug code yourself. The approach focuses on hands-on coding, programming exercises, debugging, mini-projects and real-world problem-solving rather than depending on theory alone.',
      },
      {
        q: 'Will I work on Java projects during the course?',
        a: 'Yes. Practical learning includes Java mini-projects, application development projects, database-based applications, API integration tasks and problem-solving projects. These show how Java concepts work together and strengthen your portfolio when applying for Java developer jobs or internships.',
      },
      {
        q: 'Can I learn Java after 12th?',
        a: 'Absolutely. Students can start after 12th, especially if interested in coding, software development, application development or technology careers. It provides a programming foundation to build on during college and beyond.',
      },
      {
        q: 'Can Java help me get a job or internship?',
        a: 'Yes, but Java alone is not enough. Employers also look for problem-solving ability, practical projects, programming fundamentals, databases, Git and relevant development skills. A job-oriented course helps you build these through practical training and project work.',
      },
      {
        q: 'Does the course include Java for backend development?',
        a: 'Java is widely used for backend and enterprise application development. The course introduces backend concepts, databases, APIs, frameworks and application development, building a foundation before moving toward advanced Java work.',
      },
      {
        q: 'How do I choose the best Java Programming Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical coding sessions, trainer experience, project work, programming exercises, tools covered, database and API training, doubt support, career guidance and placement assistance. A good course should take you from Java basics to actually building projects and solving coding problems.',
      },
    ],
    relatedCourses: [
      'python-course-in-phagwara',
      'web-development-course-in-phagwara',
      'mern-stack-course-in-phagwara',
      'c-plus-plus-course-in-phagwara',
      'kotlin-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
    ],
    keywords: [
      'java programming course in phagwara',
      'java course in phagwara',
      'java training institute in phagwara',
      'java programming classes in phagwara',
      'java training after 12th in phagwara',
      'java certification course in phagwara',
    ],
  }),

  makeCourse({
    slug: 'c-course-in-phagwara',
    label: 'C',
    title: 'Best C Course & Training in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'terminal',
    duration: '2 Months',
    level: 'Beginner',
    eligibility: '10th / 12th Pass Onward',
    summary: 'The foundation course every serious programmer starts with — memory, pointers and problem-solving from first principles.',
    overview: 'Make your entry into programming with structured C training in Phagwara. You learn the C language alongside data structures and the problem-solving habits that carry into every language after it. Built for beginners: C is straightforward to learn and gives you a genuine base in programming and logical thinking.',
    demand: 'C is where university syllabi, placement aptitude rounds and embedded work all still meet — the fastest way to make the rest of a degree make sense.',
    modules: [
      {
        title: 'Basics of C programming',
        summary: 'C syntax, keywords, variables, data types, constants, operators, input/output and programming fundamentals.',
        topics: [
          'Syntax & keywords',
          'Variables & data types',
          'Constants & operators',
          'Input & output',
        ],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Conditional statements & looping',
        summary: 'Conditional statements, if-else, nested conditions, switch, for, while and do-while through practical examples.',
        topics: [
          'if-else & nested conditions',
          'switch',
          'for / while / do-while',
          'Break & continue',
        ],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Arrays & strings',
        summary: 'One- and two-dimensional arrays, character arrays, strings, string functions and handling array and string data.',
        topics: ['1D & 2D arrays', 'Character arrays', 'String functions', 'Array handling'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Functions & modular programming',
        summary: 'Writing reusable functions, understanding parameters and return values, and using library functions.',
        topics: ['Function definition', 'Parameters & return values', 'Scope', 'Library functions'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Pointers & memory concepts',
        summary: 'Pointers, pointer arithmetic, address and reference concepts, and dynamic memory in C.',
        topics: [
          'Pointer basics',
          'Pointer arithmetic',
          'Address & reference',
          'Pointers with arrays',
        ],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Structures, unions & file handling',
        summary: 'Structures, unions, enumeration and file handling, with ways to work with structured data in programs.',
        topics: ['Structures', 'Unions & enums', 'File input & output', 'Structured data'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Data structures in C',
        summary: 'Basic data structures — arrays, linked lists, stacks and queues — with searching and sorting in C.',
        topics: ['Linked lists', 'Stacks', 'Queues', 'Searching & sorting'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Dynamic memory management',
        summary: 'malloc(), calloc(), realloc() and free(), with dynamic memory allocation concepts in C programs.',
        topics: ['malloc & calloc', 'realloc', 'free & leaks', 'Allocation patterns'],
        duration: '1 week',
        lessons: 6,
      },
      {
        title: 'Advanced C programming',
        summary: 'Recursion, function pointers, preprocessor directives, command-line arguments and modular programming.',
        topics: [
          'Recursion',
          'Function pointers',
          'Preprocessor directives',
          'Command-line arguments',
        ],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Algorithms & problem solving',
        summary: 'Basic algorithms, searching, sorting, logical problem solving and programming methods.',
        topics: ['Algorithm basics', 'Searching', 'Sorting', 'Problem-solving patterns'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Database & application concepts',
        summary: 'Database concepts and the relationship between programming concepts and applications.',
        topics: ['Database fundamentals', 'SQL basics', 'Programs & data', 'Application concepts'],
        duration: '1 week',
        lessons: 6,
      },
      {
        title: 'Practical exercises & job readiness',
        summary: 'Build programming skill through coding projects, debugging exercises and problem-solving tasks.',
        topics: [
          'Coding projects',
          'Debugging exercises',
          'Problem solving',
          'Interview preparation',
        ],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'C programming fundamentals',
      'Conditions, loops and functions',
      'Arrays, strings and data handling',
      'Pointers, structures and memory management',
      'File handling, data structures and algorithms',
      'Practical projects and problem-solving skills',
    ],
    tools: [
      'C Programming',
      'Visual Studio Code',
      'Code::Blocks / GCC',
      'Git & GitHub',
      'Data Structures',
      'Algorithms',
      'Pointers & Memory Management',
      'File Handling',
      'SQL & Database Fundamentals',
      'Debugging Tools',
      'Command-Line Programming',
      'Problem-Solving Techniques',
    ],
    roles: [
      'C Programmer',
      'Software Developer',
      'Embedded Systems Developer',
      'System Programmer',
      'Application Developer',
      'Junior Software Engineer',
      'Data Structures & Algorithms Foundation',
    ],
    roleDetails: [
      {
        role: 'C Programmer',
        copy: 'Build programs, utilities, system-level applications and software solutions using C.',
      },
      {
        role: 'Software Developer',
        copy: 'Use programming concepts, algorithms and problem-solving skills to design and develop software applications.',
      },
      {
        role: 'Embedded Systems Developer',
        copy: 'Work on microcontrollers, hardware-oriented applications and embedded systems using C.',
      },
      {
        role: 'System Programmer',
        copy: 'Work with low-level programming concepts, operating systems, memory management and system-oriented software.',
      },
      {
        role: 'Application Developer',
        copy: 'Apply programming concepts to build and maintain applications across different development technologies.',
      },
      {
        role: 'Junior Software Engineer',
        copy: 'Use C, data structures, algorithms and debugging as an entry point into software engineering.',
      },
      {
        role: 'Data Structures & Algorithms Foundation',
        copy: 'Build a solid programming foundation and move toward software development and competitive programming.',
      },
    ],
    hiring: [
      'Embedded and hardware teams',
      'Engineering college placement rounds',
      'QA and testing teams',
      'Systems programming roles',
    ],
    nextSteps: [
      'C++ Programming',
      'Data structures & algorithms',
      'Embedded systems',
      'Operating systems',
    ],
    industries: ['Embedded systems', 'Product engineering', 'Automotive', 'Consumer electronics'],
    salary: {
      role: 'Software Trainee',
      summary: 'Starts in embedded, systems or QA work with a solid grounding in how machines execute code.',
      starting: '₹2–3 LPA',
      after2: '₹3.5–6 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–3 LPA',
          after2: '₹3.5–6 LPA',
          scale: { fresher: 2.4, after2: 4.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹2.5–4 LPA',
          after2: '₹5–8.5 LPA',
          scale: { fresher: 3.36, after2: 6.65 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3–4.5 LPA',
          after2: '₹5.5–9.5 LPA',
          scale: { fresher: 3.72, after2: 7.36 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after C?',
        a: 'Graduates move into C Programmer, Software Developer, Embedded Systems Developer, System Programmer and similar roles. C is where university syllabi, placement aptitude rounds and embedded work all still meet — the fastest way to make the rest of a degree make sense.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹15,000 – ₹25,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Student record system',
        summary: 'A console application built over structures and file storage.',
        tech: ['C'],
        level: 'Beginner',
        skills: ['Structures', 'File I/O', 'Functions'],
      },
      {
        name: 'Text-based utility tool',
        summary: 'Command-line parsing, dynamic memory and clean teardown.',
        tech: ['C'],
        level: 'Intermediate',
        skills: ['Pointers', 'Dynamic memory', 'Strings'],
      },
      {
        name: 'Data structures workbench',
        summary: 'Linked lists, stacks and queues implemented and exercised against searching and sorting problems.',
        tech: ['C'],
        level: 'Intermediate',
        skills: ['Linked lists', 'Algorithms', 'Debugging'],
      },
    ],
    instructor: {
      heading: 'Why learn C programming with us?',
      intro: 'The aim is not to get you through a syllabus but to make you comfortable writing, reading and debugging code — which is the skill every later language and every interview actually tests.',
      points: [
        {
          title: 'Learning through practice',
          copy: 'Coding problems, assignments, debugging and project-based work rather than theory alone.',
        },
        {
          title: 'A program for beginners',
          copy: 'Start with basic concepts and move gradually toward the more advanced parts of C.',
        },
        {
          title: 'Training with relevant tools',
          copy: 'Work with VS Code, GCC, Git, GitHub and debugging tools used in real development.',
        },
        {
          title: 'Real programming projects',
          copy: 'Build projects that strengthen logical reasoning, coding ability, debugging and your portfolio.',
        },
        {
          title: 'Guided sessions',
          copy: 'Practical examples, live code writing, doubt clearing and continuous guidance.',
        },
        {
          title: 'Technical career skills',
          copy: 'Programming, algorithms and problem-solving skills that support interviews, internships and further study.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the C course in Phagwara?',
        a: 'techcadd runs C over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the C course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the C course?',
        a: '10th / 12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the C course?',
        a: 'Graduates move into C Programmer, Software Developer, Embedded Systems Developer, System Programmer and similar roles. C is where university syllabi, placement aptitude rounds and embedded work all still meet — the fastest way to make the rest of a degree make sense.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Software Trainee roles start around ₹15,000 – ₹25,000 a month for a fresher with a working portfolio, rising to ₹3.5–6 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. C Programming begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'C Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Software Trainee roles in Punjab start around ₹15,000 – ₹25,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'c-plus-plus-course-in-phagwara',
      'java-course-in-phagwara',
      'python-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'kotlin-course-in-phagwara',
      'web-designing-course-in-phagwara',
    ],
    keywords: [
      'best c programming course in phagwara',
      'c programming training in phagwara',
      'c programming certification courses in phagwara',
      'c language classes phagwara',
      'learn c programming',
    ],
  }),

  makeCourse({
    slug: 'c-plus-plus-course-in-phagwara',
    label: 'C++',
    title: 'Best C++ Course & Training in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'terminal',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Object-oriented programming, STL and data structures — the standard prerequisite for competitive programming and interviews.',
    overview: 'Get started in programming with structured C++ training in Phagwara. You learn the C++ language alongside data structures and object-oriented programming, which makes it a strong first language for understanding programming concepts and problem-solving approaches. Built for beginners: the track starts at fundamentals and progresses to templates, the STL and algorithmic thinking.',
    demand: 'C++ and its data structures work is what technical interviews are actually built on, and it opens game, graphics and systems roles almost nothing else reaches.',
    modules: [
      {
        title: 'Basics of C++',
        summary: 'The C++ language from the ground up — variables, data types, operators, input and output, and keywords.',
        topics: ['Syntax & keywords', 'Variables & data types', 'Operators', 'Input & output'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Conditions & loops',
        summary: 'Conditional statements and loops — if-else, nesting, switch, for, while, do-while and control statements.',
        topics: ['if-else & nesting', 'switch', 'for / while / do-while', 'Control statements'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'C++ data structures',
        summary: 'Arrays, strings, structures and the basic data structures that let you handle data properly.',
        topics: ['Arrays', 'Strings', 'Structures', 'Handling data'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Functions & modular programming',
        summary: 'Reusable functions, parameters and return values, function overloading, recursion and modular programs.',
        topics: ['Functions & scope', 'Overloading', 'Recursion', 'Modular design'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Object-oriented programming',
        summary: 'Classes and objects, constructors and destructors, inheritance, polymorphism, encapsulation and abstraction.',
        topics: [
          'Classes & objects',
          'Constructors & destructors',
          'Inheritance & polymorphism',
          'Encapsulation & abstraction',
        ],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'Pointers, references & memory',
        summary: 'Pointers, references, dynamic memory allocation and memory management, and how they are used in C++.',
        topics: ['Pointers', 'References', 'Dynamic allocation', 'Memory management'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Advanced C++ topics',
        summary: 'Templates, exception handling, namespaces, the STL and iterators, and where each is used in practice.',
        topics: ['Templates', 'Exception handling', 'Namespaces', 'Iterators'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Standard Template Library',
        summary: 'The STL components used most: vectors, lists, stacks, queues, sets, maps, algorithms and iterators.',
        topics: ['Vectors & lists', 'Stacks & queues', 'Sets & maps', 'STL algorithms'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'File handling & exception handling',
        summary: 'Working with files and errors — try, catch and throw, alongside file streams.',
        topics: ['File streams', 'Reading & writing', 'try / catch / throw', 'Error patterns'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Data structures & algorithms',
        summary: 'Searching, sorting, linked lists, stacks, queues, trees and algorithmic thinking in C++.',
        topics: [
          'Searching & sorting',
          'Linked lists',
          'Stacks, queues & trees',
          'Algorithmic thinking',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Practical C++ programming',
        summary: 'Programming exercises, logical problems, debugging and coding challenges.',
        topics: ['Programming exercises', 'Logical problems', 'Debugging', 'Coding challenges'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Projects & career development',
        summary: 'Practical projects, programming challenges and debugging exercises that build real experience.',
        topics: [
          'Project build',
          'Programming challenges',
          'Debugging exercises',
          'Interview preparation',
        ],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'C++ programming fundamentals',
      'Functions, arrays and strings',
      'Object-oriented programming',
      'Pointers, memory and file handling',
      'Data structures and algorithms',
      'Practical projects and development skills',
    ],
    tools: [
      'C++',
      'Visual Studio Code',
      'Visual Studio',
      'Code::Blocks',
      'Git & GitHub',
      'STL',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'File Handling',
      'C++ Debugging',
      'Problem Solving & Competitive Programming',
      'C++ Project Development',
    ],
    roles: [
      'C++ Developer',
      'Software Developer',
      'Backend Developer',
      'Game Developer',
      'System Programmer',
      'Software Engineer',
      'Data Structures & Algorithms Foundation',
    ],
    roleDetails: [
      {
        role: 'C++ Developer',
        copy: 'Build applications, software solutions and system programs using C++.',
      },
      {
        role: 'Software Developer',
        copy: 'Design, develop, test and maintain software applications using core programming concepts.',
      },
      {
        role: 'Backend Developer',
        copy: 'Build the application logic and server-side behaviour behind a product.',
      },
      {
        role: 'Game Developer',
        copy: 'Work on games and game logic, where C++ remains the language of choice for performance.',
      },
      {
        role: 'System Programmer',
        copy: 'Work on system-level software and performance-oriented applications.',
      },
      {
        role: 'Software Engineer',
        copy: 'Build applications using programming, algorithms and problem-solving technique.',
      },
      {
        role: 'Data Structures & Algorithms Foundation',
        copy: 'Sharpen problem-solving ability and prepare for advanced software development and competitive programming.',
      },
    ],
    hiring: [
      'Product engineering teams',
      'Game and graphics studios',
      'Systems and tooling teams',
      'Competitive-programming placement rounds',
    ],
    nextSteps: [
      'Data structures & algorithms',
      'Competitive programming',
      'Game development',
      'Systems programming',
    ],
    industries: ['Product engineering', 'Game development', 'Embedded systems', 'Financial technology'],
    salary: {
      role: 'C++ Developer',
      summary: 'Builds performance-critical software — tooling, engines and systems work.',
      starting: '₹2.5–4 LPA',
      after2: '₹5–9 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2.5–4 LPA',
          after2: '₹5–9 LPA',
          scale: { fresher: 3.2, after2: 7 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3.5–5.5 LPA',
          after2: '₹7–12.5 LPA',
          scale: { fresher: 4.48, after2: 9.8 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3.5–6 LPA',
          after2: '₹8–14 LPA',
          scale: { fresher: 4.96, after2: 10.85 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after C++?',
        a: 'Graduates move into C++ Developer, Software Developer, Backend Developer, Game Developer and similar roles. C++ and its data structures work is what technical interviews are actually built on, and it opens game, graphics and systems roles almost nothing else reaches.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹20,000 – ₹33,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Library management system',
        summary: 'Classes, inheritance and file storage behind a working console application.',
        tech: ['C++'],
        level: 'Beginner',
        skills: ['OOP', 'File handling', 'Classes'],
      },
      {
        name: 'STL data structures workbench',
        summary: 'Vectors, maps, stacks and queues exercised against searching and sorting problems.',
        tech: ['C++', 'STL'],
        level: 'Intermediate',
        skills: ['STL', 'Algorithms', 'Complexity'],
      },
      {
        name: 'Console game engine',
        summary: 'Game loop, collision logic and dynamic memory, built with templates and operator overloading.',
        tech: ['C++'],
        level: 'Advanced',
        skills: ['Templates', 'Memory management', 'Game logic'],
      },
    ],
    instructor: {
      heading: 'Why learn C++ programming with us?',
      intro: 'C++ rewards understanding over memorisation — pointers, memory and the STL only make sense once you have written and broken them yourself. The sessions are built around that, not around slides.',
      points: [
        {
          title: 'Learning by doing',
          copy: 'Move past theory with practical coding, assignments, debugging exercises and project-based training.',
        },
        {
          title: 'Beginner friendly',
          copy: 'Start from the basics and move gradually toward advanced programming concepts.',
        },
        {
          title: 'Industry-relevant technologies',
          copy: 'Practise with C++, VS Code, Visual Studio, Git, GitHub, the STL and debugging tools.',
        },
        {
          title: 'Real-world C++ projects',
          copy: 'Build projects that sharpen logical reasoning and programming skill, and give you a portfolio.',
        },
        {
          title: 'Guided learning sessions',
          copy: 'Coding examples, practical exercises, doubt resolution and continuous guidance.',
        },
        {
          title: 'Technology career skills',
          copy: 'Programming, problem-solving, data structures and project skills for interviews, internships and freelancing.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the C++ course in Phagwara?',
        a: 'techcadd runs C++ over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the C++ course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the C++ course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the C++ course?',
        a: 'Graduates move into C++ Developer, Software Developer, Backend Developer, Game Developer and similar roles. C++ and its data structures work is what technical interviews are actually built on, and it opens game, graphics and systems roles almost nothing else reaches.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'C++ Developer roles start around ₹20,000 – ₹33,000 a month for a fresher with a working portfolio, rising to ₹5–9 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. C++ Programming begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'C++ Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'C++ Developer roles in Punjab start around ₹20,000 – ₹33,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'c-course-in-phagwara',
      'java-course-in-phagwara',
      'python-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'kotlin-course-in-phagwara',
      'web-designing-course-in-phagwara',
    ],
    keywords: [
      'best c++ training in phagwara',
      'c++ course in phagwara',
      'c++ certification courses in phagwara',
      'c++ programming classes in phagwara',
      'learn c++ with stl',
    ],
  }),

  makeCourse({
    slug: 'kotlin-course-in-phagwara',
    label: 'Kotlin',
    title: 'Kotlin Programming Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'mobile',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn Kotlin from first syntax to a published Android app — OOP, collections, coroutines, Room, Retrofit and Firebase, with placement assistance.',
    overview:
      'Techcadd’s Kotlin Programming Course in Phagwara is an industry-based course built for students, graduates, job aspirants and beginners who want to learn Kotlin properly. It covers Kotlin basics, OOPs, collections, Android programming, databases, APIs and app development. The emphasis is on practical learning rather than theory: you work through coding exercises, assignments and live projects to see how Kotlin is actually used in Android development and backend applications. The teaching approach is learner-friendly throughout, developing coding logic and problem-solving alongside the syntax, and the project-based structure means you finish having built professional Kotlin applications rather than having read about them.',
    demand:
      'Kotlin is Google’s preferred language for Android, and Android work is one of the few development skills with steady freelance demand in Punjab alongside agency jobs.',
    modules: [
      {
        title: 'Kotlin Programming Basics',
        summary:
          'Learn Kotlin from the ground up through practical coding, writing clean and readable code from the first session.',
        topics: [
          'Variables, data types and operators',
          'Conditions, loops and functions',
          'Collections and strings',
          'Writing clean, readable Kotlin',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Logic, Functions & Problem Solving',
        summary:
          'Sharpen the programming skills underneath the syntax — how to take a problem apart before writing any of it down.',
        topics: [
          'Solving problems with functions and collections',
          'Scope, arguments and return values',
          'Debugging and error handling',
          'Breaking complex problems into coding tasks',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Object-Oriented Kotlin Programming',
        summary:
          'Understand how a professional Kotlin application is structured, and build the components it is assembled from.',
        topics: [
          'Classes, objects and constructors',
          'Inheritance, encapsulation and polymorphism',
          'Creating reusable application components',
          'Structuring Kotlin applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Collections, APIs & Applications',
        summary:
          'Move past the basics into the parts of Kotlin real applications are actually built from.',
        topics: [
          'Kotlin collections and higher-order functions',
          'Working with files and APIs',
          'Asynchronous programming',
          'Building real-life Kotlin applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Kotlin Database Connectivity',
        summary:
          'Learn how Kotlin applications handle real-world data, and build something that keeps what it is given.',
        topics: [
          'SQL and database concepts',
          'Connecting applications to databases',
          'CRUD operations',
          'Building database-driven Kotlin projects',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Kotlin for Android Development',
        summary:
          'Turn your Kotlin into mobile application development — the architecture, the screens and the data behind them.',
        topics: [
          'Android architecture',
          'Activities, layouts and navigation',
          'APIs and databases on Android',
          'Building beginner Android applications',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI-Driven Kotlin Development',
        summary:
          'Understand where AI genuinely increases developer productivity, and where relying on it costs you.',
        topics: [
          'Debugging with AI assistants',
          'Documentation with AI assistants',
          'Code generation through effective prompts',
          'Using AI without over-reliance',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Kotlin Projects, Git & Development Workflow',
        summary:
          'Put your coding skills to work the way an Android team does — version controlled, structured and scalable.',
        topics: [
          'Git and version control',
          'Structuring Android and Kotlin projects',
          'Writing reusable, scalable code',
          'Building portfolio projects',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Real Kotlin Projects & Job Readiness',
        summary:
          'Build one complete application end to end, then learn to present it the way an interviewer needs to hear it.',
        topics: [
          'A complete Kotlin application project',
          'Android projects for your portfolio',
          'Interview-ready code practices',
          'Career opportunities in Android and Kotlin development',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Write, debug and structure Kotlin programs from scratch',
      'Apply object-oriented design to real application components',
      'Work with collections, higher-order functions and coroutines',
      'Persist data locally with Room or SQLite and remotely with Firebase',
      'Consume REST APIs with Retrofit and handle asynchronous work',
      'Ship a complete Android application you can defend in an interview',
    ],
    tools: [
      'Kotlin',
      'Android Studio',
      'IntelliJ IDEA',
      'VS Code',
      'Git & GitHub',
      'SQLite',
      'Firebase',
      'Room Database',
      'REST APIs',
      'Retrofit',
      'Jetpack Compose',
      'Coroutines',
      'Postman',
      'AI Coding Tools',
      'ChatGPT for Development',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Interested in technology and mobile app development? Kotlin’s readable syntax makes it easy to pick up programming concepts. You will cover variables, functions, conditions, loops, collections and object-oriented programming — a strong skill to carry into whatever you study next.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Nothing teaches programming like building a real application. Whether you are in computer science, engineering or IT, practical Kotlin work gives you coding experience, Android applications, APIs, databases and application development for your college projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Kotlin opens up Android development and software programming roles. Employers value logical thinking and problem solving over memorised syntax — practical projects and a portfolio are what get a Kotlin developer hired in Phagwara.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, testing or software support? Kotlin develops your programming skill and moves you toward Android or application development. OOPs, Android, APIs and databases become one more technical skill without a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to become a full developer. Understanding Kotlin makes mobile application development, software products and technology-led business solutions legible — and makes talking to a development team far easier.',
      },
      {
        label: 'Aspiring Developers & Freelancers',
        copy: 'A strong basis for a career in Android development or app freelancing: Android development, object-oriented programming, APIs, databases and project development you can later bill for.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Kotlin skills are in high demand',
        copy: 'Kotlin has become the default choice for Android development and is used across modern software projects. Kotlin, Android development, OOPs, APIs, databases and problem solving open genuinely good career opportunities.',
      },
      {
        title: 'Knowing Kotlin, not memorising it',
        copy: 'Syntax and basics, variables and operators, conditions and loops, functions and collections, OOP, classes and inheritance, null safety and exception handling, APIs, database connectivity and Android — the concepts that turn a beginner into a Kotlin developer.',
      },
      {
        title: 'Practical learning is faster',
        copy: 'Watching videos is fine; building applications teaches far faster. Tasks and live projects are where Kotlin, Android development, APIs, databases and application development actually stick.',
      },
      {
        title: 'Skills that open several career options',
        copy: 'Depending on your interest, Kotlin leads into Android development, mobile applications, backend development, software engineering or application programming.',
      },
    ],
    whyNow: {
      title: 'Learn Kotlin Skills You Can Apply In Practical Life',
      points: [
        'Develop Kotlin programs that prove your programming skills rather than assert them.',
        'Build a portfolio of Android applications, APIs, database work and modern application development.',
        'Android Developer roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher with a working portfolio.',
        'Focus on projects, problem solving and application development rather than memorising syntax.',
      ],
    },
    roles: [
      'Android Developer',
      'Kotlin Developer',
      'Mobile App Developer',
      'Software Developer',
      'Android Backend Integration Developer',
      'Kotlin Application Engineer',
      'AI-Assisted Kotlin Developer',
      'Freelance Android Developer',
    ],
    roleDetails: [
      {
        role: 'Android Developer',
        copy: 'Build Android apps in Kotlin using activities, layouts, APIs and database integration.',
      },
      {
        role: 'Kotlin Developer',
        copy: 'Build scalable software applications using Kotlin and object-oriented programming.',
      },
      {
        role: 'Mobile App Developer',
        copy: 'Create user-friendly Android applications with Kotlin, APIs, Firebase and UI frameworks.',
      },
      {
        role: 'Software Developer',
        copy: 'Develop scalable applications in Kotlin, including the backend integration behind mobile.',
      },
      {
        role: 'Android Backend Integration Developer',
        copy: 'Integrate Android apps with REST APIs, databases and cloud services.',
      },
      {
        role: 'Kotlin Application Engineer',
        copy: 'Build production-ready Android applications using modern Kotlin development practices.',
      },
      {
        role: 'AI-Assisted Kotlin Developer',
        copy: 'Build applications combining Kotlin with AI tooling for coding, documentation and debugging.',
      },
      {
        role: 'Freelance Android Developer',
        copy: 'Build Android applications for businesses while growing a mobile app portfolio of your own.',
      },
    ],
    hiring: [
      'Android app development agencies',
      'Mobile-first startups',
      'Software development firms',
      'Product-based technology companies',
    ],
    nextSteps: [
      'Jetpack Compose in depth',
      'Kotlin coroutines & Flow',
      'Backend with Ktor',
      'Kotlin Multiplatform',
    ],
    industries: [
      'Mobile app development',
      'Product engineering',
      'Startups',
      'IT services',
    ],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Android Developer',
      summary:
        'Builds native Android applications with Kotlin, Jetpack Compose and the surrounding stack. Earnings depend on your skills, portfolio, experience, company and location.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹35,000–₹55,000/month',
      markets: [
        {
          name: 'Punjab — Android Developer',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹35,000–₹55,000/month',
          scale: { fresher: 27500, after2: 45000 },
        },
        {
          name: 'Delhi / NCR — Kotlin & Mobile Development',
          fresher: '₹28,000–₹45,000/month',
          after2: '₹45,000–₹75,000+/month',
          scale: { fresher: 36500, after2: 60000 },
        },
        {
          name: 'Remote / Freelance Android',
          fresher: '₹12,000–₹30,000/month',
          after2: '₹35,000–₹90,000+/month',
          scale: { fresher: 21000, after2: 62500 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Kotlin?',
        a: 'Android Developer, Kotlin Developer, Mobile App Developer and Software Developer. Kotlin is Google’s preferred language for Android, so the skill maps directly onto the roles agencies and product companies are hiring for.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹20,000 – ₹35,000 a month in the Punjab market, rising to ₹35,000 – ₹55,000 with two years of delivery experience. Delhi/NCR runs higher, and specialists move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — Android is one of the few development skills with steady freelance demand locally as well as remotely. Freelance income ramps rather than starting at a salary: around ₹12,000 – ₹30,000 a month early on, and ₹35,000 – ₹90,000+ once you have shipped real client apps.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Android app development agencies, mobile-first startups, software development firms and product-based technology companies — plus freelance mobile application work, which travels particularly well.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Kotlin leads naturally into Jetpack Compose, coroutines in depth, Ktor backends and Kotlin Multiplatform, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Kotlin Programming & Logical Thinking',
        summary:
          'Write programs using variables, loops, functions and collections, and build the logical thinking the rest of the course depends on.',
        tech: ['Kotlin', 'Kotlin Basics'],
        level: 'Beginner',
        skills: ['Logical Thinking', 'Programming Fundamentals'],
      },
      {
        name: 'Android Application Development',
        summary:
          'Build your first Android application using activities, layouts and navigation — the point at which Kotlin becomes something you can hold in your hand.',
        tech: ['Android', 'Kotlin'],
        level: 'Beginner',
        skills: ['Mobile UI', 'Android Development'],
      },
      {
        name: 'Kotlin Database Project',
        summary:
          'Build an application backed by Room or SQLite, with records you can create, read, update and delete.',
        tech: ['Room', 'SQLite'],
        level: 'Intermediate',
        skills: ['CRUD Operations', 'Kotlin Database'],
      },
      {
        name: 'Kotlin API Integration',
        summary:
          'Build an application that fetches and displays live information over REST APIs using Retrofit.',
        tech: ['Retrofit', 'REST API'],
        level: 'Intermediate',
        skills: ['API Integration', 'JSON'],
      },
      {
        name: 'Firebase Android Project',
        summary:
          'Build a cloud-connected mobile application using Firebase Authentication and database services.',
        tech: ['Firebase', 'Cloud Database'],
        level: 'Intermediate',
        skills: ['Authentication', 'Cloud Integration'],
      },
      {
        name: 'Problem Solving with Kotlin',
        summary:
          'Solve real programming problems and pick up debugging, clean code and algorithmic thinking along the way.',
        tech: ['Kotlin', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Kotlin Logic'],
      },
      {
        name: 'Android Development using AI',
        summary:
          'Build a practical Android application and learn where AI genuinely helps with coding, documentation and debugging.',
        tech: ['Kotlin', 'AI Tools'],
        level: 'Advanced',
        skills: ['Android Development', 'AI-Assisted Development'],
      },
      {
        name: 'End-to-End Kotlin Capstone',
        summary:
          'Design, plan, develop, test and present a complete Android application as your capstone and portfolio piece.',
        tech: ['Android App', 'Kotlin'],
        level: 'Advanced',
        skills: ['Application Development', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Understand the user requirement and shape an Android application that solves the actual business problem behind it.',
        artefact: 'Application Planning & Requirement Analysis',
      },
      {
        title: 'Build',
        copy: 'Build the application in Kotlin with the APIs, Firebase and databases it needs, with a trainer beside you.',
        artefact: 'Android App Development Project',
      },
      {
        title: 'Present & Optimise',
        copy: 'Present the app and optimise it — UI, functionality and performance — then take it into your professional portfolio.',
        artefact: 'Complete Android App Project & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-relevant Kotlin classes',
        copy: 'Practical concepts — Kotlin basics, OOPs, Android programming, databases, APIs and problem solving — that build genuinely industry-relevant skill.',
      },
      {
        title: 'Learn by writing Kotlin programs',
        copy: 'Learn Kotlin by working on Android projects, API integrations and application development rather than by reading about them.',
      },
      {
        title: 'Create your own Kotlin portfolio',
        copy: 'Build professional Android applications for your resume — work that demonstrates your programming ability rather than asserting it.',
      },
      {
        title: 'Career assistance and placement',
        copy: 'Resume help, technical interview practice and Android project presentation, plus direction on careers in Kotlin and mobile application development.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Experienced trainers',
        copy: 'Understand Kotlin through practical examples and become genuinely proficient in Android programming, rather than fluent in definitions.',
      },
      {
        title: 'Live Android projects',
        copy: 'Develop Android applications involving Firebase, APIs, databases, Jetpack Compose and real mobile development work.',
      },
      {
        title: 'Small batch training',
        copy: 'Personalised assistance while you are coding and building — the point at which a doubt is worth clearing is while you are still stuck on it.',
      },
      {
        title: 'Portfolio development',
        copy: 'Create Android applications that add real weight to your resume, not a certificate that asserts you attended.',
      },
      {
        title: 'Career assistance',
        copy: 'Support with resumes, interviews and project presentation, specifically for Android development roles.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Kotlin curriculum',
          techcadd:
            'Android-focused training covering Kotlin, OOPs, APIs, Firebase and modern app development',
          others: 'Often limited to basic Kotlin syntax',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, project-based Android development',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Projects',
          techcadd: 'Real Android applications with APIs and databases',
          others: 'Limited project exposure',
        },
        {
          feature: 'Programming skills',
          techcadd: 'Logic building, debugging, architecture and clean coding',
          others: 'Less emphasis on application development',
        },
        {
          feature: 'Career support',
          techcadd: 'Resume guidance, interview preparation and portfolio development',
          others: 'Varies between institutes',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. A good Kotlin course in Phagwara should help you move from learning Kotlin syntax to confidently building Android applications.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn Kotlin fundamentals',
        blurb:
          'Kotlin fundamentals, programming logic and beginner Android development, until building a screen stops feeling difficult.',
        skills: ['Kotlin', 'Android Studio', 'Git', 'UI Basics'],
        recommendedFor: 'Android Trainee, Programming Intern.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Build production-ready Android apps',
        blurb:
          'Develop production-ready Android applications using APIs, Firebase and modern Kotlin architecture.',
        skills: ['Kotlin', 'Firebase', 'Retrofit', 'Room Database', 'GitHub'],
        recommendedFor: 'Android Developer, Kotlin Developer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master Android application development',
        blurb:
          'Jetpack Compose, architecture patterns, advanced APIs and AI-assisted workflows — the full path from foundation to specialisation.',
        skills: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Firebase', 'AI Coding Tools'],
        recommendedFor: 'Senior Android Developer pathway, Mobile Application Engineer.',
      },
    ],
    capabilities: [
      { capability: 'Kotlin fundamentals', included: [true, true, true] },
      { capability: 'OOPs', included: [true, true, true] },
      { capability: 'Collections', included: [true, true, true] },
      { capability: 'Android basics', included: [true, true, true] },
      { capability: 'Firebase', included: [false, true, true] },
      { capability: 'APIs', included: [false, true, true] },
      { capability: 'Room Database', included: [false, true, true] },
      { capability: 'Jetpack Compose', included: [false, false, true] },
      { capability: 'Coroutines', included: [false, false, true] },
      { capability: 'Advanced projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course teaches you to code in Kotlin and covers Android basics. The 6-month track adds Android development with APIs, Firebase and databases. The 9-month programme prepares you for advanced mobile application development. Choose 3 months for coding and Android fundamentals; 6 months to build apps with APIs, Firebase and databases; 9 months to advance into modern Android tooling.',
    instructor: {
      heading: 'Why learn Kotlin programming with us?',
      intro:
        'Learning Kotlin means developing mobile applications, not only writing code. Sessions are built around that: concepts arrive when a project needs them rather than as a list to memorise first, and problems get solved in your own practical way.',
      points: [
        {
          title: 'An app from early on',
          copy: 'Kotlin is best learned by building something that runs on a phone. You get there early, then keep adding to it.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You write, run and debug on a real device or emulator from the first Android module.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering logic, Android UI, databases, APIs, Firebase, problem solving, AI and a capstone app you own.',
        },
        {
          title: 'The modern Android path',
          copy: 'Jetpack Compose, coroutines and Retrofit are the current stack — the syllabus teaches those rather than what Android looked like five years ago.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Kotlin Programming Course in Phagwara at Techcadd?',
        a: 'A practical, Android-focused course covering Kotlin fundamentals, OOPs, Android Studio, APIs, databases and real-world application development.',
      },
      {
        q: 'Who can join a Kotlin Programming Course in Phagwara?',
        a: 'Students, graduates, freshers, working professionals and beginners interested in Android or mobile application development.',
      },
      {
        q: 'Is Kotlin a good career option for freshers?',
        a: 'Yes. Kotlin is one of the leading languages for Android development and offers strong opportunities in mobile application development.',
      },
      {
        q: 'What will I learn in the Kotlin Programming Course?',
        a: 'Kotlin basics, OOPs, collections, Android development, Firebase, APIs, databases and application architecture.',
      },
      {
        q: 'Is the Kotlin course practical or theory-based?',
        a: 'The course emphasises hands-on Android development through coding exercises, debugging and real-world projects.',
      },
      {
        q: 'Will I work on Kotlin projects during the course?',
        a: 'Yes. You will build Android apps, API integrations, Firebase projects and a complete capstone application.',
      },
      {
        q: 'Can I learn Kotlin after 12th?',
        a: 'Absolutely. Kotlin is beginner-friendly and provides an excellent pathway into Android development after 12th.',
      },
      {
        q: 'Can Kotlin help me get a job or internship?',
        a: 'Yes, especially when combined with practical Android projects, debugging skills and a strong development portfolio.',
      },
      {
        q: 'Does the course include Android development?',
        a: 'Yes. Android development is one of the core focuses of the Kotlin Programming Course in Phagwara.',
      },
      {
        q: 'How do I choose the best Kotlin Programming Course in Phagwara?',
        a: 'Choose on practical Android projects, trainer experience, APIs, Firebase, portfolio development and career support — not only certificates or fees.',
      },
    ],
    relatedCourses: [
      'java-course-in-phagwara',
      'python-course-in-phagwara',
      'web-development-course-in-phagwara',
      'mern-stack-course-in-phagwara',
      'c-plus-plus-course-in-phagwara',
      'web-designing-course-in-phagwara',
    ],
    keywords: [
      'kotlin programming course in phagwara',
      'kotlin course in phagwara',
      'kotlin training institute in phagwara',
      'kotlin programming classes in phagwara',
      'android development course in phagwara',
      'kotlin course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'web-designing-course-in-phagwara',
    label: 'Web Designing',
    title: 'Best Web Designing Course & Training in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'palette',
    duration: '2 Months',
    level: 'Beginner',
    eligibility: '10th / 12th Pass Onward',
    summary: 'HTML, CSS and responsive layout — build pixel-accurate, mobile-first pages before moving into full development.',
    overview: 'Prepare for a career in web design with structured training in Phagwara. You study website design, HTML, CSS, JavaScript, responsive design and user interface work, then put each of them into practice. Built for beginners: the course teaches website creation step by step, so creative and technical skill grow together rather than one waiting on the other.',
    demand: 'Every business in Phagwara that wants a website needs someone who can make it look right on a phone — and most local agencies are short of exactly that person.',
    modules: [
      {
        title: 'Web designing basics',
        summary: 'How websites work — structure, browsers, domains, web hosting and the basic elements of a page.',
        topics: ['Website structure', 'Browsers', 'Domains & hosting', 'Page elements'],
        duration: '1 week',
        lessons: 6,
      },
      {
        title: 'HTML basics',
        summary: 'HTML syntax and elements — headings, paragraphs, links, images, lists, tables and forms.',
        topics: ['Headings & paragraphs', 'Links & images', 'Lists & tables', 'Forms'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'CSS styling & page layout',
        summary: 'Selectors, colour, fonts, backgrounds, borders, spacing, positioning and advanced page styling.',
        topics: ['Selectors', 'Colour & typography', 'Box model & spacing', 'Positioning'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Responsive web design',
        summary: 'The principles and methods behind sites that adapt to desktop, tablet and mobile.',
        topics: ['Media queries', 'Flexbox', 'CSS Grid', 'Mobile-first layout'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'JavaScript basics',
        summary: 'The JavaScript language — variables, data types, operators, functions, conditions and loops.',
        topics: ['Variables & types', 'Operators', 'Functions', 'Conditions & loops'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'User interface & user experience',
        summary: 'Planning layouts, navigation, typography, visual hierarchy and usability.',
        topics: ['Layout planning', 'Navigation', 'Visual hierarchy', 'Usability'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Bootstrap & frameworks',
        summary: 'Building responsive layouts, navigation bars, cards, forms and buttons with Bootstrap.',
        topics: ['Grid system', 'Navbars', 'Cards & forms', 'Components'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Website graphics & resources',
        summary: 'Choosing and using images, icons, banners and fonts so a site looks considered rather than assembled.',
        topics: ['Images & icons', 'Banners', 'Web fonts', 'Asset choice'],
        duration: '1 week',
        lessons: 6,
      },
      {
        title: 'Forms & interactivity',
        summary: 'Contact and registration forms, buttons, menus and sliders, with form validation.',
        topics: ['Contact forms', 'Validation', 'Menus & sliders', 'Interactive components'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Website deployment & hosting',
        summary: 'Domain names, web hosting, FTP, deployment and file management.',
        topics: ['Domains', 'Hosting', 'FTP & deployment', 'File management'],
        duration: '1 week',
        lessons: 6,
      },
      {
        title: 'Website optimisation',
        summary: 'Page speed, image optimisation, mobile usability and accessible site structure.',
        topics: ['Page speed', 'Image optimisation', 'Mobile usability', 'Accessibility'],
        duration: '1 week',
        lessons: 6,
      },
      {
        title: 'Practice projects & career development',
        summary: 'Real practice projects, landing pages and responsive builds, plus preparation for internships and design work.',
        topics: ['Landing pages', 'Portfolio site', 'Responsive build', 'Interview preparation'],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Build standards-based pages with HTML5',
      'Style and lay out sites confidently with CSS3',
      'Make any layout responsive across desktop, tablet and mobile',
      'Add interactivity and form validation with JavaScript',
      'Apply user interface and usability principles to a design',
      'Deploy, host and optimise a finished website',
    ],
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'Responsive Web Design',
      'Flexbox & CSS Grid',
      'VS Code',
      'Git & GitHub',
      'Figma / UI Design Tools',
      'Web Browsers & Developer Tools',
      'Domain & Web Hosting Basics',
      'SEO-Friendly Web Design',
    ],
    roles: [
      'Web Designer',
      'UI Designer',
      'Frontend Developer',
      'WordPress Designer',
      'UI/UX Designer',
      'Freelance Web Designer',
    ],
    roleDetails: [
      {
        role: 'Web Designer',
        copy: 'Create attractive, responsive websites for businesses, organisations and individuals.',
      },
      {
        role: 'UI Designer',
        copy: 'Build visually appealing interfaces through layout, typography, colour, components and design principles.',
      },
      {
        role: 'Frontend Developer',
        copy: 'Build the visual and interactive parts of a website with HTML, CSS and JavaScript.',
      },
      { role: 'WordPress Designer', copy: 'Build and customise websites on WordPress.' },
      {
        role: 'UI/UX Designer',
        copy: 'Shape the user experience through usability, navigation, visual layout and interaction.',
      },
      {
        role: 'Freelance Web Designer',
        copy: 'Design websites independently for clients, startups, businesses or personal brands.',
      },
    ],
    hiring: [
      'Design and digital agencies',
      'In-house marketing teams',
      'Freelance website projects',
      'Startups building a first product',
    ],
    nextSteps: ['Frontend development', 'React', 'WordPress development', 'UI/UX design'],
    industries: ['Digital agencies', 'Startups', 'E-commerce', 'Freelance & studio work'],
    salary: {
      role: 'Web Designer',
      summary: 'Turns a brief into a responsive, accessible interface that a developer can build from.',
      starting: '₹2–3 LPA',
      after2: '₹3.5–6.5 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–3 LPA',
          after2: '₹3.5–6.5 LPA',
          scale: { fresher: 2.5, after2: 5 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹2.5–4.5 LPA',
          after2: '₹5–9 LPA',
          scale: { fresher: 3.5, after2: 7 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3–5 LPA',
          after2: '₹5.5–10 LPA',
          scale: { fresher: 3.88, after2: 7.75 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Web Designing?',
        a: 'Graduates move into Web Designer, UI Designer, Frontend Developer, WordPress Designer and similar roles. Every business in Phagwara that wants a website needs someone who can make it look right on a phone — and most local agencies are short of exactly that person.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹15,000 – ₹27,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Responsive business landing page',
        summary: 'A single-page site built mobile-first, from a layout sketch to a deployed page.',
        tech: ['HTML5', 'CSS3', 'Flexbox'],
        level: 'Beginner',
        skills: ['Layout', 'Responsive design', 'Typography'],
      },
      {
        name: 'Personal portfolio website',
        summary: 'A multi-page portfolio with navigation, a working contact form and validation.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        level: 'Intermediate',
        skills: ['Forms & validation', 'Navigation', 'Visual hierarchy'],
      },
      {
        name: 'Bootstrap e-commerce front page',
        summary: 'Product grid, cards and navbar assembled with Bootstrap, then optimised for speed and mobile.',
        tech: ['Bootstrap', 'CSS3', 'JavaScript'],
        level: 'Intermediate',
        skills: ['Bootstrap components', 'Grid layout', 'Optimisation'],
      },
    ],
    instructor: {
      heading: 'Why learn web designing with us?',
      intro: 'Design is judged by what ends up on the screen, so the sessions are built around building. Every concept arrives attached to a page you are making, and every page is reviewed the way client work would be.',
      points: [
        {
          title: 'Learning through practice',
          copy: 'Go beyond theory with website exercises, design assignments and project-based training.',
        },
        {
          title: 'A program for beginners',
          copy: 'Start at the basics and move toward building responsive, professional websites.',
        },
        {
          title: 'Training with real-world tools',
          copy: 'Work with HTML, CSS, JavaScript, Bootstrap, VS Code, Git, GitHub and Figma.',
        },
        {
          title: 'Practical website creation',
          copy: 'Build real websites, landing pages, portfolio sites and responsive layouts.',
        },
        {
          title: 'Guided sessions with support',
          copy: 'Learn through worked examples, practical work, problem solving and continuous support.',
        },
        {
          title: 'Technical & creative career skills',
          copy: 'Develop the mix of technical and creative skill that internships, freelance projects and interviews ask for.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the Web Designing course in Phagwara?',
        a: 'techcadd runs Web Designing over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Web Designing course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Web Designing course?',
        a: '10th / 12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Web Designing course?',
        a: 'Graduates move into Web Designer, UI Designer, Frontend Developer, WordPress Designer and similar roles. Every business in Phagwara that wants a website needs someone who can make it look right on a phone — and most local agencies are short of exactly that person.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Web Designer roles start around ₹15,000 – ₹27,000 a month for a fresher with a working portfolio, rising to ₹3.5–6.5 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Web Designing begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Web Designing Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Web Designer roles in Punjab start around ₹15,000 – ₹27,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'mern-stack-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'web-development-course-in-phagwara',
      'python-course-in-phagwara',
      'java-course-in-phagwara',
      'c-course-in-phagwara',
    ],
    keywords: [
      'best web designing course in phagwara',
      'web designing courses in phagwara',
      'web designing certification courses in phagwara',
      'html css javascript classes phagwara',
      'responsive web design training in phagwara',
    ],
  }),

  makeCourse({
    slug: 'web-development-course-in-phagwara',
    label: 'Web Development',
    title: 'Best Web Development Course & Training in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'code',
    duration: '5 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary: 'Front end to back end — JavaScript, a modern framework and a database, ending with a full deployed web application.',
    overview: 'Launch your career in web development with structured training in Phagwara. You learn to create responsive, interactive and functional websites using HTML, CSS, JavaScript, frontend frameworks, backend technologies, databases, APIs and the tools professional teams actually use. Designed for beginners, students, freshers and aspiring developers who want practical, industry-relevant skills rather than theory.',
    demand: 'Web development is the broadest entry point in the industry: the same skills serve an agency job, a product team and a freelance client list.',
    modules: [
      {
        title: 'Introduction to web development',
        summary: 'How websites and web applications work — frontend and backend concepts, terminology and the development environment.',
        topics: ['How the web works', 'Frontend vs backend', 'Web terminology', 'Environment setup'],
        duration: '1 week',
        lessons: 6,
      },
      {
        title: 'HTML5 & website structure',
        summary: 'HTML elements, headings, paragraphs, links, images, lists, tables, forms, semantic tags and page structure.',
        topics: ['Elements & structure', 'Links & images', 'Tables & forms', 'Semantic tags'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'CSS3 & web designing',
        summary: 'Selectors, properties, colour, typography, spacing, positioning, layouts, Flexbox, Grid, transitions and animations.',
        topics: ['Selectors & properties', 'Flexbox', 'CSS Grid', 'Transitions & animations'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Responsive web design',
        summary: 'Building sites that adapt to desktop, tablet and mobile with responsive layouts, flexible elements and media queries.',
        topics: ['Media queries', 'Flexible layouts', 'Mobile-first', 'Cross-device testing'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'JavaScript programming',
        summary: 'Variables, data types, operators, conditions, loops, functions, arrays, objects and the logic web development needs.',
        topics: ['Variables & types', 'Functions', 'Arrays & objects', 'Programming logic'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'DOM & website interactivity',
        summary: 'The Document Object Model, events, forms, validation, dynamic content and user interaction.',
        topics: ['DOM traversal', 'Events', 'Forms & validation', 'Dynamic content'],
        duration: '1 week',
        lessons: 10,
      },
      {
        title: 'Modern JavaScript & APIs',
        summary: 'ES6 features, modules, asynchronous programming, promises, the Fetch API, JSON and dynamic data.',
        topics: ['ES6 features', 'Modules', 'Promises & async', 'Fetch & JSON'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Frontend development with React',
        summary: 'React fundamentals — components, props, state, events, forms, hooks and routing.',
        topics: ['Components & props', 'State & events', 'Hooks', 'Routing'],
        duration: '2 weeks',
        lessons: 14,
      },
      {
        title: 'Backend development',
        summary: 'Server-side programming, routing, requests and responses, middleware and authentication with Node.js and Express.js.',
        topics: ['Node.js', 'Express routing', 'Middleware', 'Authentication concepts'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Databases & API integration',
        summary: 'Database concepts, CRUD, SQL, connecting applications to data, REST APIs and frontend-backend communication.',
        topics: ['SQL & CRUD', 'Database connection', 'REST APIs', 'JSON handling'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Git, GitHub & deployment',
        summary: 'Version control with Git and GitHub, project basics, hosting, domains and publishing a site.',
        topics: ['Git basics', 'GitHub workflow', 'Hosting & domains', 'Deployment'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Projects & career preparation',
        summary: 'Build websites and applications, troubleshoot, create a portfolio and prepare for interviews.',
        topics: ['Project build', 'Debugging', 'Portfolio', 'Interview preparation'],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Website structure and development fundamentals',
      'HTML5 and semantic web development',
      'CSS3 and modern website styling',
      'Responsive and mobile-friendly design',
      'JavaScript programming and logic building',
      'DOM manipulation and interactive websites',
      'Modern JavaScript and asynchronous programming',
      'React frontend development',
      'Backend development fundamentals',
      'REST APIs and JSON',
      'Database connectivity and CRUD operations',
      'Git and GitHub',
      'Website hosting and deployment',
      'Debugging and problem solving',
      'Real-world website and application development',
    ],
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'VS Code',
      'Git & GitHub',
      'React',
      'Node.js',
      'Express.js',
      'SQL & Databases',
      'REST APIs & JSON',
      'Responsive Web Design',
      'Browser Developer Tools',
      'Web Hosting & Deployment',
    ],
    roles: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'Web Developer',
      'React Developer',
      'Web Application Developer',
      'Freelance Web Developer',
      'Software Development Foundation',
    ],
    roleDetails: [
      {
        role: 'Frontend Developer',
        copy: 'Create responsive, interactive website interfaces using HTML, CSS, JavaScript and React.',
      },
      {
        role: 'Backend Developer',
        copy: 'Build server-side applications, APIs, business logic and database-connected solutions.',
      },
      {
        role: 'Full Stack Developer',
        copy: 'Work across frontend, backend, databases and APIs on complete web applications.',
      },
      {
        role: 'Web Developer',
        copy: 'Design, develop, maintain and improve websites and web-based solutions.',
      },
      {
        role: 'React Developer',
        copy: 'Build modern, interactive user interfaces using React and JavaScript.',
      },
      {
        role: 'Web Application Developer',
        copy: 'Develop functional web applications around business requirements and user needs.',
      },
      {
        role: 'Freelance Web Developer',
        copy: 'Build websites and applications for clients and independent projects.',
      },
      {
        role: 'Software Development Foundation',
        copy: 'Build a base that supports future growth into software engineering and advanced programming.',
      },
    ],
    hiring: [
      'Web and digital agencies',
      'Product startups',
      'In-house engineering teams',
      'Freelance and contract projects',
    ],
    nextSteps: ['MERN stack', 'Next.js', 'TypeScript', 'Cloud & DevOps'],
    industries: ['Product companies', 'Digital agencies', 'Startups', 'Freelance & remote work'],
    salary: {
      role: 'Web Developer',
      summary: 'Builds and ships full websites, from database schema through to deployed interface.',
      starting: '₹2.5–4 LPA',
      after2: '₹5–9 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2.5–4 LPA',
          after2: '₹5–9 LPA',
          scale: { fresher: 3.3, after2: 7 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3.5–6 LPA',
          after2: '₹7–12.5 LPA',
          scale: { fresher: 4.62, after2: 9.8 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3.5–6.5 LPA',
          after2: '₹8–14 LPA',
          scale: { fresher: 5.12, after2: 10.85 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Web Development?',
        a: 'Graduates move into Frontend Developer, Backend Developer, Full Stack Developer, Web Developer and similar roles. Web development is the broadest entry point in the industry: the same skills serve an agency job, a product team and a freelance client list.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹20,000 – ₹35,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Responsive multi-page website',
        summary: 'A complete site built mobile-first, from semantic HTML through to deployment.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        level: 'Beginner',
        skills: ['Responsive design', 'Semantic HTML', 'Deployment'],
      },
      {
        name: 'React dashboard with a live API',
        summary: 'Components, state and routing, fed by data fetched asynchronously and rendered as it arrives.',
        tech: ['React', 'REST APIs', 'JSON'],
        level: 'Intermediate',
        skills: ['Hooks', 'Async data', 'Routing'],
      },
      {
        name: 'Full stack task application',
        summary: 'An Express API over a database, consumed by a React front end, with authentication and CRUD.',
        tech: ['Node.js', 'Express.js', 'SQL', 'React'],
        level: 'Advanced',
        skills: ['REST design', 'CRUD', 'Auth concepts'],
      },
    ],
    instructor: {
      heading: 'Why learn web development with us?',
      intro: 'Web development is judged by what runs. Every concept here arrives attached to something you are building, and every build goes through review the way real work does.',
      points: [
        {
          title: 'Practical learning approach',
          copy: 'Coding exercises, assignments, website tasks and hands-on projects rather than theory alone.',
        },
        {
          title: 'Industry-relevant curriculum',
          copy: 'Technologies and practices widely used for building modern websites and web applications.',
        },
        {
          title: 'Step-by-step training',
          copy: 'Progress from HTML and CSS to JavaScript, React, backend, databases, APIs and deployment.',
        },
        {
          title: 'Real-world projects',
          copy: 'Projects that build coding confidence, problem-solving ability and portfolio quality.',
        },
        {
          title: 'Expert guidance',
          copy: 'Structured support with practical demonstrations, coding assistance, debugging help and doubt solving.',
        },
        {
          title: 'Career-focused skills',
          copy: 'Frontend, backend, database, API and version-control skills for internships, interviews and freelancing.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the Web Development course in Phagwara?',
        a: 'techcadd runs Web Development over 5 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Web Development course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Web Development course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Web Development course?',
        a: 'Graduates move into Frontend Developer, Backend Developer, Full Stack Developer, Web Developer and similar roles. Web development is the broadest entry point in the industry: the same skills serve an agency job, a product team and a freelance client list.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Web Developer roles start around ₹20,000 – ₹35,000 a month for a fresher with a working portfolio, rising to ₹5–9 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Web Development begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Web Development Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Web Developer roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'mern-stack-course-in-phagwara',
      'web-designing-course-in-phagwara',
      'java-course-in-phagwara',
      'python-course-in-phagwara',
      'c-course-in-phagwara',
      'c-plus-plus-course-in-phagwara',
    ],
    keywords: [
      'best web development course in phagwara',
      'web development training in phagwara',
      'react and node js training in phagwara',
      'frontend and backend course phagwara',
      'full stack web development classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'mern-stack-course-in-phagwara',
    label: 'MERN Stack',
    title: 'Best MERN Stack Course & Training in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'layers',
    duration: '6 Months',
    level: 'Intermediate to Advanced',
    eligibility: 'Graduate / Final-year',
    summary: 'MongoDB, Express, React and Node — the most in-demand JavaScript stack for building and shipping production apps.',
    overview: 'Start your full-stack career with structured MERN training in Phagwara. You build modern web applications with MongoDB, Express.js, React.js and Node.js, alongside JavaScript, REST APIs, databases and real project work. Designed to take beginners through to industry-ready: the track starts at web fundamentals and finishes with a complete, authenticated, deployed application.',
    demand: 'MERN is the stack most Indian startups actually build on, which makes it the fastest route from training to a paying developer role.',
    modules: [
      {
        title: 'Web development fundamentals',
        summary: 'HTML, CSS, responsive design, page structure and the styling behind a modern website.',
        topics: ['HTML structure', 'CSS styling', 'Responsive design', 'Page layout'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'JavaScript fundamentals',
        summary: 'Variables, data types, operators, functions, arrays, objects, conditions and loops, with coding practice throughout.',
        topics: ['Variables & types', 'Functions', 'Arrays & objects', 'Conditions & loops'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Advanced JavaScript',
        summary: 'ES6+ features, arrow functions, destructuring, spread, promises, asynchronous programming and modules.',
        topics: ['ES6+ syntax', 'Destructuring & spread', 'Promises & async', 'Modules'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'React.js fundamentals',
        summary: 'Components, JSX, props, state, events, conditional rendering, lists and forms.',
        topics: ['Components & JSX', 'Props & state', 'Events', 'Lists & forms'],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'React.js development',
        summary: 'Hooks, React Router, the Context API, API integration, forms and state management in an interactive application.',
        topics: ['Hooks', 'React Router', 'Context API', 'State management'],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'Node.js & Express.js',
        summary: 'Node.js fundamentals and backend development with Express — routing, middleware, controllers and server-side JavaScript.',
        topics: ['Node.js basics', 'Express routing', 'Middleware', 'Controllers'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'MongoDB & database management',
        summary: 'Collections, documents, CRUD, queries, relationships and managing data inside a web application.',
        topics: ['Collections & documents', 'CRUD', 'Queries', 'Relationships'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'REST APIs & JSON',
        summary: 'Building and consuming REST APIs — HTTP methods, JSON, the request-response cycle and frontend-backend communication.',
        topics: ['HTTP methods', 'JSON', 'Request & response', 'API consumption'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Authentication & security',
        summary: 'User registration, login, password handling, JWT authentication, authorisation and route protection.',
        topics: ['Registration & login', 'Password handling', 'JWT', 'Route protection'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Full stack application',
        summary: 'Integrating a React frontend with Node.js, Express and MongoDB into one complete database-driven application.',
        topics: ['Frontend-backend wiring', 'Data flow', 'Error handling', 'Application structure'],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'Git, GitHub & deployment',
        summary: 'Version control, repository management, collaborating on a project and deploying a full stack application.',
        topics: ['Git basics', 'Repositories', 'Collaboration', 'Deployment'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Projects & career preparation',
        summary: 'MERN projects, debugging, portfolio building and interview preparation.',
        topics: ['Capstone project', 'Debugging', 'Portfolio', 'Interview preparation'],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Web development and JavaScript fundamentals',
      'React frontend development',
      'Node.js and Express.js backend development',
      'MongoDB and database management',
      'REST APIs, authentication and Git',
      'Full stack projects and deployment',
    ],
    tools: [
      'HTML & CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Git & GitHub',
      'REST APIs & JSON',
      'JWT Authentication',
      'React Router',
      'VS Code',
      'NPM & Package Management',
      'Deployment & Hosting',
    ],
    roles: [
      'MERN Stack Developer',
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'React.js Developer',
      'Node.js Developer',
      'Software Developer',
    ],
    roleDetails: [
      {
        role: 'MERN Stack Developer',
        copy: 'Build full stack web applications with MongoDB, Express.js, React.js and Node.js.',
      },
      {
        role: 'Frontend Developer',
        copy: 'Create interactive, responsive interfaces with React.js, JavaScript, HTML and CSS.',
      },
      {
        role: 'Backend Developer',
        copy: 'Build server-side applications, APIs, authentication systems and database-driven solutions.',
      },
      {
        role: 'Full Stack Developer',
        copy: 'Work across frontend, backend, APIs and databases on complete web applications.',
      },
      {
        role: 'React.js Developer',
        copy: 'Build modern, interactive frontend applications with React.js and its ecosystem.',
      },
      {
        role: 'Node.js Developer',
        copy: 'Build backend services, APIs and server-side applications with Node.js.',
      },
      {
        role: 'Software Developer',
        copy: 'Develop and improve software and web-based applications using full stack programming.',
      },
    ],
    hiring: [
      'Product startups and SaaS teams',
      'Digital agencies building web apps',
      'Remote contract work',
      'In-house engineering teams',
    ],
    nextSteps: ['Next.js', 'TypeScript', 'Cloud & DevOps', 'System design'],
    industries: ['Product companies', 'SaaS', 'E-commerce', 'IT services'],
    salary: {
      role: 'MERN Stack Developer',
      summary: 'Owns a feature end to end — MongoDB schema, Express API, React interface, deployment.',
      starting: '₹3–5 LPA',
      after2: '₹6–12 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹3–5 LPA',
          after2: '₹6–12 LPA',
          scale: { fresher: 4, after2: 9 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–17 LPA',
          scale: { fresher: 5.6, after2: 12.6 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4.5–8 LPA',
          after2: '₹9.5–18.5 LPA',
          scale: { fresher: 6.2, after2: 13.95 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after MERN Stack?',
        a: 'Graduates move into MERN Stack Developer, Frontend Developer, Backend Developer, Full Stack Developer and similar roles. MERN is the stack most Indian startups actually build on, which makes it the fastest route from training to a paying developer role.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹25,000 – ₹42,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'React frontend for a live API',
        summary: 'Components, routing and state management, rendering data fetched asynchronously.',
        tech: ['React.js', 'REST APIs', 'JSON'],
        level: 'Beginner',
        skills: ['Components', 'Hooks', 'API integration'],
      },
      {
        name: 'Authenticated REST API',
        summary: 'Express and MongoDB behind registration, login, JWT sessions and protected routes.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
        level: 'Intermediate',
        skills: ['REST design', 'Authentication', 'CRUD'],
      },
      {
        name: 'Full stack MERN capstone',
        summary: 'A complete database-driven application — React front end, Express API, MongoDB, deployed and version-controlled.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        level: 'Advanced',
        skills: ['Full stack architecture', 'Deployment', 'Git workflow'],
      },
    ],
    instructor: {
      heading: 'Why learn MERN stack development with us?',
      intro: 'The stack only clicks when one language carries you from a button click to a database write. The sessions are built around that path, so every concept lands attached to an application you are already running.',
      points: [
        {
          title: 'Learning through practice',
          copy: 'Go beyond theory with coding exercises, assignments, application development and projects.',
        },
        {
          title: 'Beginner-oriented program',
          copy: 'Start with web development fundamentals and move gradually into frontend and backend development.',
        },
        {
          title: 'Industry-relevant technologies',
          copy: 'Work with React.js, Node.js, Express.js, MongoDB, Git, GitHub and APIs.',
        },
        {
          title: 'Real-world projects',
          copy: 'Build applications that strengthen problem solving, development experience and your portfolio.',
        },
        {
          title: 'Guided sessions',
          copy: 'Live demonstrations, coding, problem solving, debugging and development support.',
        },
        {
          title: 'Technology career skills',
          copy: 'Full stack programming and project skills for interviews, internships, freelancing and software development.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the MERN Stack course in Phagwara?',
        a: 'techcadd runs MERN Stack over 6 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the MERN Stack course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the MERN Stack course?',
        a: 'Graduate / Final-year. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the MERN Stack course?',
        a: 'Graduates move into MERN Stack Developer, Frontend Developer, Backend Developer, Full Stack Developer and similar roles. MERN is the stack most Indian startups actually build on, which makes it the fastest route from training to a paying developer role.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'MERN Stack Developer roles start around ₹25,000 – ₹42,000 a month for a fresher with a working portfolio, rising to ₹6–12 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Who can join this course?',
        a: 'Anyone comfortable with basic programming. If you have never written JavaScript, start with Full Stack Web Development instead — it covers the fundamentals first.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic programming logic and some HTML/CSS exposure. The first modules cover web fundamentals and the JavaScript you need.',
      },
    ],
    whyNow: {
      title: 'MERN Stack Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'MERN Stack Developer roles in Punjab start around ₹25,000 – ₹42,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'web-development-course-in-phagwara',
      'java-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'python-course-in-phagwara',
      'c-course-in-phagwara',
      'c-plus-plus-course-in-phagwara',
    ],
    keywords: [
      'best mern stack training in phagwara',
      'mern stack course in phagwara',
      'mern certification courses in phagwara',
      'react node mongodb training in phagwara',
      'full stack javascript classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'mean-stack-course-in-phagwara',
    label: 'MEAN Stack',
    title: 'Best MEAN Stack Course & Training in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'layers',
    duration: '6 Months',
    level: 'Intermediate to Advanced',
    eligibility: 'Graduate / Final-year',
    summary: 'MongoDB, Express, Angular and Node — the enterprise-favoured alternative stack, built around TypeScript throughout.',
    overview: 'Take the first step toward a full-stack career with structured MEAN training in Phagwara. You study MongoDB, Express.js, Angular and Node.js alongside JavaScript, database management, REST APIs and modern web development practice. Suitable for beginners: the track starts at web fundamentals and builds through frontend, backend and database work to a complete application.',
    demand: 'Angular is what enterprise and service companies standardise on, so MEAN skills reach the steadier, better-paid end of the agency market.',
    modules: [
      {
        title: 'Web development fundamentals',
        summary: 'HTML, CSS, JavaScript basics, page structure, responsive design and the fundamentals modern web development needs.',
        topics: ['HTML structure', 'CSS styling', 'Responsive design', 'Web fundamentals'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'JavaScript programming',
        summary: 'Variables, data types, operators, functions, arrays, objects, loops, conditions, ES6 features and asynchronous programming.',
        topics: ['Core syntax', 'Functions & objects', 'ES6 features', 'Async programming'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Angular fundamentals',
        summary: 'Angular architecture, components, templates, directives, data binding, modules, services, routing and forms.',
        topics: ['Components & templates', 'Directives', 'Data binding', 'Routing & forms'],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'Advanced Angular development',
        summary: 'Services, dependency injection, reactive forms, HTTP requests, route guards, authentication concepts and API integration.',
        topics: ['Dependency injection', 'Reactive forms', 'HTTP & interceptors', 'Route guards'],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'Node.js fundamentals',
        summary: 'How Node.js works, building server-side applications, npm, modules, asynchronous operations and backend services.',
        topics: ['Node runtime', 'npm & modules', 'Async operations', 'Backend services'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Express.js & backend development',
        summary: 'Routing, middleware, request and response handling, controllers, authentication, validation and error handling.',
        topics: ['Routing', 'Middleware', 'Controllers', 'Validation & errors'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'MongoDB database',
        summary: 'Collections, documents, CRUD, queries, relationships, indexing and database management for web applications.',
        topics: ['Collections & documents', 'CRUD', 'Queries', 'Indexing'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'MongoDB with Node.js',
        summary: 'Connecting MongoDB to Node applications — schemas, models, validation and working with application data.',
        topics: ['Mongoose schemas', 'Models', 'Validation', 'Data operations'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'REST APIs & JSON',
        summary: 'Building and consuming REST APIs, HTTP methods, JSON handling, connecting frontend to backend and managing responses.',
        topics: ['HTTP methods', 'JSON', 'API design', 'Frontend integration'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Authentication & security',
        summary: 'Registration, login, password handling, authentication workflows, authorisation, tokens and basic security practice.',
        topics: ['Registration & login', 'Password handling', 'JWT & tokens', 'Authorisation'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Git, GitHub & deployment',
        summary: 'Version control, repository management, branches, collaboration and the basics of deploying a web application.',
        topics: ['Git basics', 'Branches', 'Collaboration', 'Deployment'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Projects & career preparation',
        summary: 'Full-stack projects, debugging, API integration, portfolio development and interview-oriented preparation.',
        topics: ['Capstone project', 'Debugging', 'Portfolio', 'Interview preparation'],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Web development and HTML/CSS fundamentals',
      'JavaScript and TypeScript programming',
      'Angular frontend development',
      'Node.js and Express.js backend development',
      'MongoDB and database integration',
      'Full stack projects and deployment skills',
    ],
    tools: [
      'MongoDB',
      'Express.js',
      'Angular',
      'Node.js',
      'JavaScript',
      'HTML5 & CSS3',
      'VS Code',
      'Git & GitHub',
      'REST APIs & JSON',
      'MongoDB Compass',
      'npm',
      'Postman',
      'Authentication & JWT',
      'Web Application Deployment',
    ],
    roles: [
      'MEAN Stack Developer',
      'Full Stack Developer',
      'Frontend Developer',
      'Backend Developer',
      'Angular Developer',
      'Node.js Developer',
      'Web Application Developer',
      'Foundation in Full-Stack Development',
    ],
    roleDetails: [
      {
        role: 'MEAN Stack Developer',
        copy: 'Build entire web applications with MongoDB, Express.js, Angular and Node.js.',
      },
      {
        role: 'Full Stack Developer',
        copy: 'Develop both the frontend interface and the backend systems behind modern web applications.',
      },
      {
        role: 'Frontend Developer',
        copy: 'Design responsive, interactive interfaces with Angular, JavaScript, HTML and CSS.',
      },
      {
        role: 'Backend Developer',
        copy: 'Build server-side applications, RESTful APIs, authentication systems and database layers with Node.js and Express.js.',
      },
      {
        role: 'Angular Developer',
        copy: 'Build scalable, dynamic web applications using Angular.',
      },
      {
        role: 'Node.js Developer',
        copy: 'Develop backend services, REST APIs and server-side applications with Node.js.',
      },
      {
        role: 'Web Application Developer',
        copy: 'Design, build, integrate and maintain complete database-driven web applications.',
      },
      {
        role: 'Foundation in Full-Stack Development',
        copy: 'Build a grounding in modern web technologies and move a step further into full-stack development.',
      },
    ],
    hiring: [
      'Enterprise and service companies',
      'IT consultancies',
      'Product teams on Angular',
      'Remote contract work',
    ],
    nextSteps: ['TypeScript in depth', 'NgRx state management', 'Cloud & DevOps', 'System design'],
    industries: ['Product companies', 'Enterprise software', 'SaaS', 'IT services'],
    salary: {
      role: 'MEAN Stack Developer',
      summary: 'Builds structured, TypeScript-first web applications on Angular and Node.',
      starting: '₹3–5 LPA',
      after2: '₹6–11 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹3–5 LPA',
          after2: '₹6–11 LPA',
          scale: { fresher: 4, after2: 8.5 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–15.5 LPA',
          scale: { fresher: 5.6, after2: 11.9 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4.5–8 LPA',
          after2: '₹9.5–17 LPA',
          scale: { fresher: 6.2, after2: 13.18 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after MEAN Stack?',
        a: 'Graduates move into MEAN Stack Developer, Full Stack Developer, Frontend Developer, Backend Developer and similar roles. Angular is what enterprise and service companies standardise on, so MEAN skills reach the steadier, better-paid end of the agency market.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹25,000 – ₹42,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Angular frontend over a REST API',
        summary: 'Components, routing and reactive forms, fed by data fetched over HTTP.',
        tech: ['Angular', 'TypeScript', 'REST APIs'],
        level: 'Beginner',
        skills: ['Components', 'Routing', 'HTTP'],
      },
      {
        name: 'Authenticated Express API',
        summary: 'Express and MongoDB behind registration, login, token sessions and protected routes.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
        level: 'Intermediate',
        skills: ['REST design', 'Authentication', 'Validation'],
      },
      {
        name: 'Full stack MEAN capstone',
        summary: 'An Angular front end on an Express API and MongoDB, version-controlled and deployed.',
        tech: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
        level: 'Advanced',
        skills: ['Full stack architecture', 'Deployment', 'Git workflow'],
      },
    ],
    instructor: {
      heading: 'Why learn MEAN stack development with us?',
      intro: 'Angular rewards structure, and the stack only makes sense once one language carries you from a form field to a database write. The sessions follow that path, so every concept arrives attached to something already running.',
      points: [
        {
          title: 'Learning through practice',
          copy: 'Apply theory through coding practice, assignments, API integration and full-stack projects.',
        },
        {
          title: 'Beginner-level program',
          copy: 'Start from the basics and progress through frontend, backend, database and application development.',
        },
        {
          title: 'Industry relevance',
          copy: 'Train on the tools teams actually use — MongoDB, Express.js, Angular, Node.js, Git, GitHub, Postman and APIs.',
        },
        {
          title: 'Real-world projects',
          copy: 'Build applications that strengthen development skill, problem solving and your portfolio.',
        },
        {
          title: 'Guided sessions',
          copy: 'Well-structured sessions with live coding, debugging and doubt solving.',
        },
        {
          title: 'Technology career skills',
          copy: 'Frontend, backend, database, API and deployment skills for internships, interviews and freelancing.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the MEAN Stack course in Phagwara?',
        a: 'techcadd runs MEAN Stack over 6 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the MEAN Stack course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the MEAN Stack course?',
        a: 'Graduate / Final-year. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the MEAN Stack course?',
        a: 'Graduates move into MEAN Stack Developer, Full Stack Developer, Frontend Developer, Backend Developer and similar roles. Angular is what enterprise and service companies standardise on, so MEAN skills reach the steadier, better-paid end of the agency market.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'MEAN Stack Developer roles start around ₹25,000 – ₹42,000 a month for a fresher with a working portfolio, rising to ₹6–11 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. MEAN Stack Development begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'MEAN Stack Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'MEAN Stack Developer roles in Punjab start around ₹25,000 – ₹42,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'mern-stack-course-in-phagwara',
      'web-development-course-in-phagwara',
      'java-course-in-phagwara',
      'python-course-in-phagwara',
      'c-course-in-phagwara',
      'c-plus-plus-course-in-phagwara',
    ],
    keywords: [
      'best mean stack course in phagwara',
      'mean stack training in phagwara',
      'angular and node js classes in phagwara',
      'mongodb express angular node course in phagwara',
      'full stack javascript training in phagwara',
    ],
  }),

  makeCourse({
    slug: 'php-full-stack-course-in-phagwara',
    label: 'PHP Full Stack',
    title: 'Best PHP Full Stack Course & Training in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'database',
    duration: '5 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary: 'PHP and MySQL power a huge share of the live web — learn the language, a framework and real database-driven development.',
    overview: 'Kick-start your web development career with structured PHP Full Stack training in Phagwara. You learn frontend technologies, backend programming in PHP, MySQL databases, APIs and practical project development. Built for beginners and aspiring developers: the track starts at how the web works and finishes with dynamic, database-driven applications you have built yourself.',
    demand: 'PHP and Laravel still run most small-business websites, and local agencies in Phagwara and Jalandhar hire for it consistently rather than in waves.',
    modules: [
      {
        title: 'Web development fundamentals',
        summary: 'How websites work — HTML and CSS basics, browsers, servers, responsive layouts and core web concepts.',
        topics: ['How the web works', 'Browsers & servers', 'HTML basics', 'Responsive layout'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'HTML & CSS',
        summary: 'Structured pages with HTML and responsive interfaces with CSS — layouts, forms, navigation, Flexbox and Grid.',
        topics: ['Page structure', 'Forms & navigation', 'Flexbox', 'CSS Grid'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'JavaScript fundamentals',
        summary: 'Variables, functions, conditions, loops, arrays, objects, DOM manipulation and events for interactive pages.',
        topics: ['Core syntax', 'Arrays & objects', 'DOM manipulation', 'Events'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Frontend development',
        summary: 'User-friendly interfaces built with responsive design principles, reusable components, forms and validation.',
        topics: ['Responsive design', 'Reusable components', 'Forms', 'Client-side validation'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'PHP fundamentals',
        summary: 'PHP syntax, variables, data types, operators, conditions, loops, functions, arrays, forms, sessions and cookies.',
        topics: ['Syntax & types', 'Functions & arrays', 'Form handling', 'Sessions & cookies'],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'Object-oriented PHP',
        summary: 'Classes, objects, constructors, inheritance, polymorphism, encapsulation and abstraction for organised applications.',
        topics: ['Classes & objects', 'Constructors', 'Inheritance & polymorphism', 'Encapsulation'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'MySQL & database management',
        summary: 'Database concepts and MySQL in practice — creating tables, inserting, retrieving, updating and deleting records.',
        topics: ['Tables & schemas', 'SELECT & queries', 'Joins', 'Relational design'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'PHP & MySQL connectivity',
        summary: 'Connecting PHP to MySQL and building database-driven features — registration, login, CRUD, search and data management.',
        topics: ['Database connection', 'CRUD operations', 'Registration & login', 'Search'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'PHP framework development',
        summary: 'An introduction to Laravel — routing, controllers, models, views, forms, authentication and MVC architecture.',
        topics: [
          'MVC architecture',
          'Routing & controllers',
          'Models & views',
          'Laravel authentication',
        ],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'APIs & JSON',
        summary: 'How applications communicate through APIs, exchange data as JSON, and connect a frontend to backend services.',
        topics: ['REST concepts', 'JSON', 'Consuming APIs', 'Frontend integration'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Authentication & web security',
        summary: 'Login systems, sessions, user roles, form validation, password handling and essential security practice.',
        topics: ['Login & sessions', 'User roles', 'Server-side validation', 'Password handling'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Projects & career preparation',
        summary: 'Full stack projects, debugging, portfolio development, Git workflows and interview-oriented preparation.',
        topics: ['Capstone project', 'Debugging', 'Git workflow', 'Interview preparation'],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Frontend development fundamentals',
      'Core PHP programming',
      'MySQL database management',
      'Backend development and authentication',
      'APIs, Git and deployment',
      'Full stack projects and development skills',
    ],
    tools: [
      'HTML5 & CSS3',
      'JavaScript',
      'PHP',
      'MySQL',
      'Laravel',
      'Bootstrap',
      'VS Code',
      'Git & GitHub',
      'REST APIs & JSON',
      'phpMyAdmin',
      'CRUD Operations',
      'Responsive Web Design',
    ],
    roles: [
      'PHP Developer',
      'Full Stack Developer',
      'Backend Developer',
      'Web Developer',
      'Laravel Developer',
      'MySQL Database Developer',
      'Software Developer',
    ],
    roleDetails: [
      {
        role: 'PHP Developer',
        copy: 'Build dynamic websites, server-side applications, APIs and backend solutions using PHP.',
      },
      {
        role: 'Full Stack Developer',
        copy: 'Work across frontend, backend, databases and application functionality to deliver complete web solutions.',
      },
      {
        role: 'Backend Developer',
        copy: 'Create server-side applications, database-driven systems, APIs and business logic.',
      },
      {
        role: 'Web Developer',
        copy: 'Design and build responsive, interactive, dynamic websites across frontend and backend.',
      },
      {
        role: 'Laravel Developer',
        copy: 'Build structured, scalable applications with the Laravel framework and MVC architecture.',
      },
      {
        role: 'MySQL Database Developer',
        copy: 'Manage application databases, queries, records, relationships and data-driven functionality.',
      },
      {
        role: 'Software Developer',
        copy: 'Apply programming, database, API and application skills to build and maintain software.',
      },
    ],
    hiring: [
      'Web agencies and studios',
      'E-commerce and CMS teams',
      'Freelance website maintenance',
      'In-house IT teams',
    ],
    nextSteps: ['Laravel in depth', 'REST API design', 'Cloud & DevOps', 'JavaScript frameworks'],
    industries: ['Digital agencies', 'IT services', 'E-commerce', 'Freelance & contract work'],
    salary: {
      role: 'PHP Developer',
      summary: 'Builds and maintains database-driven websites and Laravel applications.',
      starting: '₹2–3.5 LPA',
      after2: '₹4.5–8 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–3.5 LPA',
          after2: '₹4.5–8 LPA',
          scale: { fresher: 2.9, after2: 6.25 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3–5 LPA',
          after2: '₹6.5–11 LPA',
          scale: { fresher: 4.06, after2: 8.75 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3.5–5.5 LPA',
          after2: '₹7–12.5 LPA',
          scale: { fresher: 4.5, after2: 9.69 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after PHP Full Stack?',
        a: 'Graduates move into PHP Developer, Full Stack Developer, Backend Developer, Web Developer and similar roles. PHP and Laravel still run most small-business websites, and local agencies in Phagwara and Jalandhar hire for it consistently rather than in waves.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Dynamic website with admin panel',
        summary: 'A content-driven site with a protected admin area, backed by MySQL.',
        tech: ['PHP', 'MySQL', 'Bootstrap'],
        level: 'Beginner',
        skills: ['CRUD', 'Sessions', 'Templating'],
      },
      {
        name: 'User authentication system',
        summary: 'Registration, login, roles and password handling built the way a real application needs it.',
        tech: ['PHP', 'MySQL'],
        level: 'Intermediate',
        skills: ['Authentication', 'Validation', 'Security practice'],
      },
      {
        name: 'Laravel eCommerce application',
        summary: 'Products, cart and orders on an MVC structure, with authentication and a JSON API.',
        tech: ['Laravel', 'PHP', 'MySQL', 'REST APIs'],
        level: 'Advanced',
        skills: ['MVC', 'Eloquent models', 'API design'],
      },
    ],
    instructor: {
      heading: 'Why learn PHP full stack development with us?',
      intro: 'PHP is still what a large share of the web runs on, and it is best learned by shipping something that stores real data. Every concept here arrives attached to a page, a form or a table you are already working on.',
      points: [
        {
          title: 'Learning by practicing',
          copy: 'Move beyond theory with coding exercises, assignments, practical tasks and project-based development.',
        },
        {
          title: 'Beginner-friendly program',
          copy: 'Start from fundamental web concepts and progress toward frontend, backend, database and full stack work.',
        },
        {
          title: 'Industry-relevant tools',
          copy: 'Work with PHP, MySQL, Laravel, JavaScript, Git, GitHub, APIs and Bootstrap.',
        },
        {
          title: 'Real-world projects',
          copy: 'Build websites and applications that sharpen problem solving and strengthen your portfolio.',
        },
        {
          title: 'Guided sessions',
          copy: 'Structured classes with practical demonstrations, coding practice, debugging and doubt solving.',
        },
        {
          title: 'Technology career skills',
          copy: 'Programming and project skills for internships, interviews, freelancing and professional development roles.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the PHP Full Stack course in Phagwara?',
        a: 'techcadd runs PHP Full Stack over 5 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the PHP Full Stack course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the PHP Full Stack course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the PHP Full Stack course?',
        a: 'Graduates move into PHP Developer, Full Stack Developer, Backend Developer, Web Developer and similar roles. PHP and Laravel still run most small-business websites, and local agencies in Phagwara and Jalandhar hire for it consistently rather than in waves.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'PHP Developer roles start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio, rising to ₹4.5–8 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. PHP Full Stack begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'PHP Full Stack Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'PHP Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'web-development-course-in-phagwara',
      'mern-stack-course-in-phagwara',
      'web-designing-course-in-phagwara',
      'python-course-in-phagwara',
      'java-course-in-phagwara',
      'c-course-in-phagwara',
    ],
    keywords: [
      'best php full stack course in phagwara',
      'php full stack training in phagwara',
      'php certification courses in phagwara',
      'laravel training phagwara',
      'php mysql classes in phagwara',
    ],
  }),
]
