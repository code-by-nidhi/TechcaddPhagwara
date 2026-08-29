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
    title: 'Web Designing Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'palette',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn web designing from first tag to a live site — HTML, CSS, responsive layouts, JavaScript, UI design and real client projects, with placement assistance.',
    overview:
      'Techcadd’s Web Designing Course in Phagwara is a professionally oriented course where students, graduates, job aspirants and beginners are taught to build modern websites with HTML, CSS, JavaScript, responsive design, layouts, forms and UI design. The training is oriented to practical knowledge rather than theory: you learn through coding exercises, assignments and actual projects, seeing how websites are designed, built and optimised for different devices instead of reading about it. The approach is beginner-friendly throughout, developing design thinking, coding, layout and problem-solving together — by the end you can design, build, debug and ship a website of your own.',
    demand:
      'Every business in Phagwara now needs a site that works on a phone, and the agencies serving them cannot find designers who can build a responsive layout properly rather than drag one together.',
    modules: [
      {
        title: 'Web Designing Fundamentals',
        summary:
          'Grow as a designer from scratch, building simple pages that exercise both your design eye and your coding logic.',
        topics: [
          'HTML structure, tags, elements and attributes',
          'CSS selectors, properties and styling',
          'Colours, fonts, images and layouts',
          'Writing clear and understandable pages',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'HTML, CSS & Responsive Design',
        summary:
          'Understand page structure properly and learn how professional websites are actually assembled.',
        topics: [
          'Semantic HTML',
          'Flexbox and CSS Grid',
          'Responsive layouts for mobile, tablet and desktop',
          'Building flexible website sections',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'UI Design & User Experience',
        summary:
          'Learn what professional website interfaces are made of, and how to build them consistently.',
        topics: [
          'Typography, colour, spacing and visual hierarchy',
          'Navigation, buttons, cards and components',
          'Structuring pages for the best user experience',
          'Building beautiful, consistent interfaces',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'JavaScript, Forms & Interactivity',
        summary:
          'Learn how a website stops being a poster and starts responding to the person using it.',
        topics: [
          'JavaScript fundamentals',
          'Variables, conditions, functions and events',
          'Forms and user input',
          'Basic DOM manipulation',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Modern CSS & Website Layouts',
        summary:
          'Learn how modern sites are built beyond basic styling, and make components you can reuse.',
        topics: [
          'Advanced Flexbox and CSS Grid',
          'Responsive navigation and sections',
          'Animations, transitions and visual effects',
          'Reusable design components',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Web Design for Business Websites',
        summary:
          'Design real-world sites — the pages a business actually pays for and the layouts that convert.',
        topics: [
          'The structure of a business website',
          'Landing pages and service pages',
          'Calls-to-action and conversion in layout',
          'Organising content visually',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Web Designing Using AI',
        summary:
          'Learn how AI tooling has changed how sites get built — and how to use it without depending on it.',
        topics: [
          'AI assistants for learning and fixing HTML, CSS and JavaScript',
          'Generating and improving ideas through effective prompts',
          'Using AI without over-reliance',
          'Faster design, coding, debugging and documentation',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Web Projects, Git & Designer Workflow',
        summary:
          'Apply your skills the way a studio does — version controlled, organised and readable by someone else.',
        topics: [
          'Building sites with HTML, CSS and JavaScript together',
          'Git and version control workflow',
          'Website organisation and development workflow',
          'Writing clean, reusable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Web Projects & Career Preparation',
        summary:
          'Apply everything in one end-to-end site, then learn to defend your design choices out loud.',
        topics: [
          'An end-to-end web designing project',
          'Design assignments from real-world scenarios',
          'Explaining your design choices in interviews',
          'Careers in web design, UI, front-end and freelancing',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build and style complete web pages with semantic HTML and CSS',
      'Lay out responsive interfaces with Flexbox and CSS Grid',
      'Apply typography, colour, spacing and visual hierarchy deliberately',
      'Add interactivity, forms and DOM behaviour with JavaScript',
      'Test and debug a site across phone, tablet and desktop',
      'Ship an end-to-end website you can defend in an interview',
    ],
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Tailwind CSS',
      'VS Code',
      'Git & GitHub',
      'Figma',
      'Canva',
      'Chrome DevTools',
      'WordPress',
      'Responsive Web Design',
      'UI/UX Design',
      'REST APIs',
      'ChatGPT for Web Designing',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'The mix of visual design and coding makes web designing an easy place to begin. You will cover HTML, CSS, layouts, colour, typography, responsive design, forms and basic JavaScript — a useful skill to carry alongside your academics.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Websites should be learned by building them, not from a textbook. Whatever your field — computer science, engineering, commerce or management — coding exercises in HTML, CSS, JavaScript, responsive layouts and UI design strengthen your college projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Basic HTML is not much use to an employer. They want candidates who understand a design requirement, build a working layout and fix what breaks. Design thinking, responsive skill, debugging and a practical portfolio are what get you hired in Phagwara.',
      },
      {
        label: 'Working Professionals',
        copy: 'In IT, marketing, business, design, content or operations? Web designing lets you build and manage sites yourself. HTML, CSS, responsive design, JavaScript, UI and layout become an addition to your current skill set, not a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer. Knowing how sites, landing pages, user experience and online presence fit together makes briefing a designer far easier — and makes you a better judge of what you get back.',
      },
      {
        label: 'Aspiring Designers & Freelancers',
        copy: 'A good base for designing digital experiences: HTML, CSS, JavaScript, responsive and UI design, and project work you can later bill for — business sites, landing pages, portfolios, e-commerce pages and blogs.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Web designing skills are in high demand',
        copy: 'It goes well beyond making something look good. Websites, landing pages, portfolios, e-commerce interfaces and responsive digital products are all in demand, and HTML, CSS, JavaScript, responsive and UI design underpin all of them.',
      },
      {
        title: 'Learning how web designing actually works',
        copy: 'HTML tags alone are not web design. Visual thinking, layout structure, coding logic and how a site is built — typography, Flexbox and Grid, responsive design, components, forms, the DOM, UI/UX principles, testing and version control.',
      },
      {
        title: 'Practical training is how design is learned',
        copy: 'Video lessons help. Designing layouts, writing the HTML and CSS, making it responsive and solving real site problems teaches far more. Hands-on assignments are where responsive development and UI creation actually stick.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, this leads into web design, UI design, front-end development, website development, responsive design, WordPress or freelancing.',
      },
    ],
    whyNow: {
      title: 'Learn Web Designing Skills You Can Put Into Practice',
      points: [
        'Real projects take you past theory into a portfolio that demonstrates what you can build.',
        'A strong portfolio shows HTML, CSS, responsive design, JavaScript, UI and website development in one place.',
        'Web Designer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'Focus on building websites and solving design problems rather than memorising tags.',
      ],
    },
    roles: [
      'Web Designer',
      'Front-End Developer',
      'UI Designer',
      'Website Developer',
      'Responsive Web Designer',
      'WordPress Web Designer',
      'Web Designer with AI',
      'Freelance Web Designer',
    ],
    roleDetails: [
      {
        role: 'Web Designer',
        copy: 'Design and build websites with HTML, CSS, JavaScript and responsive design — page structure, layouts, stylesheets, forms and UI. The most common path after this course.',
      },
      {
        role: 'Front-End Developer',
        copy: 'Build responsive, user-friendly interfaces with HTML, CSS, JavaScript and modern front-end tooling.',
      },
      {
        role: 'UI Designer',
        copy: 'Design the interface itself — typography, colour, spacing and layout — into something consistent and genuinely usable.',
      },
      {
        role: 'Website Developer',
        copy: 'Build complete websites for businesses, professionals and organisations using HTML, CSS, JavaScript, responsive design and CMS platforms.',
      },
      {
        role: 'Responsive Web Designer',
        copy: 'Build sites that work properly on desktop, tablet and phone through flexible layouts, responsive CSS and media queries.',
      },
      {
        role: 'WordPress Web Designer',
        copy: 'Build and customise WordPress sites — themes, page builders, layouts, content sections and the customisation businesses ask for.',
      },
      {
        role: 'Web Designer with AI',
        copy: 'Combine design skill with AI tooling for better layouts, coding help and faster debugging. AI assists — design fundamentals are what let you judge its output.',
      },
      {
        role: 'Freelance Web Designer',
        copy: 'Build a freelance practice designing sites for businesses in Phagwara, Jalandhar and beyond, growing a portfolio from real client work.',
      },
    ],
    hiring: [
      'Software development companies building websites, applications and business solutions',
      'Digital marketing agencies needing websites, landing pages and UI designs',
      'IT startups and technology companies building websites and digital products',
      'E-commerce companies needing responsive online stores and interfaces',
    ],
    nextSteps: [
      'Front-end development with React',
      'Full-stack web development',
      'UI/UX design in depth',
      'WordPress & CMS development',
    ],
    industries: ['Digital agencies', 'IT startups', 'E-commerce', 'Software development'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Web Designer',
      summary:
        'Designs and builds responsive websites and interfaces. Earnings depend on your design skills, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Web Designer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Web Design & Front-End',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Web Designing',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after web designing?',
        a: 'Web Designer, Front-End Developer, UI Designer, Website Developer and WordPress Designer. Web design sits behind business sites, digital agencies, startups, e-commerce and online services, which is what makes it such a portable first skill.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of delivery experience. Delhi/NCR runs higher, and front-end specialists move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — web design is one of the easiest skills to freelance with locally, because every business needs a site. Freelance income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have shipped real client sites.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software development companies, digital marketing agencies needing sites and landing pages, IT startups building digital products, and e-commerce companies needing responsive storefronts — plus freelance and remote work.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Web designing is the foundation under front-end development, full-stack and UI/UX tracks, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Web Designing & Layout Thinking',
        summary:
          'Design a page that builds your design thinking across HTML structure, CSS styling, colour, typography, spacing, sections and responsive layout. You build it yourself, so you know how every part works.',
        tech: ['HTML', 'CSS'],
        level: 'Beginner',
        skills: ['Layout Thinking', 'Web Designing'],
      },
      {
        name: 'Responsive Business Website',
        summary:
          'Build a business site with navigation, hero, service sections, forms, buttons and a responsive layout — and see how the sections combine into something professional.',
        tech: ['HTML', 'CSS'],
        level: 'Beginner',
        skills: ['Responsive Design', 'Web Design'],
      },
      {
        name: 'Portfolio Website Project',
        summary:
          'Design a portfolio site presenting your skills, projects, services and contact details — practical work in organising content so a reader finds what matters.',
        tech: ['HTML', 'CSS'],
        level: 'Intermediate',
        skills: ['Portfolio Design', 'UI Design'],
      },
      {
        name: 'Interactive JavaScript Website',
        summary:
          'Build an interactive site using JavaScript to add functionality — how a page responds to a user, handles forms and drives dynamic elements.',
        tech: ['JavaScript', 'DOM'],
        level: 'Intermediate',
        skills: ['Interactivity', 'Web Development'],
      },
      {
        name: 'Landing Page Design Project',
        summary:
          'Build a professional landing page from a real business need: structuring content, creating visual hierarchy, placing calls-to-action and making it work on every device.',
        tech: ['HTML', 'CSS'],
        level: 'Intermediate',
        skills: ['Landing Page', 'Conversion Layout'],
      },
      {
        name: 'Web Designing Problem-Solving Project',
        summary:
          'Turn real website requirements into working pages. Learn to solve design problems, build better layouts, respond to different devices and write clean code.',
        tech: ['CSS', 'Responsive Design'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'AI & Web Designing Project',
        summary:
          'Explore where web designing meets AI on a practical project — how AI assists with design, coding, content structure and modern UI development.',
        tech: ['AI Tools', 'UI Design'],
        level: 'Advanced',
        skills: ['Web Technologies', 'AI-Assisted Design'],
      },
      {
        name: 'End-to-End Web Designing Capstone',
        summary:
          'Use everything to build a complete website: ideate, design, develop, test responsiveness, debug and present the finished site as your portfolio piece.',
        tech: ['Web Design', 'Website Development'],
        level: 'Advanced',
        skills: ['Website Development', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Translate a real business objective into a design concept — the audience, the requirements, the page structure, and the layout, colour and typography that suit them.',
        artefact: 'Website Design & Project Brief',
      },
      {
        title: 'Build',
        copy: 'Build the site with a trainer beside you: responsive layouts, real pages, interactivity, forms, and testing across screen sizes with modern tooling.',
        artefact: 'Responsive Website & Front-End Development',
      },
      {
        title: 'Present & Optimise',
        copy: 'Put the site into your portfolio and present it — the design concept, structure, responsive layouts, interface choices, and how you tested and optimised it.',
        artefact: 'End-to-End Website Design & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training programme',
        copy: 'Practical subjects — HTML, CSS, JavaScript, responsive design, UI/UX, layout creation, forms and web development — that turn fundamentals into working skill.',
      },
      {
        title: 'Learn by building real projects',
        copy: 'Practical projects and exercises: creating responsive layouts, writing code, designing interfaces, debugging pages and building genuinely useful websites.',
      },
      {
        title: 'Create a web design portfolio',
        copy: 'Industry-relevant websites you can put on a CV — work that demonstrates your design ability in interviews and job applications.',
      },
      {
        title: 'Career guidance and placement services',
        copy: 'CV help, technical interview practice, project presentation and career development across web design, UI, front-end, web development and freelancing.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who make web designing easy to follow',
        copy: 'HTML, CSS, JavaScript, layout concepts and design principles explained with simple, practical examples rather than definitions — which is what a beginner actually needs.',
      },
      {
        title: 'Learning through practical projects',
        copy: 'Projects make the theory mean something. You learn through real work covering websites, responsive layouts, UI design, forms, JavaScript and front-end development.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Design and coding get much easier when you can clear a doubt in real time and practise the concept while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with a project portfolio covering website layouts, responsive design, UI components, JavaScript interaction and front-end development — real examples to discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because web design spans agencies, startups, e-commerce and online business, guidance is career-oriented: resume building, mock interviews, project presentation and portfolio direction.',
      },
      {
        title: 'Web designing taught the practical way',
        copy: 'The goal is solving a website requirement with design and coding logic, not copying pages. That means practical HTML, CSS, responsive design, JavaScript, UI and front-end technologies.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Web designing curriculum',
          techcadd:
            'Industry-focused training covering HTML, CSS, JavaScript, responsive design, UI/UX, layouts and advanced concepts',
          others: 'Often focuses mainly on basic HTML and CSS',
        },
        {
          feature: 'Learning style',
          techcadd:
            'Practical, design and coding-focused learning built around real website requirements',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work on website assignments and project-based tasks to strengthen design and problem-solving skills',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Designing skills',
          techcadd:
            'Focus on layout design, responsive development, UI, debugging and writing clean front-end code',
          others: 'May cover concepts without enough website practice',
        },
        {
          feature: 'Advanced web design',
          techcadd:
            'Exposure to responsive layouts, JavaScript, UI tools, APIs and modern website development',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular design and coding exercises designed to improve logical thinking and development confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help students showcase their web designing skills',
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
            'Trainer guidance to help students understand design concepts and solve coding challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a web designing institute in Phagwara, ask how much coding and design practice is included, whether students build real websites, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn basic web designing skills',
        blurb:
          'Step by step through coding and website projects, until building a page and making it responsive stops feeling difficult.',
        skills: ['HTML', 'CSS', 'VS Code', 'Basic Git', 'Responsive design', 'AI-assisted coding'],
        recommendedFor:
          'Web Design Trainee, Web Design Intern, Junior Web Designer, and anyone starting a web designing course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Become good at web designing',
        blurb:
          'Work with JavaScript, responsive layouts, UI design, forms and website development, with advanced coding and design skills.',
        skills: ['JavaScript', 'Bootstrap', 'Tailwind CSS', 'Git & GitHub', 'Figma', 'WordPress'],
        recommendedFor: 'Web Designer, Junior Web Developer, Front-End Developer, UI Designer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master web designing',
        blurb:
          'Responsive development, JavaScript, UI/UX, modern CSS, APIs and WordPress — building complete website projects end to end.',
        skills: ['Figma', 'WordPress', 'REST APIs', 'Chrome DevTools', 'Tailwind CSS', 'AI tools'],
        recommendedFor:
          'Web Designer, Front-End Developer, UI Designer, Website Developer, Freelance Web Designer, and the advanced front-end path.',
      },
    ],
    capabilities: [
      { capability: 'HTML fundamentals', included: [true, true, true] },
      { capability: 'CSS fundamentals', included: [true, true, true] },
      { capability: 'Website layouts', included: [true, true, true] },
      { capability: 'Responsive design', included: [true, true, true] },
      { capability: 'Flexbox & CSS Grid', included: [true, true, true] },
      { capability: 'Forms & components', included: [true, true, true] },
      { capability: 'Basic UI design', included: [true, true, true] },
      { capability: 'Advanced CSS', included: [false, true, true] },
      { capability: 'JavaScript fundamentals', included: [false, true, true] },
      { capability: 'DOM & interactivity', included: [false, true, true] },
      { capability: 'Bootstrap / Tailwind CSS', included: [false, true, true] },
      { capability: 'WordPress', included: [false, true, true] },
      { capability: 'Git & GitHub', included: [false, true, true] },
      { capability: 'Figma & UI workflow', included: [false, false, true] },
      { capability: 'API integration', included: [false, false, true] },
      { capability: 'Advanced responsive design', included: [false, false, true] },
      { capability: 'Advanced projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course lays the foundation in design and coding. The 6-month track includes that and adds JavaScript, responsive development, UI and website development. The 9-month programme advances into front-end development, APIs, UI workflows and complete website projects. Choose 3 months for HTML, CSS, layouts and responsive basics; 6 months to add JavaScript, UI design and real website development; 9 months for advanced front-end, UI/UX, APIs and WordPress.',
    instructor: {
      heading: 'Why learn web designing with us?',
      intro:
        'Web designing is not a list of HTML tags. The focus here is on how a site is structured, how it is designed, and how real problems get solved with modern web technology — through practical coding, assignments and projects.',
      points: [
        {
          title: 'Design and code together',
          copy: 'Layout thinking and CSS are taught as one subject, because separating them is what produces designers who cannot build and coders who cannot design.',
        },
        {
          title: 'Responsive from the start',
          copy: 'Every project is tested on a phone. Responsive design is a habit here, not a chapter near the end.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering layout, business sites, portfolios, interactivity, landing pages, problem solving, AI and a capstone site you own.',
        },
        {
          title: 'The front-end path stays open',
          copy: 'This is the foundation under React, full-stack and UI/UX work — the syllabus is written to lead there rather than stop.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Web Designing Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring web designers learn website design through practical, career-focused training. Students learn HTML, CSS, responsive design, JavaScript, UI concepts, website layouts and real-world web designing with hands-on practice.',
      },
      {
        q: 'Who can join a Web Designing Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start from the basics without prior coding experience, while those with design or development knowledge can strengthen their skills.',
      },
      {
        q: 'Is web designing a good career option for freshers?',
        a: 'Yes. Web designing is used across business websites, digital agencies, startups, e-commerce platforms and online services. After gaining practical skills, freshers can explore roles such as Web Designer, UI Designer, Front-End Developer and Website Developer.',
      },
      {
        q: 'What will I learn in the Web Designing Course?',
        a: 'HTML, CSS, JavaScript, responsive design, Flexbox, CSS Grid, forms, UI design, layouts, website components, basic DOM concepts, debugging, Git and practical website development — plus how modern tools fit into a design workflow.',
      },
      {
        q: 'Is the Web Designing course practical or theory-based?',
        a: 'Learning becomes much easier when you actually create and test webpages. The approach focuses on hands-on coding, website exercises, responsive design, debugging, mini-projects and real website development rather than theory alone.',
      },
      {
        q: 'Will I work on web designing projects during the course?',
        a: 'Yes. Practical learning includes webpage projects, responsive business websites, portfolio sites, landing pages, interactive pages and complete website development projects — which also strengthen your portfolio when applying for jobs or internships.',
      },
      {
        q: 'Can I learn web designing after 12th?',
        a: 'Absolutely. Students can start after 12th, especially if interested in creativity, coding, website development or digital careers. It provides a strong foundation to build on during college and beyond.',
      },
      {
        q: 'Can web designing help me get a job or internship?',
        a: 'Yes, but web designing alone is not enough. Employers also look for practical websites, responsive design skills, UI understanding, coding fundamentals, problem-solving ability and portfolio projects. A job-oriented course helps you build these through practical training and project work.',
      },
      {
        q: 'Does the course include responsive web design?',
        a: 'Responsive design is a core part of modern website development. The course covers responsive layouts, Flexbox, CSS Grid, media queries and mobile-friendly design, so your sites work across different screen sizes.',
      },
      {
        q: 'How do I choose the best Web Designing Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical coding sessions, trainer experience, project work, responsive design practice, tools covered, UI/UX concepts, doubt support, career guidance and placement assistance. A good course should take you from HTML and CSS basics to actually designing and building websites.',
      },
    ],
    relatedCourses: [
      'web-development-course-in-phagwara',
      'mern-stack-course-in-phagwara',
      'graphic-designing-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
      'python-course-in-phagwara',
    ],
    keywords: [
      'web designing course in phagwara',
      'web designing courses in phagwara',
      'web designing training institute in phagwara',
      'web designing classes in phagwara',
      'web designing course after 12th in phagwara',
      'web designing certification course in phagwara',
    ],
  }),

  makeCourse({
    slug: 'web-development-course-in-phagwara',
    label: 'Web Development',
    title: 'Web Development Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'code',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn web development from first tag to a deployed application — HTML, CSS, JavaScript, responsive design, APIs, databases and live projects, with placement assistance.',
    overview:
      'techcadd’s Web Development Programming Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners how modern websites and web applications are actually built. It covers HTML, CSS, JavaScript, responsive design, frontend development, backend fundamentals, databases, APIs and the tools professionals use day to day. The training is built on practical knowledge rather than theory: you learn through coding exercises, assignments and real projects, seeing how sites are created for businesses, startups and digital platforms. The approach is beginner-friendly throughout, developing design sense, problem solving and coding ability together — by the end you can design, code, test and ship a modern web application.',
    demand:
      'Websites are the one thing every business, agency and startup in Punjab needs, and the gap is not people who know HTML — it is people who can build something responsive, interactive and maintainable.',
    modules: [
      {
        title: 'Web Development Fundamentals',
        summary:
          'Build your knowledge from scratch and grow as a developer step by step, writing clean, well-structured pages.',
        topics: [
          'HTML structure, elements, forms and semantic markup',
          'CSS styling, layouts and responsive design',
          'Website components and navigation',
          'Building simple sites to develop coding confidence',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'CSS, Responsive Design & UI Development',
        summary:
          'Get deeper into website design and learn how modern interfaces are actually put together.',
        topics: [
          'Responsive layouts for different screen sizes',
          'Flexbox, Grid and modern CSS',
          'Spacing, typography and visual hierarchy',
          'Mobile-friendly website interfaces',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'JavaScript & Interactive Websites',
        summary:
          'Find out how a website stops being a document and starts responding to the person using it.',
        topics: [
          'Variables, functions, conditions and loops',
          'DOM manipulation and event handling',
          'Dynamic forms and interactive components',
          'Building functional website features',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Frontend Development, APIs & Web Integration',
        summary:
          'Find out how a frontend connects to real services that somebody else owns.',
        topics: [
          'Modern frontend development concepts',
          'APIs and external data integration',
          'JSON and browser-based requests',
          'Building dynamic website functionality',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Backend & Database Fundamentals',
        summary:
          'Find out how modern sites handle information behind the scenes, and where the data actually lives.',
        topics: [
          'Server-side development basics',
          'Databases and data storage concepts',
          'How frontend and backend communicate',
          'Authentication and web application workflows',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Modern Web Application Development',
        summary:
          'Advance from pages to applications — components, structure and the practices teams actually use.',
        topics: [
          'How modern web applications are structured',
          'Reusable components and application workflows',
          'Frontend frameworks and development practices',
          'Performance and optimisation concepts',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI-Powered Web Development',
        summary:
          'Learn how AI tooling changed the way sites get built — and how to use it without depending on it.',
        topics: [
          'AI assistants for understanding code and troubleshooting',
          'Generating and improving ideas with effective prompts',
          'Using AI ethically without over-reliance',
          'Faster debugging, documentation and development',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Web Projects, Git & Developer Workflow',
        summary:
          'Apply your skills the way a team does — version controlled, organised and maintainable by someone else.',
        topics: [
          'Building projects against real website requirements',
          'Git and version control workflow',
          'Developer workflow and project organisation',
          'Writing clean, reusable, maintainable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Web Projects & Career Preparation',
        summary:
          'Apply everything in one end-to-end project, then learn to explain it the way an interviewer needs to hear it.',
        topics: [
          'An end-to-end web development project',
          'Assignments based on real-world scenarios',
          'Explaining your projects confidently in interviews',
          'Careers in frontend, backend, full stack and freelance work',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build and style complete websites with semantic HTML and modern CSS',
      'Lay out responsive interfaces with Flexbox and Grid',
      'Add interactivity and dynamic behaviour with JavaScript and the DOM',
      'Consume REST APIs and handle JSON in the browser',
      'Understand how backends, databases and authentication fit together',
      'Ship an end-to-end web application you can defend in an interview',
    ],
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'VS Code',
      'Git & GitHub',
      'Bootstrap',
      'Tailwind CSS',
      'React Basics',
      'Node.js Basics',
      'Express.js',
      'MongoDB',
      'MySQL',
      'REST APIs',
      'JSON',
      'Figma Basics',
      'OpenAI & AI Tools',
      'ChatGPT for Development',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Learning HTML, CSS and JavaScript step by step makes it easy to see how modern sites work. You will cover website structure, styling, responsive layouts, JavaScript basics, forms and interactive elements — a useful skill to carry alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Web development should be learned through projects, not textbooks. Whatever your discipline — computer science, engineering, commerce, management or design — coding practice in frontend development, responsive design, JavaScript and databases strengthens your college projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Knowing basic HTML tags does not move an employer. They want candidates who can build responsive, functional, user-friendly sites. Coding skill, design understanding, debugging and a practical portfolio matter far more than collecting certificates.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, marketing, operations, design or business? Web development helps you understand digital products and build them yourself. Website creation, responsive design, JavaScript and APIs become an additional skill, not a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer. Understanding websites, digital platforms, online stores and the technology behind them makes talking to developers far easier and the opportunities far more obvious.',
      },
      {
        label: 'Aspiring Developers & Freelancers',
        copy: 'A strong foundation for building real digital solutions: frontend development, responsive websites, JavaScript, backend basics, databases, APIs and project work you can later bill for.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Web development skills are in demand',
        copy: 'It reaches far beyond software companies. Every business needs a website, landing page, digital platform or web application, and frontend, responsive design, JavaScript, backend and problem-solving skills open several doors at once.',
      },
      {
        title: 'Understanding how modern websites really work',
        copy: 'Not memorising tags or copying templates. How the technologies fit together — HTML structure, CSS and responsive design, JavaScript and interactivity, UI development, forms, APIs, databases, debugging and Git.',
      },
      {
        title: 'Practical training is how development is learned',
        copy: 'Tutorials help. Designing, coding and debugging your own site teaches far more. Hands-on assignments and project work are where responsive design, JavaScript and frontend development actually stick.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, this leads to Frontend Developer, Web Designer, JavaScript Developer, Full Stack Developer, UI Developer, Backend Developer or freelance work.',
      },
    ],
    whyNow: {
      title: 'Gain Web Development Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that shows you can design and build.',
        'A strong portfolio demonstrates responsive design, frontend development, JavaScript, APIs and real functionality.',
        'Web Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'Concentrate on building projects and solving development problems rather than memorising code.',
      ],
    },
    roles: [
      'Web Developer',
      'Frontend Developer',
      'Full Stack Developer',
      'UI Developer',
      'JavaScript Developer',
      'Backend Web Developer',
      'Web Developer with AI',
      'Freelance Web Developer',
    ],
    roleDetails: [
      {
        role: 'Web Developer',
        copy: 'Build responsive websites and digital platforms with modern web technologies — structure, CSS, JavaScript, responsive design and APIs. The most common path after this course.',
      },
      {
        role: 'Frontend Developer',
        copy: 'Work on the visual and interactive side of sites and applications using HTML, CSS, JavaScript and frontend frameworks.',
      },
      {
        role: 'Full Stack Developer',
        copy: 'Handle both ends to build complete applications — interfaces, servers, databases, APIs and everything connecting them.',
      },
      {
        role: 'UI Developer',
        copy: 'Build visually structured, responsive interfaces using layouts, components, CSS frameworks and interactive elements.',
      },
      {
        role: 'JavaScript Developer',
        copy: 'Build interactive sites and dynamic applications with JavaScript, browser APIs, frontend frameworks and application logic.',
      },
      {
        role: 'Backend Web Developer',
        copy: 'Work behind the scenes on reliable server-side systems — databases, APIs, authentication and the technologies underneath them.',
      },
      {
        role: 'Web Developer with AI',
        copy: 'Combine web development with AI tooling for smarter digital experiences. AI assists with coding and debugging — fundamentals are what let you judge its output.',
      },
      {
        role: 'Freelance Web Developer',
        copy: 'Build a freelance practice creating sites and applications for businesses in Phagwara, Jalandhar and further out.',
      },
    ],
    hiring: [
      'Software development companies creating websites, applications and business solutions',
      'Digital agencies and technology companies building websites and online platforms',
      'E-commerce companies building customer-facing web experiences',
      'Startups developing web applications and digital products',
    ],
    nextSteps: [
      'MERN stack development',
      'React in depth',
      'Backend with Node & Express',
      'Full stack application architecture',
    ],
    industries: ['Software development', 'Digital agencies', 'E-commerce', 'Startups'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Web Developer',
      summary:
        'Builds responsive websites and web applications end to end. Earnings depend on your development skills, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Web Developer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Web & Frontend Development',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Web Development',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after web development?',
        a: 'Web Developer, Frontend Developer, UI Developer, JavaScript Developer and Junior Full Stack Developer. Web development sits behind software companies, digital agencies, e-commerce, startups and online business, which is what makes it so portable.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of delivery experience. Delhi/NCR runs higher, and full stack specialists move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — websites and web apps are among the easiest things to freelance with, locally and remotely. Freelance income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have delivered real client work.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software development companies, digital agencies building sites and online platforms, e-commerce companies building customer-facing experiences, and startups developing web products — plus freelance and remote projects.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. Web development is the foundation under MERN, React and full stack tracks, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Responsive Website Development',
        summary:
          'Build a responsive site covering HTML structure, CSS styling, layouts, navigation and mobile responsiveness. You build it yourself, so you understand how every component works.',
        tech: ['HTML', 'CSS'],
        level: 'Beginner',
        skills: ['Responsive Design', 'Web Development'],
      },
      {
        name: 'Interactive JavaScript Website',
        summary:
          'Build a working site using functions, user interactions, DOM manipulation and dynamic content — and see how the frontend pieces combine into one experience.',
        tech: ['JavaScript', 'DOM'],
        level: 'Beginner',
        skills: ['Interactivity', 'Frontend Development'],
      },
      {
        name: 'Modern Business Website',
        summary:
          'Work on a real business site: organising content, building responsive sections and designing a professional digital experience rather than copying an example.',
        tech: ['HTML', 'CSS'],
        level: 'Intermediate',
        skills: ['UI Development', 'Web Design'],
      },
      {
        name: 'Web Application Interface',
        summary:
          'Build an application interface people actually interact with — components, forms, navigation and the interactions that tie them together.',
        tech: ['JavaScript', 'UI Components'],
        level: 'Intermediate',
        skills: ['Frontend Development', 'User Experience'],
      },
      {
        name: 'API Integration Project',
        summary:
          'Learn how a web application talks to external services. Build something that fetches, processes and displays dynamic information over a REST API.',
        tech: ['REST API', 'JSON'],
        level: 'Intermediate',
        skills: ['API Integration', 'JavaScript'],
      },
      {
        name: 'Web Development Problem-Solving Project',
        summary:
          'Turn practical website requirements into working solutions. Improve your development logic, handle browser issues, debug errors and write cleaner frontend code.',
        tech: ['JavaScript', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'AI-Powered Website Project',
        summary:
          'See how web development works alongside AI on a practical project — AI tools, intelligent interfaces and the workflows behind emerging digital experiences.',
        tech: ['AI Tools', 'Modern Web Apps'],
        level: 'Advanced',
        skills: ['Artificial Intelligence', 'AI-Assisted Development'],
      },
      {
        name: 'End-to-End Web Development Capstone',
        summary:
          'Bring everything together: plan, design, code, test, fix what breaks, and present the finished website or application as your portfolio piece.',
        tech: ['Web Development', 'Website Development'],
        level: 'Advanced',
        skills: ['Coding', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a realistic website requirement into a development plan — the business objective, the audience, the user experience and the features it actually needs.',
        artefact: 'Website Planning & Development Brief',
      },
      {
        title: 'Build',
        copy: 'Build modern sites with a trainer beside you: responsive layouts, real sections, navigation, interactive functionality, optimisation and AI-assisted workflows.',
        artefact: 'Responsive Website & Interactive Web Application',
      },
      {
        title: 'Test & Optimise',
        copy: 'Test for responsiveness, functionality and user experience, then present your design choices, development process and optimisation approach.',
        artefact: 'End-to-End Website Development & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training course',
        copy: 'Practical topics — HTML, CSS, JavaScript, responsive design, frontend development, APIs, databases and problem solving — that turn knowledge into industry-relevant skill.',
      },
      {
        title: 'Learn by doing web development projects',
        copy: 'Practise on real websites and applications: responsive layouts, clean code, debugging, interactive features and genuinely useful web solutions.',
      },
      {
        title: 'Develop a web development portfolio',
        copy: 'Industry-relevant projects you can put on a CV — work that demonstrates your design, coding and problem-solving ability in interviews and applications.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume guidance, technical interview preparation, project presentation and career development across frontend, web design, full stack and freelance development.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain web development simply',
        copy: 'Web development is a good place to begin, and it should feel that way. Trainers explain development concepts, coding logic and responsive design with simple, practical examples.',
      },
      {
        title: 'Live and practical projects',
        copy: 'Projects make the concepts mean something. You learn through hands-on work spanning responsive websites, interactive interfaces, APIs, databases and modern applications.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Development becomes far easier when you can clear a doubt in real time — solving a coding issue or fixing a layout while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with a project portfolio demonstrating responsive sites, interactive interfaces, JavaScript applications and modern web solutions — real work to show in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because web development spans software companies, agencies, startups, e-commerce and online business, guidance is career-oriented: resume building, mock interviews and project presentation.',
      },
      {
        title: 'Web development taught the practical way',
        copy: 'The aim is understanding how to build sites and solve development problems, not memorising code — practical HTML, CSS, JavaScript, responsive design, APIs, databases and applications.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Web development curriculum',
          techcadd:
            'Industry-focused training covering HTML, CSS, JavaScript, responsive design, frontend concepts, APIs and modern development',
          others: 'Often focuses mainly on basic website concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, coding-focused learning built around real website requirements',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd: 'Students work on websites and project-based development tasks',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Development skills',
          techcadd: 'Focus on responsive design, coding, debugging and interactive development',
          others: 'May cover concepts without enough practice',
        },
        {
          feature: 'Modern development',
          techcadd: 'Exposure to APIs, frontend tools, AI-assisted workflows and web applications',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd: 'Regular development exercises designed to improve practical confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help students showcase web development skills',
          others: 'Portfolio development may not be a major focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, interview preparation, portfolio support and career-oriented guidance',
          others: 'Career assistance varies between institutes',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Trainer guidance to help understand coding and development challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a web development institute in Phagwara, ask how much practical coding is included, whether students build real projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of web development',
        blurb:
          'Fundamental skills step by step through practical coding and beginner-friendly projects, until building a site stops feeling difficult.',
        skills: ['HTML', 'CSS', 'JavaScript Basics', 'VS Code', 'Responsive design', 'Basic Git'],
        recommendedFor:
          'Web Development Trainee, Frontend Intern, Junior Web Designer, and anyone starting a web development course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in modern web development',
        blurb:
          'Work with JavaScript, APIs, frontend tools, databases and web applications while sharpening your coding and problem-solving.',
        skills: ['JavaScript', 'Bootstrap', 'Tailwind CSS', 'React Basics', 'Node.js Basics', 'APIs'],
        recommendedFor:
          'Frontend Developer, Junior Web Developer, UI Developer, JavaScript Developer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master web application development',
        blurb:
          'Combine frontend with backend concepts, databases, APIs, advanced projects and modern development workflows.',
        skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST API', 'AI tools'],
        recommendedFor:
          'Web Developer, Full Stack Developer, Frontend Developer, Backend Developer, and advanced freelance pathways.',
      },
    ],
    capabilities: [
      { capability: 'HTML & web fundamentals', included: [true, true, true] },
      { capability: 'CSS & responsive design', included: [true, true, true] },
      { capability: 'JavaScript basics', included: [true, true, true] },
      { capability: 'Website layout development', included: [true, true, true] },
      { capability: 'Interactive websites', included: [true, true, true] },
      { capability: 'Advanced JavaScript', included: [false, true, true] },
      { capability: 'APIs & data integration', included: [false, true, true] },
      { capability: 'Frontend framework basics', included: [false, true, true] },
      { capability: 'Backend development', included: [false, true, true] },
      { capability: 'Git & GitHub', included: [false, true, true] },
      { capability: 'Databases', included: [false, false, true] },
      { capability: 'Full stack development', included: [false, false, true] },
      { capability: 'Advanced projects', included: [false, false, true] },
      { capability: 'AI & web development integration', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your website development foundation. The 6-month track includes those fundamentals and moves into JavaScript, APIs, frontend tools and practical applications. The 9-month programme builds further with advanced development, backend concepts, databases and full stack projects. Choose 3 months for structure, CSS, responsive design and JavaScript basics; 6 months to build modern sites, interactive interfaces and API-driven frontends; 9 months to add backend, databases and full stack application development.',
    instructor: {
      heading: 'Why learn web development with us?',
      intro:
        'Web development is about far more than HTML and CSS syntax. The emphasis here is on how sites are designed, coded, tested and developed to solve real requirements — through practical coding, assignments, projects and the technologies the industry actually uses.',
      points: [
        {
          title: 'Build from the first session',
          copy: 'You write and run your own pages immediately. Reading about layout teaches nothing that building one does not teach faster.',
        },
        {
          title: 'Responsive as a habit',
          copy: 'Every project is checked on a phone. Responsive design is how you work here, not a chapter near the end.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering responsive sites, interactivity, business sites, application interfaces, APIs, problem solving, AI and a capstone you own.',
        },
        {
          title: 'The full stack path stays open',
          copy: 'This is the foundation under MERN, React and backend work — the syllabus is written to lead there rather than stop.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Web Development Programming Course in Phagwara at techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn website development through practical, career-focused training. Students learn HTML, CSS, JavaScript, responsive design, frontend concepts, APIs and real-world development with hands-on practice.',
      },
      {
        q: 'Who can join a Web Development Programming Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start from the basics without prior coding experience, while those with some knowledge can strengthen their development skills.',
      },
      {
        q: 'Is web development a good career option for freshers?',
        a: 'Yes. Web development is used across software development, digital agencies, e-commerce, startups and online businesses. After gaining practical skills, freshers can explore roles such as Web Developer, Frontend Developer, UI Developer, JavaScript Developer and Junior Full Stack Developer.',
      },
      {
        q: 'What will I learn in the Web Development Programming Course?',
        a: 'HTML, CSS, responsive design, JavaScript, website layouts, DOM manipulation, APIs, frontend development, backend basics and database concepts — plus how modern AI tools are used in development workflows.',
      },
      {
        q: 'Is the web development course practical or theory-based?',
        a: 'Learning becomes much easier when you design and build sites yourself. The approach focuses on hands-on coding, development exercises, debugging, mini-projects and real-world problem solving rather than theory alone.',
      },
      {
        q: 'Will I work on web development projects during the course?',
        a: 'Yes. Practical learning includes responsive websites, business websites, interactive JavaScript projects, API-based applications and end-to-end development projects — which also strengthen your portfolio when applying for jobs or internships.',
      },
      {
        q: 'Can I learn web development after 12th?',
        a: 'Absolutely. Students can start after 12th, especially if interested in coding, website creation, software development or technology careers. It provides a strong foundation to build on during college and beyond.',
      },
      {
        q: 'Can web development help me get a job or internship?',
        a: 'Yes, but basic web technologies alone are not enough. Employers also look for practical projects, responsive design skills, JavaScript knowledge, problem-solving ability, Git and relevant development skills. A job-oriented course helps you build these through practical training and project work.',
      },
      {
        q: 'Does the course include modern web technologies?',
        a: 'It introduces responsive design, JavaScript, APIs, frontend tools, backend fundamentals and modern development workflows, building a foundation before moving toward advanced frontend or full stack development.',
      },
      {
        q: 'How do I choose the best Web Development Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical coding sessions, trainer experience, project work, development exercises, tools covered, doubt support, career guidance and placement assistance. A good course should take you from website basics to actually building modern web projects.',
      },
    ],
    relatedCourses: [
      'web-designing-course-in-phagwara',
      'mern-stack-course-in-phagwara',
      'mean-stack-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
      'python-course-in-phagwara',
      'java-course-in-phagwara',
    ],
    keywords: [
      'web development course in phagwara',
      'web development courses in phagwara',
      'web development training institute in phagwara',
      'web development programming course in phagwara',
      'web development course after 12th in phagwara',
      'web development certification course in phagwara',
    ],
  }),

  makeCourse({
    slug: 'mern-stack-course-in-phagwara',
    label: 'MERN Stack',
    title: 'MERN Stack Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'layers',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn full-stack development end to end — React, Node.js, Express and MongoDB, with APIs, authentication, deployment and live projects.',
    overview:
      'Techcadd’s MERN Stack Programming Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners how modern web applications are built with MongoDB, Express.js, React and Node.js. It covers frontend development, backend development, databases, APIs, authentication and complete full-stack application development. The training is based on practical knowledge rather than theory: you learn through coding exercises, assignments and real projects, seeing how frontend and backend technologies actually fit together. The approach is beginner-friendly throughout, developing programming logic, development skill and problem solving alongside the syntax — by the end you can design, develop, debug and deploy a MERN application of your own.',
    demand:
      'MERN is the stack most Punjab startups and software agencies actually build on, and one developer who can work across the whole of it is worth more to them than two who can only do half.',
    modules: [
      {
        title: 'Web Development Fundamentals',
        summary:
          'Build your knowledge from scratch and grow as a developer step by step, writing clean, understandable code.',
        topics: [
          'HTML, CSS, JavaScript and modern web structure',
          'Responsive layouts and user interfaces',
          'Variables, functions, conditions and loops',
          'Building simple pages to develop programming logic',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'JavaScript, Logic & Problem-Solving',
        summary:
          'Get deeper into programming and learn how developers actually think about a problem.',
        topics: [
          'Solving coding problems with JavaScript',
          'Functions, arrays, objects and asynchronous programming',
          'Error handling and debugging techniques',
          'Breaking large problems into smaller development tasks',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'React Frontend Development',
        summary:
          'Find out how professional frontend applications are structured, and build interfaces that respond.',
        topics: [
          'Components, props, state and hooks',
          'Dynamic and interactive user interfaces',
          'Routing and frontend application flow',
          'Building responsive React applications',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Node.js, Express.js & Backend Development',
        summary:
          'Find out how server-side applications work once the browser is no longer the whole story.',
        topics: [
          'Node.js and backend programming concepts',
          'Building APIs with Express.js',
          'Server-side routing and middleware',
          'Connecting applications to external services',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'MongoDB & Database Development',
        summary:
          'Find out how modern applications manage real-world data, and build something that keeps it.',
        topics: [
          'Creating and managing databases',
          'Collections, documents and database operations',
          'CRUD operations and data relationships',
          'MongoDB with backend integration',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Full-Stack MERN Application Development',
        summary:
          'Combine both halves — the point where separate technologies start behaving like one product.',
        topics: [
          'Connecting React applications to Node.js APIs',
          'How data moves across a complete application',
          'Authentication and application workflows',
          'Building modern full-stack web applications',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI-Powered MERN Stack Development',
        summary:
          'Learn how AI tooling changed the way developers write and learn code — and how not to lean on it.',
        topics: [
          'AI assistants for understanding code and troubleshooting',
          'Generating and improving ideas with effective prompts',
          'Using AI ethically without over-reliance',
          'Faster debugging, documentation and development workflows',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'MERN Projects, Git & Developer Workflow',
        summary:
          'Apply your skills the way a team does — version controlled, organised and readable by someone else.',
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
        title: 'Live MERN Projects & Career Preparation',
        summary:
          'Apply everything in one end-to-end full-stack project, then learn to explain it to an interviewer.',
        topics: [
          'An end-to-end full-stack project',
          'Development assignments from real-world scenarios',
          'Explaining your code and projects confidently in interviews',
          'Career paths in frontend, backend and full-stack development',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build responsive React interfaces with components, state and hooks',
      'Write server-side APIs with Node.js and Express',
      'Model, query and manage data in MongoDB',
      'Wire a frontend to a backend and move data across the whole stack',
      'Implement authentication and protect application routes',
      'Ship a deployed full-stack application you can defend in an interview',
    ],
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'VS Code',
      'Git & GitHub',
      'REST APIs',
      'Postman',
      'JWT Authentication',
      'Mongoose',
      'Redux / State Management',
      'OpenAI & AI Tools',
      'ChatGPT for Development',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Learning HTML, CSS, JavaScript and modern web technologies shows you how sites and applications actually work. You will cover frontend basics, React, backend development, databases, APIs and problem solving — a useful skill alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Web development should be taught through projects, not textbooks. Whatever your discipline, coding practice in React, Node.js, databases and APIs strengthens both your college projects and your development portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Theoretical knowledge does not move an employer. They want practical development skill and problem solving. This builds coding logic, frontend and backend ability, debugging experience and the portfolio that beats a certificate.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, operations, marketing or testing? MERN improves your technical understanding of how modern applications are built. Frontend, backend, databases and APIs become an additional advantage without a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer. Understanding full-stack basics makes websites, applications, databases and digital products legible — and makes briefing a developer far easier.',
      },
      {
        label: 'Aspiring Developers & Freelancers',
        copy: 'A strong foundation for modern digital solutions: frontend, backend, APIs, databases, authentication and project building you can later bill for as websites, applications and full-stack work.',
      },
    ],
    whyChooseUs: [
      {
        title: 'MERN Stack skills are in demand',
        copy: 'Modern web development goes well past static sites. Startups and software companies need developers who understand frontend, backend, databases and APIs — and React, Node.js, MongoDB and Express make one person useful across all of it.',
      },
      {
        title: 'Understanding how MERN really works',
        copy: 'Not memorising code. How the halves fit together — HTML, CSS and JavaScript, React and components, state management, Node and Express, MongoDB, REST APIs, authentication, debugging and Git.',
      },
      {
        title: 'Practical training is how development is learned',
        copy: 'Tutorials help. Coding, debugging and building your own application teaches far more. Hands-on assignments are where frontend, backend, database management and API integration actually stick.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, this leads to MERN Stack Developer, React Developer, Node.js Developer, Full-Stack Developer, Backend Developer or Web Application Developer.',
      },
    ],
    whyNow: {
      title: 'Gain MERN Stack Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that demonstrates real development ability.',
        'A strong portfolio shows frontend development, backend logic, databases, APIs and complete applications in one place.',
        'MERN Stack Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'Concentrate on building projects and solving development problems rather than memorising syntax.',
      ],
    },
    roles: [
      'MERN Stack Developer',
      'React Developer',
      'Node.js Backend Developer',
      'Full-Stack Web Developer',
      'JavaScript Developer',
      'MERN Application Developer',
      'Developer with AI',
      'Freelance MERN Stack Developer',
    ],
    roleDetails: [
      {
        role: 'MERN Stack Developer',
        copy: 'Build complete web applications with MongoDB, Express.js, React and Node.js — frontend, backend, databases and APIs. The most common path after this course.',
      },
      {
        role: 'React Developer',
        copy: 'Work on modern interfaces and frontend applications using components, state management, routing and APIs.',
      },
      {
        role: 'Node.js Backend Developer',
        copy: 'Work behind the scenes on reliable server-side systems with Node.js, Express.js, databases, APIs and authentication.',
      },
      {
        role: 'Full-Stack Web Developer',
        copy: 'Build complete applications across both halves — interfaces, server-side logic, databases, APIs and deployment.',
      },
      {
        role: 'JavaScript Developer',
        copy: 'Build interactive applications and digital solutions in JavaScript: clean code, debugging and integrating the pieces into something useful.',
      },
      {
        role: 'MERN Application Developer',
        copy: 'Build database-driven applications on the full stack — React, Node.js, Express and MongoDB together as one platform.',
      },
      {
        role: 'Developer with AI',
        copy: 'Combine development skill with AI tooling to build more, faster. AI helps with coding and debugging — solid fundamentals are what let you judge its output.',
      },
      {
        role: 'Freelance MERN Stack Developer',
        copy: 'Build a freelance practice creating sites and applications for businesses in Phagwara, Jalandhar and further out.',
      },
    ],
    hiring: [
      'Software development companies creating websites, applications and business solutions',
      'IT startups and technology companies building modern web applications',
      'Digital product companies working on frontend and backend platforms',
      'Software agencies developing business websites and web applications',
    ],
    nextSteps: [
      'Next.js & server-side rendering',
      'TypeScript for full-stack',
      'Cloud deployment & DevOps basics',
      'System design for web applications',
    ],
    industries: ['Software development', 'IT startups', 'Digital products', 'Software agencies'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'MERN Stack Developer',
      summary:
        'Builds complete web applications across React, Node, Express and MongoDB. Earnings depend on your development skills, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — MERN Stack Developer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Full-Stack Development',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Web Development',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after MERN Stack?',
        a: 'MERN Stack Developer, React Developer, Node.js Developer, Junior Full-Stack Developer and Backend Developer. Because the stack covers both halves, one skillset maps onto several different job titles.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of delivery experience. Delhi/NCR runs higher, and full-stack specialists move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — full-stack work travels particularly well, since one person can deliver a whole product. Freelance income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have shipped real client applications.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software development companies, IT startups building modern web applications, digital product companies working across frontend and backend, and software agencies building business websites — plus freelance and remote projects.',
      },
      {
        q: 'Can I continue to higher studies or a specialisation later?',
        a: 'The certificate and portfolio stand on their own, and they stack. MERN leads naturally into Next.js, TypeScript, cloud deployment and system design, so the second course is faster than the first.',
      },
    ],
    projects: [
      {
        name: 'Frontend Web Development Project',
        summary:
          'Build a responsive frontend covering HTML, CSS, JavaScript, layouts, components and interactive elements. You build the interface yourself and understand how every section works.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        level: 'Beginner',
        skills: ['Responsive Design', 'Frontend Development'],
      },
      {
        name: 'React Application Development',
        summary:
          'Build a working frontend application with components, props, state, hooks and user interactions — and see how the pieces combine into a modern application.',
        tech: ['React.js', 'Hooks'],
        level: 'Beginner',
        skills: ['Components', 'Frontend Development'],
      },
      {
        name: 'MongoDB Database Project',
        summary:
          'Work with real application data: organise, store, retrieve and manage it in MongoDB. Database operations learned practically rather than from a textbook.',
        tech: ['MongoDB', 'Mongoose'],
        level: 'Intermediate',
        skills: ['CRUD Operations', 'Database Design'],
      },
      {
        name: 'Node.js & Backend Development',
        summary:
          'Build a backend that handles requests, manages routes, connects to a database and exposes useful APIs — server-side programming you can actually run.',
        tech: ['Node.js', 'Express.js'],
        level: 'Intermediate',
        skills: ['Backend Development', 'APIs'],
      },
      {
        name: 'REST API Integration Project',
        summary:
          'Learn how a frontend talks to a backend. Build something that requests, processes and displays real-time information across the stack.',
        tech: ['REST API', 'JSON'],
        level: 'Intermediate',
        skills: ['API Integration', 'Full-Stack Development'],
      },
      {
        name: 'MERN Problem-Solving Project',
        summary:
          'Turn real development requirements into working applications. Improve your programming logic, debugging, application flow and clean coding practice.',
        tech: ['JavaScript', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'AI & MERN Stack Project',
        summary:
          'See how full-stack development works alongside AI on a practical project — APIs, data processing, AI integrations and modern development technique.',
        tech: ['AI Tools', 'API Integration'],
        level: 'Advanced',
        skills: ['Artificial Intelligence', 'Modern Web Development'],
      },
      {
        name: 'End-to-End MERN Capstone',
        summary:
          'Bring everything together: ideate, design, develop, test, fix what breaks, and present the finished application as your portfolio piece.',
        tech: ['MERN Stack', 'Full-Stack Development'],
        level: 'Advanced',
        skills: ['Web Application', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a realistic application requirement into a development strategy — user needs, application structure, the features it needs and the technologies that suit them.',
        artefact: 'Application Planning & Development Brief',
      },
      {
        title: 'Build',
        copy: 'Build with a trainer beside you: frontend interfaces, backend APIs, database structures, authentication and complete application features, with AI-assisted workflows.',
        artefact: 'React Application & Full-Stack Development',
      },
      {
        title: 'Present & Optimise',
        copy: 'Present the architecture, frontend design, backend APIs, database structure, features, testing and optimisation — then take it into your professional portfolio.',
        artefact: 'End-to-End MERN Stack Application & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training course',
        copy: 'Practical topics — HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, APIs, authentication and problem solving — that turn coding knowledge into development skill.',
      },
      {
        title: 'Learn by doing MERN projects',
        copy: 'Practical projects and exercises that build the ability to write clean code, debug applications, manage data and ship useful full-stack applications.',
      },
      {
        title: 'Develop a MERN project portfolio',
        copy: 'Industry-relevant projects you can put on a CV — work that demonstrates your frontend, backend and problem-solving ability in interviews and job searches.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume guidance, technical interview preparation, project presentation and career development across frontend, backend, React, Node.js and full-stack roles.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain MERN simply',
        copy: 'Full-stack development is a lot to take on at once. Trainers here explain frontend and backend concepts with simple, practical examples so the two halves connect rather than compete.',
      },
      {
        title: 'Live and practical MERN projects',
        copy: 'Projects make the theory mean something. You learn through hands-on work spanning frontend interfaces, backend applications, databases, APIs, authentication and complete full-stack development.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Programming is far easier when you can clear a doubt in real time and practise the concept while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with a portfolio demonstrating frontend development, backend programming, databases, APIs and complete web applications — strong projects to discuss in interviews.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because MERN spans frontend, backend and full-stack work, guidance is career-oriented: resume building, mock interviews, project presentation and direction toward the role that fits.',
      },
      {
        title: 'MERN taught the practical way',
        copy: 'The aim is solving development problems and building applications, not memorising code — practical frontend, JavaScript, React, Node.js, Express.js, MongoDB, APIs and full-stack work.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'MERN Stack curriculum',
          techcadd:
            'Industry-focused training covering frontend, backend, React, Node.js, MongoDB, APIs and application development',
          others: 'Often focuses mainly on basic development concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, coding-focused learning built around real development problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work on development assignments and project-based tasks to strengthen full-stack skills',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Programming skills',
          techcadd: 'Focus on frontend logic, backend development, debugging and database handling',
          others: 'May cover concepts without enough coding practice',
        },
        {
          feature: 'Advanced development',
          techcadd: 'Exposure to APIs, authentication, databases and complete full-stack workflows',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular coding exercises designed to improve logical thinking and development confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help students showcase their MERN Stack skills',
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
            'Trainer guidance to help students understand development concepts and solve coding challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a MERN Stack institute in Phagwara, ask how much coding practice is included, whether students build real projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of web development',
        blurb:
          'Fundamental web development step by step through practical coding and beginner-friendly projects, until frontend work feels natural.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React Basics', 'VS Code', 'Basic Git'],
        recommendedFor:
          'Web Development Trainee, Frontend Intern, Junior Web Developer, and anyone starting a MERN Stack course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in MERN development',
        blurb:
          'Real-world full-stack work: React, Node.js, Express, MongoDB, APIs and authentication, with advanced coding and problem solving.',
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Postman', 'Auth'],
        recommendedFor:
          'MERN Stack Developer, Junior Full-Stack Developer, React Developer, Node.js Developer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master full-stack MERN development',
        blurb:
          'Advanced projects, APIs, databases, authentication, deployment and AI-powered development workflows, end to end.',
        skills: ['React.js', 'Node.js', 'MongoDB', 'REST API', 'Redux', 'Deployment', 'AI tools'],
        recommendedFor:
          'MERN Stack Developer, Full-Stack Developer, Backend Developer, React Developer, and advanced web pathways.',
      },
    ],
    capabilities: [
      { capability: 'HTML & CSS fundamentals', included: [true, true, true] },
      { capability: 'JavaScript programming', included: [true, true, true] },
      { capability: 'React basics', included: [true, true, true] },
      { capability: 'Components & hooks', included: [true, true, true] },
      { capability: 'Frontend projects', included: [true, true, true] },
      { capability: 'Advanced React', included: [false, true, true] },
      { capability: 'MongoDB & database development', included: [false, true, true] },
      { capability: 'APIs', included: [false, true, true] },
      { capability: 'Backend development', included: [false, true, true] },
      { capability: 'Node.js & Express.js', included: [false, true, true] },
      { capability: 'Authentication', included: [false, true, true] },
      { capability: 'Git & GitHub', included: [false, true, true] },
      { capability: 'Advanced full-stack projects', included: [false, false, true] },
      { capability: 'State management', included: [false, false, true] },
      { capability: 'Deployment', included: [false, false, true] },
      { capability: 'AI & development integration', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your web development foundation. The 6-month track includes those fundamentals and moves into React, backend development, databases, APIs and authentication. The 9-month programme builds further with advanced full-stack development, complex projects, deployment and AI-powered workflows. Choose 3 months for HTML, CSS, JavaScript and React fundamentals; 6 months to build full-stack applications with databases and APIs; 9 months to add advanced projects, deployment and modern AI-assisted development.',
    instructor: {
      heading: 'Why learn MERN Stack with us?',
      intro:
        'MERN is about more than syntax. The emphasis here is on how applications are designed, developed and debugged across frontend and backend together — through practical coding, assignments, projects and the technologies the industry actually runs.',
      points: [
        {
          title: 'Both halves, connected',
          copy: 'Frontend and backend are taught so they meet. The moment React first reads from your own API is the moment the stack makes sense.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You write, run and debug your own applications from the first session. That is where development is actually learned.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering frontend, React, MongoDB, Node, APIs, problem solving, AI and a full-stack capstone you own.',
        },
        {
          title: 'The modern stack',
          copy: 'React with hooks, Express APIs, Mongoose and JWT — the current stack, not what it looked like five years ago.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the MERN Stack Programming Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn full-stack web development through practical, career-focused training. Students learn frontend development, JavaScript, React, Node.js, Express.js, MongoDB, APIs and real-world development with hands-on practice.',
      },
      {
        q: 'Who can join a MERN Stack Programming Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start with basic web development, while those with programming knowledge can strengthen their full-stack skills.',
      },
      {
        q: 'Is MERN Stack a good career option for freshers?',
        a: 'Yes. MERN is widely used across web development, software development, business applications and modern digital products. After gaining practical skills, freshers can explore roles such as MERN Stack Developer, Junior Full-Stack Developer, React Developer, Node.js Developer and Backend Developer.',
      },
      {
        q: 'What will I learn in the MERN Stack Programming Course?',
        a: 'HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, APIs, authentication, routing, database operations and full-stack development — plus Git, GitHub and modern AI-assisted development workflows.',
      },
      {
        q: 'Is the MERN Stack course practical or theory-based?',
        a: 'Learning becomes much easier when you build and test applications yourself. The approach focuses on hands-on coding, development exercises, debugging, mini-projects and real application development rather than theory alone.',
      },
      {
        q: 'Will I work on MERN Stack projects during the course?',
        a: 'Yes. Practical learning includes frontend projects, React applications, backend APIs, database-driven applications and end-to-end MERN projects — which also strengthen your portfolio when applying for jobs or internships.',
      },
      {
        q: 'Can I learn MERN Stack after 12th?',
        a: 'Absolutely. Students can start after 12th, especially if interested in coding, web development, software development or technology careers. It provides a strong development foundation to build on during college and beyond.',
      },
      {
        q: 'Can MERN Stack help me get a job or internship?',
        a: 'Yes, but the technologies alone are not enough. Employers also look for problem-solving ability, practical projects, programming fundamentals, databases, Git and relevant development skills. A job-oriented course helps you build these through practical training and project work.',
      },
      {
        q: 'Does the course include AI-powered development?',
        a: 'Modern development increasingly uses AI for coding assistance, debugging, documentation and workflow. The course introduces AI-assisted practice while keeping the focus on strong programming fundamentals.',
      },
      {
        q: 'How do I choose the best MERN Stack Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical coding sessions, trainer experience, project work, development exercises, tools covered, doubt support, career guidance and placement assistance. A good course should take you from web development basics to building complete full-stack projects.',
      },
    ],
    relatedCourses: [
      'web-development-course-in-phagwara',
      'mean-stack-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
      'web-designing-course-in-phagwara',
      'python-course-in-phagwara',
      'java-course-in-phagwara',
    ],
    keywords: [
      'mern stack course in phagwara',
      'mern stack courses in phagwara',
      'mern stack training institute in phagwara',
      'mern stack programming course in phagwara',
      'full stack developer course in phagwara',
      'mern stack course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'mean-stack-course-in-phagwara',
    label: 'MEAN Stack',
    title: 'MEAN Stack Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'layers',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn full-stack development on Angular — MongoDB, Express, Angular and Node.js, with REST APIs, authentication and live projects.',
    overview:
      'Techcadd’s MEAN Stack Development Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners how to build modern web applications with MongoDB, Express.js, Angular and Node.js. It covers frontend development, backend development, databases, APIs, authentication and full-stack application development. The training is based on practical knowledge rather than theory: you learn through coding exercises, assignments and real projects, seeing how frontend, backend and database technologies fit together. The approach is beginner-friendly throughout, developing programming logic, development skill and problem solving alongside the syntax — by the end you can design, develop, debug and deploy a MEAN application of your own.',
    demand:
      'Angular remains the framework of choice in enterprise and agency work, and a developer who can pair it with a Node backend is doing the job two hires would otherwise cover.',
    modules: [
      {
        title: 'Web Development & JavaScript Fundamentals',
        summary:
          'Build your knowledge from scratch and grow as a developer step by step, writing clean, understandable JavaScript.',
        topics: [
          'JavaScript fundamentals, variables, data types and operators',
          'Conditions, loops and functions',
          'Arrays, objects and JSON data',
          'Writing clean, readable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Angular Development, Components & Problem-Solving',
        summary:
          'Get deeper into frontend development and learn how modern applications are structured.',
        topics: [
          'Building interfaces from Angular components',
          'Data binding, directives and services',
          'Routing and component communication',
          'Breaking application problems into development tasks',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'MongoDB Database Development',
        summary:
          'Understand how modern applications store and manage data, and design something that holds up.',
        topics: [
          'Databases, collections and documents',
          'CRUD operations and JSON data',
          'Schema design and data modelling',
          'Integrating databases with applications',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Node.js, Express.js & REST APIs',
        summary:
          'Discover how backend applications work once the browser is no longer the whole story.',
        topics: [
          'Node.js fundamentals and server-side development',
          'Building applications with Express.js',
          'Routing and middleware',
          'REST API development',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Full-Stack Application Development',
        summary:
          'Learn how frontend, backend and database work together — the point where it becomes one product.',
        topics: [
          'Connecting Angular applications to Node.js servers',
          'Integrating MongoDB databases',
          'Authentication and user management',
          'APIs and real-world application workflows',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Authentication, Security & Modern Applications',
        summary:
          'Advance into the parts of an application that decide who is allowed to do what.',
        topics: [
          'Authentication concepts and user access workflows',
          'JWT and protected routes',
          'Validation and secure API concepts',
          'Modern application architecture',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered MEAN Stack Development',
        summary:
          'Learn how AI tooling changed the way developers write and understand code — without leaning on it.',
        topics: [
          'AI assistants for understanding code and troubleshooting',
          'Generating and improving ideas with effective prompts',
          'Using AI ethically without over-reliance',
          'Faster debugging, documentation and development workflows',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'MEAN Projects, Git & Developer Workflow',
        summary:
          'Apply your skills the way a team does — version controlled, organised and maintainable.',
        topics: [
          'Building projects against real-world requirements',
          'Git and version control workflows',
          'Project organisation and developer workflow',
          'Writing readable, maintainable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live MEAN Projects & Career Preparation',
        summary:
          'Apply everything in one end-to-end full-stack project, then learn to present it convincingly.',
        topics: [
          'An end-to-end full-stack project',
          'Development assignments from real-world scenarios',
          'Explaining your applications confidently in interviews',
          'Careers in full-stack, frontend, backend and software engineering',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build component-driven interfaces in Angular with services and routing',
      'Write server-side APIs with Node.js and Express',
      'Model, query and manage data in MongoDB',
      'Connect an Angular frontend to your own backend and database',
      'Implement JWT authentication and protect application routes',
      'Ship a complete full-stack application you can defend in an interview',
    ],
    tools: [
      'MongoDB',
      'Express.js',
      'Angular',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'VS Code',
      'Git & GitHub',
      'Angular CLI',
      'Postman',
      'MongoDB Compass',
      'REST APIs',
      'JWT Authentication',
      'OpenAI & AI Tools',
      'ChatGPT for Development',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Learning frontend and backend concepts step by step shows you how modern applications work. You will cover JavaScript, Angular components, Node.js, Express.js, MongoDB, APIs and problem solving — a useful skill alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Web development should be taught through projects, not textbooks. Whatever your discipline, coding practice in frontend development, backend development, databases and APIs strengthens both your college projects and your portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Basic syntax does not impress an employer. Companies want candidates who can build projects and solve real development problems. This builds frontend, backend, database and debugging skill along with the confidence to show it.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, operations, testing, marketing or business? MEAN improves your technical skill and shows you how modern applications are built. Angular, Node.js, Express, MongoDB and APIs expand what you can do without a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer. Understanding full-stack basics makes websites, applications, databases, APIs and digital products legible — and makes briefing a developer far easier.',
      },
      {
        label: 'Aspiring Developers & Freelancers',
        copy: 'A strong foundation for modern digital solutions: frontend, backend, APIs, databases, authentication and project building you can later bill for as websites, applications and custom software.',
      },
    ],
    whyChooseUs: [
      {
        title: 'MEAN Stack skills are in demand',
        copy: 'Full-stack development goes well past basic website creation. Businesses, startups and technology companies need developers who understand interfaces, backend systems, databases and APIs — and MEAN covers all four with one language.',
      },
      {
        title: 'Understanding how MEAN really works',
        copy: 'Not memorising code. How the technologies combine — JavaScript fundamentals, Angular components, MongoDB collections and JSON, Node and Express routing, middleware, error handling, validation, APIs and debugging.',
      },
      {
        title: 'Practical training is how development is learned',
        copy: 'Tutorials help. Building and debugging applications teaches far more. Hands-on assignments are where frontend, backend, database integration and API development actually stick.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, this leads to MEAN Stack Developer, Angular Developer, Node.js Developer, Backend Developer, Full-Stack Web Developer or Software Developer.',
      },
    ],
    whyNow: {
      title: 'Gain MEAN Stack Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that demonstrates real development ability.',
        'A strong portfolio shows frontend development, backend logic, databases, APIs and complete applications together.',
        'MEAN Stack Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'Focus on building projects and solving real problems rather than memorising code.',
      ],
    },
    roles: [
      'MEAN Stack Developer',
      'MEAN Stack Backend Developer',
      'Full-Stack Web Developer',
      'Angular Developer',
      'Node.js Developer',
      'MEAN Stack Software Developer',
      'MEAN Developer with AI',
      'Freelance MEAN Stack Developer',
    ],
    roleDetails: [
      {
        role: 'MEAN Stack Developer',
        copy: 'Build complete web applications with MongoDB, Express.js, Angular and Node.js — frontend, backend, databases and APIs. The most common path after this course.',
      },
      {
        role: 'MEAN Stack Backend Developer',
        copy: 'Work behind the scenes on reliable server-side applications and APIs using Node.js, Express.js, MongoDB and authentication.',
      },
      {
        role: 'Full-Stack Web Developer',
        copy: 'Use both halves to build complete solutions for real business requirements — interfaces, backend logic, databases and the integration between them.',
      },
      {
        role: 'Angular Developer',
        copy: 'Build interactive, dynamic interfaces in Angular using components, services, routing, forms and APIs.',
      },
      {
        role: 'Node.js Developer',
        copy: 'Build server-side applications and APIs with Node.js and Express, working across databases, authentication and backend architecture.',
      },
      {
        role: 'MEAN Stack Software Developer',
        copy: 'Combine frontend, backend and database work into modern applications, APIs and scalable digital platforms.',
      },
      {
        role: 'MEAN Developer with AI',
        copy: 'Pair full-stack skill with AI tooling to build smarter applications faster. AI assists with coding and debugging — fundamentals are what let you judge its output.',
      },
      {
        role: 'Freelance MEAN Stack Developer',
        copy: 'Build a freelance practice developing sites and applications for businesses in Phagwara, Jalandhar and further out.',
      },
    ],
    hiring: [
      'Software development companies creating websites, applications and business solutions',
      'IT startups and technology companies using Angular and Node.js',
      'Web development agencies building modern business applications',
      'SaaS and product companies developing scalable web platforms',
    ],
    nextSteps: [
      'Advanced Angular & RxJS',
      'TypeScript in depth',
      'Cloud deployment & DevOps basics',
      'System design for web applications',
    ],
    industries: ['Software development', 'IT startups', 'Web agencies', 'SaaS & product companies'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'MEAN Stack Developer',
      summary:
        'Builds complete web applications across Angular, Node, Express and MongoDB. Earnings depend on your development skills, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — MEAN Stack Developer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Full-Stack & Web Development',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Full-Stack',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after MEAN Stack?',
        a: 'MEAN Stack Developer, Angular Developer, Node.js Developer, Junior Full-Stack Developer and Backend Developer. Because the stack covers frontend, backend and database, one skillset maps onto several job titles.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of delivery experience. Delhi/NCR runs higher, and full-stack specialists move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — full-stack work travels well, since one person can deliver a whole product. Freelance income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have shipped real client applications.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software development companies, IT startups running Angular and Node.js, web development agencies building business applications, and SaaS and product companies — plus freelance and remote projects.',
      },
      {
        q: 'Should I learn MEAN or MERN?',
        a: 'Both cover the same ground with a different frontend: MEAN uses Angular, MERN uses React. Angular is more common in enterprise and agency work and is more opinionated, which many beginners find easier to follow. Either one makes the other quicker to pick up later.',
      },
    ],
    projects: [
      {
        name: 'JavaScript Logic & Development Project',
        summary:
          'Build a JavaScript application covering variables, data types, operators, conditions, loops, functions and programming logic. You write it yourself and understand how each concept works.',
        tech: ['JavaScript', 'Programming Basics'],
        level: 'Beginner',
        skills: ['Logical Thinking', 'Programming Fundamentals'],
      },
      {
        name: 'Angular Frontend Application',
        summary:
          'Build a working frontend using Angular components, services, routing, forms and user interactions — and see how the pieces combine into a modern application.',
        tech: ['Angular', 'Components'],
        level: 'Beginner',
        skills: ['Routing', 'Frontend Development'],
      },
      {
        name: 'MongoDB Database Project',
        summary:
          'Work with real application data: organise, store, retrieve and manage it in MongoDB. Database development learned practically rather than from a textbook.',
        tech: ['MongoDB', 'JSON'],
        level: 'Intermediate',
        skills: ['CRUD Operations', 'Database Development'],
      },
      {
        name: 'Node.js & Express.js Backend Project',
        summary:
          'Build a backend that handles requests and business logic, with routes, middleware, APIs and a database behind it.',
        tech: ['Node.js', 'Express.js'],
        level: 'Intermediate',
        skills: ['Backend Development', 'APIs'],
      },
      {
        name: 'REST API Integration Project',
        summary:
          'Learn how frontend and backend communicate. Build something that creates, processes and displays real-time information over REST APIs.',
        tech: ['REST API', 'JSON'],
        level: 'Intermediate',
        skills: ['API Integration', 'Node.js Development'],
      },
      {
        name: 'Full-Stack Problem-Solving Project',
        summary:
          'Turn real requirements into working MEAN applications. Develop your problem solving, sharpen development logic, handle errors and build cleaner applications.',
        tech: ['JavaScript', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'AI & MEAN Stack Project',
        summary:
          'See how a modern application integrates AI on a practical project — APIs, AI tools, application workflows and current development technique.',
        tech: ['AI Tools', 'APIs'],
        level: 'Advanced',
        skills: ['Artificial Intelligence', 'Web Applications'],
      },
      {
        name: 'End-to-End MEAN Capstone',
        summary:
          'Bring everything together: plan, design, develop, test, fix what breaks, and present the finished application as your portfolio piece.',
        tech: ['MEAN Stack', 'Full-Stack Development'],
        level: 'Advanced',
        skills: ['Web Application', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a realistic business requirement into an application strategy — user needs, the features it needs, the database structure behind them and the technologies that suit.',
        artefact: 'Application Planning & Development Brief',
      },
      {
        title: 'Build',
        copy: 'Build with a trainer beside you: Angular interfaces, Node.js services, Express APIs, MongoDB databases and authentication, with AI-assisted workflows.',
        artefact: 'Full-Stack Web Application Development',
      },
      {
        title: 'Present & Optimise',
        copy: 'Present the strategy, architecture, frontend, backend, database, APIs and how you optimised it — then take the application into your professional portfolio.',
        artefact: 'End-to-End MEAN Stack Application & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training course',
        copy: 'Practical topics — Angular, Node.js, Express.js, MongoDB, APIs, authentication and full-stack application development — that turn knowledge into working skill.',
      },
      {
        title: 'Learn by doing MEAN projects',
        copy: 'Practical projects and exercises that build the ability to create user interfaces, APIs, databases and complete web applications.',
      },
      {
        title: 'Develop a MEAN project portfolio',
        copy: 'Industry-relevant full-stack projects you can put on a CV — applications that demonstrate your development and problem-solving ability in interviews.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume guidance, technical interview preparation, project presentation and career development across MEAN, full-stack, Angular, Node.js and software engineering.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain MEAN simply',
        copy: 'Full-stack development is a lot to take on at once. Trainers here explain the concepts with simple, practical examples so four technologies feel like one subject.',
      },
      {
        title: 'Live and practical MEAN projects',
        copy: 'Projects make the concepts meaningful. You learn through hands-on work spanning frontend interfaces, backend systems, databases, APIs and complete application development.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Development is far easier when you can clear a doubt in real time and practise the concept while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with projects demonstrating Angular, Node.js, Express.js, MongoDB, APIs and full-stack development — real work a fresher can discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because MEAN spans web, software and backend development, guidance is career-oriented: resume building, mock interviews, project presentation and direction toward the right role.',
      },
      {
        title: 'MEAN taught the practical way',
        copy: 'The aim is understanding how complete applications are built, not memorising code — practical Angular, Node.js, Express.js, MongoDB, APIs, authentication and application development.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'MEAN Stack curriculum',
          techcadd:
            'Industry-focused training covering MongoDB, Express.js, Angular, Node.js, APIs and application development',
          others: 'Often focuses mainly on individual technology basics',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, development-focused learning built around real application problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd: 'Students work on full-stack assignments and project-based tasks',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Development skills',
          techcadd: 'Focus on frontend, backend, databases, APIs and debugging',
          others: 'May cover concepts without enough development practice',
        },
        {
          feature: 'Advanced development',
          techcadd:
            'Exposure to authentication, APIs, database integration and full-stack architecture',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd: 'Regular development exercises designed to improve technical thinking',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help showcase full-stack development skills',
          others: 'Portfolio development may not be a major focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, interview preparation and portfolio support',
          others: 'Career assistance varies between institutes',
        },
        {
          feature: 'Doubt support',
          techcadd:
            'Trainer guidance to understand development concepts and solve technical challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a MEAN Stack institute in Phagwara, ask how much practical development is included, whether students build real projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of MEAN development',
        blurb:
          'Fundamental web development step by step through practical coding and beginner-friendly projects, until the stack stops feeling like four separate things.',
        skills: ['JavaScript', 'HTML', 'CSS', 'Angular Basics', 'Node.js Basics', 'Git basics'],
        recommendedFor:
          'Web Development Trainee, Development Intern, Junior Web Developer, and anyone starting a MEAN Stack course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in MEAN development',
        blurb:
          'Real-world full-stack work: MongoDB, APIs, authentication and application development, with advanced frontend and backend skill.',
        skills: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'REST APIs', 'Postman', 'JWT'],
        recommendedFor:
          'MEAN Stack Developer, Junior Full-Stack Developer, Angular Developer, Node.js Developer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master MEAN Stack development',
        blurb:
          'Advanced application architecture, databases, APIs, authentication, deployment and AI-powered development workflows.',
        skills: ['Angular', 'Node.js', 'MongoDB Compass', 'REST APIs', 'JWT', 'GitHub', 'AI tools'],
        recommendedFor:
          'MEAN Stack Developer, Full-Stack Developer, Backend Developer, Angular Developer, and advanced web pathways.',
      },
    ],
    capabilities: [
      { capability: 'JavaScript fundamentals', included: [true, true, true] },
      { capability: 'Variables & data types', included: [true, true, true] },
      { capability: 'Functions & programming logic', included: [true, true, true] },
      { capability: 'Angular basics', included: [true, true, true] },
      { capability: 'Node.js basics', included: [true, true, true] },
      { capability: 'MongoDB basics', included: [true, true, true] },
      { capability: 'Advanced Angular', included: [false, true, true] },
      { capability: 'MongoDB & database integration', included: [false, true, true] },
      { capability: 'REST APIs', included: [false, true, true] },
      { capability: 'Backend development', included: [false, true, true] },
      { capability: 'Express.js', included: [false, true, true] },
      { capability: 'Authentication', included: [false, true, true] },
      { capability: 'Git & GitHub', included: [false, true, true] },
      { capability: 'Advanced full-stack projects', included: [false, false, true] },
      { capability: 'Application architecture', included: [false, false, true] },
      { capability: 'AI & development integration', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your web development foundation. The 6-month track includes those fundamentals and moves into databases, APIs, backend development and full-stack applications. The 9-month programme builds further with advanced development, larger projects and modern AI-assisted workflows. Choose 3 months for JavaScript, Angular and Node.js fundamentals; 6 months to build full-stack applications with MongoDB, APIs and authentication; 9 months to add advanced architecture and AI-powered practice.',
    instructor: {
      heading: 'Why learn MEAN Stack with us?',
      intro:
        'MEAN is about more than four technology names. The emphasis here is on how a complete application is designed, developed and connected across frontend, backend and database — through practical coding, assignments and projects.',
      points: [
        {
          title: 'One language, both ends',
          copy: 'JavaScript runs the whole stack here, which is exactly what makes MEAN approachable — you are not learning two languages at once.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You write, run and debug your own applications from the first session. That is where development is actually learned.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering JavaScript, Angular, MongoDB, Node, APIs, problem solving, AI and a full-stack capstone you own.',
        },
        {
          title: 'Angular taught properly',
          copy: 'Components, services, routing and forms as a structure you build with, rather than a list of features to memorise.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the MEAN Stack Development Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn full-stack development through practical, career-focused training. Students learn MongoDB, Express.js, Angular, Node.js, JavaScript, APIs, databases and real-world development with hands-on practice.',
      },
      {
        q: 'Who can join a MEAN Stack Development Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start step by step, while those with programming knowledge can strengthen their full-stack skills.',
      },
      {
        q: 'Is MEAN Stack a good career option for freshers?',
        a: 'Yes. MEAN technologies are widely used for web development, frontend and backend development, APIs, databases and software applications. After gaining practical skills, freshers can explore roles such as MEAN Stack Developer, Junior Full-Stack Developer, Angular Developer, Node.js Developer and Backend Developer.',
      },
      {
        q: 'What will I learn in the MEAN Stack Development Course?',
        a: 'JavaScript, Angular, Node.js, Express.js, MongoDB, database operations, APIs, authentication, routing, backend development and full-stack application development — plus Git, GitHub and AI-assisted development workflows.',
      },
      {
        q: 'Is the MEAN Stack course practical or theory-based?',
        a: 'Learning becomes easier when you build and test applications yourself. The approach focuses on hands-on coding, development exercises, debugging, mini-projects and real-world problem solving rather than theory alone.',
      },
      {
        q: 'Will I work on MEAN Stack projects during the course?',
        a: 'Yes. Practical learning includes frontend applications, backend APIs, MongoDB database projects, authentication systems and end-to-end MEAN applications — which also strengthen your portfolio.',
      },
      {
        q: 'Can I learn MEAN Stack after 12th?',
        a: 'Absolutely. Students can start after 12th, especially if interested in coding, web development, software development or technology careers. It provides a foundation to build on during college and beyond.',
      },
      {
        q: 'Can MEAN Stack help me get a job or internship?',
        a: 'Yes, but the technologies alone are not enough. Employers also look for practical projects, development fundamentals, databases, APIs, Git and problem-solving skills. A job-oriented course helps you build these through practical training and projects.',
      },
      {
        q: 'Does the course include AI-powered development?',
        a: 'Modern development increasingly uses AI for coding, debugging, documentation and workflow. The course introduces AI-assisted practice while keeping the focus on strong technical fundamentals.',
      },
      {
        q: 'How do I choose the best MEAN Stack Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical development sessions, trainer experience, project work, tools covered, doubt support, portfolio development, career guidance and placement assistance. A good course should take you from learning technologies to actually building complete applications.',
      },
    ],
    relatedCourses: [
      'mern-stack-course-in-phagwara',
      'web-development-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
      'web-designing-course-in-phagwara',
      'java-course-in-phagwara',
      'python-course-in-phagwara',
    ],
    keywords: [
      'mean stack course in phagwara',
      'mean stack development course in phagwara',
      'mean stack training institute in phagwara',
      'mean stack classes in phagwara',
      'angular course in phagwara',
      'mean stack course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'php-full-stack-course-in-phagwara',
    label: 'PHP Full Stack',
    title: 'PHP Full Stack Course in Phagwara',
    category: 'programming',
    categoryTitle: 'Programming',
    icon: 'layers',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn full-stack development on PHP — PHP, MySQL, HTML, CSS and JavaScript, with APIs, sessions, authentication and live projects.',
    overview:
      'Techcadd’s PHP Full Stack Development Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners how to build dynamic web applications using PHP, MySQL, HTML, CSS and JavaScript. It covers frontend development, backend programming, databases, APIs, authentication and complete web application development. The training is based on practical knowledge rather than theory: you learn through coding exercises, assignments and real projects, seeing how frontend, backend and database technologies fit together. The approach is beginner-friendly throughout, developing programming logic, development skill and problem solving alongside the syntax — by the end you can design, develop, debug and deploy a PHP application of your own.',
    demand:
      'A large share of the business sites, CMS installs and eCommerce stores already running in Punjab are PHP, and somebody has to maintain and extend them — which is steady work the newer stacks do not compete for.',
    modules: [
      {
        title: 'Web Development & Programming Fundamentals',
        summary:
          'Build your knowledge from scratch and grow as a developer step by step, writing clean, understandable code.',
        topics: [
          'HTML, CSS and JavaScript fundamentals',
          'Variables, data types, conditions and loops',
          'Functions, arrays and forms',
          'Writing clean, readable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'PHP Programming & Backend Development',
        summary:
          'Get deeper into server-side programming and learn how a dynamic application actually works.',
        topics: [
          'Building backend functionality in PHP',
          'Variables, functions, arrays and control structures',
          'Form handling and data processing',
          'Sessions and cookies',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'MySQL Database Development',
        summary:
          'Understand how applications store and manage data, and design a schema that holds up.',
        topics: [
          'Databases, tables and relationships',
          'CRUD operations and SQL queries',
          'Database design and data management',
          'Connecting PHP applications to databases',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'PHP, APIs & Server-Side Applications',
        summary:
          'Discover how backend applications handle real requests from people who are not you.',
        topics: [
          'Server-side PHP development',
          'Building dynamic applications',
          'Request handling and validation',
          'API concepts and data processing',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Full-Stack Web Application Development',
        summary:
          'Learn how frontend, backend and database work together — where it becomes one product.',
        topics: [
          'Connecting frontend interfaces to PHP applications',
          'Integrating MySQL databases',
          'Authentication and user management',
          'Forms, APIs and real application workflows',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Authentication, Security & Modern Applications',
        summary:
          'Advance into the parts of an application that decide who is allowed to do what.',
        topics: [
          'Authentication concepts and user access workflows',
          'Sessions, password security and protected pages',
          'Validation and secure database concepts',
          'Modern application architecture',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered PHP Full Stack Development',
        summary:
          'Learn how AI tooling changed the way developers write and understand code — without leaning on it.',
        topics: [
          'AI assistants for understanding code and troubleshooting',
          'Generating and improving ideas with effective prompts',
          'Using AI ethically without over-reliance',
          'Faster debugging, documentation and development workflows',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'PHP Projects, Git & Developer Workflow',
        summary:
          'Apply your skills the way a team does — version controlled, organised and maintainable.',
        topics: [
          'Building projects against real-world requirements',
          'Git and version control workflows',
          'Project organisation and developer workflow',
          'Writing readable, maintainable code',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live PHP Full Stack Projects & Career Preparation',
        summary:
          'Apply everything in one end-to-end full-stack project, then learn to present it convincingly.',
        topics: [
          'An end-to-end full-stack project',
          'Development assignments from real-world scenarios',
          'Explaining your applications confidently in interviews',
          'Careers in full-stack, frontend, backend and software engineering',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build dynamic, database-driven pages with PHP',
      'Design and query MySQL schemas with confidence',
      'Handle forms, validation, sessions and cookies properly',
      'Connect a frontend to your own PHP backend and database',
      'Implement authentication and protect pages behind a login',
      'Ship a complete web application you can defend in an interview',
    ],
    tools: [
      'PHP',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'VS Code',
      'Git & GitHub',
      'XAMPP',
      'phpMyAdmin',
      'Postman',
      'REST APIs',
      'Authentication & Sessions',
      'OpenAI & AI Tools',
      'ChatGPT for Development',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Learning frontend and backend concepts step by step shows you how modern sites work. You will cover HTML, CSS, JavaScript, PHP, MySQL, databases, APIs and problem solving — a useful skill alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Web development should be taught through projects, not textbooks. Whatever your discipline, coding practice in frontend development, backend programming, databases and APIs strengthens both your college projects and your portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Basic syntax does not impress an employer. Companies want candidates who can build projects and solve real problems. This builds frontend, backend, database and debugging skill along with the confidence to show it.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, operations, testing, marketing or business? PHP Full Stack improves your technical skill and shows how modern applications are built. PHP, MySQL, frontend work and APIs expand what you can do without a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer. Understanding full-stack basics makes websites, applications, databases, APIs and digital products legible — and makes briefing a developer far easier.',
      },
      {
        label: 'Aspiring Developers & Freelancers',
        copy: 'A strong foundation for modern digital solutions: frontend, backend, APIs, databases, authentication and project building you can later bill for as websites, applications and custom software.',
      },
    ],
    whyChooseUs: [
      {
        title: 'PHP Full Stack skills are in demand',
        copy: 'Full-stack development goes well past basic website creation. Businesses and technology companies need developers who understand interfaces, backend systems, databases and application logic — and PHP still runs a very large share of the web.',
      },
      {
        title: 'Understanding how PHP Full Stack really works',
        copy: 'Not memorising code. How the technologies combine — PHP fundamentals, HTML, CSS and JavaScript, MySQL and data management, server-side logic, form handling and validation, sessions and authentication, APIs and CRUD.',
      },
      {
        title: 'Practical training is how development is learned',
        copy: 'Tutorials help. Building and debugging applications teaches far more. Hands-on assignments are where frontend, backend, database integration and API development actually stick.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, this leads to PHP Full Stack Developer, PHP Developer, Backend Developer, Full-Stack Web Developer or Software Developer.',
      },
    ],
    whyNow: {
      title: 'Gain PHP Full Stack Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that demonstrates real development ability.',
        'A strong portfolio shows frontend development, backend logic, databases, APIs and complete applications together.',
        'PHP Full Stack Developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with a working portfolio.',
        'Focus on building projects and solving real problems rather than memorising code.',
      ],
    },
    roles: [
      'PHP Full Stack Developer',
      'PHP Backend Developer',
      'Full-Stack Web Developer',
      'PHP Developer',
      'Web Application Developer',
      'PHP Full Stack Software Developer',
      'PHP Developer with AI',
      'Freelance PHP Full Stack Developer',
    ],
    roleDetails: [
      {
        role: 'PHP Full Stack Developer',
        copy: 'Build complete web applications with PHP, MySQL, HTML, CSS and JavaScript — frontend, backend, databases and APIs. The most common path after this course.',
      },
      {
        role: 'PHP Backend Developer',
        copy: 'Work behind the scenes on reliable server-side applications and database systems using PHP, MySQL, APIs and authentication.',
      },
      {
        role: 'Full-Stack Web Developer',
        copy: 'Use both halves to build complete solutions for real business requirements — interfaces, backend logic, databases and the integration between them.',
      },
      {
        role: 'PHP Developer',
        copy: 'Build dynamic, database-driven websites in PHP, working with forms, sessions, MySQL, APIs and application logic.',
      },
      {
        role: 'Web Application Developer',
        copy: 'Build complete applications across frontend and backend, with databases, authentication, APIs and server-side architecture underneath.',
      },
      {
        role: 'PHP Full Stack Software Developer',
        copy: 'Combine frontend, backend and database work into dynamic applications, APIs and scalable digital platforms.',
      },
      {
        role: 'PHP Developer with AI',
        copy: 'Pair full-stack skill with AI tooling to build smarter applications faster. AI assists with coding and debugging — fundamentals are what let you judge its output.',
      },
      {
        role: 'Freelance PHP Full Stack Developer',
        copy: 'Build a freelance practice developing sites and applications for businesses in Phagwara, Jalandhar and further out.',
      },
    ],
    hiring: [
      'Software development companies creating websites, applications and business solutions',
      'IT companies using PHP and MySQL technologies',
      'Web development agencies building dynamic business applications',
      'eCommerce and product companies developing web platforms',
    ],
    nextSteps: [
      'Laravel framework',
      'WordPress plugin & theme development',
      'Advanced MySQL & query optimisation',
      'Cloud deployment & DevOps basics',
    ],
    industries: ['Software development', 'IT services', 'Web agencies', 'eCommerce'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. `scale` is the midpoint in ₹/month, and remote sits *below*
     * Punjab at the fresher end on purpose: freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'PHP Full Stack Developer',
      summary:
        'Builds dynamic, database-driven web applications across PHP, MySQL and the frontend. Earnings depend on your development skills, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — PHP Full Stack Developer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Full-Stack & Web Development',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance PHP Development',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after PHP Full Stack?',
        a: 'PHP Full Stack Developer, PHP Developer, Backend Developer, Junior Full-Stack Developer and Web Application Developer. Because the stack covers frontend, backend and database, one skillset maps onto several job titles.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of delivery experience. Delhi/NCR runs higher, and developers who add Laravel move well beyond it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — PHP is particularly good for freelance work locally, because so many existing business sites, CMS installs and stores run on it and need maintaining. Freelance income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have delivered real client work.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software development companies, IT companies running PHP and MySQL, web development agencies building dynamic business applications, and eCommerce and product companies — plus freelance and remote projects.',
      },
      {
        q: 'Is PHP still worth learning?',
        a: 'Yes, for a specific reason: a very large share of the sites already running — business sites, WordPress installs, eCommerce stores — are PHP, and that existing code has to be maintained and extended. That is steady, local, less-contested work than the newer stacks, and Laravel keeps the modern end of it current.',
      },
    ],
    projects: [
      {
        name: 'PHP Programming & Logic Project',
        summary:
          'Build a PHP application covering variables, data types, operators, conditions, loops, functions and programming logic. You write it yourself and understand how each concept works.',
        tech: ['PHP', 'Programming Basics'],
        level: 'Beginner',
        skills: ['Logical Thinking', 'Programming Fundamentals'],
      },
      {
        name: 'Frontend Web Application',
        summary:
          'Build a working frontend with HTML, CSS, JavaScript and Bootstrap — and see how the elements combine into a modern, responsive application.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        level: 'Beginner',
        skills: ['Bootstrap', 'Frontend Development'],
      },
      {
        name: 'MySQL Database Project',
        summary:
          'Work with real application data: organise, store, retrieve and manage it in MySQL. Database development learned practically rather than from a textbook.',
        tech: ['MySQL', 'SQL'],
        level: 'Intermediate',
        skills: ['CRUD Operations', 'Database Development'],
      },
      {
        name: 'PHP Backend Development Project',
        summary:
          'Build a backend that handles requests and business logic — forms, sessions, databases and the server-side functionality behind them.',
        tech: ['PHP', 'MySQL'],
        level: 'Intermediate',
        skills: ['Backend Development', 'Web Applications'],
      },
      {
        name: 'API Integration Project',
        summary:
          'Learn how applications exchange information. Build something that processes and displays real-time data over requests, JSON and APIs.',
        tech: ['REST API', 'JSON'],
        level: 'Intermediate',
        skills: ['API Integration', 'PHP Development'],
      },
      {
        name: 'Full-Stack Problem-Solving Project',
        summary:
          'Turn real requirements into working PHP applications. Develop your problem solving, sharpen development logic, handle errors and build cleaner applications.',
        tech: ['PHP', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'AI & PHP Full Stack Project',
        summary:
          'See how a modern application integrates AI on a practical project — APIs, AI tools, application workflows and current development technique.',
        tech: ['AI Tools', 'APIs'],
        level: 'Advanced',
        skills: ['Artificial Intelligence', 'Web Applications'],
      },
      {
        name: 'End-to-End PHP Full Stack Capstone',
        summary:
          'Bring everything together: plan, design, develop, test, fix what breaks, and present the finished application as your portfolio piece.',
        tech: ['PHP Full Stack', 'Web Development'],
        level: 'Advanced',
        skills: ['Full-Stack Development', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a realistic business requirement into an application strategy — user needs, the features it needs, the database structure behind them and the technologies that suit.',
        artefact: 'Application Planning & Development Brief',
      },
      {
        title: 'Build',
        copy: 'Build with a trainer beside you: frontend interfaces, PHP backend functionality, MySQL databases and authentication workflows, with AI-assisted tooling.',
        artefact: 'Full-Stack Web Application Development',
      },
      {
        title: 'Present & Optimise',
        copy: 'Present the strategy, architecture, frontend, backend, database, APIs and how you optimised it — then take the application into your professional portfolio.',
        artefact: 'End-to-End PHP Full Stack Application & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training course',
        copy: 'Practical topics — PHP, MySQL, frontend development, backend programming, APIs, authentication and complete application development — that turn knowledge into working skill.',
      },
      {
        title: 'Learn by doing PHP projects',
        copy: 'Practical projects and exercises that build the ability to create user interfaces, backend functionality, databases and complete web applications.',
      },
      {
        title: 'Develop a PHP project portfolio',
        copy: 'Industry-relevant full-stack projects you can put on a CV — applications that demonstrate your development and problem-solving ability in interviews.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume guidance, technical interview preparation, project presentation and career development across PHP, full-stack, backend development and software engineering.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain PHP Full Stack simply',
        copy: 'Full-stack development is a lot to take on at once. Trainers here explain the concepts with simple, practical examples so the technologies feel like one subject rather than several.',
      },
      {
        title: 'Live and practical PHP projects',
        copy: 'Projects make the concepts meaningful. You learn through hands-on work spanning frontend interfaces, backend systems, databases, APIs and complete application development.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Development is far easier when you can clear a doubt in real time and practise the concept while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with projects demonstrating PHP, MySQL, frontend technologies, APIs and full-stack development — real work a fresher can discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because PHP spans web, software and backend development, guidance is career-oriented: resume building, mock interviews, project presentation and direction toward the right role.',
      },
      {
        title: 'PHP Full Stack taught the practical way',
        copy: 'The aim is understanding how complete applications are built, not memorising code — practical PHP, MySQL, APIs, authentication, database integration and application development.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'PHP Full Stack curriculum',
          techcadd:
            'Industry-focused training covering PHP, MySQL, frontend development, APIs and application development',
          others: 'Often focuses mainly on individual technology basics',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, development-focused learning built around real application problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd: 'Students work on full-stack assignments and project-based tasks',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Development skills',
          techcadd: 'Focus on frontend, backend, databases, APIs and debugging',
          others: 'May cover concepts without enough development practice',
        },
        {
          feature: 'Advanced development',
          techcadd:
            'Exposure to authentication, APIs, database integration and full-stack architecture',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd: 'Regular development exercises designed to improve technical thinking',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help showcase full-stack development skills',
          others: 'Portfolio development may not be a major focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, interview preparation and portfolio support',
          others: 'Career assistance varies between institutes',
        },
        {
          feature: 'Doubt support',
          techcadd:
            'Trainer guidance to understand development concepts and solve technical challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a PHP Full Stack institute in Phagwara, ask how much practical development is included, whether students build real projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of PHP Full Stack',
        blurb:
          'Fundamental web development step by step through practical coding and beginner-friendly projects, until building a dynamic page feels natural.',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP Basics', 'MySQL Basics', 'Git basics'],
        recommendedFor:
          'Web Development Trainee, Development Intern, Junior Web Developer, and anyone starting a PHP Full Stack course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in PHP Full Stack',
        blurb:
          'Real-world full-stack work: MySQL, APIs, authentication and complete web applications, with advanced frontend and backend skill.',
        skills: ['PHP', 'MySQL', 'REST APIs', 'Postman', 'Git & GitHub', 'Authentication'],
        recommendedFor:
          'PHP Full Stack Developer, Junior Full-Stack Developer, PHP Developer, Backend Developer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master PHP Full Stack development',
        blurb:
          'Advanced application architecture, databases, APIs, authentication, deployment and AI-powered development workflows.',
        skills: ['PHP', 'MySQL', 'phpMyAdmin', 'XAMPP', 'REST APIs', 'GitHub', 'AI tools'],
        recommendedFor:
          'PHP Full Stack Developer, Full-Stack Developer, Backend Developer, PHP Developer, and advanced web pathways.',
      },
    ],
    capabilities: [
      { capability: 'HTML & CSS fundamentals', included: [true, true, true] },
      { capability: 'JavaScript fundamentals', included: [true, true, true] },
      { capability: 'PHP programming basics', included: [true, true, true] },
      { capability: 'Variables & data types', included: [true, true, true] },
      { capability: 'Functions & programming logic', included: [true, true, true] },
      { capability: 'MySQL basics', included: [true, true, true] },
      { capability: 'Advanced PHP development', included: [false, true, true] },
      { capability: 'Database integration', included: [false, true, true] },
      { capability: 'REST APIs', included: [false, true, true] },
      { capability: 'Backend development', included: [false, true, true] },
      { capability: 'Authentication', included: [false, true, true] },
      { capability: 'Git & GitHub', included: [false, true, true] },
      { capability: 'Advanced full-stack projects', included: [false, false, true] },
      { capability: 'Application architecture', included: [false, false, true] },
      { capability: 'AI & development integration', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your web development foundation. The 6-month track includes those fundamentals and moves into databases, APIs, backend development and full-stack applications. The 9-month programme builds further with advanced development, larger projects and modern AI-assisted workflows. Choose 3 months for HTML, CSS, JavaScript, PHP and MySQL fundamentals; 6 months to build full-stack applications with databases, APIs and authentication; 9 months to add advanced architecture and AI-powered practice.',
    instructor: {
      heading: 'Why learn PHP Full Stack with us?',
      intro:
        'PHP Full Stack is about more than syntax. The emphasis here is on how a complete application is designed, developed and connected across frontend, backend and database — through practical coding, assignments and projects.',
      points: [
        {
          title: 'A working application early',
          copy: 'PHP gets you to a dynamic, database-backed page faster than most stacks. You reach that point early and keep building on it.',
        },
        {
          title: 'Coding, not watching',
          copy: 'You write, run and debug your own applications from the first session. That is where development is actually learned.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering PHP logic, frontend, MySQL, backend, APIs, problem solving, AI and a full-stack capstone you own.',
        },
        {
          title: 'Security taught as you go',
          copy: 'Sessions, password handling and validation arrive with the features that need them, not as an afterthought at the end.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the PHP Full Stack Development Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn complete web development through practical, career-focused training. Students learn PHP, MySQL, HTML, CSS, JavaScript, APIs, databases and real-world development with hands-on practice.',
      },
      {
        q: 'Who can join a PHP Full Stack Development Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start step by step, while those with programming knowledge can strengthen their full-stack skills.',
      },
      {
        q: 'Is PHP Full Stack a good career option for freshers?',
        a: 'Yes. PHP Full Stack technologies are widely used for web development, backend development, APIs, databases and dynamic web applications. After gaining practical skills, freshers can explore roles such as PHP Full Stack Developer, Junior Full-Stack Developer, PHP Developer, Backend Developer and Web Developer.',
      },
      {
        q: 'What will I learn in the PHP Full Stack Development Course?',
        a: 'HTML, CSS, JavaScript, PHP, MySQL, database operations, APIs, authentication, sessions, backend programming and full-stack web application development — plus Git, GitHub and AI-assisted development workflows.',
      },
      {
        q: 'Is the PHP Full Stack course practical or theory-based?',
        a: 'Learning becomes easier when you build and test applications yourself. The approach focuses on hands-on coding, development exercises, debugging, mini-projects and real-world problem solving rather than theory alone.',
      },
      {
        q: 'Will I work on PHP Full Stack projects during the course?',
        a: 'Yes. Practical learning includes frontend applications, PHP backend projects, MySQL database projects, authentication systems and end-to-end PHP Full Stack applications — which also strengthen your portfolio.',
      },
      {
        q: 'Can I learn PHP Full Stack after 12th?',
        a: 'Absolutely. Students can start after 12th, especially if interested in coding, web development, software development or technology careers. It provides a foundation to build on during college and beyond.',
      },
      {
        q: 'Can PHP Full Stack help me get a job or internship?',
        a: 'Yes, but the technologies alone are not enough. Employers also look for practical projects, development fundamentals, databases, APIs, Git and problem-solving skills. A job-oriented course helps you build these through practical training and projects.',
      },
      {
        q: 'Does the course include AI-powered development?',
        a: 'Modern development increasingly uses AI for coding, debugging, documentation and workflow. The course introduces AI-assisted practice while keeping the focus on strong technical fundamentals.',
      },
      {
        q: 'How do I choose the best PHP Full Stack Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical development sessions, trainer experience, project work, tools covered, doubt support, portfolio development, career guidance and placement assistance. A good course should take you from learning technologies to actually building complete applications.',
      },
    ],
    relatedCourses: [
      'mern-stack-course-in-phagwara',
      'mean-stack-course-in-phagwara',
      'web-development-course-in-phagwara',
      'wordpress-course-in-phagwara',
      'web-designing-course-in-phagwara',
      'python-course-in-phagwara',
    ],
    keywords: [
      'php full stack course in phagwara',
      'php full stack development course in phagwara',
      'php training institute in phagwara',
      'php full stack classes in phagwara',
      'php course in phagwara',
      'php full stack course after 12th in phagwara',
    ],
  }),
]
