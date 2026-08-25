/**
 * The slug-routed course catalog that powers the Courses mega menu and every
 * `/[slug]` landing page.
 *
 * This is deliberately separate from `courses`/`courseCategories` in
 * `site.ts` — those drive the homepage's own filterable grid under
 * `#courses` and are untouched. This file exists for the mega menu's four
 * categories and the dedicated SEO landing page each course now gets.
 */

import type { IconName } from '@/components/ui/Icon'

export interface CoursePage {
  slug: string
  /** Short label as it appears in the mega menu / drawer. */
  label: string
  /** Page `<h1>` and `<title>`. */
  title: string
  duration: string
  icon: IconName
  /** One or two sentences — used as the page intro and meta description. */
  summary: string
  /** Curriculum bullets shown on the course's own page. */
  highlights: string[]
}

export interface CourseMenuCategory {
  key: string
  title: string
  accent: 'indigo' | 'violet' | 'sky' | 'emerald'
  courses: CoursePage[]
}

export const courseCatalog: CourseMenuCategory[] = [
  {
    key: 'programming',
    title: 'Programming',
    accent: 'indigo',
    courses: [
      {
        slug: 'python-course-in-phagwara',
        label: 'Python',
        title: 'Python Course in Phagwara',
        duration: '3 Months',
        icon: 'code',
        summary:
          'Go from Python syntax to real, deployable programs — the same language behind most AI and automation work you will build next.',
        highlights: [
          'Core syntax, data structures and OOP',
          'File handling, modules and virtual environments',
          'Working with APIs and libraries (NumPy, Pandas)',
          'Automation and scripting mini-projects',
          'A portfolio-ready capstone project',
        ],
      },
      {
        slug: 'java-course-in-phagwara',
        label: 'Java',
        title: 'Java Course in Phagwara',
        duration: '4 Months',
        icon: 'coffee',
        summary:
          'Enterprise-grade Java — OOP fundamentals through Spring Boot — for students targeting backend and Android roles.',
        highlights: [
          'Java fundamentals, OOP and collections',
          'Exception handling and multithreading',
          'JDBC and database connectivity',
          'Spring Boot REST API development',
          'A deployed backend project',
        ],
      },
      {
        slug: 'c-course-in-phagwara',
        label: 'C',
        title: 'C Course in Phagwara',
        duration: '2 Months',
        icon: 'terminal',
        summary:
          'The foundation course every serious programmer starts with — memory, pointers and problem-solving from first principles.',
        highlights: [
          'Variables, control flow and functions',
          'Arrays, strings and pointers',
          'Structures, unions and file I/O',
          'Dynamic memory management',
          'Data structure fundamentals in C',
        ],
      },
      {
        slug: 'c-plus-plus-course-in-phagwara',
        label: 'C++',
        title: 'C++ Course in Phagwara',
        duration: '2 Months',
        icon: 'terminal',
        summary:
          'Object-oriented programming, STL and data structures — the standard prerequisite for competitive programming and interviews.',
        highlights: [
          'Classes, objects and inheritance',
          'Polymorphism, templates and operator overloading',
          'The Standard Template Library (STL)',
          'Data structures: stacks, queues, trees, graphs',
          'Interview-style problem solving',
        ],
      },
      {
        slug: 'kotlin-course-in-phagwara',
        label: 'Kotlin',
        title: 'Kotlin Course in Phagwara',
        duration: '3 Months',
        icon: 'mobile',
        summary:
          "Google's preferred language for native Android — concise syntax, coroutines and a real app shipped to your portfolio.",
        highlights: [
          'Kotlin syntax and null safety',
          'Android Studio and Jetpack basics',
          'Coroutines for asynchronous work',
          'Room database and local storage',
          'A published Android app project',
        ],
      },
      {
        slug: 'web-designing-course-in-phagwara',
        label: 'Web Designing',
        title: 'Web Designing Course in Phagwara',
        duration: '2 Months',
        icon: 'palette',
        summary:
          'HTML, CSS and responsive layout — build pixel-accurate, mobile-first pages before moving into full development.',
        highlights: [
          'Semantic HTML5 and modern CSS3',
          'Flexbox, Grid and responsive breakpoints',
          'Figma-to-code workflow',
          'Animations and micro-interactions',
          'A responsive multi-page site',
        ],
      },
      {
        slug: 'web-development-course-in-phagwara',
        label: 'Web Development',
        title: 'Web Development Course in Phagwara',
        duration: '5 Months',
        icon: 'code',
        summary:
          'Front end to back end — JavaScript, a modern framework and a database, ending with a full deployed web application.',
        highlights: [
          'JavaScript (ES6+) and the DOM',
          'React fundamentals and component design',
          'Node.js, Express and REST APIs',
          'Database integration (MongoDB/SQL)',
          'Deployment and version control (Git)',
        ],
      },
      {
        slug: 'mern-stack-course-in-phagwara',
        label: 'MERN Stack',
        title: 'MERN Stack Course in Phagwara',
        duration: '6 Months',
        icon: 'layers',
        summary:
          'MongoDB, Express, React and Node — the most in-demand JavaScript stack for building and shipping production apps.',
        highlights: [
          'React with hooks and state management',
          'Node.js and Express REST APIs',
          'MongoDB schema design and Mongoose',
          'Authentication and role-based access',
          'A full-stack capstone, deployed live',
        ],
      },
      {
        slug: 'mean-stack-course-in-phagwara',
        label: 'MEAN Stack',
        title: 'MEAN Stack Course in Phagwara',
        duration: '6 Months',
        icon: 'layers',
        summary:
          'MongoDB, Express, Angular and Node — the enterprise-favoured alternative stack, built around TypeScript throughout.',
        highlights: [
          'TypeScript and Angular fundamentals',
          'Component-based architecture and services',
          'Node.js and Express REST APIs',
          'MongoDB schema design and Mongoose',
          'A full-stack capstone, deployed live',
        ],
      },
      {
        slug: 'php-full-stack-course-in-phagwara',
        label: 'PHP Full Stack',
        title: 'PHP Full Stack Course in Phagwara',
        duration: '5 Months',
        icon: 'database',
        summary:
          'PHP and MySQL power a huge share of the live web — learn the language, a framework and real database-driven development.',
        highlights: [
          'PHP fundamentals and OOP',
          'MySQL database design and queries',
          'Laravel framework essentials',
          'Authentication and admin dashboards',
          'A deployed dynamic web application',
        ],
      },
    ],
  },
  {
    key: 'ai-data',
    title: 'AI & Data',
    accent: 'sky',
    courses: [
      {
        slug: 'artificial-intelligence-course-in-phagwara',
        label: 'Artificial Intelligence',
        title: 'Artificial Intelligence Course in Phagwara',
        duration: '6 Months',
        icon: 'brain',
        summary:
          'From Python and math foundations to neural networks and applied AI — build and deploy real intelligent systems.',
        highlights: [
          'Python for AI and NumPy/Pandas',
          'Machine learning fundamentals',
          'Neural networks and deep learning basics',
          'NLP and computer vision projects',
          'A deployed AI application',
        ],
      },
      {
        slug: 'machine-learning-course-in-phagwara',
        label: 'Machine Learning',
        title: 'Machine Learning Course in Phagwara',
        duration: '4 Months',
        icon: 'cpu',
        summary:
          'Supervised, unsupervised and applied ML — the algorithms and workflow behind most real-world data products.',
        highlights: [
          'Regression, classification and clustering',
          'Feature engineering and model evaluation',
          'Scikit-learn workflow end to end',
          'Model deployment basics',
          'Two portfolio ML projects',
        ],
      },
      {
        slug: 'deep-learning-course-in-phagwara',
        label: 'Deep Learning',
        title: 'Deep Learning Course in Phagwara',
        duration: '4 Months',
        icon: 'brain',
        summary:
          'Neural networks, CNNs and transformers with TensorFlow/PyTorch — for students ready to go past classical ML.',
        highlights: [
          'Neural network fundamentals',
          'Convolutional networks for computer vision',
          'Sequence models and transformers',
          'TensorFlow and PyTorch workflows',
          'A trained and deployed deep learning model',
        ],
      },
      {
        slug: 'data-science-course-in-phagwara',
        label: 'Data Science',
        title: 'Data Science Course in Phagwara',
        duration: '6 Months',
        icon: 'chart',
        summary:
          'Statistics, Python and machine learning combined into the end-to-end data science workflow employers actually hire for.',
        highlights: [
          'Statistics and probability for data science',
          'Python, Pandas and data wrangling',
          'Exploratory data analysis and visualization',
          'Machine learning model building',
          'A full data science capstone project',
        ],
      },
      {
        slug: 'data-analytics-course-in-phagwara',
        label: 'Data Analytics',
        title: 'Data Analytics Course in Phagwara',
        duration: '3 Months',
        icon: 'chart',
        summary:
          'Turn raw data into decisions — Excel, SQL and visualization tools used daily by working analysts.',
        highlights: [
          'Advanced Excel for analytics',
          'SQL for querying real datasets',
          'Data cleaning and transformation',
          'Dashboarding and storytelling with data',
          'A real-dataset analytics project',
        ],
      },
      {
        slug: 'power-bi-course-in-phagwara',
        label: 'Power BI',
        title: 'Power BI Course in Phagwara',
        duration: '2 Months',
        icon: 'chart',
        summary:
          "Microsoft's leading BI tool — connect, model and visualize data into dashboards that decision-makers actually use.",
        highlights: [
          'Power Query and data modelling',
          'DAX formulas and calculated measures',
          'Interactive dashboard design',
          'Publishing and sharing reports',
          'A live business dashboard project',
        ],
      },
      {
        slug: 'tableau-course-in-phagwara',
        label: 'Tableau',
        title: 'Tableau Course in Phagwara',
        duration: '2 Months',
        icon: 'chart',
        summary:
          'Industry-standard visual analytics — build the kind of interactive dashboards used across BI and analyst roles.',
        highlights: [
          'Connecting and shaping data sources',
          'Charts, calculated fields and parameters',
          'Interactive dashboards and stories',
          'Best practices for visual analytics',
          'A published Tableau dashboard project',
        ],
      },
    ],
  },
  {
    key: 'digital-marketing',
    title: 'Digital Marketing',
    accent: 'violet',
    courses: [
      {
        slug: 'digital-marketing-course-in-phagwara',
        label: 'Digital Marketing',
        title: 'Digital Marketing Course in Phagwara',
        duration: '4 Months',
        icon: 'megaphone',
        summary:
          'SEO, social, ads and analytics in one program — the full-funnel skillset agencies and brands hire for.',
        highlights: [
          'SEO and content marketing fundamentals',
          'Social media marketing and strategy',
          'Google Ads and Meta Ads campaigns',
          'Email marketing and analytics',
          'A live campaign portfolio project',
        ],
      },
      {
        slug: 'social-media-marketing-course-in-phagwara',
        label: 'Social Media Marketing',
        title: 'Social Media Marketing Course in Phagwara',
        duration: '2 Months',
        icon: 'message',
        summary:
          'Grow and monetise an audience across Instagram, Facebook and LinkedIn with a real content and ad strategy.',
        highlights: [
          'Platform strategy: Instagram, Facebook, LinkedIn',
          'Content calendars and creative planning',
          'Paid social ad campaigns',
          'Analytics and performance reporting',
          'A managed brand-page project',
        ],
      },
      {
        slug: 'google-ads-course-in-phagwara',
        label: 'Google Ads',
        title: 'Google Ads Course in Phagwara',
        duration: '1 Month',
        icon: 'target',
        summary:
          'Search, display and shopping campaigns — plan, launch and optimise Google Ads that convert.',
        highlights: [
          'Campaign structure and keyword research',
          'Search and display ad creation',
          'Bidding strategies and budgeting',
          'Conversion tracking and reporting',
          'A live sample campaign build',
        ],
      },
      {
        slug: 'seo-course-in-phagwara',
        label: 'SEO',
        title: 'SEO Course in Phagwara',
        duration: '2 Months',
        icon: 'search',
        summary:
          'On-page, off-page and technical SEO — rank real pages on Google using tools professionals use daily.',
        highlights: [
          'Keyword research and on-page SEO',
          'Technical SEO and site audits',
          'Link building and off-page strategy',
          'SEO tools: Search Console, Ahrefs-style workflows',
          'A ranked-page case study project',
        ],
      },
      {
        slug: 'wordpress-course-in-phagwara',
        label: 'WordPress',
        title: 'WordPress Course in Phagwara',
        duration: '1 Month',
        icon: 'edit',
        summary:
          'Design, build and launch a complete WordPress website — themes, plugins and page builders, no-code to light-code.',
        highlights: [
          'WordPress setup and dashboard basics',
          'Themes, page builders and customisation',
          'Plugins for SEO, forms and performance',
          'WooCommerce basics for online stores',
          'A fully built and launched site',
        ],
      },
      {
        slug: 'shopify-course-in-phagwara',
        label: 'Shopify',
        title: 'Shopify Course in Phagwara',
        duration: '1 Month',
        icon: 'wallet',
        summary:
          'Build a launch-ready online store on Shopify — from product setup to payments, themes and store marketing.',
        highlights: [
          'Store setup and theme customisation',
          'Product, inventory and collection management',
          'Payments, shipping and checkout setup',
          'Store SEO and marketing basics',
          'A fully configured store project',
        ],
      },
    ],
  },
  {
    key: 'cyber-cloud',
    title: 'Cyber & Cloud',
    accent: 'emerald',
    courses: [
      {
        slug: 'cybersecurity-course-in-phagwara',
        label: 'Cybersecurity',
        title: 'Cybersecurity Course in Phagwara',
        duration: '4 Months',
        icon: 'shield',
        summary:
          'Network security, threat analysis and defensive practices — the foundation for every security specialisation.',
        highlights: [
          'Networking and security fundamentals',
          'Threat types and vulnerability analysis',
          'Security tools and incident response basics',
          'Web application security',
          'A hands-on security lab project',
        ],
      },
      {
        slug: 'ethical-hacking-course-in-phagwara',
        label: 'Ethical Hacking',
        title: 'Ethical Hacking Course in Phagwara',
        duration: '4 Months',
        icon: 'shield',
        summary:
          'Penetration testing methodology in a legal, lab-based environment — reconnaissance through reporting.',
        highlights: [
          'Reconnaissance and footprinting',
          'Scanning, enumeration and exploitation basics',
          'Web and network penetration testing',
          'Tools: Kali Linux, Burp Suite, Nmap',
          'A documented penetration-test report',
        ],
      },
      {
        slug: 'cloud-computing-course-in-phagwara',
        label: 'Cloud Computing',
        title: 'Cloud Computing Course in Phagwara',
        duration: '4 Months',
        icon: 'cloud',
        summary:
          'AWS fundamentals through deployment — compute, storage, networking and the services cloud roles run on daily.',
        highlights: [
          'Cloud fundamentals and AWS core services',
          'EC2, S3 and VPC networking',
          'IAM, security and cost management',
          'CI/CD and deployment basics',
          'A deployed cloud-hosted project',
        ],
      },
      {
        slug: 'linux-course-in-phagwara',
        label: 'Linux',
        title: 'Linux Course in Phagwara',
        duration: '2 Months',
        icon: 'terminal',
        summary:
          'Command-line fluency, shell scripting and system administration — the backbone skill under every cloud and DevOps role.',
        highlights: [
          'Linux file system and command line',
          'User, permission and process management',
          'Shell scripting and automation',
          'Networking and server basics',
          'A system administration mini-project',
        ],
      },
    ],
  },
]

/** Flat lookup used by the `/[slug]` route. */
export const allCoursePages: CoursePage[] = courseCatalog.flatMap((c) => c.courses)

export const findCourseBySlug = (slug: string): CoursePage | undefined =>
  allCoursePages.find((c) => c.slug === slug)
