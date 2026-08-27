/**
 * The Courses mega menu: four categories and the courses under each.
 *
 * Navigation only. The `/[slug]` landing pages read `data/courses` instead —
 * this file is imported by two *client* components (the Navbar and the
 * homepage's course carousel), so anything added here ships to the browser on
 * every page of the site. That is why it carries a label, a slug and a line of
 * copy per course and nothing more; syllabus, projects, salary bands and FAQs
 * all live in the server-only catalogue.
 *
 * Deliberately separate from `courses`/`courseCategories` in `site.ts`, which
 * drive the homepage's own filterable grid under `#courses`.
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
      },
      {
        slug: 'java-course-in-phagwara',
        label: 'Java',
        title: 'Java Course in Phagwara',
        duration: '4 Months',
        icon: 'coffee',
        summary:
          'Enterprise-grade Java — OOP fundamentals through Spring Boot — for students targeting backend and Android roles.',
      },
      {
        slug: 'c-course-in-phagwara',
        label: 'C',
        title: 'C Course in Phagwara',
        duration: '2 Months',
        icon: 'terminal',
        summary:
          'The foundation course every serious programmer starts with — memory, pointers and problem-solving from first principles.',
      },
      {
        slug: 'c-plus-plus-course-in-phagwara',
        label: 'C++',
        title: 'C++ Course in Phagwara',
        duration: '2 Months',
        icon: 'terminal',
        summary:
          'Object-oriented programming, STL and data structures — the standard prerequisite for competitive programming and interviews.',
      },
      {
        slug: 'kotlin-course-in-phagwara',
        label: 'Kotlin',
        title: 'Kotlin Course in Phagwara',
        duration: '3 Months',
        icon: 'mobile',
        summary:
          "Google's preferred language for native Android — concise syntax, coroutines and a real app shipped to your portfolio.",
      },
      {
        slug: 'web-designing-course-in-phagwara',
        label: 'Web Designing',
        title: 'Web Designing Course in Phagwara',
        duration: '2 Months',
        icon: 'palette',
        summary:
          'HTML, CSS and responsive layout — build pixel-accurate, mobile-first pages before moving into full development.',
      },
      {
        slug: 'web-development-course-in-phagwara',
        label: 'Web Development',
        title: 'Web Development Course in Phagwara',
        duration: '5 Months',
        icon: 'code',
        summary:
          'Front end to back end — JavaScript, a modern framework and a database, ending with a full deployed web application.',
      },
      {
        slug: 'mern-stack-course-in-phagwara',
        label: 'MERN Stack',
        title: 'MERN Stack Course in Phagwara',
        duration: '6 Months',
        icon: 'layers',
        summary:
          'MongoDB, Express, React and Node — the most in-demand JavaScript stack for building and shipping production apps.',
      },
      {
        slug: 'mean-stack-course-in-phagwara',
        label: 'MEAN Stack',
        title: 'MEAN Stack Course in Phagwara',
        duration: '6 Months',
        icon: 'layers',
        summary:
          'MongoDB, Express, Angular and Node — the enterprise-favoured alternative stack, built around TypeScript throughout.',
      },
      {
        slug: 'php-full-stack-course-in-phagwara',
        label: 'PHP Full Stack',
        title: 'PHP Full Stack Course in Phagwara',
        duration: '5 Months',
        icon: 'database',
        summary:
          'PHP and MySQL power a huge share of the live web — learn the language, a framework and real database-driven development.',
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
      },
      {
        slug: 'machine-learning-course-in-phagwara',
        label: 'Machine Learning',
        title: 'Machine Learning Course in Phagwara',
        duration: '4 Months',
        icon: 'cpu',
        summary:
          'Supervised, unsupervised and applied ML — the algorithms and workflow behind most real-world data products.',
      },
      {
        slug: 'deep-learning-course-in-phagwara',
        label: 'Deep Learning',
        title: 'Deep Learning Course in Phagwara',
        duration: '4 Months',
        icon: 'brain',
        summary:
          'Neural networks, CNNs and transformers with TensorFlow/PyTorch — for students ready to go past classical ML.',
      },
      {
        slug: 'data-science-course-in-phagwara',
        label: 'Data Science',
        title: 'Data Science Course in Phagwara',
        duration: '6 Months',
        icon: 'chart',
        summary:
          'Statistics, Python and machine learning combined into the end-to-end data science workflow employers actually hire for.',
      },
      {
        slug: 'data-analytics-course-in-phagwara',
        label: 'Data Analytics',
        title: 'Data Analytics Course in Phagwara',
        duration: '3 Months',
        icon: 'chart',
        summary:
          'Turn raw data into decisions — Excel, SQL and visualization tools used daily by working analysts.',
      },
      {
        slug: 'power-bi-course-in-phagwara',
        label: 'Power BI',
        title: 'Power BI Course in Phagwara',
        duration: '2 Months',
        icon: 'chart',
        summary:
          "Microsoft's leading BI tool — connect, model and visualize data into dashboards that decision-makers actually use.",
      },
      {
        slug: 'tableau-course-in-phagwara',
        label: 'Tableau',
        title: 'Tableau Course in Phagwara',
        duration: '2 Months',
        icon: 'chart',
        summary:
          'Industry-standard visual analytics — build the kind of interactive dashboards used across BI and analyst roles.',
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
      },
      {
        slug: 'social-media-marketing-course-in-phagwara',
        label: 'Social Media Marketing',
        title: 'Social Media Marketing Course in Phagwara',
        duration: '2 Months',
        icon: 'message',
        summary:
          'Grow and monetise an audience across Instagram, Facebook and LinkedIn with a real content and ad strategy.',
      },
      {
        slug: 'google-ads-course-in-phagwara',
        label: 'Google Ads',
        title: 'Google Ads Course in Phagwara',
        duration: '1 Month',
        icon: 'target',
        summary:
          'Search, display and shopping campaigns — plan, launch and optimise Google Ads that convert.',
      },
      {
        slug: 'seo-course-in-phagwara',
        label: 'SEO',
        title: 'SEO Course in Phagwara',
        duration: '2 Months',
        icon: 'search',
        summary:
          'On-page, off-page and technical SEO — rank real pages on Google using tools professionals use daily.',
      },
      {
        slug: 'wordpress-course-in-phagwara',
        label: 'WordPress',
        title: 'WordPress Course in Phagwara',
        duration: '1 Month',
        icon: 'edit',
        summary:
          'Design, build and launch a complete WordPress website — themes, plugins and page builders, no-code to light-code.',
      },
      {
        slug: 'shopify-course-in-phagwara',
        label: 'Shopify',
        title: 'Shopify Course in Phagwara',
        duration: '1 Month',
        icon: 'wallet',
        summary:
          'Build a launch-ready online store on Shopify — from product setup to payments, themes and store marketing.',
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
      },
      {
        slug: 'ethical-hacking-course-in-phagwara',
        label: 'Ethical Hacking',
        title: 'Ethical Hacking Course in Phagwara',
        duration: '4 Months',
        icon: 'shield',
        summary:
          'Penetration testing methodology in a legal, lab-based environment — reconnaissance through reporting.',
      },
      {
        slug: 'cloud-computing-course-in-phagwara',
        label: 'Cloud Computing',
        title: 'Cloud Computing Course in Phagwara',
        duration: '4 Months',
        icon: 'cloud',
        summary:
          'AWS fundamentals through deployment — compute, storage, networking and the services cloud roles run on daily.',
      },
      {
        slug: 'linux-course-in-phagwara',
        label: 'Linux',
        title: 'Linux Course in Phagwara',
        duration: '2 Months',
        icon: 'terminal',
        summary:
          'Command-line fluency, shell scripting and system administration — the backbone skill under every cloud and DevOps role.',
      },
    ],
  },
]
