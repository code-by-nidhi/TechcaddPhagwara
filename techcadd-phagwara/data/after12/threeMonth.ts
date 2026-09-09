/**
 * The After 12th 3-Month Programs.
 *
 * The shortest rung of the three-track ladder — 3, 6 and 9 months — and the
 * foundation the longer two are built on. That nesting is load-bearing in the
 * copy as well as the syllabus: a student who extends later continues from
 * where they stopped rather than repeating a term, and several sections say so
 * because it is the question counsellors are asked most.
 *
 * Content follows the techcadd programme pages, localised to Phagwara.
 */

import { makeAfter12 } from './factory'
import type { CourseContent } from '@/data/courses/types'

const CATEGORY = { category: '3-month-programs', categoryTitle: 'After 12th 3-Month Program' }

export const AFTER12_THREE_MONTH: CourseContent[] = [
  /* ------------------------------------------------------- cloud computing -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-3-month-cloud-computing-program-in-phagwara',
    label: 'Cloud Computing',
    title: 'Best After 12th 3-Month Cloud Computing Program in Phagwara',
    icon: 'cloud',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Three months that take you from your first terminal command to a real AWS deployment you can show in an interview — Linux, Bash, networking and Git from the ground up, then hands-on AWS services. No programming experience needed.',
    overview:
      'The programme runs over three months and is written for students who have completed 12th from any stream. It begins with the foundations — Linux, Bash scripting and networking — taught from basic principles, with no prior coding or technical background assumed. Once those fundamentals are established, you move on to hands-on practice with AWS services in a real account.\nThe teaching method is built around deliverables: every topic ends in something tangible — a script, a network configuration, or a deployed application. By the end of the course those pieces come together into a complete AWS deployment with documentation, ready to present in an interview and to put on your CV.',
    demand:
      'Cloud computing turns infrastructure into a service, and someone has to plan the workload, provision the resources, deploy the application and watch what happens next — across Punjab that person is increasingly hired straight out of a practical programme rather than a degree.',
    modules: [
      {
        title: 'Month 1 — Foundations: Linux, Scripting, Networking & Git',
        summary:
          'The system underneath the cloud. Get this right and every AWS service afterwards is easier to understand.',
        topics: [
          'Linux basics: installation, file system, navigation, file management, searching and archiving',
          'Text editors (vi/vim, nano); redirection, pipes and filters',
          'Users, groups, permissions and sudo; package management with apt and yum',
          'Process and service management with systemd; SSH remote access; cron scheduling',
          'Bash scripting: variables, conditionals, loops and functions',
          'Backup, log-rotation and health-check scripts',
          'Networking: LAN, WAN, routers, switches and firewalls; OSI and TCP/IP models',
          'IP addressing, subnetting, DNS, DHCP and NAT; TCP vs UDP; HTTP/HTTPS basics',
          'Troubleshooting with ping, traceroute, dig, netstat and curl',
          'Git and GitHub: repositories, commits, branches, merging, pull requests and .gitignore',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Core AWS: Cloud Concepts, IAM, VPC, EC2 & Security',
        summary:
          'Onto a real AWS account — identity and network first, then your first live server.',
        topics: [
          'Cloud concepts: on-premises vs cloud, IaaS/PaaS/SaaS, the shared responsibility model',
          'AWS global infrastructure: regions, availability zones and edge locations',
          'AWS Console, CLI and free tier; account setup with billing alarms and budgets',
          'IAM: users, groups, roles and policies; least-privilege access; MFA setup',
          'CloudTrail for activity tracking',
          'VPC with public and private subnets; route tables, internet gateway and NAT gateway',
          'Security groups and network ACLs',
          'EC2: launching instances, key pairs, SSH access and AMIs',
          'EBS storage, snapshots and encryption',
          'Web server installation (Nginx/Apache) on EC2 and a simple application deployment',
          'Instance types and pricing options',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Storage, Databases, Scaling & Capstone Project',
        summary:
          'What keeps an application up when traffic arrives — then everything joined into one deployment.',
        topics: [
          'Amazon S3: buckets, objects, storage classes and lifecycle policies',
          'Static website hosting; bucket policies, encryption and versioning',
          'Amazon RDS: relational databases on AWS, engines, backups and snapshots',
          'Connecting an application to RDS securely',
          'DynamoDB basics: tables, keys and capacity modes; relational vs non-relational choice',
          'Application Load Balancer, target groups and health checks',
          'Auto Scaling groups and scaling policies',
          'Route 53 for DNS management; CloudWatch monitoring, alarms and dashboards',
          'Introduction to the AWS Well-Architected Framework',
          'Capstone: a complete application on EC2, VPC, S3, RDS, load balancer and CloudWatch',
          'Architecture diagram, documentation, presentation and mock interview',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Strong fundamentals first — Linux, Bash, networking and Git before any AWS service',
      'Set up your own AWS account with billing alarms and budgets before provisioning anything',
      'Apply IAM, least-privilege access, MFA and CloudTrail before EC2 or S3',
      'Build a secure VPC with public and private subnets, NAT and security groups',
      'Deploy a web application on EC2 backed by RDS, with Route 53 DNS and CloudWatch monitoring',
      'Finish with a capstone that ties all three months into one scalable deployment',
    ],
    tools: [
      'Linux (Ubuntu / Amazon Linux)',
      'Bash',
      'SSH',
      'Git & GitHub',
      'Wireshark',
      'AWS Console & CLI',
      'IAM & CloudTrail',
      'VPC',
      'EC2 & EBS',
      'Nginx / Apache',
      'S3',
      'RDS & DynamoDB',
      'ALB & Auto Scaling',
      'Route 53 & CloudWatch',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream — Science, Commerce or Arts — with no technical knowledge assumed. Most students run this alongside a college degree using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc, BBA or B.Tech, this accelerates entry into cloud support and trainee roles. You enter placement season with real AWS portfolio work instead of a blank CV.',
      },
      {
        label: 'Career changers',
        copy: 'The weekend batch accommodates people already working. Three months is enough to become interview-ready for entry-level cloud roles without leaving your current job.',
      },
      {
        label: 'IT support and desktop staff',
        copy: 'Existing support experience converts directly. Linux and networking become familiar ground quickly, and AWS is the step up from hardware and helpdesk work.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Fundamentals first',
        copy: 'The first month covers Linux, Bash, networking and Git. Once these basics are clear, every AWS service becomes easier to understand because you already know how the system underneath works.',
      },
      {
        title: 'Hands-on AWS practice',
        copy: 'You set up a real AWS account with billing controls, then learn IAM, VPC, EC2, S3 and RDS by actually building and configuring — not just watching slides.',
      },
      {
        title: 'Building real projects',
        copy: 'Every topic ends with a deliverable — labs, reports, a hosted application and a final capstone. You leave with work you can show in interviews.',
      },
      {
        title: 'Extension flexibility',
        copy: 'This 3-month course is the foundation of the 6-month and 9-month tracks. If you want to go deeper later, you continue from where you left off — nothing is repeated.',
      },
    ],
    whyNow: {
      title: 'Cloud Turns Infrastructure Into a Service — and Someone Has to Run It',
      points: [
        'Instead of buying and maintaining every server, storage system and network device, organisations provision resources on demand, scale them when workloads shift and pay only for what they use.',
        'That shift is what justifies the profession: someone must plan the workload, provision the resources, deploy the application and monitor what happens afterwards.',
        'Across Punjab that person is increasingly recruited directly from practical programmes rather than from degree programmes.',
        'A fresher with a working AWS portfolio typically starts around ₹18,000 – ₹35,000 per month in the Phagwara, Jalandhar and Ludhiana market.',
      ],
    },
    roles: [
      'Cloud Support Engineer',
      'AWS Cloud Trainee',
      'Junior Cloud Engineer',
      'Cloud Operations Associate',
      'Linux Administrator',
      'Network Support Engineer',
      'Freelance Cloud Consultant',
    ],
    roleDetails: [
      {
        role: 'Cloud Support Engineer',
        copy: 'Entry-level administration — working with Linux, scripting routine tasks, configuring networks and managing AWS IAM, VPC and EC2. The course projects demonstrate exactly this capability.',
      },
      {
        role: 'AWS Cloud Trainee',
        copy: 'A structured entry position at IT services companies, where your capstone project is the primary evidence — you present it and explain the architecture decisions behind it.',
      },
      {
        role: 'Junior Cloud Engineer',
        copy: 'Supervised infrastructure work: provisioning instances, adjusting security groups, restoring snapshots and responding to CloudWatch alerts.',
      },
      {
        role: 'Cloud Operations Associate',
        copy: 'Monitoring, ticket resolution, cost verification, backup checks and first-line troubleshooting of standard issues — all covered hands-on during the training.',
      },
    ],
    hiring: [
      'IT services companies building and hosting client systems on AWS',
      'Startups running backend infrastructure in the cloud',
      'Managed service providers handling client infrastructure remotely',
      'Any business partway through a migration with nobody in-house to run it',
    ],
    nextSteps: [
      'The 6-month Cloud Computing Certificate Program',
      'The 9-month Cloud Computing Diploma Program',
      'AWS certification (Cloud Practitioner, Solutions Architect)',
      'DevOps, Docker and Kubernetes',
    ],
    industries: ['IT services', 'Startups', 'Managed services', 'Remote / freelance'],
    salary: {
      role: 'Cloud Support Engineer',
      summary:
        'Runs and supports the infrastructure applications live on. Cloud roles also offer more remote and freelance opportunity than most fields, which widens the market well past Phagwara.',
      starting: '₹18,000–₹35,000/month',
      after2: '₹35,000–₹60,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Cloud Support',
          fresher: '₹18,000–₹35,000/month',
          after2: '₹35,000–₹60,000/month',
          scale: { fresher: 26500, after2: 47500 },
        },
        {
          name: 'Delhi / NCR — Cloud Engineer',
          fresher: '₹28,000–₹48,000/month',
          after2: '₹50,000–₹90,000+/month',
          scale: { fresher: 38000, after2: 70000 },
        },
        {
          name: 'Remote / Freelance Cloud Work',
          fresher: '₹15,000–₹30,000/month',
          after2: '₹40,000–₹1,00,000+/month',
          scale: { fresher: 22500, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 3-month program?',
        a: 'Cloud Support Engineer, AWS Cloud Trainee, Junior Cloud Engineer and Cloud Operations Associate. These are entry-level cloud roles, and interviews typically ask you to walk through infrastructure you have actually deployed — which is what the capstone prepares you for.',
      },
      {
        q: 'What salary can a fresher expect in Phagwara?',
        a: 'A fresher with a working AWS portfolio typically starts around ₹18,000 – ₹35,000 per month in the Phagwara, Jalandhar and Ludhiana market, rising substantially within two years. Cloud roles also offer more remote and freelance opportunities than most fields.',
      },
      {
        q: 'Is cloud work remote-friendly?',
        a: 'Unusually so. The infrastructure is not physically present for anyone, which is why remote and hybrid roles are common in this field and why the market is not limited to what is hiring locally.',
      },
      {
        q: 'Which industries hire for this around Phagwara?',
        a: 'IT services companies building on AWS, startups running backend infrastructure, and managed service providers handling client environments remotely — plus any business partway through a migration with nobody in-house to run it.',
      },
    ],
    projects: [
      {
        name: 'Linux & Bash Automation Toolkit',
        summary:
          'Backup, log-parsing and health-check scripts scheduled with cron and version-controlled in Git.',
        tech: ['Linux', 'Bash', 'cron', 'Git'],
        level: 'Beginner',
        skills: ['System Administration', 'Scripting'],
      },
      {
        name: 'Networking Troubleshooting Report',
        summary:
          'Diagnose and document a set of network faults using ping, traceroute, dig, netstat and curl, with packet evidence from Wireshark.',
        tech: ['Wireshark', 'DNS', 'TCP/IP'],
        level: 'Beginner',
        skills: ['Network Troubleshooting', 'Documentation'],
      },
      {
        name: 'Secure AWS Network',
        summary:
          'A multi-AZ VPC with public and private subnets, NAT gateway, bastion access and flow logs.',
        tech: ['VPC', 'NAT', 'Security Groups', 'IAM'],
        level: 'Intermediate',
        skills: ['Network Design', 'Access Control'],
      },
      {
        name: 'AWS Web Application',
        summary:
          'An EC2, VPC, S3 and RDS deployment with Route 53 DNS and CloudWatch monitoring in place.',
        tech: ['EC2', 'VPC', 'S3', 'RDS', 'Route 53'],
        level: 'Intermediate',
        skills: ['Deployment', 'Monitoring'],
      },
      {
        name: 'S3 Static Website',
        summary:
          'A site hosted straight from S3 with bucket policies, versioning, encryption and lifecycle rules configured.',
        tech: ['S3', 'CloudFront'],
        level: 'Beginner',
        skills: ['Object Storage', 'Static Hosting'],
      },
      {
        name: 'Scalable Cloud Architecture (Capstone)',
        summary:
          'A multi-tier architecture using ALB, Auto Scaling, private subnets and security controls, presented with an architecture diagram, documentation and a mock interview.',
        tech: ['VPC', 'ALB', 'Auto Scaling', 'IAM'],
        level: 'Advanced',
        skills: ['Architecture', 'High Availability'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Learn at your pace',
        copy: 'You advance when your work passes review, not when the calendar says so. If you need extra time on a topic, you get it — nobody is rushed ahead.',
      },
      {
        title: 'Real AWS practice, supervised',
        copy: 'Every AWS session runs in a real account with billing controls — under trainer supervision, so mistakes become learning moments rather than surprise bills.',
      },
      {
        title: 'Trainers with industry experience',
        copy: 'The people teaching VPC design and IAM policies are the same people doing this work for real clients, which is why the course covers problems that actually happen.',
      },
      {
        title: 'Extend your course anytime',
        copy: 'Finish with a certificate and a capstone, or continue into the 6-month and 9-month tracks later. You pick up from where you left off — nothing is repeated.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 3-Month Cloud Computing Program in Phagwara?',
        a: 'Three months (12 weeks). Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you prefer your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'Do I need programming experience or a technical background?',
        a: 'No. The course starts from the very basics — Linux, commands and networking — and is designed for students joining straight after 12th from any stream. The only requirement is attending regularly and completing the hands-on work.',
      },
      {
        q: 'Will I work on a real AWS account or just watch demonstrations?',
        a: 'A real account. You create it yourself, set up billing alarms and budgets, and then every AWS topic — IAM, VPC, EC2, S3, RDS, Auto Scaling — is practised live within free-tier and budgeted limits.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'A Linux and Bash automation toolkit, a secure AWS network, an EC2-plus-RDS web application with monitoring, and a scalable cloud architecture. These come together in a final capstone with a diagram, documentation and a mock interview.',
      },
      {
        q: 'Can I extend to the 6-month or 9-month program later?',
        a: 'Yes, and nothing is repeated. The 3-month course is the foundation of the longer tracks. If you extend later, you continue from where you left off — topics you have already completed are never re-taught.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
      'after-12th-3-month-cyber-security-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-mern-stack-program-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
    ],
    keywords: [
      'after 12th 3 month cloud computing program in Phagwara',
      'cloud computing course after 12th Phagwara',
      'AWS training Phagwara',
      '3 month AWS program Punjab',
      'cloud computing course with placement Phagwara',
    ],
  }),

  /* ---------------------------------------------------- flutter app development -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-3-month-flutter-app-development-program-in-phagwara',
    label: 'Flutter App Development',
    title: 'Best After 12th 3-Month Flutter App Development Program in Phagwara',
    icon: 'mobile',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Three months that take you from your first line of Dart to a production-signed app on the store — widgets, state, live data, Firebase, tests and a custom UI, built on real devices. No programming experience needed.',
    overview:
      'One Dart codebase, two native apps. Write a feature once and see it on both iOS and Android — which is why most new apps start on Flutter. This 3-month course takes you from Dart basics to a signed, published app on the store.\nThe course starts from scratch. Dart programming is taught from the very first line, so no prior coding background is needed. Once you understand the language, you move into building real apps with Flutter. Every topic ends with something you actually build and can show.',
    demand:
      'Studios building on a client budget start on Flutter because one Dart codebase produces two native binaries — which is why the velocity of a Flutter developer is worth more to a small team than a specialist in either platform alone.',
    modules: [
      {
        title: 'Month 1 — Dart Programming, Flutter Basics & UI Development',
        summary:
          'The language first, then the widget tree. Every Flutter widget is Dart underneath.',
        topics: [
          'Dart basics: syntax, variables, data types, control flow and functions',
          'Named and optional parameters',
          'Object-oriented programming: classes, inheritance, interfaces and constructors',
          'Collections (List, Set, Map) and null safety',
          'Flutter setup for Android and iOS; creating and running a first Flutter app',
          'Understanding the widget tree; StatelessWidget vs StatefulWidget',
          'Layout widgets: Container, Row, Column and Stack',
          'Handling user input and gestures',
          'Material Design and Cupertino widgets; themes and design tokens',
          'Building custom widgets; responsive layout for phone, tablet and web',
          'Navigation and routing with named routes',
          'Forms and form validation; animations and page transitions',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — State Management, Async, Data & Firebase',
        summary:
          'Where junior Flutter code usually collapses — taught by building the same app twice.',
        topics: [
          'State management: setState, lifting state up and InheritedWidget',
          'Provider for app-wide state; introduction to the Bloc pattern',
          'Comparing Provider and Bloc by rebuilding the same app both ways',
          'Asynchronous programming: Futures, async/await, Streams and StreamBuilder',
          'Isolates for heavy tasks',
          'Working with data: JSON parsing, HTTP requests and consuming REST APIs',
          'WebSockets for real-time updates',
          'Local storage: SharedPreferences for simple data, SQLite for structured data',
          'Firebase setup for Android and iOS',
          'Firebase Authentication (email, Google and phone sign-in)',
          'Cloud Firestore for real-time data; Firebase Cloud Messaging; Firebase Analytics',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Testing, Advanced UI & Production App',
        summary:
          'The parts that separate a demo from a deliverable: tests, profiling and a signed release.',
        topics: [
          'Unit testing business logic; widget testing UI components',
          'Integration testing full user flows',
          'Debugging techniques and performance profiling with Flutter DevTools',
          'Custom painting with CustomPainter; custom animations beyond built-in transitions',
          'Gesture recognition for complex interactions',
          'Internationalisation and localisation for multi-language apps',
          'App architecture review and clean-code refactor before shipping',
          'Environment config and flavors for dev, staging and production',
          'Versioning and store metadata',
          'Build and release: signing the app, crash reporting and monitoring in production',
          'Writing release notes',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Dart before widgets — syntax, OOP, collections and null safety, because every hiring test opens there',
      'Build the same app twice on Provider and Bloc, with a written comparison of the trade-offs',
      'Work with live JSON over HTTP, a SQLite cache, a WebSocket feed and Firestore on real hardware',
      'Write unit, widget and integration tests for a full feature, plus a DevTools profiling pass',
      'Build custom UI with CustomPainter, animations, gestures and localisation',
      'Ship a production-signed release with flavors, store metadata, crash reporting and a handoff report',
    ],
    tools: [
      'Dart SDK',
      'DartPad',
      'Flutter SDK',
      'Android Studio',
      'Xcode',
      'VS Code',
      'go_router',
      'flutter_animate',
      'Provider & flutter_bloc',
      'http & dio',
      'sqflite',
      'Firebase Auth & Cloud Firestore',
      'flutter_test & integration_test',
      'Flutter DevTools',
      'Play Console & App Store',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. There is no assumed technical knowledge and no programming prerequisite. Most students run the programme alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc, BBA or B.Tech, this is the shortest route from degree to a junior app-developer role. You enter placement season with an app on the store instead of a blank CV.',
      },
      {
        label: 'Career changers',
        copy: 'The weekend batch exists for people already earning. Three months is enough to become interview-ready for Junior Flutter Developer and Cross-Platform UI Developer roles without leaving your current job.',
      },
      {
        label: 'Designers and freelancers',
        copy: 'If you already design interfaces or take small client jobs, this turns a mockup into something installable. Custom UI work is the highest-billed freelance line item in Flutter, and the course covers exactly that skill.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Dart before widgets',
        copy: 'Every Flutter widget is Dart underneath. A developer who cannot read a stack trace or reason about null safety cannot debug anything built on top of it, which is why the course starts with the language and nothing else.',
      },
      {
        title: 'State management taught properly',
        copy: 'You rebuild the same app twice — once on Provider, once on Bloc — with a written comparison. State is where junior Flutter code collapses under real features, and this practice stops that from happening.',
      },
      {
        title: 'Tests, because reviews ask for them',
        copy: 'A pull request with no tests gets rejected on any professional team. You will produce unit, widget and integration tests for a full feature, plus a documented DevTools profiling pass.',
      },
      {
        title: 'It ends on the store, not on a laptop',
        copy: 'The final project is a production-signed app with a deployed store listing, environment flavors, crash reporting and a written technical handoff report.',
      },
    ],
    whyNow: {
      title: 'Build Smarter Apps. Ship Them for Real.',
      points: [
        'The build loop is the whole job: design the widget and data model, wire state and data, test, sign and release, then read the crash data and analytics and go again.',
        'Every cycle through GitHub and CI/CD makes the next release cheaper.',
        'Native development gives you every platform API on day one, at the cost of writing and maintaining two apps. Flutter gives you velocity — one Dart codebase, two native binaries.',
        'A fresher with a published app and a tested codebase typically starts around ₹15,000 – ₹30,000 per month in the Phagwara, Jalandhar and Ludhiana market.',
      ],
    },
    roles: [
      'Junior Flutter Developer',
      'Mobile App Trainee',
      'Cross-Platform UI Developer',
      'Freelance App Developer',
      'Mobile QA & Test Associate',
      'App Support Engineer',
    ],
    roleDetails: [
      {
        role: 'Junior Flutter Developer',
        copy: 'Entry level, and the most common first destination after this course. Interviews test whether you can build a screen, wire state and ship a working app without supervision. Show the first Flutter app, the themed UI and the state-management comparison.',
      },
      {
        role: 'Mobile App Trainee',
        copy: 'A structured intake at a studio or product company. The capstone matters more than the certificate — you are asked to open a running app and explain why each screen is built the way it is.',
      },
      {
        role: 'Cross-Platform UI Developer',
        copy: 'The role for someone who turns designs into interfaces that look native on both platforms. Theming, responsive layout, custom painting and localisation — all covered here — are exactly this job.',
      },
      {
        role: 'Freelance App Developer',
        copy: 'Small client builds, on your own terms. A signed store listing plus a written handoff report is what converts an enquiry into a paid brief, and both come out of the capstone.',
      },
    ],
    hiring: [
      'App studios and software houses building client apps on a budget',
      'Product startups shipping a mobile front end',
      'Businesses building their own customer-facing app in-house',
      'Freelance and remote client work, which is unusually available in app development',
    ],
    nextSteps: [
      'The 6-month Flutter App Development Certificate Program',
      'The 9-month Flutter App Development Diploma Program',
      'Backend development to pair with the app layer',
      'Native Android or iOS specialisation',
    ],
    industries: ['App studios', 'Product startups', 'Retail & services', 'Freelance / remote'],
    salary: {
      role: 'Junior Flutter Developer',
      summary:
        'Builds and ships cross-platform mobile apps from one codebase. App work also carries strong freelance demand, and a store listing is what converts an enquiry into a paid brief.',
      starting: '₹15,000–₹30,000/month',
      after2: '₹32,000–₹58,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Flutter Developer',
          fresher: '₹15,000–₹30,000/month',
          after2: '₹32,000–₹58,000/month',
          scale: { fresher: 22500, after2: 45000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹25,000–₹45,000/month',
          after2: '₹55,000–₹95,000+/month',
          scale: { fresher: 35000, after2: 75000 },
        },
        {
          name: 'Freelance App Builds',
          fresher: '₹10,000–₹28,000/month',
          after2: '₹40,000–₹90,000+/month',
          scale: { fresher: 19000, after2: 65000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 3-month program?',
        a: 'Junior Flutter Developer, Mobile App Trainee and Cross-Platform UI Developer. Those interviews test whether you can build a screen, wire state and ship a working app without supervision — which is what the six projects and the signed capstone are for.',
      },
      {
        q: 'What salary can a fresher expect in Phagwara?',
        a: 'A fresher with a published app and a tested codebase typically starts around ₹15,000 – ₹30,000 per month in the Phagwara, Jalandhar and Ludhiana market, rising substantially within two years.',
      },
      {
        q: 'Is there freelance work in app development?',
        a: 'A great deal of it, and it is one of the easier fields to start freelancing in. A store listing plus a written handoff report is what converts an enquiry into a paid brief, and both come out of the capstone.',
      },
      {
        q: 'Which businesses locally hire Flutter developers?',
        a: 'App studios and software houses building client apps on a budget, product startups shipping a mobile front end, and businesses building their own customer-facing app in-house. Remote and freelance work extends the market considerably further.',
      },
    ],
    projects: [
      {
        name: 'First Flutter App',
        summary:
          'A three-screen live app with layout widgets and interactive state, screen-recorded on a real device.',
        tech: ['Flutter', 'DevTools'],
        level: 'Beginner',
        skills: ['Widget Tree', 'State Basics'],
      },
      {
        name: 'Themed Multi-Screen UI',
        summary:
          'A five-screen app with Material and Cupertino theming, validated forms and animated navigation.',
        tech: ['go_router', 'flutter_animate'],
        level: 'Beginner',
        skills: ['Theming', 'Navigation'],
      },
      {
        name: 'State Management Comparison',
        summary:
          'The same app rebuilt on Provider and Bloc, with a written comparison of the trade-offs between them.',
        tech: ['Provider', 'flutter_bloc'],
        level: 'Intermediate',
        skills: ['State Management', 'Architecture'],
      },
      {
        name: 'Live Data App',
        summary:
          'An API-fetched, SQLite-cached, WebSocket-updated live screen running on a real handset.',
        tech: ['dio', 'sqflite', 'WebSockets'],
        level: 'Intermediate',
        skills: ['Async', 'Local Storage'],
      },
      {
        name: 'Firebase-Backed App',
        summary:
          'Real-time sign-in, a Firestore list syncing across two handsets, and an end-to-end push notification.',
        tech: ['Firebase Auth', 'Firestore', 'FCM'],
        level: 'Advanced',
        skills: ['Authentication', 'Real-Time Data'],
      },
      {
        name: 'Production-Signed App (Capstone)',
        summary:
          'A tested feature suite with unit, widget and integration tests and a DevTools profile, shipped as a production-signed build with flavors, crash reporting and a technical handoff report.',
        tech: ['flutter_test', 'Play Console', 'App Store'],
        level: 'Advanced',
        skills: ['Testing', 'Release Engineering'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Learn at your own pace',
        copy: 'You advance when a deliverable passes review. A student who needs extra time on state management gets it; nobody is moved on just because the calendar says so.',
      },
      {
        title: 'Real devices and real store submissions',
        copy: 'Android handsets, iOS builds, live Firebase projects and an actual Play Console listing — the capstone is submitted, not screenshotted.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching Bloc and platform channels are the people writing them for client work, which is why the debugging sections cover failures that actually happen.',
      },
      {
        title: 'A ladder you can extend',
        copy: 'Finish here with a certificate and a published app, or continue into the six- and nine-month tracks later. You continue from where you left off — nothing you have already learned is repeated.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 3-Month Flutter App Development Program in Phagwara?',
        a: 'Three months (12 weeks) of hands-on Flutter training. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'Will my app run on both Android and iPhone?',
        a: 'Yes. That is the point of Flutter: one Dart codebase compiles to two native apps, so a feature you build once appears on iOS and Android the same afternoon. The final project produces a signed release for the store, and the environment is set up for both platforms from the start.',
      },
      {
        q: 'Do I need a Mac or an iPhone to do this course?',
        a: 'Not to learn. Everything runs on Windows with an Android device or emulator, and the lab has Mac machines for the iOS build and Xcode archiving steps, so you get the iOS half without buying hardware.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'Six portfolio projects: a first three-screen app, a themed multi-screen UI with animated navigation, the same app built twice on Provider and Bloc, a live data app with a SQLite cache and WebSocket feed, a Firebase-backed app with real-time sign-in and push, and a tested feature suite. The capstone then ships a production-signed app to a store listing.',
      },
      {
        q: 'Can I extend to the 6-month or 9-month program later?',
        a: 'Yes, and nothing is repeated. The three tracks are nested rather than parallel — what you learn here remains the permanent foundation, and you continue from where you left off. You never restart, and a topic you have already covered is never re-taught.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-flutter-app-development-program-in-phagwara',
      'after-12th-9-month-flutter-app-development-program-in-phagwara',
      'after-12th-3-month-mern-stack-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
    ],
    keywords: [
      'after 12th 3 month flutter course in Phagwara',
      'flutter app development course after 12th Phagwara',
      'mobile app development training Phagwara',
      'dart and flutter course Punjab',
      'app development course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------- MERN stack -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-3-month-mern-stack-program-in-phagwara',
    label: 'MERN Stack',
    title: 'Best After 12th 3-Month MERN Stack Program in Phagwara',
    icon: 'layers',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    summary:
      'A fast-paced three-month programme taking you from web fundamentals to a complete, deployed MERN stack application with authentication, database integration and placement guidance.',
    overview:
      'This is the three-month MERN programme: beginner to intermediate, written for someone starting straight after 12th who wants a deployed full-stack application quickly rather than the longest possible syllabus. Three months, three or more mini projects, and one industry-level major project at the end. It is fast-paced by design — each month carries a full theme, and the pace is what lets you finish with something live inside a single term.\nMonth one is web development fundamentals and JavaScript basics: how the internet works, client–server architecture, frontend versus backend versus full stack, HTTP and HTTPS, domains and hosting; then HTML5 structure, semantic tags, forms, tables, media and accessibility; CSS3 selectors, box model, Flexbox, Grid, animations, responsive design and media queries; JavaScript fundamentals through variables, data types, operators, conditionals, loops, functions, arrays and objects; then advanced JavaScript with ES6+, arrow functions, scope, hoisting, DOM manipulation, event handling, form validation, async JavaScript, the Fetch API and local storage; and finally Git and GitHub. The month produces five small builds: a portfolio website, a calculator, a to-do list, a weather app and a responsive landing page.\nMonth two is React.js and MongoDB. React fundamentals with Vite, JSX, components, props and state; React development with event handling, conditional rendering, lists and keys, forms, hooks and API integration; routing and styling with React Router DOM, protected routes, the Context API and Tailwind CSS; then the database side — MongoDB fundamentals, Atlas, collections and documents, CRUD and query operators, and Mongoose for connecting Node.js to MongoDB with schemas, models, CRUD and validation. The mini projects are a blog application, an employee dashboard and a student management system with a real database behind it.\nMonth three is the backend and the major project: Node.js fundamentals, Express with routing, middleware, REST APIs and MVC architecture; authentication with registration, login, bcrypt password hashing, JWT and protected routes; then full MERN integration with CRUD, API integration and error handling; deployment of the frontend to Vercel and the backend to Render with MongoDB Atlas and environment variables; and career preparation covering a GitHub portfolio, resume building, LinkedIn guidance, interview tips and project presentation. The major project is one industry-level MERN application — a hospital management system, a learning management system, a job portal or an e-commerce website.',
    demand:
      'The MERN stack is what most product teams and agencies in Punjab actually build on, which is why a fresher who can show a deployed full-stack application with real authentication gets called back ahead of one with a longer syllabus and nothing running.',
    modules: [
      {
        title: 'Month 1 — Web Development Fundamentals & JavaScript Basics',
        summary:
          'From how the internet works to five finished builds — enough to know within four weeks whether this suits you.',
        topics: [
          'Web fundamentals: how the internet works, client–server architecture, frontend vs backend vs full stack',
          'HTTP and HTTPS, domains and hosting',
          'HTML5: structure, semantic tags, forms, tables, lists, media and accessibility',
          'CSS3: selectors, box model, Flexbox, Grid, animations, responsive design and media queries',
          'JavaScript fundamentals: variables, data types, operators, conditionals, loops, functions, arrays and objects',
          'JavaScript advanced: ES6+, arrow functions, scope, hoisting and DOM manipulation',
          'Event handling, form validation, async JavaScript, the Fetch API and local storage',
          'Git and GitHub: installation, commands, repository management, branching, merging and workflow',
          'Mini projects: portfolio website, calculator, to-do list, weather app and responsive landing page',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — React.js & MongoDB',
        summary:
          'The front end and the database, joined in the same month rather than left as two separate subjects.',
        topics: [
          'React fundamentals: introduction, Vite, JSX, components, props and state',
          'React development: event handling, conditional rendering, lists and keys, forms',
          'React hooks (useState, useEffect) and API integration',
          'React Router DOM, protected routes and the Context API',
          'Tailwind CSS and responsive UI',
          'MongoDB: database fundamentals, Atlas, collections and documents',
          'CRUD operations and query operators',
          'Mongoose: connecting Node.js with MongoDB, schemas, models, CRUD and validation',
          'Mini projects: blog application, employee dashboard and student management system',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Node.js, Express.js & Major Project',
        summary:
          'The backend, authentication and one industry-level application deployed live.',
        topics: [
          'Node.js fundamentals: introduction, npm, package.json, modules, file system and HTTP module',
          'Express.js: server, routing, middleware, REST APIs and MVC architecture',
          'Authentication: user registration, login, password hashing with bcrypt',
          'JWT authentication and protected routes',
          'MERN integration: React + Node.js + Express + MongoDB, CRUD, API integration and error handling',
          'Deployment: frontend to Vercel, backend to Render, MongoDB Atlas and environment variables',
          'Career preparation: GitHub portfolio, resume building, LinkedIn guidance, interview tips',
          'Major project: one industry-level MERN application, presented at the end',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Five builds in the first month — a portfolio site, calculator, to-do list, weather app and landing page',
      'React talking to a real database: components, hooks, routing and Tailwind against MongoDB Atlas and Mongoose',
      'Authentication done properly with bcrypt password hashing, JWT and protected routes',
      'Express REST APIs with middleware, MVC structure and error handling',
      'A deployed industry-level project on Vercel and Render against MongoDB Atlas',
      'A GitHub portfolio, a personal portfolio website and an ATS-friendly resume',
    ],
    tools: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB & Mongoose',
      'MongoDB Atlas',
      'Tailwind CSS',
      'REST APIs & JSON',
      'VS Code',
      'Postman',
      'MongoDB Compass',
      'Git, GitHub & npm',
      'Vercel, Render & Netlify',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. The course starts with how the internet works, and by the end of month one you have a portfolio website, a calculator, a to-do list and a weather app of your own.',
      },
      {
        label: 'Students with a summer or gap term',
        copy: 'Three months fits a single vacation or the gap between school and college. You finish it with a deployed application rather than an unfinished playlist.',
      },
      {
        label: 'Degree students who want a head start',
        copy: 'If you are entering a BCA or B.Tech, arriving already able to build and deploy a MERN app changes what your first two years look like — and what your college project can be.',
      },
      {
        label: 'Anyone testing whether coding suits them',
        copy: 'Three months is a real commitment but a bounded one. If it clicks, the 6-month certificate programme continues from where this ends rather than repeating it.',
      },
      {
        label: 'Career restarters and switchers',
        copy: 'A gap or an unrelated background counts for less than a deployed URL. The syllabus is identical whoever you are; only the batch timing changes.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If you already know some HTML and JavaScript but have never finished a full-stack build, this is the fastest supervised route to one — with a trainer reviewing your code each week.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Beginner to intermediate MERN',
        copy: 'From how the internet works to a complete MERN application — no prior coding assumed, and nothing skipped between the two ends.',
      },
      {
        title: '3+ mini practical projects',
        copy: 'A portfolio website, calculator, to-do list, weather app and responsive landing page in month one; a blog, an employee dashboard and a student management system in month two.',
      },
      {
        title: '1 industry-level major project',
        copy: 'A hospital management system, learning management system, job portal or e-commerce website — complete, portfolio-ready and defended at the end.',
      },
      {
        title: 'Git, GitHub and live deployment',
        copy: 'Version control the way real teams use it, then the frontend on Vercel and the backend on Render with MongoDB Atlas and environment variables.',
      },
      {
        title: 'Source code access and doubt support',
        copy: 'The source code for every project you build is yours to keep, and doubt sessions run whenever you are stuck rather than only in class.',
      },
      {
        title: 'Portfolio, resume and certificate',
        copy: 'A personal portfolio website, a GitHub profile, resume guidance, LinkedIn guidance and a course completion certificate.',
      },
    ],
    whyNow: {
      title: 'Three Months, One Deployed MERN Application',
      points: [
        '3+ mini projects and one industry-level major project — deployed live, with the source code yours to keep.',
        'Finish with a GitHub portfolio, a portfolio website and an ATS-friendly resume, ready for junior developer interviews.',
        'The MERN stack is what most agencies and product teams in Punjab actually build on, so the skills map directly onto local job listings.',
        'A deployed URL an interviewer can open is worth more at this stage than any additional certificate.',
      ],
    },
    roles: [
      'MERN Stack Developer (Fresher)',
      'Full Stack Web Developer',
      'Frontend Developer (React.js)',
      'React.js Developer',
      'Web Application Developer',
      'Software Developer Intern',
    ],
    roleDetails: [
      {
        role: 'MERN Stack Developer (Fresher)',
        copy: 'The standard entry title after this programme — building features across React, Express and MongoDB under a senior developer.',
      },
      {
        role: 'Frontend Developer (React.js)',
        copy: 'Focused on the React half: components, hooks, routing, state and styling. Often the easiest of these roles to enter first.',
      },
      {
        role: 'Full Stack Web Developer',
        copy: 'Working across the whole stack on smaller teams, where one developer owns a feature end to end.',
      },
      {
        role: 'Web Application Developer',
        copy: 'Building and maintaining business web applications — dashboards, portals and internal tools.',
      },
      {
        role: 'Software Developer Intern',
        copy: 'Realistically, the fresher and intern titles are the usual first step from a three-month programme, and they are how most local developers start.',
      },
    ],
    hiring: [
      'Web development agencies across Phagwara, Jalandhar and Ludhiana',
      'Product startups building on JavaScript end to end',
      'IT services companies delivering client web applications',
      'Businesses building internal portals and dashboards in-house',
    ],
    nextSteps: [
      'The 6-month MERN Stack Certificate Program',
      'The 9-month MERN Stack Diploma Program',
      'Next.js and server-side rendering',
      'Cloud deployment and DevOps',
    ],
    industries: ['Web agencies', 'Product startups', 'IT services', 'Freelance / remote'],
    salary: {
      role: 'MERN Stack Developer',
      summary:
        'Builds web applications across React, Express and MongoDB. Pay at this stage follows the deployed portfolio far more closely than the length of the course behind it.',
      starting: '₹15,000–₹28,000/month',
      after2: '₹32,000–₹58,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — MERN Developer',
          fresher: '₹15,000–₹28,000/month',
          after2: '₹32,000–₹58,000/month',
          scale: { fresher: 21500, after2: 45000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹25,000–₹45,000/month',
          after2: '₹55,000–₹1,00,000+/month',
          scale: { fresher: 35000, after2: 77500 },
        },
        {
          name: 'Freelance / Remote Web Work',
          fresher: '₹10,000–₹25,000/month',
          after2: '₹40,000–₹90,000+/month',
          scale: { fresher: 17500, after2: 65000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What roles can I apply for after three months?',
        a: 'MERN Stack Developer (Fresher), Full Stack Web Developer, Frontend Developer (React.js), React.js Developer, Web Application Developer and Software Developer Intern. Realistically the fresher and intern titles are the usual first step from a three-month programme, and they are how most local developers start.',
      },
      {
        q: 'What does a fresher earn in this stack around Phagwara?',
        a: 'Around ₹15,000 – ₹28,000 a month to start, reaching ₹32,000 – ₹58,000 within two years. A deployed major project moves candidates to the upper end of that band more reliably than any additional certificate.',
      },
      {
        q: 'Can I freelance with these skills?',
        a: 'Yes, and web work is one of the more accessible freelance markets — business sites, portals and small applications. A live URL and the source code on GitHub are what convert an enquiry into a paid brief.',
      },
      {
        q: 'Do I need to leave Punjab for these jobs?',
        a: 'No. Web agencies, IT services companies and product startups across Phagwara, Jalandhar and Ludhiana hire for this stack, and remote work widens the market considerably beyond that.',
      },
    ],
    projects: [
      {
        name: 'Portfolio Website & Landing Page',
        summary:
          'Month one’s opening builds: a personal portfolio site and a responsive landing page in semantic HTML5 and CSS3, versioned with Git and published from GitHub.',
        tech: ['HTML5', 'CSS3', 'Git'],
        level: 'Beginner',
        skills: ['Semantic HTML', 'Responsive Design'],
      },
      {
        name: 'Calculator, To-Do List & Weather App',
        summary:
          'Three JavaScript builds covering the DOM, event handling and form validation, then async JavaScript and the Fetch API against a real weather service, with state kept in local storage.',
        tech: ['JavaScript', 'Fetch API'],
        level: 'Beginner',
        skills: ['DOM Manipulation', 'Async JavaScript'],
      },
      {
        name: 'Blog Application',
        summary:
          'A React build with components, hooks, conditional rendering, lists and keys, React Router DOM and Tailwind styling — your first application with more than one screen.',
        tech: ['React.js', 'Tailwind'],
        level: 'Intermediate',
        skills: ['React Components', 'Routing'],
      },
      {
        name: 'Employee Dashboard',
        summary:
          'Forms, API integration and protected routes with the Context API, backed by MongoDB Atlas collections and query operators.',
        tech: ['React', 'MongoDB'],
        level: 'Intermediate',
        skills: ['Protected Routes', 'API Integration'],
      },
      {
        name: 'Student Management System',
        summary:
          'A frontend joined to a real database through Mongoose schemas, models, validation and CRUD — the point where the two halves of the stack meet.',
        tech: ['Mongoose', 'MongoDB'],
        level: 'Intermediate',
        skills: ['Schema Design', 'CRUD'],
      },
      {
        name: 'Industry-Level Major Project',
        summary:
          'One complete MERN application — hospital management, an LMS, a job portal or an e-commerce site — with Express REST APIs, bcrypt and JWT authentication, error handling, and deployment to Vercel and Render. This is the one interviewers ask about.',
        tech: ['Full MERN', 'JWT', 'Vercel', 'Render'],
        level: 'Advanced',
        skills: ['Authentication', 'Deployment'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still ship code',
        copy: 'Your trainer is not a full-time lecturer. They deliver client projects for techcadd’s services arm, so the examples in class are current rather than a case study from five years ago.',
      },
      {
        title: 'Honest about what three months buys',
        copy: 'We will tell you plainly whether the 3-month or the 6-month track fits your goal. A student sold the wrong length is a student who does not finish.',
      },
      {
        title: 'Every month ends in something built',
        copy: 'Eight named mini projects across the first two months, then one industry-level major project. You are never more than a fortnight from a finished piece of work.',
      },
      {
        title: 'A live URL, not a localhost demo',
        copy: 'Month three deploys the frontend to Vercel and the backend to Render with MongoDB Atlas — because a project an interviewer cannot open has not been finished.',
      },
      {
        title: 'Small batches and open doubt hours',
        copy: 'Batches stay small enough that a trainer sees your screen daily, and doubt support continues outside class time until the concept lands.',
      },
      {
        title: 'Continues into the longer track',
        copy: 'If you want more depth afterwards, the 6-month certificate programme carries on from here — deeper Node and Express, file handling, a full industry project month and a placement month.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this MERN Stack programme after 12th?',
        a: 'Three months, running as a fixed roadmap: web development fundamentals and JavaScript basics, then React.js and MongoDB, then Node.js, Express.js, authentication, MERN integration, deployment and the major project. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Can I join straight after 12th with no coding background?',
        a: 'Yes. The course begins with how the internet works, client–server architecture and HTTP, then HTML5 and CSS3. No prior programming, no science stream and no particular percentage is required — but the pace is brisk, so consistent attendance matters more here than on the six-month track.',
      },
      {
        q: 'How is this different from the 6-month MERN Stack Certificate Program?',
        a: 'Both start from zero and both end in a deployed application, but they are different syllabuses rather than one trimmed. Three months compresses JavaScript into a single month and reaches the major project in month three. Six months adds deeper Node and Express, file handling with Multer, Cloudinary and Nodemailer, a full month of industry project development with testing and code review, and a full month of deployment and placement preparation including technical question banks, aptitude and mock interviews.',
      },
      {
        q: 'How many projects will I build?',
        a: 'Eight named mini projects across the first two months — a portfolio website, a calculator, a to-do list, a weather app, a responsive landing page, a blog application, an employee dashboard and a student management system — plus one industry-level major project in month three.',
      },
      {
        q: 'Will my project actually go live on the internet?',
        a: 'Yes. The deployment topic covers deploying the frontend to Vercel and the backend to Render against MongoDB Atlas, with environment variables covered. A localhost demo is not a finished project.',
      },
      {
        q: 'Can I upgrade to the 6-month programme later?',
        a: 'Yes, and without repeating what you have done. Ask a counsellor before your three months end so you can join the running batch at the right point and be told the difference in fee.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-mern-stack-program-in-phagwara',
      'after-12th-9-month-mern-stack-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-flutter-app-development-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
    ],
    keywords: [
      'after 12th 3 month MERN stack program in Phagwara',
      'MERN stack course after 12th Phagwara',
      'react and node js training Phagwara',
      'full stack javascript course Punjab',
      'MERN stack course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------- full stack development -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-3-month-full-stack-development-program-in-phagwara',
    label: 'Full Stack Development',
    title: 'Best After 12th 3-Month Full Stack Development Program in Phagwara',
    icon: 'code',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn AI-powered full-stack development — one Python and Django ladder with three exit points at 3, 6 and 9 months, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Best After 12th 3-Month Full Stack Development Program in Phagwara takes you from web fundamentals, HTML5, CSS3 and Bootstrap to LLM APIs, Celery, payments, CI/CD and system design, taught on Python, Django and DRF. You work on live client briefs under trainer supervision, not slideware. You start from zero with no prior background, and every stage ends in a portfolio deliverable.',
    demand:
      'Companies across Punjab are building AI-integrated products with teams trained for the pre-AI stack, and that gap is what this programme is built to fill — there is local demand, there are budgets, and there are very few trained people to hand the work to.',
    modules: [
      {
        title: 'Month 1 — Web Fundamentals, JavaScript & Python',
        summary:
          'The front end and the language the rest of the ladder is built on, both from zero.',
        topics: [
          'Web fundamentals: how the web works, client and server, HTTP and hosting',
          'HTML5 structure, semantic markup, forms and accessibility',
          'CSS3 and Bootstrap for responsive layout',
          'JavaScript and the DOM: events, validation and interactivity',
          'Python programming: syntax, data types, control flow and functions',
          'Object-oriented programming in Python',
          'Git and GitHub for version control',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Databases, Django & AI-Assisted Development',
        summary:
          'Where the data lives, the framework that serves it, and how to use AI tooling without trusting it blindly.',
        topics: [
          'Databases, SQL and schema design',
          'Django: project structure, views, templates and URLs',
          'The Django ORM: models, queries, relations and migrations',
          'Advanced Django: forms, authentication, admin and middleware',
          'AI-assisted development and verification discipline',
          'PostgreSQL in a real project',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — APIs, Integrations & Live Project',
        summary:
          'The professional layer — APIs, background work, payments and shipping — on a real client brief.',
        topics: [
          'Django REST Framework: serializers, viewsets and routers',
          'JWT authentication and API documentation',
          'LLM APIs and AI integration into an application',
          'Celery and background task processing',
          'Payment gateway integration',
          'CI/CD and deployment',
          'System design basics',
          'Live project work and placement preparation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Web fundamentals, HTML5, CSS3 and Bootstrap',
      'JavaScript and the DOM',
      'Python programming and object-oriented design',
      'Databases, SQL and schema design',
      'Django, the ORM and advanced Django',
      'AI-assisted development with a verification discipline',
      'Django REST Framework, JWT and API documentation',
      'LLM APIs, Celery, payments, CI/CD and system design',
    ],
    tools: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Celery',
      'HTML5 & CSS3',
      'Bootstrap',
      'JavaScript',
      'Git & GitHub',
      'VS Code',
      'Postman',
    ],
    audience: [
      {
        label: 'Students after 12th',
        copy: 'Join from any stream. You start from fundamentals with no assumed knowledge, and most students run the course alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BA, BBA, B.Com, BCA or B.Tech, this is the shortest route from degree to salary. Enter placement season with project work in hand instead of a blank CV.',
      },
      {
        label: 'Working professionals',
        copy: 'The weekend batch exists for people already earning. Career switchers typically become interview-ready for Full-Stack Developer roles within five to six months without leaving their current job.',
      },
      {
        label: 'Business owners and freelancers',
        copy: 'Owners take this course to stop outsourcing work they cannot judge. Freelancers take it to bill clients beyond Punjab, since location does not limit remote work in this field.',
      },
      {
        label: 'Career restarters',
        copy: 'A gap on the CV counts for less than work you can point at. The course starts at zero and finishes with a portfolio and a documented internship letter, which is what an interviewer asks about after a break.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If free videos left you with notes but nothing built, what changes here is a trainer who reviews what you produced this week and a deadline attached to every module.',
      },
    ],
    whyChooseUs: [
      {
        title: 'A real gap in the local market',
        copy: 'Companies across Punjab are building AI-integrated products with teams trained for the pre-AI stack. There is local demand, there are budgets, and there are very few trained people to hand the work to.',
      },
      {
        title: 'Supervision on real work',
        copy: 'What separates this from a playlist of tutorials is supervision. From the second half of the course you build on live client projects with a trainer beside you, make decisions that have consequences, and correct them the following week. That loop is the skill.',
      },
      {
        title: 'Honest about the money',
        copy: 'A fresher who finishes with a working portfolio typically starts around ₹20,000 – ₹40,000 a month locally and moves up quickly. The ceiling is high, but it is earned — nobody pays a beginner well for a certificate alone.',
      },
      {
        title: 'Better than the usual alternative',
        copy: 'The alternative is what most people try first: free videos, a cheap online course, six months of drifting, and knowledge you cannot demonstrate. A mentor who corrects you, an internship letter and a placement cell that actually calls employers is the difference between knowing the subject and being hired to do it.',
      },
    ],
    whyNow: {
      title: 'Full Stack Development Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer — not slides, not simulations.',
        'Full-Stack Developer roles in Punjab start around ₹20,000 – ₹40,000 a month for a fresher with a working portfolio.',
        'Beyond IT companies, the export houses, sports goods and hand tool manufacturers, immigration consultancies, hospitals, schools and real estate firms across the region all now hire for these skills directly.',
        'A Phagwara address costs you nothing on a remote brief — students bill clients in Delhi, Dubai and Canada.',
      ],
    },
    roles: [
      'Full-Stack Developer',
      'Backend / API Developer',
      'AI Integration Engineer',
      'Django Developer',
      'Python Developer',
      'Solutions Architect',
      'Freelance Web Developer',
    ],
    roleDetails: [
      {
        role: 'Full-Stack Developer',
        copy: 'Own a feature from the interface through the API to the database. The core target role of the programme and the most common local title.',
      },
      {
        role: 'Backend / API Developer',
        copy: 'Build and maintain the Django and DRF services an application runs on — where the month-three material points directly.',
      },
      {
        role: 'AI Integration Engineer',
        copy: 'Wire LLM APIs and AI features into existing products. This is the gap local companies are trying to fill and the reason the course covers it.',
      },
      {
        role: 'Django Developer',
        copy: 'Specialised on the framework — models, ORM, admin, authentication and the ecosystem around it.',
      },
      {
        role: 'Freelance Web Developer',
        copy: 'Client applications billed directly. A Phagwara address costs you nothing on a remote brief, and students bill clients well outside Punjab.',
      },
    ],
    hiring: [
      'IT and software companies building client products',
      'Export houses, sports goods and hand tool manufacturers with in-house systems',
      'Immigration consultancies, hospitals and schools running their own platforms',
      'Real estate firms and agencies commissioning web applications',
    ],
    nextSteps: [
      'The 6-month Full Stack Development Certificate Program',
      'The 9-month Full Stack Development Diploma Program',
      'Cloud deployment and DevOps',
      'System design and architecture',
    ],
    industries: ['IT & software', 'Manufacturing & export', 'Healthcare & education', 'Real estate'],
    salary: {
      role: 'Full-Stack Developer',
      summary:
        'Builds applications end to end on Python and Django. With two years of delivery experience the starting figure typically doubles, and specialists who keep learning move well beyond it.',
      starting: '₹20,000–₹40,000/month',
      after2: '₹40,000–₹80,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Full-Stack Developer',
          fresher: '₹20,000–₹40,000/month',
          after2: '₹40,000–₹80,000/month',
          scale: { fresher: 30000, after2: 60000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹30,000–₹55,000/month',
          after2: '₹65,000–₹1,30,000+/month',
          scale: { fresher: 42500, after2: 97500 },
        },
        {
          name: 'Remote / Freelance Client Work',
          fresher: '₹15,000–₹35,000/month',
          after2: '₹50,000–₹1,20,000+/month',
          scale: { fresher: 25000, after2: 85000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the Full Stack Development Program?',
        a: 'Graduates typically move into roles such as Full-Stack Developer, Backend / API Developer, AI Integration Engineer or Solutions Architect. Companies across Punjab are building AI-integrated products with teams trained for the pre-AI stack, and that gap is what this programme is built to fill.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'A fresher with a working portfolio typically starts around ₹20,000 – ₹40,000 per month in the local market, rising substantially within two years of experience. Freelancers handling multiple clients often earn more, since remote work is not limited by location.',
      },
      {
        q: 'Can I work remotely or freelance with this?',
        a: 'Yes. A Phagwara address costs you nothing on a remote brief, and students bill clients in Delhi, Dubai and Canada.',
      },
      {
        q: 'Which industries hire for this in Punjab?',
        a: 'Beyond IT companies, the export houses, sports goods and hand tool manufacturers, immigration consultancies, hospitals, schools and real estate firms across the region all now hire for these skills directly.',
      },
    ],
    projects: [
      {
        name: 'Fundamentals Build',
        summary:
          'Your first working piece, applying web fundamentals, HTML5, CSS3, Bootstrap, JavaScript and the DOM end to end rather than as isolated exercises.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        level: 'Beginner',
        skills: ['Responsive Layout', 'DOM'],
      },
      {
        name: 'Python & OOP Application',
        summary:
          'A console and script-level application applying Python fundamentals and object-oriented design, versioned in Git.',
        tech: ['Python', 'Git'],
        level: 'Beginner',
        skills: ['OOP', 'Problem Solving'],
      },
      {
        name: 'Real-World Data Challenge',
        summary:
          'Work with messy, real inputs across databases, SQL, schema design, Django and the ORM — and defend the choices you made to a trainer.',
        tech: ['Django', 'PostgreSQL'],
        level: 'Intermediate',
        skills: ['Schema Design', 'ORM'],
      },
      {
        name: 'REST API with Authentication',
        summary:
          'A Django REST Framework service with serializers, viewsets, JWT authentication and published API documentation.',
        tech: ['DRF', 'JWT', 'Postman'],
        level: 'Intermediate',
        skills: ['API Design', 'Authentication'],
      },
      {
        name: 'Live Client Brief',
        summary:
          'A genuine requirement from techcadd’s delivery pipeline, scoped, built and shipped under supervision. This is the one interviewers ask about.',
        tech: ['Live work', 'Supervised'],
        level: 'Advanced',
        skills: ['Client Delivery', 'Scoping'],
      },
      {
        name: 'Portfolio Capstone',
        summary:
          'A full-stack project you specify yourself, covering DRF, JWT, API documentation, background tasks and deployment, presented as your final piece.',
        tech: ['Django', 'Celery', 'Redis'],
        level: 'Advanced',
        skills: ['System Design', 'Presentation'],
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the Full Stack Development Program in Phagwara?',
        a: 'techcadd runs the Full Stack Development Program over 3 months. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'Can I join this course straight after 12th?',
        a: 'Yes. This programme is designed for students joining directly after 12th, from any stream. There is no prior technical requirement. You start from fundamentals and build up to live project work.',
      },
      {
        q: 'Which tools and software will I learn?',
        a: 'You will work hands-on with Python, Django, DRF, PostgreSQL, Redis, Celery and the supporting toolchain used on live projects. All practice happens in the lab on licensed software, not on demo screenshots.',
      },
      {
        q: 'What is the fee for the Full Stack Development Program in Phagwara?',
        a: 'Shorter 2–3 month courses in this region typically cost ₹8,000 to ₹15,000, while comprehensive 4–6 month programmes with live projects, an internship and placement support run roughly ₹18,000 to ₹40,000. techcadd counsellors share the current fee sheet and EMI options on request, and a demo class is free.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-full-stack-development-program-in-phagwara',
      'after-12th-9-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-mern-stack-program-in-phagwara',
      'after-12th-3-month-flutter-app-development-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 3 month full stack development program in Phagwara',
      'full stack developer course after 12th Phagwara',
      'python and django training Phagwara',
      'full stack course Punjab',
      'full stack development course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------- agentic AI -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-3-month-agentic-ai-program-in-phagwara',
    label: 'Agentic AI',
    title: 'Best After 12th 3-Month Agentic AI Program in Phagwara',
    icon: 'cpu',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Three months that take you from your first line of Python to an autonomous agent running in public, with citations, guardrails and a cost-per-conversation figure behind it. No programming experience needed.',
    overview:
      'A language model answers a question. An agent decides what to do next — it plans, calls real tools, reads what came back, and repeats until the goal is met. This 3-month course teaches you to build, test and deploy these AI agents from scratch.\nThe course starts from the very basics — Python, the command line, Git, HTTP and databases — so no prior coding experience is needed. Once the foundations are clear, you move straight into agent engineering: prompting, tool calling, retrieval, memory and deployment. Every topic ends with a project you actually build.',
    demand:
      'Someone has to decide which problems need an agent, wire the tools so they cannot be misused, ground the answers in real documents, and prove the whole thing works with numbers before it touches a customer — and almost nobody in this market can do all four.',
    modules: [
      {
        title: 'Month 1 — Foundations: Python, LLM Prompting & Tool Calling',
        summary:
          'Python, Git, HTTP and SQL first, then the ReAct loop written by hand before any framework.',
        topics: [
          'Python from scratch: syntax, variables, data structures, loops, functions and classes',
          'Type hints and async/await; virtual environments with uv and pip',
          'Command line, Git and GitHub: navigation, commits, branches, pull requests and .gitignore',
          'HTTP, REST APIs, JSON, API keys and bearer tokens',
          'SQL basics with PostgreSQL; Docker and containerisation',
          'LLM fundamentals: how transformers work (intuition, no heavy maths), tokens, context windows, temperature',
          'System, user and assistant roles',
          'The four properties of an agent — goal-directedness, tool use, memory and autonomy; when NOT to use an agent',
          'Prompting: few-shot, chain-of-thought, structured output with JSON schema and Pydantic validation',
          'Tool calling: writing tool descriptions and parameter schemas; the ReAct loop built from scratch',
          'Model Context Protocol (MCP): servers, clients, resources and transports; wrapping a REST API as tools',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — RAG, Memory & Agent Frameworks',
        summary:
          'Grounding answers in real documents, carrying state across sessions, and reading what a framework does for you.',
        topics: [
          'Retrieval-Augmented Generation: embeddings, vector search, chunking strategies',
          'Document parsing for PDFs and tables',
          'Vector stores (Qdrant, Chroma, FAISS); hybrid search combining keyword and dense vectors',
          'Reranking and citation; RAG quality measurement — faithfulness and context precision',
          'When to use RAG vs fine-tuning',
          'Memory and state: short-term, long-term and episodic memory',
          'Conversation buffers, summarisation and context engineering',
          'Multi-user isolation, PII handling and privacy; state persistence and checkpointing',
          'LangGraph: nodes, edges, conditional routing, cycles and subgraphs; typed state and streaming',
          'Human-in-the-loop: approval gates, time-travel debugging, durable execution and resumability',
          'Multi-agent patterns: supervisor and worker roles, the handoff pattern, termination conditions',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Evaluation, Guardrails, Deployment & Capstone',
        summary:
          'Evidence is the deliverable — a measured eval suite, guardrails, a public deployment and a cost figure.',
        topics: [
          'Building evaluation datasets from real examples',
          'Deterministic tests vs LLM-as-judge; trajectory and tool-choice evaluation',
          'RAG metrics: faithfulness, answer relevance and context recall',
          'Regression gates in CI; tracing tokens and cost',
          'Security: prompt injection, input and output guardrails, PII filtering',
          'Refusal and escalation policies',
          'Packaging an agent as a service: streaming APIs, rate limiting and secrets management',
          'Containerisation and deployment; chat UI assembly with Streamlit',
          'Logging, alerting and monitoring; architecture diagram and demo video',
          'Capstone: an autonomous customer-support agent, financial-document analyst, recruiting agent or internal knowledge agent',
          'Deploy it publicly with an eval report, a CI gate and cost-per-conversation analysis',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Strong foundations first — Python, Git, HTTP and SQL before a single prompt',
      'Write the reason-act-observe loop by hand, so a framework is readable rather than magic',
      'Build cited RAG graded on RAGAS faithfulness and context precision against a gold set',
      'Manage memory, multi-user isolation and checkpointed state across sessions',
      'Add guardrails against prompt injection, with PII filtering and escalation policies',
      'Deploy a publicly reachable agent gated by an eval suite in CI, with a cost-per-conversation figure',
    ],
    tools: [
      'Python',
      'Git & GitHub',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Claude API & OpenAI API',
      'Pydantic & Instructor',
      'MCP SDK',
      'LangChain & LlamaIndex',
      'LangGraph',
      'Qdrant, Chroma & FAISS',
      'RAGAS & promptfoo',
      'LangSmith & Langfuse',
      'Guardrails AI & Presidio',
      'Streamlit',
      'GitHub Actions',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. There is no assumed technical knowledge and no programming prerequisite. Most students run the programme alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc, BBA or B.Tech, this is the shortest route from degree to an AI automation role. You enter placement season with a deployed agent and an evaluation report instead of a blank CV.',
      },
      {
        label: 'Career changers',
        copy: 'The weekend batch exists for people already earning. Three months is enough to become interview-ready for AI Automation Engineer and Agentic AI Developer roles without leaving your current job.',
      },
      {
        label: 'Developers and analysts',
        copy: 'If you already write code or work with data, the foundations part is revision and the pace picks up quickly. What changes your title is the part most self-taught developers skip — evaluation, guardrails and cost.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Foundations before frameworks',
        copy: 'The course starts with Python, Git, HTTP and SQL. Every agent pattern after that is something you can reason about rather than copy, because you already understand the request, the schema and the commit graph underneath it.',
      },
      {
        title: 'The loop, written by hand',
        copy: 'You build the ReAct loop from scratch before using any framework. When frameworks like LangGraph arrive later, you can read what they are doing — which is the difference between using a tool and being trapped by it.',
      },
      {
        title: 'Evidence is the deliverable',
        copy: 'Anyone can demo an agent that works once. A labelled evaluation set, a measured before-and-after and a cost-per-task number are what actually get people hired.',
      },
      {
        title: 'A ladder, not a dead end',
        copy: 'This 3-month course is the foundation of the 6-month and 9-month tracks. Nothing is removed when you extend later; the next track begins exactly where this one ends, so you never restart.',
      },
    ],
    whyNow: {
      title: 'An Agent Decides. A Chatbot Only Answers.',
      points: [
        'An agent is goal-directed — you give it an outcome rather than a script; it uses tools, reaching outside the model to APIs, databases, browsers and code.',
        'It has memory, carrying state across steps and sessions, and autonomy, running its own loop within the budgets and approval gates you set.',
        'That is why the job exists: someone has to decide which problems need an agent, wire the tools so they cannot be misused, ground the answers in real documents, and prove it works with numbers before it touches a customer.',
        'A fresher with a deployed agent and an evaluation report typically starts around ₹20,000 – ₹40,000 per month in the Phagwara, Jalandhar and Ludhiana market.',
      ],
    },
    roles: [
      'AI Automation Engineer',
      'Agentic AI Developer',
      'Solutions Engineer',
      'AI Support & Operations Associate',
      'RAG / Retrieval Engineer',
      'Freelance AI Consultant',
    ],
    roleDetails: [
      {
        role: 'AI Automation Engineer',
        copy: 'Entry level, and the most common first destination after this course. Interviews test whether you can wire tools reliably, handle failures gracefully and show a working deployed demo. Show the MCP server, the cited RAG assistant and the deployed capstone.',
      },
      {
        role: 'Agentic AI Developer',
        copy: 'Early career. Interviews test framework fluency, RAG quality debugging and human-in-the-loop design. Show the approval-gated graph agent, the extraction engine and the eval CI gate.',
      },
      {
        role: 'Solutions Engineer',
        copy: 'The role that sits between the customer and the build. You demonstrate agents, scope what is feasible and prototype it — which is exactly the shape of the six projects you build here.',
      },
      {
        role: 'AI Support & Operations Associate',
        copy: 'Day-two work on a live agent: reading traces, triaging failed tool calls, curating evaluation sets from real traffic and escalating what the guardrails caught. Every one of those skills is covered in this course.',
      },
    ],
    hiring: [
      'Product startups putting agents and assistants into their software',
      'IT services companies adding AI automation to client delivery',
      'Agencies and consultancies building internal copilots for business clients',
      'Remote roles, which are unusually available because the systems are not in the room',
    ],
    nextSteps: [
      'The 6-month Agentic AI Certificate Program',
      'The 9-month Agentic AI Diploma Program',
      'MLOps and production AI infrastructure',
      'Cloud deployment and scaling',
    ],
    industries: ['Product startups', 'IT services', 'Agencies & consulting', 'Remote / global'],
    salary: {
      role: 'AI Automation Engineer',
      summary:
        'Builds, evaluates and deploys agents that take real actions. Agent work carries more remote and freelance opportunity than most fields, since the systems are not in the room.',
      starting: '₹20,000–₹40,000/month',
      after2: '₹45,000–₹90,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — AI Automation Engineer',
          fresher: '₹20,000–₹40,000/month',
          after2: '₹45,000–₹90,000/month',
          scale: { fresher: 30000, after2: 67500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹35,000–₹60,000/month',
          after2: '₹80,000–₹1,60,000+/month',
          scale: { fresher: 47500, after2: 120000 },
        },
        {
          name: 'Remote / Freelance Agent Work',
          fresher: '₹15,000–₹35,000/month',
          after2: '₹60,000–₹1,50,000+/month',
          scale: { fresher: 25000, after2: 105000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 3-month program?',
        a: 'AI Automation Engineer, Agentic AI Developer and Solutions Engineer are the roles this course prepares you for. Those interviews test whether you can wire tools reliably, debug retrieval quality and show a working deployed demo — which is what the six projects are for.',
      },
      {
        q: 'What salary can a fresher expect in Phagwara?',
        a: 'A fresher with a deployed agent and an evaluation report typically starts around ₹20,000 – ₹40,000 per month in the Phagwara, Jalandhar and Ludhiana market, rising quickly with a second year of production experience.',
      },
      {
        q: 'Is there remote or freelance work in this field?',
        a: 'More than in most. Agent work carries strong remote and freelance opportunity because the systems are not in the room — a deployed capstone with an eval report is what converts an enquiry into a paid brief.',
      },
      {
        q: 'Which industries are hiring for agents right now?',
        a: 'Product startups putting assistants into their software, IT services companies adding AI automation to client delivery, and agencies building internal copilots for business clients. Remote roles widen that considerably.',
      },
    ],
    projects: [
      {
        name: 'Containerised API Service',
        summary:
          'A FastAPI service backed by Postgres, typed and tested, shipped in Docker with CI running on every push.',
        tech: ['Python', 'FastAPI', 'Docker', 'GitHub Actions'],
        level: 'Beginner',
        skills: ['API Development', 'Containerisation'],
      },
      {
        name: 'Document Extraction Engine',
        summary:
          'Unstructured invoices and contracts converted into schema-valid JSON with under 2% validation failure across 100 documents.',
        tech: ['Pydantic', 'Instructor', 'promptfoo'],
        level: 'Beginner',
        skills: ['Structured Output', 'Validation'],
      },
      {
        name: 'Published MCP Server',
        summary:
          'Five or more scoped tools with full schema documentation, integration tests and a hand-written ReAct loop that uses them without a framework.',
        tech: ['MCP SDK', 'FastAPI', 'Tenacity'],
        level: 'Intermediate',
        skills: ['Tool Calling', 'ReAct Loop'],
      },
      {
        name: 'Cited Compliance Copilot',
        summary:
          'A hybrid-search RAG assistant with clause-level citations, scoring 0.85+ faithfulness on a 50-question gold set.',
        tech: ['LlamaIndex', 'Qdrant', 'RAGAS'],
        level: 'Intermediate',
        skills: ['Retrieval Augmentation', 'Evaluation'],
      },
      {
        name: 'Human-in-the-Loop Approval Agent',
        summary:
          'A stateful graph agent that pauses for sign-off, streams every step, and resumes cleanly after a crash.',
        tech: ['LangGraph', 'Checkpointers', 'SSE'],
        level: 'Advanced',
        skills: ['Stateful Agents', 'Approval Gates'],
      },
      {
        name: 'Deployed Support Agent (Capstone)',
        summary:
          'A publicly reachable capstone with CRM write-back, human escalation, a CI regression gate and a cost-per-conversation figure.',
        tech: ['LangGraph', 'Streamlit', 'Railway', 'Sentry'],
        level: 'Advanced',
        skills: ['Deployment', 'Cost Analysis'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Progress by skill, not by date',
        copy: 'You advance when a deliverable passes review. A student who needs extra time on retrieval gets it; nobody is moved on just because the timetable says so.',
      },
      {
        title: 'Real model APIs, with budgets',
        copy: 'Labs run against live Claude, OpenAI and Gemini endpoints with per-student token budgets and cost dashboards — so the cost awareness is something you have felt, not just read about.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching MCP servers and LangGraph checkpointing are the people writing them for client work, which is why the failure sections cover failures that actually happen.',
      },
      {
        title: 'A ladder you can extend',
        copy: 'Finish here with a certificate and a deployed capstone, or continue into the six- and nine-month tracks later. The next track starts where this one ended — you never repeat what you have already passed.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 3-Month Agentic AI Program in Phagwara?',
        a: 'Three months, divided into three clear blocks — foundations, frameworks and deployment. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the difference between Agentic AI and a normal AI or ChatGPT course?',
        a: 'A language model answers; an agent decides. A prompting course teaches you to ask better questions. This teaches you to build software that sets its own next step, calls real tools, reads what came back and repeats until the goal is met — then to evaluate, secure, deploy and cost it.',
      },
      {
        q: 'Will I actually deploy an agent, or just build one locally?',
        a: 'You deploy. The capstone in the final month is a publicly reachable agent with a GitHub repository, an evaluation report with a CI regression gate, an architecture diagram, a five-minute demo video and a cost-per-conversation analysis.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'Six portfolio projects: a containerised API service, a document extraction engine, a published MCP server, a cited compliance copilot, a human-in-the-loop approval agent and the deployed support agent capstone. Every one can be opened, run and defended in an interview.',
      },
      {
        q: 'Can I extend to the 6-month or 9-month program later?',
        a: 'Yes, and nothing is repeated. The three tracks are nested rather than parallel — this 3-month course remains the permanent foundation, and the 6-month and 9-month tracks continue from where it ends. You never restart, and a topic you have already passed is never re-taught.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
      'after-12th-4-month-data-science-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 3 month agentic AI program in Phagwara',
      'agentic AI course after 12th Phagwara',
      'AI agents and LangGraph training Phagwara',
      'AI automation course Punjab',
      'agentic AI course with placement Phagwara',
    ],
  }),

  /* ---------------------------------------------------------- cyber security -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-3-month-cyber-security-program-in-phagwara',
    label: 'Cyber Security',
    title: 'Best After 12th 3-Month Cyber Security Program in Phagwara',
    icon: 'shield',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A fast-paced three-month programme taking you from your first Linux install to a working AI-powered security tool — networking, ethical hacking, web security, SOC and SIEM, cloud fundamentals and Python automation, with placement preparation built into the final month.',
    overview:
      'This is the three-month AI-Powered Cybersecurity programme, written for someone starting straight after 12th who wants working security skills quickly rather than the longest possible syllabus. Three months, and a set of mini projects at the end of every month. It is fast-paced by design — each month carries a full theme — and the pace is what lets you finish with a working AI security tool inside a single term.\nMonth one is cybersecurity, networking and system administration. You cover cybersecurity fundamentals — the CIA triad, security domains, types of cyber attack, career paths and cyber laws and ethics — then computer hardware and operating systems, Windows and Linux administration, user and group management and file system permissions. Networking is taught properly rather than skimmed: the OSI and TCP/IP models, IPv4 and IPv6, IP addressing, subnetting, routing and switching, DNS, DHCP, NAT, VPN and common ports and protocols. Then virtualisation with VMware Workstation and VirtualBox, installing Kali Linux and Windows Server and building your own cybersecurity lab, followed by Git and GitHub and a module on AI for cybersecurity.\nMonth two is ethical hacking, web security and security operations. Information gathering through OSINT, Google dorking, WHOIS, DNS and subdomain enumeration; vulnerability assessment with Nmap, Wireshark, Nikto, Gobuster and Nuclei; web security covering HTTP and HTTPS, cookies and sessions, APIs, the OWASP Top 10, SQL injection, XSS, CSRF, authentication and session attacks and file upload vulnerabilities; Burp Suite across Proxy, Target, Repeater, Intruder, Decoder and Comparer; then the defensive half — SOC fundamentals, security monitoring, log analysis, the incident lifecycle, SIEM fundamentals, Wazuh and Splunk basics — and a module on AI-assisted security.\nMonth three is advanced security, AI automation and placement preparation. Advanced ethical hacking with the Metasploit Framework, Hydra, password attacks, wireless security, Active Directory basics and privilege escalation concepts; cloud security across AWS and Azure fundamentals, IAM, security groups, Docker and Kubernetes security; Python security automation; then AI security automation using the OpenAI and Google Gemini APIs. The month closes with the industry capstone and a full placement module. All lab work runs on your own virtual lab, on deliberately vulnerable applications such as DVWA and OWASP Juice Shop, and on TryHackMe, Hack The Box, the PortSwigger Web Security Academy and OverTheWire — systems you are permitted to test, with a trainer supervising.',
    demand:
      'Entry-level SOC and IT security roles are among the few technical jobs still decided by whether you can build a lab, run an assessment and read a SIEM dashboard rather than by which degree you hold.',
    modules: [
      {
        title: 'Month 1 — Cybersecurity, Networking & System Administration',
        summary:
          'The ground floor, ending with your own virtualised lab — the environment every later exercise runs in.',
        topics: [
          'Cybersecurity fundamentals: the CIA triad, security domains and types of cyber attack',
          'Cybersecurity careers; cyber laws and ethics',
          'Computer hardware basics and operating systems',
          'Windows administration; Linux administration; user and group management; file system permissions',
          'Networking: the OSI and TCP/IP models, IPv4 and IPv6, IP addressing and subnetting',
          'Routing and switching, DNS, DHCP, NAT, VPN and common ports and protocols',
          'Virtualisation with VMware Workstation and VirtualBox',
          'Kali Linux and Windows Server installation; building a cybersecurity lab',
          'Git and GitHub: commands, branching, workflow and version control',
          'AI for cybersecurity: ChatGPT, Google Gemini, GitHub Copilot, prompt engineering and AI research',
          'Mini projects: home lab setup, secure Linux installation, network documentation, password policy',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Ethical Hacking, Web Security & Security Operations',
        summary:
          'Both halves in one month — offensive assessment on legal targets, and the SOC work that most short courses skip.',
        topics: [
          'Information gathering: OSINT, Google dorking, WHOIS, DNS and subdomain enumeration',
          'Vulnerability assessment with Nmap, Wireshark, Nikto, Gobuster and Nuclei',
          'Web security: HTTP and HTTPS, cookies and sessions, APIs',
          'The OWASP Top 10: SQL injection, XSS, CSRF, authentication and session attacks, file upload flaws',
          'Burp Suite: Proxy, Target, Repeater, Intruder, Decoder and Comparer',
          'Security Operations Centre: SOC fundamentals, security monitoring and log analysis',
          'The incident lifecycle; SIEM fundamentals with Wazuh and Splunk basics',
          'AI-assisted security: AI vulnerability assessment, report generation and log analysis',
          'AI threat detection and security analytics',
          'Mini projects: DVWA assessment, OWASP Juice Shop assessment, vulnerability report, AI log analyser',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Advanced Security, AI Automation & Placement Preparation',
        summary:
          'Advanced techniques, cloud, Python automation, then one AI-powered capstone and a full placement module.',
        topics: [
          'Advanced ethical hacking: the Metasploit Framework, Hydra and password attacks',
          'Wireless security, Active Directory basics and privilege escalation concepts',
          'Cloud security: AWS and Azure fundamentals, IAM and security groups',
          'Docker security and Kubernetes security',
          'Python security automation: basics, automation scripts, API automation, log parsing, report automation',
          'AI security automation with the OpenAI and Google Gemini APIs',
          'Building an AI security assistant, an AI security chatbot, AI threat intelligence and AI incident response',
          'Industry capstone: one AI-powered cybersecurity solution',
          'Placement preparation: ATS resume building, GitHub portfolio, LinkedIn optimisation, personal branding',
          'Subject-wise interview questions and technical, HR and practical mock rounds',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Build your own cybersecurity lab in month one on Kali Linux and Windows Server',
      'Run a real web application assessment on DVWA and Juice Shop end to end in Burp Suite',
      'Operate a SIEM — Wazuh and Splunk basics with log analysis and the incident lifecycle',
      'Perform network reconnaissance and vulnerability assessment, then write a professional report',
      'Automate security tasks in Python and use the OpenAI and Gemini APIs for security analysis',
      'Ship an AI-powered capstone: a SOC dashboard, vulnerability scanner, security assistant or phishing detector',
    ],
    tools: [
      'Kali Linux',
      'Windows Server',
      'VMware & VirtualBox',
      'Cisco Packet Tracer',
      'Nmap & Wireshark',
      'Burp Suite',
      'Nikto, Gobuster & Nuclei',
      'Metasploit & Hydra',
      'Wazuh & Splunk',
      'DVWA & OWASP Juice Shop',
      'AWS & Azure',
      'Docker & Kubernetes',
      'Python, Bash & PowerShell',
      'OpenAI & Gemini APIs',
      'TryHackMe & Hack The Box',
      'Git & GitHub',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. Month one begins at the CIA triad and computer hardware, and ends with your own cybersecurity lab built on VMware or VirtualBox — which is where every later exercise happens.',
      },
      {
        label: 'Students with a summer or gap term',
        copy: 'Three months fits a single vacation or the gap between school and college, and you finish it with an AI-powered capstone rather than an unfinished playlist of videos.',
      },
      {
        label: 'Degree students who want a head start',
        copy: 'If you are entering a BCA or B.Sc IT, arriving already able to run a vulnerability assessment and read a SIEM dashboard changes what your first two years look like.',
      },
      {
        label: 'Anyone testing whether security suits them',
        copy: 'Three months is a real commitment but a bounded one. If it clicks, the longer tracks continue into cloud security, digital forensics, a two-month capstone and a full placement month.',
      },
      {
        label: 'IT support staff and career switchers',
        copy: 'Weekend batches exist for people already working. If you already handle desktops or networks, month one will be familiar and you will move quickly into the hacking and SOC modules.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If TryHackMe rooms and free videos left you with scattered notes, what changes here is a structured three-month calendar and a trainer who reads the report you wrote this week.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Comprehensive fundamentals',
        copy: 'Cybersecurity concepts, Linux and Windows administration, and a full networking module — OSI and TCP/IP, subnetting, routing, DNS, DHCP, NAT, VPN and common ports.',
      },
      {
        title: 'Ethical hacking and web security',
        copy: 'OSINT and enumeration, Nmap, Wireshark, Nikto, Gobuster and Nuclei, then the OWASP Top 10 in Burp Suite — SQL injection, XSS, CSRF, session and file upload attacks.',
      },
      {
        title: 'SOC and SIEM fundamentals',
        copy: 'SOC operations, security monitoring, log analysis and the incident lifecycle, with Wazuh and Splunk basics — the defensive half most short courses leave out.',
      },
      {
        title: 'AI in cybersecurity throughout',
        copy: 'AI vulnerability assessment, report generation, log analysis, threat detection and security analytics, plus prompt engineering and AI research techniques from month one.',
      },
      {
        title: 'Python and AI security automation',
        copy: 'Automation scripts, API automation, log parsing and report automation, then the OpenAI and Gemini APIs for an AI security assistant, chatbot, threat intelligence and incident response.',
      },
      {
        title: 'Capstone, resume and mock interviews',
        copy: 'One AI-powered capstone, plus ATS resume building, a GitHub portfolio, LinkedIn optimisation, subject-wise interview questions and technical, HR and practical mock rounds.',
      },
    ],
    whyNow: {
      title: 'Three Months, a Working SOC Skillset and an AI Security Tool You Built',
      points: [
        '10+ hands-on labs, 5+ mini projects and one AI-powered capstone — on legal targets, under supervision.',
        'Entry-level SOC Analyst and IT security roles in Punjab start around ₹15,000 – ₹25,000 a month for a fresher with documented work.',
        'Those interviews test whether you can build a lab, run an assessment, read a SIEM dashboard and explain your findings — and you will have done all four.',
        'Candidates who keep building labs after the course finish well ahead of those who stop at the certificate.',
      ],
    },
    roles: [
      'SOC Analyst (L1)',
      'Junior Cybersecurity Analyst',
      'Junior Ethical Hacker',
      'Junior Penetration Tester',
      'Vulnerability Assessment Trainee',
      'IT Security Support Engineer',
      'Incident Response Trainee',
      'Cloud Security Associate',
      'AI Security Analyst (Entry Level)',
    ],
    roleDetails: [
      {
        role: 'SOC Analyst (L1)',
        copy: 'Monitor alerts, triage what matters and escalate what does not resolve. The standard first job in security, and what the SIEM and log-analysis work in month two is for.',
      },
      {
        role: 'Junior Cybersecurity Analyst',
        copy: 'General security work inside an IT team — assessments, hardening, access reviews and reporting.',
      },
      {
        role: 'Vulnerability Assessment Trainee',
        copy: 'Run scans, verify findings by hand and write them up. The role the month-two assessment report maps onto most directly.',
      },
      {
        role: 'IT Security Support Engineer',
        copy: 'Patching, access control, endpoint protection and user security. The most widely available entry role locally.',
      },
      {
        role: 'AI Security Analyst (Entry Level)',
        copy: 'A newer title, and the reason month three exists — using AI tooling for log analysis, threat detection and report generation on a real alert queue.',
      },
    ],
    hiring: [
      'IT services companies with managed security offerings',
      'Banks, NBFCs and fintech businesses with compliance requirements',
      'Managed security service providers running remote SOCs',
      'Mid-sized businesses with an internal IT team and a compliance obligation',
    ],
    nextSteps: [
      'The 6-month Cyber Security Certificate Program',
      'The 9-month Cyber Security Diploma Program',
      'CEH, Security+ or CCNA certification',
      'Cloud security and DevSecOps',
    ],
    industries: ['IT services', 'Banking & fintech', 'Managed security', 'Government & education'],
    salary: {
      role: 'SOC Analyst (L1)',
      summary:
        'Monitors and defends the systems a business runs on. Three months makes you interviewable for the junior titles; experience on a real alert queue is what moves the figure quickly.',
      starting: '₹15,000–₹25,000/month',
      after2: '₹32,000–₹60,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — SOC & IT Security',
          fresher: '₹15,000–₹25,000/month',
          after2: '₹32,000–₹60,000/month',
          scale: { fresher: 20000, after2: 46000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹25,000–₹42,000/month',
          after2: '₹50,000–₹95,000+/month',
          scale: { fresher: 33500, after2: 72500 },
        },
        {
          name: 'Remote SOC / Freelance Assessment',
          fresher: '₹12,000–₹26,000/month',
          after2: '₹40,000–₹85,000+/month',
          scale: { fresher: 19000, after2: 62500 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after three months?',
        a: 'SOC Analyst (L1), Junior Cybersecurity Analyst, Junior Ethical Hacker, Junior Penetration Tester, Vulnerability Assessment Trainee, Security Operations Engineer, IT Security Support Engineer, Incident Response Trainee, Cloud Security Associate and AI Security Analyst. These are deliberately junior titles — three months makes you interviewable for them, and experience takes you further.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with documented labs and a capstone typically starts around ₹15,000 – ₹25,000 a month locally for entry-level SOC and IT security roles. That rises quickly with a year or two on a real alert queue, and specialists in cloud security or AI security automation move well beyond it.',
      },
      {
        q: 'Is three months really enough to get hired?',
        a: 'It is enough to be interviewable for entry-level and trainee roles, because those interviews test whether you can build a lab, run an assessment, read a SIEM dashboard and explain your findings — and you will have done all four. It is not a guarantee, and candidates who keep building labs after the course finish well ahead of those who stop at the certificate.',
      },
      {
        q: 'Can I freelance with this?',
        a: 'Small vulnerability assessments and web application tests are within reach once month two is done, and month three’s reporting and automation work is what makes the deliverable look professional. A Phagwara address costs you nothing on a remote brief — but be honest with clients about your experience level.',
      },
    ],
    projects: [
      {
        name: 'Home Cybersecurity Lab Setup',
        summary:
          'Month one’s build: Kali Linux and Windows Server virtualised on VMware or VirtualBox, with a secure Linux installation, documented network and an implemented password policy.',
        tech: ['Kali', 'VMware'],
        level: 'Beginner',
        skills: ['Virtualisation', 'Lab Design'],
      },
      {
        name: 'Network Documentation & Hardening',
        summary:
          'The addressing, subnetting, DNS, DHCP and NAT from month one applied to your own lab network and written up — the document that proves you understand what you built.',
        tech: ['Networking', 'Packet Tracer'],
        level: 'Beginner',
        skills: ['Network Design', 'Documentation'],
      },
      {
        name: 'DVWA & Juice Shop Assessments',
        summary:
          'Two deliberately vulnerable applications worked end to end in Burp Suite — SQL injection, XSS, CSRF, session and file upload flaws against the OWASP Top 10.',
        tech: ['Burp Suite', 'DVWA'],
        level: 'Intermediate',
        skills: ['Web Security', 'OWASP Top 10'],
      },
      {
        name: 'Vulnerability Assessment Report',
        summary:
          'A network scanned with Nmap and Nuclei, traffic read in Wireshark, findings written up to a professional standard — with AI report generation speeding the write-up, not replacing your judgement.',
        tech: ['Nmap', 'Nuclei', 'Wireshark'],
        level: 'Intermediate',
        skills: ['Vulnerability Assessment', 'Reporting'],
      },
      {
        name: 'AI Log Analyser',
        summary:
          'Wazuh and Splunk log sources parsed and triaged with an AI-assisted analyser — the first thing you build that does a real SOC job faster than a person could.',
        tech: ['Wazuh', 'Splunk', 'Python'],
        level: 'Advanced',
        skills: ['Log Analysis', 'SIEM'],
      },
      {
        name: 'AI-Powered Capstone',
        summary:
          'One complete solution — an AI SOC dashboard, AI vulnerability scanner, AI security assistant, AI threat detection platform or AI phishing detection tool — built in Python on the OpenAI or Gemini API. This is the one interviewers ask about.',
        tech: ['Python', 'OpenAI API', 'Gemini API'],
        level: 'Advanced',
        skills: ['AI Automation', 'Security Engineering'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still do the work',
        copy: 'Your trainer is not a full-time lecturer. They handle security work for techcadd’s services arm, so the examples in class are current rather than a case study from five years ago.',
      },
      {
        title: 'A lab you actually build',
        copy: 'Month one ends with your own virtualised lab running Kali Linux and Windows Server. Every exercise after that happens in it, on DVWA and Juice Shop, or on TryHackMe, Hack The Box, PortSwigger Academy and OverTheWire — never against systems you have no permission to touch.',
      },
      {
        title: 'Honest about what three months buys',
        copy: 'We will tell you plainly whether the three-month or the nine-month track fits your goal. A student sold the wrong length is a student who does not finish.',
      },
      {
        title: 'Networking taught properly',
        copy: 'Subnetting, routing, DNS, DHCP, NAT and VPN as their own module. Skipping this is why so many short-course graduates cannot explain what a scan result means.',
      },
      {
        title: 'AI on real API keys',
        copy: 'Month three builds against the real OpenAI and Gemini APIs — an AI security assistant, a security chatbot, threat intelligence and incident response — rather than watching a recording of one.',
      },
      {
        title: 'Placement support that persists',
        copy: 'ATS resume, GitHub portfolio and LinkedIn work, subject-wise interview questions, technical, HR and practical mock rounds, then repeated drives with hiring partners across Phagwara, Jalandhar and Ludhiana.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this Cyber Security programme after 12th?',
        a: 'Three months, running as a fixed calendar: cybersecurity, networking and system administration; ethical hacking, web security and security operations; then advanced security, cloud, Python and AI automation with the capstone and placement preparation. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Is the ethical hacking part legal, and what do I practise on?',
        a: 'Everything is done on systems you are permitted to test: your own virtual lab built in month one, deliberately vulnerable applications such as DVWA and OWASP Juice Shop, and the TryHackMe, Hack The Box, PortSwigger Web Security Academy and OverTheWire platforms. Scanning or attacking systems you do not own or have written permission to test is a criminal offence — month one covers cyber laws and ethics for exactly that reason.',
      },
      {
        q: 'How is this different from the 9-month Cyber Security programme?',
        a: 'Both start from zero and both end in an AI-powered capstone, but they are different syllabuses rather than one trimmed. Three months compresses foundations, networking and system administration into month one and reaches the capstone in month three. Nine months adds digital forensics, Active Directory security in depth, DevSecOps, threat hunting and threat intelligence, a whole month of cloud security and Python AI automation, two full months on one industry capstone, and a complete month of SOC analyst preparation, SIEM practicals, aptitude and mock interviews.',
      },
      {
        q: 'Do I need to know Python first?',
        a: 'No. Python basics are taught in month three specifically for security automation — automation scripts, API automation, log parsing and report automation — and then applied immediately to the AI topics. There is no model training and no data-science prerequisite.',
      },
      {
        q: 'How many labs and projects will I build?',
        a: '10+ hands-on labs and 5+ mini projects: a home cybersecurity lab, a secure Linux installation, network documentation, a password policy implementation, a DVWA security assessment, an OWASP Juice Shop assessment, a vulnerability assessment report and an AI log analyser — plus one AI-powered capstone project.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-cyber-security-program-in-phagwara',
      'after-12th-9-month-cyber-security-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
    ],
    keywords: [
      'after 12th 3 month cyber security program in Phagwara',
      'cyber security course after 12th Phagwara',
      'ethical hacking training Phagwara',
      'SOC analyst course Punjab',
      'cyber security course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------- digital marketing -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-3-month-digital-marketing-program-in-phagwara',
    label: 'Digital Marketing (3 Months)',
    title: 'Best After 12th 3-Month Digital Marketing Program in Phagwara',
    icon: 'megaphone',
    duration: '3 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn the full paid, organic and analytics stack that brings a business customers online, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Best After 12th 3-Month Digital Marketing Program in Phagwara takes you from marketing funnels, audiences and positioning to analytics, attribution and reporting, taught on Google Ads, Meta Ads and Google Analytics. You work on live client briefs under trainer supervision, not slideware. You start from zero with no prior background, and every stage ends in a portfolio deliverable.',
    demand:
      'Every export house, showroom and clinic in this region is buying ads now, and most of them are buying them badly — that gap is the whole argument for this course.',
    modules: [
      {
        title: 'Month 1 — Foundations, Website & SEO',
        summary:
          'What marketing is trying to do, the thing every campaign points at, and how a business gets found.',
        topics: [
          'Marketing funnels, audiences and positioning',
          'Website basics, landing pages and WordPress',
          'SEO: keyword research and search intent',
          'On-page SEO: titles, structure and internal linking',
          'Technical SEO and site audits',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Paid Advertising & Social Media',
        summary:
          'Spending a budget carefully across search, display, shopping and social.',
        topics: [
          'Google Ads: search, display and shopping campaigns',
          'Campaign structure, targeting, budgets and bidding',
          'Meta Ads: campaign structure and creative testing',
          'Audiences, placements and cost per lead',
          'Social media planning and content production',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Retention, Analytics & Live Project',
        summary:
          'Keeping the customers you won, proving what worked, and a live client brief to finish.',
        topics: [
          'Email, WhatsApp and retention marketing',
          'Analytics, attribution and reporting',
          'Google Analytics 4 and Search Console in practice',
          'Building a monthly client report that gets read',
          'Live project work and placement preparation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Marketing funnels, audiences and positioning',
      'Website basics, landing pages and WordPress',
      'SEO: keywords, on-page and technical',
      'Google Ads: search, display and shopping',
      'Meta Ads: campaign structure and creative',
      'Social media planning and content',
      'Email, WhatsApp and retention marketing',
      'Analytics, attribution and reporting',
    ],
    tools: [
      'Google Ads',
      'Meta Ads Manager',
      'Google Analytics 4',
      'Google Search Console',
      'SEMrush',
      'WordPress',
      'Google Tag Manager',
      'Canva',
      'Meta Business Suite',
      'Mailchimp',
      'Looker Studio',
    ],
    audience: [
      {
        label: 'Students after 12th',
        copy: 'From any stream. You start from fundamentals with no assumed knowledge, and most students run the course alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'The fastest route from completion to employment. Enter the hiring season portfolio-ready rather than with a blank CV.',
      },
      {
        label: 'Working professionals',
        copy: 'Weekend batches are available. Career switchers typically become interview-ready within five to six months without leaving their current job.',
      },
      {
        label: 'Business owners and freelancers',
        copy: 'Owners take this course to stop outsourcing work they cannot judge. Freelancers take it to bill clients beyond Punjab, since remote work is not limited by location.',
      },
      {
        label: 'Career restarters',
        copy: 'Employment gaps matter less than demonstrable portfolio work and a documented internship letter, which is what an interviewer asks about after a break.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If free videos left you with notes but nothing built, what changes here is trainer-supervised work with a deadline attached to every module.',
      },
    ],
    whyChooseUs: [
      {
        title: 'A real gap in the local market',
        copy: 'Every export house, showroom and clinic in this region is buying ads now, and most of them are buying them badly. That gap is the whole argument for this course.',
      },
      {
        title: 'Supervision on real work',
        copy: 'What separates this from a playlist of tutorials is supervision on real work. From the second half of the course you work on live client projects with a trainer beside you, make decisions that have consequences, and correct them the following week.',
      },
      {
        title: 'Honest about the earnings',
        copy: 'A fresher who finishes with a working portfolio typically starts around ₹15,000 – ₹28,000 a month locally, and moves up quickly with experience. Nobody pays a beginner well for a certificate alone.',
      },
      {
        title: 'Every stage ends in a deliverable',
        copy: 'A fundamentals build, a real-world data challenge, a live client brief and a portfolio capstone — four pieces of work you can put in front of an interviewer.',
      },
    ],
    whyNow: {
      title: 'Digital Marketing Is the Fastest Door Into a Salary After 12th',
      points: [
        'Live client work from week one, supervised by a trainer — not slides, not simulations.',
        'Digital Marketing Executive roles in Punjab start around ₹15,000 – ₹28,000 a month for a fresher with a working portfolio.',
        'No degree is required at the entry level — agencies hire on a portfolio and a trial task.',
        'Freelancers handling multiple clients often earn more, since remote work is not limited by location.',
      ],
    },
    roles: [
      'Digital Marketing Executive',
      'Performance Marketer',
      'SEO Executive',
      'Social Media Manager',
      'PPC / Paid Ads Executive',
      'Content & Email Marketer',
      'Freelance Digital Marketer',
    ],
    roleDetails: [
      {
        role: 'Digital Marketing Executive',
        copy: 'The generalist entry role and the most common first job after this course — some search, some social, some paid, reporting to an account manager.',
      },
      {
        role: 'Performance Marketer',
        copy: 'Run paid campaigns against a budget and a cost-per-lead target. Directly measurable, which makes it the fastest role to prove yourself in.',
      },
      {
        role: 'SEO Executive',
        copy: 'Keyword research, on-page work, audits and local listings across a set of client sites.',
      },
      {
        role: 'Social Media Manager',
        copy: 'Own the calendar, the creative and the community for a handful of accounts.',
      },
      {
        role: 'Freelance Digital Marketer',
        copy: 'Manage the online presence of local businesses on retainer. Many students start with one client during the course and keep them afterwards.',
      },
    ],
    hiring: [
      'Digital marketing agencies across Phagwara, Jalandhar and Ludhiana',
      'Export houses, showrooms and clinics advertising directly',
      'E-commerce and D2C brands running advertising in-house',
      'Education, healthcare and real-estate businesses with a local customer base',
    ],
    nextSteps: [
      'The 4-month Digital Marketing Program',
      'The 6-month Digital Marketing Certificate Program',
      'The 9-month Digital Marketing Diploma Program',
      'Google Ads and analytics certification',
    ],
    industries: ['Agencies', 'E-commerce & D2C', 'Education & healthcare', 'Real estate'],
    salary: {
      role: 'Digital Marketing Executive',
      summary:
        'Plans and runs campaigns across search, social and paid. Pay tracks demonstrated results far more closely than qualifications, which is what makes it accessible straight after 12th.',
      starting: '₹15,000–₹28,000/month',
      after2: '₹30,000–₹55,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Marketing Executive',
          fresher: '₹15,000–₹28,000/month',
          after2: '₹30,000–₹55,000/month',
          scale: { fresher: 21500, after2: 42500 },
        },
        {
          name: 'Delhi / NCR — Performance Marketer',
          fresher: '₹22,000–₹35,000/month',
          after2: '₹45,000–₹80,000+/month',
          scale: { fresher: 28500, after2: 62500 },
        },
        {
          name: 'Freelance / Retainer Work',
          fresher: '₹8,000–₹22,000/month',
          after2: '₹32,000–₹85,000+/month',
          scale: { fresher: 15000, after2: 58500 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after this course?',
        a: 'Graduates typically move into roles such as Digital Marketing Executive, Performance Marketer, SEO Executive or Social Media Manager. Every export house, showroom and clinic in this region is buying ads now, and most of them are buying them badly.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'A fresher with a working portfolio typically starts around ₹15,000 – ₹28,000 per month in the local market, rising substantially within two years of experience. Freelancers handling multiple clients often earn more, since remote work is not limited by location.',
      },
      {
        q: 'Can I get a marketing job without a degree?',
        a: 'Yes — this is one of the few fields where that is genuinely true at the entry level. Agencies hire on a portfolio and a trial task. A degree helps later when you move toward manager roles, which is why most students run this alongside one.',
      },
      {
        q: 'Can I freelance while I am still studying?',
        a: 'Many students do, usually starting with one local business — a clinic, a boutique, a coaching centre — in the second half of the course. Early retainers are modest but they are real work and they go on your CV.',
      },
    ],
    projects: [
      {
        name: 'Fundamentals Build',
        summary:
          'Your first working piece, applying marketing funnels, audiences, positioning and website basics end to end rather than as isolated exercises.',
        tech: ['WordPress', 'Canva'],
        level: 'Beginner',
        skills: ['Positioning', 'Landing Pages'],
      },
      {
        name: 'SEO Audit & Ranking Plan',
        summary:
          'Audit a real local business for search, fix the on-page issues, set up its Google Business Profile and document the ranking movement.',
        tech: ['Search Console', 'SEMrush'],
        level: 'Beginner',
        skills: ['SEO Audit', 'Local Search'],
      },
      {
        name: 'Google & Meta Ad Campaign',
        summary:
          'Run real paid campaigns across search, display and social with conversion tracking in place, then optimise to a target cost per lead.',
        tech: ['Google Ads', 'Meta Ads'],
        level: 'Intermediate',
        skills: ['Campaign Structure', 'Conversion Tracking'],
      },
      {
        name: 'Real-World Data Challenge',
        summary:
          'Work with messy, real campaign inputs in Google Analytics and Search Console, and defend the choices you made to a trainer.',
        tech: ['Google Analytics', 'Search Console'],
        level: 'Intermediate',
        skills: ['Analytics', 'Attribution'],
      },
      {
        name: 'Live Client Brief',
        summary:
          'A genuine requirement from techcadd’s delivery pipeline, scoped, run and reported under supervision. This is the one interviewers ask about.',
        tech: ['Live work', 'Supervised'],
        level: 'Advanced',
        skills: ['Client Delivery', 'Reporting'],
      },
      {
        name: 'Portfolio Capstone',
        summary:
          'A campaign you specify yourself, covering email and WhatsApp retention marketing through to reporting, presented as your final piece.',
        tech: ['SEMrush', 'Looker Studio'],
        level: 'Advanced',
        skills: ['Retention Marketing', 'Presentation'],
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the 3-Month Digital Marketing Program in Phagwara?',
        a: 'techcadd runs this programme over 3 months. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'Can I join this course straight after 12th?',
        a: 'Yes. This programme is designed for students joining directly after 12th, from any stream. There is no prior technical requirement. You start from fundamentals and build up to live project work.',
      },
      {
        q: 'Which tools and software will I learn?',
        a: 'You will work hands-on with Google Ads, Meta Ads, Google Analytics, Search Console, SEMrush, WordPress and the supporting toolchain used on live projects. All practice happens in the lab on licensed software, not on demo screenshots.',
      },
      {
        q: 'How is this different from the 4-month Digital Marketing Program?',
        a: 'The four-month track has more room — deeper analytics, more time on paid advertising and a longer supervised live project. This one compresses to the essentials and reaches the live brief sooner, which suits a student with a single term or vacation to spend.',
      },
      {
        q: 'What is the fee for this programme in Phagwara?',
        a: 'Shorter 2–3 month courses in this region typically cost ₹8,000 to ₹15,000, while comprehensive 4–6 month programmes with live projects, an internship and placement support run roughly ₹18,000 to ₹40,000. techcadd counsellors share the current fee sheet and EMI options on request, and a demo class is free.',
      },
    ],
    relatedCourses: [
      'after-12th-4-month-digital-marketing-program-in-phagwara',
      'after-12th-6-month-digital-marketing-program-in-phagwara',
      'after-12th-9-month-digital-marketing-program-in-phagwara',
      'after-12th-4-month-data-analytics-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-mern-stack-program-in-phagwara',
    ],
    keywords: [
      'after 12th 3 month digital marketing program in Phagwara',
      'digital marketing course after 12th Phagwara',
      'google ads and meta ads training Phagwara',
      'SEO course Punjab',
      'digital marketing course with placement Phagwara',
    ],
  }),

  /* --------------------------------------------------------- data analytics -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-4-month-data-analytics-program-in-phagwara',
    label: 'Data Analytics',
    title: 'Best After 12th 4-Month Data Analytics Program in Phagwara',
    icon: 'chart',
    duration: '4 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A four-month course covering modern analytics from scratch — Python and SQL, advanced Excel, Power BI and Tableau, business analysis, modern data platforms and generative AI productivity, ending in one portfolio-ready enterprise capstone.',
    overview:
      'This is a four-month Data Analytics & Business Analysis course written for someone starting straight after 12th. It covers Python for data analytics, SQL, advanced Excel, Power BI, Tableau, business analysis and generative AI productivity for analysts — ending in one complete, portfolio-ready enterprise analytics solution. The whole job rather than one tool.\nMonth 1 is programming and data analytics foundations: the analytics lifecycle from descriptive through prescriptive, Python setup with VS Code and Git, and the AI productivity tools you will use throughout. Then advanced Excel for analysts with data cleaning, pivot tables and charts, XLOOKUP, INDEX-MATCH, Power Query basics and interactive dashboard design; SQL fundamentals covering database concepts, keys, SELECT, WHERE, GROUP BY, HAVING, aggregate functions and basic joins; and Python fundamentals alongside business statistics.\nMonth 2 is advanced SQL, data manipulation and visualisation — joins, CTEs, subqueries, window functions, views, query optimisation and enterprise reporting; data wrangling with NumPy and Pandas; exploratory data analysis with Matplotlib, Seaborn and Plotly; then REST APIs, JSON, BeautifulSoup web scraping and Streamlit for building interactive analytics apps.\nMonth 3 is business intelligence and modern data platforms: Power BI Desktop with Power Query transformation, star and snowflake schemas and fact and dimension tables; advanced DAX with time intelligence, running totals and executive KPI cards; Tableau with calculated fields, parameters, interactive dashboards and map visuals; and modern data platforms covering data warehouse versus data lake, Microsoft Fabric, Snowflake, ETL and ELT concepts and dbt basics.\nMonth 4 closes the course with business analysis and requirements engineering, Agile methodologies and project management, generative AI and productivity automation, then the professional portfolio and industry capstone — an end-to-end enterprise analytics solution covering requirement gathering as a BRD, SQL database querying, Python EDA, Power BI dashboards and AI-assisted executive presentations, with GitHub documentation, an ATS resume, LinkedIn optimisation and mock interviews.',
    demand:
      'MIS Executive and Reporting Analyst are the roles firms in this region hire for most often, and they are decided on Excel, SQL and Power BI — all three covered here to enterprise depth rather than as an introduction.',
    modules: [
      {
        title: 'Month 1 — Programming & Data Analytics Foundations',
        summary:
          'Excel before SQL, SQL before Python. Nothing skipped on the assumption you will pick it up later.',
        topics: [
          'The data analytics lifecycle: descriptive to prescriptive analytics',
          'Python setup, VS Code and Git/GitHub',
          'AI productivity tools: ChatGPT, GitHub Copilot and Gemini',
          'Advanced Excel: data cleaning, pivot tables and pivot charts',
          'XLOOKUP, INDEX-MATCH, Power Query basics and interactive dashboard design',
          'SQL fundamentals: database concepts, tables, primary and foreign keys',
          'SELECT, WHERE, GROUP BY, HAVING, aggregate functions and basic joins',
          'Python fundamentals: variables, loops, functions, OOP basics and exception handling',
          'Business statistics: mean, median, standard deviation, correlation, probability and outliers',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Advanced SQL, Data Manipulation & Visualization',
        summary:
          'SQL to enterprise depth, then the Python data stack and the charts that show what is there.',
        topics: [
          'Advanced SQL: INNER, LEFT and RIGHT joins, CTEs and subqueries',
          'Window functions, views, query optimisation and enterprise reporting',
          'Data wrangling: NumPy arrays and Pandas DataFrames',
          'CSV and Excel ingestion, filtering, missing value handling, GroupBy, merging',
          'Feature engineering and outlier detection',
          'Exploratory data analysis with Matplotlib, Seaborn and Plotly interactive charts',
          'Business trend analysis',
          'REST APIs, JSON and BeautifulSoup web scraping',
          'Streamlit basics and interactive analytics app building',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Business Intelligence & Modern Data Platforms',
        summary:
          'Both BI tools, properly — plus the platform vocabulary that appears in every analyst job listing.',
        topics: [
          'Power BI Desktop: data ingestion and Power Query transformation',
          'Data modelling: star schema, snowflake schema, fact and dimension tables',
          'Advanced DAX: calculated columns, measures and time intelligence',
          'Running totals, executive KPI cards and dynamic reporting',
          'Tableau: interface, calculated fields and parameters',
          'Interactive dashboards, map visuals and storytelling best practices',
          'Modern data platforms: data warehouse vs data lake',
          'Microsoft Fabric, a Snowflake overview, ETL and ELT concepts',
          'dbt basics and API integration',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Business Analysis, AI Automation & Capstone',
        summary:
          'The business analyst half most fast-track courses omit, then one enterprise capstone.',
        topics: [
          'Business analysis and requirements engineering: requirement gathering and stakeholder analysis',
          'SWOT and gap analysis; BRD, FRD and SRS documentation',
          'Agile and Scrum: user stories, acceptance criteria and sprint planning',
          'Jira and Confluence',
          'Generative AI for analysts and responsible AI',
          'Prompt engineering for code and SQL generation; automated reporting',
          'Professional portfolio and industry capstone: an end-to-end enterprise analytics solution',
          'GitHub documentation, ATS resume building, LinkedIn optimisation and mock interviews',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Build interactive Excel dashboards early — cleaning, pivots, XLOOKUP and Power Query',
      'Write SQL to enterprise depth: CTEs, subqueries, window functions, views and optimisation',
      'Wrangle and explore real data with NumPy, Pandas, Matplotlib, Seaborn and Plotly',
      'Model and build dashboards in both Power BI (with advanced DAX) and Tableau',
      'Write requirements as a BRD and FRD and run them through Agile in Jira',
      'Deliver an enterprise capstone documented on GitHub with an AI-assisted executive presentation',
    ],
    tools: [
      'Python (NumPy & Pandas)',
      'Microsoft Excel & Power Query',
      'MySQL & PostgreSQL',
      'Matplotlib, Seaborn & Plotly',
      'Streamlit',
      'BeautifulSoup & REST APIs',
      'Power BI & DAX',
      'Tableau',
      'Jira & Confluence',
      'Microsoft Fabric & Snowflake',
      'dbt',
      'ChatGPT, Copilot & Gemini',
      'Git & GitHub',
      'VS Code',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. The course starts with the analytics lifecycle and setting up your tools, then moves to Excel, which most students have seen before. Python arrives once you know what you are automating.',
      },
      {
        label: 'Commerce and B.Com students',
        copy: 'This is the closest technical track to a commerce background. Finance, sales and HR reporting run through every month, and the business analysis half is written in the language of requirements and process rather than of algorithms.',
      },
      {
        label: 'Students with a term to spare',
        copy: 'Four months fits a long vacation or the gap between school and college, and you finish it with an enterprise capstone on GitHub rather than an unfinished playlist.',
      },
      {
        label: 'Anyone aiming at an office analyst role',
        copy: 'MIS Executive and Reporting Analyst are the roles local firms hire for most often, and they are decided on Excel, SQL and Power BI — all three covered to enterprise depth here.',
      },
      {
        label: 'Career switchers and entrepreneurs',
        copy: 'Weekend batches exist for people already working. Owners take this to stop guessing at their own numbers; switchers take it because analytics is the widest office-side entry point into IT work in Punjab.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If tutorials left you able to follow along but not to start from a blank file, what changes here is a trainer reviewing your work each week and a capstone with a deadline attached.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Python for analytics',
        copy: 'Python fundamentals, Pandas, NumPy and automation built for modern data analysis — variables, loops, functions, OOP basics and exception handling, then real data wrangling.',
      },
      {
        title: 'Advanced SQL and Excel',
        copy: 'Enterprise querying with joins, CTEs, subqueries, window functions, views and query optimisation, plus Power Query, DAX and complex formulas.',
      },
      {
        title: 'Business intelligence in both tools',
        copy: 'Interactive dashboard building and storytelling in Power BI and Tableau — star and snowflake schemas, DAX time intelligence, KPI cards, map visuals and parameters.',
      },
      {
        title: 'Business analysis included',
        copy: 'Requirement gathering, BRD and FRD creation, SRS documentation, Agile and Scrum, user stories, acceptance criteria, sprint planning, Jira and Confluence.',
      },
      {
        title: 'Modern data platforms',
        copy: 'Data warehousing fundamentals, Microsoft Fabric, a Snowflake overview, ETL and ELT workflows, dbt basics and API integration.',
      },
      {
        title: 'AI productivity and a capstone',
        copy: 'Prompt engineering with ChatGPT, GitHub Copilot and Gemini for automated reporting — then one complete, portfolio-ready enterprise analytics solution.',
      },
    ],
    whyNow: {
      title: 'The Whole Analyst Job, in Four Months',
      points: [
        'Excel and SQL through Power BI, Tableau, BRD/FRD and generative AI — four months ending in one portfolio-ready enterprise analytics solution.',
        'Fresher Data Analyst, MIS and Reporting Analyst roles in Punjab start around ₹16,000 – ₹28,000 a month for someone with dashboards they can show.',
        'Analytics is the widest office-side entry point into IT work in this region, and it exists in almost every industry.',
        'Analysts who add the business analyst title or the Fabric and Snowflake platform skills move well beyond the entry band.',
      ],
    },
    roles: [
      'Data Analyst',
      'Business Analyst',
      'BI Developer',
      'Reporting Analyst',
      'MIS Executive',
      'Analytics Engineer',
      'Product Analyst',
      'Marketing / Financial Analyst',
      'AI-Powered Data Analyst',
    ],
    roleDetails: [
      {
        role: 'Data Analyst',
        copy: 'Answer business questions with data and report the answer clearly. The core target role of the programme.',
      },
      {
        role: 'MIS Executive / Reporting Analyst',
        copy: 'Straight after 12th these are usually the first step, and they are decided on Excel, SQL and Power BI — the three things month one to three cover to depth.',
      },
      {
        role: 'Business Analyst',
        copy: 'Opens once you have shipped requirements work. Month four’s BRD, FRD and Agile material is what makes this title reachable.',
      },
      {
        role: 'BI Developer',
        copy: 'Build the data models and dashboards a management team runs on, in Power BI or Tableau.',
      },
      {
        role: 'AI-Powered Data Analyst',
        copy: 'A newer title — an analyst who uses generative AI for SQL generation, automated reporting and executive summaries, which month four covers directly.',
      },
    ],
    hiring: [
      'IT and analytics companies across Mohali, Jalandhar and Ludhiana',
      'Manufacturing and retail businesses using data for forecasting and stock',
      'Banking, insurance and fintech reporting teams',
      'Any mid-sized business with an MIS or reporting function',
    ],
    nextSteps: [
      'The 6-month Data Analytics Certificate Program',
      'Data science and machine learning',
      'Data engineering and modern platforms',
      'Power BI or Tableau certification',
    ],
    industries: ['Analytics & IT', 'Manufacturing & retail', 'Banking & fintech', 'Healthcare'],
    salary: {
      role: 'Data Analyst',
      summary:
        'Turns collected data into decisions a business can act on. One of the broadest job markets available, because almost every industry now needs someone doing it.',
      starting: '₹16,000–₹28,000/month',
      after2: '₹32,000–₹60,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Data / MIS Analyst',
          fresher: '₹16,000–₹28,000/month',
          after2: '₹32,000–₹60,000/month',
          scale: { fresher: 22000, after2: 46000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹28,000–₹48,000/month',
          after2: '₹60,000–₹1,10,000+/month',
          scale: { fresher: 38000, after2: 85000 },
        },
        {
          name: 'Remote / Freelance Analytics',
          fresher: '₹12,000–₹28,000/month',
          after2: '₹40,000–₹90,000+/month',
          scale: { fresher: 20000, after2: 65000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'Data Analyst, Business Analyst, BI Developer, Reporting Analyst, Analytics Engineer, Product Analyst, Marketing or Financial Analyst and AI-Powered Data Analyst. Straight after 12th, MIS Executive and Reporting Analyst are usually the first step, with Business Analyst opening once you have shipped requirements work.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with a portfolio of dashboards typically starts around ₹16,000 – ₹28,000 a month in the local market. That rises quickly with experience, and analysts who add the business analyst title or the Fabric and Snowflake platform skills move well beyond it.',
      },
      {
        q: 'Is this a data analytics course or a business analyst course?',
        a: 'Both, deliberately. Months one to three are analytics and BI; month four carries requirement gathering, stakeholder and gap analysis, BRD, FRD and SRS documentation, and Agile and Scrum with user stories and sprint planning in Jira. It is why graduates can apply for either title.',
      },
      {
        q: 'Which industries hire analysts around here?',
        a: 'IT and analytics companies, manufacturing and retail businesses using data for forecasting and stock, banking and insurance reporting teams, and any mid-sized business with an MIS function. Remote work widens it further.',
      },
    ],
    projects: [
      {
        name: 'Interactive Excel Dashboard',
        summary:
          'Month one’s build: cleaned data, pivot tables and charts, XLOOKUP and Power Query producing a dashboard a manager can actually use.',
        tech: ['Excel', 'Power Query'],
        level: 'Beginner',
        skills: ['Data Cleaning', 'Dashboard Design'],
      },
      {
        name: 'Enterprise SQL Reporting',
        summary:
          'A reporting set built with joins, CTEs, subqueries, window functions and views, then optimised for query performance.',
        tech: ['SQL', 'PostgreSQL'],
        level: 'Intermediate',
        skills: ['Advanced SQL', 'Query Optimisation'],
      },
      {
        name: 'EDA & Business Trend Analysis',
        summary:
          'A messy dataset taken from raw to conclusions — cleaning decisions documented, outliers justified, trends visualised.',
        tech: ['Pandas', 'Plotly'],
        level: 'Intermediate',
        skills: ['EDA', 'Visualisation'],
      },
      {
        name: 'Interactive Analytics App',
        summary:
          'A Streamlit application pulling live data from REST APIs and a scraper, letting a user explore it themselves.',
        tech: ['Streamlit', 'APIs', 'BeautifulSoup'],
        level: 'Intermediate',
        skills: ['App Building', 'Data Ingestion'],
      },
      {
        name: 'Executive BI Dashboard',
        summary:
          'A star-schema model with advanced DAX time intelligence and executive KPI cards in Power BI, plus a Tableau story with parameters and map visuals.',
        tech: ['Power BI', 'DAX', 'Tableau'],
        level: 'Advanced',
        skills: ['Data Modelling', 'BI Storytelling'],
      },
      {
        name: 'Enterprise Analytics Capstone',
        summary:
          'The full solution: requirement gathering as a BRD, SQL database querying, Python EDA, Power BI dashboards and an AI-assisted executive presentation, documented on GitHub. This is the one interviewers ask about.',
        tech: ['BRD', 'SQL', 'Power BI', 'Python'],
        level: 'Advanced',
        skills: ['End-to-End Delivery', 'Requirements'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still do the work',
        copy: 'Your trainer is not a full-time lecturer. They deliver reporting and analytics work for techcadd’s services arm, so the dashboards in class come from real business questions rather than a sample dataset.',
      },
      {
        title: 'Written for a school leaver',
        copy: 'The course starts at the analytics lifecycle and tool setup. Excel comes before SQL, SQL before Python, and nothing is skipped on the assumption you will pick it up later.',
      },
      {
        title: 'Analyst and business analyst in one programme',
        copy: 'Month four carries requirement gathering, BRD and FRD writing and Agile in Jira — the half of the job most fast-track analytics courses leave out entirely.',
      },
      {
        title: 'Both BI tools, not just one',
        copy: 'Power BI with Power Query, data modelling and advanced DAX, and Tableau with parameters, maps and storytelling. Employers ask for one or the other; you arrive knowing both.',
      },
      {
        title: 'Honest about what a fast track buys',
        copy: 'We will tell you plainly whether the four-month or the six-month track fits your goal. A student sold the wrong length is a student who does not finish.',
      },
      {
        title: 'A placement cell that persists',
        copy: 'ATS resume building, GitHub documentation, LinkedIn optimisation and mock interviews, then repeated drives with hiring partners across Phagwara, Jalandhar and Ludhiana.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this Data Analytics programme after 12th?',
        a: 'Four months: Month 1 covers programming and data analytics foundations, Month 2 is advanced SQL, data manipulation and visualisation, Month 3 is business intelligence and modern data platforms, and Month 4 is business analysis, AI productivity and the capstone. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Can I join straight after 12th with no coding background?',
        a: 'Yes — that is who it is written for. You start with the analytics lifecycle and setting up your tools, then Excel, then SQL, and Python comes only after that. The ramp is deliberate: you learn what you are automating before you learn to automate it.',
      },
      {
        q: 'Does my stream matter — arts, commerce or non-medical?',
        a: 'No, and commerce students often do particularly well here. Nothing requires school physics or higher mathematics; the business statistics are taught at the depth business reporting actually needs.',
      },
      {
        q: 'How is this different from the 6-month Data Analytics programme?',
        a: 'Both cover analytics and business analysis, but the six-month certificate has more room: a lab every single week across 24 weeks, six mini projects rather than one capstone, business statistics as its own dedicated week, BPMN process mapping in Lucidchart and Figma, Apache Airflow, machine learning for analysts, and a full placement preparation month. This four-month track compresses to the essentials and reaches the capstone sooner.',
      },
      {
        q: 'What exactly is the capstone project?',
        a: 'An end-to-end enterprise analytics solution built in month four: requirement gathering documented as a BRD, SQL database querying, Python exploratory analysis, Power BI dashboards and AI-assisted executive presentations, delivered with GitHub documentation for your professional portfolio.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-data-analytics-program-in-phagwara',
      'after-12th-4-month-data-science-program-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
      'after-12th-3-month-digital-marketing-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
    ],
    keywords: [
      'after 12th 4 month data analytics program in Phagwara',
      'data analytics course after 12th Phagwara',
      'power bi and tableau training Phagwara',
      'business analyst course Punjab',
      'data analytics course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------ digital marketing (4 mo) -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-4-month-digital-marketing-program-in-phagwara',
    label: 'Digital Marketing (4 Months)',
    title: 'Best After 12th 4-Month Digital Marketing Program in Phagwara',
    icon: 'trending',
    duration: '4 Months',
    level: 'Beginner to Full Search Marketer',
    summary:
      'Own every source of traffic on Google — rank organically, buy intelligently, and prove results with data. Four months covering both search engines plus a Meta retargeting layer, finishing with 14 globally recognised certifications and a 30-day growth sprint on a live business.',
    overview:
      'techcadd’s complete search marketer programme: four months, 165 to 175 hours of classroom and supervised lab time, 14 certification exams, 6 portfolio projects and a 30-day integrated growth sprint. The premise is simple — a business gets traffic from Google two ways, by ranking for it and by buying it, and the people who understand both are the ones agencies hire to run the whole search picture rather than half of it. On top of the two Google engines sits a Meta retargeting layer and a full measurement stack, so nothing you do goes unproven.\nMonths one and two are the organic engine, and they are unusually complete for a four-month course. You begin with funnel architecture, buyer personas, competitor teardowns, channel-mix planning and the metrics language of the job — CPM, CPC, CTR, CPL, CAC, AOV, LTV, ROAS, ROI — and a one-page strategy document for a live business. Then keyword research and search intent: seed discovery, competitor gap analysis, intent classification, keyword mapping to avoid cannibalisation, and a 100-keyword master sheet with a content plan. On-page SEO follows across 14 hours, then technical SEO across another 14 — crawl budget, canonicals, hreflang, Core Web Vitals, structured data, redirects and a prioritised remediation report. Month two adds off-page link building and digital PR, local SEO and Google Business Profile, and content marketing and conversion copywriting, with the mid-term practical — a timed live SEO audit — at the end of month two.\nMonth three is the paid engine, and it is the whole of Google Ads rather than a search-only sample: account architecture, auction mechanics, Ad Rank and Quality Score, match types, the search terms report and negative keyword strategy, Responsive Search Ads, the Display Network, landing-page relevance, bidding foundations and a daily optimisation routine — then Shopping, Performance Max and YouTube, with Merchant Center feeds, PMax asset groups and audience signals.\nMonth four is the social layer, the measurement layer and the sprint: Meta Business Manager, the Pixel via Google Tag Manager, the Conversions API, audience strategy, creative testing frameworks and scaling; then GA4, Google Tag Manager and Looker Studio; and the 30-day integrated growth sprint on a real partner business. The programme closes on media buying economics — break-even ROAS, attribution, blended versus platform ROAS — client reporting, portfolio and viva.',
    demand:
      'Most agency briefs outside the largest firms expect one person to handle SEO and PPC together, and almost nobody applying can do both — which is exactly the gap this four months is built around.',
    modules: [
      {
        title: 'Month 1 — Strategy & the Organic Foundation',
        summary:
          'Funnels and metrics first, then keyword strategy and the on-page and technical work that follows from it.',
        topics: [
          'Marketing vs digital marketing and the 7P framework; customer journey mapping',
          'TOFU/MOFU/BOFU offer design; buyer persona research and competitor teardown',
          'Channel-mix planning across organic, paid, owned and earned',
          'The metrics language: CPM, CPC, CTR, CPL, CAC, AOV, LTV, ROAS and ROI',
          'Keyword research: seed discovery, competitor gap analysis and topic clustering',
          'Intent classification; volume, KD, CPC and business-value scoring',
          'Keyword mapping to URLs to avoid cannibalisation; a 100-keyword master sheet',
          'On-page SEO: title tags, metas, URL structure and heading hierarchy',
          'Entity coverage, semantic keywords, internal linking and topical authority',
          'Image SEO, E-E-A-T signals, content refresh and featured snippet optimisation',
          'Technical SEO part 1: crawl budget, robots.txt, XML sitemaps and indexation control',
          'Canonical tags, pagination, hreflang and duplicate content resolution',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Off-Page, Local, Content & the Mid-Term',
        summary:
          'Authority, the map pack and copy that converts — ending in a timed live audit.',
        topics: [
          'Technical SEO part 2: Core Web Vitals and mobile-first indexing diagnostics',
          'Structured data implementation and validation; HTTPS, redirects and 404 strategy',
          'Log-file thinking, JavaScript rendering and common CMS pitfalls',
          'A full technical audit written up as a prioritised remediation report',
          'Off-page SEO: authority, relevance, anchor distribution and follow vs nofollow',
          'White-hat acquisition: guest posting, resource pages, broken-link building and HARO',
          'Competitor backlink gap analysis, outreach sequences and the disavow workflow',
          'Local SEO: relevance, distance and prominence; Google Business Profile setup',
          'Review generation, response templates, citations and NAP consistency',
          'Local landing pages, location schema and map-pack rank tracking',
          'Content marketing: pillar-cluster strategy and editorial calendars',
          'Conversion copywriting with AIDA, PAS, BAB, 4Ps and FAB; headline engineering',
          'Mid-term practical: a timed live SEO audit',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — The Whole of Google Ads',
        summary:
          'Search, Display, Shopping, Performance Max and YouTube across 30 hours — not a search-only sample.',
        topics: [
          'Account architecture: account, campaign, ad group, keyword and ad',
          'Auction mechanics, Ad Rank and how to actually improve Quality Score',
          'Match types, the search terms report and negative keyword strategy',
          'Responsive Search Ads: ad strength, pinning and asset strategy',
          'The Display Network: placements, topics, audiences and remarketing lists',
          'Landing-page relevance and conversion action setup',
          'Bidding: manual CPC, Maximise Clicks, Target CPA and Target ROAS',
          'A daily and weekly optimisation routine with an account hygiene checklist',
          'Merchant Center setup, product feed rules and disapproval troubleshooting',
          'Standard Shopping structure, priority and bidding',
          'Performance Max asset groups, audience signals, listing groups and brand exclusions',
          'PMax reporting limits and extracting insight through scripts and channel splits',
          'YouTube and video campaigns: formats, targeting, sequencing and creative rules',
          'Demand Gen, smart bidding portfolios, bid adjustments and scaling logic',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Meta, Measurement & the Growth Sprint',
        summary:
          'The social layer, the measurement stack, and 30 days running both engines on a real business.',
        topics: [
          'Meta Business Manager assets, roles, permissions and payment setup',
          'Ad account structure, campaign objectives and CBO vs ABO budget hierarchy',
          'Pixel installation via Google Tag Manager; the Conversions API and event match quality',
          'Aggregated Event Measurement, domain verification and ad policy recovery',
          'Audience strategy: broad vs interest, custom audiences, lookalikes and exclusions',
          'Retargeting funnels; creative testing frameworks with hypotheses and kill rules',
          'Hook rate, hold rate, CTR, CPM and CPA diagnostics',
          'Advantage+ Shopping, Dynamic Product Ads and click-to-WhatsApp funnels',
          'GA4: the events and parameters data model, property setup and key events',
          'Google Tag Manager: containers, tags, triggers, variables and dataLayer basics',
          'Explorations, audience building, and Looker Studio dashboards blending every source',
          'Media buying economics: CAC, contribution margin, break-even ROAS and payback',
          'Attribution models, blended vs platform ROAS and client reporting packs',
          'The 30-day integrated growth sprint, portfolio and final viva',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Run a ranked site and a live ad account on the same business, and explain how the two interact',
      'Deliver a technical audit with the fixes actually implemented and re-measured',
      'Build the whole of Google Ads — Search, Display, Shopping, Performance Max and YouTube',
      'Install the Meta Pixel and Conversions API and build a retargeting funnel on top',
      'Blend Search Console, GA4, Google Ads and Meta into one client-ready Looker Studio dashboard',
      'Complete a documented 30-day growth sprint and defend it in a board-style presentation',
    ],
    tools: [
      'Google Ads',
      'Google Search Console',
      'Google Analytics 4',
      'Google Tag Manager',
      'Looker Studio',
      'Google Merchant Center',
      'Google Business Profile',
      'Meta Ads Manager',
      'Meta Business Suite',
      'SEMrush',
      'Ahrefs',
      'Screaming Frog',
      'WordPress',
      'Microsoft Advertising',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream, no marketing background. The course begins at what a funnel is and what the metrics mean, and students from commerce, arts, science and engineering backgrounds all complete it.',
      },
      {
        label: 'Anyone targeting an agency job',
        copy: 'Written for the roles where one person is expected to handle SEO and PPC together — which is most agency briefs outside the largest firms, and nearly every in-house team of one.',
      },
      {
        label: 'Freelancers selling a complete traffic package',
        copy: 'Rank a client’s site and run their ads on the same account, and you sell one retainer instead of losing half the work to whoever does the other side. Technical audits alone are sold as standalone projects.',
      },
      {
        label: 'Students who want the whole search picture',
        copy: 'Not a specialisation. If you would rather go narrow and start earning faster, the three-month track gets you there sooner; this one is for people who want to own both engines.',
      },
      {
        label: 'Career changers and working professionals',
        copy: 'Morning, afternoon, evening and weekend batches all run, classes are 1.5 to 2 hours a day, five to six days a week, and missed sessions are repeated with another batch.',
      },
      {
        label: 'Students who want verified credentials',
        copy: '14 exams, 13 of them free, each mapped into the topic before it and attempted in a supervised lab slot, with every badge added to your LinkedIn and CV with its verification link.',
      },
    ],
    whyChooseUs: [
      {
        title: '14 certification exams, 13 of them free',
        copy: 'Across Google, HubSpot, SEMrush, Ahrefs, Meta and Microsoft — each one’s published topic list mapped into the course content before it, so the class is the syllabus.',
      },
      {
        title: 'Both traffic engines on one business',
        copy: 'A ranked site and a live ad account on the same client, so you can talk in an interview about how the two interact rather than about one in isolation.',
      },
      {
        title: 'The full technical SEO block',
        copy: 'Fourteen hours on crawl budget, canonicals, hreflang, Core Web Vitals, structured data and log-file thinking, ending in a prioritised remediation report — the deliverable agencies bill separately.',
      },
      {
        title: 'The whole of Google Ads, not just Search',
        copy: 'Search, Display, Shopping, Performance Max and YouTube across 30 hours, with Merchant Center feeds and PMax asset groups — the two things agencies screen for specifically.',
      },
      {
        title: 'A blended measurement dashboard',
        copy: 'One Looker Studio report combining Search Console, GA4, Google Ads and Meta Ads with channel-level ROI — the thing every client review actually opens with.',
      },
      {
        title: 'A 30-day growth sprint, mentor-reviewed weekly',
        copy: 'Organic and paid run together on one real business for 30 days, with a dated optimisation diary and a board-style presentation at the end.',
      },
    ],
    whyNow: {
      title: 'Certified — And Actually Able to Do the Work',
      points: [
        '14 global certifications, 6 portfolio projects and a 30-day growth sprint run on a real business account.',
        'Three institute certificates that say exactly what you did — Course Completion, Project Completion and a Live Growth Sprint Certificate.',
        'Agencies screen specifically for Shopping feeds and Performance Max asset groups, and almost no fresher can show either.',
        'Search Marketing Executive roles covering both SEO and PPC start around ₹3.0 – 5.0 LPA for a fresher in North India.',
      ],
    },
    roles: [
      'Digital Marketing Executive',
      'Search Marketing Executive (SEO + PPC)',
      'SEO Specialist',
      'Performance Marketing Executive',
      'PPC / Google Ads Specialist',
      'Analytics & Reporting Executive',
      'Freelance Search Consultant',
    ],
    roleDetails: [
      {
        role: 'Search Marketing Executive (SEO + PPC)',
        copy: 'The role this course is built for — owning both traffic engines on the same account. Indicative fresher range in North India: ₹3.0 – 5.0 LPA.',
      },
      {
        role: 'Digital Marketing Executive',
        copy: 'The generalist entry title, covering a bit of everything under an account manager. Indicative fresher range: ₹2.5 – 4.2 LPA.',
      },
      {
        role: 'SEO Specialist',
        copy: 'Organic only, in depth — audits, technical fixes, content strategy and link acquisition. Indicative fresher range: ₹2.8 – 4.5 LPA.',
      },
      {
        role: 'Performance Marketing Executive',
        copy: 'Paid only, judged on cost per acquisition and ROAS. Indicative fresher range: ₹2.8 – 4.8 LPA.',
      },
      {
        role: 'Freelance Search Consultant',
        copy: 'Retainers covering both engines for local businesses — indicatively ₹10,000 – ₹30,000 per client per month, with technical audits sold as standalone projects.',
      },
    ],
    hiring: [
      'Digital and search marketing agencies across Punjab, Chandigarh and Delhi NCR',
      'E-commerce businesses running Shopping and Performance Max in-house',
      'In-house marketing teams of one, where SEO and PPC sit with the same person',
      'Remote roles and freelance retainers, which this skillset serves particularly well',
    ],
    nextSteps: [
      'The 6-month Digital Marketing Certificate Program',
      'The 9-month Digital Marketing Diploma Program',
      'Google Ads and Analytics certification renewals',
      'Conversion rate optimisation and e-commerce',
    ],
    industries: ['Agencies', 'E-commerce', 'In-house marketing', 'Freelance / remote'],
    salary: {
      role: 'Search Marketing Executive',
      summary:
        'Owns both organic and paid search for a business. These are market observations rather than guarantees — actual offers vary by city, company, portfolio strength and interview performance.',
      starting: '₹3.0–5.0 LPA',
      after2: '₹6.0–10.0 LPA',
      markets: [
        {
          name: 'Punjab — Search Marketing Executive',
          fresher: '₹3.0–5.0 LPA',
          after2: '₹6.0–10.0 LPA',
          scale: { fresher: 4, after2: 8 },
        },
        {
          name: 'Delhi NCR / Chandigarh',
          fresher: '₹3.6–6.0 LPA',
          after2: '₹8.0–14.0 LPA',
          scale: { fresher: 4.8, after2: 11 },
        },
        {
          name: 'Freelance Search Consulting',
          fresher: '₹10,000–₹30,000 per client/month',
          after2: '₹40,000–₹1,20,000+/month',
          scale: { fresher: 2.4, after2: 9.6 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What roles does this programme target, and what do they pay?',
        a: 'Digital Marketing Executive at roughly ₹2.5 – 4.2 LPA, Search Marketing Executive covering SEO and PPC at ₹3.0 – 5.0 LPA, SEO Specialist at ₹2.8 – 4.5 LPA and Performance Marketing Executive at ₹2.8 – 4.8 LPA — indicative fresher ranges for North India. These are market observations, not guarantees.',
      },
      {
        q: 'Can I freelance with this skillset?',
        a: 'It is one of the better fields for it, and the breadth is the advantage — rank a client’s site and run their ads on the same account and you sell one retainer instead of half. Indicatively ₹10,000 – ₹30,000 per client per month, with technical audits sold as standalone projects.',
      },
      {
        q: 'Do the certifications actually help me get hired?',
        a: 'They get you past the first filter and they are verifiable, which matters when you have no work history. What gets you the offer is the live ad account, the implemented audit and the 30-day sprint — the certifications sit alongside those rather than instead of them.',
      },
      {
        q: 'Where do these jobs exist?',
        a: 'Agencies across Punjab, Chandigarh and Delhi NCR, e-commerce businesses running Shopping and PMax in-house, and in-house teams of one where both engines sit with the same person. Remote roles are common in this field.',
      },
    ],
    projects: [
      {
        name: 'P1 — Search Strategy Document',
        summary:
          'A combined organic and paid keyword strategy for one business, splitting keywords by intent, cost and time-to-result — the argument for what you rank for and what you buy.',
        tech: ['SEMrush', 'Strategy deck'],
        level: 'Beginner',
        skills: ['Keyword Strategy', 'Channel Planning'],
      },
      {
        name: 'P2 — On-Page & Technical Overhaul',
        summary:
          'Take a live site, run the audit, implement the on-page fixes, deploy schema, then re-measure Core Web Vitals and index coverage — a before-and-after audit with the fixes actually in place.',
        tech: ['Search Console', 'Screaming Frog'],
        level: 'Intermediate',
        skills: ['Technical SEO', 'Remediation'],
      },
      {
        name: 'P3 — Google Ads Full Build',
        summary:
          'Search plus Display plus one Performance Max campaign with a Merchant Center feed, full conversion tracking and a negative keyword architecture, delivered as a live account with an optimisation log.',
        tech: ['Google Ads', 'Merchant Center'],
        level: 'Intermediate',
        skills: ['Campaign Architecture', 'Bidding'],
      },
      {
        name: 'P4 — Meta Retargeting Layer',
        summary:
          'A Meta retargeting funnel built on top of the organic and search traffic, with Pixel and Conversions API in place and audience exclusions set properly.',
        tech: ['Meta Ads', 'Conversions API'],
        level: 'Advanced',
        skills: ['Retargeting', 'Event Tracking'],
      },
      {
        name: 'P5 — Unified Reporting Dashboard',
        summary:
          'GA4, Google Ads, Meta Ads and Search Console blended into one Looker Studio dashboard with channel-level ROI, delivered client-ready and live.',
        tech: ['Looker Studio', 'GA4', 'GTM'],
        level: 'Advanced',
        skills: ['Measurement', 'Client Reporting'],
      },
      {
        name: 'P6 — 30-Day Integrated Growth Sprint',
        summary:
          'Organic and paid run together on one real partner business for 30 days, reviewed weekly by a mentor — brief and budget split, then builds and tracking, then launch with the rank baseline locked, daily optimisation, and a board-style presentation at the end.',
        tech: ['Live business', 'Blended dashboard'],
        level: 'Advanced',
        skills: ['Growth Strategy', 'Presentation'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Exams are built into the timetable',
        copy: 'Each exam’s published topic list is mapped into the course content before it, so you are not studying separately — the class content is the syllabus. Attempts happen in scheduled supervised lab slots.',
      },
      {
        title: 'Hands-on before theory',
        copy: 'You build the thing before you read about it. Students who have actually done the task answer scenario questions correctly; students who only read about it do not.',
      },
      {
        title: 'A practice bank, then a supervised attempt',
        copy: 'Timed mock tests using the provider’s own practice assessments plus an internal question bank, with wrong answers explained in class — then a lab slot where you sit the exam under mentor supervision.',
      },
      {
        title: 'A failure protocol, not a penalty',
        copy: 'Most exams here allow retakes after a short cooldown. If you fail, your weak domains are reviewed and you are rebooked. Failing an attempt is normal and carries no penalty from the institute.',
      },
      {
        title: 'Renewal training',
        copy: 'Google and Meta credentials expire after 12 months. You are taught the renewal process so your stack does not quietly lapse after you leave, and alumni can attend refresher sessions.',
      },
      {
        title: 'Assessed properly',
        copy: 'Attendance 10%, assignments 25%, mid-term practical 15%, portfolio projects 20%, live project 20%, final viva and mock interview 10% — graded against a published rubric, with one free re-attempt of any failed component.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration and format of this programme?',
        a: 'Four months, 165 to 175 hours of classroom and supervised lab time. Classes run 1.5 to 2 hours a day, five to six days a week, with morning, afternoon, evening and weekend batch options. It is offline classroom teaching with one workstation per student, premium tool access during the course, backup classes for missed sessions, doubt-clearing hours and a mentor group.',
      },
      {
        q: 'How is this different from the 3-month digital marketing track?',
        a: 'The three-month track specialises narrowly and gets you earning faster. This one takes a month longer to give you breadth across both traffic engines, which is what agency briefs ask for when one person is expected to handle SEO and PPC together. If you want to specialise and start sooner, the shorter track is the better choice.',
      },
      {
        q: 'Are the exam fees included?',
        a: '13 of the 14 certifications in this track are free. The remaining paid exam — the Meta Blueprint associate exam — carries a provider fee paid directly by you to the provider, and is not included in course fees unless stated otherwise in writing at admission. Confirm the current fee position with your counsellor when you enrol.',
      },
      {
        q: 'Am I guaranteed to pass the exams?',
        a: 'No institute can guarantee that, and you should be wary of any that claims to. What techcadd guarantees is preparation mapped to each exam’s published blueprint, supervised attempts in scheduled lab slots, and free re-preparation if you fail. Most exams here allow retakes after a short cooldown.',
      },
      {
        q: 'Is techcadd affiliated with Google, Meta or the other providers?',
        a: 'No. techcadd is not affiliated with, endorsed by, or an authorised testing centre for Google, Meta, Microsoft, HubSpot, SEMrush, Ahrefs or any other certifying organisation. The institute prepares you for these exams; the exams are attempted on the provider’s own platform and the credentials are issued directly by the provider. Formats, fees and validity periods are set by those organisations and change without notice.',
      },
      {
        q: 'Whose accounts and budgets do I work on?',
        a: 'Partner business accounts arranged by the institute, or an equivalent institute-owned live property with real traffic. You are never required to spend your own money on ad budgets.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-digital-marketing-program-in-phagwara',
      'after-12th-6-month-digital-marketing-program-in-phagwara',
      'after-12th-9-month-digital-marketing-program-in-phagwara',
      'after-12th-4-month-data-analytics-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
    ],
    keywords: [
      'after 12th 4 month digital marketing program in Phagwara',
      'SEO and PPC course after 12th Phagwara',
      'google ads certification training Phagwara',
      'search marketing course Punjab',
      'performance marketing course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------ data science -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-4-month-data-science-program-in-phagwara',
    label: 'Data Science',
    title: 'Best After 12th 4-Month Data Science Program in Phagwara',
    icon: 'database',
    duration: '4 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A four-month fast-track path from data fundamentals to production-ready AI systems — Python and data engineering, machine learning and deep learning, LLMs, RAG, AI agents and cloud deployment, ending in an industry capstone.',
    overview:
      'This is a four-month fast-track Data Science programme, written for someone starting straight after 12th who wants working AI skills quickly rather than the longest possible syllabus. Four months of hands-on training, ending in a complete industry-level AI SaaS application. What makes it different from an older data science course is that the classical pipeline and the LLM stack are taught as one job: you finish able to clean data and train a model, and also to put a RAG assistant or an AI agent in front of a business.\nMonth one is data and programming foundations — advanced Excel, Power Query, Power BI, DAX, business dashboards, KPI reporting and data literacy; then modern Python with VS Code, the uv package manager, OOP, exception handling, type hinting, pytest, Ruff and Black; Git, GitHub, Git Flow and GitHub Copilot alongside SQL on PostgreSQL with database design, window functions and query optimisation; and finally APIs, JSON, FastAPI basics with JWT and Postman, plus Pandas 2.x, NumPy, Polars, DuckDB and PyArrow.\nMonth two is data science, machine learning and deep learning: data cleaning, feature engineering, exploratory analysis, interactive visualisation with Plotly and Streamlit, statistics, probability and preprocessing; scikit-learn with pipelines and cross validation; gradient boosting with XGBoost, LightGBM and CatBoost, model evaluation and hyperparameter optimisation; then deep learning fundamentals with PyTorch, tensor operations and neural networks.\nMonth three moves into computer vision and the LLM stack — CNNs, transfer learning and OpenCV, transformers, Hugging Face and tokenizers; LLM fundamentals covering tokenization, embeddings, the attention mechanism, prompt engineering and structured prompting; the OpenAI, Gemini, Claude and Grok APIs alongside Ollama and LiteLLM; and embeddings with FAISS, ChromaDB, Pinecone, Qdrant and Milvus for semantic search.\nMonth four turns all of it into applications: RAG architecture with hybrid search and guardrails, LangChain, LangGraph, CrewAI and the Model Context Protocol with tool calling, AI agents and multi-agent systems; AI application development with FastAPI advanced, async programming, WebSockets, Streamlit, Gradio and Chainlit; cloud deployment and AI security through Docker, AWS, Azure AI, Google Vertex AI, prompt injection defence, responsible AI and CI/CD. It closes with the industry capstone — a complete AI SaaS application, deployed to the cloud and delivered with documentation and a professional GitHub portfolio.',
    demand:
      'The job is now advertised as one role — clean the data and train the model, and also put a RAG assistant in front of a business — and very few applicants can do both halves.',
    modules: [
      {
        title: 'Month 1 — Data & Programming Foundations',
        summary:
          'Excel and Power BI first, because that part is employable before the rest of the course finishes.',
        topics: [
          'Advanced Excel, Power Query, Power BI and DAX',
          'Business dashboards, KPI reporting, AI productivity and data literacy',
          'Python fundamentals, VS Code and the uv package manager',
          'OOP, exception handling and type hinting',
          'Engineering practice: pytest, Ruff and Black',
          'Git, GitHub, Git Flow and GitHub Copilot',
          'SQL on PostgreSQL: database design, window functions and query optimisation',
          'APIs, JSON, FastAPI basics, JWT and Postman',
          'Pandas 2.x, NumPy, Polars, DuckDB and PyArrow',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Data Science, Machine Learning & Deep Learning',
        summary:
          'The classical pipeline, from messy data through a tuned and evaluated model.',
        topics: [
          'Data cleaning, feature engineering and exploratory data analysis',
          'Interactive visualisation with Plotly and Streamlit',
          'Statistics, probability and data preprocessing',
          'Machine learning with scikit-learn: pipelines and cross validation',
          'Gradient boosting with XGBoost, LightGBM and CatBoost',
          'Model evaluation and hyperparameter optimisation',
          'Deep learning fundamentals with PyTorch',
          'Tensor operations and neural networks',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Deep Learning, LLMs & Vector Search',
        summary:
          'Computer vision and transformers, then the language-model stack and vector databases.',
        topics: [
          'CNNs, transfer learning, computer vision and OpenCV',
          'Transformers, Hugging Face and tokenizers',
          'LLM fundamentals: tokenization, embeddings and the attention mechanism',
          'Prompt engineering and structured prompting',
          'The OpenAI, Gemini, Claude and Grok APIs',
          'Ollama for local models and LiteLLM for routing',
          'Embeddings and vector databases: FAISS, ChromaDB, Pinecone, Qdrant and Milvus',
          'Semantic search',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — RAG, Agents, Deployment & Capstone',
        summary:
          'Turning models into applications a business can actually run.',
        topics: [
          'RAG architecture, hybrid search and guardrails',
          'LangChain, LangGraph, CrewAI and the Model Context Protocol',
          'Tool calling, AI agents and multi-agent systems',
          'FastAPI advanced, async programming and WebSockets',
          'Streamlit, Gradio and Chainlit interfaces',
          'Docker and Docker Compose',
          'AWS, Azure AI and Google Vertex AI',
          'AI security: prompt injection defence and responsible AI',
          'CI/CD pipelines',
          'Industry capstone: an end-to-end AI SaaS application with documentation and a GitHub portfolio',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Build a real business KPI dashboard in Power BI with Power Query and DAX in month one',
      'Write modern Python with the engineering practice most self-taught learners miss',
      'Train, tune and evaluate models through scikit-learn pipelines and gradient boosting',
      'Build a PyTorch CNN with transfer learning and extend it into transformers',
      'Design and query vector databases for semantic search and RAG with guardrails',
      'Ship an AI SaaS capstone on FastAPI and PostgreSQL, containerised and cloud-deployed',
    ],
    tools: [
      'Excel & Power BI',
      'Python & uv',
      'PostgreSQL',
      'Pandas, NumPy, Polars & DuckDB',
      'scikit-learn',
      'XGBoost, LightGBM & CatBoost',
      'PyTorch & OpenCV',
      'Hugging Face',
      'OpenAI, Gemini, Claude & Grok APIs',
      'Ollama & LiteLLM',
      'FAISS, ChromaDB, Pinecone & Qdrant',
      'LangChain, LangGraph & CrewAI',
      'FastAPI, Streamlit & Chainlit',
      'Docker',
      'AWS, Azure AI & Vertex AI',
      'Git & GitHub',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. The course starts at Excel and Power BI, which most students have seen before, and moves into Python only once you know what you are automating.',
      },
      {
        label: 'Students with a term to spare',
        copy: 'Four months fits a long vacation or the gap between school and college, and you finish with a deployed AI SaaS capstone rather than an unfinished playlist.',
      },
      {
        label: 'Commerce and arts students',
        copy: 'Nothing here needs school physics or higher mathematics. Statistics and probability are taught at the depth the modelling work actually needs, and the Excel and Power BI work is directly employable on its own.',
      },
      {
        label: 'Degree students who want a head start',
        copy: 'If you are entering a BCA, BBA or B.Sc, arriving already able to build a dashboard, train a model and ship a RAG assistant changes what your first two years look like.',
      },
      {
        label: 'Anyone testing whether data suits them',
        copy: 'Four months is a real commitment but a bounded one. If it clicks, the six-month certificate programme goes deeper into deep learning, computer vision and a longer capstone month.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If free tutorials left you with half-finished notebooks, what changes here is a trainer reading your code each week and a capstone with a deadline attached.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Excel, Power BI and data literacy',
        copy: 'Advanced Excel, Power Query, DAX, business dashboards and KPI reporting — the part of the syllabus that is employable before the rest of it finishes.',
      },
      {
        title: 'Python and SQL, properly',
        copy: 'Modern Python with uv, OOP, type hinting, pytest, Ruff and Black, plus PostgreSQL with database design, window functions and query optimisation.',
      },
      {
        title: 'Data engineering and machine learning',
        copy: 'Pandas 2.x, NumPy, Polars, DuckDB and PyArrow; scikit-learn pipelines and cross validation; XGBoost, LightGBM and CatBoost with hyperparameter optimisation.',
      },
      {
        title: 'Deep learning and computer vision',
        copy: 'PyTorch from tensors up — neural networks, CNNs, transfer learning and OpenCV, then transformers, Hugging Face and tokenizers.',
      },
      {
        title: 'LLMs, RAG and AI agents',
        copy: 'Tokenization, embeddings and attention; the OpenAI, Gemini, Claude and Grok APIs; five vector databases; RAG with hybrid search and guardrails; LangChain, LangGraph, CrewAI and MCP.',
      },
      {
        title: 'Cloud deployment and one capstone',
        copy: 'Docker, AWS, Azure AI, Google Vertex AI and CI/CD with prompt injection defence and responsible AI — then a complete AI SaaS application on FastAPI and PostgreSQL.',
      },
    ],
    whyNow: {
      title: 'One Fast Track From Spreadsheets to Shipped AI',
      points: [
        'Four months from Excel and SQL through machine learning, deep learning, RAG and AI agents — ending in a deployed industry AI SaaS capstone.',
        'Fresher Data Analyst and AI roles in Punjab start around ₹16,000 – ₹28,000 a month for someone with a portfolio an employer can open.',
        'Candidates who can demonstrably ship a RAG system or an agent workflow move well beyond that band, because far fewer applicants can show one.',
        'The classical pipeline and the LLM stack are taught as one job, which is how the role is now advertised.',
      ],
    },
    roles: [
      'Data Analyst',
      'Data Scientist',
      'Machine Learning Engineer',
      'Deep Learning Engineer',
      'LLM / AI Engineer',
      'AI Agent Developer',
      'AI Application Developer',
      'Backend / API Developer',
      'Freelance AI Consultant',
    ],
    roleDetails: [
      {
        role: 'Data Analyst',
        copy: 'Straight after 12th on a fast track, this is one of the two realistic first steps — and the Power BI and SQL work of month one is what gets you there.',
      },
      {
        role: 'AI Application Developer',
        copy: 'The other realistic first step: building software with models inside it — FastAPI behind a Streamlit or Chainlit interface, containerised and deployed.',
      },
      {
        role: 'Machine Learning Engineer',
        copy: 'Closer to the model than the product — scikit-learn pipelines, gradient boosting and PyTorch. Opens as the portfolio grows.',
      },
      {
        role: 'LLM / AI Engineer',
        copy: 'Owning the model layer: tokenization, embeddings, context windows, multi-provider routing, and the cost and latency decisions that follow.',
      },
      {
        role: 'AI Agent Developer',
        copy: 'Systems that act rather than answer — tool calling, LangGraph, CrewAI and MCP. Currently one of the hardest AI roles for companies to fill.',
      },
    ],
    hiring: [
      'Analytics and IT companies across Mohali, Jalandhar and Ludhiana',
      'Product startups building AI features into their software',
      'Manufacturing and retail businesses using data for forecasting',
      'Remote and freelance AI consulting, which this portfolio serves well',
    ],
    nextSteps: [
      'The 6-month Data Science Certificate Program',
      'The 9-month Artificial Intelligence Diploma Program',
      'MLOps and production AI infrastructure',
      'Cloud AI platform certification',
    ],
    industries: ['Analytics & IT', 'Product startups', 'Manufacturing & retail', 'Remote / global'],
    salary: {
      role: 'Data Analyst / AI Application Developer',
      summary:
        'Builds pipelines, models and the applications that put them in front of a business. Candidates who can demonstrably ship a RAG system or an agent workflow move well beyond the entry band.',
      starting: '₹16,000–₹28,000/month',
      after2: '₹35,000–₹70,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Data & AI',
          fresher: '₹16,000–₹28,000/month',
          after2: '₹35,000–₹70,000/month',
          scale: { fresher: 22000, after2: 52500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹30,000–₹52,000/month',
          after2: '₹65,000–₹1,30,000+/month',
          scale: { fresher: 41000, after2: 97500 },
        },
        {
          name: 'Remote / Freelance AI Work',
          fresher: '₹14,000–₹32,000/month',
          after2: '₹50,000–₹1,10,000+/month',
          scale: { fresher: 23000, after2: 80000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'Data Analyst, Data Scientist, Machine Learning Engineer, Deep Learning Engineer, LLM / AI Engineer, AI Agent Developer, AI Application Developer, Backend / API Developer and freelance AI consultant. Straight after 12th on a fast track, Data Analyst and AI Application Developer are the realistic first steps; the rest open as the portfolio grows.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with a deployed portfolio typically starts around ₹16,000 – ₹28,000 a month in the local market. That rises quickly with experience, and candidates who can demonstrably ship a RAG system or an agent workflow move well beyond it, because far fewer applicants can show one.',
      },
      {
        q: 'What will I actually be able to do at the end?',
        a: 'Build complete data pipelines from Excel and SQL through Python-based data engineering; train, tune and evaluate machine learning and deep learning models; design and query vector databases for semantic search and RAG; build production LLM applications with LangChain, LangGraph, CrewAI and MCP; deploy with FastAPI, Docker, CI/CD and the major cloud AI platforms; and ship a full industry-level AI SaaS capstone.',
      },
      {
        q: 'Is there remote work in this field?',
        a: 'A great deal, and it is growing. AI and data work carries more remote and freelance opportunity than most technical fields, and a deployed capstone an employer can open is what makes a remote application credible.',
      },
    ],
    projects: [
      {
        name: 'Business KPI Dashboard',
        summary:
          'Month one’s build: a real business dashboard in Power BI with Power Query transformations and DAX measures, reporting the KPIs a manager actually asks for.',
        tech: ['Power BI', 'DAX'],
        level: 'Beginner',
        skills: ['BI Reporting', 'Data Modelling'],
      },
      {
        name: 'SQL Data Service with FastAPI',
        summary:
          'A designed PostgreSQL schema with window functions and optimised queries, exposed through a JWT-authenticated FastAPI endpoint and tested in Postman.',
        tech: ['PostgreSQL', 'FastAPI', 'JWT'],
        level: 'Beginner',
        skills: ['Database Design', 'API Development'],
      },
      {
        name: 'End-to-End ML Pipeline',
        summary:
          'A messy real dataset cleaned and engineered in Pandas and Polars, explored with Plotly, then modelled through a scikit-learn pipeline and beaten with XGBoost, LightGBM and CatBoost.',
        tech: ['scikit-learn', 'XGBoost'],
        level: 'Intermediate',
        skills: ['Feature Engineering', 'Model Tuning'],
      },
      {
        name: 'Computer Vision Build',
        summary:
          'A PyTorch CNN with transfer learning and OpenCV, extended into transformers and Hugging Face — the project that makes deep learning concrete rather than theoretical.',
        tech: ['PyTorch', 'OpenCV'],
        level: 'Intermediate',
        skills: ['Deep Learning', 'Transfer Learning'],
      },
      {
        name: 'RAG Assistant over Real Documents',
        summary:
          'Embeddings in a vector database with hybrid search and guardrails, answered by an LLM API, orchestrated with LangChain or LangGraph and wrapped in a Streamlit or Chainlit interface.',
        tech: ['LangChain', 'Vector DB'],
        level: 'Advanced',
        skills: ['Retrieval Augmentation', 'Guardrails'],
      },
      {
        name: 'Industry AI SaaS Capstone',
        summary:
          'One complete application: FastAPI and PostgreSQL, RAG pipelines and AI agents, containerised with Docker, secured against prompt injection, deployed to the cloud with CI/CD and documented for review. This is the one interviewers ask about.',
        tech: ['FastAPI', 'Docker', 'AWS'],
        level: 'Advanced',
        skills: ['End-to-End Delivery', 'Cloud Deployment'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still do the work',
        copy: 'Your trainer is not a full-time lecturer. They deliver data and AI work for techcadd’s services arm, so the examples in class are current rather than a case study from five years ago.',
      },
      {
        title: 'Written for a school leaver',
        copy: 'Month one begins at Excel and Python fundamentals. Nothing is assumed, and nothing is skipped on the assumption that a degree will fill the gap later.',
      },
      {
        title: 'Classical and LLM in one programme',
        copy: 'Gradient boosting and vector databases, scikit-learn pipelines and LangGraph agents, taught by the same trainer — because that is how the job is now advertised.',
      },
      {
        title: 'Current tooling, not legacy habits',
        copy: 'uv, Ruff, Black and pytest from month one; Polars and DuckDB alongside Pandas; PyTorch and Hugging Face for deep learning. You learn the stack a modern team actually runs.',
      },
      {
        title: 'AI on real API keys',
        copy: 'OpenAI, Gemini, Claude and Grok through real API calls, plus Ollama and LiteLLM for local and routed models — with cost, context limits and failure handling met head on.',
      },
      {
        title: 'Honest about what a fast track buys',
        copy: 'We will tell you plainly whether the four-month or the six-month track fits your goal. A student sold the wrong length is a student who does not finish.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this Data Science programme after 12th?',
        a: 'Four months: data and programming foundations; data science, machine learning and deep learning; deep learning, LLMs and vector search; then RAG, agents, deployment and the industry capstone. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Can I join straight after 12th with no coding background?',
        a: 'Yes — that is who it is written for. Month one begins with Excel, Power Query and Power BI, then teaches Python from the ground up including the engineering practice most self-taught learners miss: virtual environments with uv, type hinting, pytest, Ruff and Black. The pace is brisk, so consistent attendance matters more here than on the six-month track.',
      },
      {
        q: 'Does this cover generative AI and LLMs, or only classical data science?',
        a: 'Both. Months one and two are the classical pipeline — Excel and Power BI, Python, SQL, data engineering, machine learning, gradient boosting and deep learning. Months three and four are the LLM stack: tokenization and embeddings, prompt engineering, the OpenAI, Gemini, Claude and Grok APIs, vector databases, RAG architecture, LangChain, LangGraph, CrewAI, MCP, AI agents, FastAPI applications and cloud deployment.',
      },
      {
        q: 'How is this different from the 6-month Data Science programme?',
        a: 'Both cover the classical pipeline and the LLM stack, but the six-month certificate has more room: object detection, OCR, image segmentation and Vision Transformers in its deep learning month, a fuller treatment of production data tooling, and a whole month dedicated to the capstone rather than a single closing topic. This fast track compresses to the essentials and reaches the capstone sooner.',
      },
      {
        q: 'Is AI security really part of a data science course?',
        a: 'Yes. Student LLM apps are exactly where prompt injection and leaked API keys show up, so prompt injection defence, responsible AI practice and CI/CD are covered before the capstone is deployed.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-data-science-program-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
      'after-12th-4-month-data-analytics-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
    ],
    keywords: [
      'after 12th 4 month data science program in Phagwara',
      'data science course after 12th Phagwara',
      'machine learning and LLM training Phagwara',
      'AI SaaS development course Punjab',
      'data science course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------- artificial intelligence -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-4-month-artificial-intelligence-program-in-phagwara',
    label: 'Artificial Intelligence',
    title: 'Best After 12th 4-Month Artificial Intelligence Program in Phagwara',
    icon: 'brain',
    duration: '4 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A fast-track path into modern AI — Python for AI, deep learning, LLM internals, prompt engineering, RAG, AI agents and the deployment of real AI applications, ending in one complete industry capstone.',
    overview:
      'This is the 4-Month Artificial Intelligence course — it takes you from Python fundamentals to a deployed, portfolio-ready AI application. The flow is simple: AI and Python foundations first, then deep learning, NLP and LLM internals, then prompting, multi-model APIs and retrieval, and finally application development, deployment and the capstone.\nNothing here stops at theory. You work in PyTorch rather than reading about neural networks, you call OpenAI, Gemini, Claude, Grok and local Ollama models rather than comparing them on a slide, you design and query real vector databases, and you build agents with LangChain, LangGraph, CrewAI and MCP. The final part packages all of it into an end-to-end build with documentation, a GitHub portfolio, a resume and mock interviews behind it.',
    demand:
      'Modern AI work is a stack rather than a subject — a model, a retrieval layer, an agent loop, an interface, a deployment and guardrails — and the people who can assemble all six layers are still very thinly spread.',
    modules: [
      {
        title: 'Month 1 — Python, Math & AI Foundations',
        summary:
          'The language, the tooling and the maths — before PyTorch appears.',
        topics: [
          'Python fundamentals from the ground up',
          'VS Code as the working environment; Git and GitHub for version control',
          'ChatGPT and GitHub Copilot as development tools; AI productivity basics',
          'Object-oriented programming and exception handling',
          'APIs and JSON; FastAPI basics; Postman for testing endpoints',
          'NumPy for numerical computing and Pandas for tabular data',
          'Statistics and probability for AI',
          'Scikit-learn fundamentals',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Deep Learning, NLP & LLM Fundamentals',
        summary:
          'Networks written and trained, then the internals of the models everyone else only calls.',
        topics: [
          'Deep learning fundamentals with PyTorch',
          'Tensor operations and neural networks',
          'Convolutional neural networks and transfer learning',
          'Computer vision with OpenCV',
          'Text processing and word embeddings',
          'Transformers, Hugging Face and tokenizers',
          'LLM fundamentals: tokenization, embeddings and context windows',
          'The attention mechanism',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Prompting, LLM APIs, RAG & AI Agents',
        summary:
          'Six model providers, four vector databases, and the agent patterns behind every funded AI product.',
        topics: [
          'Prompt engineering, prompt optimisation, system prompts and structured prompting',
          'The OpenAI, Gemini, Claude and Grok APIs',
          'Ollama for local models and LiteLLM for routing between providers',
          'Embeddings and vector databases: FAISS, ChromaDB, Pinecone and Qdrant',
          'Semantic search and RAG architecture',
          'Hybrid search, re-ranking, evaluation and guardrails',
          'LangChain and LangGraph',
          'CrewAI and the Model Context Protocol',
          'Tool calling, AI agents and multi-agent systems',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — AI Apps, Deployment & Capstone',
        summary:
          'It ends deployed, not demonstrated.',
        topics: [
          'FastAPI advanced; Streamlit, Gradio and Chainlit interfaces',
          'AI chatbot development',
          'Multimodal AI across text, image and audio; Whisper and vision-language models',
          'AI security and prompt injection; responsible AI',
          'Docker and Docker Compose; Linux',
          'AWS, Azure AI and Google Vertex AI; serverless AI deployment',
          'End-to-end AI capstone build',
          'Project documentation, GitHub portfolio, resume building and mock interviews',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Build neural networks and computer vision models using PyTorch',
      'Understand LLM internals: tokenization, embeddings and attention',
      'Write effective, structured prompts across multiple model APIs',
      'Design and query vector databases for semantic search and RAG',
      'Build AI agents using LangChain, LangGraph, CrewAI and MCP',
      'Deploy AI applications with FastAPI, Docker and cloud platforms',
      'Ship a complete AI industry capstone with a professional portfolio',
    ],
    tools: [
      'Python',
      'VS Code',
      'Git & GitHub',
      'GitHub Copilot',
      'NumPy & Pandas',
      'scikit-learn',
      'PyTorch',
      'OpenCV',
      'Hugging Face',
      'OpenAI, Gemini, Claude & Grok APIs',
      'Ollama & LiteLLM',
      'FAISS, ChromaDB, Pinecone & Qdrant',
      'LangChain, LangGraph & CrewAI',
      'FastAPI, Streamlit, Gradio & Chainlit',
      'Whisper',
      'Docker',
      'AWS, Azure AI & Vertex AI',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. There is no assumed technical knowledge and no programming prerequisite. Most students run the programme alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc, BBA or B.Tech, this is the shortest route from degree to an AI role. You enter placement season with a deployed AI application instead of a blank CV.',
      },
      {
        label: 'Career changers',
        copy: 'The weekend batch exists for people already earning. This is a fast track by design — enough to become interview-ready for AI Engineer and AI Application Developer roles without leaving your current job first.',
      },
      {
        label: 'Developers and analysts',
        copy: 'If you already write Python or work with data, the foundation topics move quickly and the LLM, RAG and agent sections are the point. Those are the skills currently missing from almost every engineering team.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Python first, then models',
        copy: 'The first month covers Python, OOP, APIs and the maths — NumPy, Pandas, statistics and scikit-learn — before PyTorch appears. Every model you build afterwards is something you can reason about rather than copy.',
      },
      {
        title: 'Six model providers, not one',
        copy: 'OpenAI, Gemini, Claude and Grok APIs, plus Ollama for local models and LiteLLM to route between them. Knowing which model a task actually needs is a skill worth more than fluency in any single API.',
      },
      {
        title: 'Retrieval and agents, properly',
        copy: 'Embeddings and four vector databases, then RAG architecture with hybrid search, re-ranking, evaluation and guardrails — then LangChain, LangGraph, CrewAI and MCP for tool-calling and multi-agent systems.',
      },
      {
        title: 'It ends deployed, not demonstrated',
        copy: 'FastAPI, Streamlit, Gradio and Chainlit for the interface; Docker, AWS, Azure AI and Google Vertex AI for the deployment. An industry capstone with documentation, a GitHub portfolio and mock interviews closes the programme.',
      },
    ],
    whyNow: {
      title: 'Modern AI Work Is a Stack, Not a Subject',
      points: [
        'A model, a retrieval layer that grounds it in your own data, an agent loop that lets it act, an interface people can use, a deployment that survives traffic, and guardrails for the day a prompt injection arrives.',
        'This programme teaches all six layers in sequence, with a single capstone that integrates LLMs, RAG pipelines, AI agents and cloud deployment into one application you can put your name on.',
        'A fresher with a deployed AI application typically starts around ₹20,000 – ₹40,000 per month in the Phagwara, Jalandhar and Ludhiana market.',
        'AI work also carries more remote and freelance opportunity than most, since the systems are not in the room.',
      ],
    },
    roles: [
      'AI Engineer',
      'Machine Learning Engineer',
      'LLM Engineer',
      'AI Agent Developer',
      'Prompt Engineer',
      'AI Application Developer',
      'NLP Engineer',
      'Junior AI Developer',
      'Freelance AI Consultant',
    ],
    roleDetails: [
      {
        role: 'AI Engineer',
        copy: 'The core destination from this programme. You build and ship systems with models in them — retrieval, agents, APIs and deployment — rather than training models from scratch. Show the capstone, the RAG pipeline and the deployed application.',
      },
      {
        role: 'Machine Learning Engineer',
        copy: 'Closer to the model than the product: PyTorch, neural networks, computer vision and transfer learning, with scikit-learn and the statistics behind them. The middle of the course is this role’s foundation.',
      },
      {
        role: 'LLM Engineer',
        copy: 'Owning the model layer of a product — tokenization, embeddings, context windows, multi-provider routing through LiteLLM, and the cost and latency decisions that follow.',
      },
      {
        role: 'AI Agent Developer',
        copy: 'Building systems that act rather than answer: tool calling, LangChain and LangGraph, CrewAI, MCP and multi-agent coordination. This is currently the hardest AI role for companies to fill.',
      },
      {
        role: 'AI Application Developer',
        copy: 'The full product: FastAPI behind a Streamlit, Gradio or Chainlit interface, containerised with Docker and deployed to AWS, Azure AI or Vertex AI. The capstone is the portfolio piece this interview asks for.',
      },
      {
        role: 'Junior AI Developer',
        copy: 'The entry point at a services company or product team — supporting a live AI feature, curating evaluation data, tuning prompts and fixing the retrieval quality nobody else has time to look at.',
      },
    ],
    hiring: [
      'Product companies building AI features into their software',
      'IT services companies adding AI delivery to their offering',
      'Analytics and consulting firms building client AI solutions',
      'Remote roles with companies outside Punjab and outside India',
    ],
    nextSteps: [
      'The 6-month Artificial Intelligence Certificate Program',
      'The 9-month Artificial Intelligence Diploma Program',
      'Agentic AI and multi-agent systems',
      'MLOps and production AI infrastructure',
    ],
    industries: ['Product & software', 'IT services', 'Analytics & consulting', 'Remote / global'],
    salary: {
      role: 'AI Engineer',
      summary:
        'Builds and ships systems with models inside them. AI work carries more remote and freelance opportunity than most fields, since the systems are not in the room.',
      starting: '₹20,000–₹40,000/month',
      after2: '₹45,000–₹90,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — AI Engineer',
          fresher: '₹20,000–₹40,000/month',
          after2: '₹45,000–₹90,000/month',
          scale: { fresher: 30000, after2: 67500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹35,000–₹60,000/month',
          after2: '₹80,000–₹1,60,000+/month',
          scale: { fresher: 47500, after2: 120000 },
        },
        {
          name: 'Remote / Freelance AI Work',
          fresher: '₹15,000–₹35,000/month',
          after2: '₹60,000–₹1,50,000+/month',
          scale: { fresher: 25000, after2: 105000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after this program?',
        a: 'The syllabus targets nine roles: AI Engineer, Machine Learning Engineer, LLM Engineer, AI Agent Developer, Prompt Engineer, AI Application Developer, NLP Engineer, Junior AI Developer and Freelance AI Consultant. Which one fits depends on whether you lean toward the model, the product or the agent layer — and the capstone is the evidence all nine interviews ask for.',
      },
      {
        q: 'What salary can a fresher expect in Phagwara?',
        a: 'A fresher with a deployed AI application typically starts around ₹20,000 – ₹40,000 per month in the Phagwara, Jalandhar and Ludhiana market, rising quickly with a second year of production experience. AI work also carries more remote and freelance opportunity than most, since the systems are not in the room.',
      },
      {
        q: 'What is the difference between this and a data science course?',
        a: 'Data science is largely about analysing data you already have. This programme is about building software with models inside it: deep learning in PyTorch, LLM internals, prompting across several providers, retrieval-augmented generation over your own documents, agents that call tools, and a deployed application at the end.',
      },
      {
        q: 'Which industries are hiring for this?',
        a: 'Product companies building AI features, IT services companies adding AI delivery, and analytics and consulting firms building client solutions — plus a genuinely large remote market.',
      },
    ],
    projects: [
      {
        name: 'Python & API Foundations Build',
        summary:
          'A FastAPI service with JSON handling and Postman-tested endpoints, versioned on GitHub — the groundwork every later project sits on.',
        tech: ['Python', 'FastAPI', 'Postman'],
        level: 'Beginner',
        skills: ['API Development', 'Version Control'],
      },
      {
        name: 'Computer Vision Model in PyTorch',
        summary:
          'Tensor operations, a convolutional network and transfer learning applied to a real image task with OpenCV, trained rather than described.',
        tech: ['PyTorch', 'OpenCV'],
        level: 'Intermediate',
        skills: ['Neural Networks', 'Transfer Learning'],
      },
      {
        name: 'Multi-Provider Prompt Suite',
        summary:
          'Structured prompts and system prompts tested across OpenAI, Gemini, Claude, Grok and local Ollama models, routed through LiteLLM and compared on cost and quality.',
        tech: ['LiteLLM', 'Ollama'],
        level: 'Intermediate',
        skills: ['Prompt Engineering', 'Model Selection'],
      },
      {
        name: 'RAG Pipeline with Guardrails',
        summary:
          'Embeddings into a vector database, hybrid search and re-ranking on top, evaluated properly and fenced with guardrails before anything is exposed.',
        tech: ['FAISS', 'ChromaDB', 'Qdrant'],
        level: 'Advanced',
        skills: ['Retrieval Augmentation', 'Evaluation'],
      },
      {
        name: 'Tool-Calling AI Agent',
        summary:
          'A multi-agent system built with LangGraph and CrewAI over MCP tool definitions — the pattern behind every AI product currently being funded.',
        tech: ['LangGraph', 'CrewAI', 'MCP'],
        level: 'Advanced',
        skills: ['Agent Design', 'Tool Calling'],
      },
      {
        name: 'End-to-End AI Industry Capstone',
        summary:
          'One complete, industry-level AI application integrating LLMs, a RAG pipeline, AI agents and cloud deployment, with project documentation, a GitHub portfolio, a resume and mock interviews around it.',
        tech: ['FastAPI', 'Docker', 'Vertex AI'],
        level: 'Advanced',
        skills: ['System Integration', 'Deployment'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Learn at your own pace',
        copy: 'You advance when a deliverable passes review. A student who needs extra time on transformers gets it; nobody is moved on because the timetable says so.',
      },
      {
        title: 'Real model APIs, with budgets',
        copy: 'Labs run against live OpenAI, Gemini, Claude and Grok endpoints with per-student token budgets, plus local models through Ollama — so the cost of a design decision is something you have felt.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching RAG evaluation and agent orchestration are the people writing them for client work, which is why the guardrails sections cover failures that actually happen.',
      },
      {
        title: 'Portfolio and interview support',
        copy: 'The final month includes project documentation, a GitHub portfolio, resume building and mock interviews — the part most AI courses leave to the student.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 4-Month Artificial Intelligence Program in Phagwara?',
        a: 'Four months, covering the full AI syllabus across four phases: AI and Python foundations, then deep learning, NLP and LLM fundamentals, then prompting, LLM APIs and RAG, and finally AI application development, deployment and the capstone. Weekday, evening and weekend batches cover the same content, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Do I need programming experience or a technical background?',
        a: 'No. The course begins with Python fundamentals and the tooling around them, then adds object-oriented programming, APIs and the maths — NumPy, Pandas, statistics and scikit-learn — before PyTorch appears. The programme is built for students joining straight after 12th from any stream.',
      },
      {
        q: 'Which AI models and APIs will I actually use?',
        a: 'OpenAI, Gemini, Claude and Grok through their APIs, local models through Ollama, and LiteLLM to route between them. On top of that: PyTorch and Hugging Face for models you train or fine-tune, and Whisper and vision-language models for the multimodal topics.',
      },
      {
        q: 'What are RAG and AI agents, in plain terms?',
        a: 'RAG grounds a model’s answers in your own documents rather than in whatever it memorised — embeddings, a vector database, hybrid search, re-ranking and guardrails. An agent goes further: it plans its own next step, calls a real tool, reads the result and repeats. The later part of the course builds both.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'One complete, industry-level AI application — the capstone — integrating LLMs, a RAG pipeline, AI agents and cloud deployment, with project documentation, a GitHub portfolio, a resume and mock interviews around it. Everything you learn before it contributes a working piece of that build.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
      'after-12th-4-month-data-science-program-in-phagwara',
      'after-12th-4-month-data-analytics-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 4 month artificial intelligence program in Phagwara',
      'AI course after 12th Phagwara',
      'deep learning and LLM training Phagwara',
      'artificial intelligence course Punjab',
      'AI course with placement Phagwara',
    ],
  }),
]
