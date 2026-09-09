/**
 * The After 12th 9-Month Diploma Programs.
 *
 * The top rung, and the one whose selling point is hardest to state well: it is
 * not "more topics" but the same topics revisited at the standard a working
 * team holds them to, plus the months a shorter track has to cut — a real
 * capstone, interview preparation, and in several cases the business half of
 * the job. Each programme says which of those it is buying, because "it is
 * longer" is not something a student can make a decision from.
 *
 * Content follows the techcadd programme pages, localised to Phagwara.
 */

import { makeAfter12 } from './factory'
import type { CourseContent } from '@/data/courses/types'

const CATEGORY = {
  category: '9-month-diplomas',
  categoryTitle: 'After 12th 9-Month Diploma Program',
}

export const AFTER12_NINE_MONTH: CourseContent[] = [
  /* ------------------------------------------------------- cloud computing -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-cloud-computing-program-in-phagwara',
    label: 'Cloud Computing',
    title: 'Best After 12th 9-Month Cloud Computing Program in Phagwara',
    icon: 'cloud',
    duration: '9 Months',
    level: 'Beginner to Production Engineer',
    summary:
      'A complete 9-month cloud computing diploma: start from Linux basics and finish with architecture reviews, production Kubernetes on EKS, SRE practices and a full MLOps capstone — everything you need for a cloud or DevOps career.',
    overview:
      'The 9-month cloud computing diploma at techcadd covers everything from Linux basics to advanced architecture and MLOps. You progress month by month through networking, AWS core services, DevOps, CI/CD, Docker, Kubernetes, Terraform, security, AI services, SRE and a final expert capstone — with hands-on labs in every session.\nThe first three months build your foundation (Linux, networking, AWS core). The next three months deepen your skills (serverless, containers, CI/CD, monitoring). The final three months take you to production-level work — architecture reviews, EKS operations, GitOps, SRE with cost optimisation and MLOps. Nothing is skipped and nothing is repeated.',
    demand:
      'The right cloud architecture depends on workload, scalability, availability, security, performance and cost — and the people who can weigh those against each other, rather than name services, are what a senior cloud role actually is.',
    modules: [
      {
        title: 'Month 1 — Linux, Basic Scripting, Networking & Git',
        summary:
          'The system underneath the cloud, taught from the first command.',
        topics: [
          'Linux basics: installation, file system, navigation, file management, searching and archiving',
          'Text editors (nano, vi); users, groups, permissions and sudo',
          'Package management, process and service management, SSH and cron',
          'Bash scripting: variables, conditions, loops and functions',
          'Backup, log-rotation and health-check scripts',
          'How networks work: routers, switches and firewalls; OSI and TCP/IP models',
          'IP addressing, subnetting, DNS, DHCP and NAT; TCP vs UDP; HTTP and HTTPS',
          'Troubleshooting with ping, traceroute, dig, netstat and curl',
          'Git and GitHub: repositories, commits, branches, merging and pull requests',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Cloud Basics & Core AWS: IAM, VPC and EC2',
        summary:
          'What the cloud actually is, then identity, network and your first live site.',
        topics: [
          'Your own servers versus rented ones; IaaS, PaaS and SaaS with everyday examples',
          'Who is responsible for what between you and AWS',
          'Regions, availability zones and edge locations; the AWS Console and CLI',
          'Account setup with the free tier, billing alarms and budgets',
          'IAM: users, groups, roles and policies; least-privilege access; MFA; CloudTrail',
          'VPC: public and private subnets, route tables, internet and NAT gateways',
          'Security groups and network ACLs',
          'EC2: instances, key pairs, SSH, machine images, instance types and EBS',
          'Snapshots and encryption; installing Nginx or Apache and putting a site online',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Storage, Databases, Auto Scaling & Monitoring',
        summary:
          'What keeps an application up when real traffic arrives.',
        topics: [
          'Amazon S3: buckets and objects, storage classes, lifecycle rules and static hosting',
          'Bucket policies, versioning and encryption',
          'Amazon RDS: managed databases, backups, snapshots and secure connection',
          'DynamoDB basics: tables, keys and capacity modes; when relational is the right choice',
          'Application Load Balancer: target groups and health checks',
          'Auto Scaling groups and scaling policies',
          'Route 53 for DNS; CloudWatch monitoring, alarms and dashboards',
          'An introduction to the AWS Well-Architected Framework',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Serverless AWS, AI Services & Cloud Security',
        summary:
          'Running code without managing a server, and hardening everything built so far.',
        topics: [
          'Lambda functions, memory and timeout tuning, and API Gateway',
          'EventBridge, SNS and SQS with dead-letter queues; Step Functions',
          'CloudFormation: templates, stacks, parameters, change sets and drift detection',
          'AWS AI services used practically: Bedrock, Rekognition, Textract and Comprehend',
          'Calling them from Python behind a small Streamlit interface',
          'IAM hardening, encryption at rest and in transit, KMS keys',
          'Keeping passwords out of code with Secrets Manager and Parameter Store',
          'ACM certificates, AWS WAF and Shield; GuardDuty findings',
          'AWS Backup, retention and a written, tested disaster-recovery plan',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Docker Containers & Kubernetes',
        summary:
          'Packaging an application so it runs anywhere, then orchestrating it.',
        topics: [
          'What containers are and how they differ from virtual machines',
          'Docker architecture, images and layers; writing Dockerfiles',
          'Building, tagging and versioning images; multi-stage builds',
          'Running, inspecting and debugging containers; volumes and networks',
          'Docker Compose; Docker Hub and Amazon ECR; image scanning with Trivy',
          'Why orchestration is needed, and how a Kubernetes cluster is arranged',
          'Pods, ReplicaSets and Deployments; rolling updates and rollbacks',
          'Services and Ingress; ConfigMaps and Secrets; namespaces and labels',
          'Health probes, persistent volumes and pod autoscaling',
          'Packaging applications as Helm charts; running Kubernetes on AWS with EKS',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — CI/CD Automation, Terraform & Monitoring',
        summary:
          'Testing and releasing automatically instead of copying files by hand.',
        topics: [
          'What CI/CD means, and why manual deployment stops scaling',
          'Jenkins: installation, plugins, credentials and pipeline jobs',
          'Declarative Jenkinsfiles; GitHub webhooks and multibranch pipelines',
          'GitHub Actions as an alternative',
          'Quality gates with SonarQube and image scanning with Trivy',
          'Building and pushing images; deploying to Kubernetes from a pipeline',
          'Approvals and rollback',
          'Terraform: providers, resources, variables, outputs and plan-and-apply',
          'Remote state on S3 with locking; modules and reuse',
          'Prometheus and PromQL, Grafana dashboards and Alertmanager routing',
          'Log aggregation with Loki or the ELK stack alongside CloudWatch',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 7 — Cloud Architecture, Resilience & Security Engineering',
        summary:
          'The Well-Architected Framework as a review discipline rather than a poster.',
        topics: [
          'Architecting from stated requirements: availability, latency, durability, security and cost targets',
          'Multi-AZ and multi-region patterns; active-active versus active-passive',
          'Stateless application design; caching with CloudFront and ElastiCache',
          'Decoupling with queues, topics and events; database scaling and partitioning',
          'Failure-mode and effects analysis; blast-radius reduction and bulkheads',
          'Chaos experiments, game-day exercises and capacity planning',
          'Reference architectures and architecture decision records',
          'Identity federation and SSO; multi-account strategy with AWS Organizations and SCPs',
          'Least-privilege policy authoring, permission boundaries and role chaining',
          'KMS key hierarchy, Secrets Manager rotation and certificate lifecycle',
          'WAF rule tuning, rate limits and bot control; Shield Advanced concepts',
          'GuardDuty triage, Security Hub, CIS benchmarks and VPC flow log analysis',
          'CloudTrail investigation, incident-response runbooks and restore drills',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 8 — Production Kubernetes on EKS, GitOps & Site Reliability',
        summary:
          'Kubernetes revisited at the standard a working team holds it to.',
        topics: [
          'Container image strategy, base-image hardening and scanning inside the pipeline',
          'EKS operations: node groups, IAM roles for service accounts and cluster upgrades',
          'Namespace and RBAC design; resource quotas and limit ranges',
          'PodDisruptionBudgets and graceful shutdown; pod and cluster autoscaling',
          'Ingress controllers, TLS termination, DNS integration and external secrets',
          'Rolling, blue-green and canary deployments',
          'Troubleshooting CrashLoopBackOff, ImagePullBackOff, OOMKills and pending pods',
          'Terraform at scale: module design, composition, versioning and private registries',
          'Environment separation, remote state, imports and state manipulation',
          'Policy as code and handling secrets safely in infrastructure code',
          'Ansible fundamentals; GitOps principles and pull-request-driven delivery',
          'Drift detection, reconciliation, rollback and change management',
          'SRE: service level indicators, objectives and error budgets; toil reduction',
          'Instrumentation, structured logs, distributed tracing and Prometheus at scale',
          'Alertmanager routing, on-call rotation, runbooks and blameless postmortems',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 9 — MLOps, Cost Optimisation & Expert Capstone',
        summary:
          'Cost as an engineering output, and one system that integrates everything.',
        topics: [
          'Production MLOps architecture; data and feature pipelines',
          'Experiment tracking, model registry and lineage',
          'Packaging models with FastAPI and containers; batch, real-time and serverless inference',
          'Shadow deployment, A/B evaluation and automated retraining triggers',
          'Model monitoring, drift detection and CI/CD for AI applications',
          'Cost engineering: right-sizing, savings plans, reserved capacity and spot strategy',
          'Storage lifecycle, data-transfer control, tagging and cost allocation',
          'Budgets and FinOps reporting to non-technical stakeholders',
          'Managed AI at production standard: Bedrock patterns, guardrails and knowledge bases',
          'SageMaker endpoints and batch transform; quota, latency and evaluation harnesses',
          'Expert capstone: infrastructure, application, AI, security, automation and observability as one system',
          'Architecture presentation and defence; documentation, technical viva and certification',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Foundations to production in one course — Linux through architecture reviews, EKS, SRE and MLOps',
      'Architecture you review, not just draw: FMEA, blast-radius reduction, chaos experiments and decision records',
      'Security hardened to the standard an auditor expects, with CloudTrail timelines and restore drills',
      'Production Kubernetes on EKS with RBAC, quotas, canary rollouts and real failure triage',
      'Cost as an engineering output — right-sizing, spot strategy and FinOps reporting with measured savings',
      'An expert capstone integrating infrastructure, application, AI, security, automation and observability',
    ],
    tools: [
      'Linux, Bash & SSH',
      'Git, GitHub & Wireshark',
      'AWS Console, CLI & IAM',
      'VPC, EC2, EBS & CloudTrail',
      'S3, RDS, DynamoDB & Route 53',
      'ALB, Auto Scaling & CloudWatch',
      'Lambda, API Gateway, EventBridge, SNS, SQS & Step Functions',
      'CloudFormation & Terraform',
      'Bedrock, Rekognition, Textract & SageMaker',
      'KMS, Secrets Manager, WAF, Shield & GuardDuty',
      'Docker, ECR, Trivy & Helm',
      'Kubernetes, kubectl & Amazon EKS',
      'Jenkins, GitHub Actions & SonarQube',
      'Ansible',
      'Prometheus, Grafana, Alertmanager, Loki & ELK',
      'FastAPI, Cost Explorer & Compute Optimizer',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream with no assumed technical knowledge. Nine months alongside a degree is the longest and most complete route, and it finishes with the portfolio that makes campus placement straightforward.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc or B.Tech, this is the difference between applying for a trainee role and applying for a Cloud Automation or AWS DevOps Engineer role.',
      },
      {
        label: 'Career changers going all-in',
        copy: 'The weekend batch exists for people already earning. Nine months is the span in which a career switch reaches senior-adjacent roles rather than the bottom rung.',
      },
      {
        label: 'Working cloud and DevOps staff',
        copy: 'If you already run infrastructure, the advanced months alone are worth the enrolment — architecture review, EKS operations, GitOps, SRE and FinOps are the skills that move you from doing the work to owning it.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Depth, not more breadth',
        copy: 'The advanced months introduce almost no new product names. They revisit architecture, security, AI services, Kubernetes, Terraform, observability and MLOps at the standard a working team holds them to.',
      },
      {
        title: 'Architecture as a review discipline',
        copy: 'You apply the Well-Architected Framework as a review rather than a poster: failure-mode and effects analysis, chaos experiments, game-day exercises and written architecture decision records.',
      },
      {
        title: 'Audit-standard security',
        copy: 'Multi-account strategy, service control policies, permission boundaries, CloudTrail timeline reconstruction, restore drills and compliance evidence — hardening to the standard an auditor expects to see.',
      },
      {
        title: 'Reliability with a number attached',
        copy: 'SLIs, SLOs, error budgets, on-call rotation, blameless postmortems, right-sizing and FinOps reporting — ending with measured savings, not an intention to save.',
      },
    ],
    whyNow: {
      title: 'The Architecture Decision Is the Job',
      points: [
        'The right cloud architecture depends on workload, scalability, availability, security, performance and cost — that decision-making framework is what the final months focus on.',
        'Nine months brings infrastructure, applications, AI, security, automation and observability together into one coherent system you can present and defend.',
        'A fresher entering with the complete portfolio typically starts around ₹30,000 – ₹55,000 per month in this market, with advanced roles rising well beyond that within two years.',
        'Cloud, DevOps and SRE roles also carry the strongest remote and freelance opportunity of anything in this catalogue.',
      ],
    },
    roles: [
      'Senior Cloud / DevOps Engineer',
      'Cloud Automation Engineer',
      'AWS DevOps Engineer',
      'Cloud Solutions Architect (Associate)',
      'Site Reliability Engineer',
      'MLOps Engineer',
      'Platform Engineer',
    ],
    roleDetails: [
      {
        role: 'Cloud Automation Engineer',
        copy: 'Advanced, six to nine months of preparation. You combine infrastructure automation, monitoring, security and operational workflow into one repeatable delivery system. Show the Terraform estate, the CI/CD pipeline, the observability stack and the security report.',
      },
      {
        role: 'AWS / Cloud DevOps Engineer',
        copy: 'The expert-track destination at nine months. You can review architectures, harden AWS estates, run production Kubernetes, control cost and lead a full MLOps capstone.',
      },
      {
        role: 'Senior Cloud / DevOps Engineer',
        copy: 'Ownership rather than execution — you decide the pattern, write the decision record and are the person the team asks during an incident. The architecture, Kubernetes and SRE months are precisely this job description.',
      },
      {
        role: 'Cloud Solutions Architect (Associate)',
        copy: 'Architecting from stated requirements against availability, latency, durability, security and cost targets. The reference architecture pack and failure-mode analysis are the portfolio for it.',
      },
    ],
    hiring: [
      'IT services companies running client cloud estates',
      'Product companies with production Kubernetes and an on-call rotation',
      'Managed service providers and consultancies delivering migrations',
      'Remote roles, which are stronger in this field than anywhere else in this catalogue',
    ],
    nextSteps: [
      'AWS Solutions Architect Professional',
      'Certified Kubernetes Administrator (CKA)',
      'Site reliability and platform engineering',
      'Cloud security specialisation',
    ],
    industries: ['IT services', 'Product & platform', 'Managed services', 'Remote / global'],
    salary: {
      role: 'Cloud / DevOps Engineer (Diploma)',
      summary:
        'Reviews architectures, hardens estates, runs production Kubernetes and controls cost. The highest starting band in the After 12th section, reflecting nine months of depth.',
      starting: '₹30,000–₹55,000/month',
      after2: '₹60,000–₹1,20,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Cloud / DevOps',
          fresher: '₹30,000–₹55,000/month',
          after2: '₹60,000–₹1,20,000/month',
          scale: { fresher: 42500, after2: 90000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹45,000–₹80,000/month',
          after2: '₹1,00,000–₹2,00,000+/month',
          scale: { fresher: 62500, after2: 150000 },
        },
        {
          name: 'Remote / Contract Infrastructure',
          fresher: '₹28,000–₹60,000/month',
          after2: '₹80,000–₹1,80,000+/month',
          scale: { fresher: 44000, after2: 130000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 9-month program?',
        a: 'Senior Cloud/DevOps Engineer, Cloud Automation Engineer, AWS DevOps Engineer and Cloud Solutions Architect Associate. These interviews ask you to review an architecture, explain a failure and justify a cost decision — which is exactly what this course trains you for.',
      },
      {
        q: 'What salary can this lead to?',
        a: 'A fresher entering with the complete portfolio typically starts around ₹30,000 – ₹55,000 per month in this market, with advanced roles rising well beyond that within two years. Cloud, DevOps and SRE roles also carry the strongest remote and freelance opportunity of anything in this catalogue.',
      },
      {
        q: 'Are the advanced months just more services to learn?',
        a: 'The opposite. The final months introduce almost no new product names — they revisit architecture, security, AI services, Kubernetes, Terraform, observability and MLOps at production standard. You learn Kubernetes first with the basics, then return to it as node groups, RBAC design, canary rollouts and CrashLoopBackOff triage.',
      },
      {
        q: 'Is this work remote-friendly?',
        a: 'More than any other track here. The infrastructure is not physically present for anyone, and SRE and platform teams are routinely distributed — so the market is national rather than local.',
      },
    ],
    projects: [
      {
        name: 'Linux & Bash Automation Toolkit',
        summary:
          'A Linux administration lab plus an automation toolkit — backup, log-parsing and health-check scripts, on GitHub.',
        tech: ['Linux', 'Bash', 'Git'],
        level: 'Beginner',
        skills: ['System Administration', 'Scripting'],
      },
      {
        name: 'Secure AWS Network & Live Site',
        summary:
          'A secure AWS network of your own with a live website running on EC2 inside it, IAM scoped to least privilege.',
        tech: ['VPC', 'EC2', 'IAM', 'Nginx'],
        level: 'Beginner',
        skills: ['Network Design', 'Access Control'],
      },
      {
        name: 'Scalable Multi-Tier Application',
        summary:
          'EC2, S3, RDS, a load balancer and Auto Scaling with CloudWatch dashboards and an architecture diagram.',
        tech: ['ALB', 'RDS', 'Auto Scaling', 'CloudWatch'],
        level: 'Intermediate',
        skills: ['High Availability', 'Monitoring'],
      },
      {
        name: 'Cloud Operations Platform',
        summary:
          'An observable environment with SLO dashboards, log aggregation, alert routing and a written postmortem.',
        tech: ['Prometheus', 'Grafana', 'Loki', 'ELK'],
        level: 'Advanced',
        skills: ['Observability', 'SRE'],
      },
      {
        name: 'Security & Recovery Review',
        summary:
          'A hardened AWS estate with least-privilege policies, an audit trail and a tested cross-region recovery runbook — plus a game-day exercise report.',
        tech: ['IAM', 'KMS', 'GuardDuty', 'AWS Backup'],
        level: 'Advanced',
        skills: ['Security Engineering', 'Disaster Recovery'],
      },
      {
        name: 'MLOps Deployment & Expert Capstone',
        summary:
          'A containerised AI service released through CI/CD with a model registry and drift monitoring — then the expert capstone integrating infrastructure, application, AI, security, automation and observability, with a cost-optimisation report showing measured savings.',
        tech: ['FastAPI', 'Docker', 'Kubernetes', 'Terraform'],
        level: 'Advanced',
        skills: ['MLOps', 'FinOps'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Progress based on skill, not just time',
        copy: 'You advance when a deliverable passes review. Over nine months that matters more, not less — nobody reaches the expert capstone without earlier work actually passing.',
      },
      {
        title: 'Live AWS, licensed and supervised',
        copy: 'From the early months every session runs in a real AWS account with real billing alarms. By the final months you are optimising that account’s cost as a graded exercise.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching EKS operations and GitOps delivery are the people running them for client work, which is why the troubleshooting sections name CrashLoopBackOff and OOMKills rather than generic failures.',
      },
      {
        title: 'The complete course in one enrolment',
        copy: 'Nine months, one sequence and no restarts. This is the full programme from Linux basics to expert capstone — not a track that assumes you will come back for the rest.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 9-Month Cloud Computing Program in Phagwara?',
        a: 'Nine months (36 weeks) of training. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'How is this different from the 6-month program?',
        a: 'The 9-month course covers everything in the 6-month course and adds three more months of advanced content: architecture and resilience engineering, security engineering and compliance, production AI service engineering, Kubernetes operations at scale on EKS, GitOps infrastructure automation, site reliability with cost optimisation, and MLOps with a final expert capstone.',
      },
      {
        q: 'Do I need programming experience or a technical background?',
        a: 'No. The course begins with Linux administration taught from scratch, and it is built for career changers and students joining straight after 12th from any stream. Nine months is the longest runway from that starting point to a senior-level job description.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'Three advanced portfolio projects: a cloud operations platform with SLO dashboards, log aggregation and a postmortem; a hardened AWS estate with least-privilege policies, an audit trail and a tested recovery runbook; and an MLOps deployment with model registry and drift monitoring. They finish in an expert capstone that integrates infrastructure, application, AI, security, automation and observability into one system, with an architecture presentation and technical viva.',
      },
      {
        q: 'Can I start with a shorter track and extend to this one?',
        a: 'Yes, and nothing is repeated. The 3-month and 6-month courses are subsets of this one — each picks up where the previous one ended. Content you have already completed is never re-taught, so extending costs you only the new months.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-cloud-computing-program-in-phagwara',
      'after-12th-3-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-cyber-security-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
      'after-12th-9-month-full-stack-development-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month cloud computing program in Phagwara',
      'cloud computing diploma after 12th Phagwara',
      'AWS devops and kubernetes training Phagwara',
      'MLOps and SRE course Punjab',
      'cloud computing diploma with placement Phagwara',
    ],
  }),

  /* ---------------------------------------------------- flutter app development -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-flutter-app-development-program-in-phagwara',
    label: 'Flutter App Development',
    title: 'Best After 12th 9-Month Flutter App Development Program in Phagwara',
    icon: 'mobile',
    duration: '9 Months',
    level: 'Beginner to Lead Developer',
    summary:
      'A complete 9-month Flutter course that takes you from your first line of Dart to building intelligent, deployed, team-built products — covering generative AI, agentic features, a real backend, an automated release pipeline and the client skills to sell it.',
    overview:
      'This 9-month program covers the complete Flutter journey from scratch. Students begin with Dart basics and progress through proper Git and GitHub team workflows with CI, generative AI APIs with streaming and retrieval-augmented generation, agentic and multimodal features, a real Supabase backend with row-level security, release-pipeline engineering with Fastlane and crash reporting, monetisation and product analytics, and a capstone project taken from a client brief through to store submission.\nThe structure divides into three phases: months one through three focus on foundations (Dart, Flutter widgets, layouts, navigation); months four through six develop professional skills (state management, APIs, Firebase, animations); months seven through nine address advanced topics (Git workflows, generative AI, Supabase, release pipelines, monetisation and the capstone). Each month builds progressively on prior knowledge.',
    demand:
      'A screen that shows data is a form; a product is something that learns, responds and gets a job done — and the developers who can build the model behind the surface and the pipeline around it are the ones who set their own rate.',
    modules: [
      {
        title: 'Month 1 — Dart Fundamentals & Dev Setup',
        summary:
          'The language before the framework, from the first line.',
        topics: [
          'Installing Flutter and the IDE; creating your first Dart program',
          'Variables, data types, operators and control flow (if/else, loops, switch)',
          'Functions, parameters and return types; null safety basics',
          'Collections — Lists, Maps and Sets; iterating and transforming data',
          'Object-oriented programming: classes, constructors, inheritance and mixins',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Flutter Widgets & Layouts',
        summary:
          'The widget tree, and screens that hold up on any device.',
        topics: [
          'Stateless vs Stateful widgets; the widget tree and build method',
          'Layout widgets: Row, Column, Stack, Expanded, Flexible and Wrap',
          'Common UI widgets: Text, Image, Icon, Button variants, Card and ListTile',
          'Scrollable layouts: ListView, GridView and SingleChildScrollView',
          'Forms and input: TextField, validation, the Form widget and GlobalKey',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Navigation, Theming & Local Storage',
        summary:
          'A themed, multi-page app that remembers what you did last time.',
        topics: [
          'Navigation: Navigator push/pop, named routes and GoRouter basics',
          'Theming: ThemeData, dark mode, custom colour schemes and typography',
          'Local storage with SharedPreferences and Hive for offline data',
          'Packages and pub.dev; adding and managing dependencies',
          'Debugging tools: DevTools, the widget inspector and logging',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — State Management & Architecture',
        summary:
          'Where junior Flutter code collapses, and how to structure so it does not.',
        topics: [
          'Understanding state: ephemeral vs app state; lifting state up',
          'Provider pattern: ChangeNotifier, Consumer and Selector',
          'Riverpod fundamentals: providers, state notifiers and async values',
          'Clean architecture: separating UI, business logic and data layers',
          'Unit testing and widget testing basics',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — REST APIs, Networking & Firebase',
        summary:
          'Live data and a real backend behind the interface.',
        topics: [
          'HTTP requests with the http and Dio packages; parsing JSON with model classes',
          'Async/await, Futures and Streams; error handling for network calls',
          'Firebase Authentication with email and Google sign-in',
          'Firestore CRUD and Firebase Storage for images and files',
          'Cloud Messaging for push notifications',
          'Displaying remote data with FutureBuilder and StreamBuilder',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Animations, Maps & Device Features',
        summary:
          'The polish and the hardware access clients actually ask for.',
        topics: [
          'Implicit animations: AnimatedContainer, AnimatedOpacity and Hero transitions',
          'Explicit animations: AnimationController, Tween and curves',
          'Google Maps integration; geolocation with Geolocator; markers and routes',
          'Camera, gallery and file picker; permissions handling',
          'Platform channels basics — accessing native device features',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 7 — Git, GitHub & Generative AI Integration',
        summary:
          'Team workflow with real reviews, then AI features with a cost figure attached.',
        topics: [
          'Git fundamentals: commits, branches and merges; GitFlow and trunk-based strategies',
          'Opening and reviewing pull requests; resolving merge conflicts; Flutter .gitignore',
          'GitHub Actions for automated checks; protecting main; semantic commit messages',
          'REST integration with the OpenAI, Claude and Gemini APIs',
          'Streaming responses into a Flutter UI',
          'Prompt design for app-specific features; function calling from a mobile client',
          'Managing API keys securely outside the client bundle; rate limiting and cost control',
          'Building a retrieval-augmented generation pipeline against a vector store',
          'Context-window management; error handling and fallback UX when a model call fails',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 8 — Agentic AI, Supabase Backend & Release Pipelines',
        summary:
          'An agent that asks before it acts, a backend beyond Firestore, and a pipeline you wire once.',
        topics: [
          'Agent loops — plan, act, observe — inside a mobile client',
          'Multimodal input combining image, voice and camera with an LLM',
          'On-device speech-to-text and text-to-speech; ML Kit in hybrid pipelines',
          'Tool-calling into app-native functions such as calendar, camera and storage',
          'Safety rails and a confirmation step before an agent takes action',
          'Supabase Postgres schema design and row-level security; Supabase Auth; Edge Functions',
          'Firebase Cloud Functions as an alternative; background jobs and webhook handling',
          'Separating dev, staging and production environments',
          'GitHub Actions pipelines for Flutter: test, build, sign and deploy',
          'Fastlane for automated screenshots and store submission; code signing for both platforms',
          'Crash reporting with Crashlytics or Sentry; a versioning strategy',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 9 — Monetisation, Analytics & Capstone',
        summary:
          'Revenue you can report, and the business skills to sell the whole system.',
        topics: [
          'In-app purchases and subscription paywalls with RevenueCat, StoreKit and Play Billing',
          'Ad integration with AdMob',
          'Product analytics with Firebase Analytics and Mixpanel or Amplitude',
          'Funnel and retention tracking; A/B testing a paywall; App Store Optimisation basics',
          'Writing a technical proposal from a client brief',
          'Estimating timelines and pricing a Flutter build; architecture decision records',
          'Client demo cadence and change-request handling',
          'Portfolio, resume and AI-integration roles',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Ten reviewed pull requests with a documented branching workflow, protected main and a passing CI Action',
      'RAG over your own documents with streaming AI chat, secured keys and a cost-per-query figure',
      'An agent that asks before it acts, with a documented failure-mode test',
      'A Supabase Postgres backend with row-level security and a deployed Edge Function',
      'A pipeline you wire once — GitHub Actions and Fastlane shipping signed builds with crash reporting',
      'A monetised app with a live RevenueCat paywall and a funnel analytics dashboard',
    ],
    tools: [
      'Flutter SDK & Dart',
      'VS Code / Android Studio',
      'GoRouter, SharedPreferences & Hive',
      'Provider & Riverpod',
      'flutter_test & Mockito',
      'Dio & http',
      'Firebase Auth, Firestore, Storage & FCM',
      'Google Maps & Geolocator',
      'Git, GitHub & GitHub Actions',
      'OpenAI, Claude & Gemini APIs',
      'Supabase Vector & Pinecone',
      'ML Kit, speech_to_text & flutter_tts',
      'Supabase & Postgres',
      'Fastlane, Crashlytics & Sentry',
      'RevenueCat, AdMob & Mixpanel',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. Nine months of consistent work is the difference between a junior app job and one that carries technical ownership, and there is no prerequisite beyond 12th pass.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc or B.Tech, this is the version that puts you in senior interviews rather than fresher drives. You arrive with an AI app, a real backend, a release pipeline and a revenue dashboard.',
      },
      {
        label: 'Working developers and freelancers',
        copy: 'If you already ship apps, this is the course that changes your rate. Generative AI, a Supabase backend, an automated pipeline and a priced client proposal are what let you quote for a whole system rather than a screen.',
      },
      {
        label: 'Aspiring agency owners',
        copy: 'The final month covers the business side: writing a technical proposal from a brief, estimating timelines, pricing a Flutter build, running demo cadence and handling change requests.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Git the way a team actually uses it',
        copy: 'Ten merged pull requests with review comments, a documented branching strategy, protected main and a passing CI Action. A candidate who cannot resolve a conflict live fails technical screens regardless of how good the app is.',
      },
      {
        title: 'AI features with a cost figure',
        copy: 'You will ship streaming responses, a RAG pipeline over a custom document set, keys kept outside the client bundle, rate limiting and fallback UX — plus a documented cost-per-query estimate.',
      },
      {
        title: 'A backend beyond Firestore',
        copy: 'Supabase Postgres with row-level security, Auth, Edge Functions and a documented dev/staging/production split. Firebase-only teams hit a ceiling on complex queries and cost; this is where you pass it.',
      },
      {
        title: 'Revenue you can report',
        copy: 'A live RevenueCat paywall with a real product and an analytics dashboard tracking the install-to-purchase funnel. An app that cannot report retention and revenue cannot be pitched to a client or an investor.',
      },
    ],
    whyNow: {
      title: 'Own the Product, Not Just the Interface',
      points: [
        'A screen that shows data is a form. A product is something that learns, responds and gets a job done end to end — a camera that reads a receipt, a chat that answers from your own documents, an assistant that books the appointment.',
        'Flutter builds the surface; the model behind it is what makes users pay, and the pipeline around it is what lets you ship the next version without holding your breath.',
        'This course covers all three, plus the proposal and pricing skills to sell the whole system.',
        'A developer with AI features in production, a real backend and an automated pipeline typically commands ₹45,000 – ₹90,000 per month in the Indian market, and considerably more on remote contracts.',
      ],
    },
    roles: [
      'AI Mobile Engineer',
      'Flutter Tech Lead',
      'Full-Stack Mobile Engineer',
      'Freelance / Agency Flutter Developer',
      'Senior Cross-Platform Engineer',
      'Mobile Product Engineer',
    ],
    roleDetails: [
      {
        role: 'AI Mobile Engineer',
        copy: 'Mid level, and the role this course prepares you for. Interviews test whether you can wire a real model into a real app safely, with a fallback for when it fails. Show the generative AI app, the agentic feature and the documented failure-mode test.',
      },
      {
        role: 'Flutter Tech Lead',
        copy: 'Senior. Interviews test system design across state, backend and release pipeline, and whether you can defend technical decisions. Show the Supabase backend, the automated release pipeline and the architecture decision records.',
      },
      {
        role: 'Full-Stack Mobile Engineer',
        copy: 'The role that owns the app and the service behind it. Supabase schema design, row-level security, Edge Functions and a documented environment split are exactly what this interview asks about.',
      },
      {
        role: 'Freelance / Agency Flutter Developer',
        copy: 'Independent. Clients test whether you can scope, price, build and ship an app end to end. Show the client kit: proposal, published app, case study and GitHub history.',
      },
    ],
    hiring: [
      'App studios and product companies shipping AI features into mobile',
      'Startups needing one engineer to own the app and its backend',
      'Agencies quoting for complete systems rather than screens',
      'Remote contracts, where a published app and a GitHub history are checkable evidence',
    ],
    nextSteps: [
      'Native platform specialisation',
      'Backend and platform engineering',
      'Agentic AI in depth',
      'Agency building and client acquisition',
    ],
    industries: ['App studios', 'Product startups', 'Agencies', 'Freelance / remote'],
    salary: {
      role: 'AI Mobile Engineer',
      summary:
        'Ships intelligent, monetised products with a real backend and an automated pipeline. Freelance rates depend on the client kit — proposal, published app and case study.',
      starting: '₹45,000–₹90,000/month',
      after2: '₹90,000–₹1,80,000/month',
      markets: [
        {
          name: 'India — AI Mobile Engineer',
          fresher: '₹45,000–₹90,000/month',
          after2: '₹90,000–₹1,80,000/month',
          scale: { fresher: 67500, after2: 135000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹55,000–₹1,00,000/month',
          after2: '₹1,10,000–₹2,20,000+/month',
          scale: { fresher: 77500, after2: 165000 },
        },
        {
          name: 'Remote Contracts / Agency Work',
          fresher: '₹40,000–₹95,000/month',
          after2: '₹1,00,000–₹2,50,000+/month',
          scale: { fresher: 67500, after2: 175000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 9-month program?',
        a: 'AI Mobile Engineer, Flutter Tech Lead and Freelance or Agency Flutter Developer. Those interviews test whether you can wire a model into an app safely, design across state, backend and pipeline, and scope and price a client build — which is what the AI features, the backend, the pipeline and the client kit are for.',
      },
      {
        q: 'What salary can I expect after this course?',
        a: 'A developer with AI features in production, a real backend and an automated pipeline typically commands ₹45,000 – ₹90,000 per month in the Indian market, and considerably more on remote contracts. Freelance rates depend on the client kit — proposal, published app and case study — which the final month exists to produce.',
      },
      {
        q: 'Why is this the highest band in the mobile track?',
        a: 'Because it is not a fresher qualification. Nine months takes you past building screens into owning the product — the model, the backend and the release pipeline — and those three together are what a lead or independent developer is paid for.',
      },
      {
        q: 'Can I start freelancing straight from this?',
        a: 'It is designed for it. The final month covers writing a technical proposal from a brief, estimating timelines, pricing a build, demo cadence and change requests, and you finish with a published app and a case study to quote against.',
      },
    ],
    projects: [
      {
        name: 'GitHub Team Workflow',
        summary:
          'A public repo with ten reviewed pull requests, a documented branching strategy and a passing CI Action.',
        tech: ['Git', 'GitHub Actions'],
        level: 'Intermediate',
        skills: ['Team Workflow', 'CI'],
      },
      {
        name: 'Generative AI App',
        summary:
          'Streaming AI chat plus a RAG-based question-and-answer feature over custom documents, with a cost-per-query estimate.',
        tech: ['OpenAI', 'Claude API', 'Pinecone'],
        level: 'Advanced',
        skills: ['RAG', 'Cost Control'],
      },
      {
        name: 'Agentic AI Feature',
        summary:
          'A confirmed, tool-calling agent action inside a live app — scan a receipt, log the expense — with a documented failure-mode test.',
        tech: ['Multimodal LLM APIs', 'ML Kit', 'speech_to_text'],
        level: 'Advanced',
        skills: ['Agent Design', 'Safety Rails'],
      },
      {
        name: 'Supabase Backend',
        summary:
          'A live app on a real backend with row-level security policies and a deployed Edge Function, across separated dev, staging and production environments.',
        tech: ['Supabase', 'Postgres'],
        level: 'Advanced',
        skills: ['Backend Design', 'Row-Level Security'],
      },
      {
        name: 'Automated Release Pipeline',
        summary:
          'A CI/CD pipeline shipping signed builds to both stores’ test tracks, with a crash dashboard receiving real events.',
        tech: ['GitHub Actions', 'Fastlane', 'Sentry'],
        level: 'Advanced',
        skills: ['Release Engineering', 'Crash Reporting'],
      },
      {
        name: 'Monetised App & Client Capstone',
        summary:
          'A live RevenueCat paywall with a real product and a funnel analytics dashboard — then the capstone taken from a client brief through to a published app with a written proposal and a case study.',
        tech: ['RevenueCat', 'Mixpanel', 'AdMob'],
        level: 'Advanced',
        skills: ['Monetisation', 'Client Delivery'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Learn by doing, not just watching',
        copy: 'You advance when a deliverable passes review. Over nine months that matters — nobody reaches the capstone without the earlier projects actually passing.',
      },
      {
        title: 'Funded API keys and real store accounts',
        copy: 'Live OpenAI, Claude and Gemini keys with per-student budgets, a Supabase project, RevenueCat products and both store consoles — so the cost-per-query figure is measured, not estimated.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching Supabase RLS and Fastlane pipelines are the people writing them for client work, which is why the failure sections cover failures that actually happen.',
      },
      {
        title: 'The complete course, no restarts',
        copy: 'Nine months, one continuous sequence. This is the full programme from beginner to advanced — not a partial track that assumes you will come back for the rest.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 9-Month Flutter App Development Program in Phagwara?',
        a: 'Nine months of training. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'How is this different from the 6-month program?',
        a: 'The 9-month program includes everything in the 6-month course and adds three more months of advanced content — Git and GitHub team workflow with CI, generative AI APIs with streaming and RAG, agentic and multimodal features, a Supabase backend, release-pipeline engineering with Fastlane and crash reporting, monetisation and product analytics, and a client-brief-to-store capstone.',
      },
      {
        q: 'Will I use real AI API keys, or a simulation?',
        a: 'Real keys, with per-student budgets. You will ship streaming responses from OpenAI, Claude or Gemini, keep the key outside the client bundle, add rate limiting and fallback UX, and produce a documented cost-per-query estimate — which is only possible with real usage.',
      },
      {
        q: 'What is an agentic feature in an app?',
        a: 'An agent loop — plan, act, observe — running inside the mobile client, calling app-native functions such as the calendar, camera or storage rather than just returning text. The deliverable is something like "scan this receipt and log the expense", with a confirmation step before the action and a documented failure-mode test.',
      },
      {
        q: 'Do I need programming experience or a technical background?',
        a: 'No. The course begins with Dart taught from the first line, and it is explicitly built for school leavers, graduates and career changers. Nine months gives you the full runway from complete beginner to a lead or independent developer role.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-flutter-app-development-program-in-phagwara',
      'after-12th-3-month-flutter-app-development-program-in-phagwara',
      'after-12th-9-month-mern-stack-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-full-stack-development-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month flutter program in Phagwara',
      'flutter diploma after 12th Phagwara',
      'AI mobile app development training Phagwara',
      'supabase and fastlane course Punjab',
      'flutter diploma with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------- MERN stack -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-mern-stack-program-in-phagwara',
    label: 'MERN Stack',
    title: 'Best After 12th 9-Month MERN Stack Diploma Program in Phagwara',
    icon: 'layers',
    duration: '9 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'The longest MERN track — nine months from how the internet works to an industry-level AI-powered application, with OpenAI and Gemini integration, real-time features, a two-month capstone, DSA and a full month of placement preparation.',
    overview:
      'This is the AI-Powered Full Stack Web Development (MERN) diploma, written for someone starting straight after 12th who wants the complete route rather than the fastest one. Nine months, one theme per month. What separates it from the three- and six-month tracks is not pace but scope: it carries a full month of AI integration, two months on a single industry-level project, and a final month given entirely to DSA, computer science fundamentals and interview preparation.\nMonths one to three build the front end — web fundamentals, HTML5, CSS3, Git and AI tools; then JavaScript from variables to closures, ES6+, the DOM, asynchronous JavaScript and browser storage; then React.js with hooks, React Router, Axios, Context API, Tailwind and frontend JWT authentication.\nMonths four to six build and then advance the back end. Month four is Node.js and Express — modules, npm, routing, middleware, MVC architecture, REST API development, bcrypt and JWT with role-based authorisation, API documentation and Postman testing. Month five is MongoDB and database management: SQL versus NoSQL, Atlas, Compass, the mongo shell, query and update operators, Mongoose schemas and validators, and file handling with Multer, Cloudinary and Nodemailer. Month six is advanced MERN — full stack integration, refresh tokens and RBAC, pagination, search, rate limiting, CORS and Helmet, real-time applications with Socket.IO, Stripe and Razorpay payments with OTP and SMS, performance optimisation and deployment, and full AI integration with the OpenAI and Google Gemini APIs.\nMonths seven and eight are one industry-level major project in two phases — planning, requirement analysis, user stories, UI/UX and architecture, then the frontend, the backend, AI feature integration, schema design and security, with code reviews and bug tracking throughout; then advanced features, AI enhancements, testing and optimisation, deployment and DevOps, documentation, a live presentation and career portfolio preparation. Month nine is placement preparation: data structures and algorithms, technical interview questions across the whole stack, computer science fundamentals, aptitude and soft skills, ATS resume and portfolio development, mock interviews with live coding rounds, and career preparation including freelancing, open source and salary negotiation.',
    demand:
      'Candidates who can demonstrate a shipped AI feature tend to sit at the top of the fresher band rather than the bottom, because far fewer applicants can show one.',
    modules: [
      {
        title: 'Month 1 — Web Development Fundamentals',
        summary:
          'How the internet works, then HTML, CSS, Git and the AI tools you will use throughout.',
        topics: [
          'How the internet works; client–server architecture; websites vs web applications',
          'Frontend vs backend vs full stack; browsers, HTTP and HTTPS; domains and hosting',
          'HTML5: structure, semantic tags, forms, tables, media and accessibility',
          'CSS3: selectors, Flexbox, Grid, animations, responsive design and media queries',
          'Git and GitHub: commands, branching, merge, pull requests and workflow',
          'AI tools: ChatGPT, GitHub Copilot, prompt engineering basics and AI-assisted debugging',
          'Mini projects: personal portfolio website and responsive landing pages',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — JavaScript (Beginner to Advanced)',
        summary:
          'A full month on the language, through closures and async.',
        topics: [
          'Variables, data types, operators, input and output, template literals',
          'Conditionals, loops, functions, arrow functions, scope, hoisting and closures',
          'Array and object methods, destructuring, spread and rest operators, JSON',
          'ES6+: higher order functions, callbacks, map, filter, reduce, find, some, every, modules',
          'DOM manipulation: selecting and traversing, creating and removing elements',
          'Event handling, forms and validation',
          'Asynchronous JavaScript: call stack, Web APIs, callback hell, promises and chaining',
          'Async/await, the Fetch API, API integration and error handling',
          'Browser storage: local storage, session storage and cookies',
          'AI tools for JavaScript: debugging, code optimisation and code explanation',
          'Mini projects: calculator, weather app, quiz app and notes app',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — React.js Development',
        summary:
          'Four React applications, with routing, state and authentication.',
        topics: [
          'Why React and SPAs; setting up with Vite; project structure, JSX and components',
          'Props, state, event handling, conditional rendering, lists and keys, controlled forms',
          'Hooks: useState, useEffect, useRef, useMemo, useCallback and custom hooks',
          'React Router DOM: routes, parameters, nested and protected routes, 404 pages',
          'API integration with Axios and Fetch; CRUD, loading states and error handling',
          'State management with the Context API; prop drilling and best practices',
          'Styling with CSS Modules and Tailwind CSS; responsive UI design',
          'Frontend JWT authentication: login and signup forms, protected pages, token storage',
          'AI tools for React: component generation, UI assistance and debugging',
          'Mini projects: recipe finder, blog website, e-commerce frontend, employee dashboard',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Backend Development (Node.js + Express)',
        summary:
          'REST APIs with the architecture and documentation a team expects.',
        topics: [
          'Node.js fundamentals: REPL, modules, CommonJS, npm, package.json',
          'File system, path, OS, events and HTTP modules',
          'Express: server setup, routing, route and query parameters, middleware and Router',
          'Static files and MVC architecture',
          'REST API development: CRUD, request and response, HTTP methods and status codes',
          'API testing with Postman, Express Validator and error handling',
          'Authentication: bcrypt password hashing, JWT, registration, login, protected routes',
          'Role-based authorisation; cookies and sessions',
          'Backend architecture: environment variables, configuration and folder structure',
          'API documentation basics and debugging',
          'AI tools for backend: API development, debugging and documentation generation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — MongoDB & Database Management',
        summary:
          'The data layer, properly — schemas, validation and third-party services.',
        topics: [
          'SQL vs NoSQL; MongoDB overview, installation, Atlas and Compass',
          'Collections and documents; the MongoDB Shell (mongosh)',
          'CRUD, query operators, update operators and delete operations',
          'Mongoose: connecting MongoDB with Node.js, schemas, models and data types',
          'Schema validation, built-in and custom validators; CRUD using Mongoose',
          'File upload with Multer and Cloudinary integration',
          'Email integration with Nodemailer; environment variables and image storage',
          'AI tools for database development: query generation, schema design and optimisation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Advanced MERN Stack Development',
        summary:
          'Real-time features, payments and an AI feature inside your own product.',
        topics: [
          'MERN integration: React with Node and Express; full stack CRUD and error handling',
          'Complete JWT authentication with refresh tokens, RBAC and admin and user panels',
          'Advanced backend: file uploads, image management, pagination, search, filtering, sorting',
          'Rate limiting, logging, API security, CORS and Helmet',
          'Real-time applications with Socket.IO: chat, notifications and live data updates',
          'Payments with Stripe or Razorpay; email notifications, OTP verification and SMS',
          'Google authentication and Cloudinary',
          'Performance: code splitting, lazy loading and caching basics',
          'Deployment on Vercel, Render and Netlify; MongoDB Atlas and production variables',
          'AI integration: the OpenAI and Google Gemini APIs',
          'AI chatbot development, content generation, recommendation systems and image generation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 7 — Major Project Development (Phase I)',
        summary:
          'One industry-level AI-powered application, planned and built under review.',
        topics: [
          'Project selection, problem statement and requirement gathering',
          'Functional and non-functional requirements, user stories and an Agile roadmap',
          'Wireframing, UI design principles and responsive design planning',
          'Folder structure, MERN architecture, database design and API planning',
          'Frontend: routing, authentication UI, dashboard, forms, state and API integration',
          'Backend: Express server, REST APIs, authentication, database, CRUD and file uploads',
          'AI feature integration with the OpenAI and Gemini APIs: chatbot, content, recommendations',
          'MongoDB schema design, Mongoose models, validation, RBAC and JWT',
          'Code reviews, feature validation, bug tracking and version control',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 8 — Major Project (Phase II) & Deployment',
        summary:
          'Advanced features, testing, deployment, documentation and a live presentation.',
        topics: [
          'Admin panel, user dashboard, notifications, search, filters and pagination',
          'Real-time features and payment gateway integration',
          'AI enhancements: chatbot improvements, automation, AI search and analytics dashboards',
          'Application and API testing, debugging, error handling and code refactoring',
          'Performance optimisation and security best practices',
          'Deployment: Vercel, Render, MongoDB Atlas, environment variables, domain and CI/CD basics',
          'API and project documentation, README, database documentation and a user manual',
          'Live project demonstration, feature walkthrough, architecture discussion and viva',
          'Career portfolio: GitHub management, portfolio website, resume and LinkedIn showcase',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 9 — Placement Preparation & Career Readiness',
        summary:
          'The month no shorter track carries — DSA, CS fundamentals and mock interviews.',
        topics: [
          'Data structures and algorithms: arrays, strings, searching, sorting and recursion',
          'Linked lists, stacks, queues, hashing, trees, binary search trees, graphs and heaps',
          'Greedy algorithms, backtracking, dynamic programming, time and space complexity',
          'Technical interview questions across JavaScript, React, Node, Express, MongoDB and REST',
          'Computer science fundamentals: OOP, operating systems, DBMS, networks, SQL and SDLC',
          'Aptitude, logical reasoning, verbal ability and data interpretation',
          'Communication skills, HR interview preparation, group discussion and workplace etiquette',
          'ATS-friendly resume, GitHub and LinkedIn optimisation and personal branding',
          'Live coding rounds, company-wise questions and technical and HR mock interviews',
          'Job search strategies, freelancing basics, open source, networking and salary negotiation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'An AI chatbot inside your own product — an Express route you wrote calling OpenAI or Gemini',
      'Real-time features with Socket.IO and a working checkout with Stripe or Razorpay plus OTP',
      'Complete JWT authentication with refresh tokens and role-based access control',
      'Two months on one industry capstone, deployed to Vercel and Render, documented and presented',
      'DSA from arrays through dynamic programming with complexity analysis',
      'OOP, operating systems, DBMS, networks and SQL, then live coding rounds and mock interviews',
    ],
    tools: [
      'HTML5, CSS3 & JavaScript (ES6+)',
      'React.js & Tailwind CSS',
      'Node.js & Express.js',
      'MongoDB, Mongoose, Atlas & Compass',
      'Socket.IO',
      'Stripe & Razorpay',
      'Multer, Cloudinary & Nodemailer',
      'OpenAI API & Google Gemini API',
      'ChatGPT & GitHub Copilot',
      'VS Code, Postman & Chrome DevTools',
      'Git, GitHub & npm',
      'Vercel, Render & Netlify',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. The course starts at how the internet works, and nine months is long enough to go from that to an AI-powered application deployed on a live URL without ever feeling rushed.',
      },
      {
        label: 'Students aiming at product companies',
        copy: 'Month nine is the reason to choose this length. DSA, OOP, operating systems, DBMS, networks and SQL are what written rounds and technical interviews test, and no shorter track carries them.',
      },
      {
        label: 'Students doing a degree alongside',
        copy: 'Nine months of evenings or weekends runs comfortably beside a BCA, B.Sc IT or first-year B.Tech, and finishes with a capstone your college project cannot match.',
      },
      {
        label: 'Anyone who wants the AI half',
        copy: 'The OpenAI and Gemini integration in month six, and the AI features carried through the capstone, are what separate this from a standard MERN course. Very few freshers in Punjab can show a working AI feature.',
      },
      {
        label: 'Career restarters and switchers',
        copy: 'A gap or an unrelated background counts for less than a deployed application someone can open. The syllabus is identical whoever you are; only the batch timing changes.',
      },
      {
        label: 'Aspiring freelancers',
        copy: 'Month nine covers freelancing basics, open source contribution, LinkedIn networking and rate negotiation, on top of the payments, OTP and deployment work that paying clients actually ask for.',
      },
    ],
    whyChooseUs: [
      {
        title: 'The complete MERN curriculum',
        copy: 'The full stack in depth and in order — HTML5 and CSS3, JavaScript to closures and async, React with hooks and routing, Node and Express, MongoDB and Mongoose, then advanced integration.',
      },
      {
        title: 'Advanced AI development',
        copy: 'The OpenAI and Google Gemini APIs integrated into your own backend: AI chatbots and basic agents, content generation, recommendation systems, image generation and prompt engineering for web applications.',
      },
      {
        title: '10+ mini projects',
        copy: 'A portfolio site and landing pages, calculator, weather app, quiz app, notes app, recipe finder, blog site, e-commerce frontend and employee dashboard — practice you can point at.',
      },
      {
        title: '1 industry-level AI capstone',
        copy: 'Two months on one application with authentication, RBAC, AI integration, real-time features, payments, file upload, dashboards and REST APIs — deployed, documented and presented.',
      },
      {
        title: 'DSA and aptitude preparation',
        copy: 'Arrays through dynamic programming with time and space complexity, plus OOP, OS, DBMS, networks, SQL and SDLC, aptitude, logical reasoning and group discussion.',
      },
      {
        title: 'Portfolio, resume and mock interviews',
        copy: 'ATS-friendly resume, GitHub and LinkedIn optimisation, a portfolio website, live coding rounds, company-wise questions, technical and HR mocks with feedback.',
      },
    ],
    whyNow: {
      title: 'Nine Months, an AI-Powered Capstone, and the Interview Preparation to Use It',
      points: [
        '10+ mini projects and one industry-level AI-powered MERN application — deployed, documented and presented.',
        'MERN roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher who can show a working AI feature.',
        'Two years of delivery experience usually doubles that.',
        'Candidates who can demonstrate a shipped AI feature tend to sit at the top of the fresher band rather than the bottom, because far fewer applicants can show one.',
      ],
    },
    roles: [
      'MERN Stack Developer',
      'Full Stack Web Developer',
      'Frontend Developer',
      'Backend Developer',
      'React.js Developer',
      'Node.js Developer',
      'Web Application Developer',
      'Software Engineer (Entry Level)',
      'Freelance Web Developer',
    ],
    roleDetails: [
      {
        role: 'MERN Stack Developer',
        copy: 'The core destination — owning features across React, Express and MongoDB, with the AI integration work opening roles where a full-stack developer is expected to wire an LLM API into a product.',
      },
      {
        role: 'Backend Developer',
        copy: 'REST APIs, authentication, database design and real-time features. Months four to six are this role’s foundation.',
      },
      {
        role: 'Software Engineer (Entry Level)',
        copy: 'The product-company route, and the reason month nine exists — written rounds test DSA, OOP, OS, DBMS and networks rather than only your projects.',
      },
      {
        role: 'Freelance Web Developer',
        copy: 'Payments, OTP, deployment and the freelancing block in month nine — pricing, open source and negotiation — are what make independent work realistic straight from the course.',
      },
    ],
    hiring: [
      'IT companies, product startups and web agencies across the region',
      'Export houses, immigration consultancies, hospitals and schools building their own systems',
      'Companies adding an AI feature to an existing web product',
      'Freelance and remote client work',
    ],
    nextSteps: [
      'Next.js and server-side rendering',
      'Cloud deployment and DevOps',
      'Agentic AI and LLM engineering',
      'System design for product interviews',
    ],
    industries: ['IT & product', 'Manufacturing & export', 'Healthcare & education', 'Freelance'],
    salary: {
      role: 'MERN Stack Developer (Diploma)',
      summary:
        'Builds AI-integrated full-stack applications and can pass a product-company written round. A shipped AI feature is what moves a candidate to the top of the fresher band.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹40,000–₹72,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — MERN Developer',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹40,000–₹72,000/month',
          scale: { fresher: 27500, after2: 56000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹32,000–₹58,000/month',
          after2: '₹70,000–₹1,30,000+/month',
          scale: { fresher: 45000, after2: 100000 },
        },
        {
          name: 'Freelance / Remote Web Work',
          fresher: '₹15,000–₹35,000/month',
          after2: '₹50,000–₹1,10,000+/month',
          scale: { fresher: 25000, after2: 80000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'MERN Stack Developer, Full Stack Web Developer, Frontend Developer, Backend Developer, React.js Developer, JavaScript Developer, Node.js Developer, Web Application Developer, Software Developer, entry-level Software Engineer and freelance web developer. The AI integration work additionally opens roles where a full-stack developer is expected to wire an LLM API into a product.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with a deployed AI-powered application typically starts around ₹20,000 – ₹35,000 a month in this market. Two years of delivery experience usually doubles that. Candidates who can demonstrate a shipped AI feature tend to sit at the top of the fresher band rather than the bottom, because far fewer applicants can show one.',
      },
      {
        q: 'Is DSA really necessary for a web developer job?',
        a: 'For agencies and service companies, often not. For product companies it is the written round, and failing it means the portfolio never gets looked at. Month nine exists precisely so that door stays open.',
      },
      {
        q: 'Can I freelance with this?',
        a: 'Yes, and month nine prepares for it directly — freelancing basics, open source contribution, LinkedIn networking and rate negotiation, on top of the payments, OTP and deployment work paying clients actually ask for.',
      },
    ],
    projects: [
      {
        name: 'Portfolio Website & Landing Pages',
        summary:
          'Month one’s builds: a personal portfolio site and responsive landing pages in semantic HTML5 and CSS3, versioned with Git and published from GitHub.',
        tech: ['HTML5', 'CSS3', 'Git'],
        level: 'Beginner',
        skills: ['Semantic HTML', 'Responsive Design'],
      },
      {
        name: 'Calculator, Weather, Quiz & Notes Apps',
        summary:
          'Four JavaScript builds covering the DOM, events and validation, then promises, async/await and the Fetch API against a live service, with state in browser storage.',
        tech: ['JavaScript', 'Fetch API'],
        level: 'Beginner',
        skills: ['DOM', 'Async JavaScript'],
      },
      {
        name: 'Recipe Finder, Blog & E-commerce Frontend',
        summary:
          'React applications with hooks, React Router and protected routes, Axios CRUD, Context API state and Tailwind styling — plus an employee management dashboard.',
        tech: ['React.js', 'Tailwind', 'Axios'],
        level: 'Intermediate',
        skills: ['React Hooks', 'Routing'],
      },
      {
        name: 'Secured REST API & Database Layer',
        summary:
          'An Express API in MVC structure with bcrypt and JWT authentication, role-based authorisation and Postman documentation, over Mongoose schemas with validation, Multer uploads and Cloudinary.',
        tech: ['Node.js', 'Express', 'MongoDB'],
        level: 'Intermediate',
        skills: ['API Design', 'Authentication'],
      },
      {
        name: 'Real-Time & AI-Integrated App',
        summary:
          'Month six’s build: Socket.IO live updates and notifications, Stripe or Razorpay checkout with OTP, and an OpenAI or Gemini feature — chatbot, content generation or recommendations.',
        tech: ['Socket.IO', 'OpenAI', 'Razorpay'],
        level: 'Advanced',
        skills: ['Real-Time', 'AI Integration'],
      },
      {
        name: 'Industry AI-Powered Capstone',
        summary:
          'Two months on one application — an AI LMS, healthcare system, resume screening portal, job portal, CRM, e-commerce platform or college ERP — with authentication, RBAC, AI integration, real-time features, payments, dashboards and REST APIs, deployed and presented.',
        tech: ['Full MERN', 'OpenAI', 'Vercel', 'Render'],
        level: 'Advanced',
        skills: ['System Integration', 'Presentation'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still ship code',
        copy: 'Your trainer is not a full-time lecturer. They deliver client projects for techcadd’s services arm, so the architecture examples in class are current rather than a case study from five years ago.',
      },
      {
        title: 'AI on real API keys',
        copy: 'The OpenAI and Gemini APIs called from an Express route you wrote — rate limits, token costs and prompt failures included — rather than watched in someone else’s screen recording.',
      },
      {
        title: 'Two months on one project',
        copy: 'Phase I and Phase II, with code reviews, bug tracking, feature validation and version control running through both. This is the part that reads as professional experience on a CV.',
      },
      {
        title: 'A whole month on getting hired',
        copy: 'DSA, CS fundamentals, subject-wise interview questions, aptitude, live coding rounds and mock interviews with written feedback — not a farewell session in the final week.',
      },
      {
        title: 'Small batches and open doubt hours',
        copy: 'Batches stay small enough that a trainer sees your screen daily, and doubt support continues outside class time until the concept lands.',
      },
      {
        title: 'Certificate, portfolio and placement drives',
        copy: 'A course completion certificate, a documented internship letter, a GitHub portfolio and a deployed capstone — then repeated drives with hiring partners across Phagwara, Jalandhar and Ludhiana.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this MERN Stack programme after 12th?',
        a: 'Nine months, one topic per month: web development fundamentals, JavaScript, React.js, backend development with Node.js and Express, MongoDB and database management, advanced MERN with AI integration, then two months of major project development and deployment, and a final month of placement preparation. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'How is this different from the 3-month and 6-month MERN programmes?',
        a: 'All three start from zero. Three months reaches a deployed MERN application with authentication. Six months adds deeper Node and Express, file handling, a full month on an industry project and a month of deployment and placement preparation. Nine months adds complete AI integration with the OpenAI and Gemini APIs, real-time features and payments, two full months on the major project, and a final month of DSA, computer science fundamentals, aptitude and mock interviews.',
      },
      {
        q: 'Do I need to know AI or Python for the AI topics?',
        a: 'No. This is a JavaScript programme: you call the OpenAI and Gemini APIs from your own Node and Express backend. There is no model training and no Python requirement. What you learn is how to design, secure, cost and ship AI features inside a MERN application.',
      },
      {
        q: 'What is the capstone project?',
        a: 'One complete AI-powered MERN application, chosen from an AI-powered LMS, healthcare management system, resume screening portal, interview preparation platform, job portal, CRM, e-commerce platform, hospital management system or college ERP. It carries user authentication, role-based access, AI integration, real-time features, a payment gateway, file upload, a dashboard with analytics, responsive UI, REST APIs and a MongoDB database — deployed on Vercel and Render with full documentation and a live presentation.',
      },
      {
        q: 'Is DSA really included?',
        a: 'Yes, in month nine: arrays, strings, searching, sorting, recursion, linked lists, stacks, queues, hashing, trees, binary search trees, graphs, heaps, greedy algorithms, backtracking, dynamic programming and time and space complexity — alongside OOP, operating systems, DBMS, computer networks, SQL and SDLC.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-mern-stack-program-in-phagwara',
      'after-12th-3-month-mern-stack-program-in-phagwara',
      'after-12th-9-month-full-stack-development-program-in-phagwara',
      'after-12th-9-month-flutter-app-development-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month MERN stack program in Phagwara',
      'MERN stack diploma after 12th Phagwara',
      'AI powered full stack training Phagwara',
      'DSA and placement preparation course Punjab',
      'MERN diploma with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------- full stack development -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-full-stack-development-program-in-phagwara',
    label: 'Full Stack Development',
    title: 'Best After 12th 9-Month Full Stack Development Diploma Program in Phagwara',
    icon: 'code',
    duration: '9 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'Learn AI-powered full-stack development — one Python and Django ladder with three exit points at 3, 6 and 9 months, taught on live client work at techcadd Phagwara rather than from slides.',
    overview:
      'techcadd’s Best After 12th 9-Month Full Stack Development Diploma Program in Phagwara takes you from web fundamentals, HTML5, CSS3 and Bootstrap to LLM APIs, Celery, payments, CI/CD and system design, taught on Python, Django and DRF. You work on live client briefs under trainer supervision, not slideware. You start from zero with no prior background, and every stage ends in a portfolio deliverable.\nNine months is the full ladder. The first three months are the front end and the language; months four and five are Python in depth alongside databases, SQL and schema design; months six and seven are Django, the ORM and advanced Django with the AI-assisted development discipline that runs beside it; and months eight and nine are the professional layer — Django REST Framework with JWT and API documentation, LLM APIs, Celery, payment gateways, CI/CD and system design — applied to a live client brief with placement preparation alongside.',
    demand:
      'Companies across Punjab are building AI-integrated products with teams trained for the pre-AI stack, and that gap is what this programme is built to fill — there is local demand, there are budgets, and there are very few trained people to hand the work to.',
    modules: [
      {
        title: 'Months 1–3 — Web Fundamentals & JavaScript',
        summary:
          'The front end, taught at a pace that does not assume you have seen any of it.',
        topics: [
          'Web fundamentals: how the web works, client and server, HTTP and hosting',
          'HTML5 structure, semantic markup, forms and accessibility',
          'CSS3 and Bootstrap for responsive layout',
          'JavaScript and the DOM: events, validation and interactivity',
          'Git and GitHub for version control',
        ],
        duration: '12 weeks',
        lessons: 72,
      },
      {
        title: 'Months 4–5 — Python, Databases & Schema Design',
        summary:
          'The language and the data layer, both given room.',
        topics: [
          'Python programming: syntax, data types, control flow and functions',
          'Object-oriented programming in Python',
          'Exception handling and file handling',
          'Databases, SQL and schema design',
          'PostgreSQL in a real project',
        ],
        duration: '8 weeks',
        lessons: 48,
      },
      {
        title: 'Months 6–7 — Django, the ORM & AI-Assisted Development',
        summary:
          'The framework in depth, and how to use AI tooling without trusting it blindly.',
        topics: [
          'Django: project structure, views, templates and URLs',
          'The Django ORM: models, queries, relations and migrations',
          'Advanced Django: forms, authentication, admin and middleware',
          'AI-assisted development and verification discipline',
          'Testing and debugging a Django application',
        ],
        duration: '8 weeks',
        lessons: 48,
      },
      {
        title: 'Months 8–9 — APIs, Integrations, Live Project & Placement',
        summary:
          'The professional layer, on a real client brief, with placement preparation alongside.',
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
        title: 'Nine months is the unhurried version',
        copy: 'The same ladder as the three- and six-month tracks, with the language, the data layer and the framework each given real time rather than compressed. It suits a student running the course alongside a degree.',
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
      'Cloud deployment and DevOps',
      'System design and architecture',
      'Agentic AI and LLM engineering',
      'Data engineering with Python',
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
          'A console and script-level application applying Python fundamentals, object-oriented design and exception handling, versioned in Git.',
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
          'A Django REST Framework service with serializers, viewsets, JWT authentication and published API documentation, tested in Postman.',
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
          'A full-stack project you specify yourself, covering DRF, JWT, LLM integration, Celery background tasks, payments, CI/CD and deployment, presented as your final piece.',
        tech: ['Django', 'Celery', 'Redis'],
        level: 'Advanced',
        skills: ['System Design', 'Presentation'],
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the Full Stack Development Diploma Program in Phagwara?',
        a: 'techcadd runs this programme over 9 months. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
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
        q: 'How is this different from the 3-month and 6-month tracks?',
        a: 'It is the same ladder with a later exit point. Nine months gives Python, the data layer and Django each real time rather than compressing them, and leaves the API, LLM, Celery, payments, CI/CD and system design material two full months — plus the longest supervised live project of the three.',
      },
      {
        q: 'What is the fee for this programme in Phagwara?',
        a: 'Comprehensive programmes with live projects, an internship and placement support run roughly ₹18,000 to ₹40,000 in this region, with longer tracks above that. techcadd counsellors share the current fee sheet and EMI options on request, and a demo class is free.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-full-stack-development-program-in-phagwara',
      'after-12th-3-month-full-stack-development-program-in-phagwara',
      'after-12th-9-month-mern-stack-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-flutter-app-development-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month full stack development program in Phagwara',
      'full stack diploma after 12th Phagwara',
      'python and django training Phagwara',
      'full stack developer course Punjab',
      'full stack diploma with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------------- agentic AI -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-agentic-ai-program-in-phagwara',
    label: 'Agentic AI',
    title: 'Best After 12th 9-Month Agentic AI Program in Phagwara',
    icon: 'cpu',
    duration: '9 Months',
    level: 'Beginner to Architect',
    summary:
      'A complete 9-month journey — from Python basics to designing the AI platform that entire teams build on. Every month adds a new real-world skill.',
    overview:
      'This 9-month program takes you from beginner to architect level. You will learn to build an ingestion backbone, billion-scale retrieval, cross-organisation protocols, an evaluation service, post-training capability, voice and multimodal agents, a governance layer and a cost model the CFO signs off on.\nThe course is structured month by month. Early months cover foundations and core agent skills (also available as the 3-month and 6-month programs). Later months build advanced, production-grade systems. Each month continues from the last, so your skills grow steadily without gaps.',
    demand:
      'Building the paved road — identity, tools, retrieval, evaluation, guardrails, deployment and budgets as platform services — is the architect’s job, and it is the one AI role that is currently almost impossible to hire for.',
    modules: [
      {
        title: 'Month 1 — Data Engineering & Knowledge Pipelines',
        summary:
          'Permissions are a data engineering problem, and getting them wrong is how enterprise RAG pilots fail security review.',
        topics: [
          'Source connectors and change-data-capture across Drive, SharePoint, Confluence, DMS and the warehouse',
          'Incremental, resumable and idempotent ingestion',
          'Document normalisation and layout-aware parsing at volume',
          'Deduplication and near-duplicate detection',
          'ACL and permission propagation from source system to index',
          'PII classification at ingest',
          'Data contracts, schema evolution and lineage',
          'Backfill and full-reindex strategies; freshness SLAs and staleness detection',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Retrieval at Scale & Vector Infrastructure',
        summary:
          'Retrieval as infrastructure rather than as a library call.',
        topics: [
          'Embedding model selection and domain adaptation',
          'ANN index internals — HNSW, IVF-PQ, DiskANN — and their recall, latency and memory trade-offs',
          'Sharding, replication and billion-scale design',
          'Multi-tenancy and row-level security in vector stores',
          'Document AI for tables, forms and scans; multimodal embeddings',
          'Retrieval cost modelling; index rebuild and migration without downtime',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — GraphRAG, Knowledge Graphs & Agentic Retrieval',
        summary:
          'Questions that need relationships traversed rather than text matched.',
        topics: [
          'Query planning and decomposition',
          'Knowledge-graph construction: entity and relation extraction, ontology design',
          'Community detection; global versus local queries',
          'Corrective and self-RAG loops; agentic retrieval where the agent plans its own searches',
          'Structured-data agents with text-to-SQL, schema grounding and guardrails',
          'Retrieval error analysis at scale',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Memory Architecture & Multi-Agent Systems',
        summary:
          'Agents that improve themselves, and agents that talk to other companies’ agents.',
        topics: [
          'Full memory taxonomy and lifecycle; consolidation, decay and forgetting policies',
          'Temporal knowledge graphs and bi-temporal facts; conflict detection and resolution',
          'Self-editing memory; procedural memory and skill libraries agents write for themselves',
          'Experience replay and case-based reasoning; memory evaluation methodology',
          'Retention, residency and right-to-erasure engineering',
          'Topology selection and coordination theory; typed inter-agent contracts',
          'Blackboard and shared-workspace designs; market, auction and negotiation protocols',
          'Debate and adversarial verification',
          'The Agent2Agent protocol — agent cards, discovery, task lifecycle and streaming',
          'Agent identity, authentication and delegated authorisation',
          'Failure modes: cascading errors, context contamination, infinite handoff and cost explosion',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Computer Use, Browser Fleets & Autonomous Coding',
        summary:
          'Fleet-scale automation with drift detection, and coding agents that land real pull requests.',
        topics: [
          'Vision-grounded versus DOM-grounded control; accessibility-tree action spaces',
          'Self-healing automation and drift detection',
          'Secure credential injection without exposing secrets to the model',
          'Isolated virtual desktops and egress control; legal and terms-of-service considerations',
          'Coding agents at scale: repository-level context, planning and test-driven loops',
          'Patch validation, multi-repo refactors and agent-in-CI review',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — Evaluation Science & Benchmarking',
        summary:
          'An evaluation platform as an internal product, so releases are blocked on evidence rather than opinion.',
        topics: [
          'Eval as an engineering discipline; dataset design, stratification and leakage control',
          'Annotation workflows and inter-rater agreement',
          'Judge calibration, bias, position effects and confidence intervals',
          'Statistical significance for model comparisons',
          'Trajectory, tool-selection and partial-credit scoring',
          'Simulated users and environment-based evaluation; agentic benchmarks and their limits',
          'Online eval, shadow traffic and interleaving; continuous evaluation as a service',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 7 — Security Architecture & Fine-Tuning',
        summary:
          'The security sign-off package a CISO needs, and a model post-trained on your own tool schemas.',
        topics: [
          'Threat modelling agents with STRIDE adapted for tool-using systems',
          'The OWASP agentic threat taxonomy',
          'Indirect prompt-injection defence in depth: provenance tagging, content isolation, dual-LLM patterns',
          'Capability restriction, egress allow-lists and human confirmation for irreversible actions',
          'Data exfiltration channels; privilege escalation; multi-agent trust boundaries',
          'MCP supply-chain security; sandbox escape; continuous automated red teaming; forensics from traces',
          'When post-training beats prompting and retrieval',
          'Dataset construction from production traces and rejection sampling',
          'Data quality, deduplication and contamination checks',
          'Supervised fine-tuning with LoRA and QLoRA versus full fine-tuning',
          'Tool-call and function-calling fine-tunes; distillation from a frontier teacher',
          'Hyperparameter and compute budgeting; catastrophic forgetting and regression suites',
          'Adapter serving and multi-LoRA hosting',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 8 — Reinforcement Learning & Voice/Multimodal Agents',
        summary:
          'Training against verifiable rewards, and a voice front line that answers the phone.',
        topics: [
          'Preference optimisation with DPO, KTO and ORPO, and when each applies',
          'Reward models against verifiable rewards; GRPO and policy-gradient training on tool-use tasks',
          'Environment and task design for agentic RL',
          'Reward hacking — how it appears and how to detect it',
          'Rollout infrastructure, sample efficiency and compute budgeting',
          'Self-improvement and rejection-sampling loops; evaluating an RL-trained agent honestly',
          'Real-time voice pipelines: voice activity detection, streaming speech-to-text, turn detection',
          'Barge-in, text-to-speech and end-to-end speech models',
          'Latency budgeting for a sub-800 millisecond conversational feel',
          'Telephony integration and call transfer to humans',
          'Vision agents over documents, screenshots, charts and video; multimodal RAG',
          'OCR-free document understanding; accessibility and quality evaluation for speech',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 9 — Agent Platform Design, Governance & Capstone',
        summary:
          'The capstone is a platform, not an agent — with the governance pack a regulator asks for.',
        topics: [
          'Reference architecture for an internal agent platform: control plane, data plane, gateway, registry, eval service and observability',
          'Stateful scaling and session affinity; multi-region and disaster recovery',
          'Sandbox fleets and warm pools; multi-tenancy, isolation and semantic caching',
          'Capacity planning and load shedding; golden paths and self-service developer experience',
          'Versioning prompts, tools, models and graphs together',
          'Eval gates, canary rollout and automatic rollback; on-call for agents',
          'Cost per successful task, budget enforcement and chargeback',
          'Risk classification and the autonomy ladder — suggest, approve, act with review, act autonomously',
          'EU AI Act obligations, the NIST AI Risk Management Framework and ISO/IEC 42001',
          'Sector rules: GDPR, DPDP, HIPAA, PCI-DSS and SOC 2',
          'Data residency, retention, auditability and decision logging',
          'Human oversight design; bias and fairness testing; model and system cards; vendor assessment',
          'Architecture decision records; total cost of ownership modelling',
          'Open-source contribution, technical writing and architect-level system design interviews',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Twenty million documents indexed and permission-filtered at sub-300ms p95, benchmarked across three index configurations',
      'Two post-training topics, not one lecture — supervised fine-tuning, then DPO or GRPO against verifiable rewards',
      'A security package a CISO would accept: threat model, control matrix, red-team pipeline, incident runbook and residual-risk register',
      'An A2A-compliant agent negotiating structured tasks with another organisation’s agent under cryptographic identity',
      'A multi-tenant evaluation service with calibrated judges, significance testing and a portfolio quality dashboard',
      'A capstone that is a platform — control plane, registry, eval gates, auto-rollback, chargeback and an EU AI Act governance pack',
    ],
    tools: [
      'Dagster, Airflow & Debezium',
      'dbt, Iceberg & Kafka',
      'Docling, Unstructured & Presidio',
      'Qdrant, Milvus, Weaviate & pgvectorscale',
      'Neo4j, GraphRAG & ColBERT',
      'Letta, Zep, Graphiti & Mem0',
      'A2A Protocol SDK, Google ADK & SPIFFE',
      'Playwright, Browser Use & E2B',
      'Braintrust, Inspect AI & LangSmith',
      'Garak, PyRIT & Lakera Guard',
      'TRL, PEFT, Unsloth & Axolotl',
      'verl, OpenRLHF & vLLM',
      'LiveKit, Deepgram & Cartesia',
      'Kubernetes, Helm, Terraform & ArgoCD',
      'Temporal, Envoy & Backstage',
      'Open Policy Agent, OpenCost & Structurizr',
    ],
    audience: [
      {
        label: 'Students straight after 12th',
        copy: 'Join from any stream. Nine months of consistent work is the difference between an entry-level AI job and one that carries architectural responsibility, and there is no prerequisite beyond finishing what each month asks.',
      },
      {
        label: 'Graduates and final-year students',
        copy: 'If you are finishing a BCA, B.Sc or B.Tech, this is the version that puts you in senior interviews rather than fresher drives. You arrive with a platform, a security package and a governance pack.',
      },
      {
        label: 'Working engineers',
        copy: 'If you already ship software, this is the stage that changes your title. Multi-tenancy, durable execution, evaluation as a service, threat modelling and FinOps are what separate an engineer from an architect.',
      },
      {
        label: 'Team leads and technical founders',
        copy: 'If you are the person deciding how your company adopts agents, this course gives you the decision framework, the reference architecture, the vendor assessment and the compliance obligations, taught with the evidence to defend each choice.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Permissions are a data engineering problem',
        copy: 'You learn to propagate ACLs from twenty source systems into one index, so a document a user cannot open in SharePoint is a document their agent cannot retrieve. Getting this wrong is how enterprise RAG pilots fail security review.',
      },
      {
        title: 'Post-training, not just prompting',
        copy: 'You take a 7–14B model through supervised fine-tuning and then DPO or GRPO against verifiable rewards — lifting tool-call accuracy where no amount of prompting has moved the number.',
      },
      {
        title: 'Agents that talk to other companies’ agents',
        copy: 'You publish an A2A-compliant agent with its own agent card and negotiate structured tasks with a second organisation’s agent, under cryptographic identity on both sides.',
      },
      {
        title: 'The governance pack a regulator asks for',
        copy: 'You map the whole platform to the EU AI Act and the NIST AI Risk Management Framework, with decision logging, bias testing, model cards and a total-cost-of-ownership model.',
      },
    ],
    whyNow: {
      title: 'An Agent Platform Is a Paved Road',
      points: [
        'Identity, tools, retrieval, evaluation, guardrails, deployment and budgets become platform services rather than per-team reinventions.',
        'A product team ships a compliant, observable, budgeted agent in days, and when a provider deprecates your model, migration becomes a two-day exercise.',
        'Building that road is the architect’s job, and it is the one AI role that is currently almost impossible to hire for.',
        'It requires data engineering, retrieval infrastructure, security architecture, post-training, platform design and enough governance literacy to sign the risk register.',
      ],
    },
    roles: [
      'Agentic AI Architect',
      'Staff AI Engineer',
      'Head of AI Engineering',
      'Applied AI Engineer (Research-Adjacent)',
      'AI Platform Engineer',
      'AI Security Architect',
    ],
    roleDetails: [
      {
        role: 'Agentic AI Architect',
        copy: 'Lead and staff level, and the destination this course is built for. Interviews test system design under constraints, security threat modelling, governance and total-cost-of-ownership defence. Show the agent platform, the CISO security package and the governance pack.',
      },
      {
        role: 'Staff AI Engineer',
        copy: 'Ownership rather than execution — you decide the pattern, write the decision record and are the person the team asks during an incident. The platform design and governance months are precisely this job description.',
      },
      {
        role: 'Head of AI Engineering',
        copy: 'The role that answers to the CFO as well as the CTO. Unit economics, chargeback, vendor assessment, portfolio-wide quality and the risk register are all graded deliverables in this course.',
      },
      {
        role: 'Applied AI Engineer (Research-Adjacent)',
        copy: 'The specialist track. Interviews test post-training, benchmark design and honest measurement of agent capability. Show the SFT and RL post-trained model and the evaluation science portfolio.',
      },
    ],
    hiring: [
      'Enterprises standing up an internal agent platform',
      'Product companies with agents in production and nobody able to operate them',
      'Consultancies delivering agent architecture and governance to clients',
      'Remote and contract roles, where this skill set is in severe short supply',
    ],
    nextSteps: [
      'Platform and infrastructure engineering',
      'AI governance and risk management',
      'Research-adjacent post-training work',
      'Open-source contribution and technical writing',
    ],
    industries: ['Enterprise platform', 'Product & AI', 'Consulting', 'Remote / global'],
    salary: {
      role: 'Agentic AI Architect',
      summary:
        'Designs the platform entire teams build agents on. This is a role most companies cannot fill at all, which is what the compensation reflects.',
      starting: '₹1,00,000+/month',
      after2: '₹1,80,000–₹3,50,000+/month',
      markets: [
        {
          name: 'India — Architect-Level Agent Roles',
          fresher: '₹1,00,000+/month',
          after2: '₹1,80,000–₹3,50,000+/month',
          scale: { fresher: 100000, after2: 265000 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹1,20,000–₹2,00,000/month',
          after2: '₹2,50,000–₹4,50,000+/month',
          scale: { fresher: 160000, after2: 350000 },
        },
        {
          name: 'Remote / International Contracts',
          fresher: '₹1,00,000–₹2,20,000/month',
          after2: '₹2,50,000–₹5,00,000+/month',
          scale: { fresher: 160000, after2: 375000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What jobs can I get after the 9-month program?',
        a: 'Agentic AI Architect, Staff AI Engineer, Head of AI Engineering and Applied AI Engineer. Those interviews test system design under constraints, security threat modelling, governance and cost defence — which is exactly what the platform, the security package and the governance pack are for.',
      },
      {
        q: 'What salary can I expect after this course?',
        a: 'Architect-level agent roles in India currently start well above ₹1,00,000 per month and rise sharply with production evidence, and remote contracts pay more again. This is a role most companies cannot fill at all, which is what the compensation reflects.',
      },
      {
        q: 'Is an architect role realistic straight after this?',
        a: 'The title usually arrives with a year or two of production experience behind the portfolio, and we would rather say so. What the nine months does is make you interviewable for staff and platform roles rather than junior ones — because the deliverables are the artefacts those interviews ask to see.',
      },
      {
        q: 'Where is the demand for this?',
        a: 'Enterprises standing up an internal agent platform, product companies with agents already in production and nobody able to operate them, and consultancies delivering architecture and governance. Remote and contract work is common because the supply is so thin.',
      },
    ],
    projects: [
      {
        name: 'CDC Ingestion Backbone',
        summary:
          'An incremental pipeline across twenty source systems with ACL propagation, lineage, PII tagging and a freshness SLA dashboard.',
        tech: ['Dagster', 'Debezium', 'Kafka', 'Presidio'],
        level: 'Advanced',
        skills: ['Data Engineering', 'Permission Propagation'],
      },
      {
        name: 'Twenty-Million-Document Index',
        summary:
          'Permission-filtered retrieval at sub-300 millisecond p95, benchmarked for recall and latency across three index configurations.',
        tech: ['Qdrant', 'Milvus', 'pgvectorscale'],
        level: 'Advanced',
        skills: ['Vector Infrastructure', 'Benchmarking'],
      },
      {
        name: 'A2A Interoperable Agent',
        summary:
          'An agent published with its own agent card, negotiating structured tasks with a second organisation’s agent under cryptographic identity.',
        tech: ['A2A SDK', 'Google ADK', 'SPIFFE'],
        level: 'Advanced',
        skills: ['Interoperability', 'Agent Identity'],
      },
      {
        name: 'Multi-Tenant Evaluation Service',
        summary:
          'A shared eval platform with calibrated judges, significance testing, drift alarms and a portfolio quality dashboard.',
        tech: ['Braintrust', 'Inspect AI', 'ClickHouse'],
        level: 'Advanced',
        skills: ['Evaluation Science', 'Platform Design'],
      },
      {
        name: 'Post-Trained Agentic Model & Voice Agent',
        summary:
          'A 7–14B model taken through supervised fine-tuning then preference or GRPO training and beating the base model on held-out tool use — plus a production voice agent at sub-900ms turn latency with barge-in and warm handoff.',
        tech: ['TRL', 'Unsloth', 'verl', 'LiveKit'],
        level: 'Advanced',
        skills: ['Post-Training', 'Voice Agents'],
      },
      {
        name: 'Enterprise Agent Platform (Capstone)',
        summary:
          'The architect capstone: control plane, registry, eval gates, auto-rollback, chargeback dashboard and a governance pack mapped to the EU AI Act, with a TCO model and a recorded architecture walkthrough.',
        tech: ['Kubernetes', 'Backstage', 'OPA', 'Structurizr'],
        level: 'Advanced',
        skills: ['Platform Architecture', 'AI Governance'],
      },
    ],
    whyTechcadd: [
      {
        title: 'You advance when your work passes review',
        copy: 'Each month ends with a deliverable that must pass review before you move on. Nobody reaches the architect capstone without the earlier months actually passing.',
      },
      {
        title: 'GPU time for the post-training months',
        copy: 'Fine-tuning and RL months need real compute. Runs are budgeted and supervised, so a LoRA run is something you have launched rather than read about.',
      },
      {
        title: 'Trainers who still ship',
        copy: 'The people teaching platform design and threat modelling are the people writing them for client work, which is why the failure sections cover failures that actually happen.',
      },
      {
        title: 'The whole journey, no restarts',
        copy: 'Nine months, one continuous sequence. This is the full programme rather than a track that assumes you will come back for the rest.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of the After 12th 9-Month Agentic AI Program in Phagwara?',
        a: 'Nine months in total, covering foundations through advanced AI. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'How is this different from the 6-month program?',
        a: 'The nine-month track continues where the six-month one stops. Everything in the 6-month program comes first; the remaining months cover data pipelines and CDC ingestion, billion-scale vector infrastructure, GraphRAG at scale, skill libraries and continual learning, A2A interoperability, browser fleets, evaluation as a service, CISO-grade security architecture, fine-tuning, RL post-training, voice and multimodal agents, platform design with FinOps, and governance.',
      },
      {
        q: 'Do I need programming experience or a technical background?',
        a: 'No. The course begins with Python taught from the first line, and the programme is explicitly built for career changers and students joining straight after 12th from any stream. Nine months takes you from that starting point to a staff-level job description, building real skills every month.',
      },
      {
        q: 'Will I actually fine-tune a model, or just learn about it?',
        a: 'You fine-tune. You take a 7–14B model through supervised fine-tuning with LoRA or QLoRA on your own tool schemas, then apply DPO, KTO, ORPO or GRPO against verifiable rewards. Both topics are graded on held-out benchmark gains, with a documented reward-hacking analysis.',
      },
      {
        q: 'What will I have built by the end?',
        a: 'Seven portfolio projects across the course: a CDC ingestion backbone, a twenty-million-document index, an A2A interoperable agent, a multi-tenant evaluation service, a post-trained agentic model, a production voice agent and the enterprise agent platform capstone — which ships with a governance pack mapped to the EU AI Act, a TCO model, a merged open-source pull request and a recorded architecture walkthrough.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-agentic-ai-program-in-phagwara',
      'after-12th-3-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-cyber-security-program-in-phagwara',
      'after-12th-9-month-mern-stack-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month agentic AI program in Phagwara',
      'agentic AI diploma after 12th Phagwara',
      'AI platform architecture training Phagwara',
      'LLM fine-tuning and RL course Punjab',
      'agentic AI diploma with placement Phagwara',
    ],
  }),

  /* ---------------------------------------------------------- cyber security -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-cyber-security-program-in-phagwara',
    label: 'Cyber Security',
    title: 'Best After 12th 9-Month Cyber Security Diploma Program in Phagwara',
    icon: 'shield',
    duration: '9 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'The longest cybersecurity track — nine months from your first Linux install to an industry-level AI security platform, covering ethical hacking, SOC and SIEM operations, cloud security, AI threat detection and a full month of placement preparation.',
    overview:
      'This is the AI-Powered Cybersecurity diploma, written for someone starting straight after 12th. Nine months, one theme per month, and something you built and documented at the end of each. It is the longest of the three cybersecurity tracks, and the extra length buys three things the shorter ones cannot carry: a full month of cloud security and AI automation, two months on a single industry-level capstone, and a final month given entirely to interview preparation.\nMonths one to four are the foundations and the offensive side. Month one covers computer hardware and operating systems, Linux and Windows administration, networking fundamentals, core cybersecurity concepts, virtualisation, Git and GitHub, and AI tools for security — ending with a secure Linux installation, your own home cybersecurity lab, network documentation and a password policy. Month two is advanced networking and a TCP/IP deep dive, network services, Kali Linux, information gathering, vulnerability assessment, Nmap, Wireshark and AI-assisted reconnaissance. Month three is web security through the OWASP Top 10 in Burp Suite — SQL injection, XSS, CSRF and authentication attacks — on DVWA and Juice Shop. Month four adds password attacks, wireless security, Active Directory basics, Metasploit, Hydra, social engineering awareness, AI-assisted exploit analysis, and professional reporting.\nMonths five and six turn to defence and automation, which is where most of the jobs actually are. Month five is the Security Operations Centre: SIEM fundamentals, Wazuh, Splunk, log analysis, MITRE ATT&CK, threat hunting and AI threat detection. Month six is cloud security and automation: AWS and Azure security, IAM, Docker and Kubernetes security, DevSecOps, Python security automation, and OpenAI and Gemini API integration.\nMonths seven and eight are one industry capstone in two phases — project planning, threat modelling, security architecture, AI integration, SOC dashboard development and documentation, then advanced AI features, testing, deployment, cloud hosting, presentation and portfolio development. Month nine is placement preparation: networking revision, Linux, cybersecurity and ethical hacking interview questions, SOC analyst preparation, SIEM practicals, resume building, a GitHub portfolio, LinkedIn optimisation, aptitude, HR and mock interviews, freelancing and job preparation. All lab work runs on your own virtual lab, on deliberately vulnerable applications such as DVWA and Juice Shop, and on the TryHackMe, Hack The Box, PortSwigger Academy and OverTheWire platforms — systems you are permitted to test, with a trainer supervising.',
    demand:
      'Specialists in cloud security, threat hunting and AI security automation are the roles employers currently struggle hardest to fill, and this is the only track here that carries all three.',
    modules: [
      {
        title: 'Month 1 — Cybersecurity Foundations',
        summary:
          'Hardware, systems and networking, ending with the lab every later exercise runs in.',
        topics: [
          'Introduction to cybersecurity and core cybersecurity concepts',
          'Computer hardware and operating systems',
          'Linux administration and Windows administration',
          'Networking fundamentals',
          'Virtualisation with VMware or VirtualBox',
          'Git and GitHub',
          'AI tools for cybersecurity',
          'Mini projects: secure Linux installation, home lab, network documentation, password policy',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Networking & Ethical Hacking Fundamentals',
        summary:
          'A TCP/IP deep dive, then reconnaissance and assessment on legal targets.',
        topics: [
          'Advanced networking and a TCP/IP deep dive',
          'Network services',
          'Kali Linux',
          'Information gathering and OSINT',
          'Vulnerability assessment',
          'Nmap and Wireshark',
          'AI-assisted reconnaissance',
          'Mini projects: network scanner, vulnerability assessment report, packet analysis',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Web Security & Ethical Hacking',
        summary:
          'The OWASP Top 10 worked end to end in Burp Suite.',
        topics: [
          'Web technologies, HTTP and HTTPS',
          'The OWASP Top 10',
          'Burp Suite',
          'SQL injection',
          'XSS and CSRF',
          'Authentication attacks',
          'AI-assisted web security testing',
          'Mini projects: DVWA labs, Juice Shop labs, web security assessment',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Advanced Ethical Hacking & Security Operations',
        summary:
          'Exploitation, Active Directory and the professional reporting standard clients pay for.',
        topics: [
          'Password attacks and wireless security',
          'Active Directory basics',
          'Metasploit and Hydra',
          'Social engineering awareness',
          'AI-assisted exploit analysis',
          'Reporting and documentation to a professional standard',
          'Mini projects: penetration test report, password audit, internal security assessment',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — AI-Powered SOC & Threat Detection',
        summary:
          'The blue-team month — where most of the jobs actually are.',
        topics: [
          'The Security Operations Centre and SIEM fundamentals',
          'Wazuh and Splunk',
          'Log analysis',
          'MITRE ATT&CK',
          'Threat hunting',
          'AI threat detection and AI security analytics',
          'Mini projects: SOC dashboard, AI log analyser, threat hunting case study',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 6 — AI-Powered Cloud Security & Automation',
        summary:
          'Securing what everyone has moved to, and writing the tooling yourself.',
        topics: [
          'AWS security and Azure security',
          'IAM',
          'Docker security and Kubernetes security',
          'DevSecOps',
          'Python security automation',
          'OpenAI API and Gemini API integration',
          'AI security automation',
          'Mini projects: AI security assistant, automated vulnerability scanner, cloud security assessment',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 7 — Industry Capstone Project (Phase I)',
        summary:
          'Threat modelling and security architecture for one real platform.',
        topics: [
          'Project planning and threat modelling',
          'Security architecture',
          'AI integration',
          'SOC dashboard development',
          'Threat intelligence',
          'Documentation',
          'Capstone options: AI SOC platform, threat hunting platform, phishing or malware detection, vulnerability scanner, incident response platform, security chatbot or threat intelligence dashboard',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 8 — Industry Capstone Project (Phase II)',
        summary:
          'Advanced features, deployment and the live demonstration.',
        topics: [
          'Advanced AI features',
          'Testing',
          'Deployment and cloud hosting',
          'Documentation',
          'Presentation',
          'Portfolio development',
          'Deliverable: an industry-level AI cybersecurity platform with threat detection, SIEM, a dashboard, documentation, a GitHub repository and a live demonstration',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 9 — Placement Preparation & Career Readiness',
        summary:
          'A full month drilling the SOC analyst interview specifically.',
        topics: [
          'Networking revision and Linux interview questions',
          'Cybersecurity and ethical hacking interview questions',
          'SOC analyst preparation and SIEM practicals',
          'Resume building and GitHub portfolio',
          'LinkedIn optimisation',
          'Aptitude',
          'HR interviews and mock interviews',
          'Freelancing and job preparation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Your own cybersecurity lab, built in month one and used for the next eight',
      'A SOC you can operate — Wazuh and Splunk with real log sources mapped to MITRE ATT&CK',
      'AI security tooling of your own, written in Python against the OpenAI and Gemini APIs',
      'A professional penetration test report to the standard a client actually pays for',
      'Cloud security across AWS, Azure, Docker and Kubernetes with DevSecOps practice',
      'An industry AI security platform built across two months, documented and demonstrated live',
    ],
    tools: [
      'Kali Linux, Ubuntu & Windows Server',
      'VMware & VirtualBox',
      'Cisco Packet Tracer, Wireshark & Nmap',
      'Burp Suite & OWASP ZAP',
      'Metasploit, Hydra & SQLMap',
      'Gobuster, Nikto & Nuclei',
      'John the Ripper & Aircrack-ng',
      'Wazuh, Splunk, ELK Stack & Sysmon',
      'MITRE ATT&CK',
      'AWS, Azure, Docker & Kubernetes',
      'Python, Bash & PowerShell',
      'OpenAI & Gemini APIs, LangChain, CrewAI & AutoGen',
      'TryHackMe, Hack The Box & PortSwigger Academy',
      'Git, GitHub & VS Code',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. Month one begins at computer hardware, operating systems and networking, and ends with a virtual lab you built yourself — which is where every later exercise happens.',
      },
      {
        label: 'Students aiming at a SOC floor',
        copy: 'Months five and six are the reason to pick this length. Wazuh, Splunk, MITRE ATT&CK and threat hunting are what an L1 analyst does daily, and month nine drills the SOC analyst interview specifically.',
      },
      {
        label: 'Students doing a degree alongside',
        copy: 'Nine months of evenings or weekends runs comfortably beside a BCA, B.Sc IT or first-year B.Tech, and finishes with a capstone platform on GitHub your college project cannot match.',
      },
      {
        label: 'Anyone who wants the AI half',
        copy: 'AI runs through every month here — assisted reconnaissance, web testing and exploit analysis, then AI threat detection, and finally Python tooling built on the OpenAI and Gemini APIs. Very few freshers in Punjab can show a security tool they wrote themselves.',
      },
      {
        label: 'Career restarters and switchers',
        copy: 'A gap or an unrelated background counts for less than lab documentation and a capstone someone can open. The syllabus is identical whoever you are; only the batch timing changes.',
      },
      {
        label: 'Aspiring freelancers',
        copy: 'Vulnerability assessment and penetration test reports are billable work anywhere. Month four teaches the reporting standard and month nine covers freelancing basics alongside the placement drills.',
      },
    ],
    whyChooseUs: [
      {
        title: 'A comprehensive security curriculum',
        copy: 'Linux and Windows administration, networking, ethical hacking, web security, SOC and SIEM operations, digital forensics, cloud security, Active Directory, DevSecOps, threat intelligence and incident response.',
      },
      {
        title: 'AI in cybersecurity throughout',
        copy: 'AI-assisted reconnaissance, web testing and exploit analysis, then AI threat detection, AI security analytics, AI malware analysis and AI-powered vulnerability assessment.',
      },
      {
        title: 'OpenAI and Gemini APIs',
        copy: 'Python security automation calling real APIs, plus prompt engineering for security and AI security agents with LangChain, CrewAI and AutoGen.',
      },
      {
        title: '20+ labs and 10+ mini projects',
        copy: 'A home lab, network scanner, vulnerability report, packet analysis, DVWA and Juice Shop labs, penetration test report, password audit, SOC dashboard, AI log analyser and more.',
      },
      {
        title: '1 industry AI security capstone',
        copy: 'Two months on one platform — AI SOC, threat hunting, phishing or malware detection, vulnerability scanner, incident response, security chatbot or threat intelligence dashboard.',
      },
      {
        title: 'Red team and blue team',
        copy: 'Offensive technique first, then detection and response — with mock interviews, resume building, GitHub portfolio, LinkedIn optimisation and career mentorship at the end.',
      },
    ],
    whyNow: {
      title: 'Nine Months, an AI Security Capstone, and the Interview Preparation to Use It',
      points: [
        '20+ hands-on labs, 10+ mini projects and one industry-level AI cybersecurity platform — built on legal targets, under supervision.',
        'SOC Analyst and Security Analyst roles in Punjab start around ₹20,000 – ₹35,000 a month for a fresher with documented work.',
        'Two years on a SOC floor usually doubles that.',
        'Specialists in cloud security, threat hunting or AI security automation move well beyond it — those are the roles employers currently struggle hardest to fill.',
      ],
    },
    roles: [
      'SOC Analyst (L1/L2)',
      'Cybersecurity Analyst',
      'Penetration Tester',
      'VAPT Engineer',
      'Threat Hunter',
      'Incident Response Analyst',
      'Cloud Security Engineer',
      'DevSecOps Engineer',
      'AI Security Engineer',
      'AI SOC Analyst',
    ],
    roleDetails: [
      {
        role: 'SOC Analyst (L1)',
        copy: 'Straight after 12th this is the usual first step, and month nine drills that interview specifically — SOC analyst preparation and SIEM practicals rather than generic questions.',
      },
      {
        role: 'Threat Hunter',
        copy: 'Proactive detection using MITRE ATT&CK, IOCs and detection engineering. Month five is its foundation, and it is one of the roles employers struggle hardest to fill.',
      },
      {
        role: 'Cloud Security Engineer',
        copy: 'Securing AWS and Azure environments and containers with DevSecOps practice. Month six maps straight onto it.',
      },
      {
        role: 'AI Security Engineer / AI SOC Analyst',
        copy: 'Newer titles, and the reason AI runs through every month — building the automation and detection tooling a modern SOC increasingly relies on.',
      },
      {
        role: 'VAPT Engineer',
        copy: 'Vulnerability assessment and penetration testing delivered as billable engagements, judged on the professional reporting standard month four teaches.',
      },
    ],
    hiring: [
      'Managed security service providers running SOCs for multiple clients',
      'IT services companies offering security testing and audits',
      'Banks, NBFCs and fintech businesses with regulatory obligations',
      'Consultancies performing audits, compliance and incident response',
    ],
    nextSteps: [
      'OSCP, CEH or Security+ certification',
      'Cloud security specialisation',
      'Digital forensics and incident response depth',
      'Red team and advanced exploitation',
    ],
    industries: ['Managed security', 'IT services', 'Banking & fintech', 'Consulting & audit'],
    salary: {
      role: 'SOC / Security Analyst (Diploma)',
      summary:
        'Tests, monitors, defends and automates the security of the systems a business runs on. Two years on a SOC floor usually doubles the starting figure.',
      starting: '₹20,000–₹35,000/month',
      after2: '₹40,000–₹75,000/month',
      markets: [
        {
          name: 'Phagwara / Jalandhar — Security Analyst',
          fresher: '₹20,000–₹35,000/month',
          after2: '₹40,000–₹75,000/month',
          scale: { fresher: 27500, after2: 57500 },
        },
        {
          name: 'Delhi / NCR & Bengaluru',
          fresher: '₹32,000–₹55,000/month',
          after2: '₹70,000–₹1,30,000+/month',
          scale: { fresher: 43500, after2: 100000 },
        },
        {
          name: 'Remote SOC / VAPT Consulting',
          fresher: '₹18,000–₹36,000/month',
          after2: '₹50,000–₹1,10,000+/month',
          scale: { fresher: 27000, after2: 80000 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after this programme?',
        a: 'SOC Analyst L1/L2, Cybersecurity Analyst, Ethical Hacker, Penetration Tester, Security Engineer, Vulnerability Assessment Engineer, Security Operations Engineer, Threat Hunter, Incident Response Analyst, Malware Analyst, Digital Forensics Analyst, Cloud Security Engineer, DevSecOps Engineer, Security Consultant, Red Team Operator, Blue Team Analyst, GRC Analyst, and the newer AI Security Engineer, AI SOC Analyst and AI Security Automation Engineer titles. Straight after 12th, SOC Analyst L1 is the usual first step.',
      },
      {
        q: 'What can I earn straight after 12th with this?',
        a: 'A fresher with documented labs and a deployed capstone typically starts around ₹20,000 – ₹35,000 a month in this market. Two years on a SOC floor usually doubles that, and specialists in cloud security, threat hunting or AI security automation move well beyond it — those are the roles employers currently struggle hardest to fill.',
      },
      {
        q: 'Why choose nine months over the six-month certificate?',
        a: 'Three things the shorter track cannot carry: a full month of cloud security, DevSecOps and Python AI automation, two months on a single industry capstone, and a complete month of SOC analyst preparation, SIEM practicals, aptitude and mock interviews.',
      },
      {
        q: 'Can I freelance with this?',
        a: 'Yes. Vulnerability assessment and penetration test reports are billable work anywhere, and a Phagwara address costs you nothing on a remote brief. Month four teaches the professional reporting standard and month nine covers freelancing alongside the placement drills.',
      },
    ],
    projects: [
      {
        name: 'Home Cybersecurity Lab',
        summary:
          'Month one’s build: a virtualised lab with a secure Linux installation, documented network and an implemented password policy. Every later exercise runs inside it.',
        tech: ['Linux', 'VMware'],
        level: 'Beginner',
        skills: ['Virtualisation', 'Hardening'],
      },
      {
        name: 'Network Scanner & Packet Analysis',
        summary:
          'A network scanned with Nmap, traffic analysed in Wireshark and findings written up as a vulnerability assessment report — with AI-assisted reconnaissance speeding the discovery, not replacing it.',
        tech: ['Nmap', 'Wireshark'],
        level: 'Beginner',
        skills: ['Scanning', 'Packet Analysis'],
      },
      {
        name: 'Web Security Assessment',
        summary:
          'DVWA and Juice Shop worked end to end in Burp Suite — SQL injection, XSS, CSRF and authentication attacks against the OWASP Top 10, on deliberately vulnerable targets you are permitted to test.',
        tech: ['Burp Suite', 'DVWA'],
        level: 'Intermediate',
        skills: ['Web Security', 'OWASP Top 10'],
      },
      {
        name: 'Penetration Test Report & Password Audit',
        summary:
          'An internal security assessment using Metasploit and Hydra, written up to a professional reporting standard — the document a client actually pays for.',
        tech: ['Metasploit', 'Hydra'],
        level: 'Intermediate',
        skills: ['Penetration Testing', 'Professional Reporting'],
      },
      {
        name: 'SOC Dashboard & AI Log Analyser',
        summary:
          'Wazuh and Splunk with live log sources mapped to MITRE ATT&CK, plus an AI log analyser and a threat hunting case study written from what it surfaced.',
        tech: ['Wazuh', 'Splunk', 'MITRE ATT&CK'],
        level: 'Advanced',
        skills: ['SIEM Operations', 'Threat Hunting'],
      },
      {
        name: 'Industry AI Security Capstone',
        summary:
          'Two months on one platform — an AI SOC, threat hunting, phishing or malware detection system, vulnerability scanner, incident response platform, security chatbot or threat intelligence dashboard — with AI integration, threat detection, SIEM, a dashboard, documentation, a GitHub repository and a live demonstration.',
        tech: ['Python', 'OpenAI API', 'SIEM', 'Docker'],
        level: 'Advanced',
        skills: ['Security Engineering', 'AI Automation'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Trainers who still do the work',
        copy: 'Your trainer is not a full-time lecturer. They handle security work for techcadd’s services arm, so the examples in class are current rather than a case study from five years ago.',
      },
      {
        title: 'A lab you actually build',
        copy: 'Month one ends with your own virtualised lab. Every attack and every defence for the next eight months happens in it, or on DVWA, Juice Shop, TryHackMe, Hack The Box, PortSwigger Academy and OverTheWire — never against systems you have no permission to touch.',
      },
      {
        title: 'Written for a school leaver',
        copy: 'Month one begins at computer hardware and operating systems. Nothing is assumed, and nothing is skipped on the assumption that a degree will fill the gap later.',
      },
      {
        title: 'AI on real API keys',
        copy: 'You build security tooling against the real OpenAI and Gemini APIs — an AI log analyser, an AI security assistant, an automated vulnerability scanner — instead of watching a screen recording of one.',
      },
      {
        title: 'Two months on one capstone',
        copy: 'Threat modelling, security architecture, a SOC dashboard, threat intelligence, documentation, a GitHub repository and a live demonstration. This is what the interview will be about.',
      },
      {
        title: 'A whole month on getting hired',
        copy: 'SOC analyst preparation, SIEM practicals, subject-wise interview questions, aptitude, HR and mock interviews, resume, GitHub portfolio and LinkedIn — followed by drives with hiring partners across Phagwara, Jalandhar and Ludhiana.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration of this Cyber Security programme after 12th?',
        a: 'Nine months, running as a fixed calendar: cybersecurity foundations, networking and ethical hacking, web security, advanced ethical hacking and security operations, AI-powered SOC and threat detection, AI-powered cloud security and automation, then two months of industry capstone project and a final month of placement preparation. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available. Every class runs for 2 hours.',
      },
      {
        q: 'Is the ethical hacking part legal, and what do I practise on?',
        a: 'Everything is done on systems you are permitted to test: your own virtual lab built in month one, deliberately vulnerable applications such as DVWA and Juice Shop, and the TryHackMe, Hack The Box, PortSwigger Academy and OverTheWire platforms. Scanning or attacking systems you do not own or have written permission to test is a criminal offence, and the course teaches the authorisation, scoping and reporting practices that keep professional work on the right side of that line.',
      },
      {
        q: 'How many labs and projects will I build?',
        a: '20+ hands-on labs and 10+ mini projects across the nine months — a secure Linux install, a home lab, network documentation, a password policy, a network scanner, a vulnerability assessment report, a packet analysis, DVWA and Juice Shop labs, a web security assessment, a penetration test report, a password audit, an internal security assessment, a SOC dashboard, an AI log analyser, a threat hunting case study, an AI security assistant, an automated vulnerability scanner and a cloud security assessment — plus one industry-level AI security capstone.',
      },
      {
        q: 'Do I need to know Python first?',
        a: 'No. Python is taught in month six specifically for security automation — scripting scanners, parsing logs and calling the OpenAI and Gemini APIs — building on the Bash and PowerShell work from the earlier months. There is no model training and no data-science prerequisite.',
      },
      {
        q: 'How is this different from the shorter cybersecurity programmes?',
        a: 'All of them start from zero. This nine-month diploma is the only one carrying a full month of cloud security, DevSecOps and Python AI automation, two months on a single industry capstone, and a complete month of SOC analyst preparation, SIEM practicals, aptitude and mock interviews.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-cyber-security-program-in-phagwara',
      'after-12th-3-month-cyber-security-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-9-month-full-stack-development-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month cyber security program in Phagwara',
      'cyber security diploma after 12th Phagwara',
      'ethical hacking and SOC training Phagwara',
      'AI security automation course Punjab',
      'cyber security diploma with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------- artificial intelligence -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-artificial-intelligence-program-in-phagwara',
    label: 'Artificial Intelligence',
    title: 'Best After 12th 9-Month Artificial Intelligence Diploma Program in Phagwara',
    icon: 'brain',
    duration: '9 Months',
    level: 'Beginner to Job-Ready',
    summary:
      'A nine-month, project-driven path from data fundamentals to enterprise-grade AI systems — Python, data engineering, machine learning, deep learning, LLMs, RAG, AI agents and full production deployment, finishing on a complete AI SaaS capstone you build and ship yourself.',
    overview:
      'This is a nine-month AI course, arranged so that each topic is usable before the next arrives. It is built as a single continuous path rather than a set of short courses stapled together — you learn to handle data before you model it, to model before you reach for a language model, and to deploy before you are asked to secure and maintain what you deployed. The final month is given entirely to one enterprise-grade AI SaaS application that you build end to end.\nMonths one to three are the foundation, and they start further back than most AI courses do. Month 1 is data and programming: advanced Excel and Power Query, Power BI with DAX, then Python from fundamentals through VS Code, the uv package manager and virtual environments, and on into real engineering practice — object-oriented design, exception handling, logging, type hinting, pytest, Ruff and Black. Month 2 is the developer’s toolkit and the data layer: Git, GitHub and Git Flow alongside AI coding tools; PostgreSQL with database design, window functions and query optimisation; APIs, JSON, FastAPI basics with JWT and Postman; then Pandas 2.x, NumPy, Polars, DuckDB and PyArrow. Month 3 turns that into data science: cleaning, feature engineering, EDA and interactive visualisation, statistics and probability, scikit-learn with pipelines and cross-validation, then XGBoost, LightGBM and CatBoost.\nMonths four to six are the modern AI core. Month 4 is deep learning and computer vision in PyTorch — tensor operations and neural networks, CNNs and transfer learning with OpenCV, YOLO object detection, OCR, image segmentation and Vision Transformers, then Transformers and Hugging Face. Month 5 opens the language-model half: tokenization, embeddings, context windows and attention; prompt engineering; the OpenAI, Gemini, Claude and Grok APIs plus Ollama and LiteLLM; then embeddings and vector databases across FAISS, ChromaDB, Pinecone, Qdrant and Milvus. Month 6 is where those pieces become systems: RAG architecture with hybrid search, re-ranking, evaluation and guardrails; LangChain and LangGraph; CrewAI, the Model Context Protocol, tool and function calling; then AI agents, multi-agent systems and enterprise agent design.\nMonths seven to nine are what separates a demo from a product. Month 7 is application development and deployment: advanced FastAPI with async, background tasks and WebSockets; Streamlit, Gradio and Chainlit; Docker, Linux, Nginx; then AWS, Azure AI, Google Vertex AI, Hugging Face Spaces and serverless deployment. Month 8 is the operational discipline — MLflow, DVC, model registries, experiment tracking and model monitoring; GitHub Actions and CI/CD; AI security covering prompt injection, jailbreak defence, secret management and responsible AI; then fine-tuning with PEFT, LoRA, QLoRA, quantization and knowledge distillation. Month 9 adds multimodal AI and enterprise architecture with microservices, event-driven systems, Redis, Celery and Kafka, before the capstone.',
    demand:
      'The failures in real AI projects are usually not modelling failures — they are data failures, deployment failures and monitoring failures, and this is the only track here that covers all three ends.',
    modules: [
      {
        title: 'Month 1 — Data & Programming Foundations',
        summary:
          'Spreadsheets and dashboards first, then Python with the engineering practice most courses assume.',
        topics: [
          'Advanced Excel, Power Query, AI productivity tooling and data literacy',
          'Power BI, DAX, business dashboards and KPI reporting',
          'Python fundamentals, VS Code, the uv package manager and virtual environments',
          'Object-oriented programming, exception handling and logging',
          'Type hinting, pytest, Ruff and Black',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 2 — Dev Tools & Data Engineering',
        summary:
          'The toolkit and the data layer everything downstream depends on.',
        topics: [
          'Git, GitHub and Git Flow',
          'AI coding tools: GitHub Copilot, Cursor AI and the Windsurf IDE',
          'SQL on PostgreSQL: database design, window functions and query optimisation',
          'APIs, JSON, FastAPI basics, authentication with JWT and Postman',
          'Data engineering fundamentals: Pandas 2.x, NumPy, Polars, DuckDB and PyArrow',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 3 — Data Science & Machine Learning',
        summary:
          'A full modelling cycle with honest evaluation.',
        topics: [
          'Data cleaning, feature engineering and exploratory data analysis',
          'Interactive visualisation with Plotly and Streamlit',
          'Statistics, probability, feature selection and data preprocessing',
          'Machine learning with scikit-learn: pipelines and cross-validation',
          'XGBoost, LightGBM and CatBoost; model evaluation and hyperparameter optimisation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 4 — Deep Learning & Computer Vision',
        summary:
          'PyTorch from tensors up, through detection, OCR and Vision Transformers.',
        topics: [
          'Deep learning fundamentals, PyTorch, tensor operations and neural networks',
          'Convolutional neural networks, transfer learning and computer vision with OpenCV',
          'YOLO object detection, OCR and image segmentation',
          'Vision Transformers',
          'Transformers, Hugging Face, tokenizers and the Model Hub',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — LLM Fundamentals & Vector Search',
        summary:
          'The language-model half opens: internals, prompting, four APIs and five vector databases.',
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
        title: 'Month 6 — RAG, LangChain & AI Agents',
        summary:
          'Agents as an engineering discipline, not prompt tricks.',
        topics: [
          'RAG architecture: hybrid search, re-ranking, evaluation and guardrails',
          'LangChain and LangGraph: prompt templates, chains and memory',
          'CrewAI and the Model Context Protocol',
          'Tool calling, function calling and structured outputs',
          'AI agents, multi-agent systems, autonomous workflows and enterprise agent design',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 7 — AI Application Development & Deployment',
        summary:
          'From notebook to a service running behind Nginx in the cloud.',
        topics: [
          'FastAPI advanced, async programming, background tasks and WebSockets',
          'Streamlit, Gradio, Chainlit and AI application development',
          'Docker, Docker Compose, Linux, Nginx and reverse proxy',
          'AWS, Azure AI, Google Vertex AI, Hugging Face Spaces and serverless AI deployment',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 8 — MLOps, Security & Fine-Tuning',
        summary:
          'The operational discipline, treated as production engineering rather than policy.',
        topics: [
          'MLflow, DVC, model registry, experiment tracking and model monitoring',
          'GitHub Actions, CI/CD pipelines, DevOps for AI and automated deployment',
          'AI security: prompt injection, jailbreak defence and secret management',
          'Responsible AI',
          'LLM fine-tuning concepts: PEFT, LoRA, QLoRA, quantization and knowledge distillation',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 9 — Multimodal AI & Enterprise Capstone',
        summary:
          'A whole month on one enterprise-grade AI SaaS application.',
        topics: [
          'Multimodal AI across text, image, audio and video',
          'Whisper, vision-language models and speech AI',
          'Enterprise architecture: microservices, event-driven systems, Redis, Celery and Kafka basics',
          'The enterprise capstone: an AI SaaS with FastAPI, PostgreSQL, RAG, AI agents, Docker and cloud deployment',
          'Project documentation, code review best practices and GitHub repository management',
          'AI project deployment, industry standards and best practices',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
    ],
    outcomes: [
      'Complete data pipelines end to end — Excel and SQL through Pandas, Polars, DuckDB and PyArrow',
      'Models you train, tune and evaluate: scikit-learn pipelines, gradient boosting, PyTorch CNNs, YOLO and OCR',
      'Production LLM applications with RAG, re-ranking, evaluation and guardrails on LangChain, LangGraph, CrewAI and MCP',
      'A deployed, monitored, secured system on AWS, Azure AI or Vertex AI with CI/CD and MLflow',
      'Fine-tuning with PEFT, LoRA, QLoRA, quantization and knowledge distillation — and when not to',
      'A full enterprise-grade AI SaaS capstone with a professional GitHub portfolio behind it',
    ],
    tools: [
      'Excel, Power Query, Power BI & DAX',
      'Python, uv, pytest, Ruff & Black',
      'Git, GitHub, Copilot, Cursor & Windsurf',
      'PostgreSQL & Postman',
      'Pandas, NumPy, Polars, DuckDB & PyArrow',
      'scikit-learn, XGBoost, LightGBM & CatBoost',
      'PyTorch, OpenCV, YOLO & Hugging Face',
      'OpenAI, Gemini, Claude & Grok APIs',
      'Ollama & LiteLLM',
      'FAISS, ChromaDB, Pinecone, Qdrant & Milvus',
      'LangChain, LangGraph, CrewAI & MCP',
      'FastAPI, Streamlit, Gradio & Chainlit',
      'Docker, Nginx, AWS, Azure AI & Vertex AI',
      'MLflow, DVC & GitHub Actions',
      'Whisper, Redis, Celery & Kafka',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream. Month 1 begins at spreadsheets and Python basics, and the sequencing means you are never asked to use a tool you have not already been taught to build with.',
      },
      {
        label: 'Anyone who wants the full path, not a slice',
        copy: 'Short AI courses tend to start at prompt engineering and stop at a chatbot. This one covers the data layer beneath it and the deployment, monitoring and security above it — which is where most projects actually fail.',
      },
      {
        label: 'Students aiming at LLM and agent work',
        copy: 'Months 5 and 6 are given entirely to language models: tokenization and attention, prompting, four model APIs plus local inference, five vector databases, RAG with re-ranking and guardrails, LangGraph, CrewAI and MCP.',
      },
      {
        label: 'Students who want to ship, not just train',
        copy: 'Docker, Nginx, three cloud AI platforms, CI/CD with GitHub Actions, MLflow experiment tracking and model monitoring. The capstone is deployed, not demoed on a laptop.',
      },
      {
        label: 'Graduates and career changers',
        copy: 'The engineering practice in Month 1 — OOP, logging, type hinting, pytest, Ruff — is the part that makes a portfolio readable to an interviewer, and it is taught early rather than assumed.',
      },
      {
        label: 'Anyone building a GitHub portfolio',
        copy: 'The final month is explicitly about delivery: project documentation, code review practice, repository management and industry standards, alongside resume and portfolio guidance.',
      },
    ],
    whyChooseUs: [
      {
        title: 'Nine months in dependency order',
        copy: 'Data before models, models before language models, deployment before operations. Nothing is used before it has been built.',
      },
      {
        title: 'The data layer taught properly',
        copy: 'PostgreSQL with window functions and query optimisation, Pandas 2.x, NumPy, Polars, DuckDB and PyArrow — the pipelines everything downstream depends on.',
      },
      {
        title: 'Five vector databases, four model APIs',
        copy: 'FAISS, ChromaDB, Pinecone, Qdrant and Milvus; OpenAI, Gemini, Claude and Grok, plus Ollama and LiteLLM for local and routed inference.',
      },
      {
        title: 'Agents as an engineering discipline',
        copy: 'LangGraph state machines, CrewAI crews, MCP tool calling, structured outputs, multi-agent systems and enterprise agent design — not prompt tricks.',
      },
      {
        title: 'Deployment, MLOps and security',
        copy: 'Docker and Nginx, AWS, Azure AI and Vertex AI, GitHub Actions CI/CD, MLflow and DVC, model monitoring, prompt injection and jailbreak defence.',
      },
      {
        title: 'One capstone you can defend',
        copy: 'An AI SaaS with FastAPI, PostgreSQL, RAG and agents, containerised and deployed — documented, code-reviewed and shipped from a managed GitHub repository.',
      },
    ],
    whyNow: {
      title: 'From Spreadsheets to a Deployed AI SaaS',
      points: [
        'Nine months of hands-on training — data engineering, machine learning, deep learning, LLMs, RAG, agents, deployment, MLOps and fine-tuning.',
        'One enterprise-grade capstone: an AI SaaS with FastAPI, PostgreSQL, RAG pipelines, AI agents, Docker and full cloud deployment.',
        'An AI course starts at Excel and Power BI because the failures in real AI projects are usually data, deployment and monitoring failures rather than modelling ones.',
        'Every month builds in dependency order, so nothing is used before it has been taught.',
      ],
    },
    roles: [
      'Data Analyst',
      'Data Scientist',
      'Machine Learning Engineer',
      'Deep Learning Engineer',
      'LLM / AI Engineer',
      'AI Agent Developer',
      'MLOps Engineer',
      'AI Application Developer',
      'Freelance AI Consultant',
    ],
    roleDetails: [
      {
        role: 'AI Application Developer',
        copy: 'Building software with models inside it — FastAPI, RAG, agents and a deployed interface. The capstone is the evidence this interview asks for.',
      },
      {
        role: 'MLOps Engineer',
        copy: 'Experiment tracking, model registries, CI/CD and monitoring. Month eight is this role’s foundation and it is one of the less contested entry points.',
      },
      {
        role: 'Machine Learning Engineer',
        copy: 'Training, tuning and evaluating models — scikit-learn pipelines, gradient boosting and PyTorch across months three and four.',
      },
      {
        role: 'LLM / AI Engineer',
        copy: 'The model layer: tokenization, embeddings, context windows, multi-provider routing and fine-tuning with LoRA and QLoRA.',
      },
      {
        role: 'Data Analyst',
        copy: 'The earliest employable point in the course — the Power BI, SQL and Python work of months one to three is enough on its own.',
      },
    ],
    hiring: [
      'Product companies building AI into their software',
      'IT services and analytics firms delivering AI projects for clients',
      'Businesses with data infrastructure and nobody to build on it',
      'Remote and freelance AI consulting',
    ],
    nextSteps: [
      'Agentic AI and platform architecture',
      'MLOps and production infrastructure',
      'Cloud AI platform credentials',
      'Research-adjacent post-training work',
    ],
    industries: ['Product & software', 'IT services & analytics', 'Enterprise', 'Remote / global'],
    careerFaqs: [
      {
        q: 'What roles is this track aimed at?',
        a: 'The nine the syllabus names: Data Analyst, Data Scientist, Machine Learning Engineer, Deep Learning Engineer, LLM / AI Engineer, AI Agent Developer, MLOps Engineer, AI Application Developer and Freelance AI Consultant.',
      },
      {
        q: 'What salary should I expect?',
        a: 'The syllabus publishes no salary ranges for these roles, so none are quoted here. Pay at this level varies widely by city, company and — more than anything else — by what your portfolio actually demonstrates. A counsellor can talk you through what local employers are currently offering.',
      },
      {
        q: 'What do I walk out with?',
        a: 'A Course Completion Certificate, guided support building your resume and portfolio, a deployed enterprise AI SaaS capstone, and the GitHub repository behind it — documented, code-reviewed and managed to industry standards. The work from earlier months sits alongside it: dashboards, pipelines, trained models, a vision system, a RAG application and an agent system.',
      },
      {
        q: 'Does the programme include vendor certification exams?',
        a: 'No. The syllabus states a Course Completion Certificate and resume and portfolio guidance; it does not include a vendor certification stack. If you go on to sit exams such as the AWS, Azure or Google Cloud AI credentials, those are attempted on the provider’s own platform, at the provider’s own fee, and techcadd is not affiliated with or an authorised testing centre for any of those organisations.',
      },
    ],
    projects: [
      {
        name: 'Dashboards and Reporting',
        summary:
          'Business dashboards and KPI reporting built in Power BI with DAX, on data shaped in Excel and Power Query — the first thing you can show anyone, built in month one.',
        tech: ['Power BI', 'DAX'],
        level: 'Beginner',
        skills: ['BI Reporting', 'Data Literacy'],
      },
      {
        name: 'A Queried Database and a Working API',
        summary:
          'A PostgreSQL schema you designed, queried with window functions and tuned for performance, served through a FastAPI endpoint with JWT authentication and tested in Postman.',
        tech: ['PostgreSQL', 'FastAPI', 'Postman'],
        level: 'Beginner',
        skills: ['Database Design', 'API Development'],
      },
      {
        name: 'Trained and Tuned Models',
        summary:
          'A full modelling cycle: cleaning and feature engineering, EDA with Plotly and Streamlit, scikit-learn pipelines with cross-validation, then gradient boosting with hyperparameter optimisation and honest evaluation.',
        tech: ['scikit-learn', 'XGBoost', 'Plotly'],
        level: 'Intermediate',
        skills: ['Model Training', 'Evaluation'],
      },
      {
        name: 'A Computer Vision System',
        summary:
          'PyTorch neural networks, a CNN adapted by transfer learning, and a detection pipeline using YOLO, OCR and image segmentation with OpenCV — plus Hugging Face transformers and tokenizers.',
        tech: ['PyTorch', 'YOLO', 'OpenCV'],
        level: 'Intermediate',
        skills: ['Deep Learning', 'Object Detection'],
      },
      {
        name: 'RAG Application & Agent System',
        summary:
          'Embeddings indexed in a vector database, then a full RAG system with hybrid search, re-ranking, evaluation and guardrails — built up into multi-agent autonomous workflows with CrewAI and MCP.',
        tech: ['LangGraph', 'CrewAI', 'MCP', 'Vector DB'],
        level: 'Advanced',
        skills: ['Retrieval Augmentation', 'Agent Design'],
      },
      {
        name: 'Enterprise AI SaaS Capstone',
        summary:
          'The whole of month nine: an end-to-end enterprise-grade AI SaaS with FastAPI and PostgreSQL, RAG pipelines and AI agents, Docker containerisation and full cloud deployment — delivered with documentation, code review and a managed GitHub repository.',
        tech: ['FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
        level: 'Advanced',
        skills: ['End-to-End Delivery', 'MLOps'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Beginners start at month one, not month four',
        copy: 'Excel, Power Query, Power BI and Python fundamentals come first. A school leaver with no coding background is the intended starting point, not an exception the course tolerates.',
      },
      {
        title: 'Engineering practice from the start',
        copy: 'OOP, exception handling, logging, type hinting, pytest, Ruff and Black in Month 1 — so the code you write in month seven is code someone else can read.',
      },
      {
        title: 'Modern tooling, taught as tooling',
        copy: 'uv for environments, GitHub Copilot, Cursor and Windsurf for AI-assisted coding, Postman for APIs. You use the tools the job uses, and you learn what they are doing for you.',
      },
      {
        title: 'Projects at every stage, not only at the end',
        copy: 'Dashboards in month one, pipelines in month two, trained models in month three, a vision system in month four, a RAG application in month six, a deployed service in month seven.',
      },
      {
        title: 'Delivery standards are built in',
        copy: 'The final month covers project documentation, code review best practice, GitHub repository management and industry standards — the part of a portfolio that gets it taken seriously.',
      },
      {
        title: 'Resume and portfolio guidance',
        copy: 'Guided support building your resume and portfolio, on top of the Course Completion Certificate. Placement support is support, not a job guarantee.',
      },
    ],
    extraFaqs: [
      {
        q: 'How long is the programme and how is it structured?',
        a: 'Nine months of structured, hands-on training. Months 1 to 3 cover data and programming foundations, dev tools and data engineering, then data science and machine learning. Months 4 to 6 cover deep learning and computer vision, LLM fundamentals and vector search, then RAG, LangChain and AI agents. Months 7 to 9 cover application development and deployment, MLOps, security and fine-tuning, then multimodal AI and the enterprise capstone.',
      },
      {
        q: 'Do I need programming experience to join?',
        a: 'No. The track is written for beginners and starts at advanced Excel, Power Query and Power BI before moving into Python fundamentals with VS Code, uv and virtual environments. What it does require is consistency — every month builds directly on the one before it, so falling behind compounds.',
      },
      {
        q: 'Why does an AI course start with Excel and Power BI?',
        a: 'Because the failures in real AI projects are usually not modelling failures. They are data failures, deployment failures and monitoring failures. Starting at data literacy, Power Query and dashboards means you can read and shape data before you model it — and every month builds in dependency order from there.',
      },
      {
        q: 'Will I learn to fine-tune a model, or only to prompt one?',
        a: 'Both, in that order. Prompt engineering, prompt optimisation, system prompts and structured prompting come first. Fine-tuning comes later, once you have shipped applications: LLM fine-tuning concepts, PEFT, LoRA, QLoRA, quantization and knowledge distillation — including when adapting a model is the right call and when it is not.',
      },
      {
        q: 'Are AI coding assistants taught, or discouraged?',
        a: 'Taught. GitHub Copilot, Cursor AI and the Windsurf IDE are covered alongside Git, GitHub and Git Flow. They are part of how the work is done now — the point of the engineering practice taught just before them is that you can read, test and correct what they produce.',
      },
      {
        q: 'What is the difference between this and the 6-month AI track?',
        a: 'Length is what buys depth here. The nine-month path adds the full data-engineering foundation, deep learning and computer vision with YOLO, OCR and Vision Transformers, the complete deployment and MLOps stack, AI security and fine-tuning with LoRA and QLoRA, multimodal AI and enterprise architecture — and it dedicates an entire final month to a single enterprise capstone rather than a shorter project.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-artificial-intelligence-program-in-phagwara',
      'after-12th-4-month-artificial-intelligence-program-in-phagwara',
      'after-12th-9-month-agentic-ai-program-in-phagwara',
      'after-12th-6-month-data-science-program-in-phagwara',
      'after-12th-9-month-cloud-computing-program-in-phagwara',
      'after-12th-9-month-cyber-security-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month artificial intelligence program in Phagwara',
      'AI diploma after 12th Phagwara',
      'deep learning RAG and MLOps training Phagwara',
      'enterprise AI SaaS course Punjab',
      'artificial intelligence diploma with placement Phagwara',
    ],
  }),

  /* ------------------------------------------------------- digital marketing -- */
  makeAfter12({
    ...CATEGORY,
    slug: 'after-12th-9-month-digital-marketing-program-in-phagwara',
    label: 'Digital Marketing',
    title: 'Best After 12th 9-Month Digital Marketing Diploma Program in Phagwara',
    icon: 'megaphone',
    duration: '9 Months',
    level: 'Beginner to Master Diploma',
    summary:
      'The flagship nine-month diploma — every channel, twelve portfolio projects, a 15-day Instagram growth sprint on a real account, and a full month of live agency internship working in pods on real client accounts.',
    overview:
      'techcadd’s flagship 9-month AI-Powered Digital Marketing Master Diploma: 410+ contact hours, 33 certification exams (29 free), 12 portfolio projects, a 15-day Instagram growth sprint on a real account and a full month of live agency internship. SEO, AEO/GEO, Google Ads, Meta Ads, e-commerce, CRO, GA4, AI agents and agency building.\nThis is the deepest programme techcadd runs. It is built for students who want real depth in every channel rather than a quick overview, and it finishes with three institute certificates — Course Completion, Project Completion, and a separately assessed Industry Internship Certificate covering the live month.\nMonths one and two build the foundation and the production line: funnel architecture, the customer journey, buyer personas, channel-mix planning and the metrics language; then brand strategy, positioning and market research, producing a brand book for a real business. Generative AI follows across twenty hours — prompt engineering frameworks, reusable prompt libraries, custom GPTs, AI deep research, AI copy, image, video and voice production, and the fact-checking and brand-safety guardrails that keep AI output usable. Design and video come next.\nMonth three is the mobile video sprint and the web build: smartphone cinematography, lighting, audio, batch shooting, and a live 15-day Instagram growth sprint with daily posting and documented growth on a real account — then WordPress, Elementor Pro and a five-page business website. Month four covers Core Web Vitals, tracking and landing-page engineering, then keyword research and on-page SEO. Month five is technical SEO, off-page link building and digital PR, local SEO, and GEO and AEO — optimising for AI answer engines, which very few candidates anywhere can do.\nMonths six and seven are content, social and paid media. Month eight covers e-commerce store builds, marketplace and feed optimisation for Amazon and Flipkart, conversion rate optimisation, email, CRM and lifecycle automation, and GA4, Google Tag Manager and Looker Studio. Month nine brings AI marketing agents and workflow automation, freelancing and agency building, project management and interview preparation — alongside the live agency internship: roughly 25 working days embedded on real client accounts, working in a pod with a defined role, attending client review calls, shipping weekly deliverables and presenting a final performance review.',
    demand:
      'GEO and AEO — optimising for the AI answer engines that increasingly sit between a business and its customers — is a premium, low-supply skill almost no other candidate can show.',
    modules: [
      {
        title: 'Month 1 — Strategy, Brand & Generative AI',
        summary:
          'The argument before the execution, and an AI production system you keep.',
        topics: [
          'The 7P framework and buyer behaviour; customer journey mapping',
          'TOFU/MOFU/BOFU funnel architecture and buyer personas',
          'Channel-mix planning; the metrics language (CPM, CPC, CTR, CPL, CAC, AOV, LTV, ROAS, ROI)',
          'The 70-20-10 media rule',
          'Brand architecture, tone of voice, positioning and the value proposition canvas',
          'Primary and secondary research, competitive intelligence and a brand guideline kit',
          'StoryBrand and Golden Circle frameworks',
          'LLM foundations; R-T-F and C-A-R-E prompt frameworks; reusable prompt libraries',
          'Custom GPTs and AI deep research',
          'AI copy, image, video and voice production',
          'Fact-checking and brand-safety guardrails',
        ],
        duration: '4 weeks',
        lessons: 26,
      },
      {
        title: 'Month 2 — AI Production, Design & Video',
        summary:
          'The creative production line every other channel draws on.',
        topics: [
          'Custom GPTs and prompt libraries in production',
          'Design fundamentals: grid, hierarchy, contrast, white-space, colour and typography',
          'Photoshop essentials and Canva Pro mastery',
          'Ad creative anatomy and a format library; AI-assisted design',
          'Five concept variants per offer',
          'Premiere Pro workflow and CapCut vertical editing',
          'The 3-second hook and the retention curve',
          'Scriptwriting for Reels and Shorts; AI captioning and dubbing',
          'YouTube strategy',
        ],
        duration: '4 weeks',
        lessons: 28,
      },
      {
        title: 'Month 3 — Mobile Video Sprint & Website Development',
        summary:
          'A grown Instagram account with real analytics, and three live URLs.',
        topics: [
          'Smartphone cinematography, budget lighting and audio capture',
          'Batch shooting, trend research and advanced CapCut editing',
          'Instagram growth mechanics',
          'A LIVE 15-day sprint of daily posting and iteration on a real account',
          'Domains, DNS, hosting, SSL and cPanel',
          'WordPress install and hardening; Elementor Pro',
          'A five-page business website and high-converting landing pages',
          'Form-to-CRM integration, backups and security',
        ],
        duration: '4 weeks',
        lessons: 20,
      },
      {
        title: 'Month 4 — Advanced Web & SEO Foundations',
        summary:
          'Speed, tracking and the keyword strategy everything organic runs on.',
        topics: [
          'Core Web Vitals (LCP, INP, CLS); image optimisation and caching',
          'A/B testing structure; pixel and tag deployment across GA4, Google Ads, Meta and LinkedIn',
          'Server-side and CAPI concepts; accessibility and QA',
          'Search engine mechanics; seed discovery and competitor gap analysis',
          'Intent classification; volume, KD, CPC and business-value scoring',
          'Long-tail and question mining for AEO; keyword mapping; a 100-keyword master sheet',
          'On-page SEO: titles, metas, URL and heading hierarchy',
          'Entity coverage, semantic keywords, internal linking and topical authority',
          'Image SEO, E-E-A-T signals, content refresh and featured snippets',
        ],
        duration: '4 weeks',
        lessons: 24,
      },
      {
        title: 'Month 5 — Technical, Off-Page, Local SEO & AEO/GEO',
        summary:
          'The full organic stack, including the AI-search work almost nobody can show.',
        topics: [
          'Crawl budget, robots.txt, sitemaps and indexation; canonicals, pagination and hreflang',
          'Site architecture, Core Web Vitals diagnostics and structured data',
          'Redirects, 404 strategy and a prioritised remediation report',
          'Link fundamentals; white-hat acquisition, HARO and digital PR',
          'Citations and NAP consistency; backlink gap analysis and cold outreach',
          'Toxic links, disavow and a 90-day link plan',
          'Local ranking factors; GBP setup and optimisation; review generation',
          'Local landing pages, location schema and map-pack and geo-grid tracking',
          'GEO and AEO: how AI answer engines retrieve, rank and cite',
          'Question-first content and direct-answer blocks; entity building and quotable content',
          'Schema markup, the Knowledge Graph and Wikidata; Google AI Overviews',
          'llms.txt, AI-bot indexing and share-of-answer tracking',
        ],
        duration: '4 weeks',
        lessons: 30,
      },
      {
        title: 'Month 6 — Content, Social & Google Ads (Part 1)',
        summary:
          'Copy that converts, six platforms run properly, and the search half of paid.',
        topics: [
          'Pillar-cluster strategy and editorial calendar; long-form blog writing that ranks',
          'AIDA, PAS, BAB, 4Ps and FAB frameworks; headline and hook engineering',
          'Landing-page copy, ad copy, email sequences and case-study writing',
          'Platform strategy across Instagram, Facebook, LinkedIn, YouTube, X and Pinterest',
          'Content pillars and a 30-day calendar; organic growth mechanics',
          'The LinkedIn B2B system; influencer and UGC marketing',
          'Community management, DM funnels, social listening and crisis handling',
          'Google Ads: account architecture, auction mechanics and Quality Score',
          'Match types and negatives; Responsive Search Ads and assets',
          'Display placements and audiences; conversion actions and bidding foundations',
        ],
        duration: '4 weeks',
        lessons: 30,
      },
      {
        title: 'Month 7 — Google Ads (Part 2) & Meta Ads',
        summary:
          'Shopping, Performance Max and YouTube, then the whole of Meta.',
        topics: [
          'Merchant Center setup and feed rules; Standard Shopping structure',
          'PMax asset groups, audience signals and reporting limits',
          'YouTube formats and sequencing; Demand Gen; smart bidding portfolios and scaling logic',
          'Meta Business Manager assets and permissions; CBO vs ABO',
          'Pixel via GTM; the Conversions API and event match quality',
          'Aggregated Event Measurement; placements and Advantage+',
          'Ad policy, account recovery and reading Ads Manager',
          'Broad vs interest audiences, custom audiences, lookalikes and retargeting funnels',
          'Creative testing frameworks and kill rules; hook/hold rate and CPA diagnostics',
          'Advantage+ Shopping and DPA; lead forms and CRM integration',
          'Scaling, learning-phase management and click-to-WhatsApp funnels',
        ],
        duration: '4 weeks',
        lessons: 26,
      },
      {
        title: 'Month 8 — E-Commerce, Marketplace, CRO, Email & Analytics',
        summary:
          'Stores, marketplaces, conversion and the measurement stack behind all of it.',
        topics: [
          'D2C, marketplace and dropship models; WooCommerce setup and Shopify essentials',
          'Product page anatomy, inventory and returns, coupons and loyalty',
          'COD vs prepaid economics, RTO reduction and a launch checklist',
          'Category and product page SEO; collection strategy',
          'Feed optimisation with GTIN and custom labels; Amazon and Flipkart listing optimisation',
          'Marketplace advertising basics; review and buy-box factors; seasonal merchandising',
          'CRO: heuristic audit frameworks, heatmaps and session recordings',
          'Checkout optimisation and abandoned-cart flows; A/B testing and significance',
          'An ICE/PIE-scored CRO roadmap',
          'Email: list building, segmentation and deliverability with SPF, DKIM and DMARC',
          'Lifecycle flows, CRM pipelines, lead scoring and WhatsApp template compliance',
          'GA4 architecture, GTM containers and dataLayer; conversion tracking and Explorations',
          'Audience export and blended Looker Studio dashboards; debugging',
        ],
        duration: '4 weeks',
        lessons: 32,
      },
      {
        title: 'Month 9 — AI Agents, Agency Business & Live Internship',
        summary:
          'Automation, the business of selling the skill, and a month inside an agency.',
        topics: [
          'Automation thinking; no-code logic with triggers, routers and error handling',
          'Lead-capture to CRM to WhatsApp pipelines',
          'AI agents that write, classify, summarise and reply',
          'API and webhook connections; auto-reporting dashboards',
          'Self-hosted n8n trade-offs and client handover documentation',
          'Niche, service menu and ideal client profile; pricing models and Indian market rates',
          'Portfolio case studies; Upwork, Fiverr and LinkedIn profiles',
          'Cold outreach, referrals, discovery calls, proposals and contracts',
          'Invoicing, GST basics, international payments and retainer renewal',
          'Agency workflow from brief to report; SOPs, client communication and escalation',
          'Resume and LinkedIn engineering; technical, case-study and HR interview drills',
          'LIVE AGENCY INTERNSHIP: pod formation, client onboarding, audit and 30-day plan',
          'Production, campaign launch, daily standups and optimisation logs',
          'Scaling, final performance report, dashboard handover and a panel presentation',
        ],
        duration: '4 weeks',
        lessons: 28,
      },
    ],
    outcomes: [
      'A grown Instagram account with documented reach, follower and engagement growth from a 15-day live sprint',
      'Two live ad-account portfolios across Google (Search, Display, Shopping, PMax, Demand Gen, YouTube) and Meta',
      'An SEO + AEO case study with twelve weeks of rank data, including the AI-search work almost nobody can show',
      'A WooCommerce store, marketplace feeds for Amazon and Flipkart, and a CRO roadmap',
      'Three production AI automations and an agency business kit — service menu, pricing, proposal, contract and SOP',
      'A full month inside an agency in a defined pod role, separately assessed and certified',
    ],
    tools: [
      'Photoshop & Canva Pro',
      'Premiere Pro & CapCut',
      'WordPress, Elementor Pro & WooCommerce',
      'Shopify',
      'SEMrush, Ahrefs, Yoast & BrightLocal',
      'Google Business Profile & schema tools',
      'Google Ads & Merchant Center',
      'Meta Ads Manager, Pixel & Conversions API',
      'Amazon & Flipkart seller tools',
      'GA4, Google Tag Manager & Looker Studio',
      'Microsoft Clarity',
      'HubSpot & WhatsApp Business API',
      'n8n, Make & Zapier',
      'Custom GPTs & AI production tools',
    ],
    audience: [
      {
        label: 'Students straight out of 12th',
        copy: 'Any stream, no marketing background. The course begins at what digital marketing is and how a funnel works, and by month three you own a grown Instagram account with documented analytics.',
      },
      {
        label: 'Students who want the widest placement range',
        copy: 'This is the track with the deepest coverage — SEO, AEO, Google Ads, Meta Ads, e-commerce, marketplace, CRO, email, analytics, automation and agency skills. It leaves the most doors open.',
      },
      {
        label: 'Anyone who wants real agency experience',
        copy: 'The one-month live internship is the differentiator. You work in a pod with a defined role — strategist, media buyer, SEO, creative or analyst — on real client accounts, and it is separately assessed and certified.',
      },
      {
        label: 'Aspiring freelancers and agency owners',
        copy: 'Month 9 includes a full sixteen hours on positioning, pricing, proposals, contracts, invoicing, GST basics and client acquisition, and the final project is a complete agency business kit. Most students earn their first income before placement.',
      },
      {
        label: 'Career changers and working professionals',
        copy: 'Morning, afternoon, evening and weekend batches all run, and missed sessions are repeated with another batch. The certification stack is what makes a career change legible on a CV.',
      },
      {
        label: 'Students who want certifications that verify',
        copy: '33 exams, 29 of them free, each prepared for in class and attempted in a supervised lab slot. Badges are added to your LinkedIn and CV with verification links during placement preparation.',
      },
    ],
    whyChooseUs: [
      {
        title: '33 certification exams, 29 of them free',
        copy: 'Google, Meta (both Associate and Media Buying Professional), Microsoft, HubSpot, SEMrush, Ahrefs, Adobe, Canva, Yoast, BrightLocal, LinkedIn, Shopify, Amazon Ads, Make and n8n.',
      },
      {
        title: '12 portfolio projects on real accounts',
        copy: 'Brand book, AI production system, creative and video portfolio, Instagram growth case study, three live URLs, an SEO+AEO case study, two ad-account portfolios, marketplace, lifecycle automation, AI agent suite and an agency business kit.',
      },
      {
        title: 'A full month of live agency internship',
        copy: 'Roughly 25 working days in a pod with a defined role on real client accounts — onboarding and audit, production, live campaigns, scaling, then a formal handover presentation.',
      },
      {
        title: 'A grown Instagram account',
        copy: '15 days of daily shooting, editing and posting on a real account, with documented reach and follower growth you can show at interview.',
      },
      {
        title: 'GEO and AEO — AI search optimisation',
        copy: 'How AI answer engines retrieve, rank and cite; question-first content, entity building, schema, llms.txt and share-of-answer reporting. A premium, low-supply skill.',
      },
      {
        title: 'An agency business kit',
        copy: 'Service menu, pricing sheet, proposal template, contract, onboarding SOP and outreach system — plus GST basics, invoicing and international payments.',
      },
    ],
    whyNow: {
      title: 'Certified — And Actually Able to Do the Work',
      points: [
        '33 certification exams, 9 months of hands-on training, 12 portfolio projects and a full month of live agency work on real client accounts.',
        'Three institute certificates that say exactly what you did, including a separately assessed Industry Internship Certificate.',
        'Growth Marketer and Marketing Automation Consultant roles start around ₹4.0 – 8.0 LPA for a fresher in North India.',
        'Agency owners and consultants report ₹50,000 – ₹2,00,000+ a month, and most students earn their first income before placement.',
      ],
    },
    roles: [
      'SEO / AEO Lead',
      'Senior Performance Marketing Specialist',
      'Marketing Automation Consultant',
      'Growth Marketer (D2C / SaaS)',
      'Digital Marketing Manager',
      'E-Commerce & Marketplace Manager',
      'Agency Owner or Consultant',
    ],
    roleDetails: [
      {
        role: 'SEO / AEO Lead',
        copy: 'Owning organic and AI-search visibility. Indicative fresher range for North India: ₹3.5 – 6.5 LPA — and the AEO half is a skill very few candidates have at all.',
      },
      {
        role: 'Senior Performance Marketing Specialist',
        copy: 'Paid media across Google and Meta at scale, judged on ROAS. Indicative range: ₹4.0 – 7.0 LPA.',
      },
      {
        role: 'Marketing Automation Consultant',
        copy: 'AI agents, lifecycle flows and no-code pipelines. Indicative range: ₹4.0 – 7.5 LPA, and the month-nine automation work maps straight onto it.',
      },
      {
        role: 'Growth Marketer (D2C / SaaS)',
        copy: 'End-to-end growth ownership across channels and funnel. Indicative range: ₹4.0 – 8.0 LPA.',
      },
      {
        role: 'Agency Owner or Consultant',
        copy: 'Indicatively ₹50,000 – ₹2,00,000+ a month. Month nine’s agency business kit and the live internship are what make this realistic rather than aspirational.',
      },
    ],
    hiring: [
      'Agencies across Punjab, Chandigarh and Delhi NCR',
      'D2C and SaaS companies hiring growth marketers',
      'E-commerce businesses selling on their own store and on marketplaces',
      'Remote roles and independent agency work',
    ],
    nextSteps: [
      'Specialisation in AEO/GEO or performance media',
      'Marketing analytics and data',
      'Agency building and team hiring',
      'Certification renewals for Google and Meta',
    ],
    industries: ['Agencies', 'D2C & SaaS', 'E-commerce & marketplace', 'Freelance / remote'],
    salary: {
      role: 'Growth / Search Marketing Lead',
      summary:
        'Owns channels end to end and can price and deliver the work independently. These are market observations, not guarantees — actual offers vary by city, company, portfolio strength and interview performance.',
      starting: '₹3.5–6.5 LPA',
      after2: '₹7.0–14.0 LPA',
      markets: [
        {
          name: 'North India — SEO / AEO Lead',
          fresher: '₹3.5–6.5 LPA',
          after2: '₹7.0–14.0 LPA',
          scale: { fresher: 5, after2: 10.5 },
        },
        {
          name: 'Growth Marketer (D2C / SaaS)',
          fresher: '₹4.0–8.0 LPA',
          after2: '₹9.0–18.0 LPA',
          scale: { fresher: 6, after2: 13.5 },
        },
        {
          name: 'Agency Owner / Consultant',
          fresher: '₹50,000–₹2,00,000+/month',
          after2: '₹1,50,000–₹5,00,000+/month',
          scale: { fresher: 7.5, after2: 19.5 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What roles can I apply for, and what do they pay?',
        a: 'Indicative fresher ranges for North India: SEO / AEO Lead ₹3.5 – 6.5 LPA; Senior Performance Marketing Specialist ₹4.0 – 7.0 LPA; Marketing Automation Consultant ₹4.0 – 7.5 LPA; Growth Marketer (D2C / SaaS) ₹4.0 – 8.0 LPA; Digital Marketing Manager with experience ₹4.5 – 8.0 LPA; Agency Owner or Consultant ₹50,000 – ₹2,00,000+ a month. These are market observations, not guarantees.',
      },
      {
        q: 'Why does this track pay more than the shorter ones?',
        a: 'Depth and evidence. Nine months buys the AEO and GEO work almost nobody else can show, marketplace and feed optimisation, AI marketing agents, and a month of real agency delivery that is separately certified — which is why the roles it targets are lead and specialist titles rather than executive ones.',
      },
      {
        q: 'Can I start my own agency after this?',
        a: 'It is one of the intended outcomes. Month nine covers positioning, pricing, proposals, contracts, invoicing, GST basics and international payments, and the final project is a complete agency business kit. Most students earn their first income before placement.',
      },
      {
        q: 'What is AEO, and why does it matter now?',
        a: 'Answer Engine Optimisation — making a business visible inside AI answers rather than only in the blue links. It covers how AI engines retrieve, rank and cite, question-first content, entity building, schema, llms.txt and share-of-answer tracking. Very few candidates anywhere can do it, which is exactly why it is worth having.',
      },
    ],
    projects: [
      {
        name: 'Brand Strategy Book & AI Production System',
        summary:
          'Full brand discovery, positioning, tone of voice and a 12-month roadmap for a real business as a brand book and strategy deck — plus a custom GPT, a prompt library and an AI content pipeline.',
        tech: ['Custom GPTs', 'Prompt frameworks'],
        level: 'Beginner',
        skills: ['Brand Strategy', 'AI Production'],
      },
      {
        name: 'Creative Portfolio & 15-Day Instagram Sprint',
        summary:
          '25 design assets and 10 edited videos across formats and platforms, then 15 days of daily shooting, editing and publishing on a real account with documented reach, follower and engagement growth.',
        tech: ['Photoshop', 'Canva Pro', 'Premiere Pro', 'CapCut'],
        level: 'Intermediate',
        skills: ['Creative Production', 'Organic Growth'],
      },
      {
        name: 'Website, Store & Landing Pages',
        summary:
          'A business website, a WooCommerce store and two conversion landing pages — three live URLs delivered with audit reports.',
        tech: ['WordPress', 'Elementor Pro', 'WooCommerce'],
        level: 'Intermediate',
        skills: ['Web Development', 'Conversion Design'],
      },
      {
        name: 'SEO + AEO Campaign',
        summary:
          'A technical audit, on-page overhaul, link campaign, local SEO programme and an AI-visibility push run over twelve weeks — a full SEO case study with rank data, including the GEO/AEO work.',
        tech: ['SEMrush', 'Ahrefs', 'Schema', 'BrightLocal'],
        level: 'Advanced',
        skills: ['Technical SEO', 'AI Search Optimisation'],
      },
      {
        name: 'Google Ads, Meta Ads & Marketplace',
        summary:
          'Search, Display, Shopping, PMax, Demand Gen and YouTube campaigns with full measurement; a full-funnel Meta build with catalogue ads, lead forms and click-to-WhatsApp; and a catalogue optimised for Google Shopping, Amazon and Flipkart.',
        tech: ['Google Ads', 'Meta Ads', 'Merchant Center'],
        level: 'Advanced',
        skills: ['Paid Media', 'Marketplace'],
      },
      {
        name: 'AI Agents, Agency Kit & Live Internship',
        summary:
          'A complete lifecycle programme across email and WhatsApp, three production AI automations, and an agency business kit — then a full month embedded on real client accounts in a pod, ending in a panel presentation.',
        tech: ['n8n', 'Make', 'HubSpot'],
        level: 'Advanced',
        skills: ['Marketing Automation', 'Agency Delivery'],
      },
    ],
    whyTechcadd: [
      {
        title: 'Exams are built into the timetable',
        copy: 'Each exam’s published topic list is covered in the month before it, so the class content is the syllabus. Attempts happen in scheduled supervised lab slots, roughly two hours each.',
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
        copy: 'Attendance 10%, monthly assignments 25%, mid-term practical 15%, portfolio projects 20%, live project 20%, final viva and mock interview 10% — with a published rubric and one free re-attempt of any failed component.',
      },
      {
        title: 'Placement and alumni support',
        copy: 'A hosted portfolio with every project, live URL and badge; ATS-optimised CV and LinkedIn; technical, case-study and HR mock interviews with written feedback; profile circulation across Punjab, Chandigarh, Delhi NCR and remote roles; plus continued job postings and refresher classes.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the duration and format of this programme?',
        a: 'Nine months, 400 to 430 hours of classroom and supervised lab time. Classes run 1.5 to 2 hours a day, five to six days a week, with morning, afternoon, evening and weekend batch options. It is offline classroom teaching with one workstation per student, premium tool and platform access during the course, backup classes for missed sessions, doubt-clearing hours and a mentor group.',
      },
      {
        q: 'How is this different from the 6-month digital marketing track?',
        a: 'This is the deepest programme techcadd runs. The six-month Professional track is the classical programme: every core channel taught manually and deliberately without AI training, with 25 certifications, 10 projects and a 15–20 day live industry project. This nine-month diploma adds generative AI and AI productivity, brand strategy, the mobile-video shoot with a 15-day Instagram growth sprint, GEO and AEO for AI search, marketplace and feed optimisation, AI marketing agents and automation — and replaces the shorter live project with a full month of agency internship.',
      },
      {
        q: 'Are the exam fees included?',
        a: '29 of the 33 certifications in this track are free. The remaining paid exams — the two Adobe Certified Professional exams and the two Meta Blueprint exams — carry a provider fee paid directly by you to the provider, and are not included in course fees unless stated otherwise in writing at admission.',
      },
      {
        q: 'Is techcadd affiliated with Google, Meta or the other providers?',
        a: 'No. techcadd is not affiliated with, endorsed by, or an authorised testing centre for Google, Meta, Microsoft, HubSpot, SEMrush, Ahrefs, Adobe, Canva, Shopify, Amazon, Make, n8n or any other certifying organisation. The institute prepares you for these exams; the exams are attempted on the provider’s own platform and the credentials are issued directly by the provider.',
      },
      {
        q: 'Whose accounts do I work on during the live internship?',
        a: 'Partner business accounts arranged by the institute, or an equivalent institute-owned live property with real traffic. You are never required to spend your own money on ad budgets.',
      },
      {
        q: 'What are the three institute certificates?',
        a: 'A Course Completion Certificate stating the track name, duration, contact hours and grade; a Project Completion Certificate listing each project by name with the platforms used and the measurable outcome; and a Live Project Certificate certifying supervised work on a real account — the partner business where consent is given, the period of engagement, the role performed and the supervising mentor.',
      },
    ],
    relatedCourses: [
      'after-12th-6-month-digital-marketing-program-in-phagwara',
      'after-12th-4-month-digital-marketing-program-in-phagwara',
      'after-12th-3-month-digital-marketing-program-in-phagwara',
      'after-12th-6-month-data-analytics-program-in-phagwara',
      'after-12th-9-month-full-stack-development-program-in-phagwara',
      'after-12th-9-month-artificial-intelligence-program-in-phagwara',
    ],
    keywords: [
      'after 12th 9 month digital marketing program in Phagwara',
      'digital marketing master diploma Phagwara',
      'AEO and GEO AI search training Phagwara',
      'agency internship digital marketing course Punjab',
      'digital marketing diploma with placement Phagwara',
    ],
  }),
]
