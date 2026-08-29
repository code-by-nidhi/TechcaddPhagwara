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
    title: 'WordPress Course in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'palette',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Build professional websites without deep coding — themes, Elementor, plugins, WooCommerce, SEO and security, with live projects and placement assistance.',
    overview:
      'Techcadd’s WordPress Development Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners to build professional websites without deep coding. It covers domain and hosting setup, theme customisation, page builders, plugin configuration, SEO basics and WooCommerce. The training is based on practical knowledge rather than theory: you learn through website-building exercises, assignments and client-style projects, so you see how WordPress is actually used in freelancing, business branding and development work. The approach is beginner-friendly throughout, developing UI sense, design logic and technical confidence together — by the end you can design, build, secure and manage a professional WordPress site.',
    demand:
      'WordPress runs over 40% of the web, and in Phagwara that means a steady stream of small businesses who need a site built and then maintained — which is repeat work, not one-off.',
    modules: [
      {
        title: 'WordPress Fundamentals & Setup',
        summary:
          'Build your foundation from scratch and get a real site live on a real domain.',
        topics: [
          'Domain registration, DNS settings and hosting setup',
          'Installing WordPress',
          'The dashboard, themes and plugins',
          'Creating your first blog',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Website Design & Page Builders',
        summary:
          'Get deeper into design and learn how a page gets built without writing code.',
        topics: [
          'Elementor and other page builders',
          'Landing pages, home pages and contact forms',
          'Responsive design for mobile',
          'How designers approach a layout',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Theme Customisation & Child Themes',
        summary:
          'Find out how professional sites are structured, and how to change one safely.',
        topics: [
          'Custom post types, widgets and menus',
          'Theme files and CSS basics',
          'Child themes for safe code changes',
          'Understanding template structure',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Plugin Mastery & Functionality',
        summary:
          'Find out how to add almost any feature to a site — and how to judge which plugin to trust.',
        topics: [
          'Contact Form 7, WPForms and sliders',
          'SEO, caching and security plugins',
          'Vetting and installing the right plugin',
          'Configuring plugins properly',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'SEO & Speed Optimisation',
        summary:
          'Find out how a site actually ranks, and why a slow one never will.',
        topics: [
          'On-page SEO, keyword placement and permalinks',
          'XML sitemaps',
          'Caching and image compression',
          'CDN basics',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'E-commerce with WooCommerce',
        summary:
          'Advance into selling online, and build a store that actually takes money.',
        topics: [
          'Products, categories and shopping carts',
          'Checkout pages',
          'Payment gateways — Razorpay and PayPal',
          'Shipping methods',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI-Powered Website Building',
        summary:
          'Learn how AI tools change the pace of building sites, and where they should stop.',
        topics: [
          'Generating website copy and product descriptions',
          'AI for CSS and code snippets',
          'Using AI ethically to speed up a workflow',
          'Keeping content genuinely yours',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Security & Maintenance',
        summary:
          'Apply the skills that keep a client site online — the part freelancers get paid monthly for.',
        topics: [
          'SSL certificates and firewalls',
          'Backups and malware scanning',
          'User roles and permissions',
          'Regular maintenance routines',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Web Projects & Career Preparation',
        summary:
          'An end-to-end build for your portfolio, then learning to present it to a client.',
        topics: [
          'Building a business website or online store',
          'Portfolio-ready project work',
          'Presenting your designs in interviews',
          'Handling a client brief and delivery',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Register a domain, configure hosting and install WordPress unaided',
      'Design responsive pages in Elementor without writing code',
      'Customise themes safely using child themes and CSS',
      'Build a working WooCommerce store with payments and shipping',
      'Optimise a site for search and for speed under three seconds',
      'Secure, back up and maintain a live client website',
    ],
    tools: [
      'WordPress',
      'cPanel',
      'Elementor',
      'WooCommerce',
      'Yoast SEO',
      'RankMath',
      'Git & GitHub',
      'Hostinger & GoDaddy',
      'Cloudflare',
      'Google Analytics',
      'Google Search Console',
      'ChatGPT for Content',
      'Canva',
      'PHP Basics',
      'MySQL Basics',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Interested in technology or starting a side hustle? WordPress is the easiest way in — its interface makes web development basics approachable, and themes, plugins, SEO and site management are a useful skill to carry alongside your studies.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Colleges teach theory; the industry wants real sites. Whatever your major — computer science, engineering, commerce or management — building live websites and understanding hosting, SEO and e-commerce strengthens both your projects and your CV.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Knowing how to install a theme is not enough. Employers want problem-solvers. Design logic, customisation skill and a portfolio of live sites are worth more than any certificate when applying for web developer roles here.',
      },
      {
        label: 'Working Professionals',
        copy: 'In marketing, operations, sales or IT? WordPress lets you manage your company’s site, update content and fix things without waiting for a developer. It becomes a high-value addition rather than a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You should not need a developer for every small change. Understanding WordPress means control over your landing pages, blog and store — and far lower maintenance costs.',
      },
      {
        label: 'Aspiring Freelancers & Developers',
        copy: 'For freelancing, WordPress is gold. Theme customisation, speed optimisation and client handling let you deliver real sites to local and international clients, and build a steady income stream.',
      },
    ],
    whyChooseUs: [
      {
        title: 'WordPress skills are in demand',
        copy: 'Startups, agencies and businesses all need websites. Theme customisation, plugin setup and SEO optimisation give you a versatile qualification — and practical learning shows you where the actual money in the digital market is.',
      },
      {
        title: 'Understanding how WordPress really works',
        copy: 'Not just installing themes. Domain and hosting management, CMS fundamentals and database structure, child themes, page builders, plugin configuration, SEO, security hardening and backups, WooCommerce and payment gateways, and client delivery.',
      },
      {
        title: 'Practical training is how sites get learned',
        copy: 'Watching tutorials is useful; building a site from scratch is what makes it stick. Hands-on assignments cover UI design, debugging real errors and speed optimisation.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, WordPress leads to freelance web developer, UI designer, web content manager, e-commerce manager or technical support.',
      },
    ],
    whyNow: {
      title: 'Gain WordPress Skills You Can Apply In Real Life',
      points: [
        'Practical projects build a portfolio that proves your web design ability rather than asserting it.',
        'A portfolio website is the single most persuasive thing you can show an employer or a client.',
        'WordPress and web developer roles in Punjab start around ₹15,000 – ₹25,000 a month for a fresher.',
        'Focus on building sites and solving real problems rather than memorising menu options.',
      ],
    },
    roles: [
      'WordPress Developer',
      'Web Designer',
      'E-commerce Manager',
      'SEO Specialist',
      'Freelance Web Developer',
      'AI-Powered Web Strategist',
    ],
    roleDetails: [
      {
        role: 'WordPress Developer',
        copy: 'Build custom themes, plugins and backend solutions, working with PHP, MySQL and API integration.',
      },
      {
        role: 'Web Designer',
        copy: 'Create responsive layouts in Elementor and CSS, focused on UI, user experience and branding.',
      },
      {
        role: 'E-commerce Manager',
        copy: 'Run WooCommerce stores end to end — inventory, payments, orders and customer experience.',
      },
      {
        role: 'SEO Specialist',
        copy: 'Optimise sites with Yoast, RankMath and Analytics to earn rankings and traffic that lasts.',
      },
      {
        role: 'Freelance Web Developer',
        copy: 'Build a business creating websites for clients anywhere, with the flexible hours that come with it.',
      },
      {
        role: 'AI-Powered Web Strategist',
        copy: 'Use AI tools to create content strategy and automate site management, with judgement still doing the real work.',
      },
    ],
    hiring: [
      'Digital marketing agencies needing landing page designers',
      'IT startups building MVPs and product sites',
      'E-commerce companies managing online stores',
      'Freelance platforms such as Upwork and Fiverr for remote work',
      'Local businesses requiring website maintenance',
    ],
    nextSteps: [
      'Web development with React',
      'PHP & custom theme development',
      'SEO specialisation',
      'Shopify & e-commerce platforms',
    ],
    industries: ['Agencies', 'IT startups', 'E-commerce', 'Freelance & remote'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. The freelance spread is the widest here for a real reason:
     * a beginner taking small local jobs may start at ₹5,000 a month, while an
     * established WordPress freelancer with repeat clients passes ₹1,00,000 —
     * higher than either salaried market. `scale` is the midpoint in ₹/month.
     */
    salary: {
      role: 'WordPress Developer',
      summary:
        'Builds and maintains the websites businesses run on. Earnings depend on your portfolio, speed and how well you handle clients.',
      starting: '₹15,000–₹25,000/month',
      after2: '₹25,000–₹40,000/month',
      markets: [
        {
          name: 'Punjab — WordPress / Web Developer',
          fresher: '₹15,000–₹25,000/month',
          after2: '₹25,000–₹40,000/month',
          scale: { fresher: 20000, after2: 32500 },
        },
        {
          name: 'Delhi / NCR — Web Development',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹40,000–₹60,000+/month',
          scale: { fresher: 27500, after2: 50000 },
        },
        {
          name: 'Remote / Freelance WordPress',
          fresher: '₹5,000–₹20,000/month',
          after2: '₹50,000–₹1,00,000+/month',
          scale: { fresher: 12500, after2: 75000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'WordPress Developer, Web Designer, E-commerce Manager, SEO Specialist and Freelance Web Developer. A portfolio of live sites matters far more here than any certificate.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher starts around ₹15,000 – ₹25,000 a month in the Punjab market, rising to ₹25,000 – ₹40,000 with two years of work. Salaried WordPress work pays modestly — the money in this skill is in freelancing.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, and this is where WordPress genuinely pays. The starting range is the lowest in the catalogue — around ₹5,000 – ₹20,000 a month while you take small local jobs — but it rises past ₹1,00,000 with repeat clients, which is more than either salaried market offers. Expect a slow first year.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Digital marketing agencies needing landing pages, IT startups building product sites, e-commerce companies running stores, and local businesses needing maintenance — plus Upwork, Fiverr and direct remote clients.',
      },
      {
        q: 'Do I need to know coding first?',
        a: 'No, and that is the point of WordPress. You will build complete sites in Elementor without writing code. CSS and PHP basics come later, for the customisations page builders cannot reach — by which time you will already have live sites to show.',
      },
    ],
    projects: [
      {
        name: 'Business Landing Page',
        summary:
          'Build a high-converting landing page in Elementor, learning UI design and how a call-to-action earns its place.',
        tech: ['Elementor', 'WordPress'],
        level: 'Beginner',
        skills: ['UI Design', 'Conversion Layout'],
      },
      {
        name: 'Advanced Blog Setup',
        summary:
          'Create a blog built to be monetised — content strategy, SEO and internal linking that actually holds together.',
        tech: ['WordPress', 'Yoast SEO'],
        level: 'Beginner',
        skills: ['Content Strategy', 'SEO'],
      },
      {
        name: 'E-commerce Store',
        summary:
          'Build a real online store with products, cart and a working payment gateway integration.',
        tech: ['WooCommerce', 'Razorpay'],
        level: 'Intermediate',
        skills: ['E-commerce', 'Payments'],
      },
      {
        name: 'AI Content Website',
        summary:
          'Use ChatGPT to generate content and design a news or review site around it, keeping the result genuinely readable.',
        tech: ['ChatGPT', 'WordPress'],
        level: 'Intermediate',
        skills: ['AI Content', 'Site Design'],
      },
      {
        name: 'Portfolio Website',
        summary:
          'Build your own portfolio — the site that will do most of the work of getting you hired or booked.',
        tech: ['Elementor', 'WordPress'],
        level: 'Intermediate',
        skills: ['Personal Branding', 'Design'],
      },
      {
        name: 'Speed & Security Optimisation',
        summary:
          'Take a slow site and get it loading under three seconds, then secure it properly against the usual attacks.',
        tech: ['Caching', 'Cloudflare'],
        level: 'Advanced',
        skills: ['Performance', 'Security'],
      },
      {
        name: 'Real Estate / Booking Site',
        summary:
          'Manage custom post types and advanced search filters for a niche that needs more than a standard theme.',
        tech: ['Custom Post Types', 'WordPress'],
        level: 'Advanced',
        skills: ['Advanced Search', 'Niche Sites'],
      },
      {
        name: 'End-to-End Client Project',
        summary:
          'Simulate a client brief: take the requirements, build the site, and deliver it the way you would for real.',
        tech: ['WordPress', 'Client Delivery'],
        level: 'Advanced',
        skills: ['Requirements', 'Portfolio'],
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready training course',
        copy: 'Practical topics — hosting, themes, plugins, SEO and e-commerce — that turn dashboard familiarity into working skill.',
      },
      {
        title: 'Learn by building websites',
        copy: 'Practise by building sites rather than watching demos, developing the ability to design clean, fast, functional websites.',
      },
      {
        title: 'Develop a web portfolio',
        copy: 'Website projects you can put on a CV — work that proves your design and development ability rather than asserting it.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume building, freelancing guidance and interview preparation that make the course career-oriented rather than academic.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Experienced trainers',
        copy: 'Web design is easier when someone simplifies the genuinely confusing parts — hosting, DNS and why a site broke — rather than reading the manual at you.',
      },
      {
        title: 'Live and practical projects',
        copy: 'Projects make theory meaningful. You build real websites on real hosting, not dummy pages on localhost.',
      },
      {
        title: 'Small batch learning',
        copy: 'Design and coding get much easier when you can clear a doubt in real time rather than carrying it home.',
      },
      {
        title: 'A practical portfolio',
        copy: 'You finish with a portfolio of full website builds — the thing that actually gets freshers hired in this field.',
      },
      {
        title: 'Career guidance',
        copy: 'Guidance on freelancing, resume building and mock interviews, aimed at the two routes this skill actually leads to.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Curriculum',
          techcadd: 'Industry-focused, covering hosting, Elementor, WooCommerce and SEO',
          others: 'Often focuses only on basic dashboard usage',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, project-based learning',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd: 'Students work on live hosting environments and client-style tasks',
          others: 'Practical exposure may be limited to localhost',
        },
        {
          feature: 'Design skills',
          techcadd: 'Focus on UI, responsive design and branding',
          others: 'May cover themes without design principles',
        },
        {
          feature: 'E-commerce',
          techcadd: 'A deep dive into WooCommerce and payments',
          others: 'E-commerce training is often skipped',
        },
        {
          feature: 'SEO',
          techcadd: 'Yoast/RankMath, Search Console and Google Analytics',
          others: 'SEO might be an afterthought',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Students leave with three or more live websites',
          others: 'Portfolio development may not be a focus',
        },
        {
          feature: 'Career support',
          techcadd: 'Freelancing guidance, CV preparation and interview support',
          others: 'Career assistance varies between institutes',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Hands-on troubleshooting of the errors that actually break a site',
          others: 'Support may be limited to classroom slides',
        },
      ],
      note: 'The right-hand column represents general market patterns, not a claim about any specific institute. Before choosing a WordPress institute in Phagwara, ask how many live websites you will build, whether you will manage hosting yourself, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of web design',
        blurb:
          'Gain the fundamental skills to build a simple, working website you can put online.',
        skills: ['WordPress', 'Elementor', 'Basic SEO', 'Plugins'],
        recommendedFor: 'Website Owner, beginner freelancer and college student.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in e-commerce & customisation',
        blurb:
          'Go further with WooCommerce, advanced theme editing and speed optimisation — the level clients pay for.',
        skills: ['Elementor Pro', 'WooCommerce', 'PHP basics', 'SEO tools'],
        recommendedFor: 'WordPress Developer, E-commerce Manager and professional freelancer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master web development & strategy',
        blurb:
          'Combine WordPress with advanced SEO, AI tools and the workflows an agency actually runs on.',
        skills: ['PHP', 'MySQL', 'React basics', 'AI tools', 'Advanced SEO'],
        recommendedFor: 'Full-Stack Web Developer, digital agency owner and senior developer.',
      },
    ],
    capabilities: [
      { capability: 'WordPress installation & hosting', included: [true, true, true] },
      { capability: 'Theme & plugin setup', included: [true, true, true] },
      { capability: 'Elementor page building', included: [true, true, true] },
      { capability: 'Blogging & basic SEO', included: [true, true, true] },
      { capability: 'E-commerce (WooCommerce)', included: [false, true, true] },
      { capability: 'Payment gateways & shipping', included: [false, true, true] },
      { capability: 'PHP & child theme editing', included: [false, true, true] },
      { capability: 'Speed optimisation (caching / CDN)', included: [false, true, true] },
      { capability: 'Advanced API integration', included: [false, false, true] },
      { capability: 'AI content & automation', included: [false, false, true] },
      { capability: 'Advanced custom post types', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. Choose 3 months to build a blog or a simple business site; 6 months if you want to sell online or start professional freelancing; 9 months to become a full-stack WordPress developer or run a web agency. Each level builds on the last, so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn WordPress with us?',
      intro:
        'WordPress is more than installing plugins. The emphasis here is on design logic, marketing sense and professional execution — practical coding experience, assignments and the tools the industry actually uses.',
      points: [
        {
          title: 'Real hosting, not localhost',
          copy: 'You work on live hosting with a real domain from early on. Everything that can go wrong on a client site goes wrong on yours first, where it is safe.',
        },
        {
          title: 'Design taught alongside the tool',
          copy: 'A site built with no design sense looks it. UI, spacing and branding are taught with the page builder, not separately.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical builds covering a landing page, blog, store, AI content site, portfolio, optimisation, a niche site and a full client project.',
        },
        {
          title: 'Built for freelancing',
          copy: 'Client handling, requirements and delivery are part of the course, because freelancing is where this skill genuinely pays.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the WordPress Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn website creation through practical training. Students learn hosting, themes, plugins, WooCommerce and SEO with hands-on practice.',
      },
      {
        q: 'Who can join a WordPress Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, business owners and working professionals. No prior coding experience is needed.',
      },
      {
        q: 'Is WordPress a good career option for freshers?',
        a: 'Yes. WordPress powers over 40% of the web. After gaining practical skills, freshers can explore roles such as Web Designer, WordPress Developer, E-commerce Manager and SEO Specialist.',
      },
      {
        q: 'What will I learn in the WordPress Course?',
        a: 'Domain setup, hosting, cPanel, Elementor, WooCommerce, Yoast SEO, security and website maintenance — the full path from an empty domain to a running, protected site.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'The approach is hands-on. You build live websites, debug real errors such as internal server errors, and manage databases rather than reading about them.',
      },
      {
        q: 'Will I work on WordPress projects during the course?',
        a: 'Yes. You build business websites, blogs and online stores. These strengthen the portfolio you will use for web developer jobs or freelancing.',
      },
      {
        q: 'Can I learn WordPress after 12th?',
        a: 'Absolutely. Students can start after 12th to build a foundation in web technology and begin earning early through freelancing.',
      },
      {
        q: 'Can WordPress help me get a job or internship?',
        a: 'Yes, if you focus on problem solving and portfolio building. Employers look for design sense, SEO knowledge and speed optimisation skills more than certificates.',
      },
      {
        q: 'Does the course include AI for web building?',
        a: 'Yes. The course introduces ChatGPT, Gemini and AI image generators for producing content and code snippets faster — with judgement about quality kept central.',
      },
      {
        q: 'How do I choose the best WordPress Course in Phagwara?',
        a: 'Do not choose on fees alone. Check the syllabus, live project exposure, hosting management training and career guidance. A good course should take you from knowing WordPress to building a business with it.',
      },
    ],
    relatedCourses: [
      'shopify-course-in-phagwara',
      'web-designing-course-in-phagwara',
      'seo-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
      'web-development-course-in-phagwara',
    ],
    keywords: [
      'wordpress course in phagwara',
      'wordpress training in phagwara',
      'wordpress institute in phagwara',
      'web development course in phagwara',
      'web design course in phagwara',
      'wordpress course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'shopify-course-in-phagwara',
    label: 'Shopify',
    title: 'Shopify Course in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'wallet',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Build online stores that sell — store setup, theme customisation, Liquid programming, payments, APIs and automation, with live projects and placement assistance.',
    overview:
      'Techcadd’s Shopify Development Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners to build online stores on Shopify. It covers e-commerce setup, theme customisation, product management, Liquid coding, payment gateways, shipping logic, APIs and app development. The training is based on practical knowledge rather than theory: you learn through store-building exercises, assignments and client-level projects, so you see how Shopify is actually used in online retail, D2C brands, freelancing and e-commerce work. The approach is beginner-friendly throughout, developing business logic, design sense and coding skill together — by the end you can set up, customise and scale a full Shopify store.',
    demand:
      'D2C brands and local retailers are moving online faster than agencies can staff for it, and Shopify is where most of them land — which makes a developer who can also code Liquid genuinely scarce here.',
    modules: [
      {
        title: 'Shopify Fundamentals & Store Setup',
        summary:
          'Build your e-commerce knowledge from scratch and get a real store standing up.',
        topics: [
          'Store creation, domain setup and dashboard configuration',
          'Products, collections, navigation and menus',
          'Themes, typography and branding elements',
          'Creating a clean, understandable store structure',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Theme Customisation & Design Logic',
        summary:
          'Get deeper into the front end and learn how a store gets shaped to fit a brand.',
        topics: [
          'Theme settings and section blocks',
          'Images, content and layouts',
          'Mobile responsiveness and UX principles',
          'Breaking complex pages into customisable sections',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Liquid Programming & Dynamic Content',
        summary:
          'Find out how professional Shopify themes are actually structured underneath.',
        topics: [
          'Objects, tags, filters and variables',
          'Logic, loops and conditionals in Liquid',
          'Structuring theme code into reusable components',
          'Building dynamic store features',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'E-commerce Operations & Payments',
        summary:
          'Find out how Shopify handles real transactions — the part where a store stops being a demo.',
        topics: [
          'Payment gateways — Razorpay, PayPal and Stripe',
          'Shipping profiles and tax settings',
          'Checkout logic and how it affects sales',
          'Automating tasks with Shopify Flow',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Data Handling & Analytics',
        summary:
          'Find out how a store’s own sales data tells you what to change next.',
        topics: [
          'Reading traffic reports and sales metrics',
          'Google Analytics integration',
          'Marketing pixels and tracking',
          'Practical analysis and reporting',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Advanced APIs & App Integrations',
        summary:
          'Advance into the parts of Shopify that connect it to everything else a business runs.',
        topics: [
          'Admin API and Storefront API basics',
          'Webhooks and app proxies',
          'Integrating with ERP, CRM and AI tools',
          'Beginner-level Shopify app concepts',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered E-commerce Development',
        summary:
          'Learn how AI tools change the pace of store building — and where your judgement still matters.',
        topics: [
          'AI assistants for understanding code and troubleshooting',
          'Generating product descriptions and marketing copy',
          'Using AI ethically without over-reliance',
          'Faster debugging, documentation and workflow',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Projects, Git & Developer Workflow',
        summary:
          'Apply your store-building skills the way a team does — version controlled and readable.',
        topics: [
          'Building projects against real-world requirements',
          'Git and version control for theme code',
          'Developer workflow and project organisation',
          'Writing readable, reusable Liquid',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Shopify Projects & Career Preparation',
        summary:
          'An end-to-end store for your portfolio, then learning to present it to a client.',
        topics: [
          'Store building assignments on real business scenarios',
          'Portfolio-ready project work',
          'Explaining your store design and code in interviews',
          'Career paths in Shopify development, e-commerce and freelancing',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Set up a complete Shopify store with products, collections and navigation',
      'Customise themes to match a brand without breaking them',
      'Write Liquid with objects, loops and conditionals for dynamic content',
      'Configure payment gateways, shipping profiles and tax logic',
      'Integrate external services through the Admin and Storefront APIs',
      'Ship an end-to-end store you can defend in an interview',
    ],
    tools: [
      'Shopify Admin',
      'Shopify CLI',
      'Liquid',
      'Theme Kit',
      'VS Code',
      'Git & GitHub',
      'Canva',
      'Google Analytics',
      'Meta Pixel',
      'Payment Gateways',
      'REST APIs',
      'Shopify Flow',
      'ChatGPT & AI Tools',
      'Gemini for Content',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Interested in earning online or exploring technology? Shopify’s interface makes e-commerce basics approachable — store setup, theme editing, product listing, order management and payment gateways are a useful skill alongside your studies.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'E-commerce should be taught through real stores, not textbooks. Whatever your discipline — commerce, management, computer science or arts — store-building exercises in theme customisation, app integrations and management strengthen your projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Drag-and-drop skills alone do not impress employers. They want candidates who can customise a theme and solve an e-commerce problem. Design logic, debugging and a portfolio of real stores beat any certificate.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, marketing, operations or sales? Shopify lets you manage online assets and build technical business skill — store automation, product data, payment integrations and conversion optimisation, without changing career.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer to run a store well. Understanding online sales funnels, inventory and the technology behind them makes scaling decisions clearer and developer conversations far easier.',
      },
      {
        label: 'Aspiring Freelancers & Developers',
        copy: 'For freelancing, Shopify pays well. Store development, theme customisation, Liquid programming and client management let you build stores, migrate stores, create custom sections and consult on e-commerce.',
      },
    ],
    whyChooseUs: [
      {
        title: 'E-commerce skills are in demand',
        copy: 'Shopify has spread well past small stores — multi-million-dollar brands and startups run on it. Store setup, theme development, payment integration and marketing automation give you a versatile qualification.',
      },
      {
        title: 'Understanding how e-commerce really works',
        copy: 'Not memorising menus. Admin and dashboard navigation, theme and section editing, product and inventory management, Liquid basics, payment gateways and shipping zones, tax logic, fulfilment workflows and app integrations.',
      },
      {
        title: 'Practical training is how stores get learned',
        copy: 'Watching tutorials is useful; building and customising your own store teaches far more. Hands-on assignments cover store development, theme editing, product uploading and e-commerce problem solving.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, Shopify leads to Shopify Developer, E-commerce Executive, freelance web designer, dropshipping expert or digital entrepreneur.',
      },
    ],
    whyNow: {
      title: 'Gain Shopify Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that proves you can build stores.',
        'A strong portfolio shows theme customisation, product data, payment APIs and client requirements handled properly.',
        'Shopify developer roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with real stores to show.',
        'Focus on building stores and solving problems rather than memorising menus and steps.',
      ],
    },
    roles: [
      'Shopify Developer',
      'E-commerce Executive',
      'Front-End Developer',
      'Automation Specialist',
      'Freelance Shopify Developer',
      'Dropshipping Expert',
    ],
    roleDetails: [
      {
        role: 'Shopify Developer',
        copy: 'Build custom themes, applications and e-commerce solutions on Shopify, working across Liquid programming, APIs and the platform’s development concepts. The most common path after this course.',
      },
      {
        role: 'E-commerce Executive',
        copy: 'Manage online stores, products and marketing campaigns, using Shopify tools, analytics and automation to run a profitable operation.',
      },
      {
        role: 'Front-End Developer',
        copy: 'Build reliable interfaces and user experiences with HTML, CSS and Liquid, turning design concepts into working storefronts.',
      },
      {
        role: 'Automation Specialist',
        copy: 'Create workflows that automate inventory updates, customer tagging and repetitive operations using Shopify Flow, APIs and webhooks.',
      },
      {
        role: 'Freelance Shopify Developer',
        copy: 'Build a freelance practice creating stores for clients in Phagwara, Jalandhar and further out, growing a portfolio from real briefs.',
      },
      {
        role: 'Dropshipping Expert',
        copy: 'Build and run dropshipping businesses on Shopify, understanding product sourcing, logistics and the tools that support them.',
      },
    ],
    hiring: [
      'IT companies creating websites, applications and business solutions',
      'E-commerce startups and tech companies building on Shopify',
      'Digital marketing agencies working on client stores',
      'D2C brands and retail companies managing their online presence',
      'Freelance and remote projects needing Shopify developers',
    ],
    nextSteps: [
      'WordPress & WooCommerce',
      'Front-end development with React',
      'Digital marketing for e-commerce',
      'Shopify app development',
    ],
    industries: ['E-commerce & D2C', 'Agencies', 'IT startups', 'Retail'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They sit above the WordPress bands, which is consistent:
     * Shopify work involves Liquid and API skill that pure page-building does
     * not. `scale` is the midpoint in ₹/month; remote sits below Punjab at the
     * fresher end on purpose, since freelance income ramps rather than
     * starting at a salary.
     */
    salary: {
      role: 'Shopify Developer',
      summary:
        'Builds and customises the online stores brands sell through. Earnings depend on your technical skills, portfolio, experience, company and location.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹30,000–₹50,000/month',
      markets: [
        {
          name: 'Punjab — Shopify Developer',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹30,000–₹50,000/month',
          scale: { fresher: 24000, after2: 40000 },
        },
        {
          name: 'Delhi / NCR — Shopify / E-commerce',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Shopify Development',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹30,000–₹80,000+/month',
          scale: { fresher: 17500, after2: 55000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Shopify Developer, E-commerce Executive, Front-End Developer, Automation Specialist and Freelance Store Designer. A portfolio of real stores matters far more here than any certificate.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with real stores to show starts around ₹18,000 – ₹30,000 a month in the Punjab market, rising to ₹30,000 – ₹50,000 with two years of work. Developers who can write Liquid rather than only configure themes command the upper end.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — Shopify freelancing travels particularly well, since a store is a self-contained deliverable and international clients pay in stronger currencies. Income ramps rather than starting at a salary: around ₹10,000 – ₹25,000 a month early on, and ₹30,000 – ₹80,000+ once you have client stores behind you.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies building business solutions, e-commerce startups, digital marketing agencies running client stores, and D2C and retail brands managing their own — plus freelance and remote projects.',
      },
      {
        q: 'Should I learn Shopify or WordPress?',
        a: 'Shopify if you want to build stores; WordPress if you want to build websites of every kind. Shopify handles payments, inventory and checkout for you, so you reach a working store faster and the client work pays better. WordPress is more flexible and has far more local demand for non-store sites. Neither wastes the other — the design and client skills carry across.',
      },
    ],
    projects: [
      {
        name: 'E-commerce Store Setup',
        summary:
          'Build a fully functional store from scratch, focused on branding, navigation and product organisation — the architecture everything else sits on.',
        tech: ['Shopify Admin', 'Product Management'],
        level: 'Beginner',
        skills: ['Store Setup', 'Navigation'],
      },
      {
        name: 'Theme Customisation Project',
        summary:
          'Take a pre-built theme and reshape it to a specific brand identity using sections, blocks and theme settings.',
        tech: ['Shopify Themes', 'CSS'],
        level: 'Beginner',
        skills: ['Theme Design', 'Responsive Design'],
      },
      {
        name: 'Liquid Programming Project',
        summary:
          'Build a custom section or dynamic feature — manipulating data, logic and loops in Liquid to display content that changes with the store.',
        tech: ['Liquid', 'Shopify Themes'],
        level: 'Intermediate',
        skills: ['Dynamic Content', 'Template Logic'],
      },
      {
        name: 'Shopify Automation Project',
        summary:
          'Design a working automation in Shopify Flow: tag customers, manage inventory notifications and take repetitive service tasks off a person.',
        tech: ['Shopify Flow', 'Automation'],
        level: 'Intermediate',
        skills: ['Workflow', 'Operations'],
      },
      {
        name: 'API Integration Project',
        summary:
          'Connect Shopify to an external service — fetching and displaying real-time data through the Storefront or Admin API.',
        tech: ['REST API', 'JSON'],
        level: 'Intermediate',
        skills: ['API Integration', 'Development'],
      },
      {
        name: 'E-commerce Analytics Project',
        summary:
          'Work with real sales data: analyse traffic, conversion rates and customer behaviour in Shopify Analytics and Google Analytics.',
        tech: ['Shopify Analytics', 'Google Analytics'],
        level: 'Advanced',
        skills: ['Data Analysis', 'Tracking'],
      },
      {
        name: 'AI-Powered Store Project',
        summary:
          'Use AI to generate product descriptions, SEO content and marketing copy, then integrate the results into a store that still reads like a brand.',
        tech: ['AI Tools', 'Shopify'],
        level: 'Advanced',
        skills: ['Content Generation', 'Prompt Engineering'],
      },
      {
        name: 'End-to-End Capstone Project',
        summary:
          'Bring everything together for a real business case: ideate, build, test and present a complete e-commerce solution.',
        tech: ['Shopify', 'Liquid'],
        level: 'Advanced',
        skills: ['Development', 'Portfolio'],
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready Shopify training',
        copy: 'Practical topics — store setup, themes, Liquid, payments, APIs and problem solving — that turn dashboard familiarity into working skill.',
      },
      {
        title: 'Learn by building stores',
        copy: 'Practise on real store projects, developing the ability to design clean stores, debug theme issues, manage data and build useful e-commerce solutions.',
      },
      {
        title: 'Develop a Shopify portfolio',
        copy: 'Industry-relevant projects you can put on a CV — work that proves your store-building and problem-solving ability in interviews and job hunts.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume help, technical interview preparation, project presentation and career direction across Shopify development, e-commerce management and digital marketing.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain Shopify simply',
        copy: 'Shopify is a good place for beginners, and it should feel that way. Trainers explain e-commerce concepts and coding logic through simple, practical examples.',
      },
      {
        title: 'Live and practical projects',
        copy: 'Projects make the theory meaningful. You learn through hands-on work spanning store setup, automation, API integration and problem solving.',
      },
      {
        title: 'Small batch learning',
        copy: 'Store building is far easier when you can clear a doubt on Liquid in real time and practise the concept while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio',
        copy: 'You finish with a portfolio demonstrating store customisation, API integration and real development — good examples to talk about in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because Shopify spans web development, e-commerce, digital marketing and D2C brands, guidance is career-oriented: resume building, mock interviews and project presentation.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Shopify curriculum',
          techcadd:
            'Industry-focused training covering store setup, Liquid programming, APIs and automation',
          others: 'Often focuses mainly on basic store setup and theme usage',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, project-based learning built around real e-commerce problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work on live store projects and assignments to strengthen problem-solving skills',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Technical skills',
          techcadd: 'Focus on Liquid coding, API integration, debugging and automation',
          others: 'May cover concepts without enough coding practice',
        },
        {
          feature: 'Advanced topics',
          techcadd: 'Exposure to Liquid, APIs, custom apps and business logic',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular exercises designed to improve logical thinking and development confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects that help students showcase their Shopify development skills',
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
            'Trainer guidance to help students understand coding concepts and solve design challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a Shopify institute in Phagwara, ask how much coding practice is included, whether students build real stores, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of Shopify development',
        blurb:
          'Gain fundamental skills step by step through practical store building and easy-to-start projects.',
        skills: ['Shopify Admin', 'Theme Customisation', 'Basic Liquid', 'Product Setup'],
        recommendedFor:
          'E-commerce Trainee, Store Manager, Junior Shopify Developer and anyone starting a Shopify course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in Shopify development',
        blurb:
          'Real-world development: Liquid programming, API integration, payment gateways and advanced customisation.',
        skills: ['Liquid', 'Git', 'API Integration', 'Theme Kit', 'Shopify Flow'],
        recommendedFor:
          'Shopify Developer, E-commerce Developer, Front-End Developer and Automation Specialist.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master Shopify development',
        blurb:
          'Store development combined with advanced Liquid, API integration, automation and AI-powered workflows.',
        skills: ['Liquid', 'APIs', 'MySQL', 'Shopify Flow', 'Google Analytics', 'AI tools'],
        recommendedFor:
          'Full-Stack Shopify Developer, E-commerce Consultant, freelance developer and agency-ready professionals.',
      },
    ],
    capabilities: [
      { capability: 'Store setup & admin', included: [true, true, true] },
      { capability: 'Product & order management', included: [true, true, true] },
      { capability: 'Theme customisation', included: [true, true, true] },
      { capability: 'Navigation & menus', included: [true, true, true] },
      { capability: 'Liquid programming basics', included: [true, true, true] },
      { capability: 'Basic payment integration', included: [true, true, true] },
      { capability: 'Advanced Liquid logic', included: [false, true, true] },
      { capability: 'API integration', included: [false, true, true] },
      { capability: 'Shopify Flow automation', included: [false, true, true] },
      { capability: 'Git & Theme Kit', included: [false, true, true] },
      { capability: 'Advanced app development', included: [false, false, true] },
      { capability: 'Headless commerce concepts', included: [false, false, true] },
      { capability: 'AI integration & automation', included: [false, false, true] },
      { capability: 'Advanced projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. Choose 3 months for store setup, theme editing and product management; 6 months for Liquid programming, payment gateways, API integration and automation; 9 months for advanced development, integrations and AI tools as a full-stack e-commerce developer. Each level builds on the last, so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Shopify with us?',
      intro:
        'Shopify is more than knowing the platform. The emphasis here is on how stores get built and how business problems get solved with e-commerce technology — practical store work, assignments and the tools the industry uses.',
      points: [
        {
          title: 'Liquid, not just themes',
          copy: 'Anyone can pick a theme. Writing Liquid is what separates a store configurer from a Shopify developer, and it gets four weeks here.',
        },
        {
          title: 'Real stores, real payments',
          copy: 'You configure genuine payment gateways, shipping profiles and tax logic — the parts that decide whether a store can actually trade.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical builds covering setup, theme work, Liquid, automation, APIs, analytics, AI content and a full client-style capstone.',
        },
        {
          title: 'Built for freelancing',
          copy: 'Client requirements, delivery and store handover are part of the course, because that is where Shopify skill pays best.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Shopify Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring developers learn e-commerce development through practical, career-focused training. Students learn store setup, theme customisation, Liquid programming, payment gateways and real-world e-commerce concepts with hands-on practice.',
      },
      {
        q: 'Who can join a Shopify Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start from the basics without prior coding experience, while those with technical knowledge can strengthen their e-commerce development skills.',
      },
      {
        q: 'Is Shopify a good career option for freshers?',
        a: 'Yes. Shopify is widely used across online retail, dropshipping, brand management and web development. After gaining practical skills, freshers can explore roles such as Shopify Developer, E-commerce Executive, Front-End Developer or freelance store designer.',
      },
      {
        q: 'What will I learn in the Shopify Course?',
        a: 'Store setup, product management, theme customisation, Liquid basics, payment gateways, shipping logic, API integration and automation — plus how Shopify is used in digital marketing and business scaling.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Learning Shopify becomes much easier when you build stores yourself. The approach focuses on hands-on store building, theme editing, debugging and mini-projects rather than theory alone.',
      },
      {
        q: 'Will I work on Shopify projects during the course?',
        a: 'Yes. Practical learning includes store setup projects, theme customisation tasks, Liquid programming exercises and end-to-end e-commerce projects — which show how the concepts work together and strengthen your portfolio.',
      },
      {
        q: 'Can I learn Shopify after 12th?',
        a: 'Absolutely, especially if you are interested in online business, e-commerce, design or web development. It provides a strong professional foundation to build on.',
      },
      {
        q: 'Can Shopify help me get a job or internship?',
        a: 'Yes, but Shopify alone is not enough. Employers also look for problem-solving ability, practical store projects, Liquid coding skill and an understanding of business logic. A job-oriented course helps you build these.',
      },
      {
        q: 'Does the course include Shopify for AI and automation?',
        a: 'Yes. Shopify integrates with AI for product descriptions, customer service and marketing automation. The course introduces these tools, building a foundation before advanced e-commerce automation.',
      },
      {
        q: 'How do I choose the best Shopify Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical store sessions, trainer experience, project work, Liquid coding coverage, doubt support and placement assistance. A good course should take you from basics to actually building and customising stores.',
      },
    ],
    relatedCourses: [
      'wordpress-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'web-designing-course-in-phagwara',
      'seo-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
      'web-development-course-in-phagwara',
    ],
    keywords: [
      'shopify course in phagwara',
      'shopify development course in phagwara',
      'shopify training institute in phagwara',
      'shopify classes in phagwara',
      'ecommerce course in phagwara',
      'shopify course after 12th in phagwara',
    ],
  }),
]
