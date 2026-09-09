/**
 * The After 12th 6-Month Certificate Programs.
 *
 * The middle rung of the ladder: the same starting point as the 3-month track
 * and the same nesting promise — a student who came up from the short course
 * continues rather than repeats — but with room for the parts a three-month
 * calendar has to leave out. Which parts those are differs by subject and is
 * stated on each programme, because "it is longer" is not an answer anyone can
 * make a decision from.
 *
 * Content follows the techcadd programme pages, localised to Phagwara.
 */

import { makeAfter12 } from './factory'
import type { CourseContent } from '@/data/courses/types'

const CATEGORY = {
  category: '6-month-certificates',
  categoryTitle: 'After 12th 6-Month Certificate Program',
}

export const AFTER12_SIX_MONTH: CourseContent[] = [
  /* ------------------------------------------------------- cloud computing -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-cloud-computing-program-in-phagwara',
    label: 'Cloud Computing',
    title: 'Best After 12th 6-Month Cloud Computing Program in Phagwara',
    icon: 'cloud',
    duration: '6 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A six-month certificate covering Linux, AWS and DevOps end to end — from your first terminal command to a fully automated pipeline deploying to Kubernetes, with six portfolio projects and placement support.',
    overview:
      'Six months, structured so the course moves from foundational concepts to real AWS deployments without ever assuming a step you have not taken. It is open to anyone who has passed 12th, from any stream, and no prior experience is required.\nThe early months build the system underneath the cloud — Linux, scripting, networking and Git — because every AWS service is easier to understand once you know what it is standing on. From there the course moves onto a real AWS account: identity and access, a network you designed, servers you launched, and a website that is genuinely live. The middle months cover the services that keep an application running under real traffic — storage, managed databases, load balancing, auto scaling, DNS and monitoring — followed by serverless architecture, AWS AI services and cloud security.\nThe final third is the modern deployment stack: Docker containers, Kubernetes orchestration and Helm, then CI/CD with Jenkins and GitHub Actions, infrastructure as code with Terraform, and monitoring with Prometheus and Grafana. It ends with a complete automated pipeline — a commit that travels through quality gates into a Kubernetes cluster on Terraform-defined infrastructure. Every month ends in something running, and the six pieces together are the portfolio you take to interviews. A certificate and placement support are included.',
    demand:
      'Cloud and DevOps roles are among the best-paying entry points in IT, and they do not require an engineering degree — what they require is someone who has actually deployed something and can walk an interviewer through it.',
    modules: [
      {
        title: 'Month 1 — Linux, Basic Scripting, Networking & Git',
        summary:
          'The system underneath every cloud service, taught from the first command.',
        topics: [
          'Linux basics and file system navigation',
          'User permissions and SSH connectivity',
          'Bash scripting fundamentals',
          'Job scheduling with cron',
          'Networking concepts: routers, IP addressing and DNS',
          'TCP/UDP and HTTP/HTTPS protocols',
          'Git and GitHub version control',
          'Project: a Linux administration lab and automation scripts',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Cloud Basics & Core AWS: IAM, VPC and EC2',
        summary:
          'Onto a real account — identity and network done properly, then a live website.',
        topics: [
          'Cloud computing fundamentals: IaaS, PaaS and SaaS',
          'How AWS infrastructure is organised: regions and availability zones',
          'IAM: identity and access management, roles and least privilege',
          'CloudTrail for activity tracking',
          'VPC design: subnets, route tables and security groups',
          'EC2 instances and EBS storage',
          'Web server deployment with Nginx or Apache',
          'Project: a secure AWS network with a live website',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Storage, Databases, Auto Scaling & Monitoring',
        summary:
          'What keeps an application up when real traffic arrives.',
        topics: [
          'Amazon S3 bucket management, storage classes and lifecycle policies',
          'RDS and DynamoDB database services',
          'Application Load Balancer configuration and target groups',
          'Auto Scaling principles and scaling policies',
          'Route 53 DNS management',
          'CloudWatch monitoring, alarms and dashboards',
          'The AWS Well-Architected Framework',
          'Project: a multi-tier scalable application with monitoring dashboards',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Serverless AWS, AI Services & Cloud Security',
        summary:
          'Building without servers to manage, and hardening everything built so far.',
        topics: [
          'Lambda serverless functions and API Gateway',
          'EventBridge, SNS and SQS workflows',
          'CloudFormation and infrastructure as code',
          'AWS AI services: Bedrock, Rekognition, Textract and Comprehend',
          'Encryption, KMS and secrets management',
          'WAF, Shield and GuardDuty',
          'Backup and disaster recovery planning',
          'Project: a serverless workflow with an AI chatbot and security hardening',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Docker Containers & Kubernetes',
        summary:
          'Packaging an application so it runs the same everywhere, then running it at scale.',
        topics: [
          'Container fundamentals versus virtual machines',
          'Dockerfile creation and image management',
          'Docker networks and volumes',
          'Docker Compose for multi-container applications',
          'Image registry management: Docker Hub and Amazon ECR',
          'Image scanning with Trivy',
          'Kubernetes architecture and core concepts',
          'Pods, Deployments, Services and Ingress',
          'ConfigMaps, Secrets and health probes',
          'Helm charts and Amazon EKS',
          'Project: a containerised multi-service application on Kubernetes with Helm',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — CI/CD Automation, Terraform, Monitoring & Final Project',
        summary:
          'A commit that reaches production without anyone clicking anything.',
        topics: [
          'CI/CD pipeline concepts and design',
          'Jenkins installation, plugins and pipeline jobs',
          'GitHub Actions as an alternative path',
          'Quality gates with SonarQube and Trivy',
          'Terraform: infrastructure as code, state management and modules',
          'Prometheus, Grafana and Alertmanager',
          'Log collection with Loki and the ELK stack',
          'Final capstone project and interview preparation',
          'Project: a complete automated pipeline from commit to Kubernetes deployment',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'One idea at a time — the syllabus moves in sequence, and nothing is assumed',
      'Every term is explained in plain language the first time it appears',
      'Security is taught early rather than last, because that is the right order for real cloud work',
      'Design and deploy a secure AWS network with a live application on top',
      'Containerise an application and orchestrate it on Kubernetes with Helm',
      'It ends with something running — a full automated pipeline on Terraform-defined infrastructure',
    ],
    tools: [
      'Linux',
      'Bash & SSH',
      'cron',
      'Git & GitHub',
      'AWS Console & CLI',
      'IAM & CloudTrail',
      'VPC, EC2 & EBS',
      'Nginx / Apache',
      'S3, RDS & DynamoDB',
      'ALB, Auto Scaling & Route 53',
      'CloudWatch',
      'Lambda, API Gateway, EventBridge, SNS & SQS',
      'CloudFormation',
      'Bedrock & Python',
      'Docker, Docker Compose & ECR',
      'Kubernetes, kubectl, Minikube, EKS & Helm',
      'Jenkins & GitHub Actions',
      'SonarQube & Trivy',
      'Terraform',
      'Prometheus, Grafana & Alertmanager',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Any stream. No technical knowledge is assumed, and most students run the programme alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'BCA, B.Sc, BBA and B.Tech students use this to enter placement season with real AWS project work rather than a blank CV.',
      },
      {
        label: 'Career changers',
        copy: 'The weekend batch exists for people already earning. Six months is enough to become interview-ready for cloud and junior DevOps roles without leaving your current job.',
      },
      {
        label: 'Anyone curious about IT with no experience',
        copy: 'No prior experience is required and none is assumed. If you can use a laptop and you will practise between classes, the course is built to take you the rest of the way.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Starts from zero, honestly',
        copy: 'Not "beginner-friendly" as a marketing line. The first month assumes nothing, every term is defined the first time it appears, and no one moves on because the calendar says so.',
      },
      {
        title: 'Practice on a real AWS account',
        copy: 'A licensed, supervised, cost-controlled environment rather than a simulator. Everything you deploy is genuinely running, which is the only way the cost and security lessons land.',
      },
      {
        title: 'The tools companies ask for',
        copy: 'Docker, Kubernetes, Terraform, Jenkins and Prometheus are named in the job listings we read every month. Nothing in the six months is there for syllabus decoration.',
      },
      {
        title: 'Six projects, not one certificate',
        copy: 'Every month ends in something running. You finish with a portfolio of deployed infrastructure rather than a certificate and a set of notes.',
      },
    ],
    whyNow: {
      title: 'Cloud and DevOps Are Among the Best-Paying Entry Points in IT',
      points: [
        'These roles do not require an engineering degree — they require someone who has actually deployed something and can explain it.',
        'A fresher in this market starts around ₹25,000 – ₹45,000 per month, which is at the top of the entry bands in this catalogue.',
        'Every business moving to the cloud needs someone to plan the workload, provision the resources and watch what happens next.',
        'Infrastructure work is naturally remote, so the job market extends well past Phagwara.',
      ],
    },
    roles: [
      'Cloud Engineer',
      'AWS Cloud Engineer',
      'DevOps Engineer (Entry Level)',
      'Cloud Support & Operations Associate',
      'Site Reliability Engineer (Junior)',
      'Infrastructure Engineer',
      'Freelance Cloud Consultant',
    ],
    roleDetails: [
      {
        role: 'Cloud Engineer',
        copy: 'AWS networking, servers, storage and databases — building and running the infrastructure an application lives on. The core destination of this course.',
      },
      {
        role: 'AWS Cloud Engineer',
        copy: 'The same work specialised to one platform, which is what most employers in this region are actually hiring for.',
      },
      {
        role: 'DevOps Engineer (Entry Level)',
        copy: 'Containers, automation and CI/CD — turning deployment from a manual event into something that happens on every commit.',
      },
      {
        role: 'Cloud Support & Cloud Operations Associate',
        copy: 'Operational focus: monitoring, ticket resolution, cost checks and first-line troubleshooting. The most widely available first job, and a fast route into engineering.',
      },
    ],
    hiring: [
      'IT service companies building and hosting on AWS',
      'Product startups running backend infrastructure in the cloud',
      'Managed service providers handling client infrastructure remotely',
      'Any company with a migration underway and nobody in-house to run it',
    ],
    nextSteps: [
      'The 9-month Cloud Computing Diploma Program',
      'AWS Solutions Architect certification',
      'Kubernetes (CKA) certification',
      'Cloud security specialisation',
    ],
    industries: ['IT services', 'Product startups', 'Managed services', 'Remote / global'],
    salary: {
      role: 'Cloud Engineer',
      summary:
        'Builds, automates and runs the infrastructure applications live on. Consistently one of the highest entry bands available without an engineering degree.',
      starting: '₹25,000–₹45,000/month',
      after2: '₹45,000–₹80,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Cloud Engineer',
          fresher: '₹25,000–₹45,000/month',
          after2: '₹45,000–₹80,000/month',
          scale: { fresher: 35000, after2: 62500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹35,000–₹60,000/month',
          after2: '₹75,000–₹1,50,000+/month',
          scale: { fresher: 47500, after2: 112500 },
        },
        {
          name: 'Remote / Freelance Infrastructure',
          fresher: '₹20,000–₹40,000/month',
          after2: '₹55,000–₹1,30,000+/month',
          scale: { fresher: 30000, after2: 92500 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 6-month program?',
        a: 'Cloud Engineer, AWS Cloud Engineer, entry-level DevOps Engineer and Cloud Support or Cloud Operations Associate. Interviews for all four ask you to walk through infrastructure you have actually deployed, which is what the six projects are for.',
      },
      {
        q: 'What salary can a fresher expect here?',
        a: 'Around ₹25,000 – ₹45,000 per month in this market for a fresher with a working portfolio, rising to ₹45,000 – ₹80,000 within two years. It is among the highest entry bands of any programme in this section.',
      },
      {
        q: 'Do I need an engineering degree for cloud roles?',
        a: 'Not for cloud support and cloud operations, which hire on demonstrated skill. Larger MNCs still filter on a degree for engineer titles, which is why most students here run the course alongside a BCA or B.Sc and enter that filter with both.',
      },
      {
        q: 'Is this work remote-friendly?',
        a: 'Very. The infrastructure is not physically present for anyone, which is why remote and hybrid roles are common and why the market is not limited to what is hiring locally.',
      },
    ],
    projects: [
      {
        name: 'Linux & Bash Automation Toolkit',
        summary:
          'Month one’s deliverable: a Linux administration lab plus the automation scripts that provision, back up and check it, version-controlled in GitHub.',
        tech: ['Linux', 'Bash', 'cron', 'Git'],
        level: 'Beginner',
        skills: ['System Administration', 'Scripting'],
      },
      {
        name: 'Secure AWS Network & Web Server',
        summary:
          'A VPC you designed with public and private subnets, IAM scoped properly, and a website genuinely live on EC2 behind Nginx.',
        tech: ['VPC', 'EC2', 'IAM', 'Nginx'],
        level: 'Beginner',
        skills: ['Network Design', 'Access Control'],
      },
      {
        name: 'Scalable Cloud Application',
        summary:
          'A multi-tier application behind a load balancer with auto scaling, managed storage and databases, and CloudWatch dashboards showing the decisions being made.',
        tech: ['S3', 'RDS', 'ALB', 'CloudWatch'],
        level: 'Intermediate',
        skills: ['High Availability', 'Monitoring'],
      },
      {
        name: 'Serverless Workflow & AI Chatbot',
        summary:
          'An event-driven pipeline of Lambda functions with an AI service in the middle, hardened with KMS, Secrets Manager and GuardDuty.',
        tech: ['Lambda', 'EventBridge', 'Bedrock', 'Python'],
        level: 'Intermediate',
        skills: ['Serverless', 'Cloud Security'],
      },
      {
        name: 'Containerised App on Kubernetes',
        summary:
          'A multi-service application packaged in Docker, deployed to Kubernetes with Helm, with scanned images and health probes in place.',
        tech: ['Docker', 'Kubernetes', 'Helm'],
        level: 'Advanced',
        skills: ['Containerisation', 'Orchestration'],
      },
      {
        name: 'Automated Pipeline & Infrastructure as Code',
        summary:
          'The capstone: a commit that passes quality gates, builds, and deploys to Kubernetes on Terraform-defined infrastructure, monitored and alerting.',
        tech: ['Jenkins', 'Terraform', 'SonarQube', 'Trivy'],
        level: 'Advanced',
        skills: ['CI/CD', 'Infrastructure as Code'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Progress based on readiness, not schedule',
        copy: 'You advance when your work passes review. A student who needs another week on VPC design gets it; nobody is pushed on because the timetable says so.',
      },
      {
        title: 'Live AWS practice, supervised and cost-controlled',
        copy: 'Every session runs in a real account with billing alarms and budgets in place, under trainer supervision — so a mistake becomes a lesson rather than a surprise bill.',
      },
      {
        title: 'Trainers actively working on client projects',
        copy: 'The people teaching IAM policies and Terraform modules are writing them for clients the same week, which is why the course covers the failures that actually happen.',
      },
      {
        title: 'Flexible batch options',
        copy: 'Weekday, evening and weekend batches all cover the same syllabus, so the course fits around a degree or a job rather than replacing one.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration and schedule of this programme?',
        a: 'Six months. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'Do I need any prerequisites or technical background?',
        a: 'No. The programme is open to anyone who has passed 12th, from any stream, and no prior experience is required. The first month starts at the Linux command line and assumes nothing before it.',
      },
      {
        q: 'Will I practise on a real AWS account?',
        a: 'Yes, on a real account with billing alarms and budgets configured before anything is provisioned, supervised throughout. The free tier covers most of the syllabus and the rest is cost-controlled by the centre.',
      },
      {
        q: 'How is this different from the 3-month Cloud Computing Program?',
        a: 'The three-month course covers Linux, networking, core AWS, storage, databases and scaling, ending in a capstone architecture. This six-month certificate keeps all of that and adds serverless architecture, AWS AI services, cloud security in depth, Docker, Kubernetes with Helm, CI/CD with Jenkins, Terraform and full monitoring — which is what DevOps job listings are actually asking for.',
      },
      {
        q: 'Can I take this alongside college or a job?',
        a: 'Yes, and most students do. The weekday, evening and weekend batches exist precisely so the programme fits around a degree or full-time work.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
      'after-12th-6-month-cyber-security-program-in-phagwara',
      'after-12th-6-month-data-science-program-in-phagwara',
      'after-12th-6-month-full-stack-development-program-in-phagwara',
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month cloud computing program in Phagwara',
      'cloud computing certificate course after 12th Phagwara',
      'AWS and devops training Phagwara',
      '6 month cloud course Punjab',
      'cloud computing course with placement Phagwara',
    ],
  }),

  /* ---------------------------------------------------- flutter app development -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-flutter-app-development-program-in-phagwara',
    label: 'Flutter App Development',
    title: 'Best After 12th 6-Month Flutter App Development Program in Phagwara',
    icon: 'mobile',
    duration: '6 Months',
    level: 'Beginner to Production Developer',
    summary:
      'A six-month practical Flutter course that takes you from building screens to shipping production apps — native platform access, clean architecture, performance tuning, your first AI feature and a signed release in both app stores.',
    overview:
      'The first three months cover the foundations — Dart, widgets, layouts, state management, async programming, live data, Firebase, testing and custom UI — taught from the first line of code. The next three months build on that base: platform channels and device features, Riverpod and GetX, generics and mixins, Clean Architecture with dependency injection, performance profiling and app-size reduction, a first in-app AI chatbot, on-device ML Kit, store publishing with signing and CI/CD, and a custom package published under your own name on pub.dev.\nYou advance when your project passes review, not when the calendar says so. Every month covers clear topics, the packages you will use, the real-world problem it solves and the project you keep for your portfolio.',
    demand:
      'An app that runs and an app a business can ship are different pieces of software, and studios pay for the second — far fewer developers can hand over a codebase that survives a second developer, a store review and a year of feature requests.',
    modules: [
      {
        title: 'Month 1 — Dart Programming, Flutter Basics & UI Development',
        summary:
          'Dart from the first line, then the widget tree and a themed multi-screen app.',
        topics: [
          'Dart syntax, variables, data types and control flow',
          'Functions with named and optional parameters',
          'Object-oriented programming: classes, inheritance, interfaces and constructors',
          'Collections (List, Set, Map) and null safety',
          'Flutter setup for Android and iOS; running your first app; the widget tree',
          'StatelessWidget vs StatefulWidget; Container, Row, Column and Stack',
          'Handling user input and gestures',
          'Material Design and Cupertino widgets; themes and design tokens',
          'Building custom widgets; responsive layouts for phone, tablet and web',
          'Navigation and routing with named routes; forms and validation',
          'Animations and page transitions',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — State Management, Async, Data & Firebase',
        summary:
          'The same app built two ways, then live data and a real backend.',
        topics: [
          'State management: setState, lifting state up and InheritedWidget',
          'Provider for app-wide state; an introduction to the Bloc pattern',
          'Comparing Provider and Bloc by rebuilding the same app both ways',
          'Asynchronous programming: Futures, async/await, Streams and StreamBuilder',
          'Isolates for heavy work',
          'JSON parsing, HTTP requests and consuming REST APIs',
          'WebSockets for real-time updates',
          'Local storage: SharedPreferences and SQLite',
          'Firebase setup for Android and iOS; Firebase Authentication',
          'Cloud Firestore, Cloud Messaging and Firebase Analytics',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Testing, Advanced UI & a Signed Production App',
        summary:
          'The discipline that separates a demo from a deliverable.',
        topics: [
          'Unit testing business logic, widget testing UI and integration testing full flows',
          'Debugging techniques and performance profiling with Flutter DevTools',
          'Custom painting with CustomPainter and custom animations',
          'Gesture recognition for complex interactions',
          'Internationalisation and localisation for multi-language apps',
          'Architecture review and clean-code refactor before shipping',
          'Environment config and flavors for development, staging and production',
          'Versioning and store metadata',
          'Build and release: signing, crash reporting and release notes',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Platform Integration, Advanced State & Dart',
        summary:
          'Where a Flutter developer stops being limited by what a package already does.',
        topics: [
          'Platform-specific code via MethodChannel',
          'Accessing device features: camera and sensors',
          'Managing background processes',
          'Implementing push notifications end to end',
          'Advanced Provider patterns for large apps',
          'Riverpod as a compile-safe successor to Provider',
          'GetX for state, routing and dependency injection in one package',
          'Flutter Hooks for functional-style state',
          'Generics for reusable, type-safe code; extension methods',
          'Mixins for shared behaviour without inheritance',
          'Isolates and concurrency patterns beyond the basics',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Clean Architecture, Performance & AI Integration',
        summary:
          'A codebase that survives a second developer, and your first shipped AI feature.',
        topics: [
          'MVVM — Model-View-ViewModel',
          'Clean Architecture layering: presentation, domain and data',
          'The Repository pattern for data-source abstraction',
          'Dependency injection via get_it and injectable',
          'Widget and render-tree optimisation',
          'Memory management and leak detection',
          'App size reduction techniques',
          'Profiling and benchmarking with DevTools',
          'Text-based AI features: chatbots, Q&A systems and summarisation',
          'Chatbot architecture and workflow inside a Flutter app',
          'Designing chat interfaces with ListView or dedicated chat-UI packages',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — On-Device AI, Store Publishing & a pub.dev Package',
        summary:
          'Ships to both stores, and puts your name on something anyone can install.',
        topics: [
          'Google ML Kit for Flutter',
          'Text recognition (OCR) and face detection on device',
          'App store guidelines for both platforms',
          'Building release binaries for iOS and Android',
          'Continuous integration and continuous deployment fundamentals',
          'App signing and release management',
          'Creating custom plugins',
          'Publishing packages to pub.dev',
          'Evaluating and integrating third-party packages responsibly',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Ship one real native feature through MethodChannel on physical hardware',
      'Answer the state question three ways — Provider, Bloc and Riverpod or GetX — with a written decision record',
      'Refactor an app into Clean Architecture with dependency injection and a before-and-after diagram',
      'Produce a documented performance audit with frame-rate, memory and build-size measurements',
      'Ship your first AI feature: an in-app chatbot plus an on-device OCR or face-detection scanner',
      'Publish a package under your own name on pub.dev with docs, a changelog and a test',
    ],
    tools: [
      'Dart SDK & DartPad',
      'Flutter SDK',
      'Android Studio & Xcode',
      'VS Code',
      'go_router & flutter_animate',
      'Provider, flutter_bloc, Riverpod & GetX',
      'flutter_hooks',
      'http, dio & sqflite',
      'Firebase Auth, Firestore & FCM',
      'flutter_test & integration_test',
      'Flutter DevTools',
      'MethodChannel, camera & sensors_plus',
      'get_it, injectable & freezed',
      'Google ML Kit',
      'pub.dev & plugin_platform_interface',
      'Play Console & App Store Connect',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. Six months is the length at which a complete beginner reaches a Flutter Developer job description rather than a trainee one, and the weekday and weekend batches both run the full course.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc or B.Tech, this is the version that changes which interviews you are invited to. You arrive with a published package, a performance audit and an app in both stores.',
      },
      {
        label: 'Working developers',
        copy: 'If you already write code, the foundation months move quickly and the advanced months are the real value. Architecture, profiling, native channels and release engineering are what separate a widget-only developer from one who can ship a full native feature.',
      },
      {
        label: 'Freelancers and agency staff',
        copy: 'The weekend batch exists for people already earning. A published pub.dev package and a signed store release are the two things that let you quote higher on a client brief.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Native access, not just widgets',
        copy: 'Every "make it do X natively" client request routes through MethodChannel. You will ship a real device-sensor feature callable from Dart, demonstrated on hardware.',
      },
      {
        title: 'An architecture you can defend',
        copy: 'You will refactor an earlier app into Clean Architecture with dependency injection through get_it, plus a before-and-after structure diagram. This is what lets you join a large codebase and know where new code belongs.',
      },
      {
        title: 'Performance you can measure',
        copy: 'You will produce a documented before-and-after audit — frame-rate measurements, a memory profile and a reduced release build size, with the specific fixes applied. Performance work is invisible until it is missing.',
      },
      {
        title: 'A package under your own name',
        copy: 'You will publish a real Flutter plugin or package to pub.dev with documentation, a changelog and an automated test. That is verifiable proof of fluency a resume line cannot provide.',
      },
    ],
    whyNow: {
      title: 'An App That Runs and an App a Business Can Ship Are Different Software',
      points: [
        'The second one has native platform access, a layered architecture, a measured performance profile, a signed release for both stores and a versioning process somebody else can follow.',
        'That gap is what a studio pays for. Anyone can assemble a screen from widgets; far fewer can hand over a codebase that survives a second developer, a store review and a year of feature requests.',
        'A developer with a published package, a store release and a documented architecture typically starts around ₹25,000 – ₹50,000 per month in this market.',
        'Remote and freelance contracts pay more still, because a pub.dev listing is checkable evidence in a way a certificate is not.',
      ],
    },
    roles: [
      'Flutter Developer',
      'Mobile App Developer',
      'Cross-Platform Engineer',
      'AI Mobile Engineer (Entry)',
      'Mobile Architect (Junior)',
      'Freelance App Developer',
    ],
    roleDetails: [
      {
        role: 'Flutter Developer',
        copy: 'Early career, and the most common destination from this course. Interviews test architecture judgement, testing discipline and whether a feature survives a code review. Show the refactored architecture, the tested feature suite and the performance audit.',
      },
      {
        role: 'Mobile App Developer',
        copy: 'The generalist studio role — client features, store releases and whatever the brief asks for next. The signed release and the documented versioning process are what make you billable from day one.',
      },
      {
        role: 'Cross-Platform Engineer',
        copy: 'Ownership of the shared codebase across iOS and Android, including the native edges. The platform channel project is the piece of evidence this interview asks for.',
      },
      {
        role: 'AI Mobile Engineer (Entry)',
        copy: 'Interviews test whether you can wire a real model into a real app safely, with a fallback for when it fails. The in-app chatbot and the on-device ML Kit scanner are the first two answers.',
      },
    ],
    hiring: [
      'App studios and software houses shipping client apps to both stores',
      'Product startups with a mobile front end',
      'Businesses building and maintaining their own customer app in-house',
      'Remote and freelance contracts, where a pub.dev listing is checkable evidence',
    ],
    nextSteps: [
      'The 9-month AI Flutter Engineer Diploma Program',
      'Backend development to pair with the app layer',
      'Native Android or iOS specialisation',
      'Release engineering and CI/CD in depth',
    ],
    industries: ['App studios', 'Product startups', 'Retail & services', 'Freelance / remote'],
    salary: {
      role: 'Flutter Developer',
      summary:
        'Ships production cross-platform apps from one codebase. Pay here is set by demonstrable evidence — a published package and a store release move a candidate more than an extra certificate.',
      starting: '₹25,000–₹50,000/month',
      after2: '₹50,000–₹95,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Flutter Developer',
          fresher: '₹25,000–₹50,000/month',
          after2: '₹50,000–₹95,000/month',
          scale: { fresher: 37500, after2: 72500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹35,000–₹65,000/month',
          after2: '₹75,000–₹1,50,000+/month',
          scale: { fresher: 50000, after2: 112500 },
        },
        {
          name: 'Remote / Freelance Contracts',
          fresher: '₹20,000–₹45,000/month',
          after2: '₹60,000–₹1,40,000+/month',
          scale: { fresher: 32500, after2: 100000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 6-month program?',
        a: 'Flutter Developer, Mobile App Developer and Cross-Platform Engineer. Those interviews test architecture judgement, testing discipline and whether a feature survives a code review — which is what the refactor, the audit and the published package are for.',
      },
      {
        q: 'What salary can I expect after this course?',
        a: 'A developer with a published package, a store release and a documented architecture typically starts around ₹25,000 – ₹50,000 per month in this market, and more on remote and freelance contracts where a pub.dev listing is checkable evidence.',
      },
      {
        q: 'Does the published package really make a difference in hiring?',
        a: 'It is the single most checkable thing on the CV. Anyone reviewing your application can install it, read the code and see the tests — which is a different kind of evidence from a screenshot or a resume line.',
      },
      {
        q: 'Is there freelance work at this level?',
        a: 'Yes, and at better rates than the three-month track reaches. A published package and a signed store release are the two things that let you quote higher on a client brief.',
      },
    ],
    projects: [
      {
        name: 'Native Platform Feature',
        summary:
          'A custom native platform channel demonstrated on a physical device — the point where you stop being limited by what a package already does.',
        tech: ['MethodChannel', 'sensors_plus'],
        level: 'Intermediate',
        skills: ['Native Integration', 'Device Features'],
      },
      {
        name: 'Riverpod / GetX Rebuild',
        summary:
          'A state-management rebuild on Riverpod or GetX with an architecture-decision record explaining which you would pick and why.',
        tech: ['Riverpod', 'GetX', 'flutter_hooks'],
        level: 'Intermediate',
        skills: ['State Management', 'Technical Writing'],
      },
      {
        name: 'Refactored Architecture',
        summary:
          'An earlier app restructured into Clean Architecture with dependency injection and a before-and-after structure diagram.',
        tech: ['get_it', 'injectable', 'freezed'],
        level: 'Advanced',
        skills: ['Clean Architecture', 'Dependency Injection'],
      },
      {
        name: 'Performance Audit',
        summary:
          'A documented before-and-after audit: frame-rate measurements, a memory profile and a reduced release build size, with the specific fixes applied.',
        tech: ['Flutter DevTools'],
        level: 'Advanced',
        skills: ['Profiling', 'Optimisation'],
      },
      {
        name: 'In-App AI Chatbot & On-Device Scanner',
        summary:
          'A working chatbot backed by a real text-generation API with local conversation history, plus an on-device OCR or face-detection scanner that costs nothing to run.',
        tech: ['flutter_chat_ui', 'dio', 'ML Kit'],
        level: 'Advanced',
        skills: ['AI Integration', 'On-Device ML'],
      },
      {
        name: 'Published pub.dev Package',
        summary:
          'A custom plugin or package with documentation, a changelog and at least one automated test, published under your own name — alongside a signed release in both stores.',
        tech: ['pub.dev', 'plugin_platform_interface'],
        level: 'Advanced',
        skills: ['Package Authoring', 'Release Management'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Project-based progression',
        copy: 'You advance when a deliverable passes review, not when the calendar says so. Nobody publishes to pub.dev without the architecture and testing work behind it actually passing.',
      },
      {
        title: 'Real devices, real stores, real keys',
        copy: 'Physical Android and iOS hardware, Mac machines for Xcode archiving, live Play Console and App Store Connect accounts, and a funded API key for the AI topics.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching Clean Architecture and platform channels are the people writing them for client work, which is why the profiling sections cover problems that actually happen.',
      },
      {
        title: 'A course you can extend',
        copy: 'Finish here after six months, or continue into the nine-month AI Flutter Engineer track later. The 9-month program picks up right where this one ends — you never repeat work you have already passed.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 6-Month Flutter App Development Program in Phagwara?',
        a: 'Six months in total — the first three months cover the foundation (Dart, widgets, state, Firebase) and the next three months cover advanced topics (architecture, AI, publishing). Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'How is this different from the 3-month program?',
        a: 'The 3-month program covers the foundation — Dart, widgets, UI, state, async, live data, Firebase, testing and custom UI, ending in a signed app. The 6-month program includes everything in the 3-month program and then adds three more months of advanced topics: native platform channels, Riverpod and GetX, advanced Dart, Clean Architecture, performance profiling, an in-app AI chatbot, on-device ML Kit, store publishing and a published pub.dev package.',
      },
      {
        q: 'Do I need a Mac or an iPhone for the publishing section?',
        a: 'Not of your own. The publishing topic needs Xcode archiving for the iOS build, and the lab has Mac machines for exactly that step. You leave with a signed release for both platforms without buying Apple hardware.',
      },
      {
        q: 'Will my package really go on pub.dev?',
        a: 'Yes — that is the final deliverable of the course. A custom plugin or package with documentation, a changelog and at least one automated test, published or submitted under your own name. Anyone reviewing your application can install it.',
      },
      {
        q: 'Can I extend to the 9-month program later?',
        a: 'Yes, and nothing is repeated. The 9-month program picks up right where this one ends — covering Git and GitHub team workflow, generative AI APIs with streaming and RAG, agentic and multimodal features, a Supabase backend, release-pipeline engineering with Fastlane, monetisation and analytics, and a client-brief-to-store capstone.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-flutter-app-development-program-in-phagwara',
      'after-12th-9-month-flutter-app-development-program-in-phagwara',
      'after-12th-6-month-mern-stack-program-in-phagwara',
      'after-12th-6-month-full-stack-development-program-in-phagwara',
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month flutter program in Phagwara',
      'flutter app development certificate course Phagwara',
      'mobile app development training Phagwara',
      'flutter and dart course Punjab',
      'app development course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------- MERN stack -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-mern-stack-program-in-phagwara',
    label: 'MERN Stack',
    title: 'Best After 12th 6-Month MERN Stack Certificate Program in Phagwara',
    icon: 'layers',
    duration: '6 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A structured six-month roadmap straight after school — from how the web works, through React, Node.js, Express and MongoDB, to an industry-level project, live deployment and placement preparation.',
    overview:
      'This is the complete MERN stack curriculum, written for someone starting straight after 12th with no coding background. Six months, one theme per month, and something you have built at the end of each.\nYou begin with how the internet actually works — client–server architecture, HTTP and HTTPS, browsers, domains and hosting — then HTML5, CSS3 and Git, and finish month one with a personal portfolio website and a responsive landing page of your own. Month two is JavaScript from beginner to advanced: variables and data types, control flow and functions, arrays and objects, higher-order functions, closures, ES6+ and modules, DOM manipulation and form validation, asynchronous JavaScript with promises, async/await, the Fetch API and REST integration, and browser storage — built into a calculator, a weather app and a to-do app.\nMonth three is React.js: components, JSX and Vite, hooks, React Router with nested and protected routes, API integration with Axios, state management with the Context API, styling with Tailwind CSS, and front-end JWT authentication, producing a blog site, an employee dashboard and an e-commerce front end. Month four is the back end — Node.js modules and npm, Express servers, routing, middleware and MVC architecture, REST APIs, bcrypt and JWT authentication with protected routes, MongoDB with query operators and aggregation basics, Mongoose schemas, models, validation and population, and file handling with Multer, Cloudinary and Nodemailer.\nMonth five is one industry project taken from planning to review: project selection, requirement analysis, user stories, wireframing, folder structure, database design and API planning, then the dashboard, forms, routing and responsive UI, then the REST APIs, authentication, CRUD and file uploads behind them, then debugging, API testing, error handling, performance optimisation and security practice — with code reviews, bug fixes, documentation and a Git and GitHub workflow running throughout.\nMonth six deploys it and gets you hired: the front end on Vercel and the back end on Render with MongoDB Atlas, environment variables, domains and hosting, then an ATS-friendly resume, a GitHub and LinkedIn profile, a portfolio website, technical interview preparation across the whole stack, aptitude, logical reasoning, HR preparation, live coding and structured mock interviews.',
    demand:
      'In this region the MERN stack is hired for not only by IT companies and agencies but by export houses, immigration consultancies, hospitals, schools and real estate firms building their own systems.',
    modules: [
      {
        title: 'Month 1 — Web Development Fundamentals',
        summary:
          'How a page is served, then HTML, CSS and Git — ending with your own site live on the internet.',
        topics: [
          'How the internet works; client–server architecture',
          'Frontend vs backend vs full stack; HTTP and HTTPS',
          'Browsers, domains and hosting',
          'HTML5: structure, semantic tags, forms, tables, lists, media and accessibility',
          'CSS3: selectors, box model, Flexbox, Grid, animations and responsive design',
          'Media queries',
          'Git and GitHub: repositories, commits, branching, merging, pull requests and workflow',
          'Mini projects: personal portfolio website and responsive landing page',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — JavaScript (Beginner to Advanced)',
        summary:
          'A full month on the language, rather than the fortnight a short course can spare.',
        topics: [
          'Variables, data types, operators, input and output, template literals',
          'Control flow, loops, functions, arrow functions, scope and hoisting',
          'Array and object methods, destructuring, spread and rest operators, JSON',
          'Higher-order functions, closures, ES6+, modules and callbacks',
          'DOM manipulation: events, forms, validation and dynamic elements',
          'Asynchronous JavaScript: promises, async/await, Fetch API and REST integration',
          'Error handling; browser storage with local and session storage',
          'Mini projects: calculator, weather app and to-do app',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — React.js Development',
        summary:
          'A front end that talks to a real API, with routing, state and protected routes.',
        topics: [
          'React fundamentals: introduction, Vite, JSX, components, props and state',
          'React hooks: useState, useEffect, useRef and custom hooks',
          'React Router DOM: nested routes and protected routes',
          'API integration with Axios and Fetch; CRUD operations and error handling',
          'State management with the Context API and useContext',
          'Styling with Tailwind CSS and responsive UI design',
          'Authentication: login, signup, front-end JWT and protected routes',
          'Mini projects: blog website, employee dashboard and e-commerce frontend',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Backend Development (Node.js, Express.js & MongoDB)',
        summary:
          'Where the front end and back end finally meet.',
        topics: [
          'Node.js fundamentals: modules, npm, package.json, file system and HTTP module',
          'Express.js: server, routing, middleware, MVC architecture and REST APIs',
          'Authentication: bcrypt, JWT, authorisation and protected routes',
          'MongoDB: basics, CRUD, query operators and aggregation basics',
          'Mongoose: schemas, models, validation, CRUD and population',
          'File handling with Multer, Cloudinary and Nodemailer',
          'Mini projects: authentication system, student management system and library management',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Industry Project Development',
        summary:
          'A full month on one application, planned, built, tested and reviewed weekly.',
        topics: [
          'Project selection, requirement analysis, user stories and wireframing',
          'Folder structure, database design and API planning',
          'Frontend: dashboard development, forms, routing, API integration and responsive UI',
          'Backend: REST APIs, authentication, CRUD, database integration and file uploads',
          'Testing and optimisation: debugging, API testing and error handling',
          'Performance optimisation and security best practices',
          'Code reviews, feature completion, bug fixes and documentation',
          'Git and GitHub workflow throughout',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Deployment & Placement Preparation',
        summary:
          'A live URL, then a full month of getting hired.',
        topics: [
          'Deploying the frontend to Vercel and the backend to Render',
          'MongoDB Atlas, environment variables, domain and hosting basics',
          'Feature enhancement, testing, performance optimisation and documentation',
          'GitHub repository and live project presentation',
          'ATS-friendly resume, GitHub profile, LinkedIn profile and portfolio website',
          'Technical interview preparation across HTML, CSS, JavaScript, React, Node, Express and MongoDB',
          'REST API and authentication interview questions',
          'Aptitude, logical reasoning and HR preparation',
          'Technical mock interviews, live coding, communication skills and career guidance',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Your own portfolio website, live in month one and versioned on GitHub',
      'A React front end that talks to a real API with hooks, routing, Context and Tailwind',
      'A secured Node and Express back end with bcrypt, JWT and Mongoose validation',
      'File uploads through Multer and Cloudinary, and email through Nodemailer',
      'One industry-level project planned, built, tested, reviewed and documented',
      'A deployed application on Vercel, Render and MongoDB Atlas with a real domain',
    ],
    tools: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'Node.js & Express.js',
      'MongoDB & Mongoose',
      'MongoDB Atlas & Compass',
      'Tailwind CSS & Bootstrap',
      'REST APIs & JSON',
      'Multer, Cloudinary & Nodemailer',
      'VS Code & Chrome DevTools',
      'Postman',
      'Git, GitHub & npm',
      'Vercel, Render & Netlify',
      'Figma basics',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. Month one starts at how a web page is served and ends with your own portfolio website live on the internet, which is usually the point where it stops feeling abstract.',
      },
      {
        label: 'Students doing a degree alongside',
        copy: 'Most students run this next to a BCA, B.Sc IT or B.Com at a Phagwara college. Six months of evenings or weekends puts a deployed full-stack project on your CV a full year before campus placements begin.',
      },
      {
        label: 'Anyone choosing between a degree and a skill',
        copy: 'You do not have to choose. This is a certificate programme with a fixed six-month end date, and the work it produces — a GitHub repository, a live URL, an industry project — is what a first employer actually inspects.',
      },
      {
        label: 'Career restarters and switchers',
        copy: 'A gap or an unrelated background counts for less than work someone can open in a browser. The syllabus is identical whoever you are; only the batch timing changes.',
      },
      {
        label: 'Freelancers and family-business owners',
        copy: 'The MERN stack is what most small business sites, dashboards and booking systems are built on. By month four you can build one properly rather than paying someone else to.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If free videos left you with notes and half-finished folders, what changes here is a trainer reviewing the code you wrote this week and ten mini projects with deadlines attached.',
      },
    ],
    whyChooseUs: [
      {
        title: 'The complete MERN curriculum',
        copy: 'HTML, CSS, JavaScript, React, Node.js, Express and MongoDB taught as one connected stack rather than seven separate subjects.',
      },
      {
        title: '10 named mini projects',
        copy: 'A portfolio site, a calculator, a weather app, a to-do app, a blog, an employee dashboard, an e-commerce front end, an authentication system, a student management system and a library system — practice you can point at.',
      },
      {
        title: '1 industry-level major project',
        copy: 'A full month on one complete, portfolio-ready application: planned, built, tested, optimised, reviewed and documented.',
      },
      {
        title: 'REST APIs and authentication',
        copy: 'Design and consume RESTful services, then secure them with bcrypt, JWT, authorisation and protected routes — the two things every backend interview asks about.',
      },
      {
        title: 'Git, GitHub and cloud deployment',
        copy: 'Version control the way real teams use it, and a live deployment on Vercel, Render and MongoDB Atlas with environment variables and a domain.',
      },
      {
        title: 'Resume, portfolio and mock interviews',
        copy: 'An ATS-friendly resume, an optimised GitHub and LinkedIn profile, a portfolio website, technical question banks, live coding and structured mock interview sessions.',
      },
    ],
    whyNow: {
      title: 'One Stack, Six Months, a Portfolio You Can Open in an Interview',
      points: [
        '10 mini projects and one industry-level major project — deployed to a live URL, not left on a laptop.',
        'MERN roles in Punjab start around ₹18,000 – ₹32,000 a month for a fresher who can show working code.',
        'Beyond IT companies and agencies, export houses, immigration consultancies, hospitals, schools and real estate firms all now build their own systems on this stack.',
        'Two years of delivery experience usually doubles the starting figure, and developers who keep learning move well beyond it.',
      ],
    },
    roles: [
      'MERN Stack Developer',
      'Full Stack Web Developer',
      'Frontend Developer (React.js)',
      'Backend Developer (Node.js & Express.js)',
      'React.js Developer',
      'Web Application Developer',
      'Software Developer',
    ],
    roleDetails: [
      {
        role: 'MERN Stack Developer',
        copy: 'The core destination of the programme — owning features across React, Express and MongoDB. Six months is what takes this from a trainee title to a developer one.',
      },
      {
        role: 'Backend Developer (Node.js & Express.js)',
        copy: 'REST APIs, authentication and database design. Month four is this role’s foundation and month five is its proof.',
      },
      {
        role: 'Frontend Developer (React.js)',
        copy: 'Components, hooks, routing, state and styling. Often the easiest of these roles to enter first.',
      },
      {
        role: 'Web Application Developer',
        copy: 'Building and maintaining business web applications — dashboards, portals and internal tools, which is what most local demand actually looks like.',
      },
    ],
    hiring: [
      'IT companies and web agencies across Phagwara, Jalandhar and Ludhiana',
      'Export houses and manufacturers building their own internal systems',
      'Immigration consultancies, hospitals and schools running their own platforms',
      'Real estate firms and product startups commissioning web applications',
    ],
    nextSteps: [
      'The 9-month MERN Stack Diploma Program',
      'Next.js and server-side rendering',
      'Cloud deployment and DevOps',
      'System design and scaling',
    ],
    industries: ['IT & agencies', 'Manufacturing & export', 'Healthcare & education', 'Real estate'],
    salary: {
      role: 'MERN Stack Developer',
      summary:
        'Builds and ships full-stack web applications. Two years of delivery experience usually doubles the starting figure, and developers who keep learning move well beyond it.',
      starting: '₹18,000–₹32,000/month',
      after2: '₹36,000–₹65,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — MERN Developer',
          fresher: '₹18,000–₹32,000/month',
          after2: '₹36,000–₹65,000/month',
          scale: { fresher: 25000, after2: 50500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹28,000–₹50,000/month',
          after2: '₹60,000–₹1,10,000+/month',
          scale: { fresher: 39000, after2: 85000 },
        },
        {
          name: 'Freelance / Remote Web Work',
          fresher: '₹12,000–₹30,000/month',
          after2: '₹45,000–₹1,00,000+/month',
          scale: { fresher: 21000, after2: 72500 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'MERN Stack Developer, Full Stack Web Developer, Frontend Developer (React.js), Backend Developer (Node.js and Express.js), React.js Developer, Web Application Developer and Software Developer. Locally these come from IT companies and agencies, but also from export houses, immigration consultancies, hospitals, schools and real estate firms building their own systems.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with a deployed portfolio typically starts around ₹18,000 – ₹32,000 a month in this market. Two years of delivery experience usually doubles that, and developers who keep learning move well beyond it.',
      },
      {
        q: 'Is the six-month version worth the extra three months?',
        a: 'If you want a developer title rather than a trainee one, yes. The extra months are the complete Node, Express and MongoDB back end, a full month on an industry project, cloud deployment and a full month of placement preparation — which is the difference between having built a front end and having shipped an application.',
      },
      {
        q: 'Can I freelance with these skills?',
        a: 'Yes. The MERN stack is what most small business sites, dashboards and booking systems are built on, and a live URL with the source on GitHub is what converts an enquiry into a paid brief.',
      },
    ],
    projects: [
      {
        name: 'Personal Portfolio Website',
        summary:
          'A responsive portfolio site and landing page in semantic HTML5 and CSS3, versioned with Git and published from GitHub.',
        tech: ['HTML5', 'CSS3', 'Git'],
        level: 'Beginner',
        skills: ['Semantic HTML', 'Responsive Design'],
      },
      {
        name: 'Calculator, Weather & To-Do Apps',
        summary:
          'Three JavaScript builds covering DOM manipulation, events and form validation, then the Fetch API, promises and async/await against a real weather service, with state kept in browser storage.',
        tech: ['JavaScript', 'Fetch API'],
        level: 'Beginner',
        skills: ['DOM', 'Async JavaScript'],
      },
      {
        name: 'Blog, Dashboard & E-commerce Frontend',
        summary:
          'Three React applications: components and hooks, React Router with protected routes, Axios CRUD against an API, Context API state and a Tailwind responsive UI with login and signup.',
        tech: ['React.js', 'Tailwind', 'Axios'],
        level: 'Intermediate',
        skills: ['React Hooks', 'Protected Routes'],
      },
      {
        name: 'Authentication & Management Systems',
        summary:
          'An authentication system with bcrypt and JWT, plus student and library management systems on Express and MongoDB with Mongoose schemas, validation, population and file uploads.',
        tech: ['Node.js', 'Express', 'MongoDB'],
        level: 'Intermediate',
        skills: ['Authentication', 'Schema Design'],
      },
      {
        name: 'Industry-Level Major Project',
        summary:
          'A complete full-stack MERN application taken from requirement analysis, user stories and wireframes through the dashboard, the REST APIs, testing, performance optimisation and security practice, with weekly code review.',
        tech: ['Full-stack MERN'],
        level: 'Advanced',
        skills: ['Project Planning', 'Code Review'],
      },
      {
        name: 'Deployed & Presented Product',
        summary:
          'The same project shipped: frontend on Vercel, backend on Render, MongoDB Atlas, environment variables and a domain — documented, pushed to GitHub and presented live. This is the one interviewers ask about.',
        tech: ['Vercel', 'Render', 'MongoDB Atlas'],
        level: 'Advanced',
        skills: ['Deployment', 'Presentation'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still ship code',
        copy: 'Your trainer is not a full-time lecturer. They deliver client projects for techcadd’s services arm, so the examples in class are current rather than a case study from five years ago.',
      },
      {
        title: 'Written for a school leaver',
        copy: 'Month one begins at how the internet works. Nothing is assumed, and nothing is skipped on the assumption that you will pick it up later.',
      },
      {
        title: 'Every month ends in something built',
        copy: 'Ten named mini projects across the first four months, then a full month on one industry project. You are never more than four weeks from a finished piece of work.',
      },
      {
        title: 'A live URL, not a localhost demo',
        copy: 'Month six deploys the front end to Vercel and the back end on Render with MongoDB Atlas, on a real domain — because a project an interviewer cannot open has not been finished.',
      },
      {
        title: 'Certificate, internship letter and portfolio',
        copy: 'You leave with a course completion certificate, a documented internship on live work, a GitHub repository and a portfolio website — four different pieces of evidence, not one.',
      },
      {
        title: 'A placement cell that persists',
        copy: 'ATS resume reviews, LinkedIn and GitHub profile guidance, technical and HR mock interviews, live coding practice, and repeated drives with hiring partners across Phagwara, Jalandhar and Ludhiana.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this MERN Stack programme after 12th?',
        a: 'Six months, running as a fixed roadmap: web development fundamentals, JavaScript, React.js, backend development with Node.js, Express and MongoDB, an industry project, then deployment and placement preparation. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Can I join straight after 12th with no coding background?',
        a: 'Yes — that is who it is written for. Month one begins with how the internet works, client–server architecture and HTTP, then HTML5 and CSS3. No prior programming, no science stream and no particular percentage is required.',
      },
      {
        q: 'How many projects will I build?',
        a: 'Ten named mini projects across the first four months — a portfolio website, a responsive landing page, a calculator, a weather app, a to-do app, a blog website, an employee dashboard, an e-commerce frontend, an authentication system, and student and library management systems — plus one industry-level major project built through month five and deployed in month six.',
      },
      {
        q: 'Will my project actually go live on the internet?',
        a: 'Yes. Month six deploys the frontend to Vercel and the backend to Render against MongoDB Atlas, with environment variables and domain and hosting basics covered, followed by a live project presentation. A localhost demo is not a finished project.',
      },
      {
        q: 'How is this different from the 3-month and 9-month MERN programmes?',
        a: 'The three-month programme covers the fundamentals and the front end; this six-month certificate adds the complete Node, Express and MongoDB back end, a full month on an industry project, cloud deployment and a month of placement preparation. The nine-month diploma goes further again. A counsellor can walk you through which fits your timeline.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-mern-stack-program-in-phagwara',
      'after-12th-9-month-mern-stack-program-in-phagwara',
      'after-12th-6-month-full-stack-development-program-in-phagwara',
      'after-12th-6-month-flutter-app-development-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
      'after-12th-6-month-agentic-ai-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month MERN stack program in Phagwara',
      'MERN stack certificate course Phagwara',
      'react node js training Phagwara',
      'full stack javascript course Punjab',
      'MERN stack course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------- full stack development -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-full-stack-development-program-in-phagwara',
    label: 'Full Stack Development',
    title: 'Best After 12th 6-Month Full Stack Development Certificate Program in Phagwara',
    icon: 'code',
    duration: '6 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn AI-powered full-stack development — one Python and Django ladder with three exit points at 3, 6 and 9 months, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Best After 12th 6-Month Full Stack Development Certificate Program in Phagwara takes you from web fundamentals, HTML5, CSS3 and Bootstrap to LLM APIs, Celery, payments, CI/CD and system design, taught on Python, Django and DRF. You work on live client briefs under trainer supervision, not slideware. You start from zero with no prior background, and every stage ends in a portfolio deliverable.\nSix months is the length at which the ladder reaches its professional half. The first two months are the front end and the language; the middle two are databases, Django and the ORM alongside the AI-assisted development discipline; and the final two are the parts that make a developer employable rather than merely capable — REST APIs with JWT and documentation, LLM integration, background processing with Celery, payment gateways, CI/CD and system design, all applied to a live client brief with placement preparation running alongside.',
    demand:
      'Companies across Punjab are building AI-integrated products with teams trained for the pre-AI stack, and that gap is what this programme is built to fill — there is local demand, there are budgets, and there are very few trained people to hand the work to.',
    modules: [
      {
        title: 'Months 1–2 — Web Fundamentals, JavaScript & Python',
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
        duration: '8 weeks',
        lessons: 48,
      },
      {
        title: 'Months 3–4 — Databases, Django & AI-Assisted Development',
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
        duration: '8 weeks',
        lessons: 48,
      },
      {
        title: 'Months 5–6 — APIs, Integrations, Live Project & Placement',
        summary:
          'The professional layer, applied to a real client brief.',
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
        duration: '8 weeks',
        lessons: 48,
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
      'Docker basics',
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
        copy: 'The alternative is free videos, a cheap online course, six months of drifting, and knowledge you cannot demonstrate. A mentor who corrects you, an internship letter and a placement cell that actually calls employers is the difference between knowing the subject and being hired to do it.',
      },
    ],
    whyNow: {
      title: 'Full Stack Development Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from the second half of the course, supervised by a trainer — not slides, not simulations.',
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
        copy: 'Build and maintain the Django and DRF services an application runs on — where the final two months point directly.',
      },
      {
        role: 'AI Integration Engineer',
        copy: 'Wire LLM APIs and AI features into existing products. This is the gap local companies are trying to fill and the reason the course covers it.',
      },
      {
        role: 'Solutions Architect',
        copy: 'The longer-term destination — system design, integration decisions and technical direction rather than only implementation.',
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
      'The 9-month Full Stack Development Diploma Program',
      'Cloud deployment and DevOps',
      'System design and architecture',
      'Agentic AI and LLM engineering',
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
        q: 'What jobs can I get after this programme?',
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
        name: 'REST API with Authentication & Docs',
        summary:
          'A Django REST Framework service with serializers, viewsets, JWT authentication and published API documentation.',
        tech: ['DRF', 'JWT', 'Postman'],
        level: 'Intermediate',
        skills: ['API Design', 'Documentation'],
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
          'A full-stack project you specify yourself, covering DRF, JWT, LLM integration, Celery background tasks, payments and deployment, presented as your final piece.',
        tech: ['Django', 'Celery', 'Redis'],
        level: 'Advanced',
        skills: ['System Design', 'Presentation'],
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the Full Stack Development Certificate Program in Phagwara?',
        a: 'techcadd runs this programme over 6 months. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
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
        q: 'How is this different from the 3-month programme?',
        a: 'It is the same ladder with a later exit point. The three-month track reaches DRF and the live brief at speed; six months gives the databases, Django and AI-assisted development half its own two months, and gives the API, LLM, Celery, payments, CI/CD and system design material two more — plus a considerably longer supervised live project.',
      },
      {
        q: 'What is the fee for this programme in Phagwara?',
        a: 'Comprehensive 4–6 month programmes with live projects, an internship and placement support run roughly ₹18,000 to ₹40,000 in this region. techcadd counsellors share the current fee sheet and EMI options on request, and a demo class is free.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-9-month-full-stack-development-program-in-phagwara',
      'after-12th-6-month-mern-stack-program-in-phagwara',
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-6-month-flutter-app-development-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month full stack development program in Phagwara',
      'full stack developer certificate course Phagwara',
      'python and django training Phagwara',
      'full stack course Punjab',
      'full stack development course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------- agentic AI -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-agentic-ai-program-in-phagwara',
    label: 'Agentic AI',
    title: 'Best After 12th 6-Month Agentic AI Program in Phagwara',
    icon: 'cpu',
    duration: '6 Months',
    level: 'Beginner to Production Engineer',
    summary:
      'A complete six-month program that turns you from a beginner into someone who can build, secure and deploy AI agents that work reliably for real users at a manageable cost.',
    overview:
      'This 6-month program covers the complete journey from Python basics to production-ready AI agents. The first half builds your foundation — Python from the first line, the command line and Git, HTTP and APIs, how language models actually work, prompting, tool calling, RAG, memory and graph orchestration. The second half is the professional half: async engineering, model routing and self-hosted serving, DSPy optimisation, production MCP gateways, GraphRAG, durable execution, multi-agent systems, browser and coding agents, evaluation harnesses, red teaming, Kubernetes deployment and unit economics.\nYou advance when your work passes review, not when the calendar says so. Every topic specifies the same four things — subjects in teaching order, the named tool stack, the commercial problem it solves and the project you keep.',
    demand:
      'Companies have agents in production and almost nobody who can evaluate, secure and operate them — which is currently the most valuable gap an AI engineer can close.',
    modules: [
      {
        title: 'Month 1 — Python, LLM Prompting & Tool Calling',
        summary:
          'Foundations first, then the ReAct loop written by hand with no framework.',
        topics: [
          'Python from scratch: syntax, data structures, loops, functions, classes, type hints and async/await',
          'Virtual environments with uv and pip',
          'The command line, Git and GitHub: commits, branches, pull requests and .gitignore',
          'HTTP, REST APIs, JSON, API keys and bearer tokens',
          'SQL basics with PostgreSQL; Docker and containerisation',
          'How language models work: transformers by intuition, tokens, context windows and temperature',
          'The four properties of an agent — and when not to use one at all',
          'Prompting: few-shot, chain-of-thought and structured output with JSON schema and Pydantic',
          'Tool calling: tool descriptions, parameter schemas and a hand-written ReAct loop',
          'Model Context Protocol: servers, clients, resources and transports',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — RAG, Memory & Agent Frameworks',
        summary:
          'Grounding, state and orchestration — measured rather than assumed.',
        topics: [
          'Retrieval-Augmented Generation: embeddings, vector search and chunking strategies',
          'Document parsing for PDFs and tables',
          'Vector stores with Qdrant, Chroma and FAISS; hybrid search; reranking and citation',
          'Measuring RAG quality: faithfulness and context precision; RAG vs fine-tuning',
          'Memory and state: short-term, long-term and episodic memory',
          'Conversation buffers, summarisation and context engineering',
          'Multi-user isolation, PII handling and privacy; persistence and checkpointing',
          'LangGraph: nodes, edges, conditional routing, cycles and subgraphs',
          'Human-in-the-loop: approval gates, time-travel debugging and durable execution',
          'Multi-agent patterns: supervisor and worker roles, handoffs and termination conditions',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Evaluation, Guardrails & a Deployed Agent',
        summary:
          'Evidence is the deliverable, and the agent goes live.',
        topics: [
          'Building evaluation datasets from real examples',
          'Deterministic tests vs LLM-as-judge; trajectory and tool-choice evaluation',
          'RAG metrics: faithfulness, answer relevance and context recall',
          'Regression gates in CI; tracing tokens and cost',
          'Security: prompt injection, input and output guardrails and PII filtering',
          'Refusal and escalation policies',
          'Packaging an agent as a service: streaming APIs, rate limiting and secrets management',
          'Chat UI assembly with Streamlit; logging, alerting and monitoring',
          'Architecture diagram and demo video',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Production Python, Model Routing & Prompt Optimisation',
        summary:
          'Where an agent stops being a notebook and starts being software.',
        topics: [
          'Async Python for I/O-bound LLM workloads; concurrency, semaphores and connection pooling',
          'Typed domain modelling with Pydantic; dependency injection and structured logging',
          'Testing non-deterministic systems with snapshots, fixtures and cassettes',
          'Cost-aware API client design with retries, jitter and circuit breakers',
          'Attention and the KV cache; prefill versus decode and its latency consequences',
          'Sampling parameters in depth; reasoning models and effort budgets',
          'Quantisation (GGUF, AWQ, GPTQ) and quality trade-offs',
          'Open versus closed model economics; self-hosting with batched inference',
          'Model routing and cascades; benchmark literacy and why leaderboards mislead',
          'Context-window budgeting, compaction and contextual retrieval',
          'Prompt caching architecture and cache-hit design',
          'Automated prompt optimisation with DSPy signatures, teleprompters and metric-driven compilation',
          'Self-refinement and reflection loops; prompt registries, versioning and rollback',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Production Tools, Advanced Retrieval & Multi-Agent Systems',
        summary:
          'Tools an agent cannot misuse, retrieval that handles multi-hop questions, and agents that survive process death.',
        topics: [
          'Tool design as API design; large tool catalogues and dynamic tool selection',
          'Namespacing and permission scoping; production MCP with OAuth flows and streamable HTTP',
          'Safe code-execution sandboxes; long-running tools; tool result compression',
          'Query understanding: rewriting, decomposition, HyDE and multi-query fusion',
          'Hybrid retrieval with reciprocal rank fusion; cross-encoder and late-interaction reranking',
          'Contextual, hierarchical and small-to-big chunking',
          'Knowledge graphs and GraphRAG for multi-hop questions',
          'Multimodal retrieval over tables, charts and scans; index freshness and error analysis',
          'Memory architecture: write, read, update and forget policies; conflict resolution',
          'Agent patterns: ReAct, Plan-and-Execute, Reflexion, Tree-of-Thought and orchestrator-worker',
          'Durable execution that survives process death; compensation and rollback',
          'Multi-agent topologies: hierarchical, network, blackboard, market and debate',
          'Deadlock and infinite-handoff detection; measuring whether multi-agent actually beats single-agent',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Browser Agents, Security, Deployment & Capstone',
        summary:
          'Attack it before someone else does, then ship it with an SLO and a cost model.',
        topics: [
          'DOM-based versus vision-based web agents; accessibility-tree grounding and resilient selectors',
          'Authentication and sessions; the ethics and legality of scraping',
          'Computer-use loops of screenshot, reason and act',
          'Coding agents: repository indexing, diff generation, test-driven loops and sandboxed execution',
          'Eval design from first principles; dataset curation and labelling',
          'Unit, component, end-to-end and trajectory evals; LLM-as-judge calibration',
          'Online eval, A/B testing, shadow deployment and distributed tracing',
          'OWASP Top 10 for LLM applications; direct and indirect prompt injection',
          'The lethal trifecta; excessive agency and least-privilege tool design',
          'Sandboxing, egress control and MCP supply-chain risk; automated red teaming',
          'Reference production architecture; horizontal scaling of stateful agents',
          'Queues, workers and backpressure; blue/green and canary releases',
          'SLOs, error budgets and infrastructure as code',
          'Unit economics: cost per successful task, token attribution and distillation',
          'Capstone: problem selection, ROI framing, build, evaluate, harden, deploy and measure',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Reliability engineering, not prompt tips — bounded concurrency, circuit breakers, dead-letter queues and resumable checkpoints',
      'A 200-attack red-team report grading your own agent before and after mitigation',
      'Durable execution that survives a deploy, resuming exactly where it stopped',
      'Cost per successful task, reduced by routing, caching and small-model substitution',
      'A GraphRAG retrieval service with an ablation study quantifying each component',
      'A live multi-user capstone with an eval dashboard, an SLO, a cost model and a public write-up',
    ],
    tools: [
      'Python & asyncio',
      'Git, GitHub & Docker',
      'FastAPI & PostgreSQL',
      'Claude & OpenAI APIs',
      'Pydantic & Instructor',
      'MCP SDK & FastMCP',
      'LangChain, LlamaIndex & LangGraph',
      'Qdrant, Chroma, FAISS & Weaviate',
      'Neo4j & GraphRAG',
      'RAGAS, promptfoo & DeepEval',
      'LangSmith, Langfuse & Braintrust',
      'DSPy',
      'LiteLLM, vLLM & Ollama',
      'Temporal & Prefect',
      'Playwright & Browser Use',
      'Garak, PyRIT & Lakera Guard',
      'Kubernetes, Helm, Terraform & ArgoCD',
      'Prometheus & Grafana',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. Six months is the shortest honest span in which a complete beginner reaches an AI Engineer job description, and the weekday and weekend batches both run the full ladder.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc or B.Tech, this is the version of the programme that changes which interviews you are invited to. You arrive with a red-team report and a Kubernetes deployment, not a course certificate.',
      },
      {
        label: 'Working developers',
        copy: 'If you already write Python, the foundation topics are quick and the professional topics are the real value. Containers, evaluation, security and cost engineering are what separate a developer from someone who can also ship and run what they wrote.',
      },
      {
        label: 'Career changers',
        copy: 'The weekend batch exists for people already earning. Six months of evenings and Saturdays is enough to move into AI engineering without leaving your current job first.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Reliability, not just capability',
        copy: 'Async concurrency, rate limits, retries with jitter, circuit breakers, resumable checkpoints and dead-letter queues. This is the difference between a notebook demo and a batch job that survives the night.',
      },
      {
        title: 'Cost is an engineering problem',
        copy: 'Model routing sends trivial work to a small local model and only hard reasoning to a frontier one — the standard route to a 60–80% inference-cost reduction with no measurable quality loss.',
      },
      {
        title: 'Attack it before someone else does',
        copy: 'You run a 200-attack automated red-team suite against your own agent, with a before-and-after mitigation report. Prompt injection is the defining unsolved risk of tool-using systems, and defence is architectural.',
      },
      {
        title: 'Multi-agent, measured honestly',
        copy: 'You do not assume more agents are better. You build the system, then report head-to-head against a single-agent baseline on cost, latency and success rate — which is the question a reviewer will ask.',
      },
    ],
    whyNow: {
      title: 'An Agent That Works in a Demo and One That Works in Production Are Different Software',
      points: [
        'The second one has bounded concurrency, a routing layer, durable state that survives a deploy, typed contracts between components, an evaluation suite gating every release and a cost figure per successful task.',
        'That gap is currently the most valuable thing an AI engineer can close.',
        'Companies have agents in production and almost nobody who can evaluate, secure and operate them.',
        'An engineer with a production agent, an evaluation platform and a security report typically starts around ₹35,000 – ₹70,000 per month in this market, and more in remote roles.',
      ],
    },
    roles: [
      'AI Engineer / LLM Application Engineer',
      'Agent Platform Engineer',
      'AI Automation / Integration Engineer',
      'MLOps / AI Reliability Engineer',
      'RAG & Retrieval Engineer',
      'AI Security Engineer',
    ],
    roleDetails: [
      {
        role: 'AI Engineer / LLM Application Engineer',
        copy: 'Mid level, and the most common destination from this course. Interviews test evaluation methodology, cost control and production incidents you have personally handled. Show the model router, the red-team report and the Kubernetes deployment with an SLO.',
      },
      {
        role: 'Agent Platform Engineer',
        copy: 'Senior-adjacent. Interviews test multi-tenancy, durable execution, gateway design and observability at scale. Show the durable procurement agent and the OAuth-protected MCP gateway.',
      },
      {
        role: 'AI Automation / Integration Engineer',
        copy: 'The role that connects agents to the systems a company already runs. The production MCP section is exactly this job — scoped tools, audit logs and per-user permissions rather than a shared API key.',
      },
      {
        role: 'MLOps / AI Reliability Engineer',
        copy: 'On-call for agents. Tracing, drift detection, shadow deployment, canary releases and the cost dashboard — the work this course grades you on in the evaluation, deployment and cost-engineering sections.',
      },
    ],
    hiring: [
      'Product companies running agents in production and needing them operated',
      'IT services and consultancies building agent automation for clients',
      'Platform teams inside larger businesses integrating AI into existing systems',
      'Remote roles, where agent engineering supply is well behind demand',
    ],
    nextSteps: [
      'The 9-month Agentic AI Diploma (Architect track)',
      'Kubernetes and platform engineering',
      'AI security specialisation',
      'Post-training and model customisation',
    ],
    industries: ['Product & platform', 'IT services', 'Consulting', 'Remote / global'],
    salary: {
      role: 'AI Engineer',
      summary:
        'Builds, evaluates, secures and operates agents in production. Agent engineering is currently one of the few fields where supply is well behind demand.',
      starting: '₹35,000–₹70,000/month',
      after2: '₹80,000–₹1,60,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — AI Engineer',
          fresher: '₹35,000–₹70,000/month',
          after2: '₹80,000–₹1,60,000/month',
          scale: { fresher: 52500, after2: 120000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹50,000–₹90,000/month',
          after2: '₹1,20,000–₹2,50,000+/month',
          scale: { fresher: 70000, after2: 185000 },
        },
        {
          name: 'Remote / Contract Agent Work',
          fresher: '₹30,000–₹65,000/month',
          after2: '₹1,00,000–₹2,20,000+/month',
          scale: { fresher: 47500, after2: 160000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 6-month program?',
        a: 'AI Engineer, LLM Application Engineer and Agent Platform Engineer. Those interviews test evaluation methodology, cost control and production incidents you have personally handled — which is what the red-team report, the model router and the Kubernetes deployment are for.',
      },
      {
        q: 'What salary can I expect after this course?',
        a: 'An engineer with a production agent, an evaluation platform and a security report typically starts around ₹35,000 – ₹70,000 per month in this market, and more in remote roles. Agent engineering is currently one of the few fields where supply is well behind demand.',
      },
      {
        q: 'Why is this the highest salary band in the After 12th section?',
        a: 'Because the second half of the course covers work almost nobody applying for these roles can do — durable execution, evaluation harnesses, red teaming, Kubernetes and cost engineering. Companies have agents in production and very few people able to operate them.',
      },
      {
        q: 'Is there remote work in agent engineering?',
        a: 'A great deal. The systems are not in the room, and demand is national rather than local — which is why remote roles are common and pay above the local band.',
      },
    ],
    projects: [
      {
        name: 'Async LLM Client Library',
        summary:
          'Rate-limited, retried, cached and fully typed, with 90%+ test coverage and a resumable 100,000-record enrichment run behind it.',
        tech: ['asyncio', 'httpx', 'Tenacity', 'pytest'],
        level: 'Intermediate',
        skills: ['Async Engineering', 'Reliability'],
      },
      {
        name: 'Multi-Provider Model Router',
        summary:
          'A cascading router with automatic fallback and a self-hosted vLLM endpoint, benchmarked across five models on cost, quality and latency.',
        tech: ['LiteLLM', 'vLLM', 'OpenRouter'],
        level: 'Intermediate',
        skills: ['Model Routing', 'Cost Engineering'],
      },
      {
        name: 'GraphRAG Retrieval Service',
        summary:
          'Hybrid search plus reranking plus a knowledge graph, with an ablation study quantifying what each component actually contributed.',
        tech: ['Neo4j', 'GraphRAG', 'ColBERT'],
        level: 'Advanced',
        skills: ['Advanced Retrieval', 'Ablation Study'],
      },
      {
        name: 'Durable Procurement Agent',
        summary:
          'A multi-day workflow that survives a forced restart mid-execution and correctly compensates a partially completed order.',
        tech: ['Temporal', 'LangGraph', 'Redis'],
        level: 'Advanced',
        skills: ['Durable Execution', 'Compensation'],
      },
      {
        name: '200-Attack Red-Team Report',
        summary:
          'A full threat model with an automated injection suite and a measured before-and-after mitigation result, plus an incident runbook.',
        tech: ['Garak', 'PyRIT', 'Lakera Guard'],
        level: 'Advanced',
        skills: ['AI Security', 'Threat Modelling'],
      },
      {
        name: 'Kubernetes Agent Deployment',
        summary:
          'An autoscaled, canary-released platform defined in Terraform, with a load-test report and a published SLO and error budget.',
        tech: ['Kubernetes', 'Helm', 'Terraform', 'ArgoCD'],
        level: 'Advanced',
        skills: ['Deployment', 'SLOs'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Progress based on skill, not calendar',
        copy: 'You advance when a deliverable passes review. Nobody reaches the capstone without every previous topic actually passing.',
      },
      {
        title: 'Real infrastructure, licensed and supervised',
        copy: 'Kubernetes clusters, self-hosted vLLM endpoints and live model APIs with per-student budgets — so the load test is a load test, not a thought experiment.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching Temporal workflows and MCP gateways are the people writing them for client work, which is why the failure sections cover failures that actually happen.',
      },
      {
        title: 'A ladder you can extend',
        copy: 'Finish here at 6 months, or continue into the 9-month Architect track later. The extension picks up exactly where this course ends — you never repeat what you have already passed.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 6-Month Agentic AI Program in Phagwara?',
        a: 'Six months in total. The first three months cover the foundation topics and the next three months cover the professional topics. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'How is this different from the 3-month program?',
        a: 'The 3-month program covers the foundation topics — Python, prompting, tool calling, RAG, memory, graph orchestration and a deployed capstone. The 6-month program includes all of that and then adds the professional topics: async engineering, model routing, DSPy, production MCP, GraphRAG, durable execution, multi-agent systems, browser and coding agents, evaluation, red teaming, Kubernetes and unit economics.',
      },
      {
        q: 'Do I need programming experience or a technical background?',
        a: 'No. The course begins with Python taught from the first line, and the programme is explicitly built for career changers and students joining straight after 12th from any stream. By the time you reach the professional topics you already have a solid foundation of Python, tool calling and retrieval behind you.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'Seven portfolio projects: an async LLM client library, a multi-provider model router, a GraphRAG retrieval service, a durable procurement agent, a browser-and-coding agent pair, a 200-attack red-team report and a Kubernetes agent deployment. They finish in the capstone — a live multi-user product with an eval dashboard, an SLO, a cost model and a public technical write-up.',
      },
      {
        q: 'Can I extend to the 9-month program later?',
        a: 'Yes, and nothing is repeated. The 9-month program picks up exactly where this course ends — an expert extension covering data pipelines, billion-scale retrieval, A2A interoperability, evaluation services, post-training, voice and multimodal agents, platform design and governance.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-6-month-data-science-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
      'after-12th-6-month-full-stack-development-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month agentic AI program in Phagwara',
      'agentic AI certificate course Phagwara',
      'AI agents and LangGraph training Phagwara',
      'AI engineer course Punjab',
      'agentic AI course with placement Phagwara',
    ],
  }),

  /* ---------------------------------------------------------- cyber security -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-cyber-security-program-in-phagwara',
    label: 'Cyber Security',
    title: 'Best After 12th 6-Month Cyber Security Certificate Program in Phagwara',
    icon: 'shield',
    duration: '6 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Six months from your first Linux install to an industry-level AI security platform — ethical hacking and web security, SOC and SIEM operations, cloud security and DevSecOps, digital forensics and incident response, with AI automation throughout.',
    overview:
      'This is the six-month AI-Powered Cybersecurity certificate programme, written for someone starting straight after 12th. Six months, six modules each, and a set of mini projects at the end of every month. It sits between the three-month programme and the nine-month diploma, and what it buys over the shorter track is depth on the two things employers actually staff for: a full month of digital forensics, malware analysis and incident response, and a full month of cloud security and DevSecOps.\nMonth one is cybersecurity foundations and networking — the CIA triad, types of cyber attack, security domains, the threat landscape and career paths; hardware, operating systems, Windows and Linux administration, file systems and user management; then networking properly, with the OSI and TCP/IP models, IP addressing, subnetting, routing, switching, DNS, DHCP, NAT and VPN; virtualisation on VMware and VirtualBox with Kali Linux and Windows Server installed; Git and GitHub; and AI for cybersecurity.\nMonth two is ethical hacking and web security: OSINT, Google dorking, WHOIS, DNS and subdomain enumeration; Nmap, Wireshark, Nikto, Gobuster and Nuclei; web technologies and the OWASP Top 10 with SQL injection, XSS, CSRF, file upload vulnerabilities and authentication bypass; Burp Suite Professional; and AI-assisted reconnaissance, report generation and vulnerability analysis.\nMonth three is advanced ethical hacking and the SOC — Metasploit, Hydra, password attacks and wireless security; Windows security with Active Directory, Group Policy and privilege escalation basics; SOC fundamentals, blue team operations and the incident lifecycle; SIEM with Wazuh, Splunk and the ELK Stack; threat hunting with MITRE ATT&CK, IOCs and detection engineering; and AI-powered SOC work.\nMonth four is cloud security and automation: AWS security across IAM, EC2, S3, CloudTrail and security groups; Azure IAM, Defender and Security Center; Docker and Kubernetes security; DevSecOps with CI/CD security, SAST, DAST and secret management; Python security automation; and the OpenAI and Gemini APIs for an AI security assistant and chatbot.\nMonth five is digital forensics, malware analysis and incident response — evidence collection, chain of custody, memory and disk analysis; static and dynamic malware analysis, sandboxing and indicators of compromise; the incident response cycle; and threat intelligence with IOCs, TTPs, STIX, TAXII and threat feeds. Month six is the industry capstone and placement preparation. All lab work runs on your own virtual lab, on deliberately vulnerable applications such as DVWA and OWASP Juice Shop, and on TryHackMe, Hack The Box, the PortSwigger Web Security Academy and OverTheWire — systems you are permitted to test, with a trainer supervising.',
    demand:
      'Employers hiring an analyst want to know you can collect evidence without contaminating it, profile a suspicious binary and take an incident from detection to a lessons-learned write-up — and a whole month on exactly that is what separates this from a short course.',
    modules: [
      {
        title: 'Month 1 — Cybersecurity Foundations & Networking',
        summary:
          'The ground floor, ending with your own virtualised lab.',
        topics: [
          'Cybersecurity fundamentals: the CIA triad, types of cyber attack and security domains',
          'The threat landscape and cybersecurity careers',
          'Computer fundamentals: hardware, operating systems and file systems',
          'Windows and Linux administration; user management',
          'Networking: the OSI and TCP/IP models, IP addressing and subnetting',
          'Routing, switching, DNS, DHCP, NAT and VPN',
          'Virtualisation on VMware and VirtualBox; Kali Linux and Windows Server installation',
          'Git and GitHub: basics, workflow and version control',
          'AI for cybersecurity: ChatGPT, Gemini, GitHub Copilot, prompt engineering and AI research',
          'Mini projects: home lab, secure Linux installation, network documentation, password policy',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Ethical Hacking & Web Security',
        summary:
          'Reconnaissance, assessment and the OWASP Top 10 in Burp Suite Professional.',
        topics: [
          'Information gathering: OSINT, Google dorking, WHOIS, DNS and subdomain enumeration',
          'Vulnerability assessment with Nmap, Wireshark, Nikto, Gobuster and Nuclei',
          'Web technologies: HTTP, HTTPS, cookies, sessions and APIs',
          'The OWASP Top 10: SQL injection, XSS, CSRF, file upload flaws and authentication bypass',
          'Burp Suite Professional: Proxy, Intruder, Repeater, Decoder and Comparer',
          'AI-assisted security testing: reconnaissance, report generation and vulnerability analysis',
          'Mini projects: DVWA assessment, Juice Shop assessment, professional vulnerability report',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Advanced Ethical Hacking & SOC',
        summary:
          'A full month of blue team work — the part an L1 analyst is actually hired to do.',
        topics: [
          'Exploitation: Metasploit, Hydra, password attacks and wireless security',
          'Windows security: Active Directory, Group Policy and privilege escalation basics',
          'Security Operations Centre: SOC fundamentals, blue team operations and the incident lifecycle',
          'SIEM: Wazuh, Splunk, the ELK Stack, log collection and log analysis',
          'Threat hunting: MITRE ATT&CK, IOCs, threat intelligence and detection engineering',
          'AI-powered SOC: AI threat detection, AI log analysis and AI incident classification',
          'Mini projects: Wazuh deployment, AI log analyser, threat hunting report',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Cloud Security & Security Automation',
        summary:
          'Securing what everyone has already moved to, and automating the repetitive half.',
        topics: [
          'AWS security: IAM, EC2 security, S3 security, CloudTrail and security groups',
          'Azure security: Azure IAM, Azure Defender and Azure Security Center',
          'Container security: Docker and Kubernetes',
          'DevSecOps: CI/CD security, SAST, DAST and secret management',
          'Python security automation: basics, automation scripts, log parsing and API automation',
          'AI automation: the OpenAI and Gemini APIs, an AI security assistant and a security chatbot',
          'Mini projects: AI security assistant, automated vulnerability scanner, cloud security assessment',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Digital Forensics, Malware Analysis & Incident Response',
        summary:
          'The month no three-month course carries, and the one serious employers ask about.',
        topics: [
          'Digital forensics: evidence collection, chain of custody, memory analysis and disk analysis',
          'Malware analysis: static analysis, dynamic analysis, sandboxing and indicators of compromise',
          'Incident response: detection, containment, eradication, recovery and lessons learned',
          'Threat intelligence: IOCs, TTPs, STIX, TAXII and threat feeds',
          'AI in DFIR: AI malware detection, AI incident response and AI threat intelligence',
          'Major project options: AI malware detection, AI phishing detection or an AI incident response platform',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Capstone Project & Placement Preparation',
        summary:
          'One documented, deployed, hardened platform — then a full month of getting hired.',
        topics: [
          'Industry capstone: an AI SOC platform, threat hunting platform, vulnerability scanner or security chatbot',
          'Project documentation: architecture, technical documentation, user manual and GitHub repository',
          'Deployment: cloud deployment, Docker deployment and security hardening',
          'Resume and portfolio: ATS resume, LinkedIn optimisation and GitHub profile',
          'Interview preparation across networking, Linux, security, hacking, SOC, SIEM, cloud and AI security',
          'Mock interviews: technical round, HR round and practical assessment',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'A SOC you can operate — Wazuh deployed by you, plus Splunk and the ELK Stack mapped to MITRE ATT&CK',
      'Forensics and incident response: evidence with chain of custody, memory and disk analysis, malware sandboxed',
      'Cloud secured and automated across AWS, Azure, Docker and Kubernetes with SAST, DAST and secret management',
      'Web application testing to a professional reporting standard in Burp Suite Professional',
      'Security work automated in Python and built on the OpenAI and Gemini APIs',
      'An industry AI security capstone, documented, deployed and hardened',
    ],
    tools: [
      'Kali Linux & Windows Server',
      'VMware & VirtualBox',
      'Nmap & Wireshark',
      'Nikto, Gobuster & Nuclei',
      'Burp Suite Professional',
      'Metasploit & Hydra',
      'Wazuh, Splunk & ELK Stack',
      'MITRE ATT&CK & Sysmon',
      'AWS & Azure',
      'Docker & Kubernetes',
      'Python, Bash & PowerShell',
      'OpenAI & Gemini APIs',
      'Forensics & malware sandboxes',
      'TryHackMe & Hack The Box',
      'Git & GitHub',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. Month one begins at the CIA triad and computer hardware and ends with your own cybersecurity lab on VMware or VirtualBox — the environment every later exercise runs in.',
      },
      {
        label: 'Students aiming at a SOC floor',
        copy: 'Month three is a full month of SOC work — Wazuh, Splunk, the ELK Stack, MITRE ATT&CK, detection engineering — and month five adds the incident response cycle. That combination is what an L1 analyst is actually hired to do.',
      },
      {
        label: 'Students doing a degree alongside',
        copy: 'Six months of evenings or weekends runs comfortably beside a BCA, B.Sc IT or first-year B.Tech, and finishes with a documented capstone well before campus placements begin.',
      },
      {
        label: 'Anyone drawn to forensics or malware',
        copy: 'Month five is the reason to choose this over the three-month track: evidence collection, chain of custody, memory and disk analysis, static and dynamic malware analysis and sandboxing are not covered in any shorter programme.',
      },
      {
        label: 'IT support staff and career switchers',
        copy: 'Weekend batches exist for people already working. If you handle desktops or networks today, month one will feel familiar and the cloud and DevSecOps work in month four is the fastest route to a better title.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If TryHackMe rooms left you able to follow a walkthrough but not to write the report afterwards, what changes here is a trainer reading your work each week and eight mini projects with deadlines attached.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Foundations taught properly',
        copy: 'Linux and Windows administration and a full networking module — OSI and TCP/IP, subnetting, routing, switching, DNS, DHCP, NAT and VPN — before a single tool is opened.',
      },
      {
        title: 'Ethical hacking and web security',
        copy: 'OSINT and enumeration, Nmap, Wireshark, Nikto, Gobuster and Nuclei, then the OWASP Top 10 in Burp Suite Professional — SQL injection, XSS, CSRF, file upload and authentication bypass.',
      },
      {
        title: 'SIEM and SOC operations',
        copy: 'Wazuh, Splunk and the ELK Stack with log collection and analysis, blue team operations, the incident lifecycle, MITRE ATT&CK, IOCs, threat intelligence and detection engineering.',
      },
      {
        title: 'Forensics, malware and incident response',
        copy: 'Evidence collection and chain of custody, memory and disk analysis, static and dynamic malware analysis, sandboxing, and the full detection-to-lessons-learned cycle.',
      },
      {
        title: 'Cloud security and DevSecOps',
        copy: 'AWS IAM, EC2, S3, CloudTrail and security groups; Azure IAM, Defender and Security Center; Docker and Kubernetes security; CI/CD security, SAST, DAST and secret management.',
      },
      {
        title: 'AI security automation and a capstone',
        copy: 'Python automation and the OpenAI and Gemini APIs for an AI security assistant and chatbot, then one industry-level AI security platform documented, deployed and hardened.',
      },
    ],
    whyNow: {
      title: 'Six Months, Both Sides of the Fence, and an AI Security Platform You Built',
      points: [
        '15+ hands-on labs, 8+ mini projects and one industry-level AI security capstone — on legal targets, under supervision.',
        'SOC Analyst and security roles in Punjab start around ₹18,000 – ₹30,000 a month for a fresher with documented work.',
        'A year or two on a real alert queue usually doubles that, and specialists in forensics, cloud security or AI security automation move well beyond it.',
        'Those are the roles employers currently struggle hardest to fill.',
      ],
    },
    roles: [
      'SOC Analyst (L1/L2)',
      'Cybersecurity Analyst',
      'Penetration Tester',
      'VAPT Engineer',
      'Threat Hunter',
      'Incident Response Analyst',
      'Malware Analyst',
      'Digital Forensics Analyst',
      'Cloud Security Engineer',
      'DevSecOps Engineer',
      'AI Security Engineer',
    ],
    roleDetails: [
      {
        role: 'SOC Analyst (L1)',
        copy: 'Straight after 12th this is the usual first step — monitoring, triage and escalation on a real alert queue. Month three is its foundation.',
      },
      {
        role: 'Digital Forensics Analyst',
        copy: 'Evidence collection, memory and disk analysis and the write-up afterwards. Month five is a whole month on this, and no shorter programme carries it.',
      },
      {
        role: 'Cloud Security Engineer',
        copy: 'Securing AWS and Azure environments and containers. Month four’s DevSecOps work maps straight onto it, and it is one of the hardest roles to fill locally.',
      },
      {
        role: 'VAPT Engineer',
        copy: 'Vulnerability assessment and penetration testing delivered as billable engagements, judged on the professional reporting standard month two teaches.',
      },
      {
        role: 'AI Security Engineer',
        copy: 'A newer title and the reason AI runs through every month — building the automation and detection tooling a modern SOC increasingly relies on.',
      },
    ],
    hiring: [
      'Managed security service providers running SOCs for multiple clients',
      'IT services companies offering security testing and audits',
      'Banks, NBFCs and fintech businesses with regulatory obligations',
      'Any mid-sized business with an internal IT team and a compliance obligation',
    ],
    nextSteps: [
      'The 9-month Cyber Security Diploma Program',
      'CEH, Security+ or OSCP certification',
      'Cloud security specialisation',
      'Digital forensics and incident response depth',
    ],
    industries: ['Managed security', 'IT services', 'Banking & fintech', 'Consulting & audit'],
    salary: {
      role: 'SOC Analyst / Security Analyst',
      summary:
        'Monitors, tests, defends and investigates the systems a business runs on. A year or two on a real alert queue usually doubles the starting figure.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹36,000–₹65,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Security Analyst',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹36,000–₹65,000/month',
          scale: { fresher: 24000, after2: 50500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹28,000–₹50,000/month',
          after2: '₹60,000–₹1,10,000+/month',
          scale: { fresher: 39000, after2: 85000 },
        },
        {
          name: 'Remote SOC / VAPT Consulting',
          fresher: '₹16,000–₹32,000/month',
          after2: '₹45,000–₹95,000+/month',
          scale: { fresher: 24000, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'SOC Analyst L1/L2, Cybersecurity Analyst, Penetration Tester, Ethical Hacker, VAPT Engineer, Security Engineer, Threat Hunter, Incident Response Analyst, Malware Analyst, Digital Forensics Analyst, Cloud Security Engineer, DevSecOps Engineer, Security Consultant, Red Team Operator, Blue Team Analyst, GRC Analyst, and the newer AI Security Engineer and AI SOC Analyst titles. Straight after 12th, SOC Analyst L1 is the usual first step.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with documented labs and a deployed capstone typically starts around ₹18,000 – ₹30,000 a month in this market. A year or two on a real alert queue usually doubles that, and specialists in forensics, cloud security or AI security automation move well beyond it — those are the roles employers currently struggle hardest to fill.',
      },
      {
        q: 'Why does digital forensics matter for a first job?',
        a: 'Because an alert is only the beginning. Employers hiring an analyst want to know you can collect evidence without contaminating it, preserve chain of custody, profile a suspicious binary in a sandbox and take an incident from detection through containment to a lessons-learned write-up. Month five is a whole month on exactly that, and it is the clearest difference between this programme and a short course.',
      },
      {
        q: 'Can I freelance or work remotely with this?',
        a: 'Yes. Vulnerability assessment and penetration test reports are billable work anywhere, and a Phagwara address costs you nothing on a remote brief. Month two teaches the professional reporting standard those engagements are judged on, and the cloud and automation work in month four is what lets one person maintain several client environments.',
      },
    ],
    projects: [
      {
        name: 'Home Cybersecurity Lab',
        summary:
          'Month one’s build: Kali Linux and Windows Server virtualised on VMware or VirtualBox, with a secure Linux installation, documented network and an implemented password policy.',
        tech: ['Kali', 'VMware'],
        level: 'Beginner',
        skills: ['Virtualisation', 'Lab Design'],
      },
      {
        name: 'DVWA & Juice Shop Assessments',
        summary:
          'Two deliberately vulnerable applications worked end to end in Burp Suite Professional — SQL injection, XSS, CSRF, file upload and authentication bypass against the OWASP Top 10.',
        tech: ['Burp Suite', 'DVWA'],
        level: 'Beginner',
        skills: ['Web Security', 'OWASP Top 10'],
      },
      {
        name: 'Professional Vulnerability Report',
        summary:
          'A network scanned with Nmap and Nuclei, traffic read in Wireshark, findings written to a professional standard — with AI report generation speeding the write-up, not replacing your judgement.',
        tech: ['Nmap', 'Nuclei', 'Wireshark'],
        level: 'Intermediate',
        skills: ['Assessment', 'Professional Reporting'],
      },
      {
        name: 'Wazuh Deployment & Threat Hunting Report',
        summary:
          'A SIEM you deployed yourself with real log collection, an AI log analyser over it, and a threat hunting report built on MITRE ATT&CK, IOCs and detection engineering.',
        tech: ['Wazuh', 'Splunk', 'MITRE ATT&CK'],
        level: 'Intermediate',
        skills: ['SIEM Operations', 'Threat Hunting'],
      },
      {
        name: 'AI Security Assistant & Cloud Assessment',
        summary:
          'Python automation on the OpenAI and Gemini APIs producing a security assistant and an automated vulnerability scanner, plus a cloud security assessment across AWS and Azure.',
        tech: ['Python', 'OpenAI API', 'AWS', 'Azure'],
        level: 'Advanced',
        skills: ['Security Automation', 'Cloud Security'],
      },
      {
        name: 'Industry AI Security Capstone',
        summary:
          'One platform in month six — an AI SOC platform, threat hunting platform, vulnerability scanner, security automation platform or security chatbot — documented with architecture and a user manual, pushed to GitHub and deployed with security hardening.',
        tech: ['Python', 'Docker', 'GitHub'],
        level: 'Advanced',
        skills: ['Platform Engineering', 'Documentation'],
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
        title: 'Red team, blue team, purple team',
        copy: 'Offensive technique first, then detection, response and forensics — and the purple team practice of using each to improve the other, which is how mature security teams actually run.',
      },
      {
        title: 'A whole month on forensics and IR',
        copy: 'Evidence handling, memory and disk analysis, malware sandboxing and the incident response cycle. No three-month course carries this, and it is what a serious employer asks about.',
      },
      {
        title: 'AI on real API keys',
        copy: 'Month four builds against the real OpenAI and Gemini APIs — an AI security assistant, a security chatbot, an automated vulnerability scanner — rather than watching a recording of one.',
      },
      {
        title: 'Placement support that persists',
        copy: 'ATS resume, GitHub and LinkedIn work, subject-wise interview questions across networking, Linux, security, hacking, SOC, SIEM, cloud and AI, then technical, HR and practical mock rounds and repeated drives with hiring partners.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this Cyber Security programme after 12th?',
        a: 'Six months, running as a fixed calendar of six modules per month: cybersecurity foundations and networking; ethical hacking and web security; advanced ethical hacking and SOC; cloud security and security automation; digital forensics, malware analysis and incident response; then the industry capstone and placement preparation. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Is the ethical hacking part legal, and what do I practise on?',
        a: 'Everything is done on systems you are permitted to test: your own virtual lab built in month one, deliberately vulnerable applications such as DVWA and OWASP Juice Shop, and the TryHackMe, Hack The Box, PortSwigger Web Security Academy and OverTheWire platforms. Scanning or attacking systems you do not own or have written permission to test is a criminal offence, and the course teaches the authorisation, scoping and reporting practices that keep professional work on the right side of that line.',
      },
      {
        q: 'How is this different from the 3-month and 9-month cybersecurity programmes?',
        a: 'Three months covers foundations, ethical hacking, web security, SOC and SIEM basics, cloud fundamentals and an AI capstone. This six-month certificate adds Active Directory and Group Policy, the ELK Stack, detection engineering, a full month of cloud security and DevSecOps, and a full month of digital forensics, malware analysis, incident response and threat intelligence. The nine-month diploma adds two months on the capstone instead of one, plus a complete month of technical interview preparation, SOC analyst drills, aptitude and mock interviews.',
      },
      {
        q: 'How many labs and projects will I build?',
        a: '15+ hands-on labs and 8+ mini projects: a home cybersecurity lab, a secure Linux installation, network documentation, a password policy, a DVWA assessment, a Juice Shop assessment, a professional vulnerability report, a Wazuh deployment, an AI log analyser, a threat hunting report, an AI security assistant, an automated vulnerability scanner and a cloud security assessment — plus one industry-level AI security capstone.',
      },
      {
        q: 'Do I need to know Python first?',
        a: 'No. Python basics are taught in month four specifically for security automation — automation scripts, log parsing and API automation — and applied immediately to the OpenAI and Gemini API work in the same month. There is no model training and no data-science prerequisite.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-cyber-security-program-in-phagwara',
      'after-12th-9-month-cyber-security-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-6-month-data-science-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month cyber security program in Phagwara',
      'cyber security certificate course Phagwara',
      'ethical hacking and SOC training Phagwara',
      'digital forensics course Punjab',
      'cyber security course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------ data science -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-data-science-program-in-phagwara',
    label: 'Data Science',
    title: 'Best After 12th 6-Month Data Science Certificate Program in Phagwara',
    icon: 'database',
    duration: '6 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A six-month, project-driven path you can start straight after school — from Excel and Python fundamentals through machine learning and deep learning to LLMs, RAG, AI agents and a deployed industry capstone.',
    overview:
      'This is the current edition of the Data Science programme, written for someone starting straight after 12th. Six months, one theme per month, and something you have built at the end of each. What makes it different from an older data science syllabus is that the classical pipeline and the AI stack are taught as one job rather than two courses — you finish able to clean data and train a model, and also to put a working AI assistant in front of a business.\nMonth one is data and programming foundations: advanced Excel, Power Query, Power BI, DAX, business dashboards and KPI reporting; then Python from the ground up with VS Code, the uv package manager, virtual environments, OOP, exception handling, logging, type hinting, pytest, Ruff and Black; Git, GitHub and AI coding tools; and SQL on PostgreSQL with database design, window functions, query optimisation, APIs, JSON, FastAPI basics, JWT authentication and Postman.\nMonth two is data engineering and machine learning — Pandas 2.x, NumPy, Polars, DuckDB and PyArrow, then data cleaning, feature engineering, EDA, interactive visualisation with Plotly and Streamlit, statistics and probability, scikit-learn pipelines and cross validation, and gradient boosting with XGBoost, LightGBM and CatBoost. Month three is deep learning and computer vision: PyTorch, tensors and neural networks, CNNs and transfer learning with OpenCV, YOLO, OCR, image segmentation and Vision Transformers, then Hugging Face, tokenizers and the Model Hub.\nMonths four and five are the AI half. Month four covers LLM fundamentals — tokenization, embeddings, context windows and attention — prompt engineering, the OpenAI, Gemini, Claude and Grok APIs alongside Ollama and LiteLLM, and embeddings with FAISS, ChromaDB, Pinecone, Qdrant and Milvus. Month five turns that into applications: RAG architecture with hybrid search, re-ranking, evaluation and guardrails; LangChain, LangGraph, CrewAI and the Model Context Protocol; AI agents and multi-agent systems; and FastAPI advanced, async, background tasks, WebSockets, Streamlit, Gradio and Chainlit.\nMonth six deploys everything — Docker, Linux, Nginx, AWS, Azure AI and Google Vertex AI, AI security including prompt injection and jailbreak defence, secret management, responsible AI and CI/CD with GitHub Actions — and finishes with a complete industry-level AI SaaS application built on FastAPI, PostgreSQL, RAG pipelines and AI agents, documented and pushed to a professional GitHub repository.',
    demand:
      'Candidates who can demonstrably ship a RAG system or an agent workflow move well beyond the entry band, because far fewer applicants can show one.',
    modules: [
      {
        title: 'Month 1 — Data & Programming Foundations',
        summary:
          'Excel and Power BI first — the half of the syllabus that is employable before the rest of it finishes.',
        topics: [
          'Advanced Excel, Power Query, Power BI and DAX',
          'Business dashboards, KPI reporting, AI productivity and data literacy',
          'Python fundamentals with VS Code, the uv package manager and virtual environments',
          'OOP, exception handling, logging and type hinting',
          'Engineering practice: pytest, Ruff and Black',
          'Git, GitHub, Git Flow and AI coding tools including Copilot and Cursor',
          'SQL on PostgreSQL: database design, window functions and query optimisation',
          'APIs, JSON, FastAPI basics, authentication with JWT and Postman',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Data Engineering & Machine Learning',
        summary:
          'A tuned, evaluated model — not a fitted notebook.',
        topics: [
          'Data engineering: Pandas 2.x, NumPy, Polars, DuckDB and PyArrow',
          'Data cleaning, feature engineering and feature selection',
          'Exploratory data analysis and data preprocessing',
          'Interactive visualisation with Plotly and Streamlit',
          'Statistics and probability at the depth the modelling needs',
          'Machine learning with scikit-learn: pipelines and cross validation',
          'Gradient boosting with XGBoost, LightGBM and CatBoost',
          'Model evaluation and hyperparameter optimisation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Deep Learning & Computer Vision',
        summary:
          'Where deep learning becomes concrete rather than theoretical.',
        topics: [
          'Deep learning fundamentals with PyTorch',
          'Tensor operations and neural networks',
          'CNNs, transfer learning and computer vision with OpenCV',
          'Object detection with YOLO; OCR and image segmentation',
          'Vision Transformers',
          'Transformers, Hugging Face, tokenizers and the Model Hub',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — LLM Fundamentals & Vector Search',
        summary:
          'The internals of the models everyone else only calls, and five vector databases.',
        topics: [
          'LLM fundamentals: tokenization, embeddings, context windows and the attention mechanism',
          'Prompt engineering, prompt optimisation, system prompts and structured prompting',
          'The OpenAI, Gemini, Claude and Grok APIs',
          'Ollama for local models and LiteLLM for routing',
          'Embeddings and vector databases: FAISS, ChromaDB, Pinecone, Qdrant and Milvus',
          'Semantic search',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — RAG, AI Agents & App Development',
        summary:
          'Turning models into applications a business can use.',
        topics: [
          'RAG architecture: hybrid search, re-ranking, evaluation and guardrails',
          'LangChain and LangGraph: prompt templates, chains and memory',
          'CrewAI and the Model Context Protocol',
          'Tool calling, function calling and structured outputs',
          'AI agents, multi-agent systems and autonomous workflows',
          'Enterprise agent design',
          'FastAPI advanced, async programming, background tasks and WebSockets',
          'Streamlit, Gradio and Chainlit interfaces',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Deployment & Industry Capstone',
        summary:
          'A full month on one end-to-end AI SaaS application, secured and shipped.',
        topics: [
          'Docker, Docker Compose, Linux, Nginx and reverse proxy',
          'AWS, Azure AI, Google Vertex AI and serverless AI deployment',
          'AI security: prompt injection, jailbreak defence and secret management',
          'Responsible AI',
          'CI/CD pipelines with GitHub Actions and automated deployment',
          'The industry capstone: an end-to-end AI SaaS on FastAPI, PostgreSQL, RAG and agents',
          'Capstone documentation, code review best practices and GitHub repository management',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'A business dashboard in month one — Power Query, DAX and Power BI reporting real KPIs',
      'A tuned, evaluated model with cross validation and gradient boosting compared honestly',
      'Deep learning made concrete: a PyTorch CNN extended into YOLO object detection and OCR',
      'A working RAG assistant with hybrid search, re-ranking and guardrails, evaluated for hallucination',
      'AI security applied — prompt injection and jailbreak defence, secret management, responsible AI',
      'An industry AI SaaS capstone containerised, deployed with CI/CD and documented on GitHub',
    ],
    tools: [
      'Excel, Power Query & Power BI',
      'Python, uv, Ruff & Black',
      'pytest',
      'PostgreSQL & FastAPI',
      'Pandas, NumPy, Polars & DuckDB',
      'scikit-learn',
      'XGBoost, LightGBM & CatBoost',
      'PyTorch, OpenCV & YOLO',
      'Hugging Face',
      'OpenAI, Gemini, Claude & Grok APIs',
      'Ollama & LiteLLM',
      'FAISS, ChromaDB, Pinecone, Qdrant & Milvus',
      'LangChain, LangGraph & CrewAI',
      'Streamlit, Gradio & Chainlit',
      'Docker, Nginx & GitHub Actions',
      'AWS, Azure AI & Vertex AI',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. Month one starts at Excel and Power BI, which most students have seen before, and ends with Python, Git and SQL — so the ramp is gradual rather than a wall on day one.',
      },
      {
        label: 'Students doing a degree alongside',
        copy: 'Most students run this next to a BCA, B.Sc, BBA or B.Com at a Phagwara college. Six months of evenings or weekends puts a deployed AI application on your CV well before campus placements begin.',
      },
      {
        label: 'Commerce and arts students',
        copy: 'Nothing here needs school physics or higher mathematics. Statistics and probability are taught in month two at the depth the modelling actually needs, and the Excel and Power BI work in month one is directly employable on its own.',
      },
      {
        label: 'Anyone choosing between a degree and a skill',
        copy: 'You do not have to choose. This is a certificate programme with a fixed six-month end date, and what it produces — a GitHub repository, a deployed capstone, a dashboard someone can use — is what a first employer inspects.',
      },
      {
        label: 'Career restarters and switchers',
        copy: 'A gap or an unrelated background counts for less than work someone can open. The syllabus is identical whoever you are; only the batch timing changes.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If free videos left you with half-finished notebooks, what changes here is a trainer reading your code every week and a capstone month with a deadline attached to it.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Excel, Power BI and data literacy',
        copy: 'Advanced Excel, Power Query, DAX, business dashboards and KPI reporting in month one — the half of the syllabus that is employable before the rest of it finishes.',
      },
      {
        title: 'Python and SQL, properly',
        copy: 'Modern Python with uv, virtual environments, OOP, type hinting, pytest and Ruff, plus PostgreSQL with window functions, query optimisation and FastAPI basics with JWT.',
      },
      {
        title: 'Machine learning and deep learning',
        copy: 'scikit-learn pipelines and cross validation, XGBoost, LightGBM and CatBoost, then PyTorch, CNNs, transfer learning, YOLO, OCR and Hugging Face.',
      },
      {
        title: 'LLMs, RAG and AI agents',
        copy: 'Tokenization, embeddings and attention; the OpenAI, Gemini, Claude and Grok APIs; five vector databases; RAG with hybrid search and guardrails; LangChain, LangGraph, CrewAI and MCP.',
      },
      {
        title: 'Cloud deployment and AI security',
        copy: 'Docker, Nginx, AWS, Azure AI and Google Vertex AI with GitHub Actions CI/CD — plus prompt injection and jailbreak defence, secret management and responsible AI.',
      },
      {
        title: 'One industry-level capstone',
        copy: 'A full month on one end-to-end AI SaaS application with FastAPI, PostgreSQL, RAG and agents, delivered with documentation, code review and a managed GitHub repository.',
      },
    ],
    whyNow: {
      title: 'Classical Data Science and the AI Stack, in One Six-Month Programme',
      points: [
        'Six months from Excel and SQL through machine learning, deep learning, RAG and AI agents — ending in a deployed industry AI SaaS capstone.',
        'Fresher Data Analyst and AI roles in Punjab start around ₹18,000 – ₹32,000 a month for someone with a portfolio an employer can open.',
        'Two years of delivery experience usually doubles that, and candidates who can ship a RAG system or an agent workflow move well beyond it.',
        'The classical pipeline and the AI stack are taught as one job, because that is how the role is now advertised.',
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
        copy: 'Straight after 12th the realistic first step, and the Power BI, SQL and Python work of months one and two is what gets you there.',
      },
      {
        role: 'AI Application Developer',
        copy: 'The other realistic first step — building software with models inside it, on FastAPI behind a Streamlit or Chainlit interface.',
      },
      {
        role: 'Machine Learning Engineer',
        copy: 'Closer to the model than the product: scikit-learn pipelines, gradient boosting and PyTorch. Opens as the portfolio grows.',
      },
      {
        role: 'LLM / AI Engineer',
        copy: 'Owning the model layer — tokenization, embeddings, context windows, multi-provider routing and the cost decisions that follow.',
      },
      {
        role: 'AI Agent Developer',
        copy: 'Systems that act rather than answer — LangGraph, CrewAI, MCP and multi-agent design. Currently one of the hardest AI roles to fill.',
      },
    ],
    hiring: [
      'Analytics and IT companies across Mohali, Jalandhar and Ludhiana',
      'Product startups building AI features into their software',
      'Manufacturing and retail businesses using data for forecasting',
      'Remote and freelance AI consulting, which this portfolio serves well',
    ],
    nextSteps: [
      'The 9-month Artificial Intelligence Diploma Program',
      'MLOps and production AI infrastructure',
      'Agentic AI in depth',
      'Cloud AI platform certification',
    ],
    industries: ['Analytics & IT', 'Product startups', 'Manufacturing & retail', 'Remote / global'],
    salary: {
      role: 'Data Analyst / AI Engineer',
      summary:
        'Builds pipelines, trains models and ships the applications that put them in front of a business. Two years of delivery experience usually doubles the starting figure.',
      starting: '₹18,000–₹32,000/month',
      after2: '₹38,000–₹75,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Data & AI',
          fresher: '₹18,000–₹32,000/month',
          after2: '₹38,000–₹75,000/month',
          scale: { fresher: 25000, after2: 56500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹32,000–₹55,000/month',
          after2: '₹70,000–₹1,40,000+/month',
          scale: { fresher: 43500, after2: 105000 },
        },
        {
          name: 'Remote / Freelance AI Work',
          fresher: '₹15,000–₹35,000/month',
          after2: '₹55,000–₹1,20,000+/month',
          scale: { fresher: 25000, after2: 87500 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'Data Analyst, Data Scientist, Machine Learning Engineer, Deep Learning Engineer, LLM / AI Engineer, AI Agent Developer, AI Application Developer, Backend / API Developer and freelance AI consultant. Straight after 12th the realistic first step is usually Data Analyst or an AI application role; the rest open as the portfolio grows.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with a deployed portfolio typically starts around ₹18,000 – ₹32,000 a month in this market. Two years of delivery experience usually doubles that, and candidates who can demonstrably ship a RAG system or an agent workflow move well beyond it, because far fewer applicants can show one.',
      },
      {
        q: 'Do I need maths or a science stream?',
        a: 'No. Statistics and probability are taught in month two at the level the work actually needs — distributions, sampling, evaluation metrics and what a result does and does not prove. Month one starts at Excel and Python fundamentals, so commerce and arts students sit in the same batch and finish the same capstone.',
      },
      {
        q: 'Can I freelance with this?',
        a: 'Yes, and this syllabus suits it unusually well. A dashboard, a forecast or a RAG assistant over a client’s own documents are all billable independent work, and a Phagwara address costs you nothing on a remote brief. You finish able to scope it, secure it, deploy it and document it.',
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
          'A messy real dataset cleaned and engineered in Pandas and Polars, explored with Plotly, then modelled through a scikit-learn pipeline and beaten with XGBoost, LightGBM and CatBoost — with the evaluation to prove it.',
        tech: ['scikit-learn', 'XGBoost', 'Polars'],
        level: 'Intermediate',
        skills: ['Feature Engineering', 'Model Evaluation'],
      },
      {
        name: 'Computer Vision Build',
        summary:
          'A PyTorch CNN with transfer learning, extended into object detection and OCR with YOLO and OpenCV — the project that makes deep learning concrete rather than theoretical.',
        tech: ['PyTorch', 'YOLO', 'OpenCV'],
        level: 'Intermediate',
        skills: ['Deep Learning', 'Object Detection'],
      },
      {
        name: 'RAG Assistant over Real Documents',
        summary:
          'Embeddings in a vector database with hybrid search, re-ranking and guardrails, answered by an LLM API and evaluated for hallucination — then wrapped in a Streamlit or Chainlit interface.',
        tech: ['LangChain', 'Vector DB', 'Chainlit'],
        level: 'Advanced',
        skills: ['Retrieval Augmentation', 'Evaluation'],
      },
      {
        name: 'Industry AI SaaS Capstone',
        summary:
          'The whole of month six on one application: FastAPI and PostgreSQL, RAG pipelines and AI agents, containerised with Docker, secured against prompt injection, deployed with GitHub Actions and documented for review. This is the one interviewers ask about.',
        tech: ['FastAPI', 'PostgreSQL', 'Docker', 'GitHub Actions'],
        level: 'Advanced',
        skills: ['End-to-End Delivery', 'AI Security'],
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
        title: 'Classical and AI in one programme',
        copy: 'Gradient boosting and vector databases, scikit-learn pipelines and LangGraph agents, taught in the same six months by the same trainer — because that is how the job is now advertised.',
      },
      {
        title: 'Current tooling, not legacy habits',
        copy: 'uv, Ruff, Black and pytest from month one; Polars and DuckDB alongside Pandas; PyTorch and Hugging Face for deep learning. You learn the stack a modern team actually runs.',
      },
      {
        title: 'AI on real API keys',
        copy: 'OpenAI, Gemini, Claude and Grok through real API calls, plus Ollama and LiteLLM for local and routed models — with cost, context limits and failure handling met head on rather than skipped.',
      },
      {
        title: 'A placement cell that persists',
        copy: 'Resume and portfolio guidance built into the programme, mock interviews and CV reviews, and repeated drives with hiring partners across Phagwara, Jalandhar and Ludhiana.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this Data Science programme after 12th?',
        a: 'Six months, one theme per month: data and programming foundations, data engineering and machine learning, deep learning and computer vision, LLM fundamentals and vector search, RAG and AI agents, then deployment and the industry capstone. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Does this cover generative AI and LLMs, or only classical data science?',
        a: 'Both, and that is the point of the current edition. Months 1 to 3 are the classical pipeline — Excel and Power BI, Python, SQL, data engineering, machine learning, gradient boosting, deep learning and computer vision. Months 4 to 6 are the LLM stack: tokenization and embeddings, prompt engineering, the OpenAI, Gemini, Claude and Grok APIs, vector databases, RAG architecture, LangChain, LangGraph, CrewAI, MCP, AI agents, FastAPI applications and cloud deployment.',
      },
      {
        q: 'Which vector databases and AI tools will I actually use?',
        a: 'FAISS, ChromaDB, Pinecone, Qdrant and Milvus for vector search. GitHub Copilot and Cursor as coding assistants from month one. The OpenAI, Gemini, Claude and Grok APIs with Ollama for local models and LiteLLM for routing in month four, then LangChain, LangGraph, CrewAI and the Model Context Protocol in month five. Real keys, real costs, real rate limits.',
      },
      {
        q: 'How many projects will I build?',
        a: 'Every month produces something a trainer reviews, and six are substantial portfolio pieces: a Power BI KPI dashboard, a JWT-secured FastAPI data service over PostgreSQL, an end-to-end ML pipeline with tuned gradient boosting, a PyTorch computer vision build with YOLO and OCR, a RAG assistant over real documents, and the month-six industry AI SaaS capstone.',
      },
      {
        q: 'Is AI security really part of a data science course?',
        a: 'It has its own place in the syllabus, and it is there because student LLM apps are exactly where prompt injection, leaked API keys and jailbreaks show up. You cover prompt injection and jailbreak defence, secret management, responsible AI and CI/CD with GitHub Actions before the capstone is deployed.',
      },
      {
        q: 'How is this different from the 4-month Data Science programme?',
        a: 'Both cover the classical pipeline and the LLM stack. This six-month certificate has more room: object detection, OCR, image segmentation and Vision Transformers in its deep learning month, a fuller treatment of production data tooling, and a whole month dedicated to the capstone rather than a single closing topic.',
      },
    ],
    relatedCourses: [
      'after-12th-4-month-data-science-program-in-phagwara',
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-6-month-data-analytics-program-in-phagwara',
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month data science program in Phagwara',
      'data science certificate course Phagwara',
      'machine learning and RAG training Phagwara',
      'AI SaaS development course Punjab',
      'data science course with placement Phagwara',
    ],
  }),

  /* ---------------------------------------------------------- data analytics -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-data-analytics-program-in-phagwara',
    label: 'Data Analytics',
    title: 'Best After 12th 6-Month Data Analytics Certificate Program in Phagwara',
    icon: 'chart',
    duration: '6 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Six months from your first pivot table to an enterprise analytics solution — Excel, SQL and Python, Power BI and Tableau, formal business analysis, modern cloud data platforms, machine learning and AI-assisted reporting.',
    overview:
      'The Data Analytics & Business Analysis programme is a six-month course written for someone starting straight after 12th. Organisations now generate enormous amounts of data from websites, apps, business operations, customer interactions, financial transactions and IoT devices, and they need people who can turn that raw information into decisions. This programme teaches you to collect, clean, analyse, visualise and interpret that data — and, just as importantly, to understand the business problem behind it.\nWhat separates it from a traditional analytics course is the second discipline running through it. Most programmes stop at Excel and SQL; this one adds formal business analysis — requirement gathering, BRD and FRD writing, stakeholder and gap analysis, Agile and Scrum in Jira, and BPMN process mapping — alongside modern cloud platforms like Microsoft Fabric, Snowflake, DuckDB and dbt, and AI tooling including ChatGPT, GitHub Copilot, the OpenAI API and LangChain. That is why the roles it opens include Business Analyst and MIS Executive as well as Data Analyst.\nMonths 1 and 2 build the foundation: the analytics lifecycle and descriptive through prescriptive analytics; advanced Excel with pivot tables, XLOOKUP, INDEX-MATCH, conditional formatting, Power Query and dashboard design; SQL from databases and keys through joins, CTEs, subqueries, CASE, window functions, views and query optimisation; Python fundamentals; and business statistics. Month 3 is Python for analytics — NumPy and Pandas, exploratory analysis with Matplotlib, Seaborn and Plotly, then REST APIs, JSON, Requests, BeautifulSoup, an introduction to Selenium and Streamlit apps.\nMonth 4 is business intelligence: Power BI Desktop and Service, Import versus DirectQuery, Power Query transformation, star and snowflake schemas, advanced DAX with time intelligence and KPI cards, then Tableau with parameters, maps, calculated fields, dashboards, stories and publishing. Month 5 bridges business and engineering — the business analyst’s role, requirement gathering, stakeholder, SWOT and gap analysis, BRD, FRD and SRS creation, user stories, Agile, Scrum, Jira and Confluence, BPMN process mapping in Lucidchart and Figma, warehouse, lake and lakehouse architecture with Microsoft Fabric, Snowflake and DuckDB, and ETL versus ELT with dbt, Apache Airflow, REST APIs and Postman. Month 6 closes with AI for analysts, machine learning, AI automation and portfolio development, then placement preparation and the final enterprise capstone.',
    demand:
      'MIS Executive and Reporting Analyst are the roles firms in this region hire for most often, and they are decided on Excel, SQL and Power BI — all three covered here to enterprise depth rather than as an introduction.',
    modules: [
      {
        title: 'Month 1 — Programming & Data Analytics Foundations',
        summary:
          'The lifecycle, the toolchain, and three dashboards before Python arrives.',
        topics: [
          'What data is, types of data and the analytics lifecycle',
          'Descriptive, diagnostic, predictive and prescriptive analytics; career roadmap',
          'Analytics in retail, finance, healthcare and marketing',
          'Installing Python, VS Code, Anaconda, Git, MySQL, DBeaver, Power BI and Tableau',
          'Advanced Excel: data cleaning, tables, pivot tables and pivot charts',
          'XLOOKUP, INDEX-MATCH, IF functions, conditional formatting and Power Query basics',
          'SQL fundamentals: databases, tables, keys, SELECT, WHERE, GROUP BY, HAVING and ORDER BY',
          'Python fundamentals: variables, loops, functions, file and exception handling, OOP basics',
          'Labs: Sales, HR and Inventory dashboards; retail and HR dataset queries',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — SQL, Advanced Excel & Business Statistics',
        summary:
          'SQL to enterprise depth — the round that decides most analyst interviews.',
        topics: [
          'DBMS and RDBMS; tables, relationships, primary and foreign keys',
          'Advanced SQL: INNER, LEFT, RIGHT and FULL JOIN, SELF JOIN and UNION',
          'CTEs, subqueries, CASE, window functions, views and query optimisation',
          'Advanced Excel: XLOOKUP, INDEX-MATCH, dynamic arrays and Power Query',
          'Dashboard design for Finance, HR and Sales',
          'Business statistics: mean, median and mode, variance and standard deviation',
          'Correlation, probability, normal distribution and outlier detection',
          'Business interpretation of statistical results',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Python for Data Analytics',
        summary:
          'From a blank file to an interactive analytics app.',
        topics: [
          'Python programming: syntax, operators, conditionals, loops, functions and lambdas',
          'File handling, exception handling and OOP basics',
          'NumPy arrays, operations, indexing and slicing',
          'Pandas Series and DataFrames; reading CSV and Excel files',
          'Filtering, sorting, missing value handling, GroupBy, merge, join and feature engineering',
          'Exploratory data analysis: cleaning, outlier detection and correlation analysis',
          'Matplotlib, Seaborn and Plotly interactive charts',
          'REST APIs, JSON, Requests, BeautifulSoup and an introduction to Selenium',
          'Streamlit basics and interactive dashboards',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Business Intelligence & Data Visualization',
        summary:
          'Both BI tools to executive depth, not an introduction to one.',
        topics: [
          'Business intelligence fundamentals; Power BI Desktop and Power BI Service',
          'Connecting Excel, SQL and web data; Import vs DirectQuery',
          'Power Query: data cleaning, merge and append queries, custom columns',
          'Data modelling: relationships, star schema, snowflake schema, fact and dimension tables',
          'DAX: measures, calculated columns and time intelligence',
          'Running totals, ranking, dynamic titles and KPI cards',
          'Tableau: interface, charts, maps, parameters and calculated fields',
          'Dashboards, stories, publishing and dashboard design best practices',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Business Analysis & Modern Data Engineering',
        summary:
          'The half of the job most analytics courses leave out entirely.',
        topics: [
          'The business analyst’s role; requirement gathering and stakeholder analysis',
          'SWOT and gap analysis; functional vs non-functional requirements',
          'BRD, FRD and SRS; user stories and acceptance criteria',
          'Agile, Scrum, sprint planning, Jira and Confluence',
          'BPMN and process mapping in Lucidchart and Figma',
          'Data warehouse, data lake and lakehouse architecture',
          'Microsoft Fabric, Snowflake and DuckDB',
          'ETL vs ELT, data pipelines, dbt fundamentals and an introduction to Apache Airflow',
          'REST APIs, Postman and JSON integration',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — AI-Powered Data Analytics & Career Readiness',
        summary:
          'Machine learning at analyst depth, AI-assisted reporting, then the capstone.',
        topics: [
          'AI fundamentals, generative AI and responsible AI',
          'ChatGPT, Microsoft Copilot, GitHub Copilot, Gemini and Claude; prompt engineering',
          'Generating SQL, Python code and business reports with AI tools',
          'Machine learning for analysts: supervised and unsupervised learning',
          'Linear and logistic regression, decision trees, random forest and K-means clustering',
          'Model evaluation; sales prediction and customer segmentation',
          'The OpenAI API, LangChain fundamentals, AI agents overview and RAG concepts',
          'Streamlit deployment, GitHub portfolio, LinkedIn optimisation and ATS resume building',
          'SQL, Python, Power BI and business analysis interview preparation; HR and mock interviews',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Executive dashboards, not sample charts — Excel, then Power BI with a star schema and advanced DAX, then a published Tableau story',
      'SQL to enterprise depth: SELF JOIN, UNION, CTEs, subqueries, CASE, window functions, views and optimisation',
      'A business analyst’s documentation set — a real BRD, FRD and SRS with user stories and a BPMN map',
      'A sprint actually run in Jira, with acceptance criteria written and tracked',
      'Machine learning at the depth an analyst uses it — prediction and segmentation you can put in a report',
      'An enterprise capstone with requirement gathering, SQL, Python EDA, Power BI and AI-assisted reporting',
    ],
    tools: [
      'Microsoft Excel & Power Query',
      'MySQL, PostgreSQL & DBeaver',
      'Python with NumPy & Pandas',
      'scikit-learn',
      'Matplotlib, Seaborn & Plotly',
      'Streamlit',
      'Requests, BeautifulSoup & Selenium',
      'Power BI & DAX',
      'Tableau',
      'Jira, Confluence & Agile/Scrum',
      'BPMN, Lucidchart & Figma',
      'Microsoft Fabric, Snowflake & DuckDB',
      'dbt & Apache Airflow',
      'ChatGPT, Copilot, Gemini & LangChain',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. You start with the analytics lifecycle and installing your toolchain, then move to Excel, which most students have seen before. Python only arrives once you know what you are automating.',
      },
      {
        label: 'Commerce and B.Com students',
        copy: 'This is the closest technical track to a commerce background. Finance, sales and HR dashboards run through every month, and the business analysis half is written in the language of requirements and process rather than of algorithms.',
      },
      {
        label: 'Students doing a degree alongside',
        copy: 'Most students run this next to a BBA, B.Com, BCA or B.Sc at a Phagwara college. Six months of evenings or weekends puts an executive dashboard and an enterprise capstone on your CV well before campus placements begin.',
      },
      {
        label: 'Anyone aiming at an office analyst role',
        copy: 'MIS Executive and Reporting Analyst are the roles local firms hire for most often, and they are decided on Excel, SQL and Power BI — all three are covered to enterprise depth here, not as an introduction.',
      },
      {
        label: 'Career switchers and entrepreneurs',
        copy: 'Weekend batches exist for people already working. Owners take this to stop guessing at their own numbers; switchers take it because analytics is the widest office-side entry point into IT work in Punjab.',
      },
      {
        label: 'Self-taught learners',
        copy: 'If tutorials left you able to follow along but not to start from a blank file, what changes here is a weekly lab, a mini project every month and a trainer who reads your work.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Industry-oriented and hands-on',
        copy: 'Hands-on from day one — Sales, HR and Inventory dashboards, retail database queries, EDA on Retail, Netflix and Healthcare datasets, requirement gathering for a retail management system.',
      },
      {
        title: 'Advanced SQL and Excel',
        copy: 'Enterprise querying with joins, SELF JOIN, UNION, CTEs, subqueries, CASE, window functions, views and query optimisation, plus dynamic arrays, Power Query and dashboard design.',
      },
      {
        title: 'Python for analytics',
        copy: 'Fundamentals and OOP, NumPy and Pandas for real ingestion and feature engineering, EDA with Matplotlib, Seaborn and Plotly, then REST APIs, BeautifulSoup scraping and Streamlit.',
      },
      {
        title: 'Business intelligence in both tools',
        copy: 'Power BI Desktop and Service, star and snowflake schemas, advanced DAX and time intelligence, then Tableau with parameters, maps, stories and publishing.',
      },
      {
        title: 'Business analysis and cloud platforms',
        copy: 'BRD, FRD and SRS, user stories, Agile and Scrum in Jira and Confluence, BPMN mapping, plus Microsoft Fabric, Snowflake, DuckDB, dbt and Apache Airflow.',
      },
      {
        title: 'AI, portfolio and placement',
        copy: 'Generative AI and prompt engineering, machine learning for analysts, the OpenAI API and LangChain, a GitHub portfolio, ATS resume, LinkedIn and mock interviews.',
      },
    ],
    whyNow: {
      title: 'Data Analytics and Business Analysis, Taught as One Job',
      points: [
        'Six months of hands-on training, a mini project every month and a final enterprise analytics capstone with an executive presentation.',
        'Fresher Data Analyst, MIS and Business Analyst roles in Punjab start around ₹18,000 – ₹30,000 a month for someone with dashboards they can show.',
        'Two years of delivery experience usually doubles that, and analysts who add the business analyst title or the Fabric and Snowflake platform skills move well beyond it.',
        'Analytics is the widest office-side entry point into IT work in this region, and it exists in almost every industry.',
      ],
    },
    roles: [
      'Data Analyst',
      'Business Analyst',
      'BI Developer',
      'Reporting Analyst',
      'MIS Executive',
      'Product Analyst',
      'Marketing / Financial Analyst',
      'Operations & HR Analyst',
      'Analytics Engineer',
      'AI-Powered Data Analyst',
    ],
    roleDetails: [
      {
        role: 'MIS Executive / Reporting Analyst',
        copy: 'Straight after 12th these are usually the first step, and they are decided on Excel, SQL and Power BI — the three things months one to four cover to depth.',
      },
      {
        role: 'Data Analyst',
        copy: 'Answer business questions with data and report the answer clearly. The core target role of the programme.',
      },
      {
        role: 'Business Analyst',
        copy: 'Opens once you have shipped requirements work. Month five’s BRD, FRD, BPMN and Agile material is what makes this title reachable.',
      },
      {
        role: 'BI Developer',
        copy: 'Own the data model and the dashboards a management team runs on, in Power BI or Tableau.',
      },
      {
        role: 'AI-Powered Data Analyst',
        copy: 'A newer title — an analyst who uses generative AI for SQL generation, automated reporting and executive summaries, which month six covers directly.',
      },
    ],
    hiring: [
      'IT and analytics companies across Mohali, Jalandhar and Ludhiana',
      'Manufacturing and retail businesses using data for forecasting and stock',
      'Banking, insurance and fintech reporting teams',
      'Any mid-sized business with an MIS or reporting function',
    ],
    nextSteps: [
      'Data science and machine learning in depth',
      'Data engineering with Fabric, Snowflake and Airflow',
      'Power BI or Tableau certification',
      'Business analysis certification (CBAP track)',
    ],
    industries: ['Analytics & IT', 'Manufacturing & retail', 'Banking & fintech', 'Healthcare'],
    salary: {
      role: 'Data / Business Analyst',
      summary:
        'Turns collected data into decisions, and turns business needs into documented requirements. Two years of delivery experience usually doubles the starting figure.',
      starting: '₹18,000–₹30,000/month',
      after2: '₹36,000–₹65,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Data / MIS Analyst',
          fresher: '₹18,000–₹30,000/month',
          after2: '₹36,000–₹65,000/month',
          scale: { fresher: 24000, after2: 50500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹30,000–₹52,000/month',
          after2: '₹65,000–₹1,20,000+/month',
          scale: { fresher: 41000, after2: 92500 },
        },
        {
          name: 'Remote / Freelance Analytics',
          fresher: '₹14,000–₹30,000/month',
          after2: '₹45,000–₹95,000+/month',
          scale: { fresher: 22000, after2: 70000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'Data Analyst, Business Analyst, BI Developer, Reporting Analyst, MIS Executive, Product Analyst, Marketing Analyst, Financial Analyst, Operations Analyst, HR Analyst, Analytics Engineer, AI-Powered Data Analyst and Analytics Consultant. Straight after 12th, MIS Executive and Reporting Analyst are usually the first step, with Business Analyst opening once you have shipped requirements work.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with a portfolio of dashboards typically starts around ₹18,000 – ₹30,000 a month in this market. Two years of delivery experience usually doubles that, and analysts who add the business analyst title or the Fabric and Snowflake platform skills move well beyond it.',
      },
      {
        q: 'What is the difference between this and the Data Science programme?',
        a: 'Analytics answers business questions with dashboards, SQL and reporting, and this track pairs that with formal business analysis — BRD, FRD, Agile and BPMN. Data Science goes deeper into machine learning, deep learning and the LLM and RAG stack. If you want to work with business stakeholders and reporting, take this one; if you want to build models and AI applications, take Data Science.',
      },
      {
        q: 'Which industries hire analysts around here?',
        a: 'IT and analytics companies, manufacturing and retail businesses using data for forecasting and stock, banking and insurance reporting teams, and any mid-sized business with an MIS function. Remote work widens it further.',
      },
    ],
    projects: [
      {
        name: 'Retail Sales Performance Analysis',
        summary:
          'The first mini project, across all three tools at once: the data cleaned and pivoted in Excel, queried in SQL and automated in Python, delivered with a business summary report.',
        tech: ['Excel', 'SQL', 'Python'],
        level: 'Beginner',
        skills: ['Data Cleaning', 'Business Reporting'],
      },
      {
        name: 'Enterprise Sales Intelligence Dashboard',
        summary:
          'Built on enterprise SQL — CTEs, window functions and optimised views — with dynamic arrays and Power Query in Excel, and business statistics applied to find the outliers that matter.',
        tech: ['SQL', 'Power Query'],
        level: 'Intermediate',
        skills: ['Advanced SQL', 'Statistics'],
      },
      {
        name: 'Customer Insights Analytics System',
        summary:
          'Data pulled from REST APIs and scraped with BeautifulSoup, cleaned and engineered in Pandas, explored with Plotly, and delivered as an interactive Streamlit app.',
        tech: ['Python', 'Streamlit', 'BeautifulSoup'],
        level: 'Intermediate',
        skills: ['Data Ingestion', 'App Building'],
      },
      {
        name: 'Executive Business Intelligence Dashboard',
        summary:
          'A star-schema Power BI model with advanced DAX measures, time intelligence and executive KPI cards, rebuilt as a published Tableau story with parameters and maps.',
        tech: ['Power BI', 'DAX', 'Tableau'],
        level: 'Advanced',
        skills: ['Data Modelling', 'BI Storytelling'],
      },
      {
        name: 'Business Process & Data Platform Design',
        summary:
          'A BRD with user stories and acceptance criteria, BPMN diagrams, a conceptual ETL pipeline in dbt and Airflow, a Microsoft Fabric architecture and a stakeholder presentation.',
        tech: ['BRD/FRD', 'BPMN', 'Microsoft Fabric'],
        level: 'Advanced',
        skills: ['Requirements', 'Data Architecture'],
      },
      {
        name: 'Enterprise Analytics Capstone',
        summary:
          'The full solution end to end: requirement gathering, SQL database analysis, Python EDA, Power BI dashboards, AI-assisted reporting, an executive presentation, GitHub documentation and deployment.',
        tech: ['SQL', 'Python', 'Power BI'],
        level: 'Advanced',
        skills: ['End-to-End Delivery', 'Presentation'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still do the work',
        copy: 'Your trainer is not a full-time lecturer. They deliver reporting and analytics work for techcadd’s services arm, so the dashboards in class come from real business questions rather than a sample dataset.',
      },
      {
        title: 'Hands-on practice throughout',
        copy: 'Six months of continuous practice. You are never sitting through a stretch of theory with nothing to show for it at the end.',
      },
      {
        title: 'Analyst and business analyst in one programme',
        copy: 'Month five is a full month of requirement gathering, BRD and FRD writing, BPMN and Agile — the half of the job most analytics courses leave out entirely.',
      },
      {
        title: 'Six mini projects, one per month',
        copy: 'Retail sales performance, an enterprise sales intelligence dashboard, a customer insights system, an executive BI dashboard, a business process and data platform design, then the capstone.',
      },
      {
        title: 'Enterprise-grade tooling',
        copy: 'Microsoft Fabric, Snowflake, DuckDB, dbt and Apache Airflow alongside Power BI and Tableau — the platforms reporting is actually moving onto, not just the ones that are easy to teach.',
      },
      {
        title: 'A placement cell that persists',
        copy: 'ATS resume and GitHub portfolio work, LinkedIn guidance, SQL, Python, Power BI and BA interview practice, HR mocks, and repeated drives with hiring partners across Phagwara, Jalandhar and Ludhiana.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this Data Analytics programme after 12th?',
        a: 'Six months: Month 1 covers programming and analytics foundations; Month 2 is SQL, advanced Excel and business statistics; Month 3 is Python for data analytics; Month 4 is business intelligence and visualisation; Month 5 is business analysis and modern data engineering; and Month 6 is AI-powered analytics and career readiness. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Can I join straight after 12th with no coding background?',
        a: 'Yes — that is who it is written for. Month 1 starts with the analytics lifecycle and installing your toolchain, then moves to Excel, SQL and Python basics. The ramp is deliberate: you learn what you are automating before you learn to automate it.',
      },
      {
        q: 'How many labs and projects will I build?',
        a: 'One mini project per month and a final capstone — six projects in total: a retail sales performance analysis, an enterprise sales intelligence dashboard, a customer insights analytics system, an executive BI dashboard, a business process and data platform design, and the enterprise analytics capstone.',
      },
      {
        q: 'Is machine learning really part of an analytics course?',
        a: 'In the final month, at the depth an analyst uses it: supervised and unsupervised learning, linear and logistic regression, decision trees, random forest and K-means clustering, evaluated on sales prediction and customer segmentation. The purpose is prediction and segmentation you can put in a report, not model research.',
      },
      {
        q: 'How is this different from the 4-month Data Analytics programme?',
        a: 'Both cover analytics and business analysis, but this six-month certificate has more room: a lab every single week, six mini projects rather than one capstone, business statistics as its own dedicated block, BPMN process mapping in Lucidchart and Figma, Apache Airflow, machine learning for analysts, and a full placement preparation month.',
      },
    ],
    relatedCourses: [
      'after-12th-4-month-data-analytics-program-in-phagwara',
      'after-12th-6-month-data-science-program-in-phagwara',
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-6-month-digital-marketing-program-in-phagwara',
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month data analytics program in Phagwara',
      'data analytics certificate course Phagwara',
      'power bi and tableau training Phagwara',
      'business analyst course Punjab',
      'data analytics course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------- artificial intelligence -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-artificial-intelligence-program-in-phagwara',
    label: 'Artificial Intelligence',
    title: 'Best After 12th 6-Month Artificial Intelligence Program in Phagwara',
    icon: 'brain',
    duration: '6 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A project-driven path into modern AI — Python for AI, deep learning, NLP, LLM internals, prompt engineering, RAG, AI agents and the production deployment of AI applications, spread across six hands-on months.',
    overview:
      'This is the six-month Artificial Intelligence course: Python and AI/ML foundations first, then deep learning and NLP, then LLM internals and prompting, then RAG and AI agents, then AI application development, and finally deployment, security and the capstone.\nThe extra length compared to shorter courses buys depth rather than filler. Machine learning gets its own dedicated time with model training, evaluation and cross-validation. NLP separates from Transformers. Chatbot design and multimodal AI separate from application development. AI security and responsible AI get proper coverage, and the final month adds documentation, a GitHub portfolio, resume building and mock interviews on top of the capstone build.',
    demand:
      'Modern AI work is a stack rather than a subject — a model, a retrieval layer, an agent loop, a backend, a deployment and guardrails — and the skills for the middle four layers are missing from almost every engineering team.',
    modules: [
      {
        title: 'Month 1 — Python & AI/ML Foundations',
        summary:
          'Engineering practice before any model — the difference between code that ran once and code a team can maintain.',
        topics: [
          'Python fundamentals from the ground up; VS Code as the working environment',
          'The uv package manager and virtual environments',
          'Git and GitHub; ChatGPT and GitHub Copilot as development tools',
          'Object-oriented programming, exception handling and logging',
          'Type hinting and pytest for automated testing',
          'APIs, JSON and FastAPI basics',
          'NumPy for numerical computing and Pandas for tabular data',
          'Statistics, probability and linear algebra essentials for AI',
          'Machine learning with scikit-learn: model training, evaluation and cross validation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Deep Learning & NLP',
        summary:
          'Networks written and trained, and NLP given its own space rather than folded into Transformers.',
        topics: [
          'Deep learning fundamentals with PyTorch',
          'Tensor operations and neural networks',
          'Convolutional neural networks and transfer learning',
          'Computer vision with OpenCV',
          'Text processing and word embeddings',
          'Sequence models and language understanding basics',
          'Transformers, Hugging Face, tokenizers and the Model Hub',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — LLM Fundamentals & Prompting',
        summary:
          'Why a context window costs what it costs, and how to write prompts that hold up.',
        topics: [
          'LLM fundamentals: tokenization, embeddings and context windows',
          'The attention mechanism',
          'Prompt engineering, prompt optimisation and system prompts',
          'Structured prompting',
          'The OpenAI, Gemini, Claude and Grok APIs',
          'Ollama for local models and LiteLLM for routing between providers',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — RAG & AI Agents',
        summary:
          'Four full topics on agents, not a mention.',
        topics: [
          'Embeddings and vector databases: FAISS, ChromaDB, Pinecone and Qdrant',
          'Semantic search and RAG architecture',
          'Hybrid search, re-ranking, evaluation and guardrails',
          'LangChain and LangGraph: prompt templates, chains and memory',
          'CrewAI and the Model Context Protocol',
          'Tool calling, function calling and structured outputs',
          'AI agents, multi-agent systems and autonomous workflows',
          'Enterprise agent design',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — AI Application Development',
        summary:
          'Conversational design and multimodal AI, separated from the plumbing so both get real time.',
        topics: [
          'FastAPI advanced, async programming and background tasks',
          'WebSockets for AI applications',
          'Streamlit, Gradio and Chainlit',
          'Conversational AI design and AI chatbot development',
          'Dialogue management',
          'Multimodal AI across text, image, audio and video',
          'Whisper, vision-language models and speech AI',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Deployment, Security & Capstone',
        summary:
          'It ends deployed and defended.',
        topics: [
          'Docker, Docker Compose, Linux and Nginx',
          'AWS, Azure AI, Google Vertex AI and serverless AI deployment',
          'AI security: prompt injection and jailbreak defence',
          'Secret management and responsible AI',
          'The end-to-end AI capstone: an LLM-powered application with RAG, agents, Docker and cloud deployment',
          'Project documentation, GitHub portfolio and resume building',
          'Mock interviews, industry standards and best practices',
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
      'Build AI agents and multi-agent systems with LangChain and CrewAI',
      'Deploy AI applications with FastAPI, Docker and the major cloud platforms',
      'Ship a complete AI industry capstone with a professional portfolio',
    ],
    tools: [
      'Python & uv',
      'VS Code',
      'Git, GitHub & Copilot',
      'pytest',
      'NumPy, Pandas & scikit-learn',
      'PyTorch & OpenCV',
      'Hugging Face & Transformers',
      'OpenAI, Gemini, Claude & Grok APIs',
      'Ollama & LiteLLM',
      'FAISS, ChromaDB, Pinecone & Qdrant',
      'LangChain, LangGraph, CrewAI & MCP',
      'FastAPI, Streamlit, Gradio & Chainlit',
      'Whisper & vision-language models',
      'Docker, Linux & Nginx',
      'AWS, Azure AI & Vertex AI',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. There is no assumed technical knowledge and no programming prerequisite. Most students run the programme alongside a degree at a Phagwara college using the weekday or weekend batch.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc, BBA or B.Tech, this is the version that changes which interviews you are invited to. You arrive with a deployed AI application, a GitHub portfolio and mock interviews behind you.',
      },
      {
        label: 'Career changers',
        copy: 'The weekend batch exists for people already earning. Six months of evenings and Saturdays is enough to move into AI Engineer and AI Application Developer roles without leaving your current job first.',
      },
      {
        label: 'Developers and analysts',
        copy: 'If you already write Python or work with data, the foundation topics move quickly and the LLM, RAG, agent and deployment months are the point. Those are the skills currently missing from almost every engineering team.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Engineering practice, not just scripts',
        copy: 'OOP, exception handling, logging, type hinting and pytest are taught early, before any model appears. It is the difference between code that ran once on your laptop and code a team can maintain.',
      },
      {
        title: 'Six model providers, not one',
        copy: 'OpenAI, Gemini, Claude and Grok APIs, plus Ollama for local models and LiteLLM to route between them. Knowing which model a task actually needs is worth more than fluency in any single API.',
      },
      {
        title: 'Agents get four full topics, not a mention',
        copy: 'RAG architecture, then LangChain and LangGraph, then CrewAI, MCP and tool calling, then multi-agent systems and enterprise agent design — the pattern behind every AI product currently being funded.',
      },
      {
        title: 'It ends deployed and defended',
        copy: 'Docker, Nginx, AWS, Azure AI and Vertex AI for the deployment; prompt injection, jailbreak defence and secret management for security; then documentation, a GitHub portfolio and mock interviews.',
      },
    ],
    whyNow: {
      title: 'Build with AI. Ship It for Real.',
      points: [
        'Modern AI work is a stack, not a subject: a model, a retrieval layer that grounds it in your own data, an agent loop that lets it act, a backend and interface people can use, a deployment that survives traffic, and guardrails for the day a prompt injection arrives.',
        'This programme teaches every one of those layers in sequence, with a single capstone that integrates LLMs, RAG pipelines, AI agents, Docker containerisation and full cloud deployment.',
        'A fresher with a deployed AI application and a documented portfolio typically starts around ₹25,000 – ₹50,000 per month in this market.',
        'AI work also carries more remote and freelance opportunity than most, since the systems are not in the room.',
      ],
    },
    roles: [
      'AI Engineer',
      'Machine Learning Engineer',
      'Deep Learning Engineer',
      'LLM Engineer',
      'AI Agent Developer',
      'Prompt Engineer',
      'NLP Engineer',
      'AI Application Developer',
      'Freelance AI Consultant',
    ],
    roleDetails: [
      {
        role: 'AI Engineer',
        copy: 'The core destination from this programme. You build and ship systems with models in them — retrieval, agents, backends and deployment — rather than training models from scratch.',
      },
      {
        role: 'Machine Learning Engineer',
        copy: 'Closer to the model than the product: scikit-learn, model training, evaluation and cross-validation, then PyTorch and neural networks. That block gets a full two months here.',
      },
      {
        role: 'Deep Learning Engineer',
        copy: 'Neural networks, CNNs, transfer learning and computer vision with OpenCV, then Transformers and the Hugging Face Model Hub. The six-month course is the one that gives this dedicated depth.',
      },
      {
        role: 'LLM Engineer',
        copy: 'Owning the model layer of a product — tokenization, embeddings, context windows, multi-provider routing through LiteLLM, and the cost and latency decisions that follow.',
      },
      {
        role: 'AI Agent Developer',
        copy: 'Building systems that act rather than answer: LangChain and LangGraph, CrewAI, MCP, tool calling, multi-agent systems and enterprise agent design. Currently the hardest AI role to fill.',
      },
      {
        role: 'AI Application Developer',
        copy: 'The full product: an async FastAPI backend with WebSockets behind a Streamlit, Gradio or Chainlit interface, containerised and deployed. The capstone is the portfolio piece this interview asks for.',
      },
    ],
    hiring: [
      'Product companies building AI features into their software',
      'IT services companies adding AI delivery to client work',
      'Analytics and consulting firms building AI solutions',
      'Remote roles with companies outside Punjab and outside India',
    ],
    nextSteps: [
      'The 9-month Artificial Intelligence Diploma Program',
      'Agentic AI and multi-agent systems',
      'MLOps and production AI infrastructure',
      'Cloud AI platform certification',
    ],
    industries: ['Product & software', 'IT services', 'Analytics & consulting', 'Remote / global'],
    salary: {
      role: 'AI Engineer',
      summary:
        'Builds and ships systems with models inside them. AI work carries more remote and freelance opportunity than most fields, since the systems are not in the room.',
      starting: '₹25,000–₹50,000/month',
      after2: '₹55,000–₹1,10,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — AI Engineer',
          fresher: '₹25,000–₹50,000/month',
          after2: '₹55,000–₹1,10,000/month',
          scale: { fresher: 37500, after2: 82500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹40,000–₹70,000/month',
          after2: '₹90,000–₹1,80,000+/month',
          scale: { fresher: 55000, after2: 135000 },
        },
        {
          name: 'Remote / Freelance AI Work',
          fresher: '₹20,000–₹45,000/month',
          after2: '₹70,000–₹1,60,000+/month',
          scale: { fresher: 32500, after2: 115000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after this program?',
        a: 'The syllabus targets nine roles: AI Engineer, Machine Learning Engineer, Deep Learning Engineer, LLM Engineer, AI Agent Developer, Prompt Engineer, NLP Engineer, AI Application Developer and Freelance AI Consultant. Which one fits depends on whether you lean toward the model, the product or the agent layer — and the capstone is the evidence all nine interviews ask for.',
      },
      {
        q: 'What salary can I expect after this program?',
        a: 'A fresher with a deployed AI application and a documented portfolio typically starts around ₹25,000 – ₹50,000 per month in this market, rising quickly with a second year of production experience. AI work also carries more remote and freelance opportunity than most, since the systems are not in the room.',
      },
      {
        q: 'How is this different from the 4-month Artificial Intelligence program?',
        a: 'The shorter track covers the same arc in four months. This six-month course adds depth rather than new topics: machine learning gets its own dedicated time with training, evaluation and cross-validation; NLP separates from Transformers; agents get thorough coverage instead of a brief overview; chatbot design and multimodal AI separate from application development; AI security gets proper attention; and placement preparation is added at the end.',
      },
      {
        q: 'Is there remote work in AI?',
        a: 'A great deal, and it is one of the more remote-friendly fields in this catalogue. A deployed capstone an employer can open is what makes a remote application credible.',
      },
    ],
    projects: [
      {
        name: 'Python & ML Foundations Build',
        summary:
          'A typed, tested Python project with a FastAPI endpoint and a scikit-learn model trained, evaluated and cross-validated properly.',
        tech: ['Python', 'FastAPI', 'scikit-learn'],
        level: 'Beginner',
        skills: ['Engineering Practice', 'Model Evaluation'],
      },
      {
        name: 'Deep Learning & NLP Build',
        summary:
          'A PyTorch CNN with transfer learning and OpenCV, plus a text pipeline through word embeddings and sequence models into Transformers and Hugging Face.',
        tech: ['PyTorch', 'OpenCV', 'Hugging Face'],
        level: 'Intermediate',
        skills: ['Deep Learning', 'NLP'],
      },
      {
        name: 'Multi-Provider Prompt Application',
        summary:
          'Structured prompts and system prompts tested across OpenAI, Gemini, Claude, Grok and local Ollama models, routed through LiteLLM and compared on cost and quality.',
        tech: ['LiteLLM', 'Ollama'],
        level: 'Intermediate',
        skills: ['Prompt Engineering', 'Model Routing'],
      },
      {
        name: 'RAG Pipeline & Multi-Agent System',
        summary:
          'Embeddings into a vector database with hybrid search, re-ranking, evaluation and guardrails, then agents built with LangGraph, CrewAI and MCP tool calling.',
        tech: ['FAISS', 'LangGraph', 'CrewAI'],
        level: 'Advanced',
        skills: ['Retrieval Augmentation', 'Agent Design'],
      },
      {
        name: 'Conversational & Multimodal AI App',
        summary:
          'An async FastAPI backend with WebSockets behind a Streamlit or Chainlit interface, with dialogue management, Whisper speech input and a vision-language model.',
        tech: ['FastAPI', 'Chainlit', 'Whisper'],
        level: 'Advanced',
        skills: ['Conversational AI', 'Multimodal'],
      },
      {
        name: 'End-to-End AI Capstone',
        summary:
          'An LLM-powered application with RAG, AI agents, Docker containerisation and full cloud deployment, hardened against prompt injection and delivered with documentation and a GitHub portfolio.',
        tech: ['Docker', 'Nginx', 'AWS', 'Vertex AI'],
        level: 'Advanced',
        skills: ['Deployment', 'AI Security'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Learn at your own pace',
        copy: 'You advance when a deliverable passes review. A student who needs extra time on Transformers gets it; nobody is moved on because the timetable says so.',
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
        title: 'Placement prep is built in',
        copy: 'The final month includes project documentation, a GitHub portfolio, resume building, mock interviews and industry standards — the part most AI courses leave to the student.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 6-Month Artificial Intelligence Program in Phagwara?',
        a: 'Six months, organised month by month: Python and AI/ML foundations, deep learning and NLP, LLM fundamentals and prompting, RAG and AI agents, AI application development, and deployment with the capstone. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Do I need programming experience or a technical background?',
        a: 'No. The course begins with Python fundamentals and the tooling around them, then adds engineering practice, the maths and machine learning before PyTorch appears. The programme is built for students joining straight after 12th from any stream.',
      },
      {
        q: 'Which AI models and APIs will I actually use?',
        a: 'OpenAI, Gemini, Claude and Grok through their APIs, local models through Ollama, and LiteLLM to route between them. On top of that: PyTorch and Hugging Face for models you train or fine-tune, and Whisper and vision-language models for multimodal AI.',
      },
      {
        q: 'What are RAG and AI agents, in plain terms?',
        a: 'RAG grounds a model’s answers in your own documents rather than in whatever it memorised — embeddings, a vector database, hybrid search, re-ranking and guardrails. An agent goes further: it plans its own next step, calls a real tool, reads the result and repeats. The later months build both, including multi-agent systems.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'One complete, industry-level AI application — the capstone — an LLM-powered app with RAG, AI agents, Docker containerisation and full cloud deployment, followed by project documentation, a GitHub portfolio, resume building and mock interviews. Every month before it contributes a working piece of that build.',
      },
    ],
    relatedCourses: [
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-6-month-data-science-program-in-phagwara',
      'after-12th-6-month-data-analytics-program-in-phagwara',
      'after-12th-6-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month artificial intelligence program in Phagwara',
      'AI certificate course after 12th Phagwara',
      'deep learning and RAG training Phagwara',
      'AI engineer course Punjab',
      'artificial intelligence course with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------- digital marketing -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-6-month-digital-marketing-program-in-phagwara',
    label: 'Digital Marketing',
    title: 'Best After 12th 6-Month Digital Marketing Certificate Program in Phagwara',
    icon: 'megaphone',
    duration: '6 Months',
    level: 'Beginner to Complete Digital Marketer',
    summary:
      'Every core digital marketing channel covered with maximum hands-on practice and no AI shortcuts — 25 certifications, ten portfolio projects and a 15–20 day live industry project on a real business account, all in six months.',
    overview:
      'techcadd’s classical digital marketing programme: six months, 250 to 260 hours of classroom and supervised lab time, 25 certification exams (22 free), 10 portfolio projects and a 15 to 20 day live industry project on a real business account. It covers every core channel and is deliberately taught without AI shortcuts — the promise is manual, first-principles skill in each channel, on the reasoning that you learn to do the work first, which is what makes you able to check AI later.\nThe first two months build the production skills every other channel depends on. You start with funnel architecture, the customer journey, buyer personas, competitor teardowns, channel-mix planning and the metrics language of the job — CPM, CPC, CTR, CPL, CAC, AOV, LTV, ROAS — producing a one-page strategy document for a live business. Then graphic design for marketers with Photoshop and Canva Pro, ad creative anatomy and a format library; video editing in Premiere Pro and CapCut with the 3-second hook, retention curve and YouTube strategy; and a full website section covering domains, DNS, hosting, cPanel, WordPress, Elementor Pro, a five-page business site, high-converting landing pages and form-to-CRM integration.\nMonth three is the SEO block, and it is unusually complete for a six-month course: keyword research and search intent, on-page optimisation and content quality, technical SEO with crawl budget, canonicals, structured data and a prioritised remediation report, then off-page link building and digital PR. Month four covers local SEO and Google Business Profile — the easiest first freelance retainer to sell — then content marketing and conversion copywriting, and a full social media section across Instagram, Facebook, LinkedIn, YouTube, X and Pinterest, with the mid-term practical at the end of it.\nMonth five is paid media: Google Ads across Search, Display, Shopping, Performance Max and YouTube, then Meta Ads from Business Manager, Pixel and Conversions API through audience strategy, creative testing frameworks, scaling and click-to-WhatsApp funnels for Indian SMEs. Month six closes the programme with e-commerce store builds on WooCommerce and Shopify, conversion rate optimisation and cart recovery, email marketing with CRM and lifecycle automation, GA4, Google Tag Manager and Looker Studio, then freelancing and agency building, project management and interview preparation — alongside the live industry project: 15 to 20 working days of supervised work on a real business account, assessed and separately certified.',
    demand:
      'Every business in this region is now buying advertising, and the people who can produce the creative, build the site, rank it, run the ads and prove the result are the ones agencies keep rather than replace.',
    modules: [
      {
        title: 'Month 1 — Strategy & Creative Production',
        summary:
          'Funnels and metrics, then the design skill every other channel depends on.',
        topics: [
          'The 7P framework and buyer behaviour; customer journey mapping',
          'TOFU/MOFU/BOFU funnel architecture; buyer personas and competitor teardown',
          'Channel-mix planning across organic, paid, owned and earned',
          'The metrics language: CPM, CPC, CTR, CPL, CAC, AOV, LTV, ROAS and ROI',
          'The 70-20-10 media rule; a one-page strategy document for a live business',
          'Design foundations: grid, hierarchy, contrast, white-space, colour and typography',
          'Photoshop essentials and Canva Pro mastery',
          'Ad creative anatomy and a format library: static ads, carousels, stories, banners, thumbnails',
          'Five concept variants per offer',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Video & Website Development',
        summary:
          'Short-form video that holds attention, and a live website you built yourself.',
        topics: [
          'Shots, cuts, pacing and J/L cuts; Premiere Pro workflow',
          'CapCut vertical editing; the 3-second hook and the retention curve',
          'Scriptwriting for Reels and Shorts; auto-captioning and repurposing',
          'YouTube titles, thumbnails and watch-time; turning one shoot into ten assets',
          'Domain, DNS, hosting, SSL and staging',
          'cPanel, WordPress install and hardening; themes, plugins, menus and roles',
          'Elementor Pro containers and responsive breakpoints',
          'A five-page business website and high-converting landing pages',
          'Form-to-email and CRM integration, pixel firing, backups and security',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — The Full SEO Stack',
        summary:
          'Keyword research, on-page, technical and off-page — in depth, not as an overview.',
        topics: [
          'Search engine mechanics and SERP features; seed discovery and competitor gap analysis',
          'Intent classification; volume, KD, CPC and business-value scoring',
          'Keyword mapping to avoid cannibalisation; a 100-keyword master sheet',
          'On-page: titles, metas, URLs, heading hierarchy, entity coverage and semantic keywords',
          'Internal linking, topical authority, image SEO and E-E-A-T signals',
          'Content refresh and decay management; featured snippets and People Also Ask',
          'Technical SEO: crawl budget, robots.txt, sitemaps, indexation, canonicals and hreflang',
          'Core Web Vitals, structured data, redirects, log-file thinking and JavaScript rendering',
          'Off-page: authority, anchor distribution, guest posting, HARO and broken-link building',
          'Backlink gap analysis, outreach sequences, disavow workflow and a 90-day link plan',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Local SEO, Content & Social',
        summary:
          'The map pack, copy that converts, and six platforms run properly.',
        topics: [
          'Local ranking factors; Google Business Profile setup, verification and categories',
          'Photos, services, posts and Q&A; review generation and reputation repair',
          'Citation building, local landing pages, location schema and geo-grid tracking',
          'Pillar-cluster content strategy and editorial calendar; long-form blog writing that ranks',
          'AIDA, PAS, BAB, 4Ps and FAB frameworks; headline and hook engineering',
          'Landing-page copy with objection handling and CTA stacking; ad copy for Google and Meta',
          'Platform strategy across Instagram, Facebook, LinkedIn, YouTube, X and Pinterest',
          'Content pillars and a 30-day calendar; organic growth mechanics and the LinkedIn B2B system',
          'Influencer and UGC marketing with rate cards; community management and DM funnels',
          'Mid-term practical: a timed, hands-on task inside the live platform',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Google Ads & Meta Ads',
        summary:
          'Two live ad accounts, built and optimised rather than described.',
        topics: [
          'Account architecture, auction mechanics, Ad Rank and Quality Score',
          'Match types, search terms and negatives; Responsive Search Ads and assets',
          'Display placements, topics, audiences and remarketing; landing page relevance',
          'Bidding foundations and a daily and weekly optimisation routine',
          'Merchant Center setup and feed rules; Standard Shopping structure and bidding',
          'Performance Max asset groups, audience signals, brand exclusions and reporting limits',
          'YouTube formats, targeting and sequencing; Demand Gen and smart bidding portfolios',
          'Meta Business Manager assets, roles and payment setup; CBO vs ABO',
          'Pixel via GTM, the Conversions API, event match quality and domain verification',
          'Audience strategy, retargeting funnels and creative testing frameworks with kill rules',
          'Hook rate, hold rate, CTR, CPM and CPA diagnostics; scaling and click-to-WhatsApp funnels',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — E-Commerce, Analytics, Agency & Live Project',
        summary:
          'Stores, measurement and the business of selling the skill — plus 15–20 days on a real account.',
        topics: [
          'D2C, marketplace, dropship and hybrid models; WooCommerce and Shopify setup',
          'Product page anatomy, inventory and returns, coupons and loyalty',
          'COD vs prepaid economics and RTO reduction; launch checklist and pre-sale QA',
          'CRO: LIFT and MECLABS heuristic audits, heatmaps and session recordings',
          'Checkout optimisation and abandoned-cart flows; A/B testing with significance',
          'Email marketing: deliverability with SPF, DKIM and DMARC; lifecycle automation',
          'Welcome, nurture, cart-recovery and win-back flows; CRM pipelines and lead scoring',
          'GA4 architecture, GTM containers and dataLayer; conversion tracking and Explorations',
          'Blended Looker Studio dashboards; debugging with Tag Assistant and DebugView',
          'Freelancing and agency building: pricing, proposals, contracts, GST basics and retainers',
          'Project management, client reporting and interview preparation',
          'The live industry project: 15–20 working days on a real business account',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Two live ad accounts — a Google Ads build with Shopping and conversion tracking, and a full-funnel Meta build',
      'An SEO case study with a full audit, on-page implementation, a link plan and eight weeks of rank data',
      'A live WordPress website plus a conversion landing page you built and hardened yourself',
      'A WooCommerce store with automated welcome, cart-recovery and win-back email flows',
      'A GA4 and GTM implementation feeding a blended Looker Studio dashboard',
      '15–20 days on a real business account, with a dated optimisation diary and a panel presentation',
    ],
    tools: [
      'Photoshop & Canva Pro',
      'Premiere Pro & CapCut',
      'WordPress, Elementor Pro & cPanel',
      'SEMrush & Ahrefs',
      'Yoast & BrightLocal',
      'Google Business Profile',
      'Google Ads & Merchant Center',
      'Meta Ads Manager & Business Manager',
      'Meta Pixel & Conversions API',
      'WooCommerce & Shopify',
      'GA4, Google Tag Manager & Looker Studio',
      'Email & CRM platforms',
      'Upwork, Fiverr & LinkedIn',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream, no marketing background. The course begins at what digital marketing is and how a funnel works, and the level runs from beginner to complete digital marketer.',
      },
      {
        label: 'Anyone who wants the manual foundation',
        copy: 'This track teaches every channel by hand. If you would rather understand why a campaign works before letting a tool suggest it, this is the deliberate choice — and it is what makes you able to check AI output later.',
      },
      {
        label: 'Students who want breadth in one programme',
        copy: 'Design, video, web, the full SEO stack, local SEO, content, social, Google Ads, Meta Ads, e-commerce, CRO, email, CRM and analytics — all covered across six months.',
      },
      {
        label: 'Aspiring freelancers',
        copy: 'The freelancing block covers positioning, pricing, proposals, contracts, invoicing, GST basics and client acquisition. The web build alone sells for ₹15,000 – ₹60,000 a project, and most students earn their first income before placement.',
      },
      {
        label: 'Career changers and working professionals',
        copy: 'Morning, afternoon, evening and weekend batches all run, classes are 1.5 to 2 hours a day, and missed sessions are repeated with another batch.',
      },
      {
        label: 'Students who want verified credentials',
        copy: '25 exams, 22 of them free, each mapped into the topic covered before it and attempted in a supervised lab slot, with badges added to your LinkedIn and CV with verification links.',
      },
    ],
    whyChooseUs: [
      {
        title: '25 certification exams, 22 of them free',
        copy: 'Across Google, Meta, Microsoft, HubSpot, SEMrush, Ahrefs, Adobe, Canva, Yoast, BrightLocal, LinkedIn and Shopify — each mapped into the topic covered before it.',
      },
      {
        title: '10 portfolio projects on real accounts',
        copy: 'Strategy deck, design portfolio, video pack, live website, SEO case study, social operation, two live ad accounts, a store with automation, and an analytics dashboard.',
      },
      {
        title: '15–20 days of live industry work',
        copy: 'Supervised work on a real business account covering strategy, execution, optimisation and client reporting — separately assessed and separately certified.',
      },
      {
        title: 'The complete SEO stack',
        copy: 'Keyword research, on-page, technical and off-page covered in depth — including audits and remediation reports that agencies sell as standalone projects.',
      },
      {
        title: 'Every channel, manually',
        copy: 'No AI shortcuts. You learn to do the work first, which is what makes you able to check AI later — and what makes the skill portable when the tools change.',
      },
      {
        title: 'A portfolio, CV and freelance kit',
        copy: 'Hosted portfolio, rebuilt LinkedIn with certification badges, proposal templates and pricing sheets, plus Upwork and Fiverr profile setup.',
      },
    ],
    whyNow: {
      title: 'Certified — And Actually Able to Do the Work',
      points: [
        '25 certification exams, 10 portfolio projects and 15–20 days of supervised work on a real business account.',
        'Three institute certificates that say exactly what you did — Course Completion, Project Completion and a Live Industry Project Certificate.',
        'Performance Marketing Executive roles start around ₹2.8 – 4.8 LPA for a fresher in North India.',
        'The web build alone sells for ₹15,000 – ₹60,000 a project, and most students earn their first freelance income before placement.',
      ],
    },
    roles: [
      'Digital Marketing Executive',
      'SEO Executive / Specialist',
      'Social Media Executive',
      'Performance Marketing Executive',
      'E-Commerce Executive',
      'Content & Email Marketer',
      'Digital Marketing Freelancer',
    ],
    roleDetails: [
      {
        role: 'Digital Marketing Executive',
        copy: 'The generalist entry role across channels. Indicative fresher range for North India: ₹2.4 – 4.2 LPA.',
      },
      {
        role: 'SEO Executive / Specialist',
        copy: 'Organic search in depth — audits, on-page, technical and links. Indicative fresher range: ₹2.2 – 4.2 LPA.',
      },
      {
        role: 'Performance Marketing Executive',
        copy: 'Paid media judged on cost per acquisition and ROAS. Indicative fresher range: ₹2.8 – 4.8 LPA, the highest of these entry titles.',
      },
      {
        role: 'Social Media Executive',
        copy: 'Calendar, creative and community across six platforms. Indicative fresher range: ₹2.2 – 3.8 LPA.',
      },
      {
        role: 'E-Commerce Executive',
        copy: 'Store operations, feeds, CRO and cart recovery on WooCommerce or Shopify. Indicative fresher range: ₹2.4 – 4.2 LPA.',
      },
      {
        role: 'Digital Marketing Freelancer',
        copy: 'Indicatively ₹15,000 – ₹50,000 a month. The web build alone sells for ₹15,000 – ₹60,000 a project, and most students earn their first income before placement.',
      },
    ],
    hiring: [
      'Digital marketing agencies across Punjab, Chandigarh and Delhi NCR',
      'E-commerce and D2C brands running their own stores and advertising',
      'In-house marketing teams at manufacturers, hospitals, schools and real estate firms',
      'Freelance and remote retainers, which this breadth serves particularly well',
    ],
    nextSteps: [
      'The 9-month Digital Marketing Diploma Program',
      'The 4-month search-specialist track',
      'Certification renewals for Google and Meta',
      'Agency building and client acquisition',
    ],
    industries: ['Agencies', 'E-commerce & D2C', 'In-house marketing', 'Freelance / remote'],
    salary: {
      role: 'Digital Marketing Executive',
      summary:
        'Runs the channels a business grows on. These are market observations, not guarantees — actual offers vary by city, company, portfolio strength and interview performance.',
      starting: '₹2.4–4.2 LPA',
      after2: '₹5.0–9.0 LPA',
      markets: [
        {
          name: 'Punjab — Digital Marketing Executive',
          fresher: '₹2.4–4.2 LPA',
          after2: '₹5.0–9.0 LPA',
          scale: { fresher: 3.3, after2: 7 },
        },
        {
          name: 'Delhi NCR / Chandigarh',
          fresher: '₹3.0–5.4 LPA',
          after2: '₹7.0–13.0 LPA',
          scale: { fresher: 4.2, after2: 10 },
        },
        {
          name: 'Freelance / Agency Work',
          fresher: '₹15,000–₹50,000/month',
          after2: '₹60,000–₹1,50,000+/month',
          scale: { fresher: 3.9, after2: 12.6 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What roles can I apply for, and what do they pay?',
        a: 'Indicative fresher ranges for North India: Digital Marketing Executive ₹2.4 – 4.2 LPA; SEO Executive / Specialist ₹2.2 – 4.2 LPA; Social Media Executive ₹2.2 – 3.8 LPA; Performance Marketing Executive ₹2.8 – 4.8 LPA; E-Commerce Executive ₹2.4 – 4.2 LPA; Digital Marketing Freelancer ₹15,000 – ₹50,000 a month. These are market observations, not guarantees.',
      },
      {
        q: 'Can I earn while I am still studying?',
        a: 'Most students do. The web build alone sells for ₹15,000 – ₹60,000 a project, and local SEO retainers are the easiest first sale in this market. The freelancing block in month six covers pricing, proposals, contracts, invoicing and GST basics.',
      },
      {
        q: 'Which channel should I specialise in afterwards?',
        a: 'The programme is deliberately broad so you can decide from experience rather than a brochure. Paid media pays best at entry, SEO has the longest runway, and e-commerce is where the freelance retainers are largest. You will have run all three before you choose.',
      },
      {
        q: 'Where do these jobs exist?',
        a: 'Agencies across Punjab, Chandigarh and Delhi NCR, e-commerce and D2C brands, and in-house teams at manufacturers, hospitals, schools and real estate firms. Remote and freelance work extends it considerably.',
      },
    ],
    projects: [
      {
        name: 'Brand & Funnel Strategy + Creative Portfolio',
        summary:
          'A complete strategy document with persona, funnel, channel mix and a six-month roadmap, plus 15 designed assets — ad banners, carousels, thumbnails, brochures and a brand kit.',
        tech: ['Photoshop', 'Canva Pro'],
        level: 'Beginner',
        skills: ['Strategy', 'Creative Production'],
      },
      {
        name: 'Video Reel Pack & Live Website',
        summary:
          'Five edited short-form videos with hooks, captions and platform-native formatting, then a live WordPress business site plus a dedicated conversion landing page.',
        tech: ['Premiere Pro', 'CapCut', 'WordPress'],
        level: 'Beginner',
        skills: ['Video Editing', 'Web Development'],
      },
      {
        name: 'SEO Campaign',
        summary:
          'A full audit, on-page implementation, link plan and eight-week rank tracking on a live site, delivered as an SEO case study.',
        tech: ['SEMrush', 'Ahrefs', 'Yoast'],
        level: 'Intermediate',
        skills: ['Technical SEO', 'Link Building'],
      },
      {
        name: 'Social Media Operation',
        summary:
          'A 30-day content calendar executed on a real handle across multiple platforms, delivered with growth analytics.',
        tech: ['Instagram', 'LinkedIn', 'YouTube'],
        level: 'Intermediate',
        skills: ['Content Planning', 'Community Growth'],
      },
      {
        name: 'Google Ads & Meta Ads Accounts',
        summary:
          'Search, Display and Shopping campaigns with a Merchant Center feed and conversion tracking; and a full-funnel Meta build with Pixel, CAPI, lookalikes and retargeting.',
        tech: ['Google Ads', 'Meta Ads', 'GTM'],
        level: 'Advanced',
        skills: ['Paid Media', 'Conversion Tracking'],
      },
      {
        name: 'E-Commerce, Analytics & Live Industry Project',
        summary:
          'A WooCommerce store with automated welcome, cart-recovery and win-back flows and a blended Looker Studio dashboard — then 15 to 20 days of supervised work on a real business account, presented to a review panel.',
        tech: ['WooCommerce', 'GA4', 'Looker Studio'],
        level: 'Advanced',
        skills: ['E-Commerce', 'Client Delivery'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Exams are built into the timetable',
        copy: 'Each exam’s published topic list is mapped into the class content before it, so what you study is the syllabus. Attempts happen in scheduled supervised lab slots of roughly two hours.',
      },
      {
        title: 'Hands-on before theory',
        copy: 'You build the thing before you read about it. Students who have actually done the task answer scenario questions correctly; students who only read about it do not.',
      },
      {
        title: 'A failure protocol, not a penalty',
        copy: 'Most exams allow retakes after a short cooldown. If you fail, your weak domains are reviewed and you are rebooked. Failing an attempt is normal and carries no penalty from the institute.',
      },
      {
        title: 'Renewal training',
        copy: 'Google and Meta credentials expire after 12 months. You are taught the renewal process so your stack does not quietly lapse after you leave.',
      },
      {
        title: 'Assessed properly',
        copy: 'Attendance 10%, assignments 25%, mid-term practical 15%, portfolio projects 20%, live project 20%, final viva and mock interview 10% — with a published rubric and one free re-attempt of any failed component.',
      },
      {
        title: 'Placement and alumni support',
        copy: 'A hosted portfolio with every project, live URL and badge; ATS-optimised CV and LinkedIn; technical, case-study and HR mock interviews with written feedback; profile circulation across Punjab, Chandigarh, Delhi NCR and remote roles; plus continued job postings and refresher classes.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration and format of this programme?',
        a: 'Six months, 250 to 260 hours of classroom and supervised lab time. Classes run 1.5 to 2 hours a day, five to six days a week, with morning, afternoon, evening and weekend batch options. It is offline classroom teaching with one workstation per student, premium tool access during the course, backup classes for missed sessions, doubt-clearing hours and a mentor group.',
      },
      {
        q: 'Why does this track not use AI tools?',
        a: 'Because it is the complete classical programme, deliberately delivered with maximum manual practice and no AI shortcuts. The reasoning is that learning to do the work yourself is what makes you able to check AI later. The nine-month Master Diploma adds AI content plus a month-long agency internship.',
      },
      {
        q: 'Are the exam fees included?',
        a: '22 of the 25 certifications in this track are free. The remaining paid exams — the two Adobe Certified Professional exams and the Meta Blueprint associate exam — carry a provider fee paid directly by you to the provider, and are not included in course fees unless stated otherwise in writing at admission.',
      },
      {
        q: 'Is techcadd affiliated with Google, Meta or the other providers?',
        a: 'No. techcadd is not affiliated with, endorsed by, or an authorised testing centre for Google, Meta, Microsoft, HubSpot, SEMrush, Ahrefs, Adobe, Canva, Shopify or any other certifying organisation. The institute prepares you for these exams; the exams are attempted on the provider’s own platform and the credentials are issued directly by the provider.',
      },
      {
        q: 'Whose accounts do I work on during the live project?',
        a: 'Partner business accounts arranged by the institute, or an equivalent institute-owned live property with real traffic. You are never required to spend your own money on ad budgets.',
      },
      {
        q: 'How is the programme assessed?',
        a: 'Attendance and participation 10% (minimum 75% attendance required for certification eligibility), assignments 25%, a mid-term practical 15%, portfolio projects 20%, the live project 20%, and a final viva and mock interview 10%. Grades run A+ (90–100) through C (60–69) with a 50% pass mark, and one free re-attempt of any failed component is permitted within the same session.',
      },
    ],
    relatedCourses: [
      'after-12th-3-month-digital-marketing-program-in-phagwara',
      'after-12th-4-month-digital-marketing-program-in-phagwara',
      'after-12th-9-month-digital-marketing-program-in-phagwara',
      'after-12th-6-month-data-analytics-program-in-phagwara',
      'after-12th-6-month-full-stack-development-program-in-phagwara',
      'after-12th-6-month-mern-stack-program-in-phagwara',
    ],
    keywords: [
      'after 12th 6 month digital marketing program in Phagwara',
      'digital marketing certificate course Phagwara',
      'SEO google ads meta ads training Phagwara',
      'complete digital marketing course Punjab',
      'digital marketing course with placement Phagwara',
    ],
  }),
]
