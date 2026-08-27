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
    title: 'Best Digital Marketing Course & Training in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'megaphone',
    duration: '4 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary: 'SEO, social, ads and analytics in one program — the full-funnel skillset agencies and brands hire for.',
    overview: 'Kick-start your marketing career with structured Digital Marketing training in Phagwara. You learn SEO, social media marketing, Google Business Profile, content marketing, online advertising, email marketing, WordPress, analytics and campaign management. Suited to students, freshers, business owners, freelancers and working professionals who want to understand how businesses become visible online, generate leads and grow through digital platforms.',
    demand: 'Every business in Phagwara now advertises online whether or not anyone on staff knows how, which is why this is the easiest skill here to freelance with from month three.',
    modules: [
      {
        title: 'Digital marketing fundamentals',
        summary: 'Core concepts, online customer journeys, marketing channels, target audiences, digital branding and campaign objectives.',
        topics: [
          'Marketing channels',
          'Customer journey',
          'Target audiences',
          'Campaign objectives',
        ],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Website & WordPress fundamentals',
        summary: 'Websites, domains, hosting, site structure, WordPress pages, posts, themes, plugins and forms.',
        topics: ['Domains & hosting', 'WordPress basics', 'Themes & plugins', 'Forms'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Search engine optimisation',
        summary: 'Keyword research, search intent, on-page and technical SEO, internal linking, meta tags, content and image optimisation, backlinks.',
        topics: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Backlinks'],
        duration: '3 weeks',
        lessons: 14,
      },
      {
        title: 'Local SEO & Google Business Profile',
        summary: 'Improving local presence — profile and business information optimisation, categories, services, reviews, posts, local keywords and citations.',
        topics: ['Google Business Profile', 'Categories & services', 'Reviews & posts', 'Citations'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Social media marketing',
        summary: 'Strategy, content planning, audience targeting, profile optimisation, posts, reels, hashtags, calendars and performance tracking.',
        topics: ['Content planning', 'Audience targeting', 'Reels & posts', 'Performance tracking'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Content marketing & copywriting',
        summary: 'Writing useful, engaging content for websites, blogs, social, landing pages, ads and business profiles, with keywords used naturally.',
        topics: ['Copywriting', 'Blog content', 'Landing pages', 'Keyword placement'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Paid advertising & performance marketing',
        summary: 'Advertising fundamentals — campaign objectives, audience targeting, ad formats, keyword-based ads, budget planning and measurement.',
        topics: ['Campaign objectives', 'Audience targeting', 'Ad formats', 'Budget planning'],
        duration: '2 weeks',
        lessons: 12,
      },
      {
        title: 'Email marketing & lead generation',
        summary: 'Campaign fundamentals, subscriber lists, promotional emails, lead magnets, calls to action and follow-up sequences.',
        topics: ['Subscriber lists', 'Lead magnets', 'Calls to action', 'Follow-up campaigns'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Analytics & performance tracking',
        summary: 'Traffic, user behaviour, conversions, campaign performance, engagement and the marketing KPIs that matter.',
        topics: ['Traffic & behaviour', 'Conversions', 'Campaign reporting', 'Marketing KPIs'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Graphic & marketing content creation',
        summary: 'Building marketing creatives, social posts, banners and promotional visuals with commonly used design tools.',
        topics: ['Creative basics', 'Social posts', 'Banners', 'Design tools'],
        duration: '1 week',
        lessons: 8,
      },
      {
        title: 'Strategy & brand building',
        summary: 'Developing a strategy — identifying audiences, analysing competitors, choosing channels, planning content and measuring outcomes.',
        topics: ['Audience research', 'Competitor analysis', 'Channel selection', 'Measurement'],
        duration: '2 weeks',
        lessons: 10,
      },
      {
        title: 'Live projects & career preparation',
        summary: 'SEO audits, social campaigns, content assignments, local SEO activity, reporting, portfolio development and interview preparation.',
        topics: ['SEO audit', 'Live campaign', 'Reporting', 'Portfolio & interviews'],
        duration: '2 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Search engine optimisation and local SEO',
      'Social media marketing and content strategy',
      'Google Business Profile management',
      'Paid advertising and lead generation',
      'Website, WordPress and content marketing',
      'Analytics, reporting and digital campaign skills',
    ],
    tools: [
      'Google Search Console',
      'Google Analytics',
      'Google Business Profile',
      'Google Ads',
      'Meta Ads Manager',
      'WordPress',
      'Canva',
      'SEO Tools',
      'Keyword Research Tools',
      'Social Media Platforms',
      'Email Marketing Tools',
      'Google Keyword Planner',
      'Microsoft Excel',
      'Content & Analytics Tools',
    ],
    roles: [
      'Digital Marketing Executive',
      'SEO Executive',
      'Social Media Executive',
      'SEO Analyst',
      'Performance Marketing Executive',
      'Content Marketing Executive',
      'Digital Marketing Freelancer',
      'Social Media Manager',
    ],
    roleDetails: [
      {
        role: 'Digital Marketing Executive',
        copy: 'Plan and run online marketing across SEO, social media, content, websites and campaigns.',
      },
      {
        role: 'SEO Executive',
        copy: 'Work on keyword research, on-page, technical and local SEO, content SEO and link building.',
      },
      {
        role: 'Social Media Executive',
        copy: 'Manage accounts, plan the content calendar, publish, engage the audience and analyse performance.',
      },
      {
        role: 'SEO Analyst',
        copy: 'Analyse website performance, keyword rankings, visibility, competitors and SEO opportunities.',
      },
      {
        role: 'Performance Marketing Executive',
        copy: 'Support paid campaigns, audience targeting, optimisation, lead generation and performance analysis.',
      },
      {
        role: 'Content Marketing Executive',
        copy: 'Create blogs, website copy, social content and promotional material for campaigns.',
      },
      {
        role: 'Digital Marketing Freelancer',
        copy: 'Offer SEO, social, content, local SEO and website promotion services independently.',
      },
      {
        role: 'Social Media Manager',
        copy: 'Own social strategy, manage brand accounts, coordinate content and build online presence.',
      },
    ],
    hiring: [
      'Digital marketing agencies',
      'In-house marketing teams',
      'E-commerce and D2C brands',
      'Freelance and retainer clients',
    ],
    nextSteps: [
      'Advanced Google Ads',
      'Marketing analytics',
      'Conversion rate optimisation',
      'Marketing automation',
    ],
    industries: ['Agencies', 'E-commerce', 'Education', 'Local business & retail'],
    salary: {
      role: 'Digital Marketing Executive',
      summary: 'Runs the campaigns, content and reporting that bring a business its customers.',
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
        q: 'What job roles open up after Digital Marketing?',
        a: 'Graduates move into Digital Marketing Executive, SEO Executive, Social Media Executive, SEO Analyst and similar roles. Every business in Phagwara now advertises online whether or not anyone on staff knows how, which is why this is the easiest skill here to freelance with from month three.',
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
        name: 'SEO audit of a live website',
        summary: 'A full on-page and technical review with keyword mapping and a prioritised fix list.',
        tech: ['Search Console', 'SEO Tools', 'Excel'],
        level: 'Beginner',
        skills: ['Keyword research', 'On-page SEO', 'Reporting'],
      },
      {
        name: 'Local business Google Business Profile',
        summary: 'Profile optimisation, categories, services, posts and review strategy for a real local business.',
        tech: ['Google Business Profile', 'Local SEO'],
        level: 'Intermediate',
        skills: ['Local SEO', 'Citations', 'Review management'],
      },
      {
        name: 'Social & paid campaign with reporting',
        summary: 'A planned content calendar plus a small paid campaign, measured and reported against its objective.',
        tech: ['Meta Ads Manager', 'Google Analytics', 'Canva'],
        level: 'Advanced',
        skills: ['Campaign planning', 'Audience targeting', 'Analytics'],
      },
    ],
    instructor: {
      heading: 'Why learn digital marketing with us?',
      intro: 'Marketing is judged on results, so the work here is done on live sites and real campaigns. You leave with audits, calendars and reports you actually produced, not notes about how they are produced.',
      points: [
        {
          title: 'Learning through practice',
          copy: 'Go beyond theory with SEO activity, content assignments, social work, campaigns and analysis projects.',
        },
        {
          title: 'Beginner-friendly program',
          copy: 'Start with the concepts, then move to advanced SEO, social, ads, analytics, local SEO and campaigns.',
        },
        {
          title: 'Training with industry tools',
          copy: 'Hands-on with Google Business Profile, Analytics, Search Console, Google Ads, Meta Ads, WordPress, Canva and keyword tools.',
        },
        {
          title: 'Real marketing projects',
          copy: 'SEO optimisation, social campaigns, content creation, local business promotion and website analysis.',
        },
        {
          title: 'Structured sessions',
          copy: 'Classes, demonstrations, campaign exercises, performance analysis and doubt solving.',
        },
        {
          title: 'Marketing career skills',
          copy: 'Practical skills for internships, interviews, freelance work and agency or in-house marketing roles.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the duration of the Digital Marketing course in Phagwara?',
        a: 'techcadd runs Digital Marketing over 4 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Digital Marketing course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Digital Marketing course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Digital Marketing course?',
        a: 'Graduates move into Digital Marketing Executive, SEO Executive, Social Media Executive, SEO Analyst and similar roles. Every business in Phagwara now advertises online whether or not anyone on staff knows how, which is why this is the easiest skill here to freelance with from month three.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Digital Marketing Executive roles start around ₹17,000 – ₹30,000 a month for a fresher with a working portfolio, rising to ₹4.5–9 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. It starts from what digital marketing is and how customers find a business online, then builds toward campaigns you plan and run yourself.',
      },
      {
        q: 'Do I need a technical background?',
        a: 'No. The website and WordPress module covers everything technical the rest of the course relies on.',
      },
    ],
    whyNow: {
      title: 'Digital Marketing Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Digital Marketing Executive roles in Punjab start around ₹17,000 – ₹30,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'web-designing-course-in-phagwara',
      'web-development-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
      'google-ads-course-in-phagwara',
      'seo-course-in-phagwara',
    ],
    keywords: [
      'best digital marketing course in phagwara',
      'digital marketing training in phagwara',
      'digital marketing certificate courses in phagwara',
      'seo training phagwara',
      'social media marketing classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'social-media-marketing-course-in-phagwara',
    label: 'Social Media Marketing',
    title: 'Best Social Media Marketing Course & Training in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'message',
    duration: '2 Months',
    level: 'Beginner',
    eligibility: '10th / 12th Pass Onward',
    summary: 'Grow and monetise an audience across Instagram, Facebook and LinkedIn with a real content and ad strategy.',
    overview: 'Six weeks across Meta, Instagram and LinkedIn: audience research, creative testing, community and the paid mechanics behind each platform.',
    demand: 'Local brands, restaurants and clinics all want a social presence and almost none of them can run one themselves — the retainer work is genuinely there.',
    modules: [
      {
        title: 'Strategy & audience',
        summary: 'Who you are talking to, and where.',
        topics: ['Audience research', 'Positioning', 'Platform choice', 'Calendars'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Organic content',
        summary: 'Content people choose to watch.',
        topics: ['Formats', 'Hooks', 'Community', 'Scheduling'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Meta Ads',
        summary: 'Targeting, creative and budget.',
        topics: ['Ads Manager', 'Audiences', 'Creative testing', 'Retargeting'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Measurement',
        summary: 'What actually moved.',
        topics: ['Pixel setup', 'Attribution', 'Reporting', 'Iteration'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Build a platform-appropriate strategy',
      'Plan and produce a content calendar',
      'Run and optimise Meta ad campaigns',
      'Set up tracking and retargeting',
      'Report on social performance',
    ],
    tools: ['Meta Ads Manager', 'Instagram', 'LinkedIn', 'Canva', 'Meta Pixel', 'Buffer'],
    roles: ['Social Media Manager', 'Performance Marketer', 'Content Creator', 'Community Manager'],
    hiring: [
      'Social media and creative agencies',
      'D2C and lifestyle brands',
      'Local business retainers',
      'Influencer and content teams',
    ],
    nextSteps: ['Digital Marketing', 'Google Ads', 'Content strategy', 'Data Analytics'],
    industries: ['D2C brands', 'Hospitality', 'EdTech', 'Agencies'],
    salary: {
      role: 'Social Media Executive',
      summary: 'Plans, produces and measures the content a brand publishes every week.',
      starting: '₹2–3 LPA',
      after2: '₹4–7.5 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–3 LPA',
          after2: '₹4–7.5 LPA',
          scale: { fresher: 2.5, after2: 5.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹2.5–4.5 LPA',
          after2: '₹5.5–10.5 LPA',
          scale: { fresher: 3.5, after2: 8.05 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3–5 LPA',
          after2: '₹6–11.5 LPA',
          scale: { fresher: 3.88, after2: 8.91 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Social Media Marketing?',
        a: 'Graduates move into Social Media Manager, Performance Marketer, Content Creator, Community Manager and similar roles. Local brands, restaurants and clinics all want a social presence and almost none of them can run one themselves — the retainer work is genuinely there.',
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
        name: 'Paid social campaign',
        summary: 'Audience, creative and budget run end to end.',
        tech: ['Meta Ads'],
        level: 'Intermediate',
        skills: ['Targeting', 'Creative testing', 'Reporting'],
      },
      {
        name: '30-day content calendar',
        summary: 'A month of planned, produced and scheduled content.',
        tech: ['Canva', 'Buffer'],
        level: 'Beginner',
        skills: ['Planning', 'Copywriting', 'Design'],
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
        q: 'What is the duration of the Social Media Marketing course in Phagwara?',
        a: 'techcadd runs Social Media Marketing over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Social Media Marketing course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Social Media Marketing course?',
        a: '10th / 12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Social Media Marketing course?',
        a: 'Graduates move into Social Media Manager, Performance Marketer, Content Creator, Community Manager and similar roles. Local brands, restaurants and clinics all want a social presence and almost none of them can run one themselves — the retainer work is genuinely there.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Social Media Executive roles start around ₹15,000 – ₹27,000 a month for a fresher with a working portfolio, rising to ₹4–7.5 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Social Media Marketing begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Social Media Marketing Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Social Media Executive roles in Punjab start around ₹15,000 – ₹27,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'digital-marketing-course-in-phagwara',
      'google-ads-course-in-phagwara',
      'seo-course-in-phagwara',
      'shopify-course-in-phagwara',
      'wordpress-course-in-phagwara',
      'python-course-in-phagwara',
    ],
    keywords: [
      'social media marketing course phagwara',
      'meta ads training in phagwara',
      'instagram marketing course in phagwara',
      'smm classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'google-ads-course-in-phagwara',
    label: 'Google Ads',
    title: 'Best Google Ads Course & Training in Phagwara',
    category: 'digital-marketing',
    categoryTitle: 'Digital Marketing',
    icon: 'target',
    duration: '1 Month',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Search, display and shopping campaigns — plan, launch and optimise Google Ads that convert.',
    overview: 'Six weeks inside Google Ads: account structure, keywords, ad copy, bidding and the reporting that ties spend to revenue.',
    demand: 'Paid ads is the one marketing skill with a number attached to it, and people who can prove a return on ad spend are paid accordingly.',
    modules: [
      {
        title: 'Account structure',
        summary: 'Campaigns, ad groups and why structure decides cost.',
        topics: ['Campaign types', 'Ad groups', 'Budgets', 'Settings'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Keywords & copy',
        summary: 'Match types, negatives and ads that earn the click.',
        topics: ['Match types', 'Negatives', 'Ad copy', 'Extensions'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Bidding & optimisation',
        summary: 'Spending where it returns.',
        topics: ['Bid strategies', 'Quality Score', 'A/B tests', 'Landing pages'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Shopping & reporting',
        summary: 'Product ads and proving the result.',
        topics: ['Merchant Centre', 'Shopping', 'Conversion tracking', 'Reporting'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Structure an account for control',
      'Choose match types and negatives deliberately',
      'Write and test ad copy',
      'Set bid strategies against a goal',
      'Track conversions and report on ROAS',
    ],
    tools: [
      'Google Ads',
      'Merchant Centre',
      'GA4',
      'Google Tag Manager',
      'Looker Studio',
      'Keyword Planner',
    ],
    roles: [
      'PPC Specialist',
      'Performance Marketer',
      'Campaign Manager',
      'Freelance Ads Consultant',
    ],
    hiring: [
      'Performance marketing agencies',
      'E-commerce and D2C brands',
      'Lead-generation businesses',
      'Freelance ad management retainers',
    ],
    nextSteps: ['Digital Marketing', 'SEO', 'Data Analytics', 'Conversion optimisation'],
    industries: ['E-commerce', 'Local services', 'EdTech', 'Lead generation'],
    salary: {
      role: 'Performance Marketer',
      summary: 'Spends an advertising budget and is measured on what it returns.',
      starting: '₹2–4 LPA',
      after2: '₹5–10 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2–4 LPA',
          after2: '₹5–10 LPA',
          scale: { fresher: 3.1, after2: 7.5 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3–5.5 LPA',
          after2: '₹7–14 LPA',
          scale: { fresher: 4.34, after2: 10.5 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹3.5–6 LPA',
          after2: '₹8–15.5 LPA',
          scale: { fresher: 4.81, after2: 11.63 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Google Ads?',
        a: 'Graduates move into PPC Specialist, Performance Marketer, Campaign Manager, Freelance Ads Consultant and similar roles. Paid ads is the one marketing skill with a number attached to it, and people who can prove a return on ad spend are paid accordingly.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹18,000 – ₹33,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Live search campaign',
        summary: 'A campaign planned, launched and optimised on a supervised budget.',
        tech: ['Google Ads', 'GA4'],
        level: 'Intermediate',
        skills: ['Structure', 'Bidding', 'Reporting'],
      },
      {
        name: 'Shopping feed setup',
        summary: 'A product feed and shopping campaign from scratch.',
        tech: ['Merchant Centre'],
        level: 'Beginner',
        skills: ['Feeds', 'Targeting', 'Tracking'],
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
        q: 'What is the duration of the Google Ads course in Phagwara?',
        a: 'techcadd runs Google Ads over 1 month depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Google Ads course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Google Ads course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Google Ads course?',
        a: 'Graduates move into PPC Specialist, Performance Marketer, Campaign Manager, Freelance Ads Consultant and similar roles. Paid ads is the one marketing skill with a number attached to it, and people who can prove a return on ad spend are paid accordingly.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Performance Marketer roles start around ₹18,000 – ₹33,000 a month for a fresher with a working portfolio, rising to ₹5–10 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Google Ads begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Google Ads Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Performance Marketer roles in Punjab start around ₹18,000 – ₹33,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'digital-marketing-course-in-phagwara',
      'seo-course-in-phagwara',
      'social-media-marketing-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'wordpress-course-in-phagwara',
      'shopify-course-in-phagwara',
    ],
    keywords: [
      'google ads course phagwara',
      'ppc training in phagwara',
      'adwords course in phagwara',
      'shopping ads classes in phagwara',
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
