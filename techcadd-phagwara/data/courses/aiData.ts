/**
 * AI & Data course pages.
 *
 * Only what genuinely differs between tracks is written here — the audience
 * grid, the "why this programme" cards, the instructor panel, the shared FAQs
 * and the student reviews all come from `./shared` via `makeCourse`.
 *
 * @see ./factory for what each field becomes on the page.
 */

import { makeCourse } from './factory'
import type { CourseContent } from './types'

export const AI_DATA_COURSES: CourseContent[] = [
  makeCourse({
    slug: 'artificial-intelligence-course-in-phagwara',
    label: 'Artificial Intelligence',
    title: 'Best Artificial Intelligence Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'brain',
    duration: '6 Months',
    level: 'Intermediate to Advanced',
    eligibility: 'Graduate / Final-year',
    summary: 'From Python and math foundations to neural networks and applied AI — build and deploy real intelligent systems.',
    overview: 'Six months across the AI stack: the statistics that make models behave, the libraries that build them, and the deployment work that turns a notebook into something a business can use.',
    demand: 'AI is the one skill where the shortage of trained people is worse than the shortage of jobs, and that gap is widest outside the metros.',
    modules: [
      {
        title: 'Maths for AI',
        summary: 'The linear algebra, calculus and probability you actually use.',
        topics: ['Vectors & matrices', 'Gradients', 'Probability', 'Distributions'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Python for AI',
        summary: 'NumPy, Pandas and the tooling around them.',
        topics: ['NumPy', 'Pandas', 'Visualisation', 'Notebooks'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Machine learning core',
        summary: 'Supervised and unsupervised methods that hold up.',
        topics: ['Regression', 'Classification', 'Clustering', 'Validation'],
        duration: '5 weeks',
        lessons: 20,
      },
      {
        title: 'Deep learning',
        summary: 'Neural networks, and when they are worth the cost.',
        topics: ['Neural networks', 'CNNs', 'Sequence models', 'Transfer learning'],
        duration: '5 weeks',
        lessons: 20,
      },
      {
        title: 'LLMs & applied AI',
        summary: 'Working with large models rather than training them from scratch.',
        topics: ['Prompting', 'Embeddings', 'RAG', 'Evaluation'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Deployment',
        summary: 'Getting a model to where it is useful.',
        topics: ['APIs', 'Containers', 'Monitoring', 'Model drift'],
        duration: '4 weeks',
        lessons: 14,
      },
    ],
    outcomes: [
      'Frame a problem as a learning task',
      'Build and validate models without fooling yourself',
      'Train neural networks for vision and text',
      'Use LLMs with retrieval over your own data',
      'Deploy and monitor a model in production',
    ],
    tools: [
      'Python',
      'NumPy',
      'Pandas',
      'scikit-learn',
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'Docker',
      'FastAPI',
    ],
    roles: ['AI Developer', 'ML Engineer', 'Applied Scientist', 'Data Scientist'],
    hiring: [
      'AI and product startups',
      'Analytics and research teams',
      'Enterprise automation teams',
      'Remote AI contract work',
    ],
    nextSteps: ['MLOps', 'Computer vision in depth', 'NLP specialisation', 'Cloud & DevOps'],
    industries: ['SaaS', 'Healthcare', 'Manufacturing', 'Fintech'],
    salary: {
      role: 'AI Engineer',
      summary: 'Builds and deploys applications on top of machine learning and language models.',
      starting: '₹3.5–6 LPA',
      after2: '₹8–16 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹3.5–6 LPA',
          after2: '₹8–16 LPA',
          scale: { fresher: 4.75, after2: 12 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹5–8.5 LPA',
          after2: '₹11–22.5 LPA',
          scale: { fresher: 6.65, after2: 16.8 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹5.5–9.5 LPA',
          after2: '₹12.5–25 LPA',
          scale: { fresher: 7.36, after2: 18.6 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Artificial Intelligence?',
        a: 'Graduates move into AI Developer, ML Engineer, Applied Scientist, Data Scientist and similar roles. AI is the one skill where the shortage of trained people is worse than the shortage of jobs, and that gap is widest outside the metros.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹29,000 – ₹50,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Document Q&A with RAG',
        summary: 'Retrieval over a private corpus with evaluated answers.',
        tech: ['Python', 'Embeddings', 'LLM'],
        level: 'Advanced',
        skills: ['Retrieval', 'Evaluation', 'Prompting'],
      },
      {
        name: 'Defect detection model',
        summary: 'A vision model trained on a production line dataset.',
        tech: ['PyTorch', 'OpenCV'],
        level: 'Advanced',
        skills: ['CNNs', 'Augmentation', 'Metrics'],
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
        q: 'What is the duration of the Artificial Intelligence course in Phagwara?',
        a: 'techcadd runs Artificial Intelligence over 6 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Artificial Intelligence course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Artificial Intelligence course?',
        a: 'Graduate / Final-year. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Artificial Intelligence course?',
        a: 'Graduates move into AI Developer, ML Engineer, Applied Scientist, Data Scientist and similar roles. AI is the one skill where the shortage of trained people is worse than the shortage of jobs, and that gap is widest outside the metros.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'AI Engineer roles start around ₹29,000 – ₹50,000 a month for a fresher with a working portfolio, rising to ₹8–16 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'It assumes some programming. If you have never written Python, start with Python Programming and move across after.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Comfort with Python basics and school-level maths. The first module rebuilds the maths you need.',
      },
    ],
    whyNow: {
      title: 'Artificial Intelligence Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'AI Engineer roles in Punjab start around ₹29,000 – ₹50,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'machine-learning-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'tableau-course-in-phagwara',
      'python-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
    ],
    keywords: [
      'artificial intelligence course phagwara',
      'ai training in phagwara',
      'deep learning course in phagwara',
      'llm course in phagwara',
    ],
  }),

  makeCourse({
    slug: 'machine-learning-course-in-phagwara',
    label: 'Machine Learning',
    title: 'Best Machine Learning Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'cpu',
    duration: '4 Months',
    level: 'Intermediate',
    eligibility: 'Graduate / Final-year',
    summary: 'Supervised, unsupervised and applied ML — the algorithms and workflow behind most real-world data products.',
    overview: 'Four months on the core of applied ML: feature work, model selection, honest validation, and the deployment step most courses skip.',
    demand: 'Machine learning has moved from research to routine engineering work, and companies now hire for it the way they once hired for web development.',
    modules: [
      {
        title: 'Foundations',
        summary: 'Python, data handling and the statistics ML rests on.',
        topics: ['Pandas', 'Distributions', 'Sampling', 'Bias & variance'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Supervised learning',
        summary: 'Regression and classification, properly validated.',
        topics: ['Linear models', 'Trees', 'Ensembles', 'Cross-validation'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Unsupervised learning',
        summary: 'Structure without labels.',
        topics: ['Clustering', 'Dimensionality reduction', 'Anomalies', 'Segmentation'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Feature engineering',
        summary: 'Where most of the real gains come from.',
        topics: ['Encoding', 'Scaling', 'Selection', 'Leakage'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Deployment & monitoring',
        summary: 'A model that keeps working after launch.',
        topics: ['APIs', 'Batch scoring', 'Drift', 'Retraining'],
        duration: '3 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Choose a model that fits the problem',
      'Engineer features without leaking the target',
      'Validate honestly with cross-validation',
      'Explain a model to a non-technical stakeholder',
      'Deploy and monitor a model in production',
    ],
    tools: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'MLflow', 'FastAPI', 'Jupyter'],
    roles: ['ML Engineer', 'Data Scientist', 'Applied ML Developer', 'Analytics Engineer'],
    hiring: [
      'Analytics and data science teams',
      'Product companies with ML features',
      'Fintech and healthtech startups',
      'Research and consulting groups',
    ],
    nextSteps: ['Deep learning', 'MLOps', 'Artificial Intelligence', 'Cloud & DevOps'],
    industries: ['E-commerce', 'Fintech', 'Logistics', 'Healthcare'],
    salary: {
      role: 'Machine Learning Engineer',
      summary: 'Trains, evaluates and ships models that make predictions on real data.',
      starting: '₹3.5–6 LPA',
      after2: '₹8–15 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹3.5–6 LPA',
          after2: '₹8–15 LPA',
          scale: { fresher: 4.75, after2: 11.5 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹5–8.5 LPA',
          after2: '₹11–21 LPA',
          scale: { fresher: 6.65, after2: 16.1 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹5.5–9.5 LPA',
          after2: '₹12.5–23.5 LPA',
          scale: { fresher: 7.36, after2: 17.82 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Machine Learning?',
        a: 'Graduates move into ML Engineer, Data Scientist, Applied ML Developer, Analytics Engineer and similar roles. Machine learning has moved from research to routine engineering work, and companies now hire for it the way they once hired for web development.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹29,000 – ₹50,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Churn prediction model',
        summary: 'Predict churn, then explain which signals drive it.',
        tech: ['scikit-learn', 'Pandas'],
        level: 'Intermediate',
        skills: ['Feature engineering', 'Validation', 'Explainability'],
      },
      {
        name: 'Recommendation engine',
        summary: 'A collaborative filtering recommender, evaluated offline.',
        tech: ['Python', 'NumPy'],
        level: 'Advanced',
        skills: ['Similarity', 'Evaluation', 'Cold start'],
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
        q: 'What is the duration of the Machine Learning course in Phagwara?',
        a: 'techcadd runs Machine Learning over 4 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Machine Learning course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Machine Learning course?',
        a: 'Graduate / Final-year. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Machine Learning course?',
        a: 'Graduates move into ML Engineer, Data Scientist, Applied ML Developer, Analytics Engineer and similar roles. Machine learning has moved from research to routine engineering work, and companies now hire for it the way they once hired for web development.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Machine Learning Engineer roles start around ₹29,000 – ₹50,000 a month for a fresher with a working portfolio, rising to ₹8–15 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'It assumes basic Python. Absolute beginners should take Python Programming first.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Python fundamentals and school-level statistics. The first module covers the rest.',
      },
    ],
    whyNow: {
      title: 'Machine Learning Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Machine Learning Engineer roles in Punjab start around ₹29,000 – ₹50,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'artificial-intelligence-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'python-course-in-phagwara',
      'tableau-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
    ],
    keywords: [
      'machine learning course phagwara',
      'ml training in phagwara',
      'scikit-learn course in phagwara',
      'predictive modelling course in phagwara',
    ],
  }),

  makeCourse({
    slug: 'deep-learning-course-in-phagwara',
    label: 'Deep Learning',
    title: 'Best Deep Learning Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'brain',
    duration: '4 Months',
    level: 'Advanced',
    eligibility: 'Graduate / Final-year',
    summary: 'Neural networks, CNNs and transformers with TensorFlow/PyTorch — for students ready to go past classical ML.',
    overview: 'Four months on neural networks: the architectures that matter, the training practices that make them converge, and getting a trained model into production.',
    demand: 'Deep learning is the specialisation that separates an AI job application from the pile, and very few people in Punjab have actually trained a network end to end.',
    modules: [
      {
        title: 'Neural network foundations',
        summary: 'How a network actually learns.',
        topics: ['Perceptrons', 'Backpropagation', 'Optimisers', 'Regularisation'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Computer vision',
        summary: 'CNNs and the vision toolkit.',
        topics: ['CNNs', 'Augmentation', 'Transfer learning', 'Detection'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Sequences & language',
        summary: 'From RNNs to transformers.',
        topics: ['RNNs', 'Attention', 'Transformers', 'Fine-tuning'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Deployment',
        summary: 'Serving a model at a sensible cost.',
        topics: ['Export formats', 'Serving', 'Quantisation', 'Monitoring'],
        duration: '3 weeks',
        lessons: 12,
      },
    ],
    outcomes: [
      'Explain how a network trains',
      'Build CNNs for image tasks',
      'Apply transfer learning effectively',
      'Fine-tune transformer models',
      'Serve a trained model behind an API',
    ],
    tools: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'OpenCV', 'CUDA', 'ONNX'],
    roles: ['Deep Learning Engineer', 'Computer Vision Engineer', 'NLP Engineer', 'AI Researcher'],
    hiring: [
      'AI research and product teams',
      'Computer vision startups',
      'NLP and generative AI teams',
      'Remote and international contract work',
    ],
    nextSteps: ['Artificial Intelligence', 'MLOps', 'Edge deployment', 'Research methods'],
    industries: ['Healthcare imaging', 'Manufacturing QA', 'Autonomous systems', 'Language products'],
    salary: {
      role: 'Deep Learning Engineer',
      summary: 'Builds neural networks for vision, language and generative work.',
      starting: '₹4–7 LPA',
      after2: '₹9–18 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹4–7 LPA',
          after2: '₹9–18 LPA',
          scale: { fresher: 5.5, after2: 13.5 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹5.5–10 LPA',
          after2: '₹12.5–25 LPA',
          scale: { fresher: 7.7, after2: 18.9 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹6–11 LPA',
          after2: '₹14–28 LPA',
          scale: { fresher: 8.53, after2: 20.93 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Deep Learning?',
        a: 'Graduates move into Deep Learning Engineer, Computer Vision Engineer, NLP Engineer, AI Researcher and similar roles. Deep learning is the specialisation that separates an AI job application from the pile, and very few people in Punjab have actually trained a network end to end.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹33,000 – ₹58,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Image classifier',
        summary: 'A CNN trained with augmentation and transfer learning.',
        tech: ['PyTorch'],
        level: 'Advanced',
        skills: ['CNNs', 'Augmentation', 'Evaluation'],
      },
      {
        name: 'Fine-tuned language model',
        summary: 'A transformer fine-tuned on a domain dataset.',
        tech: ['Hugging Face'],
        level: 'Advanced',
        skills: ['Fine-tuning', 'Tokenisation', 'Metrics'],
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
        q: 'What is the duration of the Deep Learning course in Phagwara?',
        a: 'techcadd runs Deep Learning over 4 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Deep Learning course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Deep Learning course?',
        a: 'Graduate / Final-year. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Deep Learning course?',
        a: 'Graduates move into Deep Learning Engineer, Computer Vision Engineer, NLP Engineer, AI Researcher and similar roles. Deep learning is the specialisation that separates an AI job application from the pile, and very few people in Punjab have actually trained a network end to end.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Deep Learning Engineer roles start around ₹33,000 – ₹58,000 a month for a fresher with a working portfolio, rising to ₹9–18 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Deep Learning begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Deep Learning Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Deep Learning Engineer roles in Punjab start around ₹33,000 – ₹58,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'artificial-intelligence-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
      'python-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'power-bi-course-in-phagwara',
    ],
    keywords: [
      'deep learning course phagwara',
      'neural networks training in phagwara',
      'pytorch course in phagwara',
      'computer vision classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'data-science-course-in-phagwara',
    label: 'Data Science',
    title: 'Best Data Science Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    eligibility: 'Graduate / Final-year',
    summary: 'Statistics, Python and machine learning combined into the end-to-end data science workflow employers actually hire for.',
    overview: 'Five months across the data science workflow: framing a question, cleaning the data, modelling it honestly and presenting a result someone will act on.',
    demand: 'Data science pays well precisely because it needs statistics, code and business sense together — and most candidates arrive with only one of the three.',
    modules: [
      {
        title: 'Python & data handling',
        summary: 'The toolkit.',
        topics: ['Python', 'Pandas', 'NumPy', 'Notebooks'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Statistics',
        summary: 'Enough inference to avoid confident wrong answers.',
        topics: ['Distributions', 'Hypothesis testing', 'Confidence', 'Sampling'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Modelling',
        summary: 'Supervised methods and honest validation.',
        topics: ['Regression', 'Classification', 'Validation', 'Metrics'],
        duration: '5 weeks',
        lessons: 20,
      },
      {
        title: 'Communication',
        summary: 'The half that decides whether the work matters.',
        topics: ['Visualisation', 'Narrative', 'Dashboards', 'Presenting'],
        duration: '3 weeks',
        lessons: 12,
      },
    ],
    outcomes: [
      'Frame a business question as a data problem',
      'Clean and reshape messy datasets',
      'Apply statistics without over-claiming',
      'Build and validate predictive models',
      'Present findings so a decision follows',
    ],
    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'scikit-learn',
      'Matplotlib',
      'SQL',
      'Jupyter',
      'Power BI',
    ],
    roles: ['Data Scientist', 'Data Analyst', 'Research Analyst', 'Analytics Consultant'],
    hiring: [
      'Analytics consultancies',
      'Product and e-commerce companies',
      'Banking and insurance analytics',
      'Remote data contract work',
    ],
    nextSteps: ['Machine Learning', 'Artificial Intelligence', 'Data Analytics', 'Cloud & DevOps'],
    industries: ['Finance', 'Healthcare', 'Retail', 'Consulting'],
    salary: {
      role: 'Data Scientist',
      summary: 'Turns raw data into models and decisions a business will actually act on.',
      starting: '₹3.5–6.5 LPA',
      after2: '₹8–16 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹3.5–6.5 LPA',
          after2: '₹8–16 LPA',
          scale: { fresher: 5, after2: 12 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹5–9 LPA',
          after2: '₹11–22.5 LPA',
          scale: { fresher: 7, after2: 16.8 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹5.5–10 LPA',
          after2: '₹12.5–25 LPA',
          scale: { fresher: 7.75, after2: 18.6 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Data Science?',
        a: 'Graduates move into Data Scientist, Data Analyst, Research Analyst, Analytics Consultant and similar roles. Data science pays well precisely because it needs statistics, code and business sense together — and most candidates arrive with only one of the three.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹29,000 – ₹54,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'End-to-end analysis',
        summary: 'One question taken from raw data to a presented recommendation.',
        tech: ['Python', 'Pandas'],
        level: 'Advanced',
        skills: ['Framing', 'Analysis', 'Presenting'],
      },
      {
        name: 'Predictive model',
        summary: 'A validated model with explained drivers.',
        tech: ['scikit-learn'],
        level: 'Intermediate',
        skills: ['Modelling', 'Validation', 'Explainability'],
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
        q: 'What is the duration of the Data Science course in Phagwara?',
        a: 'techcadd runs Data Science over 6 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Data Science course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Data Science course?',
        a: 'Graduate / Final-year. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Data Science course?',
        a: 'Graduates move into Data Scientist, Data Analyst, Research Analyst, Analytics Consultant and similar roles. Data science pays well precisely because it needs statistics, code and business sense together — and most candidates arrive with only one of the three.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Data Scientist roles start around ₹29,000 – ₹54,000 a month for a fresher with a working portfolio, rising to ₹8–16 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Data Science begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Data Science Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Data Scientist roles in Punjab start around ₹29,000 – ₹54,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'data-analytics-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'power-bi-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'tableau-course-in-phagwara',
    ],
    keywords: [
      'data science course phagwara',
      'python data science training in phagwara',
      'statistics course in phagwara',
      'data scientist classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'data-analytics-course-in-phagwara',
    label: 'Data Analytics',
    title: 'Best Data Analytics Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Turn raw data into decisions — Excel, SQL and visualization tools used daily by working analysts.',
    overview: 'Five months turning raw data into decisions: statistics you genuinely use, SQL you can be tested on, and dashboards built to answer a specific business question rather than to look busy.',
    demand: 'Analytics is the most reachable well-paid role in the data field: SQL and a BI tool are enough to be hired, and both can be learned from scratch in months.',
    modules: [
      {
        title: 'Excel & analytical thinking',
        summary: 'Framing a question before touching a tool.',
        topics: ['Pivot tables', 'Lookup functions', 'Data hygiene', 'Framing an analysis'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'SQL',
        summary: 'Getting exactly the rows you need out of a real database.',
        topics: ['SELECT & filtering', 'Joins', 'Window functions', 'Query performance'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Python for analysis',
        summary: 'Pandas for the work spreadsheets cannot carry.',
        topics: ['Dataframes', 'Cleaning', 'Merging', 'Time series'],
        duration: '4 weeks',
        lessons: 16,
      },
      {
        title: 'Statistics that matter',
        summary: 'Enough inference to avoid confident wrong answers.',
        topics: ['Distributions', 'Hypothesis testing', 'A/B testing', 'Correlation vs causation'],
        duration: '3 weeks',
        lessons: 12,
      },
      {
        title: 'Power BI & Tableau',
        summary: 'Dashboards designed for the person who has to decide something.',
        topics: ['Data modelling', 'DAX basics', 'Visual design', 'Publishing & refresh'],
        duration: '4 weeks',
        lessons: 14,
      },
      {
        title: 'Capstone analysis',
        summary: 'One end-to-end analysis, presented and defended.',
        topics: ['Problem framing', 'Analysis', 'Storytelling', 'Presentation'],
        duration: '3 weeks',
        lessons: 10,
      },
    ],
    outcomes: [
      'Write SQL against a real schema with confidence',
      'Clean and reshape messy data in Pandas',
      'Choose the right chart for the question',
      'Run and interpret a basic experiment',
      'Build dashboards in Power BI and Tableau',
      'Present findings so a decision follows',
    ],
    tools: [
      'SQL',
      'MySQL',
      'Python',
      'Pandas',
      'NumPy',
      'Power BI',
      'Tableau',
      'Excel',
      'Git',
      'Jupyter',
    ],
    roles: [
      'Data Analyst',
      'Business Analyst',
      'BI Developer',
      'Reporting Analyst',
      'Analytics Consultant',
    ],
    hiring: [
      'Business intelligence teams',
      'E-commerce and retail analytics',
      'Finance and operations teams',
      'Consulting and reporting roles',
    ],
    nextSteps: [
      'Machine learning foundations',
      'Data engineering basics',
      'Advanced statistics',
      'Cloud data platforms',
    ],
    industries: ['Retail & e-commerce', 'Finance', 'Healthcare', 'Logistics'],
    salary: {
      role: 'Data Analyst',
      summary: 'Cleans, queries and visualises data so a team can see what is actually happening.',
      starting: '₹3–5 LPA',
      after2: '₹6–11 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹3–5 LPA',
          after2: '₹6–11 LPA',
          scale: { fresher: 3.9, after2: 8.5 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–15.5 LPA',
          scale: { fresher: 5.46, after2: 11.9 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4.5–8 LPA',
          after2: '₹9.5–17 LPA',
          scale: { fresher: 6.04, after2: 13.18 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Data Analytics?',
        a: 'Graduates move into Data Analyst, Business Analyst, BI Developer, Reporting Analyst and similar roles. Analytics is the most reachable well-paid role in the data field: SQL and a BI tool are enough to be hired, and both can be learned from scratch in months.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹23,000 – ₹42,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Sales analytics dashboard',
        summary: 'Revenue, cohorts and regional performance in one publishable dashboard.',
        tech: ['SQL', 'Power BI'],
        level: 'Intermediate',
        skills: ['Data modelling', 'Visual design', 'DAX'],
      },
      {
        name: 'Customer churn analysis',
        summary: 'Find who leaves, when, and which signals precede it.',
        tech: ['Python', 'Pandas', 'SQL'],
        level: 'Advanced',
        skills: ['Feature analysis', 'Segmentation', 'Reporting'],
      },
      {
        name: 'Pricing experiment review',
        summary: 'Read an A/B test properly and say what it does and does not prove.',
        tech: ['Python', 'Statistics'],
        level: 'Intermediate',
        skills: ['Hypothesis testing', 'Interpretation', 'Communication'],
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
        q: 'What is the duration of the Data Analytics course in Phagwara?',
        a: 'techcadd runs Data Analytics over 3 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Data Analytics course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Data Analytics course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Data Analytics course?',
        a: 'Graduates move into Data Analyst, Business Analyst, BI Developer, Reporting Analyst and similar roles. Analytics is the most reachable well-paid role in the data field: SQL and a BI tool are enough to be hired, and both can be learned from scratch in months.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Data Analyst roles start around ₹23,000 – ₹42,000 a month for a fresher with a working portfolio, rising to ₹6–11 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. It starts with Excel and analytical framing before SQL, so no prior coding is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Comfort with numbers and basic spreadsheets. Programming experience is helpful but not required.',
      },
    ],
    whyNow: {
      title: 'Data Analytics Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Data Analyst roles in Punjab start around ₹23,000 – ₹42,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'python-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'java-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'deep-learning-course-in-phagwara',
    ],
    keywords: [
      'data analytics course phagwara',
      'power bi training in phagwara',
      'sql course in phagwara',
      'data analyst training in phagwara',
    ],
  }),

  makeCourse({
    slug: 'power-bi-course-in-phagwara',
    label: 'Power BI',
    title: 'Best Power BI Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Microsoft\'s leading BI tool — connect, model and visualize data into dashboards that decision-makers actually use.',
    overview: 'Six weeks in Power BI: connecting and shaping with Power Query, modelling relationships, writing DAX and publishing dashboards that refresh.',
    demand: 'Power BI sits on almost every corporate desktop in India, which makes it the single fastest reporting skill to convert into a job offer.',
    modules: [
      {
        title: 'Connect & transform',
        summary: 'Power Query, and cleaning at the source.',
        topics: ['Connectors', 'Power Query', 'Cleaning', 'Merging'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Data modelling',
        summary: 'Relationships and star schemas.',
        topics: ['Relationships', 'Star schema', 'Date tables', 'Cardinality'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'DAX',
        summary: 'Measures that answer real questions.',
        topics: ['Calculated columns', 'Measures', 'CALCULATE', 'Time intelligence'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Dashboards & sharing',
        summary: 'Design, publish and refresh.',
        topics: ['Visual design', 'Bookmarks', 'Publishing', 'Scheduled refresh'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Clean and shape data in Power Query',
      'Build a sound star-schema model',
      'Write DAX measures with confidence',
      'Design dashboards for decisions',
      'Publish and schedule refreshes',
    ],
    tools: ['Power BI Desktop', 'Power Query', 'DAX', 'Power BI Service', 'Excel', 'SQL'],
    roles: ['BI Developer', 'Data Analyst', 'Reporting Analyst', 'Business Analyst'],
    hiring: [
      'Corporate reporting teams',
      'Finance and operations departments',
      'Consulting and audit firms',
      'Freelance dashboard projects',
    ],
    nextSteps: ['Tableau', 'Data Analytics', 'SQL in depth', 'Machine Learning'],
    industries: ['Finance', 'Retail', 'Manufacturing', 'Healthcare'],
    salary: {
      role: 'BI Analyst',
      summary: 'Builds the dashboards and data models a business runs its weekly decisions on.',
      starting: '₹2.5–4.5 LPA',
      after2: '₹5.5–10 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2.5–4.5 LPA',
          after2: '₹5.5–10 LPA',
          scale: { fresher: 3.55, after2: 7.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3.5–6.5 LPA',
          after2: '₹7.5–14 LPA',
          scale: { fresher: 4.97, after2: 10.85 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–15.5 LPA',
          scale: { fresher: 5.5, after2: 12.01 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Power BI?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Business Analyst and similar roles. Power BI sits on almost every corporate desktop in India, which makes it the single fastest reporting skill to convert into a job offer.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹22,000 – ₹38,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Executive sales dashboard',
        summary: 'A modelled, DAX-driven dashboard with scheduled refresh.',
        tech: ['Power BI', 'DAX'],
        level: 'Intermediate',
        skills: ['Modelling', 'DAX', 'Design'],
      },
      {
        name: 'Operations report',
        summary: 'Power Query cleaning feeding a daily operations view.',
        tech: ['Power Query'],
        level: 'Beginner',
        skills: ['Cleaning', 'Merging', 'Visuals'],
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
        q: 'What is the duration of the Power BI course in Phagwara?',
        a: 'techcadd runs Power BI over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Power BI course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Power BI course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Power BI course?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Business Analyst and similar roles. Power BI sits on almost every corporate desktop in India, which makes it the single fastest reporting skill to convert into a job offer.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'BI Analyst roles start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio, rising to ₹5.5–10 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. Power BI begins from fundamentals, and the pace is set so nothing is assumed.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Basic computer familiarity. Anything else the track needs is introduced in the first module.',
      },
    ],
    whyNow: {
      title: 'Power BI Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'BI Analyst roles in Punjab start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'tableau-course-in-phagwara',
      'data-analytics-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
    ],
    keywords: [
      'power bi course phagwara',
      'dax training in phagwara',
      'power query course in phagwara',
      'bi dashboard classes in phagwara',
    ],
  }),

  makeCourse({
    slug: 'tableau-course-in-phagwara',
    label: 'Tableau',
    title: 'Best Tableau Course & Training in Phagwara',
    category: 'ai-data',
    categoryTitle: 'AI & Data',
    icon: 'chart',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    eligibility: '12th Pass Onward',
    summary: 'Industry-standard visual analytics — build the kind of interactive dashboards used across BI and analyst roles.',
    overview: 'Six weeks turning data into decisions in Tableau: connecting and shaping sources, choosing the right visual, and publishing dashboards people return to.',
    demand: 'Tableau is what larger analytics teams and international clients standardise on, and it travels particularly well on remote briefs.',
    modules: [
      {
        title: 'Connecting & shaping data',
        summary: 'Getting clean, joined data into Tableau.',
        topics: ['Connections', 'Joins & blends', 'Extracts', 'Data prep'],
        duration: '1 week',
        lessons: 5,
      },
      {
        title: 'Core visualisations',
        summary: 'Choosing the chart the question deserves.',
        topics: ['Bar & line', 'Maps', 'Scatter', 'Chart choice'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Calculations & LOD',
        summary: 'Where Tableau gets genuinely powerful.',
        topics: ['Calculated fields', 'Table calcs', 'LOD expressions', 'Parameters'],
        duration: '2 weeks',
        lessons: 8,
      },
      {
        title: 'Dashboards & publishing',
        summary: 'Layout, interactivity and getting it in front of people.',
        topics: ['Actions', 'Filters', 'Layout', 'Tableau Public / Server'],
        duration: '1 week',
        lessons: 5,
      },
    ],
    outcomes: [
      'Connect, join and extract from real sources',
      'Choose the right chart for the question',
      'Write calculated fields and LOD expressions',
      'Build interactive dashboards with actions',
      'Publish and share dashboards that stay current',
    ],
    tools: ['Tableau Desktop', 'Tableau Public', 'SQL', 'Excel', 'Tableau Prep'],
    roles: ['BI Developer', 'Data Analyst', 'Reporting Analyst', 'Visualisation Specialist'],
    hiring: [
      'Analytics and BI teams',
      'Consulting firms',
      'Multinational reporting teams',
      'Freelance visualisation work',
    ],
    nextSteps: ['Power BI', 'Data Analytics', 'SQL in depth', 'Machine Learning'],
    industries: ['Retail', 'Finance', 'Healthcare', 'Logistics'],
    salary: {
      role: 'Data Visualisation Analyst',
      summary: 'Turns messy datasets into dashboards an executive can read in ten seconds.',
      starting: '₹2.5–4.5 LPA',
      after2: '₹5.5–10 LPA',
      markets: [
        {
          name: 'Punjab / Tricity',
          fresher: '₹2.5–4.5 LPA',
          after2: '₹5.5–10 LPA',
          scale: { fresher: 3.55, after2: 7.75 },
        },
        {
          name: 'Delhi NCR',
          fresher: '₹3.5–6.5 LPA',
          after2: '₹7.5–14 LPA',
          scale: { fresher: 4.97, after2: 10.85 },
        },
        {
          name: 'Remote / Freelance',
          fresher: '₹4–7 LPA',
          after2: '₹8.5–15.5 LPA',
          scale: { fresher: 5.5, after2: 12.01 },
        },
      ],
    },
    careerFaqs: [
      {
        q: 'What job roles open up after Tableau?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Visualisation Specialist and similar roles. Tableau is what larger analytics teams and international clients standardise on, and it travels particularly well on remote briefs.',
      },
      {
        q: 'What can I earn, and how fast does it grow?',
        a: 'A fresher with a working portfolio starts around ₹22,000 – ₹38,000 a month in the Phagwara market. With two years of delivery experience that typically doubles, and specialists who keep learning move well beyond it.',
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
        name: 'Sales performance dashboard',
        summary: 'Revenue, region and cohort views in one publishable dashboard.',
        tech: ['Tableau', 'SQL'],
        level: 'Intermediate',
        skills: ['Data modelling', 'LOD', 'Layout'],
      },
      {
        name: 'Operations KPI board',
        summary: 'A live-refreshing board built for a daily stand-up.',
        tech: ['Tableau Prep', 'Tableau'],
        level: 'Beginner',
        skills: ['Data prep', 'Chart choice', 'Publishing'],
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
        q: 'What is the duration of the Tableau course in Phagwara?',
        a: 'techcadd runs Tableau over 2 months depending on the track you choose. Weekday, evening and weekend batches cover the same syllabus, and 1-on-1 training is available if you would rather set your own pace. Every class runs for 2 hours, whichever format you choose.',
      },
      {
        q: 'What is the fee for the Tableau course in Phagwara?',
        a: 'Fees depend on the batch format and whether you take the course on its own or as part of a longer track. EMI options are available. Call the centre or book a free demo and a counsellor will give you the exact figure for the format you want.',
      },
      {
        q: 'Who can join the Tableau course?',
        a: '12th Pass Onward. The first modules start from fundamentals, so no prior experience is assumed.',
      },
      {
        q: 'What jobs can I get after the Tableau course?',
        a: 'Graduates move into BI Developer, Data Analyst, Reporting Analyst, Visualisation Specialist and similar roles. Tableau is what larger analytics teams and international clients standardise on, and it travels particularly well on remote briefs.',
      },
      {
        q: 'What salary can a fresher expect after this course in Phagwara?',
        a: 'Data Visualisation Analyst roles start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio, rising to ₹5.5–10 LPA with two years of delivery experience. Specialists move beyond that.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'Yes. It starts from connecting a spreadsheet and assumes no prior BI experience.',
      },
      {
        q: 'What are the prerequisites?',
        a: 'Comfort with spreadsheets. SQL helps but is introduced where it is needed.',
      },
    ],
    whyNow: {
      title: 'Tableau Is Powering the Next Generation of Industry Leaders',
      points: [
        'Live client work from week one, supervised by a trainer, not slides, not simulations.',
        'Data Visualisation Analyst roles in Punjab start around ₹22,000 – ₹38,000 a month for a fresher with a working portfolio.',
      ],
    },
    relatedCourses: [
      'data-analytics-course-in-phagwara',
      'machine-learning-course-in-phagwara',
      'artificial-intelligence-course-in-phagwara',
      'digital-marketing-course-in-phagwara',
      'deep-learning-course-in-phagwara',
      'data-science-course-in-phagwara',
    ],
    keywords: [
      'tableau course phagwara',
      'tableau training in phagwara',
      'data visualisation course in phagwara',
      'bi dashboard course in phagwara',
    ],
  }),
]
