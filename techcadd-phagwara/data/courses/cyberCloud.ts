/**
 * Cyber & Cloud course pages.
 *
 * Only what genuinely differs between tracks is written here — the audience
 * grid, the "why this programme" cards, the instructor panel, the shared FAQs
 * and the student reviews all come from `./shared` via `makeCourse`.
 *
 * @see ./factory for what each field becomes on the page.
 */

import { makeCourse } from './factory'
import type { CourseContent } from './types'

export const CYBER_CLOUD_COURSES: CourseContent[] = [
  makeCourse({
    slug: 'cybersecurity-course-in-phagwara',
    label: 'Cybersecurity',
    title: 'Cyber Security Course in Phagwara',
    category: 'cyber-cloud',
    categoryTitle: 'Cyber & Cloud',
    icon: 'shield',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Learn to defend systems and networks — networking, ethical hacking, VAPT, OWASP, forensics and SIEM, with virtual labs and placement assistance.',
    overview:
      'Techcadd’s Cyber Security Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners to defend systems and networks with professional security tooling. It covers network security, ethical hacking, the OWASP Top 10, VAPT, cryptography, incident response and security operations. The training is based on practical knowledge rather than theory: you work through virtual labs, simulation exercises, assignments and real security audits, so you see how security is applied across IT infrastructure, cloud and application work. The approach is beginner-friendly throughout, developing analytical skill, security logic and defensive thinking together — by the end you can identify, exploit and patch vulnerabilities with confidence.',
    demand:
      'Every bank, hospital and IT firm in the region now has a compliance requirement and no one in-house to meet it, which is why security roles stay open in Punjab far longer than developer ones.',
    modules: [
      {
        title: 'Networking Fundamentals & Security',
        summary:
          'Build your security knowledge from the wire up — you cannot defend a network you do not understand.',
        topics: [
          'TCP/IP, the OSI model and subnetting',
          'Network protocols and ports',
          'Firewalls, IDS and IPS',
          'Designing secure network architectures',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Linux, Kali & Scripting Basics',
        summary:
          'Get deeper into the analyst’s operating system and the scripting that makes it useful.',
        topics: [
          'Kali Linux tooling',
          'Shell scripting and Python for security',
          'File permissions and process management',
          'Breaking large tasks into smaller security scripts',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Ethical Hacking & Penetration Testing',
        summary:
          'Find out how a professional security audit is actually structured, and reported.',
        topics: [
          'Reconnaissance, scanning and gaining access',
          'Exploitation, post-exploitation and persistence',
          'Building a repeatable audit methodology',
          'Writing structured VAPT reports',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Web Application Security (OWASP)',
        summary:
          'Find out how web applications are attacked, and therefore how they are defended.',
        topics: [
          'SQL injection, XSS and CSRF',
          'Burp Suite and injection techniques',
          'API security',
          'Testing to industry-standard methodology',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Cryptography & Network Security',
        summary:
          'Find out how data is protected in transit and at rest, and where that protection fails.',
        topics: [
          'Encryption, decryption and hashing',
          'SSL/TLS, digital signatures and PKI',
          'VPNs and wireless security (WPA2/WPA3)',
          'Blockchain security basics',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Digital Forensics & Malware Analysis',
        summary:
          'Advance into incident response — what happened, how, and what the evidence proves.',
        topics: [
          'Forensic investigation with Autopsy and FTK',
          'Malware behaviour and sandboxing',
          'Log analysis and threat hunting',
          'Evidence collection and chain of custody',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Security Operations',
        summary:
          'Learn how AI changes detection and response work — and where it should not be trusted.',
        topics: [
          'AI assistants for understanding threat feeds and logs',
          'Generating and refining detection rules',
          'Using AI ethically without over-reliance',
          'Threat intelligence and automation workflows',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Security Projects, SIEM & SOC Workflow',
        summary:
          'Apply your skills the way a security operations centre does — monitored, ticketed, reported.',
        topics: [
          'SIEM tooling with Splunk and Wazuh',
          'Incident response workflow',
          'SOC operations and ticketing',
          'Writing readable, actionable security reports',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Projects & Career Preparation',
        summary:
          'An end-to-end engagement against real vulnerable machines, then learning to defend your findings.',
        topics: [
          'Practical assignments on vulnerable target machines',
          'Portfolio-ready security projects',
          'Explaining methodology and findings in interviews',
          'Career paths in red teaming, blue teaming, compliance and GRC',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Read a network properly — protocols, ports, subnets and where the gaps are',
      'Work confidently in Kali Linux and script routine security tasks',
      'Run a structured penetration test from reconnaissance to report',
      'Find and explain OWASP Top 10 vulnerabilities in a web application',
      'Investigate an incident and preserve evidence correctly',
      'Ship a full VAPT report you can defend in an interview',
    ],
    tools: [
      'Kali Linux',
      'Nmap',
      'Burp Suite',
      'Metasploit Framework',
      'Wireshark',
      'Nessus / OpenVAS',
      'Hydra / John the Ripper',
      'Aircrack-ng',
      'Splunk / Wazuh',
      'Autopsy',
      'Python for Security',
      'AI Security Tools',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Interested in ethical hacking, professionally or as a hobby? The practical approach makes networking and security basics graspable. You will meet Kali Linux, networking, footprinting, scanning and vulnerability analysis — a valuable skill alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Security should be taught through real scenarios, not textbooks. Whatever your discipline — computer science, engineering, commerce or management — lab exercises in penetration testing, SIEM tools and malware analysis strengthen your projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Theoretical knowledge does not move an employer. They want analytical problem-solvers. A portfolio of security audits and solved CTF challenges is worth far more than a certificate when applying for security roles here.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, operations, networking or administration? Security lets you defend your own infrastructure. Network defence, cloud security on AWS and Azure, incident response and SIEM become an additional skill, not a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer to care about data protection. Understanding compliance, business continuity and where your real risk sits makes conversations with a CTO or auditor far more productive.',
      },
      {
        label: 'Aspiring Analysts & Freelancers',
        copy: 'For security analysis or bug bounty work, this is the foundation: vulnerability assessment, penetration testing, report writing and exploitation technique — later applied to bug bounties, security audits and consulting.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Cyber security skills are in demand',
        copy: 'Demand has outrun supply. Startups, software companies, MNCs and government agencies all need security people. Network security, penetration testing, cloud security and compliance make one qualification useful across many roles.',
      },
      {
        title: 'Understanding how security really works',
        copy: 'Not running tools. Networking fundamentals, Linux and Kali, footprinting and reconnaissance, vulnerability analysis, the OWASP Top 10, cryptography, malware threats, sniffing and session hijacking, social engineering and denial-of-service — so you move from copying commands to thinking like an analyst.',
      },
      {
        title: 'Practical training is how security is learned',
        copy: 'Watching hacking tutorials is useful. Practising in labs and solving CTF challenges teaches far more — network scanning, exploitation, defensive security and threat hunting.',
      },
      {
        title: 'Skills that open high-paying career paths',
        copy: 'Depending on your interest, security leads to Security Analyst, Penetration Tester, Security Consultant, SOC Analyst or Network Security Engineer — among the better-paid entry points in IT.',
      },
    ],
    whyNow: {
      title: 'Gain Security Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that proves real security ability.',
        'A GitHub or blog portfolio shows vulnerability assessment, penetration testing and incident response handled properly.',
        'Security analyst roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher, reaching ₹40,000 – ₹60,000 within two years.',
        'Concentrate on building projects and solving CTF labs rather than learning theory alone.',
      ],
    },
    roles: [
      'Security Analyst',
      'Penetration Tester',
      'SOC Analyst',
      'Security Consultant',
      'Digital Forensics Investigator',
      'Malware Analyst',
      'Network Security Engineer',
      'Freelance Security Auditor',
    ],
    roleDetails: [
      {
        role: 'Security Analyst',
        copy: 'Monitor networks, analyse logs and respond to incidents, working across SIEM, IDS/IPS and log analysis. The most common path after this course.',
      },
      {
        role: 'Penetration Tester',
        copy: 'Simulate attacks to find weaknesses before someone else does, using Metasploit, Burp Suite and Nmap — then write the report that gets them fixed.',
      },
      {
        role: 'SOC Analyst',
        copy: 'Work in a security operations centre monitoring threats in real time: triage, threat hunting and incident response.',
      },
      {
        role: 'Security Consultant',
        copy: 'Advise businesses on security practice, applying ISO 27001, GDPR and network architecture knowledge to design systems that hold up.',
      },
      {
        role: 'Digital Forensics Investigator',
        copy: 'Collect and analyse digital evidence with Autopsy, EnCase and forensic technique to investigate incidents and cyber crime.',
      },
      {
        role: 'Malware Analyst',
        copy: 'Reverse engineer malware to understand its behaviour, working with sandboxing, disassemblers and static and dynamic analysis.',
      },
      {
        role: 'Network Security Engineer',
        copy: 'Secure the infrastructure itself — firewalls, VPNs and segmentation that protect how data moves.',
      },
      {
        role: 'Freelance Security Auditor',
        copy: 'Build a freelance practice on VAPT engagements for businesses in Phagwara, Jalandhar and further out, growing a portfolio from real audits.',
      },
    ],
    hiring: [
      'IT companies and software firms securing their own infrastructure',
      'Banks and financial institutions needing compliance and fraud detection',
      'Consulting firms providing VAPT services to clients',
      'Government and law enforcement needing digital forensics',
      'Bug bounty programmes paying per verified vulnerability',
    ],
    nextSteps: [
      'Ethical hacking specialisation',
      'Cloud security on AWS & Azure',
      'Digital forensics in depth',
      'Security certifications (CEH, Security+)',
    ],
    industries: ['IT & software', 'Banking & finance', 'Consulting', 'Government'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. The two-year Punjab figure (₹40,000–₹60,000) is the highest
     * of any course here, reflecting how quickly security experience is priced
     * once someone has it. `scale` is the midpoint in ₹/month; remote sits
     * below Punjab at the fresher end on purpose, since freelance and bounty
     * income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Security Analyst',
      summary:
        'Defends the networks and applications a business depends on. Earnings depend on your skills, portfolio, experience, company and location.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹40,000–₹60,000/month',
      markets: [
        {
          name: 'Punjab — Security Analyst',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹40,000–₹60,000/month',
          scale: { fresher: 27500, after2: 50000 },
        },
        {
          name: 'Delhi / NCR — Cyber Security',
          fresher: '₹30,000–₹50,000/month',
          after2: '₹50,000–₹90,000+/month',
          scale: { fresher: 40000, after2: 70000 },
        },
        {
          name: 'Remote / Freelance Security Auditing',
          fresher: '₹15,000–₹30,000/month',
          after2: '₹40,000–₹1,00,000+/month',
          scale: { fresher: 22500, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Security Analyst, Penetration Tester, SOC Analyst and Network Security Engineer. A portfolio of audits and solved CTF challenges matters far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher starts around ₹20,000 – ₹35,000 a month in the Punjab market, reaching ₹40,000 – ₹60,000 within two years — the fastest two-year growth of any course in this catalogue. Security experience is priced highly once you have it.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes, through VAPT engagements and bug bounty work. Income ramps rather than starting at a salary: around ₹15,000 – ₹30,000 a month early on, and ₹40,000 to over ₹1,00,000 once you have audits and disclosed findings behind you. Bounty income is genuinely unpredictable — treat it as upside, not salary.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT companies and software firms, banks and financial institutions with compliance requirements, consulting firms selling VAPT services, and government and law enforcement needing forensics — plus bug bounty programmes.',
      },
      {
        q: 'Is everything taught here legal to practise?',
        a: 'Yes, and that boundary is taken seriously. All exploitation work happens in isolated virtual labs and deliberately vulnerable machines built for training — DVWA, Metasploitable and similar. Testing systems you do not own or have written permission to test is a criminal offence under the IT Act, and the course covers scope, authorisation and responsible disclosure as part of the methodology rather than as a footnote.',
      },
    ],
    projects: [
      {
        name: 'Network Scanning & Vulnerability Assessment',
        summary:
          'Build a lab environment and use Nmap and OpenVAS to find open ports and vulnerabilities on target machines — writing the commands yourself and reading the results.',
        tech: ['Nmap', 'OpenVAS'],
        level: 'Beginner',
        skills: ['Network Security', 'Vulnerability Assessment'],
      },
      {
        name: 'Web Application Penetration Test',
        summary:
          'Attack a deliberately vulnerable application — DVWA or Mutillidae — with Burp Suite and OWASP methodology, and see exactly how SQLi and XSS get exploited.',
        tech: ['Burp Suite', 'OWASP'],
        level: 'Beginner',
        skills: ['Web Security', 'Penetration Testing'],
      },
      {
        name: 'Endpoint Security & Malware Analysis',
        summary:
          'Work real malware samples in a sandbox: analyse behaviour, track system changes and write proper indicators of compromise.',
        tech: ['Sandboxing', 'IOCs'],
        level: 'Intermediate',
        skills: ['Malware Analysis', 'Endpoint Security'],
      },
      {
        name: 'Security Automation with Python',
        summary:
          'Build a script that detects weak passwords or automates network scanning, learning how Python handles packets, files and repetitive security tasks.',
        tech: ['Python', 'Automation'],
        level: 'Intermediate',
        skills: ['Scripting', 'Security Automation'],
      },
      {
        name: 'Digital Forensics Investigation',
        summary:
          'Investigate a simulated crime scene image: recover deleted files, analyse logs and reconstruct user activity with forensic tooling.',
        tech: ['Autopsy', 'Forensics'],
        level: 'Intermediate',
        skills: ['Data Recovery', 'Incident Response'],
      },
      {
        name: 'Wireless Network Security Audit',
        summary:
          'Audit Wi-Fi security in a controlled lab — break weak encryption, review WPA configuration and write a wireless security policy that would hold up.',
        tech: ['Aircrack-ng', 'WPA2'],
        level: 'Advanced',
        skills: ['Wireless Security', 'Network Defence'],
      },
      {
        name: 'AI & Threat Intelligence Project',
        summary:
          'See where AI meets security on a practical project — threat feed ingestion, log analysis with Pandas and anomaly detection.',
        tech: ['Python', 'Machine Learning'],
        level: 'Advanced',
        skills: ['Threat Intelligence', 'Security Analytics'],
      },
      {
        name: 'End-to-End Security Audit (Capstone)',
        summary:
          'A complete vulnerability assessment: scan, exploit, document and present the finished report the way a consultant would to a client.',
        tech: ['VAPT', 'Report Writing'],
        level: 'Advanced',
        skills: ['Security Audit', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a real business objective into a security assessment strategy through asset identification, threat modelling and vulnerability research.',
        artefact: 'Vulnerability Research & Assessment Brief',
      },
      {
        title: 'Build',
        copy: 'Create and manage security labs with trainer guidance — build attack scenarios, configure firewalls, deploy SIEM tooling and use AI to speed up the workflow.',
        artefact: 'Red Team Attacks & Defensive Countermeasures',
      },
      {
        title: 'Present & Secure',
        copy: 'Present your strategy, the tests you ran, what you found and how it should be remediated — then take the audit into your professional portfolio.',
        artefact: 'End-to-End Security Audit & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready security training',
        copy: 'Practical topics — networking, ethical hacking, VAPT, forensics, SIEM and incident response — that turn IT knowledge into genuine security skill.',
      },
      {
        title: 'Learn by doing security projects',
        copy: 'Practise in virtual labs and CTF exercises, developing the ability to write reports, patch vulnerabilities and secure real networks.',
      },
      {
        title: 'Develop a security portfolio',
        copy: 'Industry-relevant projects you can put on a CV — work that proves both offensive and defensive ability in interviews and job hunts.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume help, technical interview preparation, project presentation and career direction across SOC analysis, penetration testing, network security and risk management.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain security clearly',
        copy: 'Security is genuinely complex for beginners. Trainers here explain attack techniques and defence logic through simple, practical examples rather than jargon.',
      },
      {
        title: 'Live and practical security labs',
        copy: 'Projects make the theory meaningful. You learn through hands-on labs spanning network security, VAPT, malware analysis, forensics and incident response.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Security analysis is far easier when you can clear a doubt on exploitation logic in real time and practise the tool while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with projects demonstrating security tooling, Python scripts and real VAPT work — good examples a fresher can actually discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because security spans banking, IT, government and healthcare, guidance is career-oriented: resume building, mock interviews, project presentation and direction toward the right role.',
      },
      {
        title: 'Security taught the practical way',
        copy: 'The aim is solving security incidents with logic, not learning commands — practical vulnerability assessment, defensive security and the industry tools that matter.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Cyber security curriculum',
          techcadd:
            'Industry-focused training covering VAPT, network security, OWASP, forensics, SIEM and advanced concepts',
          others: 'Often focuses mainly on basic terminology',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, lab-focused learning built around real security problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work in virtual labs on VAPT assignments to strengthen problem-solving skills',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Security skills',
          techcadd:
            'Focus on logic building, threat hunting, exploitation and writing security reports',
          others: 'May cover concepts without enough lab practice',
        },
        {
          feature: 'Advanced security',
          techcadd: 'Exposure to AI security, cloud security, APIs and automation',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular CTF exercises designed to improve logical thinking and security confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and audits that help students showcase their security skills',
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
            'Trainer guidance to help students understand security concepts and solve technical challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and lab exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a cyber security institute in Phagwara, ask how much lab practice is included, whether students build real projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of cyber security',
        blurb:
          'Fundamental skills step by step through practical labs and beginner-friendly projects, until the tooling stops feeling opaque.',
        skills: ['Kali Linux', 'Nmap', 'Networking basics', 'Burp Suite', 'Wireshark'],
        recommendedFor:
          'IT Trainee, Security Intern, Junior Security Analyst and anyone starting a cyber security course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in security operations',
        blurb:
          'Real-world vulnerability assessment across web applications, SIEM, malware analysis and automation, with advanced problem solving.',
        skills: ['Metasploit', 'Nessus', 'OpenVAS', 'Splunk', 'Python', 'AWS Security'],
        recommendedFor:
          'Penetration Tester, Security Analyst, SOC Analyst and Network Security Engineer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master cyber security',
        blurb:
          'Ethical hacking combined with forensics, incident response, cloud security and AI threat intelligence.',
        skills: ['Advanced Metasploit', 'Burp Suite Pro', 'OSINT tools', 'Cloud Security', 'AI tools'],
        recommendedFor:
          'Senior Security Consultant, Red Teamer, Forensics Investigator and Cloud Security Engineer.',
      },
    ],
    capabilities: [
      { capability: 'Networking fundamentals', included: [true, true, true] },
      { capability: 'Linux & Kali basics', included: [true, true, true] },
      { capability: 'Information gathering', included: [true, true, true] },
      { capability: 'Vulnerability assessment', included: [true, true, true] },
      { capability: 'Web security (OWASP)', included: [true, true, true] },
      { capability: 'Cryptography', included: [true, true, true] },
      { capability: 'Advanced exploitation', included: [false, true, true] },
      { capability: 'SIEM & SOC operations', included: [false, true, true] },
      { capability: 'Python for security', included: [false, true, true] },
      { capability: 'Cloud security', included: [false, true, true] },
      { capability: 'Malware analysis', included: [false, true, true] },
      { capability: 'Digital forensics', included: [false, false, true] },
      { capability: 'AI threat intelligence', included: [false, false, true] },
      { capability: 'Advanced VAPT projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your security foundation. The 6-month track includes those fundamentals and moves into VAPT, SIEM and automation. The 9-month programme builds further with advanced forensics, cloud security and AI-focused security work. Choose 3 months for ethical hacking, networking and security concepts; 6 months for penetration testing, defensive security and SOC operations; 9 months to add forensics, cloud security and AI.',
    instructor: {
      heading: 'Why learn Cyber Security with us?',
      intro:
        'Security is more than knowing tools. The emphasis here is on how attacks are actually executed and how to defend against them — through practical lab work, assignments, projects and the technology the industry runs on.',
      points: [
        {
          title: 'Isolated labs, real technique',
          copy: 'Everything offensive happens on deliberately vulnerable machines in a contained environment. You learn the real methodology without ever touching a system you should not.',
        },
        {
          title: 'Networking taught first',
          copy: 'Most people who struggle with security are really struggling with networking. It gets proper time before any tooling appears.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical projects covering scanning, web penetration testing, malware, automation, forensics, wireless, threat intelligence and a full audit capstone.',
        },
        {
          title: 'Reports as a deliverable',
          copy: 'A finding nobody can act on is worthless. Writing a clear VAPT report is taught as part of the work, because that is what a client actually buys.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Cyber Security Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring analysts learn security through practical, career-focused training. Students learn networking fundamentals, ethical hacking, VAPT, forensics, SIEM and real-world security concepts with hands-on practice.',
      },
      {
        q: 'Who can join a Cyber Security Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start from the basics without prior coding experience, while those with IT knowledge can strengthen their security skills.',
      },
      {
        q: 'Is Cyber Security a good career option for freshers?',
        a: 'Yes. Security is used across banking, IT, government and e-commerce. After gaining practical skills, freshers can explore roles such as Security Analyst, Penetration Tester, SOC Analyst and Network Security Engineer.',
      },
      {
        q: 'What will I learn in the Cyber Security Course?',
        a: 'Network security, ethical hacking, cryptography, web security, malware analysis, forensics and incident response — plus how Python is used in security automation and where AI fits into modern operations.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Security becomes much easier once you practise in labs. The approach focuses on hands-on lab work, CTF challenges, tool usage and real-world simulation rather than theory alone.',
      },
      {
        q: 'Will I work on security projects during the course?',
        a: 'Yes. Practical learning includes VAPT projects, forensics investigations, web application audits and security automation scripts — which show how the concepts connect and strengthen your portfolio.',
      },
      {
        q: 'Can I learn Cyber Security after 12th?',
        a: 'Absolutely, especially if you are interested in ethical hacking, IT security or networking. It provides a strong foundation to build on during college and beyond.',
      },
      {
        q: 'Can Cyber Security help me get a job or internship?',
        a: 'Yes, but tools alone are not enough. Employers also look for problem-solving ability, practical lab work, VAPT reports and an understanding of compliance. A job-oriented course helps you build these through practical training.',
      },
      {
        q: 'Does the course include AI and cloud security?',
        a: 'Yes. Security is increasingly bound up with AI and cloud computing. The course introduces AI-powered security tooling and cloud security on AWS and Azure, building a foundation before more advanced work.',
      },
      {
        q: 'How do I choose the best Cyber Security Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, lab availability, trainer experience, tools covered, project work and placement assistance. A good course should take you from basics to actually testing and securing systems.',
      },
    ],
    relatedCourses: [
      'ethical-hacking-course-in-phagwara',
      'linux-course-in-phagwara',
      'cloud-computing-course-in-phagwara',
      'python-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'java-course-in-phagwara',
    ],
    keywords: [
      'cyber security course in phagwara',
      'cyber security courses in phagwara',
      'cyber security training institute in phagwara',
      'ethical hacking course in phagwara',
      'cyber security classes in phagwara',
      'cyber security course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'ethical-hacking-course-in-phagwara',
    label: 'Ethical Hacking',
    title: 'Ethical Hacking Course in Phagwara',
    category: 'cyber-cloud',
    categoryTitle: 'Cyber & Cloud',
    icon: 'shield',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Think like an attacker, act like a defender — reconnaissance, scanning, exploitation, web and wireless testing, with live labs and placement assistance.',
    overview:
      'Techcadd’s Ethical Hacking Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners to secure systems using hacking methodology. It covers footprinting, network scanning, enumeration, vulnerability analysis, system hacking, malware threats, social engineering and web application penetration testing. The training is based on practical knowledge rather than theory: you work through live hacking simulations, lab assignments and real security audits, so you see how security applies to IT infrastructure, data protection and threat management. The approach is beginner-friendly throughout, developing offensive skill, defensive strategy and logic together — by the end you can identify vulnerabilities, exploit them ethically and patch what you found.',
    demand:
      'Offensive security is where the shortage is sharpest: plenty of people can run a scanner, very few can chain findings into a real attack path and then write the report that gets it fixed.',
    modules: [
      {
        title: 'Networking & Linux Basics for Hackers',
        summary:
          'Build the foundation everything else stands on — you cannot attack or defend what you cannot read.',
        topics: [
          'IP addressing, subnetting, ports and protocols',
          'Kali Linux and the terminal',
          'Bash scripting essentials',
          'How traffic actually moves across a network',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Information Gathering & Reconnaissance',
        summary:
          'Get deeper into how attackers pick and profile a target before touching anything.',
        topics: [
          'OSINT tooling and technique',
          'Google hacking and dorks',
          'Website footprinting',
          'DNS enumeration and subdomain discovery',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Network & Port Scanning',
        summary:
          'Find out how a network gets mapped, and what the results are actually telling you.',
        topics: [
          'Nmap, Netdiscover and Wireshark',
          'Analysing network traffic',
          'Identifying open ports and services',
          'Reading service banners',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Vulnerability Analysis & Exploitation',
        summary:
          'Find out how weaknesses are located, scored and turned into a working proof of concept.',
        topics: [
          'Nessus and OpenVAS scanning',
          'Understanding CVSS scores',
          'The Metasploit Framework',
          'From finding to exploiting responsibly',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Web Application Security & Injection',
        summary:
          'Learn how web applications break, which is the only reliable way to learn how to secure them.',
        topics: [
          'Burp Suite and OWASP ZAP',
          'SQL injection and XSS',
          'CSRF and IDOR',
          'Testing methodology for web apps',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'System Hacking & Malware',
        summary:
          'Learn how attackers gain access and keep it — and what that looks like from the defending side.',
        topics: [
          'Password cracking and privilege escalation',
          'Trojans and payloads',
          'Rootkits and keyloggers',
          'Detection and defence',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Wireless Security & Social Engineering',
        summary:
          'Learn to secure both the Wi-Fi and the people, who are usually the easier target.',
        topics: [
          'WPA/WPA2 cracking in a lab',
          'De-authentication attacks',
          'Phishing technique and detection',
          'The psychology of social engineering, and prevention',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Security Audit, Report Writing & Career Prep',
        summary:
          'An end-to-end VAPT engagement, written up the way a client would actually receive it.',
        topics: [
          'Running a complete VAPT cycle',
          'Writing a professional security audit report',
          'Presenting findings and remediation',
          'Preparing for cyber security interviews',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Read and map a network confidently in Kali Linux',
      'Gather intelligence on a target using OSINT technique',
      'Scan, enumerate and score vulnerabilities properly',
      'Exploit OWASP Top 10 web vulnerabilities in a lab',
      'Audit wireless networks and recognise social engineering',
      'Write a professional VAPT report you can defend in an interview',
    ],
    tools: [
      'Kali Linux',
      'Nmap',
      'Wireshark',
      'Burp Suite',
      'Metasploit',
      'Nessus',
      'OpenVAS',
      'OWASP ZAP',
      'Hydra',
      'John the Ripper',
      'SQLmap',
      'Aircrack-ng',
      'Maltego',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Curious how systems break, and how to stop them breaking? Ethical hacking is a strong place to start. You will meet network basics, Linux fundamentals, footprinting and vulnerability scanning — a powerful skill to carry alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Colleges teach the theory of computer science and rarely the reality of attacks. Whatever your degree — B.Tech, BCA, MCA or even commerce — lab exercises and CTF challenges build real penetration testing skill and a technical portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Tool knowledge alone does not impress employers. They want people who think like an attacker and act like a defender. A portfolio of security audits beats a certificate every time when applying for security roles here.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, networking, administration or DevOps? Ethical hacking lets you secure your own infrastructure and move toward a better-paid security domain — network and cloud security, threat intelligence and SIEM — without starting over.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer to care about data protection. Understanding penetration testing basics means understanding how customer data, transactions and business continuity are actually protected — and holding your security team to it.',
      },
      {
        label: 'Aspiring Analysts & Freelancers',
        copy: 'For bug bounty hunting or freelance security consulting, this is the basis: web app testing, API security and report writing, later applied to VAPT engagements and security audits.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Cyber security skills are in demand',
        copy: 'Attackers target everyone, so everyone needs defenders. Penetration testing, network security, vulnerability assessment and threat hunting make one qualification useful across well-paid roles in several industries.',
      },
      {
        title: 'Understanding how hacking really works',
        copy: 'Not running tools. Networking and TCP/IP, information gathering and OSINT, scanning and enumeration, vulnerability analysis, system hacking and malware, sniffing and social engineering, web and wireless testing, cryptography, and report writing.',
      },
      {
        title: 'Practical training is how security is learned',
        copy: 'Watching hacking tutorials is useful; breaking into a test lab teaches far more. Hands-on labs and simulations cover network exploitation, web application security and full security auditing.',
      },
      {
        title: 'Skills that open high-growth career paths',
        copy: 'Depending on your interest, this leads to Penetration Tester, Security Analyst, SOC Analyst, Network Security Engineer or Cyber Security Consultant.',
      },
    ],
    whyNow: {
      title: 'Gain Ethical Hacking Skills You Can Apply In Real Life',
      points: [
        'Practical hacking projects take your skills past theory into a portfolio that proves real ability.',
        'A security portfolio shows how you handle network scans, exploitation and patch management in interviews.',
        'Security analyst roles start around ₹20,000 – ₹35,000 a month for a fresher, with penetration testing paying more.',
        'Focus on building labs, solving CTFs and securing systems rather than memorising tool commands.',
      ],
    },
    roles: [
      'Penetration Tester',
      'Cyber Security Analyst',
      'SOC Analyst',
      'Network Security Engineer',
      'Information Security Auditor',
      'Malware Analyst',
      'Bug Bounty Hunter',
      'Cyber Security Consultant',
    ],
    roleDetails: [
      {
        role: 'Penetration Tester',
        copy: 'Find vulnerabilities across networks, web applications and mobile, then exploit them safely and hand over a remediation plan. The most direct path after this course.',
      },
      {
        role: 'Cyber Security Analyst',
        copy: 'Monitor network traffic, analyse threats and respond to incidents using SIEM tooling and threat intelligence.',
      },
      {
        role: 'SOC Analyst',
        copy: 'Work in a security operations centre — monitoring dashboards, triaging alerts and escalating what actually matters.',
      },
      {
        role: 'Network Security Engineer',
        copy: 'Secure routers, switches and firewalls, implementing the policies that keep a network intact.',
      },
      {
        role: 'Information Security Auditor',
        copy: 'Review IT policy and implement compliance standards such as ISO 27001 and PCI-DSS.',
      },
      {
        role: 'Malware Analyst',
        copy: 'Analyse malicious software to understand its origin, behaviour and impact, and build the signatures that detect it.',
      },
      {
        role: 'Bug Bounty Hunter',
        copy: 'Hunt for flaws on HackerOne and Bugcrowd, earning rewards for valid findings — flexible, but genuinely unpredictable income.',
      },
      {
        role: 'Cyber Security Consultant',
        copy: 'Advise businesses on their security posture, developing strategy and implementing the solutions that follow.',
      },
    ],
    hiring: [
      'IT security companies requiring VAPT specialists',
      'Banks and financial institutions needing SOC analysts',
      'E-commerce and SaaS companies securing user data',
      'Government and defence sector work',
    ],
    nextSteps: [
      'Cyber security in depth',
      'Cloud security on AWS & Azure',
      'Digital forensics',
      'Security certifications (CEH, OSCP)',
    ],
    industries: ['IT security', 'Banking & finance', 'E-commerce & SaaS', 'Government & defence'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue. Unusually, this course's rows are *roles*
     * rather than locations — the client's own table compares analyst work,
     * consulting and bug bounty rather than Punjab against Delhi, which is the
     * more useful comparison for offensive security. `scale` is the midpoint
     * in ₹/month; bounty income starts lowest and is the least predictable.
     */
    salary: {
      role: 'Penetration Tester',
      summary:
        'Tests systems the way an attacker would, then documents how to fix what was found. Earnings depend on your skills, certifications, portfolio and location.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹35,000–₹60,000/month',
      markets: [
        {
          name: 'Cyber Security Analyst',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹35,000–₹60,000/month',
          scale: { fresher: 27500, after2: 47500 },
        },
        {
          name: 'Penetration Testing / Consulting',
          fresher: '₹25,000–₹45,000/month',
          after2: '₹50,000–₹1,00,000+/month',
          scale: { fresher: 35000, after2: 75000 },
        },
        {
          name: 'Remote / Freelance Bug Bounty',
          fresher: '₹5,000–₹25,000/month',
          after2: '₹30,000–₹1,00,000+/month',
          scale: { fresher: 15000, after2: 65000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Penetration Tester, Cyber Security Analyst, SOC Analyst, Network Security Engineer and Information Security Auditor. A portfolio of audits and solved CTF challenges matters far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'Analyst work starts around ₹20,000 – ₹35,000 a month and reaches ₹35,000 – ₹60,000 within two years. Penetration testing and consulting pay better at both ends — ₹25,000 – ₹45,000 to start, passing ₹1,00,000 with proven engagements behind you.',
      },
      {
        q: 'Is bug bounty hunting a realistic income?',
        a: 'It is real money but not a salary. The band starts at ₹5,000 a month — the lowest figure in this catalogue — because early on you will submit findings that get rejected or duplicated. Experienced hunters pass ₹1,00,000, but income arrives in bursts. Treat it as upside alongside a job, not a replacement for one until it is consistently paying.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT security companies selling VAPT services, banks and financial institutions staffing SOCs, e-commerce and SaaS companies protecting user data, and government and defence work.',
      },
      {
        q: 'Should I take this or the Cyber Security course?',
        a: 'They overlap, and either is a sound start. Ethical Hacking is the offensive half — reconnaissance, exploitation, web and wireless attacks — and suits you if penetration testing is the goal. Cyber Security is broader, adding forensics, SIEM, SOC operations and incident response, which is where more of the salaried jobs actually are. Take Ethical Hacking to attack, Cyber Security to defend.',
      },
    ],
    projects: [
      {
        name: 'Network Reconnaissance Project',
        summary:
          'Map a target network with Nmap and Maltego, identifying live hosts and services the way an engagement begins.',
        tech: ['Nmap', 'Maltego'],
        level: 'Beginner',
        skills: ['Network Scanning', 'OSINT'],
      },
      {
        name: 'Web Application Penetration Test',
        summary:
          'Find and exploit SQL injection and XSS in a lab environment with Burp Suite, following OWASP methodology throughout.',
        tech: ['Burp Suite', 'OWASP'],
        level: 'Beginner',
        skills: ['Web Security', 'Exploitation'],
      },
      {
        name: 'Wireless Security Assessment',
        summary:
          'Break a WPA2 network in a controlled lab, then write the hardening recommendations that would have stopped you.',
        tech: ['Aircrack-ng', 'WPA2'],
        level: 'Intermediate',
        skills: ['Wireless Hacking', 'Network Defence'],
      },
      {
        name: 'Malware Analysis Lab',
        summary:
          'Analyse a malicious sample in a sandbox to understand what it does, what it touches and what it leaves behind.',
        tech: ['Sandboxing', 'Threat Intelligence'],
        level: 'Intermediate',
        skills: ['Reverse Engineering', 'Analysis'],
      },
      {
        name: 'Phishing & Social Engineering Drill',
        summary:
          'Design a controlled awareness campaign to test how a workforce responds — the attack that needs no exploit at all.',
        tech: ['Social Engineering', 'Email Security'],
        level: 'Intermediate',
        skills: ['Human Factors', 'Awareness Testing'],
      },
      {
        name: 'Complete VAPT Project',
        summary:
          'Run a full vulnerability assessment and penetration testing cycle against a simulated server, start to finish.',
        tech: ['Metasploit', 'VAPT'],
        level: 'Advanced',
        skills: ['Reporting', 'Remediation'],
      },
      {
        name: 'Firewall & IDS Configuration',
        summary:
          'Build the defending side: configure a firewall and intrusion detection system that blocks the attacks you just learned.',
        tech: ['Firewalls', 'IDS'],
        level: 'Advanced',
        skills: ['Network Defence', 'Security Architecture'],
      },
      {
        name: 'End-to-End Security Audit (Capstone)',
        summary:
          'Audit a mock corporate infrastructure with everything you have learned, and present the findings as a consultant would.',
        tech: ['Security Audit', 'Documentation'],
        level: 'Advanced',
        skills: ['Presentation', 'Portfolio'],
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready security training',
        copy: 'Practical topics — network exploitation, web hacking, vulnerability scanning and malware analysis — taught in live simulation labs.',
      },
      {
        title: 'Learn by doing hacking projects',
        copy: 'Practise in realistic lab environments, developing the ability to exploit vulnerabilities and then fix them properly.',
      },
      {
        title: 'Develop a security portfolio',
        copy: 'Security audit reports you can put on a CV — documents that prove your technical and analytical ability rather than asserting it.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume help, technical interview preparation and clear direction on the penetration testing career path.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Experienced trainers',
        copy: 'Complex material — network protocols, exploit code — explained through simple, practical examples rather than read from a slide.',
      },
      {
        title: 'Live lab environment',
        copy: 'Hands-on labs, CTF challenges and real-world simulations, so learning moves well past watching tutorials.',
      },
      {
        title: 'Small batch learning',
        copy: 'A focused room means doubts on Linux commands, tool usage and attack logic get cleared while you are still stuck on them.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Resume building, mock interviews and project presentation, with direction toward Penetration Tester, Security Analyst or SOC Analyst depending on where your skills land.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Curriculum',
          techcadd: 'Industry-focused, covering VAPT, networking, web security and OSINT',
          others: 'Often focuses mainly on theoretical hacking concepts',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, lab-focused learning built around real attack simulations',
          others: 'Can be more tool-demo oriented',
        },
        {
          feature: 'Practical projects',
          techcadd: 'Students work on live VAPT projects and security audits',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Skill development',
          techcadd: 'Focus on logic building, exploitation and patch management',
          others: 'May cover tools without enough lab practice',
        },
        {
          feature: 'Advanced topics',
          techcadd: 'Exposure to Metasploit, Burp Suite, cloud security and AI in security',
          others: 'Advanced topics can vary',
        },
        {
          feature: 'Problem solving',
          techcadd: 'Regular CTF exercises to improve critical thinking',
          others: 'Problem-solving practice may be less',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'VAPT reports and security audits that showcase real skill',
          others: 'Portfolio development may not be a focus',
        },
        {
          feature: 'Career support',
          techcadd: 'Resume review, mock security interviews and job referral guidance',
          others: 'Career assistance varies',
        },
        {
          feature: 'Doubt support',
          techcadd: 'Mentorship to help students fix broken labs and understand exploits',
          others: 'Support may be limited to sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion supported by practical lab reports',
          others: 'Certification and exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing an ethical hacking institute in Phagwara, ask what the lab environment actually is, whether you will run real engagements, and what career support is included.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of cyber security',
        blurb:
          'Fundamental ethical hacking skills step by step through practical labs, until the terminal stops being intimidating.',
        skills: ['Kali Linux', 'Networking basics', 'Nmap', 'Footprinting'],
        recommendedFor: 'Cyber Security Trainee, IT Intern and Network Administrator.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in penetration testing',
        blurb:
          'Deeper into web hacking, vulnerability assessment and system exploitation — the level that gets you hired.',
        skills: ['Burp Suite', 'SQL Injection', 'Metasploit', 'Wireless Security', 'Reporting'],
        recommendedFor: 'Penetration Tester, Security Analyst and SOC Analyst.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master cyber security operations',
        blurb:
          'Hacking combined with cloud security, malware analysis and AI-driven security work.',
        skills: ['Advanced VAPT', 'Cloud Security', 'SOC Operations', 'Threat Intelligence', 'Python'],
        recommendedFor:
          'Security Consultant, SOC Lead, Malware Analyst and Cyber Security Engineer.',
      },
    ],
    capabilities: [
      { capability: 'Networking & Linux', included: [true, true, true] },
      { capability: 'Footprinting & scanning', included: [true, true, true] },
      { capability: 'Vulnerability assessment', included: [true, true, true] },
      { capability: 'Web application security', included: [false, true, true] },
      { capability: 'Exploitation (Metasploit)', included: [false, true, true] },
      { capability: 'Wireless security', included: [false, true, true] },
      { capability: 'Malware analysis', included: [false, false, true] },
      { capability: 'API & cloud security', included: [false, false, true] },
      { capability: 'Python for security', included: [false, false, true] },
      { capability: 'Advanced VAPT projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. Choose 3 months for the basics of ethical hacking, networking and security concepts; 6 months for penetration testing, web application security and system exploitation; 9 months to add malware analysis, cloud security, Python and advanced VAPT work. Each level builds on the last, so moving to a longer duration never means starting from zero.',
    instructor: {
      heading: 'Why learn Ethical Hacking with us?',
      intro:
        'Security is more than knowing tools. The emphasis here is on how attacks are actually executed and how to defend against them — through live lab work, simulations and the methodology professionals follow.',
      points: [
        {
          title: 'Contained labs, real technique',
          copy: 'Every attack runs against deliberately vulnerable machines in an isolated environment. You learn the genuine methodology without ever touching a system you should not.',
        },
        {
          title: 'Networking before tooling',
          copy: 'Most people who struggle with hacking are struggling with networking. It gets proper time before any exploit framework appears.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical engagements covering reconnaissance, web testing, wireless, malware, social engineering, a full VAPT, defensive configuration and an audit capstone.',
        },
        {
          title: 'The report is the product',
          copy: 'A finding nobody can act on is worthless. Writing a clear VAPT report is taught as part of the work, because that is what a client actually pays for.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Ethical Hacking Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and IT professionals learn security through practical, career-focused training. Students learn networking, Linux, vulnerability scanning, exploitation and reporting.',
      },
      {
        q: 'Who can join an Ethical Hacking Course in Phagwara?',
        a: 'It suits 12th-pass students, IT graduates, freshers, job seekers and working professionals. Beginners can start from networking basics without prior coding experience.',
      },
      {
        q: 'Is Ethical Hacking a good career option for freshers?',
        a: 'Yes. Cyber security is used across banking, IT, e-commerce and defence. After gaining practical skills, freshers can explore roles such as Security Analyst, Penetration Tester or SOC Analyst.',
      },
      {
        q: 'What will I learn in an Ethical Hacking Course?',
        a: 'Information gathering, network scanning, vulnerability assessment, web application testing, wireless hacking and report writing — the full methodology rather than a tool list.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Hacking becomes much easier when you attack real lab machines. The approach focuses on hands-on labs, attack simulations and defence strategy rather than theory alone.',
      },
      {
        q: 'Will I work on hacking projects during the course?',
        a: 'Yes. Practical learning includes network mapping, web exploitation, malware analysis and full VAPT projects — which build the security portfolio that gets you interviews.',
      },
      {
        q: 'Can I learn Ethical Hacking after 12th?',
        a: 'Absolutely, especially if you are interested in IT security. It provides a strong foundation in networking and system security to build on.',
      },
      {
        q: 'Can Ethical Hacking help me get a job or internship?',
        a: 'Yes, but tools alone are not enough. Employers look for problem-solving ability, knowledge of the OWASP Top 10 and practical vulnerability assessment skill. A job-oriented course helps you build these.',
      },
      {
        q: 'Does the course include AI in cyber security?',
        a: 'Yes. The training covers how AI is used for threat detection, and equally how attackers use AI to craft more convincing attacks — both sides matter.',
      },
      {
        q: 'How do I choose the best Ethical Hacking Course in Phagwara?',
        a: 'Check the syllabus, the lab environment, trainer experience, project work and placement assistance. A good course should take you from theory to actually testing and securing systems.',
      },
    ],
    relatedCourses: [
      'cybersecurity-course-in-phagwara',
      'linux-course-in-phagwara',
      'cloud-computing-course-in-phagwara',
      'python-course-in-phagwara',
      'web-development-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
    ],
    keywords: [
      'ethical hacking course in phagwara',
      'ethical hacking courses in phagwara',
      'ceh training institute in phagwara',
      'cyber security course in phagwara',
      'ethical hacking classes in phagwara',
      'ethical hacking course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'cloud-computing-course-in-phagwara',
    label: 'Cloud Computing',
    title: 'Cloud Computing Course in Phagwara',
    category: 'cyber-cloud',
    categoryTitle: 'Cyber & Cloud',
    icon: 'cloud',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Deploy and run real infrastructure — AWS, Azure, Linux, networking, security, load balancing and DevOps, with live migration projects and placement assistance.',
    overview:
      'Techcadd’s Cloud Computing Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners to manage cloud infrastructure on AWS, Azure and Linux. It covers cloud architecture, virtualisation, networking, storage, databases, DevOps, security and automation. The training is based on practical deployment rather than theory: you work in the console, configure servers, run live migration projects and implement security, so you see how cloud is actually used in software deployment, IT infrastructure, data security and business scaling. The approach is beginner-friendly throughout, developing system administration skill, architecture planning and cloud logic together — by the end you can deploy, manage and secure applications on the cloud with confidence.',
    demand:
      'Everything is moving to the cloud and the people who can actually run it are scarce — which is why cloud and DevOps roles pay above almost any other entry point in IT here.',
    modules: [
      {
        title: 'Cloud Computing Fundamentals',
        summary:
          'Build your cloud knowledge from scratch and grow into an infrastructure engineer step by step.',
        topics: [
          'IaaS, PaaS and SaaS',
          'Regions, availability zones and edge locations',
          'EC2, S3 and IAM',
          'Designing secure, scalable environments',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Linux & Networking for Cloud',
        summary:
          'Get deeper into servers and how systems actually talk to each other — the layer most cloud problems live at.',
        topics: [
          'Solving configuration problems on the Linux command line',
          'IP addressing, DNS and firewalls',
          'Troubleshooting and performance monitoring',
          'Breaking large infrastructure problems into smaller tasks',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Storage, Databases & Data Management',
        summary:
          'Find out how professional cloud applications store data, and what it costs when you get it wrong.',
        topics: [
          'S3, EBS and EFS',
          'RDS, DynamoDB and Aurora',
          'Structuring storage to be scalable and cost-effective',
          'Secured, backed-up database systems',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Security, Identity & Compliance',
        summary:
          'Find out how cloud security is actually enforced rather than assumed.',
        topics: [
          'IAM policies and roles',
          'Security groups and NACLs',
          'Data encryption and compliance requirements',
          'Automating security checks with cloud monitoring',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Load Balancing, Auto Scaling & High Availability',
        summary:
          'Find out how the cloud absorbs real traffic — and what keeps a service up when something fails.',
        topics: [
          'Application load balancers',
          'EC2 auto scaling groups',
          'Route 53 and CDN basics',
          'Fault tolerance and disaster recovery',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'DevOps, Infrastructure as Code & Automation',
        summary:
          'Advance into the practices that make infrastructure repeatable rather than hand-built.',
        topics: [
          'CI/CD pipelines',
          'CloudFormation and Terraform',
          'Docker and Kubernetes',
          'Building infrastructure as code',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'AI-Powered Cloud Development',
        summary:
          'Learn how AI changes deployment and troubleshooting work — and where it should not be trusted.',
        topics: [
          'AI assistants for understanding architecture and errors',
          'Generating and refining deployment ideas',
          'Using AI ethically without over-reliance',
          'Faster cost optimisation, documentation and deployment',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Cloud Migration, Git & Developer Workflow',
        summary:
          'Apply your skills the way a team does — versioned, reviewable, repeatable.',
        topics: [
          'Migrating on-premise servers to the cloud',
          'Git and version control for infrastructure as code',
          'Organising cloud projects',
          'Writing scalable, reusable infrastructure templates',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Cloud Projects & Career Preparation',
        summary:
          'An end-to-end migration for your portfolio, then learning to defend the architecture behind it.',
        topics: [
          'Practical assignments on real-world scenarios',
          'Portfolio-ready cloud projects',
          'Explaining your architecture and deployment in interviews',
          'Career paths in DevOps, cloud security, data engineering and AI',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Work confidently in the AWS and Azure consoles and on the Linux command line',
      'Design a secure VPC with subnets, security groups and IAM done properly',
      'Deploy applications behind a load balancer with auto scaling',
      'Choose and configure the right storage and database service for a workload',
      'Automate infrastructure with Terraform and CI/CD pipelines',
      'Ship an end-to-end cloud migration you can defend in an interview',
    ],
    tools: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Linux (Ubuntu/CentOS)',
      'Git & GitHub',
      'Docker',
      'Kubernetes',
      'Terraform & CloudFormation',
      'Jenkins / GitHub Actions',
      'MySQL & NoSQL',
      'Nginx & Apache',
      'VPC, DNS & Firewalls',
      'OpenAI & AI Tools',
      'ChatGPT for DevOps',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Interested in IT infrastructure, professionally or otherwise? The console-based approach makes server and networking basics graspable. You will meet server creation, storage buckets, networking, IAM users and problem solving — a useful skill alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'Infrastructure should be taught through real deployments, not textbooks. Whatever your discipline — computer science, engineering, commerce or management — console exercises in Linux, networking, databases and automation strengthen your projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Theory alone does not move an employer. They want deployment-ready problem-solvers. Linux skill, networking logic, debugging and a portfolio built in the AWS console beat a certificate every time.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT support, system administration or testing? Cloud lets you automate infrastructure work and materially upgrade your package. Server migration, load balancing, auto scaling and DevOps become an addition, not a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer to care about cloud cost. Understanding scalability, data security and deployment makes conversations with a CTO productive — and makes over-provisioned bills obvious.',
      },
      {
        label: 'Aspiring DevOps Engineers & Freelancers',
        copy: 'For DevOps or freelance server management, this is the backbone: server configuration, CI/CD pipelines, DNS management, security groups and production-ready environments — later applied to migrations, hosting and infrastructure as code.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Cloud skills are in demand',
        copy: 'Cloud platforms have spread well past IT companies. AWS and Azure run startups, MNCs, AI workloads, analytics and web hosting alike. Linux, networking, storage and automation make one qualification useful across many roles.',
      },
      {
        title: 'Understanding how cloud really works',
        copy: 'Not memorising service names. Cloud fundamentals and the IaaS/PaaS/SaaS split, Linux administration, networking and security groups, storage and databases, load balancing and auto scaling, DevOps and CI/CD, infrastructure as code, cost optimisation and monitoring.',
      },
      {
        title: 'Practical training is how infrastructure is learned',
        copy: 'Watching AWS tutorials is useful; deploying a server and then fixing its errors teaches far more. Console assignments cover deployment, security hardening, backup and DevOps automation.',
      },
      {
        title: 'Skills that open high-paying career paths',
        copy: 'Depending on your interest, cloud leads to Cloud Architect, DevOps Engineer, System Administrator, Cloud Security Analyst or Site Reliability Engineer — among the best-paid tracks in IT.',
      },
    ],
    whyNow: {
      title: 'Gain Cloud Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that proves you can deploy.',
        'A cloud portfolio shows Linux, networking, security and auto scaling handled properly in interviews or freelance work.',
        'Cloud engineer roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher, reaching ₹35,000 – ₹60,000 within two years.',
        'Concentrate on building architectures and solving server problems rather than memorising service names.',
      ],
    },
    roles: [
      'Cloud Support Engineer',
      'AWS/Azure Administrator',
      'DevOps Engineer',
      'Cloud Security Analyst',
      'Cloud Data Engineer',
      'Cloud AI & ML Engineer',
      'Infrastructure as Code Developer',
      'Freelance Cloud Consultant',
    ],
    roleDetails: [
      {
        role: 'Cloud Support Engineer',
        copy: 'Troubleshoot infrastructure and support AWS and Azure environments, working across Linux, networking and customer-facing problem solving. The most common path after this course.',
      },
      {
        role: 'AWS/Azure Administrator',
        copy: 'Build reliable user management and security using IAM, Organizations and compliance tooling.',
      },
      {
        role: 'DevOps Engineer',
        copy: 'Deploy software through CI/CD pipelines, working with YAML, Docker containers and Kubernetes orchestration.',
      },
      {
        role: 'Cloud Security Analyst',
        copy: 'Secure cloud resources through policy, groups and encryption, using Security Hub and GuardDuty to catch what slips through.',
      },
      {
        role: 'Cloud Data Engineer',
        copy: 'Collect, clean and analyse data with AWS Glue, S3 and Redshift to make business performance legible.',
      },
      {
        role: 'Cloud AI & ML Engineer',
        copy: 'Build a foundation in AI and ML on cloud infrastructure, using SageMaker and Bedrock alongside TensorFlow and PyTorch.',
      },
      {
        role: 'Infrastructure as Code Developer',
        copy: 'Use Terraform and CloudFormation with DevOps practice to create automated, repeatable environments.',
      },
      {
        role: 'Freelance Cloud Consultant',
        copy: 'Build a freelance practice managing AWS and Azure environments for businesses in Phagwara, Jalandhar and further out.',
      },
    ],
    hiring: [
      'IT service companies building websites, applications and business solutions on cloud',
      'IT startups and tech companies using AWS for backend infrastructure and automation',
      'Data and analytics companies processing big data on cloud',
      'AI and machine learning companies using cloud GPUs and hosted models',
    ],
    nextSteps: [
      'DevOps & Kubernetes in depth',
      'Cloud security specialisation',
      'Data engineering on cloud',
      'AWS / Azure certifications',
    ],
    industries: ['IT services', 'Startups', 'Data & analytics', 'AI & machine learning'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They match the AI and security courses at the top of the
     * catalogue, which is consistent: cloud, security and AI are the three
     * best-paid entry points here. `scale` is the midpoint in ₹/month; remote
     * sits below Punjab at the fresher end on purpose, since consulting income
     * ramps rather than starting at a salary.
     */
    salary: {
      role: 'Cloud Engineer',
      summary:
        'Deploys, secures and runs the infrastructure applications live on. Earnings depend on your infrastructure skills, portfolio, experience, company and location.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹35,000–₹60,000/month',
      markets: [
        {
          name: 'Punjab — Cloud Engineer',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹35,000–₹60,000/month',
          scale: { fresher: 27500, after2: 47500 },
        },
        {
          name: 'Delhi / NCR — Cloud / DevOps',
          fresher: '₹30,000–₹50,000/month',
          after2: '₹50,000–₹90,000+/month',
          scale: { fresher: 40000, after2: 70000 },
        },
        {
          name: 'Remote / Freelance Cloud Consulting',
          fresher: '₹15,000–₹30,000/month',
          after2: '₹40,000–₹1,00,000+/month',
          scale: { fresher: 22500, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Cloud Support Engineer, AWS/Azure Administrator, DevOps Engineer, System Engineer and Cloud Security Analyst. A portfolio of deployed architectures matters far more here than certificates alone.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher starts around ₹20,000 – ₹35,000 a month in the Punjab market, reaching ₹35,000 – ₹60,000 within two years. Cloud and DevOps sit alongside security and AI as the best-paid entry points in this catalogue.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — cloud work is naturally remote, since the infrastructure is not in the room anyway. Income ramps rather than starting at a salary: around ₹15,000 – ₹30,000 a month early on, and ₹40,000 to over ₹1,00,000 once you have migrations and running environments behind you.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'IT service companies building on cloud, startups running backend infrastructure on AWS, data and analytics companies processing at scale, and AI companies using cloud GPUs — plus remote and freelance work.',
      },
      {
        q: 'Do I need to pay for AWS while learning?',
        a: 'Not meaningfully. AWS and Azure both offer free tiers that cover almost everything in this course, and the labs are designed around them. The one habit worth building early is shutting down what you are not using — an instance left running over a weekend is how most students get their first surprise bill, and cost awareness is part of the course for exactly that reason.',
      },
    ],
    /*
     * Your project list arrived as a table of names and tools with no
     * descriptions, so the summaries below are written from those two columns
     * rather than supplied — worth a read before this goes live.
     */
    projects: [
      {
        name: 'Linux Server Setup & Hardening',
        summary:
          'Stand up a Linux server and secure it properly: SSH access, user management and the shell scripting that makes it repeatable.',
        tech: ['Linux', 'SSH', 'Bash'],
        level: 'Beginner',
        skills: ['Server Administration', 'User Management'],
      },
      {
        name: 'Secure 3-Tier Web Architecture',
        summary:
          'Build a proper three-tier architecture in a VPC — public and private subnets, EC2 instances and security groups that actually restrict what they should.',
        tech: ['EC2', 'VPC', 'Subnets'],
        level: 'Beginner',
        skills: ['Security Groups', 'Network Design'],
      },
      {
        name: 'Serverless File Processing System',
        summary:
          'Build a system with no servers to manage: S3 events triggering Lambda functions, with IAM scoped to exactly what each piece needs.',
        tech: ['S3', 'Lambda', 'IAM'],
        level: 'Intermediate',
        skills: ['Event Triggers', 'Serverless'],
      },
      {
        name: 'Database Migration & Backup Solution',
        summary:
          'Move a database to managed cloud storage and prove you can get it back — snapshots, replication and a restore you have actually tested.',
        tech: ['RDS', 'DynamoDB'],
        level: 'Intermediate',
        skills: ['Snapshots', 'Replication'],
      },
      {
        name: 'Load Balanced Auto Scaling Application',
        summary:
          'Put an application behind a load balancer and let it scale with demand, watching CloudWatch to see the decisions being made.',
        tech: ['ALB', 'EC2 Auto Scaling'],
        level: 'Intermediate',
        skills: ['CloudWatch', 'High Availability'],
      },
      {
        name: 'CI/CD Pipeline using DevOps Tools',
        summary:
          'Build a pipeline that takes a commit and puts it into production — GitHub Actions to CodeDeploy, with artefacts in S3.',
        tech: ['GitHub Actions', 'CodeDeploy'],
        level: 'Advanced',
        skills: ['CI/CD', 'Automation'],
      },
      {
        name: 'Infrastructure as Code',
        summary:
          'Define an entire environment in code so it can be destroyed and rebuilt identically — Terraform and CloudFormation rather than console clicks.',
        tech: ['Terraform', 'CloudFormation'],
        level: 'Advanced',
        skills: ['YAML', 'Repeatable Environments'],
      },
      {
        name: 'End-to-End Cloud Migration Capstone',
        summary:
          'Migrate a workload to the cloud from first principles: strategy, security, deployment and the cost optimisation that follows.',
        tech: ['AWS', 'Migration'],
        level: 'Advanced',
        skills: ['Architecture', 'Optimisation'],
      },
    ],
    /*
     * No artefact is named for each loop step in the source content, so these
     * fall back to the course's own projects by index — which reads well here,
     * since each step lines up with a real deliverable.
     */
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a realistic business objective into an architecture strategy through requirement analysis, traffic modelling and choosing the services that actually fit.',
      },
      {
        title: 'Build',
        copy: 'Create and manage environments with trainer guidance — VPCs, subnets, EC2 instances, load balancers and security hardening, with AI-assisted workflows.',
      },
      {
        title: 'Present & Optimise',
        copy: 'Present your architecture diagram, security strategy, cost decisions and deployment results — then take the work into your professional portfolio.',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready cloud training',
        copy: 'Practical topics — EC2, VPC, S3, IAM, load balancing and auto scaling — that turn basic IT knowledge into deployment skill.',
      },
      {
        title: 'Learn by doing cloud projects',
        copy: 'Practise with live projects and console exercises, developing the ability to write shell scripts, debug network issues, manage data and deploy real applications.',
      },
      {
        title: 'Develop a cloud portfolio',
        copy: 'Industry-relevant projects you can put on a CV — architectures that prove your deployment and problem-solving ability in interviews.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume help, technical interview preparation, project presentation and career direction across DevOps, cloud security, data engineering and AI/ML.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain cloud simply',
        copy: 'Cloud is a good place for beginners when it is taught properly. Trainers here explain the console and Linux logic through simple, practical examples rather than service catalogues.',
      },
      {
        title: 'Live and practical cloud projects',
        copy: 'Projects make the theory meaningful. You learn through hands-on work spanning deployment, security, load balancing, databases, automation and troubleshooting.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'Infrastructure is far easier when you can clear a doubt on network logic in real time and practise the command while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with a portfolio demonstrating AWS and Azure work, automation, Linux, databases, security and deployment — real architectures to discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because cloud underpins DevOps, software development, data science, AI and backend work, guidance is career-oriented: resume building, mock interviews and project presentation.',
      },
      {
        title: 'Cloud taught the practical way',
        copy: 'The aim is solving infrastructure problems with cloud logic, not learning where to click — practical Linux, networking, security, automation and deployment.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Curriculum',
          techcadd: 'Industry-focused, covering AWS, Azure, Linux, networking, security and DevOps',
          others: 'Often focuses mainly on basic cloud theory',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, console-focused learning built around real deployment problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work on live migration and deployment tasks to strengthen problem solving',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Infrastructure skills',
          techcadd:
            'Focus on Linux, networking, debugging and writing efficient infrastructure as code',
          others: 'May cover concepts without enough hands-on practice',
        },
        {
          feature: 'Advanced cloud',
          techcadd: 'Exposure to DevOps, Kubernetes, Terraform and automation',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular deployment exercises designed to improve architectural thinking and confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help students showcase their cloud and DevOps skills',
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
            'Trainer guidance to help students understand networking concepts and solve challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a cloud computing institute in Phagwara, ask how much console practice is included, whether students build real environments, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of cloud infrastructure',
        blurb:
          'Fundamental cloud skills step by step through practical console work and beginner-friendly projects.',
        skills: ['AWS', 'Azure basics', 'Linux', 'VS Code', 'Git'],
        recommendedFor:
          'Cloud Support Trainee, IT Intern, Junior System Administrator and anyone starting a cloud course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in cloud engineering',
        blurb:
          'Real-world deployment across networking, security, load balancing and DevOps automation, with advanced Linux and problem solving.',
        skills: ['AWS', 'Azure', 'Linux', 'Docker', 'Terraform', 'CI/CD'],
        recommendedFor:
          'Cloud Engineer, DevOps Associate, AWS Administrator and System Engineer.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master DevOps & cloud architecture',
        blurb:
          'Cloud combined with DevOps, Kubernetes, security and the advanced architectures that hold up under load.',
        skills: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'Prometheus'],
        recommendedFor:
          'DevOps Engineer, Cloud Architect, Site Reliability Engineer and Security Specialist.',
      },
    ],
    capabilities: [
      { capability: 'Cloud fundamentals', included: [true, true, true] },
      { capability: 'Linux & networking', included: [true, true, true] },
      { capability: 'Storage & databases', included: [true, true, true] },
      { capability: 'Security & IAM', included: [true, true, true] },
      { capability: 'Server deployment', included: [true, true, true] },
      { capability: 'Advanced networking', included: [false, true, true] },
      { capability: 'Load balancing & auto scaling', included: [false, true, true] },
      { capability: 'DevOps & CI/CD', included: [false, true, true] },
      { capability: 'Docker & Kubernetes', included: [false, false, true] },
      { capability: 'Infrastructure as code', included: [false, false, true] },
      { capability: 'Advanced architecture', included: [false, false, true] },
      { capability: 'Capstone projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your infrastructure foundation. The 6-month track includes those fundamentals and moves into networking, security and DevOps. The 9-month programme builds further with advanced DevOps, Kubernetes and architecture. Choose 3 months for AWS/Azure basics, Linux, networking and storage; 6 months to deploy applications, manage security and use DevOps tooling; 9 months for architecture, Kubernetes and advanced automation.',
    instructor: {
      heading: 'Why learn Cloud Computing with us?',
      intro:
        'Cloud is more than knowing the AWS console. The emphasis here is on how infrastructure is deployed and how problems get solved with Linux and cloud platforms — through practical console work, assignments and real projects.',
      points: [
        {
          title: 'Linux before the console',
          copy: 'Almost every hard cloud problem is really a Linux or networking problem. Both get proper time before the service catalogue appears.',
        },
        {
          title: 'You break it, then fix it',
          copy: 'Deployments that fail teach more than ones that work. Troubleshooting is treated as the skill, not the inconvenience.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical builds covering server hardening, a three-tier VPC, serverless, database migration, auto scaling, CI/CD, infrastructure as code and a migration capstone.',
        },
        {
          title: 'Cost as a design constraint',
          copy: 'An architecture that works but costs triple what it should is a bad architecture. Cost optimisation is taught alongside the design, not after it.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Cloud Computing Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring IT professionals learn AWS, Azure and Linux through practical, career-focused training. Students learn cloud fundamentals, EC2, S3, VPC, IAM, load balancing and DevOps concepts with hands-on practice.',
      },
      {
        q: 'Who can join a Cloud Computing Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, IT support staff and working professionals. Beginners can start from the basics without prior coding experience, while those with IT knowledge can strengthen their deployment skills.',
      },
      {
        q: 'Is cloud a good career option for freshers?',
        a: 'Yes. Cloud is used across software deployment, DevOps, data science, AI/ML and enterprise IT. After gaining practical skills, freshers can explore roles such as Cloud Support Engineer, AWS Administrator, DevOps Engineer and System Engineer.',
      },
      {
        q: 'What will I learn in the Cloud Computing Course?',
        a: 'AWS and Azure console basics, Linux commands, networking, storage, databases, security, load balancing, auto scaling and DevOps tooling — plus how cloud underpins AI, data science and automation.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Cloud becomes much easier when you deploy and test environments yourself. The approach focuses on hands-on console labs, infrastructure exercises, debugging and live projects rather than slides.',
      },
      {
        q: 'Will I work on cloud projects during the course?',
        a: 'Yes. Practical learning includes server deployments, security hardening, database migrations, load balancer setups and end-to-end architecture projects — which show how the concepts connect and strengthen your portfolio.',
      },
      {
        q: 'Can I learn cloud after 12th?',
        a: 'Absolutely, especially if you are interested in IT infrastructure, DevOps, AI or data science. It provides a strong IT foundation to build on during college and beyond.',
      },
      {
        q: 'Can cloud help me get a job or internship?',
        a: 'Yes, but the console alone is not enough. Employers also look for Linux skills, networking knowledge, security understanding, projects and problem-solving ability. A job-oriented course helps you build these.',
      },
      {
        q: 'Does the course include cloud for AI and data science?',
        a: 'Yes. AWS and Azure are the most common platforms for AI and machine learning. The course introduces cloud AI services such as SageMaker, Bedrock and data lakes, building a foundation before advanced AI/ML work.',
      },
      {
        q: 'How do I choose the best Cloud Computing Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical console sessions, trainer experience, project work, Linux and networking exercises, tools covered, doubt support and placement assistance. A good course should take you from basics to deploying secure, scalable architectures.',
      },
    ],
    relatedCourses: [
      'linux-course-in-phagwara',
      'cybersecurity-course-in-phagwara',
      'ethical-hacking-course-in-phagwara',
      'python-course-in-phagwara',
      'data-science-course-in-phagwara',
      'web-development-course-in-phagwara',
    ],
    keywords: [
      'cloud computing course in phagwara',
      'cloud computing courses in phagwara',
      'aws course in phagwara',
      'cloud training institute in phagwara',
      'azure course in phagwara',
      'cloud course after 12th in phagwara',
    ],
  }),

  makeCourse({
    slug: 'linux-course-in-phagwara',
    label: 'Linux',
    title: 'Linux Administration Course in Phagwara',
    category: 'cyber-cloud',
    categoryTitle: 'Cyber & Cloud',
    icon: 'terminal',
    duration: '3 – 9 Months',
    level: 'Beginner to Advanced',
    eligibility: '12th Pass Onward',
    summary:
      'Run real servers — the command line, shell scripting, users and permissions, networking, security and automation, with live projects and placement assistance.',
    overview:
      'Techcadd’s Linux Administration Course in Phagwara is an industry-oriented course that teaches students, graduates, job seekers and beginners to manage servers and systems with Linux. It covers the operating system itself, shell scripting, user administration, file systems, networking, server security and automation. The training is based on practical knowledge rather than theory: you work through command-line exercises, assignments and real server setup projects, so you see how Linux is used across IT infrastructure, cloud computing, DevOps and server management. The approach is beginner-friendly throughout, developing problem solving, command-line logic and administration ability together — by the end you can configure, secure and manage a Linux server with confidence.',
    demand:
      'Linux is the floor under cloud, DevOps and security work — which makes it the cheapest course here to start on and the one that most reliably leads somewhere better paid.',
    modules: [
      {
        title: 'Linux Fundamentals & Command Line',
        summary:
          'Build your knowledge from scratch and grow into an administrator step by step.',
        topics: [
          'File system hierarchy, basic commands and text editors',
          'Redirects, pipes and file manipulation',
          'Users, groups and permissions',
          'Writing simple shell scripts to automate tasks',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Scripting, Logic & Problem-Solving',
        summary:
          'Get deeper into system management and learn how administrators actually think about a problem.',
        topics: [
          'Bash scripting and automation',
          'Conditionals, loops and variables',
          'Error handling and debugging',
          'Breaking infrastructure problems into smaller tasks',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Advanced Linux Administration',
        summary:
          'Find out how professional Linux environments are structured and kept running.',
        topics: [
          'Logical Volume Management and disk quotas',
          'Network configuration and bonding',
          'Reusable server setup components',
          'Building secure environments',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Networking, Security & Firewalls',
        summary:
          'Find out how Linux is defended — the part that separates a server from a liability.',
        topics: [
          'SELinux and AppArmor',
          'SSH, firewalld/iptables and fail2ban',
          'Network services: DNS, DHCP and HTTP',
          'Automating tasks with cron',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Linux for DevOps & Automation',
        summary:
          'Find out how Linux underpins modern infrastructure and the tooling built on top of it.',
        topics: [
          'Provisioning, configuring and managing servers',
          'Docker, Ansible and CI/CD concepts',
          'Infrastructure as code basics',
          'Practical automation projects',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Linux for Cloud & Virtualisation',
        summary:
          'Advance your skills toward cloud, where nearly every instance you meet will be Linux.',
        topics: [
          'Virtualisation with KVM and VirtualBox',
          'Cloud instance management on EC2 and Azure VMs',
          'How Linux underpins cloud and AI infrastructure',
          'Beginner-level cloud and virtualisation projects',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'AI-Powered Linux Administration',
        summary:
          'Learn how AI changes troubleshooting work — and where reading the log yourself still wins.',
        topics: [
          'AI assistants for error logs and system diagnostics',
          'Generating and refining infrastructure ideas',
          'Using AI ethically without over-reliance',
          'Faster troubleshooting, automation and documentation',
        ],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Projects, Git & Developer Workflow',
        summary:
          'Apply your skills the way an infrastructure team does — versioned and reviewable.',
        topics: [
          'Building projects against real-world requirements',
          'Git and version control for infrastructure code',
          'DevOps workflow and project organisation',
          'Writing readable, reusable scripts',
        ],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Live Linux Projects & Career Preparation',
        summary:
          'An end-to-end administration project, then learning to explain the architecture behind it.',
        topics: [
          'Server management assignments on real-world scenarios',
          'Portfolio-ready Linux projects',
          'Explaining your setup and scripts in interviews',
          'Career paths in administration, DevOps, cloud and security',
        ],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Navigate and administer a Linux system confidently from the command line',
      'Write Bash scripts that automate real, repetitive server work',
      'Manage users, groups, permissions and processes properly',
      'Configure networking, DNS and firewalls, and troubleshoot when they break',
      'Harden a server with SSH, SELinux and fail2ban',
      'Ship an end-to-end server project you can defend in an interview',
    ],
    tools: [
      'Red Hat / CentOS / Rocky',
      'Ubuntu / Debian',
      'Bash Shell Scripting',
      'Vim & Nano',
      'Git & GitHub',
      'Ansible',
      'Docker',
      'AWS EC2 / Azure VMs',
      'MySQL / MariaDB',
      'Nginx & Apache',
      'SSH, Curl & Netstat',
      'AI Troubleshooting Tools',
      'ChatGPT for Automation',
    ],
    audience: [
      {
        label: '12th Pass Students',
        copy: 'Interested in technology, professionally or as a hobby? Linux is a strong place to start — open source and free to practise on. You will meet directories, file permissions, user groups, process management and shell scripting alongside your academics.',
      },
      {
        label: 'College Learners & Graduates',
        copy: 'System administration should be taught through practical projects, not textbooks. Whatever your discipline — computer science, engineering, commerce or management — command-line exercises in automation, networking and security strengthen your projects and portfolio.',
      },
      {
        label: 'Job Seekers & Freshers',
        copy: 'Basic command knowledge does not move an employer. They want problem-solving and real server management. Command-line logic, debugging and a portfolio of configured servers beat a certificate every time.',
      },
      {
        label: 'Working Professionals',
        copy: 'Already in IT, operations or testing? Linux lets you automate routine server work and move toward DevOps. Shell scripting, user management, networking and service configuration become an additional skill, not a career change.',
      },
      {
        label: 'Entrepreneurs & Business Owners',
        copy: 'You do not need to be a developer to benefit. Understanding web hosting, automation and data security makes conversations with developers productive — and infrastructure decisions less opaque.',
      },
      {
        label: 'Aspiring DevOps & Cloud Engineers',
        copy: 'For DevOps or cloud, Linux is not optional — modern infrastructure runs on it. Server management, automation, networking and cloud basics here are what those roles are actually built on.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Linux skills are in demand',
        copy: 'Linux has spread well past server rooms. Startups, software companies, cloud, DevOps, cybersecurity and IT support all run on it. Administration, shell scripting, security and automation make one qualification useful across many roles.',
      },
      {
        title: 'Understanding how Linux really works',
        copy: 'Not memorising commands. The file system hierarchy, user and group management, permissions and ownership, process management and job control, Bash scripting, package management, networking, and service management with systemd.',
      },
      {
        title: 'Practical training is how administration is learned',
        copy: 'Watching tutorials is useful; executing commands and debugging your own system teaches far more. Assignments cover server configuration, user security, automation and troubleshooting.',
      },
      {
        title: 'Skills that open several career paths',
        copy: 'Depending on your interest, Linux leads to system administration, DevOps engineering, cloud support, cybersecurity or IT infrastructure management.',
      },
    ],
    whyNow: {
      title: 'Gain Linux Skills You Can Apply In Real Life',
      points: [
        'Practical projects take your skills past theory into a portfolio that proves you can run a server.',
        'A Linux portfolio shows permissions, disk management, scripting and security handled properly in interviews.',
        'Linux administrator roles in Punjab start around ₹18,000 – ₹28,000 a month, and the skill leads directly into better-paid cloud and DevOps work.',
        'Concentrate on building server setups and solving real problems rather than memorising commands.',
      ],
    },
    roles: [
      'Linux Administrator',
      'DevOps Engineer',
      'Cloud Support Engineer',
      'Linux Automation Developer',
      'System Engineer',
      'Cybersecurity Analyst',
      'IT Infrastructure Specialist',
      'Freelance Linux Administrator',
    ],
    roleDetails: [
      {
        role: 'Linux Administrator',
        copy: 'Manage servers, user accounts and IT infrastructure on Linux, across scripting, networking and security. The most common path after this course.',
      },
      {
        role: 'DevOps Engineer',
        copy: 'Work between development and operations to streamline delivery, using Linux as the base for CI/CD, Ansible automation and Docker.',
      },
      {
        role: 'Cloud Support Engineer',
        copy: 'Support cloud infrastructure with Linux skill — managing instances, automating tasks and troubleshooting on AWS, Azure and GCP.',
      },
      {
        role: 'Linux Automation Developer',
        copy: 'Write the scripts and playbooks that remove manual work, using Bash, Python and Ansible for provisioning and configuration management.',
      },
      {
        role: 'System Engineer',
        copy: 'Design, implement and maintain complex systems and networks, relying on Linux for setup, performance tuning and hardening.',
      },
      {
        role: 'Cybersecurity Analyst',
        copy: 'Use Linux expertise to secure systems and analyse threats, working with firewalls, intrusion detection and native auditing tools.',
      },
      {
        role: 'IT Infrastructure Specialist',
        copy: 'Oversee an organisation’s backend — virtualised environments, storage and network services, nearly all of it Linux.',
      },
      {
        role: 'Freelance Linux Administrator',
        copy: 'Build a freelance practice managing servers for clients in Phagwara, Jalandhar and further out, growing a portfolio from real work.',
      },
    ],
    hiring: [
      'Software and IT service companies managing internal and client infrastructure',
      'IT startups using Linux for cloud computing and application deployment',
      'Data centres and hosting companies running server management and security',
      'Cloud and cybersecurity companies building on secure, scalable Linux',
    ],
    nextSteps: [
      'Cloud computing on AWS & Azure',
      'DevOps & Kubernetes',
      'Cyber security',
      'Shell scripting & Python automation',
    ],
    industries: ['IT services', 'Startups', 'Hosting & data centres', 'Cloud & security'],
    /*
     * Client-supplied bands, monthly rather than the derived LPA figures used
     * elsewhere in the catalogue — that is the unit a fresher in this market
     * recognises. They sit below the cloud and security courses, which is
     * consistent and worth stating plainly: Linux is the foundation those
     * roles are built on rather than the destination. `scale` is the midpoint
     * in ₹/month; remote sits below Punjab at the fresher end on purpose,
     * since freelance income ramps rather than starting at a salary.
     */
    salary: {
      role: 'Linux Administrator',
      summary:
        'Keeps the servers an organisation runs on configured, secure and up. Earnings depend on your server management skills, portfolio, experience, company and location.',
      starting: '₹18,000–₹28,000/month',
      after2: '₹28,000–₹45,000/month',
      markets: [
        {
          name: 'Punjab — Linux Administrator',
          fresher: '₹18,000–₹28,000/month',
          after2: '₹28,000–₹45,000/month',
          scale: { fresher: 23000, after2: 36500 },
        },
        {
          name: 'Delhi / NCR — Linux / DevOps',
          fresher: '₹25,000–₹40,000/month',
          after2: '₹40,000–₹70,000+/month',
          scale: { fresher: 32500, after2: 55000 },
        },
        {
          name: 'Remote / Freelance Linux Administration',
          fresher: '₹10,000–₹20,000/month',
          after2: '₹30,000–₹60,000+/month',
          scale: { fresher: 15000, after2: 45000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this course?',
        a: 'Linux Administrator, System Engineer, Cloud Support Engineer and DevOps Engineer. A portfolio of configured, secured servers matters far more here than certificates.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher starts around ₹18,000 – ₹28,000 a month in the Punjab market, rising to ₹28,000 – ₹45,000 with two years. That is deliberately modest against the cloud and security courses — Linux is where those careers start, not where they end, and administrators who add cloud or DevOps move into their bands quickly.',
      },
      {
        q: 'Can I freelance or work remotely with this skill?',
        a: 'Yes — server management is remote by nature. Income ramps rather than starting at a salary: around ₹10,000 – ₹20,000 a month early on, and ₹30,000 – ₹60,000+ once you have clients whose servers you keep running. Maintenance retainers are steadier than project work here.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Software and IT service companies, startups running deployments on Linux, data centres and hosting companies, and cloud and cybersecurity firms — plus freelance server setup and maintenance.',
      },
      {
        q: 'Is Linux worth learning on its own, or only for cloud?',
        a: 'Both, but be honest about it: Linux alone gets you into IT support and junior administration, which is a real job with a modest ceiling. Its bigger value is as the prerequisite for cloud, DevOps and security — every one of those pays better and every one assumes you already have this. Take it first if you are starting out; take it alongside cloud if you already have IT experience.',
      },
    ],
    projects: [
      {
        name: 'Command Line & Logical Thinking',
        summary:
          'Work a Linux environment properly — file permissions, directory structures, process management and shell expansion, executing the commands yourself and understanding each result.',
        tech: ['Linux', 'Command Line'],
        level: 'Beginner',
        skills: ['Logical Thinking', 'Linux Basics'],
      },
      {
        name: 'Server Setup & Web Hosting',
        summary:
          'Build a working web server on Linux with Apache or Nginx, firewalls and user permissions — and see how the pieces combine to host a real site.',
        tech: ['Nginx', 'Apache'],
        level: 'Beginner',
        skills: ['Web Server', 'Hosting'],
      },
      {
        name: 'Shell Scripting & Automation',
        summary:
          'Automate real tasks: schedule backups, clean logs and monitor system health with Bash scripts and cron rather than remembering to do it.',
        tech: ['Bash', 'Cron'],
        level: 'Intermediate',
        skills: ['Automation', 'Scripting'],
      },
      {
        name: 'Security Hardening Project',
        summary:
          'Secure a Linux server properly — SSH configuration, firewalls, SELinux and fail2ban, closing the gaps an exposed box actually gets probed for.',
        tech: ['SSH', 'SELinux'],
        level: 'Intermediate',
        skills: ['Hardening', 'Firewalls'],
      },
      {
        name: 'Networking & DNS Configuration',
        summary:
          'Configure DNS and DHCP, then troubleshoot connectivity when it does not work — the skill that gets called at 2am.',
        tech: ['DNS', 'DHCP'],
        level: 'Intermediate',
        skills: ['Networking', 'Troubleshooting'],
      },
      {
        name: 'Problem Solving with Linux',
        summary:
          'Take real infrastructure problems and turn them into efficient solutions, building troubleshooting instinct and cleaner scripts.',
        tech: ['Linux', 'Debugging'],
        level: 'Advanced',
        skills: ['Problem Solving', 'Clean Code'],
      },
      {
        name: 'AI & Linux Project',
        summary:
          'See where Linux administration meets AI — infrastructure automation, data processing and the tooling that leads toward DevOps and AI infrastructure.',
        tech: ['AI Tools', 'Automation'],
        level: 'Advanced',
        skills: ['DevOps', 'Infrastructure'],
      },
      {
        name: 'End-to-End Linux Capstone',
        summary:
          'Build a complete infrastructure project: plan it, implement it, test its security, fix what breaks and present the finished work.',
        tech: ['Linux', 'Infrastructure'],
        level: 'Advanced',
        skills: ['Server Management', 'Portfolio'],
      },
    ],
    workingLoop: [
      {
        title: 'Understand',
        copy: 'Turn a realistic business requirement into an infrastructure strategy — system analysis, choosing the right distribution and planning the server architecture.',
        artefact: 'System Analysis & Linux Environment Brief',
      },
      {
        title: 'Build',
        copy: 'Create and manage servers with trainer guidance — user accounts, firewalls, shell scripts and web servers, with AI-assisted troubleshooting where it helps.',
        artefact: 'Linux Server Setup & Security Hardening',
      },
      {
        title: 'Present & Optimise',
        copy: 'Present your server architecture, security measures, automation scripts and the troubleshooting behind them — then take the work into your portfolio.',
        artefact: 'End-to-End Linux Infrastructure & Optimisation',
      },
    ],
    industryReady: [
      {
        title: 'Industry-ready Linux training',
        copy: 'Practical topics — shell scripting, user management, networking, security and problem solving — that turn basic technical knowledge into administration skill.',
      },
      {
        title: 'Learn by doing Linux projects',
        copy: 'Practise with real projects and exercises, developing the ability to write clean scripts, debug server errors, manage users and deploy applications.',
      },
      {
        title: 'Develop a Linux portfolio',
        copy: 'Industry-relevant projects you can put on a CV — servers that prove your management and problem-solving ability in interviews.',
      },
      {
        title: 'Career guidance and placement support',
        copy: 'Resume help, technical interview preparation, project presentation and career direction across Linux administration, DevOps, cloud engineering and cyber security.',
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who explain Linux simply',
        copy: 'Linux is a good place for beginners when taught well. Trainers here explain concepts and command-line logic through simple, practical examples rather than man pages.',
      },
      {
        title: 'Live and practical Linux projects',
        copy: 'Projects make the theory meaningful. You learn through hands-on work spanning server setup, automation, security, networking and troubleshooting.',
      },
      {
        title: 'Small batches so doubts get cleared',
        copy: 'System administration is far easier when you can clear a doubt on command-line logic in real time and practise the configuration while you are still stuck on it.',
      },
      {
        title: 'A practical portfolio you build yourself',
        copy: 'You finish with projects demonstrating server security, automation, user management and networking — real examples a fresher can discuss in an interview.',
      },
      {
        title: 'Career and placement guidance',
        copy: 'Because Linux underpins cloud, DevOps, security and hosting, guidance is career-oriented: resume building, mock interviews and project presentation.',
      },
      {
        title: 'Linux taught the practical way',
        copy: 'The aim is solving problems with Linux tooling, not learning commands — practical administration, shell scripting, user management, security, automation and networking.',
      },
    ],
    comparison: {
      rows: [
        {
          feature: 'Linux curriculum',
          techcadd:
            'Industry-focused training covering fundamentals, shell scripting, user management, security and advanced concepts',
          others: 'Often focuses mainly on basic Linux commands',
        },
        {
          feature: 'Learning style',
          techcadd: 'Practical, command-line focused learning built around real IT problems',
          others: 'Can be more theory-oriented',
        },
        {
          feature: 'Practical projects',
          techcadd:
            'Students work on server setups and security assignments to strengthen problem-solving skills',
          others: 'Practical exposure may be limited',
        },
        {
          feature: 'Technical skills',
          techcadd: 'Focus on logic building, scripting, troubleshooting and writing efficient commands',
          others: 'May cover concepts without enough hands-on practice',
        },
        {
          feature: 'Advanced Linux',
          techcadd: 'Exposure to shell scripting, APIs, automation and server security',
          others: 'Advanced topics can vary by institute',
        },
        {
          feature: 'Problem solving',
          techcadd:
            'Regular command-line exercises designed to improve logical thinking and technical confidence',
          others: 'Problem-solving practice may receive less attention',
        },
        {
          feature: 'Portfolio building',
          techcadd: 'Projects and assignments that help students showcase their Linux skills',
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
            'Trainer guidance to help students understand server concepts and solve technical challenges',
          others: 'Support may be limited to classroom sessions',
        },
        {
          feature: 'Certification',
          techcadd: 'Course completion certification supported by practical learning and project exposure',
          others: 'Certification and practical exposure can vary',
        },
      ],
      note: 'The right-hand column represents common market patterns, not a comparison with any specific institute. Before choosing a Linux institute in Phagwara, ask how much command-line practice is included, whether students build real server projects, how trainers handle doubts, and what career support is provided.',
    },
    durations: [
      {
        length: '3 Months',
        tier: 'Foundation',
        heading: 'Learn the basics of Linux administration',
        blurb:
          'Fundamental skills step by step through practical command-line exercises and beginner-friendly projects.',
        skills: ['Linux (CentOS/Ubuntu)', 'Vim', 'Basic Bash', 'SSH', 'Systemd'],
        recommendedFor:
          'Linux Trainee, IT Support Intern, Junior System Administrator and anyone starting a Linux course in Phagwara.',
      },
      {
        length: '6 Months',
        tier: 'Professional',
        heading: 'Get proficient in Linux administration',
        blurb:
          'Real-world work across web servers, security hardening, automation and networking, with advanced scripting and problem solving.',
        skills: ['Bash', 'MySQL', 'Git', 'Ansible', 'Docker', 'Nginx', 'Firewalls'],
        recommendedFor:
          'Linux Administrator, System Engineer, DevOps Engineer and IT Infrastructure Specialist.',
      },
      {
        length: '9 Months',
        tier: 'Advanced',
        heading: 'Master Linux administration',
        blurb:
          'Linux combined with cloud computing, automation, security, networking and AI-assisted operations.',
        skills: ['Ansible', 'Docker', 'Kubernetes', 'AWS/Azure', 'SELinux', 'AI tools'],
        recommendedFor:
          'Linux Administrator, DevOps Engineer, Cloud Support Engineer, Cybersecurity Analyst and IT Infrastructure Manager.',
      },
    ],
    capabilities: [
      { capability: 'Linux fundamentals', included: [true, true, true] },
      { capability: 'File system navigation', included: [true, true, true] },
      { capability: 'User & group management', included: [true, true, true] },
      { capability: 'Shell scripting basics', included: [true, true, true] },
      { capability: 'Process management', included: [true, true, true] },
      { capability: 'File permissions', included: [true, true, true] },
      { capability: 'Advanced Bash scripting', included: [false, true, true] },
      { capability: 'MySQL & database integration', included: [false, true, true] },
      { capability: 'Network services & DNS', included: [false, true, true] },
      { capability: 'Web server setup (Nginx)', included: [false, true, true] },
      { capability: 'Ansible automation', included: [false, true, true] },
      { capability: 'Docker containerisation', included: [false, false, true] },
      { capability: 'Git & GitHub for IaC', included: [false, false, true] },
      { capability: 'Cloud instance management', included: [false, false, true] },
      { capability: 'Security hardening & SELinux', included: [false, false, true] },
      { capability: 'AI & Linux integration', included: [false, false, true] },
      { capability: 'Advanced projects', included: [false, false, true] },
    ],
    durationNote:
      'The programme is nested, not parallel. The 3-month course builds your administration foundation. The 6-month track includes those fundamentals and moves into web servers, automation and security. The 9-month programme builds further with cloud, DevOps and AI-assisted Linux work. Choose 3 months for command-line fundamentals and scripting; 6 months to manage servers, configure web services, automate with Ansible and secure environments; 9 months to add cloud computing and DevOps.',
    instructor: {
      heading: 'Why learn Linux with us?',
      intro:
        'Linux is more than a command list. The emphasis here is on how servers are configured and how problems get solved with the operating system — through practical lab work, assignments and real projects.',
      points: [
        {
          title: 'The terminal, from day one',
          copy: 'No graphical shortcuts. You work the way a real administrator does, because that is the only environment a production server gives you.',
        },
        {
          title: 'Breaking things on purpose',
          copy: 'Servers you have broken and repaired teach more than servers that always worked. Troubleshooting is treated as the skill, not the setback.',
        },
        {
          title: 'Projects that become a portfolio',
          copy: 'Eight practical builds covering the command line, web hosting, automation, hardening, networking, problem solving, AI tooling and a capstone you own.',
        },
        {
          title: 'A deliberate stepping stone',
          copy: 'Linux is taught as the foundation for cloud, DevOps and security rather than a destination — because that is where the careers and the money actually are.',
        },
      ],
    },
    extraFaqs: [
      {
        q: 'What is the Linux Administration Course in Phagwara at Techcadd?',
        a: 'It is designed to help beginners and aspiring system administrators learn Linux through practical, career-focused training. Students learn fundamentals, shell scripting, user management, security, networking and real server concepts with hands-on practice.',
      },
      {
        q: 'Who can join a Linux Administration Course in Phagwara?',
        a: 'It suits 12th-pass students, college students, graduates, freshers, job seekers and working professionals. Beginners can start from the basics without prior IT experience, while those with technical knowledge can strengthen their server management skills.',
      },
      {
        q: 'Is Linux a good career option for freshers?',
        a: 'Yes. Linux is used across IT infrastructure, cloud computing, DevOps, cyber security and web hosting. After gaining practical skills, freshers can explore roles such as Linux Administrator, System Engineer, Cloud Support Engineer and DevOps Engineer.',
      },
      {
        q: 'What will I learn in the Linux Administration Course?',
        a: 'Linux basics, file systems, user management, permissions, shell scripting, process management, networking, security and server configuration — plus how Linux is used in cloud computing, DevOps and automation.',
      },
      {
        q: 'Is the course practical or theory-based?',
        a: 'Linux becomes much easier when you execute commands and configure servers yourself. The approach focuses on hands-on server management, command-line exercises, shell scripting, mini-projects and real troubleshooting.',
      },
      {
        q: 'Will I work on Linux projects during the course?',
        a: 'Yes. Practical learning includes server setups, security hardening, shell scripting tasks and network configuration projects — which show how the concepts connect and strengthen your portfolio.',
      },
      {
        q: 'Can I learn Linux after 12th?',
        a: 'Absolutely, especially if you are interested in IT infrastructure, cloud computing, cyber security or technology careers. It provides a strong technical foundation to build on during college and beyond.',
      },
      {
        q: 'Can Linux help me get a job or internship?',
        a: 'Yes, but Linux alone is not enough. Employers also look for problem-solving ability, practical server projects, shell scripting, networking knowledge and security fundamentals. A job-oriented course helps you build these.',
      },
      {
        q: 'Does the course include Linux for DevOps and cloud?',
        a: 'Yes. Linux is the operating system DevOps and cloud run on. The course introduces automation tooling, virtualisation and cloud concepts used in those fields, building a foundation before advanced DevOps and cloud certification work.',
      },
      {
        q: 'How do I choose the best Linux Administration Course in Phagwara?',
        a: 'Do not choose on fees or certificates alone. Check the syllabus, practical lab sessions, trainer experience, project work, command-line exercises, tools covered, doubt support, career guidance and placement assistance. A good course should take you from basics to building secure, efficient server environments.',
      },
    ],
    relatedCourses: [
      'cloud-computing-course-in-phagwara',
      'cybersecurity-course-in-phagwara',
      'ethical-hacking-course-in-phagwara',
      'python-course-in-phagwara',
      'php-full-stack-course-in-phagwara',
      'web-development-course-in-phagwara',
    ],
    keywords: [
      'linux course in phagwara',
      'linux administration course in phagwara',
      'linux training institute in phagwara',
      'linux administration classes in phagwara',
      'linux course after 12th in phagwara',
      'system administration course in phagwara',
    ],
  }),
]
