/**
 * Slug-routed catalog for After 12th — powers the navbar dropdown and every
 * `/after-12th/[slug]` landing page.
 */

import type { ProgramPage as CatalogPage, ProgramCategory as CatalogCategory } from './internshipPages'

export type After12Page = CatalogPage
export type After12Category = CatalogCategory

export const after12Catalog: After12Category[] = [
  {
    key: '6-month-certificates',
    title: '6 Month Certificates',
    programs: [
      {
        slug: 'digital-marketing-and-communication-course-in-phagwara',
        label: 'Digital Marketing & Communication',
        title: 'Digital Marketing & Communication Course in Phagwara',
        duration: '6 Months',
        icon: 'megaphone',
        summary:
          'A 12th-pass-friendly launchpad into marketing — SEO, social, ads and the communication skills that come with client-facing work.',
        highlights: [
          'SEO, social media and paid ad fundamentals',
          'Business writing and client communication',
          'Content planning and analytics basics',
          'A live campaign built for your portfolio',
          'Certificate of completion',
        ],
      },
      {
        slug: 'python-programming-course-in-phagwara',
        label: 'Python Programming',
        title: 'Python Programming Course in Phagwara',
        duration: '6 Months',
        icon: 'code',
        summary:
          'No prior coding background needed — start from first principles and finish with real Python projects on your resume.',
        highlights: [
          'Programming fundamentals from scratch',
          'Data structures and problem solving',
          'File handling, modules and libraries',
          'Three portfolio-ready mini-projects',
          'Certificate of completion',
        ],
      },
      {
        slug: 'machine-learning-and-ai-course-in-phagwara',
        label: 'Machine Learning & AI',
        title: 'Machine Learning & AI Course in Phagwara',
        duration: '6 Months',
        icon: 'brain',
        summary:
          'A guided first step into AI — Python, statistics and machine learning basics, built for students starting straight after school.',
        highlights: [
          'Python and statistics foundations',
          'Core machine learning algorithms',
          'Hands-on labs with real datasets',
          'A guided ML project from data to model',
          'Certificate of completion',
        ],
      },
      {
        slug: 'cybersecurity-course-in-phagwara',
        label: 'Cybersecurity',
        title: 'Cybersecurity Course in Phagwara',
        duration: '6 Months',
        icon: 'shield',
        summary:
          'Networking and security fundamentals for students who want to start a security career right after 12th, no degree prerequisite.',
        highlights: [
          'Networking and operating system fundamentals',
          'Core security concepts and common threats',
          'Hands-on labs with security tools',
          'An introductory security assessment project',
          'Certificate of completion',
        ],
      },
    ],
  },
  {
    key: '1-year-certificates',
    title: '1 Year Certificates',
    programs: [
      {
        slug: 'generative-ai-course-in-phagwara',
        label: 'Generative AI',
        title: 'Generative AI Course in Phagwara',
        duration: '1 Year',
        icon: 'sparkles',
        summary:
          'A full year on the fastest-moving part of AI — LLMs, prompt engineering and building real applications on top of generative models.',
        highlights: [
          'Python and deep learning foundations',
          'LLMs, prompt engineering and fine-tuning basics',
          'Building applications with generative AI APIs',
          'A deployed generative AI capstone project',
          'Certificate of completion',
        ],
      },
      {
        slug: 'cloud-computing-and-devops-course-in-phagwara',
        label: 'Cloud Computing & DevOps',
        title: 'Cloud Computing & DevOps Course in Phagwara',
        duration: '1 Year',
        icon: 'cloud',
        summary:
          'From cloud fundamentals to CI/CD pipelines — the full skillset behind how modern applications are deployed and run.',
        highlights: [
          'Cloud fundamentals and core AWS services',
          'Linux, networking and containerisation',
          'CI/CD pipelines and infrastructure as code',
          'A deployed, automated cloud project',
          'Certificate of completion',
        ],
      },
      {
        slug: 'ai-and-data-science-course-in-phagwara',
        label: 'AI & Data Science',
        title: 'AI & Data Science Course in Phagwara',
        duration: '1 Year',
        icon: 'chart',
        summary:
          'The complete data science pathway in one year — statistics, Python, machine learning and a full end-to-end capstone.',
        highlights: [
          'Statistics, Python and data wrangling',
          'Exploratory data analysis and visualization',
          'Machine learning model building and evaluation',
          'A full data science capstone project',
          'Certificate of completion',
        ],
      },
      {
        slug: 'machine-learning-and-deep-learning-course-in-phagwara',
        label: 'Machine Learning & Deep Learning',
        title: 'Machine Learning & Deep Learning Course in Phagwara',
        duration: '1 Year',
        icon: 'brain',
        summary:
          'Classical machine learning through neural networks and deep learning — a full year built for a genuine AI specialisation.',
        highlights: [
          'Core machine learning algorithms',
          'Neural networks and deep learning fundamentals',
          'Computer vision and NLP project work',
          'A trained and deployed deep learning model',
          'Certificate of completion',
        ],
      },
      {
        slug: 'cybersecurity-and-ethical-hacking-course-in-phagwara',
        label: 'Cybersecurity & Ethical Hacking',
        title: 'Cybersecurity & Ethical Hacking Course in Phagwara',
        duration: '1 Year',
        icon: 'shield',
        summary:
          'Defensive security through offensive practice — a full year covering networking, security operations and hands-on penetration testing.',
        highlights: [
          'Networking and security fundamentals',
          'Security operations and incident response',
          'Penetration testing methodology and tools',
          'A documented penetration-test project',
          'Certificate of completion',
        ],
      },
    ],
  },
  {
    key: 'civil-mechanical',
    title: 'Civil / Mechanical',
    programs: [
      {
        slug: 'autocad-course-in-phagwara',
        label: 'AutoCAD',
        title: 'AutoCAD Course in Phagwara',
        duration: '3 Months',
        icon: 'ruler',
        summary:
          'Industry-standard 2D/3D drafting — the first tool every civil and mechanical drawing career starts with.',
        highlights: [
          '2D drafting and dimensioning fundamentals',
          '3D modelling basics',
          'Layers, blocks and layout templates',
          'Print-ready technical drawing standards',
          'A drafted project portfolio piece',
        ],
      },
      {
        slug: 'solidworks-course-in-phagwara',
        label: 'SolidWorks',
        title: 'SolidWorks Course in Phagwara',
        duration: '3 Months',
        icon: 'ruler',
        summary:
          'Parametric 3D mechanical design — part modelling, assemblies and drawings for mechanical and product design roles.',
        highlights: [
          'Sketching and parametric part modelling',
          'Assemblies and mates',
          'Engineering drawing generation',
          'Basic simulation and analysis tools',
          'A modelled assembly project',
        ],
      },
      {
        slug: '3ds-max-course-in-phagwara',
        label: '3ds Max',
        title: '3ds Max Course in Phagwara',
        duration: '3 Months',
        icon: 'image',
        summary:
          '3D modelling, texturing and rendering for architectural visualisation and design presentation work.',
        highlights: [
          '3D modelling fundamentals',
          'Materials, texturing and lighting',
          'Camera setup and scene composition',
          'Rendering for presentation-quality output',
          'A rendered visualisation project',
        ],
      },
      {
        slug: 'revit-course-in-phagwara',
        label: 'Revit',
        title: 'Revit Course in Phagwara',
        duration: '3 Months',
        icon: 'building',
        summary:
          'Building Information Modelling (BIM) for architecture and construction — the standard tool on modern project teams.',
        highlights: [
          'BIM fundamentals and the Revit workflow',
          'Architectural modelling and families',
          'Documentation and construction drawings',
          'Collaboration and project coordination basics',
          'A modelled building project',
        ],
      },
    ],
  },
]

export const allAfter12Pages: After12Page[] = after12Catalog.flatMap((c) => c.programs)

export const findAfter12BySlug = (slug: string): After12Page | undefined =>
  allAfter12Pages.find((p) => p.slug === slug)
