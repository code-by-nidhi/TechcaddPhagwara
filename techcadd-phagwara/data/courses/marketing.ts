/**
 * Digital Marketing course pages.
 *
 * Only what genuinely differs between tracks is written here — the audience
 * grid, the "why this programme" cards, the instructor panel, the shared FAQs
 * and the student reviews all come from `./shared` via `makeCourse`.
 *
 * @see ./factory for what each field becomes on the page.
 */

import { makeCourse } from './factory'
import type { CourseContent } from './types'

export const MARKETING_COURSES: CourseContent[] = [
  makeCourse({
    slug: 'digital-marketing-course-in-phagwara',
    label: 'Digital Marketing',
    title: 'Digital Marketing Course in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'megaphone',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Turn creativity into measurable growth — SEO, social media, Google Ads, Meta Ads, content and analytics, with live campaigns and placement assistance.',
    overview:
      'Techcadd’s Digital Marketing Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, business professionals, entrepreneurs and working professionals who want practical skill in online marketing and business growth. It covers digital marketing fundamentals, search engine optimisation, social media marketing, Google Ads, Meta Ads, content marketing, email marketing, website optimisation, analytics, lead generation, branding and AI-powered marketing tools. The training is hands-on throughout — live campaigns, practical projects and industry-standard platforms — so you learn how businesses attract audiences, generate leads, build visibility, run advertising and improve digital growth. Unlike purely theoretical learning, you work on real campaigns, SEO strategy, social media management, paid advertising, analytics and content, and finish understanding how organisations actually reach customers online.',
    demand:
      'Every shop, clinic, showroom and coaching centre in Phagwara now competes on Google and Instagram, and almost none of them has anyone in-house who can run it properly.',
    modules: [
      {
        title: 'Foundations & Online Strategy',
        summary:
          'Understand how digital marketing works and how a business builds an online presence worth having.',
        topics: [
          'Digital marketing fundamentals and the customer journey',
          'Websites, search engines, social media and online advertising',
          'Identifying target audiences and marketing objectives',
          'Building a strategy for a real local business scenario',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'SEO & Keyword Research',
        summary:
          'Learn how websites earn visibility on search — the channel that keeps working after the ad budget stops.',
        topics: [
          'Keyword research and search intent',
          'On-page SEO techniques',
          'Off-page SEO concepts',
          'Technical SEO basics',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Social Media Marketing & Content Strategy',
        summary:
          'Learn how businesses build an audience rather than just an account.',
        topics: [
          'Instagram, Facebook, LinkedIn and the platform differences',
          'Content strategies and social media calendars',
          'Audience engagement techniques',
          'Organic growth and branding',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Google Ads & Paid Advertising',
        summary:
          'Turn a strategy into a campaign with a budget attached and a number at the end of it.',
        topics: [
          'Google Ads fundamentals',
          'Search advertising and display campaigns',
          'Keyword-focused campaigns and audience targeting',
          'Budgeting, conversion tracking and optimisation',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Meta Ads & Lead Generation',
        summary:
          'Learn how Facebook and Instagram advertising actually brings a business enquiries.',
        topics: [
          'Campaign objectives and audience targeting',
          'Ad creatives and copywriting',
          'Building lead generation campaigns',
          'Analysing performance and improving results',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Content Marketing & Website Optimisation',
        summary:
          'Creating content is the beginning. Learn how marketers use it to attract and convert.',
        topics: [
          'Blogs, landing pages and marketing copy',
          'Content for different stages of the customer journey',
          'Website optimisation basics',
          'Calls-to-action and conversions',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Digital Marketing',
        summary:
          'Discover how AI is changing marketing without replacing the strategy behind it.',
        topics: [
          'AI for content ideas and research',
          'Faster marketing workflows',
          'Using AI to understand audiences and spot opportunities',
          'Responsible use, keeping content authentic',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Analytics & Marketing Strategy',
        summary:
          'Learn how professional marketers measure success — and admit when a campaign is not working.',
        topics: [
          'Website traffic and marketing analytics',
          'The performance metrics that matter',
          'Identifying growth opportunities and campaign gaps',
          'Communicating results to clients and employers',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Campaigns, Portfolio & Career Preparation',
        summary:
          'An end-to-end campaign from strategy to report, then learning to present it convincingly.',
        topics: [
          'Strategy, audience research, SEO, content and advertising',
          'Assignments based on real business scenarios',
          'A portfolio project demonstrating your skills',
          'Career guidance across SEO, social, performance marketing and advertising',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build a digital strategy from audience research rather than guesswork',
      'Run keyword research and optimise a site for search',
      'Plan and manage social media content that grows an audience',
      'Launch and optimise Google Ads and Meta Ads campaigns',
      'Read analytics honestly — CTR, conversions, cost per lead and ROI',
      'Ship an end-to-end campaign you can defend in an interview',
    ],
    tools: [
      'Google Ads',
      'Google Analytics',
      'Google Search Console',
      'Meta Business Suite',
      'Facebook Ads Manager',
      'Instagram Marketing Tools',
      'Canva',
      'WordPress',
      'SEMrush Concepts',
      'Keyword Research Tools',
      'Email Marketing Platforms',
      'ChatGPT & AI Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need an advanced technical background to understand how online marketing works. A structured course covers SEO, social media, content marketing, Google Ads, branding and advertising — a smart way to explore career options alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical digital skill. Whatever you study — commerce, management, arts, computer science, engineering or media — digital marketing shows you how businesses actually promote what they sell.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning several platforms alone is confusing. A structured path replaces certificate-collecting with understanding how real campaigns run: keyword research, content, SEO, advertising, targeting, analytics and conversion.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in sales, business development, customer service, IT, admin, media or management? Digital marketing makes your experience more valuable. Sales professionals learn lead generation; business professionals learn how campaigns attract and convert.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become a marketer. Understanding customer behaviour, website traffic, ad performance, engagement and lead generation makes you a better judge of what your agency is charging you for.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'SEO, social media management, Google Ads, Meta Ads, content marketing, email marketing, lead generation and website optimisation are all billable — and local businesses buy them monthly rather than once.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Digital marketing skills are in demand across industries',
        copy: 'IT companies, startups, retail brands, hospitals, educational institutions, e-commerce businesses, restaurants, real estate and local businesses all market online. SEO, social media, Google Ads, Meta Ads, content, analytics and lead generation apply across all of them.',
      },
      {
        title: 'Learn how digital marketing actually works',
        copy: 'A social media post is the beginning. SEO and keyword research, on-page and off-page, social media, Google and Meta Ads, content and email marketing, lead generation, website optimisation, analytics, conversion tracking, targeting and campaign strategy are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you where the tools are. Practical training teaches you to make marketing decisions — keyword research, optimisation, social planning, ad creation, targeting, tracking and performance analysis.',
      },
      {
        title: 'Think about results, not just reach',
        copy: 'Getting views is easy; generating business results is the challenge. You learn to read impressions, clicks, CTR, conversions, engagement rate, cost per lead, traffic, bounce rate and ROI well enough to know what a campaign actually achieved.',
      },
      {
        title: 'Digital marketing and AI are changing online growth',
        copy: 'AI is changing how content gets created and campaigns get optimised. But it does not replace strategy: the audience, business goals, customer journey, brand positioning and competition still need a person who understands them.',
      },
    ],
    whyNow: {
      title: 'Build Marketing Skills You Can Show, Not Just Talk About',
      points: [
        'Campaign-based projects give you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates SEO, advertising, social media, content strategy and lead generation in interviews.',
        'Digital marketing and SEO roles in Punjab start around ₹15,000 – ₹28,000 a month for a fresher — the most accessible entry point in the catalogue.',
        'The goal is not learning where the buttons are — it is turning digital activity into business growth.',
      ],
    },
    roles: [
      'Digital Marketing Executive',
      'SEO Specialist',
      'Social Media Manager',
      'Performance Marketing Executive',
      'Content Marketer',
      'Digital Marketing Analyst',
      'AI-Powered Digital Marketer',
      'Freelance Digital Marketer',
    ],
    roleDetails: [
      {
        role: 'Digital Marketing Executive',
        copy: 'Plan and manage online marketing across SEO, social media, advertising, content and analytics. The most popular path after this course.',
      },
      {
        role: 'SEO Specialist',
        copy: 'Improve search visibility through keyword research, on-page and off-page SEO, technical optimisation, content strategy and monitoring.',
      },
      {
        role: 'Social Media Manager',
        copy: 'Run social strategy for brands — content calendars, engagement, branding, campaigns, analytics and community growth.',
      },
      {
        role: 'Performance Marketing Executive',
        copy: 'Create and optimise paid campaigns against measurable outcomes, working with Google Ads, Meta Ads, targeting, budgets and conversions.',
      },
      {
        role: 'Content Marketer',
        copy: 'Create the content that attracts and holds an audience — blog planning, website copy, social messaging and campaign content.',
      },
      {
        role: 'Digital Marketing Analyst',
        copy: 'Track and analyse performance in Google Analytics, Google Ads and Meta Ads, using traffic, CTR, conversions, cost per lead and ROI to show what works.',
      },
      {
        role: 'AI-Powered Digital Marketer',
        copy: 'Combine marketing with modern AI tools to speed up research, content, planning and reporting — with strategy and creativity still doing the real work.',
      },
      {
        role: 'Freelance Digital Marketer',
        copy: 'Build a freelance practice on SEO, social media, advertising, lead generation and content for businesses in Phagwara or remotely.',
      },
    ],
    hiring: [
      'Digital marketing agencies and advertising companies',
      'Startups and SaaS companies promoting products online',
      'E-commerce and retail brands generating online sales',
      'Educational organisations running lead generation campaigns',
      'Real estate companies using digital advertising',
    ],
    nextSteps: [
      'SEO specialisation',
      'Google Ads in depth',
      'Social media marketing',
      'Performance marketing & analytics',
    ],
    industries: ['Agencies', 'E-commerce & retail', 'Education', 'Real estate'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. The ₹15,000 floor is the lowest in the catalogue, which is
     * consistent with digital marketing being the most accessible entry point
     * and the one with the least technical barrier. `scale` is the midpoint in
     * ₹/month; remote sits below Punjab at the fresher end on purpose, since
     * freelance income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Digital Marketing Executive',
      summary:
        'Plans and runs the campaigns a business grows through. Earnings vary with your skills, project experience, portfolio, certifications, company, location and performance.',
      starting: '₹15,000–₹28,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Digital Marketing / SEO',
          fresher: '₹15,000–₹28,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 21500, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Digital / Performance Marketing',
          fresher: '₹22,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 31000, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Digital Marketing',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Digital Marketing Executive, SEO Specialist, Social Media Manager, PPC Executive and Performance Marketer. Practical campaign experience and the ability to analyse results matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher starts around ₹15,000 – ₹28,000 a month in the Punjab market — the lowest starting band in the catalogue, and honest about it — rising to ₹30,000 – ₹50,000 with two years of campaign results behind you. Performance marketers who can show ROI move fastest.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and it is arguably the best freelance skill here because local businesses buy marketing monthly rather than once. Income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have client results to point at.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Digital marketing and advertising agencies, startups and SaaS companies, e-commerce and retail brands, educational organisations running lead generation, and real estate companies — plus remote and freelance clients.',
      },
      {
        q: 'Should I take this or one of the specialist courses?',
        a: 'Start here. This course covers SEO, social media and Google Ads at working depth and shows you which you actually enjoy. The specialist courses — SEO, Google Ads, Social Media Marketing — go far deeper into one channel, and make most sense once you know which one you want to build a career around.',
      },
    ],
    projects: [
      {
        name: 'Digital Marketing Strategy Setup',
        summary:
          'Build a full strategy from scratch: research a business, understand its audience, study competitors, select channels, define objectives and plan for growth.',
        tech: ['Marketing Strategy', 'Audience Research'],
        level: 'Beginner',
        skills: ['Digital Growth', 'Channel Planning'],
      },
      {
        name: 'SEO Website Optimisation Project',
        summary:
          'An SEO strategy to improve visibility: keyword research, page optimisation, search intent and content ideas that keep working long after a campaign ends.',
        tech: ['SEO', 'Keyword Research'],
        level: 'Beginner',
        skills: ['On-Page Optimisation', 'Search Visibility'],
      },
      {
        name: 'Social Media Marketing Project',
        summary:
          'A complete social strategy for a brand: content ideas, a posting calendar, engagement approach, competitor analysis and a practical growth plan.',
        tech: ['Social Media', 'Content Strategy'],
        level: 'Intermediate',
        skills: ['Brand Growth', 'Audience Engagement'],
      },
      {
        name: 'Lead Generation Advertising Campaign',
        summary:
          'An advertising campaign built to generate enquiries — targeting, ad copy, creatives, objectives, landing pages and conversion-focused thinking.',
        tech: ['Google Ads', 'Meta Ads'],
        level: 'Intermediate',
        skills: ['Lead Generation', 'Conversion'],
      },
      {
        name: 'Local Business Marketing Project',
        summary:
          'A strategy for a real Phagwara business: analyse the audience, optimise their online presence, create content and turn marketing activity into enquiries.',
        tech: ['Local SEO', 'Digital Marketing'],
        level: 'Intermediate',
        skills: ['Business Growth', 'Local Marketing'],
      },
      {
        name: 'Performance Marketing Analytics Project',
        summary:
          'Take a running campaign and make it better. Work through clicks, impressions, CTR, conversions, engagement and cost per lead the way a performance marketer does.',
        tech: ['Analytics', 'Digital Advertising'],
        level: 'Advanced',
        skills: ['Campaign Performance', 'Optimisation'],
      },
      {
        name: 'AI-Powered Digital Marketing Project',
        summary:
          'Use modern AI tools to accelerate research, content ideas, audience analysis and reporting — with creativity, accuracy and brand identity kept central.',
        tech: ['AI Marketing', 'Automation'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Content'],
      },
      {
        name: 'End-to-End Digital Marketing Capstone',
        summary:
          'A complete solution for a real business: audience research, SEO, content, advertising, analytics, reporting and optimisation.',
        tech: ['Digital Marketing', 'SEO', 'Analytics'],
        level: 'Advanced',
        skills: ['Advertising', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a business requirement into a focused strategy — research the audience, understand customer behaviour, study competitors, define goals and choose the channels that fit.',
        artefact: 'Market Research & Digital Strategy',
      },
      {
        title: 'Build',
        copy: 'Create campaigns with trainer guidance across SEO, content, social media, Google Ads, Meta Ads, analytics and AI-powered workflows — testing ideas and improving on what the numbers show.',
        artefact: 'Digital Campaign & Marketing Execution',
      },
      {
        title: 'Present & Analyse',
        copy: 'Present the objective, audience strategy, channels, campaigns, KPIs, results and optimisation like a professional, and learn to explain your work in an interview or client meeting.',
        artefact: 'End-to-End Campaign & Business Growth',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready marketing certificate',
        copy: 'A certificate reflecting practical understanding of SEO, social media, Google Ads, Meta Ads, content marketing, analytics, lead generation and campaign management.',
      },
      {
        title: 'Learn through practical campaigns',
        copy: 'Work on projects mirroring real business scenarios — researching keywords, creating content, optimising websites, running campaigns, generating leads and presenting insight.',
      },
      {
        title: 'Build a marketing portfolio',
        copy: 'SEO projects, social strategies, Google Ads campaigns, Meta campaigns, content calendars, lead generation work and analytics reports — proof you can show an employer or client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, interview preparation, guidance on presenting your campaigns, and a clear picture of the paths in SEO, social, performance marketing, content and advertising.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand digital marketing',
        copy: 'The field keeps moving — search engines, AI-powered marketing, ad platforms, social algorithms, automation and customer behaviour all change. Teaching uses current workflows and practical examples, so you understand not only how to run a campaign but why a strategy matters.',
      },
      {
        title: 'Live and practical campaigns',
        copy: 'Without practical work it is hard to understand a real campaign. Projects span SEO, keyword research, social media, content, Google Ads, Meta Ads, analytics, lead generation and optimisation.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss a strategy and get guidance while working on practical tasks — whether you are a beginner or strengthening existing marketing skill.',
      },
      {
        title: 'Build a marketing portfolio',
        copy: 'Finishing should mean more than a certificate. Practical exercises produce portfolio work demonstrating SEO, advertising, social media, content, analytics and lead generation.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across the digital marketing industry.',
      },
      {
        title: 'A practical approach to marketing',
        copy: 'The goal is confidence making marketing decisions, not memorising platform interfaces — practical SEO, social media, advertising, analytics, content strategy, lead generation and optimisation.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Digital marketing curriculum',
          techcadd:
            'Industry-focused training covering SEO, social media, advertising, analytics, content and lead generation',
          others: 'Often focuses mainly on basic marketing concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real business scenarios',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical campaign training',
          techcadd: 'Students learn SEO, advertising, social media and campaign analysis',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Marketing skills',
          techcadd: 'Covers audience research, content, campaigns, analytics and optimisation',
          others: 'May cover only selected concepts',
        },
        {
          feature: 'Paid advertising',
          techcadd: 'Focus on understanding campaign strategy and performance',
          others: 'Advertising training can vary',
        },
        {
          feature: 'SEO training',
          techcadd: 'Practical understanding of keywords, optimisation and search visibility',
          others: 'SEO may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and campaign-based projects',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
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
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a digital marketing institute in Phagwara, ask what you will actually learn, whether you will work on practical campaigns, how trainers teach marketing, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your marketing fundamentals',
        blurb:
          'Understand how online marketing works and how businesses use search, social and digital platforms to reach customers.',
        skills: ['Google tools', 'Canva', 'Social platforms', 'WordPress basics', 'Keyword research'],
        recommendedFor:
          'Digital Marketing Trainee, SEO Trainee, Social Media Intern and Marketing Intern roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic digital marketing',
        blurb:
          'Practical skill in SEO, advertising, social strategy, content marketing, analytics and lead generation — the job-ready level.',
        skills: ['Google Ads', 'Meta Ads Manager', 'Google Analytics', 'Search Console', 'WordPress'],
        recommendedFor:
          'Digital Marketing Executive, SEO Executive, Social Media Executive, PPC Executive and performance marketing roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete performance marketing skill set',
        blurb:
          'SEO combined with advanced advertising, analytics, performance marketing, content strategy, automation and AI-powered campaign management.',
        skills: ['Google Ads', 'Meta Business Suite', 'Analytics', 'Automation platforms', 'AI tools'],
        recommendedFor:
          'Performance Marketer, Digital Marketing Strategist, SEO Specialist, PPC Specialist, Growth Marketer and freelance pathways.',
      },
    ],
    capabilities: [
      { capability: 'Digital marketing fundamentals', included: [true, true, true] },
      { capability: 'SEO basics', included: [true, true, true] },
      { capability: 'Social media marketing', included: [true, true, true] },
      { capability: 'Content marketing', included: [true, true, true] },
      /* Your matrix marks this "Basic" at 3 months rather than a tick, so the
         row says so rather than overstating what the foundation tier covers. */
      { capability: 'Keyword research (basic at 3 months)', included: [true, true, true] },
      { capability: 'Google Ads', included: [false, true, true] },
      { capability: 'Meta Ads', included: [false, true, true] },
      { capability: 'Advanced SEO', included: [false, true, true] },
      { capability: 'Analytics', included: [false, true, true] },
      { capability: 'Lead generation', included: [false, true, true] },
      { capability: 'Performance marketing', included: [false, false, true] },
      { capability: 'Advanced advertising', included: [false, false, true] },
      { capability: 'Conversion optimisation', included: [false, false, true] },
      { capability: 'Marketing automation', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional SEO, advertising, social strategy, analytics and lead generation. The 9-month programme combines all of it with advanced performance marketing, automation, conversion optimisation, AI tools and professional campaign strategy — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Digital Marketing with us?',
      intro:
        'The goal is not learning where to click inside an ad platform. The focus is on understanding the audience, spotting the opportunity, choosing the right channel, tracking what happens and building strategy that supports real growth.',
      points: [
        {
          title: 'Real budgets, real campaigns',
          copy: 'You run live campaigns rather than mock ones. Watching your own money convert — or not — teaches faster than any case study.',
        },
        {
          title: 'Local businesses as the brief',
          copy: 'Projects use real Phagwara business scenarios, which is also where most of your first freelance clients will come from.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering strategy, SEO, social, lead generation, a local business, analytics, AI tooling and a capstone you own.',
        },
        {
          title: 'Numbers over vanity metrics',
          copy: 'Reach and likes are easy. Cost per lead, conversion rate and ROI are what a client pays for, and what gets taught here.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Digital Marketing Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how online marketing and digital business growth work. The focus is practical: SEO, social media, Google Ads, Meta Ads, content marketing, analytics, lead generation and campaign management — real skill rather than marketing concepts.',
      },
      {
        q: 'Who can join a Digital Marketing Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs and aspiring freelancers. Beginners can start without previous marketing experience; professionals use it to strengthen their promotional skills.',
      },
      {
        q: 'Is Digital Marketing a good career option for freshers?',
        a: 'Yes. It opens opportunities in SEO, social media, advertising, content marketing, performance marketing and analytics. Depending on skills and experience, learners can explore roles such as Digital Marketing Executive, SEO Specialist, Social Media Manager, PPC Executive and Performance Marketer.',
      },
      {
        q: 'What will I learn in the Digital Marketing Course?',
        a: 'Fundamentals, SEO, keyword research, social media marketing, Google Ads, Meta Ads, content marketing, email marketing, analytics, lead generation, website optimisation, campaign strategy and performance marketing — plus traffic, CTR, conversions, engagement rate, cost per lead and ROI.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Digital marketing becomes much easier once you work with real campaigns, keywords, advertisements, content and analytics. The approach includes practical campaign exercises, SEO activities, advertising tasks, social strategies and real business scenarios.',
      },
      {
        q: 'Will I work on Digital Marketing projects during the course?',
        a: 'Yes. Assignments include SEO projects, social campaigns, Google Ads strategies, Meta advertising, lead generation projects, content marketing, analytics reports and optimisation exercises — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Digital Marketing after 12th?',
        a: 'Absolutely, if you are interested in technology, business, marketing, content or social media. It lets students develop a specialised skill while continuing formal education or preparing for future opportunities.',
      },
      {
        q: 'Can Digital Marketing help me become a freelancer?',
        a: 'Yes. Freelancers can offer SEO, social media management, Google Ads, Meta Ads, content marketing, lead generation and online branding. But successful freelancing needs more than the tools: a portfolio, an understanding of client requirements and consistently delivering results matter just as much.',
      },
      {
        q: 'Does the course include AI in Digital Marketing?',
        a: 'Yes. Modern workflows use AI for content research, campaign ideas, audience analysis, copywriting, reporting and automation. The course covers how these tools support marketing while keeping strategy, creativity, accuracy and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Digital Marketing Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, practical training, live campaign exercises, SEO training, advertising modules, trainer experience, tools covered, portfolio projects, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'seo-course-in-phagwara',
      'google-ads-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
      'wordpress-course-in-phagwara',
      'shopify-course-in-phagwara',
      'web-designing-course-in-phagwara',
    ],
    keywords: [
      'digital marketing course in phagwara',
      'digital marketing training in phagwara',
      'digital marketing classes in phagwara',
      'digital marketing institute in phagwara',
      'seo course in phagwara',
      'digital marketing course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'social-media-marketing-course-in-phagwara',
    label: 'Social Media Marketing',
    title: 'Social Media Marketing Course in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'megaphone',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Turn every post into growth — content strategy, Instagram, Facebook and LinkedIn marketing, Meta Ads and analytics, with live projects and placement assistance.',
    overview:
      'Techcadd’s Social Media Marketing Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, business professionals, entrepreneurs, aspiring content creators and working professionals who want practical skill in social growth and online branding. It covers social media fundamentals, Instagram, Facebook and LinkedIn marketing, content strategy, paid advertising, audience targeting, content creation, brand management, analytics, lead generation, community engagement and AI-powered marketing tools. The training is hands-on throughout — practical projects and industry-standard platforms — so you learn how businesses build audiences, create content that lands, promote brands, run campaigns and improve growth. Unlike purely theoretical learning, you work on content planning, strategy, campaign management, paid advertising, engagement, analytics and branding, and finish understanding how organisations actually connect with customers on social platforms.',
    demand:
      'Every business in Phagwara now has an Instagram account and almost none of them has a strategy behind it, which is exactly the gap a trained social marketer fills — often as a paid monthly retainer.',
    modules: [
      {
        title: 'Foundations & Social Strategy',
        summary:
          'Understand how social media marketing works and how a business builds a presence worth following.',
        topics: [
          'Social media fundamentals and the customer journey',
          'Instagram, Facebook, LinkedIn and their differences',
          'Identifying target audiences and objectives',
          'Building a strategy for a real local business scenario',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Content Strategy & Creative Planning',
        summary:
          'Learn how brands create content that is consistent, meaningful and worth someone’s attention.',
        topics: [
          'Content pillars and audience interests',
          'Content research and creative planning',
          'Caption writing and storytelling',
          'Building content calendars',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Instagram, Facebook & LinkedIn Marketing',
        summary:
          'Learn how businesses build audiences on each major platform, and why the same post does not work everywhere.',
        topics: [
          'Instagram marketing techniques',
          'Facebook page and community strategy',
          'LinkedIn content and professional branding',
          'Creating platform-specific content',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Reels, Short Video & Content Creation',
        summary:
          'Turn creative ideas into short-form content that holds attention past the first second.',
        topics: [
          'Reels and video marketing concepts',
          'Storytelling for short video',
          'Hooks, captions and audience retention',
          'Content strategies for modern platforms',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Social Media Ads & Lead Generation',
        summary:
          'Learn how paid social actually brings a business enquiries rather than impressions.',
        topics: [
          'Campaign objectives and audience targeting',
          'Ad creatives and copywriting',
          'Building lead generation campaigns',
          'Analysing performance and improving results',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Brand Building & Community Management',
        summary:
          'Content is the beginning. Learn how marketers build a community and a brand people remember.',
        topics: [
          'Brand voice and positioning',
          'Audience engagement techniques',
          'Managing comments and online interactions',
          'Community growth and long-term brand development',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Social Media Marketing',
        summary:
          'Discover how AI is changing content workflows without replacing the creativity behind them.',
        topics: [
          'AI for content ideas and research',
          'Faster creative workflows',
          'Using AI to understand audiences and spot opportunities',
          'Responsible use, keeping content authentic',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Social Media Analytics & Strategy',
        summary:
          'Learn how professional marketers measure success — and tell a good month from a lucky one.',
        topics: [
          'Platform insights and performance metrics',
          'Engagement and growth KPIs',
          'Identifying content opportunities and campaign gaps',
          'Communicating results to clients and employers',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Projects, Portfolio & Career Preparation',
        summary:
          'An end-to-end campaign from strategy to report, then learning to present it convincingly.',
        topics: [
          'Strategy, audience research, content, advertising and analytics',
          'Assignments based on real business scenarios',
          'A portfolio project demonstrating your skills',
          'Career guidance across social, content strategy and advertising',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Build a social strategy from audience research rather than guesswork',
      'Plan and produce content that suits each platform’s audience',
      'Write hooks, captions and short-video scripts that hold attention',
      'Launch and optimise Meta Ads campaigns for real leads',
      'Read platform analytics honestly — reach, engagement, cost per lead',
      'Ship an end-to-end campaign you can defend in an interview',
    ],
    tools: [
      'Meta Business Suite',
      'Facebook Ads Manager',
      'Instagram Professional Tools',
      'LinkedIn Marketing Tools',
      'Canva',
      'Content Scheduling Tools',
      'Social Media Analytics Tools',
      'Google Analytics Concepts',
      'AI Content Tools',
      'ChatGPT & AI Tools',
      'Hashtag Research Tools',
      'Content Planning Platforms',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need an advanced technical background to understand how social platforms work. A structured course covers content creation, Instagram and Facebook marketing, strategy, branding and advertising — a creative, career-focused skill to explore alongside your studies.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical digital skill. Whatever you study — commerce, management, arts, computer science, engineering or media — social marketing shows you how businesses actually communicate with audiences.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning several platforms alone is confusing. A structured path replaces certificate-collecting with understanding how real campaigns run: content research, creative planning, targeting, advertising, engagement and analytics.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in sales, business development, customer service, IT, admin, media or management? Social marketing makes your experience more valuable — how content builds awareness, and how campaigns generate leads.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become a marketer. Understanding audience behaviour, engagement, ad performance, brand visibility and lead generation makes you a better judge of what your agency or freelancer is delivering.',
      },
      {
        label: 'Freelancers & Content Creators',
        copy: 'Instagram management, Facebook and LinkedIn marketing, content creation, social advertising, community management and brand promotion are all billable — and local businesses buy them monthly rather than once.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Social media skills are in demand across industries',
        copy: 'Startups, retail brands, educational institutions, restaurants, hospitals, e-commerce, real estate, IT firms and local businesses all use social media to reach audiences. Instagram, Facebook, LinkedIn, content strategy, advertising, engagement and analytics apply across all of them.',
      },
      {
        title: 'Learn how social media marketing actually works',
        copy: 'A post is the beginning. Strategy, content planning, platform marketing, reels and short-form content, advertising, audience research, brand positioning, community management, calendars, hashtags, lead generation, analytics and optimisation are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you where the features are. Practical training teaches you to make marketing decisions — content research, planning, creative strategy, caption writing, targeting, campaign creation, scheduling and performance tracking.',
      },
      {
        title: 'Think about results, not just likes',
        copy: 'Getting likes is easy; creating business results is the challenge. You learn to read reach, impressions, engagement rate, clicks, followers, conversions, cost per lead, video views and profile visits well enough to know what the activity achieved.',
      },
      {
        title: 'Social media and AI are changing content creation',
        copy: 'AI is changing how content ideas, captions and creative concepts get produced. But it does not replace creativity or strategy: the audience, business goals, brand identity, behaviour and trends still need a person who understands them.',
      },
    ],
    whyNow: {
      title: 'Build Social Media Skills You Can Show, Not Just Talk About',
      points: [
        'Content and campaign projects give you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates content strategy, advertising, engagement, branding and analytics in interviews.',
        'Social media roles in Punjab start around ₹15,000 – ₹28,000 a month for a fresher with real campaign work.',
        'The goal is not learning to publish posts — it is turning social activity into business growth.',
      ],
    },
    roles: [
      'Social Media Executive',
      'Social Media Manager',
      'Content Strategist',
      'Instagram Marketing Specialist',
      'Social Media Advertising Executive',
      'Social Media Analyst',
      'AI-Powered Social Media Marketer',
      'Freelance Social Media Marketer',
    ],
    roleDetails: [
      {
        role: 'Social Media Executive',
        copy: 'Plan and manage social activity across content strategy, Instagram, Facebook, engagement, analytics and advertising. The most popular path after this course.',
      },
      {
        role: 'Social Media Manager',
        copy: 'Run complete social strategy for brands — calendars, engagement, branding, campaigns, analytics and community growth.',
      },
      {
        role: 'Content Strategist',
        copy: 'Develop the content that connects a business to its audience: research, creative planning, storytelling, calendars and campaign messaging.',
      },
      {
        role: 'Instagram Marketing Specialist',
        copy: 'Build and run Instagram-focused strategy across reels, posts, stories, engagement, content planning and performance analysis.',
      },
      {
        role: 'Social Media Advertising Executive',
        copy: 'Create and optimise paid campaigns against measurable outcomes — Meta Ads, targeting, budgets, creatives, conversions and lead generation.',
      },
      {
        role: 'Social Media Analyst',
        copy: 'Track performance through platform insights and reporting, using reach, engagement rate, clicks, conversions and followers to show what works.',
      },
      {
        role: 'AI-Powered Social Media Marketer',
        copy: 'Combine social marketing with modern AI tools to speed up research, content creation, planning and reporting — with strategy and creativity still doing the real work.',
      },
      {
        role: 'Freelance Social Media Marketer',
        copy: 'Build a freelance practice managing social media, creating content, running ads and building communities for businesses in Phagwara or remotely.',
      },
    ],
    hiring: [
      'Social media agencies and digital marketing companies',
      'Startups and SaaS companies building online communities',
      'E-commerce and retail brands promoting products',
      'Educational organisations running social media campaigns',
      'Real estate companies using social advertising',
    ],
    nextSteps: [
      'Digital marketing in full',
      'Meta Ads specialisation',
      'Content & video production',
      'Performance marketing & analytics',
    ],
    industries: ['Agencies', 'E-commerce & retail', 'Education', 'Real estate'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They match the Digital Marketing bands, which is consistent:
     * both hire into the same entry-level marketing roles. `scale` is the
     * midpoint in ₹/month; remote sits below Punjab at the fresher end on
     * purpose, since freelance income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Social Media Executive',
      summary:
        'Plans and runs the content and campaigns a brand grows through. Earnings vary with your skills, project experience, portfolio, certifications, company, location and performance.',
      starting: '₹15,000–₹28,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Social Media Marketing',
          fresher: '₹15,000–₹28,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 21500, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Social & Digital Marketing',
          fresher: '₹22,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 31000, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Social Media Projects',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Social Media Executive, Content Strategist, Social Media Manager, Instagram Marketing Specialist and Digital Marketing Executive. Practical campaign experience and the ability to analyse results matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher starts around ₹15,000 – ₹28,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of campaign results behind you. Marketers who can show engagement and lead numbers move fastest.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and it is one of the easiest to start with — a local business will pay a monthly retainer for someone to run their Instagram properly. Income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have client results to point at.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Social media and digital marketing agencies, startups building communities, e-commerce and retail brands, educational organisations running campaigns, and real estate companies — plus remote and freelance clients.',
      },
      {
        q: 'Should I take this or the full Digital Marketing course?',
        a: 'Take this one if you know social is the part you enjoy — it goes far deeper into content, Instagram, reels and community than the general course does. Take Digital Marketing if you also want SEO and Google Ads, or if you are not yet sure which channel suits you. The overlap between them is roughly one module.',
      },
    ],
    projects: [
      {
        name: 'Social Media Strategy Setup',
        summary:
          'Build a full strategy from scratch: research a business, understand its audience, study competitors, select platforms, define objectives and plan for growth.',
        tech: ['Social Strategy', 'Audience Research'],
        level: 'Beginner',
        skills: ['Digital Growth', 'Platform Planning'],
      },
      {
        name: 'Instagram Growth Strategy Project',
        summary:
          'An Instagram strategy to build visibility and engagement — content research, content pillars, reel and post ideas, and a structured growth plan.',
        tech: ['Instagram', 'Content Strategy'],
        level: 'Beginner',
        skills: ['Audience Growth', 'Creative Planning'],
      },
      {
        name: 'Social Media Content Campaign',
        summary:
          'A complete content campaign for a brand: ideas, a posting calendar, engagement approach, competitor analysis and a practical campaign strategy.',
        tech: ['Content Creation', 'Social Media'],
        level: 'Intermediate',
        skills: ['Brand Growth', 'Content Calendars'],
      },
      {
        name: 'Lead Generation Social Campaign',
        summary:
          'A paid social campaign built to generate enquiries — targeting, ad copy, creatives, objectives, landing page thinking and conversion focus.',
        tech: ['Meta Ads', 'Social Advertising'],
        level: 'Intermediate',
        skills: ['Lead Generation', 'Conversion'],
      },
      {
        name: 'Local Business Social Media Project',
        summary:
          'A strategy for a real Phagwara business: analyse the audience, improve their presence, create content and turn social activity into enquiries.',
        tech: ['Local Business', 'Social Media'],
        level: 'Intermediate',
        skills: ['Brand Growth', 'Community Building'],
      },
      {
        name: 'Social Media Analytics Project',
        summary:
          'Take a running campaign and make it better. Work through reach, impressions, engagement, clicks, followers and conversions the way a professional does.',
        tech: ['Analytics', 'Social Media'],
        level: 'Advanced',
        skills: ['Campaign Performance', 'Optimisation'],
      },
      {
        name: 'AI-Powered Content Marketing Project',
        summary:
          'Use modern AI tools to accelerate research, content ideas, creative strategy and reporting — with creativity, accuracy and brand identity kept central.',
        tech: ['AI Marketing', 'Content Creation'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Creative Strategy'],
      },
      {
        name: 'End-to-End Social Media Capstone',
        summary:
          'A complete solution for a real business: audience research, content strategy, advertising, engagement, analytics, reporting and optimisation.',
        tech: ['Social Media', 'Advertising'],
        level: 'Advanced',
        skills: ['Analytics', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a business requirement into a focused social strategy — research the audience, understand behaviour, study competitors, define goals and choose the platforms that fit.',
        artefact: 'Audience Research & Social Strategy',
      },
      {
        title: 'Create',
        copy: 'Build campaigns with trainer guidance across content strategy, Instagram, Facebook, LinkedIn, paid social, analytics and AI-powered workflows — testing ideas and improving on the numbers.',
        artefact: 'Content Creation & Social Campaign Execution',
      },
      {
        title: 'Present & Analyse',
        copy: 'Present the objective, audience strategy, content plan, campaigns, KPIs, results and optimisation like a professional, and learn to explain your work in an interview or client meeting.',
        artefact: 'End-to-End Campaign & Brand Growth',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready social marketing certificate',
        copy: 'A certificate reflecting practical understanding of content strategy, Instagram, Facebook and LinkedIn marketing, advertising, analytics, engagement, branding and campaign management.',
      },
      {
        title: 'Learn through practical projects',
        copy: 'Work on projects mirroring real business scenarios — researching audiences, creating content strategies, building calendars and campaigns, generating engagement and presenting insight.',
      },
      {
        title: 'Build a social media portfolio',
        copy: 'Strategies, content calendars, Instagram campaigns, Facebook advertising, LinkedIn content plans, brand strategies, lead generation work and marketing reports — proof you can show a client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, interview preparation, guidance on presenting your campaigns, and a clear picture of the paths in social, content strategy, digital and performance marketing.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand social media marketing',
        copy: 'The field keeps moving — platforms, AI content tools, ad systems, algorithms, trends and audience behaviour all change. Teaching uses current workflows and practical examples, so you understand not only how to create content but why a strategy matters.',
      },
      {
        title: 'Live and practical campaigns',
        copy: 'Without practical work it is hard to understand a real campaign. Projects span content strategy, audience research, Instagram, Facebook, paid social, branding, analytics, community engagement and optimisation.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss a strategy and get guidance while working on practical tasks — whether you are a beginner or strengthening existing marketing skill.',
      },
      {
        title: 'Build a social media portfolio',
        copy: 'Finishing should mean more than a certificate. Practical exercises produce portfolio work demonstrating content strategy, advertising, branding, analytics and audience engagement.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across the social media marketing industry.',
      },
      {
        title: 'A practical approach to social marketing',
        copy: 'The goal is confidence making marketing decisions, not memorising platform interfaces — practical content strategy, advertising, engagement, branding, analytics and campaign planning.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Social media curriculum',
          techcadd:
            'Industry-focused training covering content, strategy, advertising, analytics, branding and audience engagement',
          others: 'Often focuses mainly on basic posting concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real business scenarios',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical campaign training',
          techcadd: 'Students learn content strategy, advertising, social media and campaign analysis',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Marketing skills',
          techcadd: 'Covers audience research, content, campaigns, analytics and optimisation',
          others: 'May cover only selected concepts',
        },
        {
          feature: 'Social media advertising',
          techcadd: 'Focus on understanding campaign strategy and performance',
          others: 'Advertising training can vary',
        },
        {
          feature: 'Content strategy',
          techcadd: 'Practical understanding of planning, creativity and audience engagement',
          others: 'Content may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and campaign-based projects',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
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
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a social media marketing institute in Phagwara, ask what you will actually learn, whether you will work on practical campaigns, how trainers teach marketing, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your social marketing fundamentals',
        blurb:
          'Understand how social marketing works and how businesses use platforms to reach audiences — content strategy, Instagram, Facebook, engagement and branding.',
        skills: ['Meta Business Suite', 'Canva', 'Instagram tools', 'Facebook tools', 'AI tools'],
        recommendedFor:
          'Social Media Trainee, Content Intern, Marketing Intern and Social Media Assistant roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic social marketing',
        blurb:
          'Practical skill in content strategy, advertising, Instagram growth, Facebook marketing, analytics, branding and lead generation — the job-ready level.',
        skills: ['Meta Ads Manager', 'LinkedIn tools', 'Canva', 'Analytics platforms', 'Scheduling tools'],
        recommendedFor:
          'Social Media Executive, Content Strategist, Instagram Marketing Executive, Social Media Advertising Executive and digital marketing roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete social & brand growth skill set',
        blurb:
          'Advanced content strategy with advertising, analytics, brand building, performance marketing, automation and AI-powered content creation.',
        skills: ['Meta Ads Manager', 'Instagram tools', 'ChatGPT', 'Analytics tools', 'Automation'],
        recommendedFor:
          'Social Media Manager, Social Media Strategist, Content Strategist, Advertising Specialist, Brand Manager and freelance pathways.',
      },
    ],
    capabilities: [
      { capability: 'Social media fundamentals', included: [true, true, true] },
      { capability: 'Content creation', included: [true, true, true] },
      { capability: 'Instagram marketing', included: [true, true, true] },
      { capability: 'Facebook marketing', included: [true, true, true] },
      /* Your matrix marks this "Basic" at 3 months rather than a tick, so the
         row says so rather than overstating what the foundation tier covers. */
      { capability: 'Content planning (basic at 3 months)', included: [true, true, true] },
      { capability: 'Meta Ads', included: [false, true, true] },
      { capability: 'LinkedIn marketing', included: [false, true, true] },
      { capability: 'Brand building', included: [false, true, true] },
      { capability: 'Analytics', included: [false, true, true] },
      { capability: 'Lead generation', included: [false, true, true] },
      { capability: 'Advanced content strategy', included: [false, false, true] },
      { capability: 'Advanced advertising', included: [false, false, true] },
      { capability: 'Performance marketing', included: [false, false, true] },
      { capability: 'Content automation', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional content strategy, advertising, branding, analytics and lead generation. The 9-month programme combines all of it with advanced strategy, performance marketing, automation, AI tools and professional campaign management — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Social Media Marketing with us?',
      intro:
        'The goal is not learning where to click inside Instagram. The focus is on understanding the audience, creating content worth following, building communities, choosing platforms and tracking what actually happened.',
      points: [
        {
          title: 'Content as a system',
          copy: 'Pillars, calendars and hooks rather than posting when inspiration strikes. Consistency is what grows an account.',
        },
        {
          title: 'Local businesses as the brief',
          copy: 'Projects use real Phagwara business scenarios, which is also where most of your first retainer clients will come from.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering strategy, Instagram growth, a content campaign, lead generation, a local business, analytics, AI tooling and a capstone you own.',
        },
        {
          title: 'Numbers over vanity metrics',
          copy: 'Likes are easy. Engagement rate, cost per lead and conversions are what a client pays for, and what gets taught here.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Social Media Marketing Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how social platforms and online brand growth work. The focus is practical: content strategy, Instagram, Facebook and LinkedIn marketing, advertising, analytics, engagement, branding and campaign management — real skill rather than platform features.',
      },
      {
        q: 'Who can join a Social Media Marketing Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs, content creators and aspiring freelancers. Beginners can start without previous marketing experience; professionals use it to strengthen their branding and promotional skills.',
      },
      {
        q: 'Is Social Media Marketing a good career option for freshers?',
        a: 'Yes. It opens opportunities in content strategy, Instagram marketing, social media management, advertising, community management and digital marketing. Depending on skills and experience, learners can explore roles such as Social Media Executive, Content Strategist, Social Media Manager and Instagram Marketing Specialist.',
      },
      {
        q: 'What will I learn in the Social Media Marketing Course?',
        a: 'Social fundamentals, content strategy, Instagram, Facebook and LinkedIn marketing, short-form video, advertising, audience research, branding, community management, analytics, lead generation and campaign strategy — plus reach, impressions, engagement rate, clicks, conversions, video views and cost per lead.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Social media marketing becomes much easier once you work with real content, campaigns, audiences, advertisements and analytics. The approach includes practical content exercises, campaign planning, advertising tasks, strategies and real business scenarios.',
      },
      {
        q: 'Will I work on projects during the course?',
        a: 'Yes. Assignments include social strategies, content calendars, Instagram projects, Facebook advertising, LinkedIn content strategies, brand campaigns, lead generation projects and analytics exercises — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Social Media Marketing after 12th?',
        a: 'Absolutely, if you are interested in creativity, business, marketing, content or social media. It lets students develop a specialised skill while continuing formal education or preparing for future opportunities.',
      },
      {
        q: 'Can Social Media Marketing help me become a freelancer?',
        a: 'Yes. Freelancers can offer Instagram management, Facebook marketing, content creation, social advertising, community management, content strategy and online branding. But successful freelancing needs more than the tools: a portfolio, an understanding of client requirements and consistently delivering results matter just as much.',
      },
      {
        q: 'Does the course include AI in Social Media Marketing?',
        a: 'Yes. Modern workflows use AI for content research, creative ideas, caption writing, audience analysis, campaign planning, reporting and automation. The course covers how these tools support marketing while keeping strategy, creativity, authenticity and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Social Media Marketing Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, practical training, campaign exercises, content strategy modules, advertising training, trainer experience, tools covered, portfolio projects, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'digital-marketing-course-in-phagwara',
      'google-ads-course-in-phagwara',
      'seo-course-in-phagwara',
      'graphic-designing-course-in-phagwara',
      'shopify-course-in-phagwara',
      'wordpress-course-in-phagwara',
    ],
    keywords: [
      'social media marketing course in phagwara',
      'social media marketing training in phagwara',
      'social media marketing classes in phagwara',
      'instagram marketing course in phagwara',
      'facebook marketing course in phagwara',
      'social media marketing course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'google-ads-course-in-phagwara',
    label: 'Google Ads',
    title: 'Google Ads Course in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'megaphone',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Turn every click into an opportunity — keyword research, search and display campaigns, YouTube ads, bidding and conversion tracking, with live projects and placement assistance.',
    overview:
      'Techcadd’s Google Ads Course in Phagwara is an industry-focused programme for students, graduates, job aspirants, business professionals, entrepreneurs and working professionals who want practical skill in paid advertising and online growth. It covers Google Ads fundamentals, keyword research, search advertising, display advertising, YouTube ads, shopping campaign concepts, audience targeting, bidding strategies, ad copywriting, conversion tracking, campaign optimisation, analytics, lead generation and AI-powered marketing tools. The training is hands-on throughout — practical projects and industry-standard advertising platforms — so you learn how businesses identify customer intent, target the right audience, write effective ads, manage budgets, track conversions and improve results. Unlike purely theoretical learning, you work on campaign planning, keyword research, ad creation, targeting, bidding, tracking and analytics, and finish understanding how organisations actually use Google to attract customers.',
    demand:
      'Paid search reaches people at the exact moment they are looking to buy, which is why local agencies charge a monthly retainer for it — and why someone who can genuinely manage a budget is worth hiring.',
    modules: [
      {
        title: 'Foundations & Campaign Strategy',
        summary:
          'Understand how Google Ads works and how businesses use paid advertising to reach people already looking.',
        topics: [
          'Advertising fundamentals and customer intent',
          'Campaign objectives and account structure',
          'Identifying target audiences and business goals',
          'Building a strategy for a real local business scenario',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Keyword Research & Search Intent',
        summary:
          'Learn how advertisers find the words customers actually type — and which ones are worth paying for.',
        topics: [
          'Search intent and keyword relevance',
          'Keyword research methods',
          'Keyword selection concepts',
          'Negative keywords',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Google Search Campaigns',
        summary:
          'Learn how businesses reach customers on Google Search, and how a campaign is actually structured.',
        topics: [
          'Campaign structure and ad groups',
          'Responsive search ad concepts',
          'Developing relevant ad copy',
          'Connecting keywords to customer intent',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Display Ads & Visual Advertising',
        summary:
          'Turn creative ideas into display campaigns that build awareness rather than just impressions.',
        topics: [
          'Display network concepts',
          'Audience targeting and visual ad formats',
          'Creating engaging advertising messages',
          'Remarketing concepts',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'YouTube Ads & Video Campaigns',
        summary:
          'Learn how businesses use video advertising to reach customers who are not searching yet.',
        topics: [
          'YouTube advertising concepts',
          'Campaign objectives and audience targeting',
          'Video advertising strategy',
          'Video campaign metrics',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Bidding, Budgets & Optimisation',
        summary:
          'Creating a campaign is the beginning. Learn how advertisers manage performance and spend.',
        topics: [
          'Bidding strategies',
          'Budget allocation concepts',
          'CPC and conversion-focused metrics',
          'Identifying optimisation opportunities',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Google Ads',
        summary:
          'Discover how AI is changing advertising workflows without replacing the strategy behind them.',
        topics: [
          'AI for keyword ideas and research',
          'Generating advertising concepts',
          'Improving ad copy workflows',
          'Responsible use, keeping strategy and accuracy central',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Conversion Tracking & PPC Analytics',
        summary:
          'Learn how professional advertisers measure success — the difference between spending and investing.',
        topics: [
          'Conversion tracking concepts',
          'The PPC metrics and KPIs that matter',
          'Clicks, CTR, CPC, conversions and conversion rate',
          'Creating clear advertising reports',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Campaigns, Portfolio & Career Preparation',
        summary:
          'An end-to-end campaign from keyword research to optimisation, then learning to present it.',
        topics: [
          'Keyword research, campaign planning, advertising and tracking',
          'Assignments based on real business scenarios',
          'A portfolio project demonstrating your skills',
          'Career guidance across Google Ads, PPC, SEM and performance marketing',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Research keywords by search intent rather than volume alone',
      'Structure and launch Google Search campaigns that convert',
      'Build display and YouTube campaigns for awareness and remarketing',
      'Choose bidding strategies and manage a real advertising budget',
      'Set up conversion tracking and read CTR, CPC and cost per conversion',
      'Ship an end-to-end campaign you can defend in an interview',
    ],
    tools: [
      'Google Ads',
      'Google Keyword Planner',
      'Google Analytics Concepts',
      'Google Tag Manager Concepts',
      'Google Search Console Concepts',
      'Looker Studio Concepts',
      'YouTube Advertising Tools',
      'Conversion Tracking Tools',
      'Keyword Research Platforms',
      'AI Marketing Tools',
      'ChatGPT & AI Tools',
      'Campaign Analysis Platforms',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'You do not need an advanced technical background to understand how online advertising works. A structured course covers keyword research, search advertising, campaign creation, ad copywriting, targeting and conversion tracking.',
      },
      {
        label: 'College Students & Graduates',
        copy: 'Employers value academic knowledge combined with practical digital skill. Whatever you study — commerce, management, arts, computer science, engineering or media — Google Ads shows you how businesses reach customers through search.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Learning several campaign types alone is confusing. A structured path replaces certificate-collecting with understanding how real campaigns run: research, setup, ad creation, bidding, targeting, tracking and optimisation.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in sales, business development, customer service, IT, admin, media or management? Google Ads makes your experience more valuable — how paid search generates qualified leads, and how budgets translate into customer acquisition.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not have to become an advertiser. Understanding search intent, budgets, campaign performance, lead generation and return on ad spend means you stop taking your agency’s word for it.',
      },
      {
        label: 'Freelancers & Aspiring Freelancers',
        copy: 'Search campaign management, keyword research, display advertising, YouTube ads, remarketing, conversion tracking and optimisation are all billable — and clients pay monthly for someone to manage a live budget.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Google Ads skills are in demand across industries',
        copy: 'Startups, e-commerce brands, educational institutions, hospitals, real estate, IT firms, service businesses and local businesses all advertise on Google. Keyword research, search and display advertising, YouTube ads, targeting, tracking and optimisation apply across all of them.',
      },
      {
        title: 'Learn how Google Ads actually works',
        copy: 'Creating an ad is the beginning. Fundamentals, keyword research, search campaigns, display, YouTube, shopping concepts, ad copywriting, targeting, bidding, budgets, conversion tracking, remarketing, Quality Score, PPC analytics and optimisation are the rest.',
      },
      {
        title: 'Practical learning builds real confidence',
        copy: 'Tutorials teach you where the features are. Practical training teaches you to make advertising decisions — keyword research, campaign planning, ad copy, audience research, budget planning, tracking and performance analysis.',
      },
      {
        title: 'Think about results, not just clicks',
        copy: 'Getting clicks is easy; generating business results is the challenge. You learn to read impressions, clicks, CTR, CPC, conversions, conversion rate, cost per conversion and Quality Score well enough to know what a budget actually bought.',
      },
      {
        title: 'Google Ads and AI are changing campaign management',
        copy: 'AI is changing how keywords get researched and ad copy gets written. But it does not replace strategy: customer intent, target audiences, business goals, budgets and conversion data still need a person who understands them.',
      },
    ],
    whyNow: {
      title: 'Build Google Ads Skills You Can Show, Not Just Talk About',
      points: [
        'Campaign-based projects give you experience beyond classroom theory that goes straight into a portfolio.',
        'A strong portfolio demonstrates keyword research, campaign strategy, tracking, analytics and optimisation in interviews.',
        'Google Ads and PPC roles in Punjab start around ₹15,000 – ₹28,000 a month for a fresher with real campaign work.',
        'The goal is not learning to create ads — it is turning an advertising budget into measurable business opportunity.',
      ],
    },
    roles: [
      'Google Ads Executive',
      'PPC Specialist',
      'SEM Specialist',
      'Performance Marketing Executive',
      'Google Ads Analyst',
      'Paid Media Executive',
      'AI-Powered Performance Marketer',
      'Freelance Google Ads Specialist',
    ],
    roleDetails: [
      {
        role: 'Google Ads Executive',
        copy: 'Plan and manage advertising campaigns across keyword research, search, display, targeting, analytics, bidding, tracking and optimisation. The most popular path after this course.',
      },
      {
        role: 'PPC Specialist',
        copy: 'Manage pay-per-click campaigns against measurable results — keywords, bidding, structure, ad copy, budgets, conversions and performance.',
      },
      {
        role: 'SEM Specialist',
        copy: 'Build search engine marketing strategy for businesses whose customers are actively searching, across research, planning, ad creation and tracking.',
      },
      {
        role: 'Performance Marketing Executive',
        copy: 'Create and manage campaigns focused on measurable outcomes — paid campaigns, targeting, conversion strategy, budgets, analytics and lead generation.',
      },
      {
        role: 'Google Ads Analyst',
        copy: 'Track and analyse advertising performance, using impressions, clicks, CTR, CPC, conversions and cost per conversion to show what works and what does not.',
      },
      {
        role: 'Paid Media Executive',
        copy: 'Manage advertising across paid platforms — strategy, keywords, creatives, budgets, targeting, reporting and performance.',
      },
      {
        role: 'AI-Powered Performance Marketer',
        copy: 'Combine Google Ads with modern AI tools to speed up keyword research, ad ideas, copy, analysis and reporting — with strategy still doing the real work.',
      },
      {
        role: 'Freelance Google Ads Specialist',
        copy: 'Build a freelance practice managing campaigns, researching keywords, improving ad performance and generating leads for businesses in Phagwara or remotely.',
      },
    ],
    hiring: [
      'Digital marketing agencies and advertising companies',
      'Startups and SaaS companies running paid campaigns',
      'E-commerce and retail brands promoting products',
      'Educational organisations generating student enquiries',
      'Real estate companies running lead generation campaigns',
    ],
    nextSteps: [
      'Digital marketing in full',
      'Meta Ads & paid social',
      'Analytics & conversion optimisation',
      'SEO for organic search',
    ],
    industries: ['Agencies', 'E-commerce & retail', 'Education', 'Real estate'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They match the other marketing courses, which is consistent:
     * all hire into the same entry-level roles. `scale` is the midpoint in
     * ₹/month; remote sits below Punjab at the fresher end on purpose, since
     * freelance income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Google Ads Executive',
      summary:
        'Runs the paid campaigns a business acquires customers through. Earnings vary with your skills, project experience, portfolio, certifications, company, location and performance.',
      starting: '₹15,000–₹28,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Google Ads & PPC',
          fresher: '₹15,000–₹28,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 21500, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Performance Marketing',
          fresher: '₹22,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 31000, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Google Ads Projects',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Google Ads Executive, PPC Specialist, SEM Specialist, Performance Marketing Executive and Paid Media Analyst. Practical campaign experience and the ability to analyse results matter far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher starts around ₹15,000 – ₹28,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of campaign results behind you. Of the marketing skills, PPC tends to move fastest because the results are measurable in rupees.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and it commands better rates than most marketing work because a client can see exactly what their spend returned. Income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you can point at campaigns you have made profitable.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Digital marketing and advertising agencies, startups and SaaS companies, e-commerce and retail brands, educational organisations generating enquiries, and real estate companies — plus remote and freelance clients.',
      },
      {
        q: 'Do I need my own budget to learn this?',
        a: 'No. The course teaches campaign structure, keyword strategy, bidding and tracking on real scenarios without requiring you to fund live spend. That said, running even a small budget of your own afterwards is the fastest way to consolidate it — a few thousand rupees of your own money teaches lessons a simulation cannot.',
      },
    ],
    projects: [
      {
        name: 'Google Ads Campaign Strategy Setup',
        summary:
          'Build a full strategy from scratch: research a business, understand its customers, analyse competitors, identify keywords, define objectives and plan the advertising.',
        tech: ['Campaign Strategy', 'Keyword Research'],
        level: 'Beginner',
        skills: ['Paid Advertising', 'Planning'],
      },
      {
        name: 'Search Advertising Campaign',
        summary:
          'A Search campaign built to reach high-intent customers — keyword research, search intent, ad groups, ad copy and a structured campaign.',
        tech: ['Google Search Ads', 'Keywords'],
        level: 'Beginner',
        skills: ['Customer Intent', 'Ad Copywriting'],
      },
      {
        name: 'Lead Generation PPC Campaign',
        summary:
          'A campaign focused on generating enquiries: keyword strategy, advertisements, audience targeting, conversion actions and campaign structure.',
        tech: ['PPC Advertising', 'Lead Generation'],
        level: 'Intermediate',
        skills: ['Campaign Strategy', 'Conversion'],
      },
      {
        name: 'Display Advertising Project',
        summary:
          'A display campaign for awareness and reach — visual advertising, audience targeting, creatives, remarketing and campaign objectives.',
        tech: ['Display Ads', 'Remarketing'],
        level: 'Intermediate',
        skills: ['Audience Targeting', 'Brand Awareness'],
      },
      {
        name: 'Local Business Google Ads Project',
        summary:
          'A strategy for a real Phagwara business: research what customers search for, find the valuable keywords, write relevant ads and turn intent into enquiries.',
        tech: ['Google Ads', 'Local Business'],
        level: 'Intermediate',
        skills: ['Lead Generation', 'Search Strategy'],
      },
      {
        name: 'Google Ads Analytics Project',
        summary:
          'Take a running campaign and make it better. Work through impressions, clicks, CTR, CPC, conversions and conversion rate the way a professional advertiser does.',
        tech: ['Analytics', 'PPC'],
        level: 'Advanced',
        skills: ['Campaign Performance', 'Optimisation'],
      },
      {
        name: 'AI-Powered Advertising Project',
        summary:
          'Use modern AI tools to accelerate keyword research, ad ideas, copy, audience analysis and reporting — with accuracy, business goals and customer intent kept central.',
        tech: ['AI Marketing', 'Google Ads'],
        level: 'Advanced',
        skills: ['Prompt Engineering', 'Campaign Strategy'],
      },
      {
        name: 'End-to-End Google Ads Capstone',
        summary:
          'A complete solution for a real business: keyword research, campaign planning, advertising, conversion tracking, analytics, reporting and optimisation.',
        tech: ['Google Ads', 'Conversion Tracking'],
        level: 'Advanced',
        skills: ['PPC', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Research',
        copy: 'Turn a business requirement into a focused advertising strategy — research keywords, understand customer intent, analyse competitors, identify audiences and define the goals.',
        artefact: 'Keyword Research & Campaign Strategy',
      },
      {
        title: 'Launch',
        copy: 'Create campaigns with trainer guidance across search, display, YouTube, bidding, conversion tracking and AI-powered workflows — testing ideas against real business objectives.',
        artefact: 'Campaign Creation & Advertising Execution',
      },
      {
        title: 'Track & Optimise',
        copy: 'Present the objective, keyword strategy, campaign structure, advertisements, KPIs, results and optimisation like a professional, and learn to explain it in an interview or client meeting.',
        artefact: 'End-to-End PPC Campaign & Performance Growth',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready Google Ads certificate',
        copy: 'A certificate reflecting practical understanding of keyword research, search advertising, display campaigns, YouTube ads, bidding, conversion tracking, analytics and optimisation.',
      },
      {
        title: 'Learn through practical campaigns',
        copy: 'Work on projects mirroring real business scenarios — researching keywords, understanding intent, creating campaigns and ad copy, planning budgets and analysing performance.',
      },
      {
        title: 'Build a Google Ads portfolio',
        copy: 'Keyword strategies, search campaigns, display concepts, YouTube plans, conversion tracking workflows, remarketing strategies and campaign reports — proof you can show a client.',
      },
      {
        title: 'Career and placement support',
        copy: 'CV work, interview preparation, guidance on presenting your campaigns, and a clear picture of the paths in Google Ads, PPC, SEM and performance marketing.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who understand Google Ads',
        copy: 'The platform keeps moving — automation, AI-powered tools, campaign systems, bidding strategies and ad formats all change. Teaching uses current workflows and practical examples, so you understand not only how to create a campaign but why a strategy matters.',
      },
      {
        title: 'Live and practical campaigns',
        copy: 'Without practical work it is hard to understand a real campaign. Projects span keyword research, search advertising, display, YouTube, targeting, conversion tracking, bidding, analytics and optimisation.',
      },
      {
        title: 'Small batches and doubt support',
        copy: 'A focused room means you can ask, discuss a campaign strategy and get guidance while working on practical tasks — whether you are a beginner or strengthening existing marketing skill.',
      },
      {
        title: 'Build a Google Ads portfolio',
        copy: 'Finishing should mean more than a certificate. Practical exercises produce portfolio work demonstrating keyword research, advertising strategy, tracking, PPC analytics and optimisation.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume improvement, interview preparation, portfolio presentation and mock interviews, with a realistic view of roles across paid advertising and performance marketing.',
      },
      {
        title: 'A practical approach to Google Ads',
        copy: 'The goal is confidence making advertising decisions, not memorising platform interfaces — practical keyword research, campaign strategy, search advertising, tracking, analytics, bidding and budget planning.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Google Ads curriculum',
          techcadd:
            'Industry-focused training covering keywords, campaigns, advertising, analytics, tracking and optimisation',
          others: 'Often focuses mainly on basic campaign concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Hands-on and practical, designed around real business scenarios',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical campaign training',
          techcadd: 'Students learn keyword strategy, advertising, analytics and campaign analysis',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Advertising skills',
          techcadd: 'Covers research, campaigns, tracking, analytics and optimisation',
          others: 'May cover only selected concepts',
        },
        {
          feature: 'Conversion tracking',
          techcadd: 'Focus on understanding campaign performance and customer actions',
          others: 'Tracking training can vary',
        },
        {
          feature: 'Keyword research',
          techcadd: 'Practical understanding of search intent and keyword strategy',
          others: 'Keyword research may receive limited attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Practical assignments and campaign-based projects',
          others: 'Portfolio development may receive less focus',
        },
        {
          feature: 'Career support',
          techcadd: 'CV guidance, mock interviews, portfolio preparation and career-oriented support',
          others: 'Career assistance can vary significantly',
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
      note: 'The right-hand column represents common market patterns, not a claim about any specific institute. Before choosing a Google Ads institute in Phagwara, ask what you will actually learn, whether you will work on practical campaigns, how trainers teach advertising, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Build your Google Ads fundamentals',
        blurb:
          'Understand how Google Ads works and how businesses use paid advertising — keyword research, search advertising, campaign creation, ad copywriting and customer intent.',
        skills: ['Google Ads', 'Keyword Planner', 'Campaign research', 'Advertising metrics'],
        recommendedFor:
          'PPC Trainee, Marketing Intern, Digital Advertising Intern and Google Ads Assistant roles.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Move beyond basic Google Ads',
        blurb:
          'Practical skill in search advertising, display, YouTube ads, conversion tracking, analytics, bidding and lead generation — the job-ready level.',
        skills: ['Google Ads', 'Google Analytics', 'Tag Manager', 'Looker Studio', 'YouTube Ads'],
        recommendedFor:
          'Google Ads Executive, PPC Executive, SEM Specialist, Performance Marketing Executive and paid media roles.',
      },
      {
        length: '9 Months',
        tier: 'Expert',
        heading: 'Build a complete PPC & performance skill set',
        blurb:
          'Advanced campaign strategy with conversion-focused advertising, analytics, optimisation, automation and AI-powered campaign management.',
        skills: ['Google Ads', 'Analytics', 'Looker Studio', 'AI tools', 'Campaign optimisation'],
        recommendedFor:
          'PPC Specialist, Google Ads Strategist, Performance Marketing Specialist, Paid Media Manager, SEM Analyst and freelance pathways.',
      },
    ],
    capabilities: [
      { capability: 'Google Ads fundamentals', included: [true, true, true] },
      { capability: 'Keyword research', included: [true, true, true] },
      { capability: 'Search campaigns', included: [true, true, true] },
      { capability: 'Ad copywriting', included: [true, true, true] },
      { capability: 'Display advertising', included: [false, true, true] },
      { capability: 'YouTube Ads', included: [false, true, true] },
      { capability: 'Conversion tracking', included: [false, true, true] },
      { capability: 'Analytics', included: [false, true, true] },
      { capability: 'Lead generation', included: [false, true, true] },
      { capability: 'Advanced campaign strategy', included: [false, false, true] },
      { capability: 'Advanced bidding', included: [false, false, true] },
      { capability: 'Performance marketing', included: [false, false, true] },
      { capability: 'Campaign automation', included: [false, false, true] },
      { capability: 'AI & prompt engineering', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month track gives you the essential foundation. The 6-month course includes those fundamentals and continues into professional search campaigns, display, YouTube, conversion tracking, analytics and optimisation. The 9-month programme combines all of it with advanced strategy, performance marketing, automation, AI tools and professional paid media management — so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Google Ads with us?',
      intro:
        'The goal is not learning where to click inside Google Ads. The focus is on understanding customer intent, researching keywords worth paying for, writing relevant ads, managing a budget, tracking conversions and building strategy that supports growth.',
      points: [
        {
          title: 'Intent before keywords',
          copy: 'A high-volume keyword nobody buys from is worthless. Reading search intent is taught before anything else.',
        },
        {
          title: 'Budgets treated as real money',
          copy: 'Every campaign decision is framed as spend against return, because that is how a client will judge your work.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering strategy, search, lead generation, display, a local business, analytics, AI tooling and a capstone you own.',
        },
        {
          title: 'Tracking is not optional',
          copy: 'A campaign without conversion tracking is guesswork. Setting it up properly is taught as part of launching, not afterwards.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Google Ads Course in Phagwara at Techcadd?',
        a: 'It is designed to help learners understand how paid search advertising and online customer acquisition work. The focus is practical: keyword research, search advertising, display campaigns, YouTube ads, bidding, conversion tracking, analytics, targeting and optimisation — real skill rather than platform features.',
      },
      {
        q: 'Who can join a Google Ads Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers, working professionals, business owners, entrepreneurs and aspiring freelancers. Beginners can start without previous advertising experience; professionals use it to strengthen their paid marketing skills.',
      },
      {
        q: 'Is Google Ads a good career option for freshers?',
        a: 'Yes. It opens opportunities in PPC advertising, search engine marketing, performance marketing, paid media and digital marketing. Depending on skills and experience, learners can explore roles such as Google Ads Executive, PPC Specialist, SEM Specialist, Performance Marketing Executive and Paid Media Analyst.',
      },
      {
        q: 'What will I learn in the Google Ads Course?',
        a: 'Fundamentals, keyword research, search campaigns, display advertising, YouTube ads, audience targeting, bidding strategies, ad copywriting, conversion tracking, analytics, remarketing, campaign strategy and optimisation — plus impressions, clicks, CTR, CPC, conversions, conversion rate and cost per conversion.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Google Ads becomes much easier once you work with real keywords, campaigns, advertisements, audiences, conversions and analytics. The approach includes practical keyword exercises, campaign planning, advertising tasks, performance analysis and real business scenarios.',
      },
      {
        q: 'Will I work on Google Ads projects during the course?',
        a: 'Yes. Assignments include keyword research strategies, search campaigns, display concepts, YouTube plans, lead generation projects, conversion tracking workflows, campaign reports and PPC analytics exercises — which build the portfolio that demonstrates your understanding.',
      },
      {
        q: 'Can I learn Google Ads after 12th?',
        a: 'Absolutely, if you are interested in marketing, business, advertising, analytics or digital careers. It lets students develop a specialised skill while continuing formal education or preparing for future opportunities.',
      },
      {
        q: 'Can Google Ads help me become a freelancer?',
        a: 'Yes. Freelancers can offer keyword research, search campaign management, display advertising, YouTube ads, remarketing, conversion tracking and optimisation. But successful freelancing needs more than the tools: a portfolio, an understanding of client requirements and consistently delivering results matter just as much.',
      },
      {
        q: 'Does the course include AI in Google Ads?',
        a: 'Yes. Modern workflows use AI for keyword research, ad ideas, copywriting, audience analysis, campaign planning, reporting and optimisation. The course covers how these tools support advertising while keeping strategy, business objectives, customer intent and human decision-making at the centre.',
      },
      {
        q: 'How do I choose the best Google Ads Course in Phagwara?',
        a: 'Do not choose on the certificate or duration alone. Look at the syllabus, practical training, campaign exercises, keyword research modules, conversion tracking, analytics training, trainer experience, tools covered, portfolio projects, doubt support and career guidance.',
      },
    ],
    relatedCourses: [
      'digital-marketing-course-in-phagwara',
      'seo-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'wordpress-course-in-phagwara',
      'shopify-course-in-phagwara',
    ],
    keywords: [
      'google ads course in phagwara',
      'google ads training in phagwara',
      'google ads classes in phagwara',
      'ppc course in phagwara',
      'sem training in phagwara',
      'google ads course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'seo-course-in-phagwara',
    label: 'SEO',
    title: 'Best SEO Course & Training in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'search',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'On-page, off-page and technical SEO — rank real pages on Google using tools professionals use daily.',
    overview: 'Six weeks of search: keyword research, on-page and technical work, link building and the measurement that proves any of it worked.',
    demand: 'SEO compounds: the client work you do in month three is still paying the client in year two, which is why retainers in this field are unusually stable.',
    modules: [
      {
        title: 'How search works',
        summary: 'Crawling, indexing and ranking.',
        topics: ['Crawling', 'Indexing', 'Ranking signals', 'Intent'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Keyword & content',
        summary: 'Finding demand and writing for it.',
        topics: ['Keyword research', 'Clustering', 'Content briefs', 'On-page'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Technical SEO',
        summary: 'The problems that cap a site\'s ceiling.',
        topics: ['Site speed', 'Schema', 'Sitemaps', 'Crawl budget'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Links & measurement',
        summary: 'Authority, and proving results.',
        topics: ['Link building', 'Search Console', 'Rank tracking', 'Reporting'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Research keywords by intent',
      'Write and optimise pages that rank',
      'Run a technical audit',
      'Build links without risking penalties',
      'Report organic performance honestly',
    ],
    tools: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'GA4', 'Schema markup'],
    roles: ['SEO Specialist', 'Content Strategist', 'Digital Marketer', 'Freelance SEO Consultant'],
    hiring: [
      'SEO and digital agencies',
      'Content and publishing teams',
      'E-commerce companies',
      'Freelance retainer clients',
    ],
    nextSteps: ['Digital Marketing', 'Google Ads', 'Data Analytics', 'Content strategy'],
    industries: ['E-commerce', 'Publishing', 'Local services', 'SaaS'],
    salary: {
      role: 'SEO Executive',
      summary: 'Earns a business its search traffic instead of buying it.',
      starting: '₹2–3.5 LPA',
      after2: '₹4.5–9 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–3.5 LPA',
          after2: '₹4.5–9 LPA',
          scale: { fresher: 2.6, after2: 6.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹2.5–5 LPA',
          after2: '₹6.5–12.5 LPA',
          scale: { fresher: 3.64, after2: 9.45 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3–5.5 LPA',
          after2: '₹7–14 LPA',
          scale: { fresher: 4.03, after2: 10.46 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after SEO?',
        a: 'Graduates move into SEO Specialist, Content Strategist, Digital Marketer, Freelance SEO Consultant and similar roles. SEO compounds: the client work you do in month three is still paying the client in year two, which is why retainers in this field are unusually stable.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹15,000 – ₹28,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Full technical audit',
        summary: 'Audit a live site, fix what matters, measure the movement.',
        tech: ['Search Console', 'Screaming Frog'],
        level: 'Intermediate',
        skills: ['Auditing', 'Prioritisation', 'Measurement'],
      },
      {
        name: 'Content cluster build',
        summary: 'A pillar page and supporting articles, planned from keyword data.',
        tech: ['SEMrush', 'WordPress'],
        level: 'Beginner',
        skills: ['Research', 'On-page', 'Internal linking'],
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
        q: 'What is the duration of the SEO course in Phagwara?',
        a: 'techcadd runs SEO over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the SEO course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the SEO course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the SEO course?',
        a: 'Graduates move into SEO Specialist, Content Strategist, Digital Marketer, Freelance SEO Consultant and similar roles. SEO compounds: the client work you do in month three is still paying the client in year two, which is why retainers in this field are unusually stable.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'SEO Executive roles start around ₹15,000 – ₹28,000 a month for a fresher with a working portfolio, rising to ₹4.5–9 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. SEO begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'SEO Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'SEO Executive roles in Punjab start around ₹15,000 – ₹28,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'digital-marketing-course-in-phagwara',
      'google-ads-course-in-phagwara',
      'wordpress-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
      'shopify-course-in-phagwara',
      'python-course-in-phagwara',
    ],
    keywords: [
      'seo course phagwara',
      'search engine optimisation training in phagwara',
      'technical seo course in phagwara',
      'seo classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'wordpress-course-in-phagwara',
    label: 'WordPress',
    title: 'Best WordPress Course & Training in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'edit',
    duration: '1 Month',
    level: 'Beginner',
    eligibility: '10th / 12th Pass Onward',
    summary: 'Design, build and launch a complete WordPress website — themes, plugins and page builders, no-code to light-code.',
    overview: 'Four weeks from install to launch: themes, plugins, page builders, performance and the security basics every live site needs.',
    demand: 'WordPress runs a large share of the web, and building a local business a site it can update itself is the most common first paid project our students take.',
    modules: [
      {
        title: 'Setup & themes',
        summary: 'Hosting, install and choosing a theme.',
        topics: ['Hosting', 'Install', 'Themes', 'Customiser'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Pages & builders',
        summary: 'Building pages without writing code.',
        topics: ['Gutenberg', 'Elementor', 'Templates', 'Menus'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Plugins & WooCommerce',
        summary: 'Extending the site, including selling.',
        topics: ['Essential plugins', 'WooCommerce', 'Forms', 'SEO plugins'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Performance & security',
        summary: 'Keeping it fast and unbroken.',
        topics: ['Caching', 'Images', 'Backups', 'Hardening'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Install and configure WordPress',
      'Build pages with a builder',
      'Set up a WooCommerce store',
      'Improve site speed measurably',
      'Back up and secure a live site',
    ],
    tools: ['WordPress', 'Elementor', 'WooCommerce', 'Yoast', 'cPanel', 'UpdraftPlus'],
    roles: ['WordPress Developer', 'Web Designer', 'Freelance Site Builder', 'Digital Marketer'],
    hiring: [
      'Web agencies and studios',
      'Small business website projects',
      'Content and publishing teams',
      'Freelance maintenance retainers',
    ],
    nextSteps: ['Web Designing', 'SEO', 'PHP Full Stack', 'Shopify'],
    industries: ['Small business', 'Agencies', 'Publishing', 'E-commerce'],
    salary: {
      role: 'WordPress Developer',
      summary: 'Builds, customises and maintains the websites most small businesses actually run on.',
      starting: '₹2–3 LPA',
      after2: '₹3.5–7 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–3 LPA',
          after2: '₹3.5–7 LPA',
          scale: { fresher: 2.5, after2: 5.25 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹2.5–4.5 LPA',
          after2: '₹5–10 LPA',
          scale: { fresher: 3.5, after2: 7.35 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3–5 LPA',
          after2: '₹5.5–11 LPA',
          scale: { fresher: 3.88, after2: 8.14 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after WordPress?',
        a: 'Graduates move into WordPress Developer, Web Designer, Freelance Site Builder, Digital Marketer and similar roles. WordPress runs a large share of the web, and building a local business a site it can update itself is the most common first paid project our students take.',
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
        name: 'Business website',
        summary: 'A complete multi-page site, launched on real hosting.',
        tech: ['WordPress', 'Elementor'],
        level: 'Beginner',
        skills: ['Themes', 'Pages', 'Launch'],
      },
      {
        name: 'WooCommerce store',
        summary: 'Products, checkout and shipping configured end to end.',
        tech: ['WooCommerce'],
        level: 'Intermediate',
        skills: ['Products', 'Payments', 'Performance'],
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
        q: 'What is the duration of the WordPress course in Phagwara?',
        a: 'techcadd runs WordPress over 1 month depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the WordPress course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the WordPress course?',
        a: '10th / 12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the WordPress course?',
        a: 'Graduates move into WordPress Developer, Web Designer, Freelance Site Builder, Digital Marketer and similar roles. WordPress runs a large share of the web, and building a local business a site it can update itself is the most common first paid project our students take.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'WordPress Developer roles start around ₹15,000 – ₹27,000 a month for a fresher with a working portfolio, rising to ₹3.5–7 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. WordPress begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'WordPress Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'WordPress Developer roles in Punjab start around ₹15,000 – ₹27,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'web-designing-course-in-phagwara',
      'shopify-course-in-phagwara',
      'seo-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
    ],
    keywords: [
      'wordpress course phagwara',
      'elementor training in phagwara',
      'woocommerce course in phagwara',
      'website building classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'shopify-course-in-phagwara',
    label: 'Shopify',
    title: 'Best Shopify Course & Training in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'wallet',
    duration: '1 Month',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Build a launch-ready online store on Shopify — from product setup to payments, themes and store marketing.',
    overview: 'Four weeks building a Shopify store: setup, theme customisation, products, payments, apps and the conversion work that follows launch.',
    demand: 'D2C brands are launching faster than there are people who can build and tune their stores, and Shopify work bills unusually well on international briefs.',
    modules: [
      {
        title: 'Store setup',
        summary: 'Account, domain and settings.',
        topics: ['Setup', 'Domains', 'Payments', 'Shipping'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Themes & products',
        summary: 'Making it look and read right.',
        topics: ['Theme editor', 'Collections', 'Product pages', 'Navigation'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Apps & automation',
        summary: 'Extending the store sensibly.',
        topics: ['App selection', 'Email flows', 'Reviews', 'Upsells'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Conversion & analytics',
        summary: 'Turning traffic into orders.',
        topics: ['CRO basics', 'Analytics', 'Abandoned carts', 'Reporting'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Set up a store end to end',
      'Customise a theme without breaking it',
      'Configure payments and shipping',
      'Automate email flows',
      'Read store analytics and act on them',
    ],
    tools: ['Shopify', 'Shopify Theme Editor', 'Klaviyo', 'Google Analytics', 'Meta Pixel'],
    roles: [
      'Shopify Developer',
      'E-commerce Manager',
      'Freelance Store Builder',
      'Digital Marketer',
    ],
    hiring: [
      'E-commerce agencies',
      'D2C and retail brands',
      'Dropshipping businesses',
      'International freelance briefs',
    ],
    nextSteps: ['Digital Marketing', 'Social Media Marketing', 'SEO', 'WordPress'],
    industries: ['D2C brands', 'Retail', 'Dropshipping', 'Agencies'],
    salary: {
      role: 'Shopify Developer',
      summary: 'Builds and optimises the storefronts D2C brands sell through.',
      starting: '₹2–3.5 LPA',
      after2: '₹4.5–9 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–3.5 LPA',
          after2: '₹4.5–9 LPA',
          scale: { fresher: 2.8, after2: 6.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3–5 LPA',
          after2: '₹6.5–12.5 LPA',
          scale: { fresher: 3.92, after2: 9.45 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3–5.5 LPA',
          after2: '₹7–14 LPA',
          scale: { fresher: 4.34, after2: 10.46 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Shopify?',
        a: 'Graduates move into Shopify Developer, E-commerce Manager, Freelance Store Builder, Digital Marketer and similar roles. D2C brands are launching faster than there are people who can build and tune their stores, and Shopify work bills unusually well on international briefs.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹17,000 – ₹30,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Launch-ready store',
        summary: 'A full store with products, payments and shipping live.',
        tech: ['Shopify'],
        level: 'Beginner',
        skills: ['Setup', 'Theming', 'Payments'],
      },
      {
        name: 'Conversion improvement sprint',
        summary: 'Measure, change, re-measure on a live store.',
        tech: ['Shopify', 'GA4'],
        level: 'Intermediate',
        skills: ['CRO', 'Analytics', 'Email'],
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
        q: 'What is the duration of the Shopify course in Phagwara?',
        a: 'techcadd runs Shopify over 1 month depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Shopify course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Shopify course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Shopify course?',
        a: 'Graduates move into Shopify Developer, E-commerce Manager, Freelance Store Builder, Digital Marketer and similar roles. D2C brands are launching faster than there are people who can build and tune their stores, and Shopify work bills unusually well on international briefs.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Shopify Developer roles start around ₹17,000 – ₹30,000 a month for a fresher with a working portfolio, rising to ₹4.5–9 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Shopify begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Shopify Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Shopify Developer roles in Punjab start around ₹17,000 – ₹30,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'digital-marketing-course-in-phagwara',
      'wordpress-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
      'seo-course-in-phagwara',
      'google-ads-course-in-phagwara',
      'python-course-in-phagwara',
    ],
    keywords: [
      'shopify course phagwara',
      'ecommerce training in phagwara',
      'dropshipping course in phagwara',
      'shopify store classes in phagwara',
    ],
  }),
]
