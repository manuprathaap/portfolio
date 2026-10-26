import React, { useState, useEffect, useRef } from 'react';

/* ==========================================================================
   EDITABLE DATA ARRAYS (ALL CONTENT SOURCED DIRECTLY FROM CV)
   Update or edit your personal profile, experience, projects, and skills here.
   ========================================================================== */

export const PERSONAL_INFO = {
  name: 'MANU PRATHAP',
  roleLine: 'Angular Developer | Full-Stack Engineer | React.js & Next.js | AI/ML | Generative AI & Agentic AI',
  location: 'Bangalore, India',
  phone: '+91 7025405061',
  email: 'manuprathapkarimbil@gmail.com',
  linkedin: 'https://linkedin.com/in/manuuprathaap',
  github: 'https://github.com/manuprathaap',
  availability: 'Available for full-time & senior roles • Bangalore, India',
  
  // 2-3 sentence intro directly from CV
  introSentences: [
    'Angular & Full-Stack Developer with 3+ years of experience engineering scalable, high-performance web applications across Angular and React/Next.js ecosystems.',
    'Proficient in architecting responsive UIs, state management (NgRx, RxJS), and robust backends using Node.js, Express, and FastAPI.',
    'Actively expanding into Generative and Agentic AI, integrating LLM workflows, RAG pipelines, and AI agents with modern web architectures to build end-to-end intelligent products.'
  ],
  
  // Sentence for the pinned story section whose words illuminate as you scroll
  pinnedStory: 'Engineering scalable, high-performance web architectures while bridging modern frontend craft with intelligent Generative & Agentic AI systems.'
};

export const STATS_DATA = [
  {
    target: 3,
    suffix: '+',
    label: 'Years of Experience',
    desc: 'Engineering scalable web apps across Angular & React/Next.js ecosystems.'
  },
  {
    target: 94,
    suffix: '/100',
    label: 'Lighthouse Score',
    desc: 'Boosted from 62 on production SPAs with SSR and PWA deployment.'
  },
  {
    target: 40,
    suffix: '%',
    label: 'Faster Load Time',
    desc: 'Reduced page load time & cut bundle size by 35% with lazy loading and OnPush.'
  },
  {
    target: 60,
    suffix: '%',
    label: 'Fewer API Bugs',
    desc: 'Achieved via centralized HttpClient Interceptors for token auth & error handling.'
  }
];

export const FEATURED_TOOLS = [
  { name: 'Angular', role: 'v8 – 21, Signals, Standalone', iconType: 'angular' },
  { name: 'React.js', role: 'Modern Hooks, Ecosystem', iconType: 'react' },
  { name: 'Next.js', role: 'SSR, App Router, Hybrid', iconType: 'nextjs' },
  { name: 'TypeScript', role: 'Strict Typing, Interfaces', iconType: 'typescript' },
  { name: 'Node.js', role: 'Express, REST, APIs', iconType: 'nodejs' },
  { name: 'Python', role: 'FastAPI, Data Science', iconType: 'python' },
  { name: 'Firebase', role: 'Firestore, Auth, PWA', iconType: 'firebase' },
  { name: 'RxJS / NgRx', role: 'Reactive State & Observables', iconType: 'rxjs' }
];

export const TOOLBOX_CATEGORIES = [
  {
    category: 'Frontend',
    icon: 'frontend',
    skills: [
      'Angular 8–21',
      'Standalone Components',
      'Signals',
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3/SCSS'
    ]
  },
  {
    category: 'UI & State Management',
    icon: 'state',
    skills: [
      'Angular Material',
      'PrimeNG',
      'Bootstrap',
      'RxJS',
      'NgRx',
      'BehaviorSubject',
      'Observables',
      'Reactive Programming'
    ]
  },
  {
    category: 'Performance & Architecture',
    icon: 'perf',
    skills: [
      'Lazy Loading',
      'OnPush Change Detection',
      'Code Splitting',
      'Virtual Scrolling',
      'SSR (Server-Side Rendering)',
      'PWA (Progressive Web Apps)',
      'Bundle Optimization'
    ]
  },
  {
    category: 'Backend & APIs',
    icon: 'backend',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'Django',
      'REST APIs',
      'GraphQL',
      'WebSockets',
      'HTTP Interceptors',
      'Microservices'
    ]
  },
  {
    category: 'Databases & Cloud',
    icon: 'cloud',
    skills: [
      'MySQL',
      'MongoDB',
      'Firebase Auth',
      'Firestore',
      'Firebase Hosting',
      'AWS EC2',
      'AWS S3',
      'Docker'
    ]
  },
  {
    category: 'AI / Machine Learning',
    icon: 'aiml',
    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'scikit-learn',
      'EDA',
      'Classification',
      'Regression',
      'Model Evaluation',
      'Streamlit'
    ]
  },
  {
    category: 'Generative AI & Agentic AI',
    icon: 'genai',
    skills: [
      'LLMs',
      'Prompt Engineering',
      'RAG Pipelines',
      'LangChain',
      'LangGraph',
      'Vector Databases',
      'PyTorch',
      'AI Agents',
      'Agent Workflows',
      'LLM-based Application Development'
    ]
  },
  {
    category: 'Testing & Tools',
    icon: 'tools',
    skills: [
      'Jasmine',
      'Karma',
      'Jest',
      'Cypress',
      'Unit Testing',
      'E2E Testing',
      'Git',
      'GitHub',
      'CI/CD',
      'Jira',
      'Agile/Scrum',
      'Webpack',
      'Angular CLI'
    ]
  }
];

export const ENTERPRISE_ROLES = [
  {
    role: 'Senior Angular Developer',
    company: 'ElkanIO Research Labs',
    location: 'Kochi, India',
    period: 'Dec 2023 – Dec 2025',
    bullets: [
      'Architected and deployed 3 production Angular SPAs with SSR and PWA capabilities, improving Lighthouse performance scores from 62 to 94 and supporting SEO improvements.',
      'Reduced initial page load time by 40% and bundle size by 35% through Lazy Loading, OnPush Change Detection, Code Splitting, and modular component architecture.',
      'Designed a centralized REST API integration layer using Angular HttpClient Interceptors for token authentication, error handling, and request/response transformation, reducing API-related bugs by 60%.',
      'Built scalable state-management solutions using NgRx, RxJS, and Signals, establishing reusable Standalone Component patterns that accelerated feature delivery by 25%, code review standards, and performance optimization.'
    ]
  },
  {
    role: 'Angular Developer',
    company: 'Exouzia',
    location: 'Palakkad, India',
    period: 'Jan 2023 – Dec 2023',
    bullets: [
      'Developed reusable UI components and feature modules using Angular, TypeScript, and Standalone Components, focusing on scalable component-driven architecture.',
      'Integrated RESTful APIs and third-party plugins to support application communication and real-time data synchronization.',
      'Maintained responsive, cross-browser compatible interfaces using Angular Material and PrimeNG with attention to performance and code quality.'
    ]
  }
];

export const PERSONAL_PROJECTS = [
  {
    id: 'ihub-24',
    title: 'iHub-24 – Restaurant POS System',
    type: 'Full-Stack & Frontend',
    headerTheme: 'red',
    stack: ['Angular 19', 'Firebase', 'NgRx', 'Python', 'MySQL'],
    bullets: [
      'Built a real-time POS system with zero-refresh order updates using Firebase Firestore listeners and RxJS Observables.',
      'Delivered role-specific cashier, kitchen, and admin dashboards with live order tracking and offline-first PWA capabilities.',
      'Handled full SDLC from architecture through deployment, including Firebase Authentication and Firestore security rules.'
    ],
    demoUrl: null, // Placeholder: add your deployed demo link
    repoUrl: null  // Placeholder: add your project repository link
  },
  {
    id: 'tripxoxo',
    title: 'TripXOXO – Digital Travel Platform',
    type: 'Full-Stack & Frontend',
    headerTheme: 'red',
    stack: ['Angular 16', 'RxJS', 'REST API', 'Agile'],
    bullets: [
      'Engineered a dynamic drag-and-drop form builder with reusable pipes and directives.',
      'Implemented REST API consumption with HttpClient Interceptors for authentication and centralized error handling.'
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 'bookotrip',
    title: 'BookOTrip – Travel Booking Platform',
    type: 'Full-Stack & Frontend',
    headerTheme: 'red',
    stack: ['Angular 16', 'REST API', 'MySQL'],
    bullets: [
      'Developed admin and user modules for domestic/international flight and hotel booking with responsive UI.',
      'Implemented real-time booking workflows with reactive state management and REST API integration.'
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 'stamp-passport',
    title: 'Stamp the Passport – Visa Application Portal',
    type: 'Full-Stack & Frontend',
    headerTheme: 'red',
    stack: ['Angular 16', 'Signzy API', 'Reactive Forms'],
    bullets: [
      'Designed dynamic country-specific visa questionnaires and document-upload workflows with Signzy API integration.',
      'Built scalable form architecture with custom validators, reducing manual review time by 30%.'
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 'bank-customer-prediction',
    title: 'Bank Customer Subscription Prediction',
    type: 'AI / Machine Learning',
    headerTheme: 'dark',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    bullets: [
      'Built and deployed a classification model predicting customer term-deposit subscription likelihood.',
      'Engineered exploratory data analysis (EDA), feature encoding, and interactive Streamlit web dashboard.'
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 'customer-purchase-prediction',
    title: 'Customer Purchase Prediction',
    type: 'AI / Machine Learning',
    headerTheme: 'dark',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    bullets: [
      'Built and deployed a predictive model predicting customer purchase behavior from historical data.',
      'Evaluated precision, recall, and ROC-AUC metrics for real-time inference.'
    ],
    demoUrl: null,
    repoUrl: null
  },
  {
    id: 'marketing-sales-prediction',
    title: 'Marketing & Sales Prediction',
    type: 'AI / Machine Learning',
    headerTheme: 'dark',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    bullets: [
      'Built and deployed a machine learning model analyzing marketing campaign data to forecast sales outcomes.',
      'Implemented feature selection and regression evaluation metrics with visual UI.'
    ],
    demoUrl: null,
    repoUrl: null
  }
];

export const AI_UPSKILLING_PILLARS = [
  {
    title: 'LLMs & RAG Pipelines',
    desc: 'Developing practical knowledge of Large Language Models (LLMs), prompt engineering, Retrieval-Augmented Generation (RAG), vector embeddings, and vector databases.',
    tags: ['LLMs', 'Prompt Engineering', 'RAG', 'Vector DBs']
  },
  {
    title: 'LangChain & LangGraph',
    desc: 'Learning LangChain and LangGraph for building LLM-powered applications, multi-actor state machines, and resilient agent workflows.',
    tags: ['LangChain', 'LangGraph', 'Agent Workflows']
  },
  {
    title: 'Agentic AI & Tool Calling',
    desc: 'Developing knowledge of autonomous AI agents, tool calling protocols, multi-step planning, reflection, and Agentic AI application patterns.',
    tags: ['AI Agents', 'Tool Calling', 'Autonomous Execution']
  },
  {
    title: 'Intelligent Full-Stack Integration',
    desc: 'Exploring how to integrate GenAI & LLM capabilities seamlessly with Python, FastAPI backends, and modern reactive frontend architectures.',
    tags: ['FastAPI', 'Python', 'React / Angular', 'WebSockets']
  }
];

export const EDUCATION_DATA = [
  {
    degree: 'B.Tech – Computer Science Engineering',
    institution: 'APJ Abdul Kalam Technological University, Royal College of Engineering, Thrissur, Kerala',
    period: '2019 – 2022',
    type: 'degree'
  },
  {
    degree: 'Diploma – Computer Engineering',
    institution: 'Govt. Polytechnic College Kunnamkulam, Kerala',
    period: '2016 – 2019',
    type: 'degree'
  }
];

export const CERTIFICATIONS_DATA = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    institution: 'Evarcity Learning, Bangalore',
    status: 'Completed 2026',
    topics: 'Python, NumPy, Pandas, scikit-learn, Classification, Regression, Model Evaluation, Streamlit'
  },
  {
    title: 'Generative AI & Agentic AI',
    institution: 'Evarcity Learning, Bangalore',
    status: 'In Progress 2026',
    topics: 'LLM Fundamentals, Prompt Engineering, RAG Pipelines, AI Agent Development, LangChain & LangGraph'
  }
];

/* ==========================================================================
   INLINE SVG ICON HELPERS (High Performance, No External CDN Dependencies)
   ========================================================================== */

function TechIcon({ type }) {
  switch (type) {
    case 'angular':
      return (
        <svg viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
          <path d="M125,52.1L66.8,182.6H89.2L100.9,153.4H125H149.1L160.8,182.6H183.2L125,52.1ZM141,134.8H125H109L125,96.5L141,134.8Z" fill="#FAF5EA" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#paint0_linear_next)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
          <defs>
            <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 63.5v-62h125v125h-125v-63z" fill="#3178C6" />
          <path d="M72.1 76.9c1.9 3.2 4.6 5.8 8.1 7.7 3.5 1.9 7.6 2.9 12.3 2.9 4.1 0 7.6-.7 10.5-2.2 2.9-1.5 5.1-3.5 6.6-6.1 1.5-2.6 2.3-5.6 2.3-9 0-3.3-.8-6.1-2.4-8.5-1.6-2.4-3.9-4.5-6.8-6.1-3-1.6-7-3.1-12.1-4.6-5.8-1.7-10.3-3.4-13.6-5.1-3.3-1.7-5.8-3.9-7.5-6.6-1.7-2.7-2.5-6.1-2.5-10.2 0-4.6 1.2-8.7 3.7-12.3 2.5-3.6 6-6.4 10.6-8.4 4.6-2 10.1-3 16.5-3 6.3 0 11.9 1.1 16.6 3.4 4.8 2.3 8.4 5.5 11 9.8l-12.6 8.1c-1.7-2.7-4-4.7-6.8-6.1-2.8-1.4-6-2.1-9.6-2.1-3.8 0-6.9.7-9.4 2-2.5 1.3-4.3 3.1-5.4 5.3-1.1 2.2-1.7 4.7-1.7 7.4 0 2.9.7 5.3 2.1 7.3 1.4 2 3.4 3.6 6.1 4.9 2.7 1.3 6.4 2.6 11.1 3.9 6.2 1.8 11.1 3.6 14.8 5.4 3.7 1.8 6.5 4.2 8.4 7.2 1.9 3 2.9 6.8 2.9 11.3 0 5-1.3 9.4-4 13.3-2.7 3.9-6.5 7-11.4 9.2-4.9 2.2-10.8 3.3-17.7 3.3-8.2 0-15.3-1.5-21.3-4.5-6-3-10.4-7.4-13.2-13.2l13-8.2zm-49.8-39.7h41.7v12.8h-13.8v64.6h-14.1v-64.6h-13.8v-12.8z" fill="#FAF5EA" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 4.7L9.5 36.2v63L64 130.8l54.5-31.5v-63L64 4.7z" fill="#539E43" />
          <path d="M64 117.8L20.8 92.9V42.6L64 17.6l43.2 25v50.2L64 117.8z" fill="#FAF5EA" />
          <path d="M64 28.5L30.2 48.1v39.1L64 106.8l33.8-19.5V48.1L64 28.5z" fill="#333333" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.2 2.1c-14.6 0-23.7 6.4-23.7 18.7v13.7h24.4v3.4H28.2c-12.6 0-23.7 7.6-23.7 22.1 0 14.2 9.9 22.8 22.6 22.8h7.4v-11.3c0-7.7 6.6-14.3 14.3-14.3h24.4c6.8 0 12.3-5.5 12.3-12.3V20.8c0-12.3-9.9-18.7-22.3-18.7zm-7.6 7.4c2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5z" fill="#3776AB" />
          <path d="M64.8 125.9c14.6 0 23.7-6.4 23.7-18.7V93.5H64.1v-3.4h35.7c12.6 0 23.7-7.6 23.7-22.1 0-14.2-9.9-22.8-22.6-22.8h-7.4v11.3c0 7.7-6.6 14.3-14.3 14.3H54.8c-6.8 0-12.3 5.5-12.3 12.3v24.1c0 12.3 9.9 18.7 22.3 18.7zm7.6-7.4c-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5 2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5z" fill="#FFD43B" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.4 97.4L3.6 67.2c-1.3-2.5-.3-5.6 2.2-6.9 1.1-.6 2.4-.7 3.6-.3l10 37.4z" fill="#FFA000" />
          <path d="M19.4 97.4L64 123.1 9.4 97.4z" fill="#F57C00" />
          <path d="M64 123.1l44.6-25.7L94.2 46.1c-.8-2.7-3.7-4.2-6.4-3.4-1.2.4-2.2 1.2-2.7 2.3L64 90.7 44.5 53.6c-1.3-2.5-.3-5.6 2.2-6.9 1.1-.6 2.4-.7 3.6-.3l13.7 51z" fill="#FFCA28" />
          <path d="M108.6 97.4L64 123.1l44.6-25.7z" fill="#FFA000" />
        </svg>
      );
    case 'rxjs':
      return (
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <circle cx="64" cy="64" r="60" fill="#D81B60" />
          <path d="M42 36h28c11 0 18 6 18 16 0 8-5 13-12 15l15 25H77L64 69H54v23H42V36zm12 23h15c5 0 8-3 8-7s-3-7-8-7H54v14z" fill="#FAF5EA" />
        </svg>
      );
    default:
      return null;
  }
}

function CategoryIcon({ type }) {
  switch (type) {
    case 'frontend':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    case 'state':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
        </svg>
      );
    case 'perf':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      );
    case 'backend':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      );
    case 'cloud':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      );
    case 'aiml':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      );
    case 'genai':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      );
    case 'tools':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      );
    default:
      return null;
  }
}

/* ==========================================================================
   APP COMPONENT & SCROLL ENGINE HOOKS
   ========================================================================== */

export default function App() {
  // Navigation & Interactive States
  const [activeWorkTab, setActiveWorkTab] = useState('enterprise'); // 'enterprise' | 'personal'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll Progress State
  const [scrollProgress, setScrollProgress] = useState(0);
  const [litWordCount, setLitWordCount] = useState(0);
  
  // Stat animated counters state
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const [statCounts, setStatCounts] = useState([0, 0, 0, 0]);

  // Refs for scroll observation & carousel
  const storyRef = useRef(null);
  const statsSectionRef = useRef(null);
  const carouselRef = useRef(null);

  // Words array for Pinned Story Section
  const storyWords = PERSONAL_INFO.pinnedStory.split(' ');

  /* --------------------------------------------------------------------------
     Scroll Engine: Single requestAnimationFrame update loop
     Sets CSS variable --p from 0 to 1 on registered elements
     Calculates story illumination and top scroll progress bar
     -------------------------------------------------------------------------- */
  useEffect(() => {
    let animationFrameId;
    let ticking = false;

    const checkReducedMotion = () => {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    const updateScrollMetrics = () => {
      const reducedMotion = checkReducedMotion();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // 1. Overall Page Progress (0 to 100%)
      const progress = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      setScrollProgress(progress);

      // 2. Story Word Illumination
      if (storyRef.current) {
        if (reducedMotion) {
          setLitWordCount(storyWords.length);
        } else {
          const rect = storyRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Calculate visibility ratio of story section across window
          const storyProgress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height * 0.4)));
          const activeWords = Math.floor(storyProgress * storyWords.length);
          setLitWordCount(activeWords);
        }
      }

      // 3. Stats Strip Count-Up Trigger
      if (statsSectionRef.current && !hasAnimatedStats) {
        const statsRect = statsSectionRef.current.getBoundingClientRect();
        if (statsRect.top < window.innerHeight * 0.85 && statsRect.bottom > 0) {
          setHasAnimatedStats(true);
          triggerStatsCounter(reducedMotion);
        }
      }

      // 4. Reveal Elements with CSS Variable --p
      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((el) => {
        if (reducedMotion) {
          el.style.setProperty('--p', '1');
        } else {
          const r = el.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight * 0.75)));
          el.style.setProperty('--p', p.toFixed(3));
        }
      });

      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        animationFrameId = window.requestAnimationFrame(updateScrollMetrics);
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    
    // Initial run
    updateScrollMetrics();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [hasAnimatedStats, storyWords.length]);

  // Smooth Count-Up Animation for Stats
  const triggerStatsCounter = (reducedMotion) => {
    if (reducedMotion) {
      setStatCounts(STATS_DATA.map((item) => item.target));
      return;
    }

    const duration = 1600; // ms
    const startTime = performance.now();

    const frame = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setStatCounts(
        STATS_DATA.map((item) => Math.round(item.target * easeProgress))
      );

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setStatCounts(STATS_DATA.map((item) => item.target));
      }
    };

    requestAnimationFrame(frame);
  };

  // Clipboard Copy Handler
  const handleCopy = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2200);
      });
    }
  };

  // Carousel Scroll Navigation
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="portfolio-app">
      {/* ----------------------------------------------------------------------
          TOP SCROLL PROGRESS INDICATOR
          ---------------------------------------------------------------------- */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* ----------------------------------------------------------------------
          STICKY TOP NAVIGATION
          ---------------------------------------------------------------------- */}
      <nav className="site-nav" aria-label="Main Navigation">
        <div className="nav-inner">
          <a href="#" className="nav-brand" aria-label="Manu Prathap Home">
            <div className="brand-badge">MP</div>
            <span className="brand-name">{PERSONAL_INFO.name}</span>
          </a>

          <ul className="nav-links">
            <li><a href="#stats" className="nav-link">Overview</a></li>
            <li><a href="#tools" className="nav-link">Toolbox</a></li>
            <li><a href="#work" className="nav-link">Work & Projects</a></li>
            <li><a href="#ai-learning" className="nav-link">AI & Agentic</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="nav-cta-btn">
              Hire me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <button
              className="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer" role="menu">
            <a href="#stats" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Overview</a>
            <a href="#tools" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Toolbox</a>
            <a href="#work" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Work & Projects</a>
            <a href="#ai-learning" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>AI & Agentic</a>
            <a href="#education" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Education</a>
            <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* ----------------------------------------------------------------------
          SECTION 1: HERO BANNER (Standard, No Animation)
          ---------------------------------------------------------------------- */}
      <header className="hero-section" id="hero">
        <div className="hero-grid">
          {/* Left Column: Bio & Core Pitch */}
          <div className="hero-content">
            <div className="availability-pill">
              <span className="status-dot"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <h1 className="hero-name">{PERSONAL_INFO.name}</h1>
            <p className="hero-headline">{PERSONAL_INFO.roleLine}</p>

            <div className="hero-summary">
              <p style={{ marginBottom: '10px' }}>{PERSONAL_INFO.introSentences[0]}</p>
              <p style={{ marginBottom: '10px' }}>{PERSONAL_INFO.introSentences[1]}</p>
              <p>{PERSONAL_INFO.introSentences[2]}</p>
            </div>

            <div className="hero-cta-group">
              <a href="#work" className="btn-primary">
                See my work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </div>

            {/* Row of Tech Icons */}
            <div className="hero-tech-strip">
              <div className="tech-strip-label">Core Engineering Stack</div>
              <div className="tech-icons-row">
                <span className="tech-pill-badge">
                  <TechIcon type="angular" />
                  Angular 8–21
                </span>
                <span className="tech-pill-badge">
                  <TechIcon type="react" />
                  React.js
                </span>
                <span className="tech-pill-badge">
                  <TechIcon type="nextjs" />
                  Next.js
                </span>
                <span className="tech-pill-badge">
                  <TechIcon type="typescript" />
                  TypeScript
                </span>
                <span className="tech-pill-badge">
                  <TechIcon type="nodejs" />
                  Node.js
                </span>
                <span className="tech-pill-badge">
                  <TechIcon type="python" />
                  Python
                </span>
                <span className="tech-pill-badge">
                  <TechIcon type="rxjs" />
                  RxJS & NgRx
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Code-Style Summary Card */}
          <div className="hero-code-card" aria-label="Developer summary code component">
            <div className="code-card-header">
              <div className="code-dots">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <span className="code-filename">ManuPrathap.profile.ts</span>
            </div>

            <div className="code-card-body">
              <div className="code-line">
                <span className="code-num">01</span>
                <span className="code-text"><span className="token-kw">interface</span> <span className="token-type">EngineerProfile</span> &#123;</span>
              </div>
              <div className="code-line">
                <span className="code-num">02</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">name</span>: <span className="token-type">string</span>;</span>
              </div>
              <div className="code-line">
                <span className="code-num">03</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">experience</span>: <span className="token-type">string</span>;</span>
              </div>
              <div className="code-line">
                <span className="code-num">04</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">focus</span>: <span className="token-type">string</span>[];</span>
              </div>
              <div className="code-line">
                <span className="code-num">05</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">performanceMetrics</span>: &#123; <span className="token-prop">lighthouse</span>: <span className="token-type">number</span>; <span className="token-prop">loadReduction</span>: <span className="token-type">string</span> &#125;;</span>
              </div>
              <div className="code-line">
                <span className="code-num">06</span>
                <span className="code-text">&#125;</span>
              </div>
              <div className="code-line">
                <span className="code-num">07</span>
                <span className="code-text"></span>
              </div>
              <div className="code-line">
                <span className="code-num">08</span>
                <span className="code-text"><span className="token-kw">export const</span> <span className="token-prop">manu</span>: <span className="token-type">EngineerProfile</span> = &#123;</span>
              </div>
              <div className="code-line">
                <span className="code-num">09</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">name</span>: <span className="token-str">"Manu Prathap"</span>,</span>
              </div>
              <div className="code-line">
                <span className="code-num">10</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">experience</span>: <span className="token-str">"3+ years production"</span>,</span>
              </div>
              <div className="code-line">
                <span className="code-num">11</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">focus</span>: [<span className="token-str">"Angular SPAs"</span>, <span className="token-str">"React/Next.js"</span>, <span className="token-str">"Agentic AI"</span>],</span>
              </div>
              <div className="code-line">
                <span className="code-num">12</span>
                <span className="code-text">&nbsp;&nbsp;<span className="token-prop">performanceMetrics</span>: &#123;</span>
              </div>
              <div className="code-line">
                <span className="code-num">13</span>
                <span className="code-text">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-prop">lighthouse</span>: <span className="token-num">94</span>, <span className="token-comment">// from 62</span></span>
              </div>
              <div className="code-line">
                <span className="code-num">14</span>
                <span className="code-text">&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-prop">loadReduction</span>: <span className="token-str">"-40%"</span></span>
              </div>
              <div className="code-line">
                <span className="code-num">15</span>
                <span className="code-text">&nbsp;&nbsp;&#125;</span>
              </div>
              <div className="code-line">
                <span className="code-num">16</span>
                <span className="code-text">&#125;;</span>
              </div>
            </div>

            <div className="code-card-footer">
              <span className="status-indicator">
                <span className="status-dot"></span>
                <span>Production Ready</span>
              </span>
              {/* <span>Bangalore, IN</span> */}
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------------------------
          PINNED STORY SECTION: Words light up as user scrolls
          ---------------------------------------------------------------------- */}
      <section className="story-wrapper" ref={storyRef} aria-label="Statement story quote">
        <div className="story-inner">
          <div className="story-quote-mark" aria-hidden="true">“</div>
          <p className="story-sentence">
            {storyWords.map((word, idx) => {
              const isLit = idx < litWordCount;
              const isRedAccent = word.toLowerCase().includes('generative') || word.toLowerCase().includes('agentic');
              return (
                <span
                  key={idx}
                  className={`story-word ${isLit ? 'lit' : ''} ${isLit && isRedAccent ? 'highlight-red' : ''}`}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 2: STATS STRIP (Big numbers taken from CV, counting up)
          ---------------------------------------------------------------------- */}
      <section className="stats-section scroll-reveal" id="stats" ref={statsSectionRef}>
        <div className="stats-grid">
          {STATS_DATA.map((item, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-number-wrap">
                <span>{statCounts[idx]}</span>
                <span>{item.suffix}</span>
              </div>
              <h3 className="stat-label">{item.label}</h3>
              <p className="stat-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 3: TOOLS & TOOLBOX
          ---------------------------------------------------------------------- */}
      <section className="tools-section scroll-reveal" id="tools">
        <div className="tools-header">
          <div className="section-label">Engineering Capabilities</div>
          <h2 className="section-title">Tools & Technical Toolbox</h2>
          <p className="section-subtitle">
            A comprehensive overview of frameworks, languages, architectures, and AI libraries verified across production systems.
          </p>
        </div>

        {/* Large Highlighted Tool Tiles */}
        <div className="featured-tools-grid">
          {FEATURED_TOOLS.map((tool, idx) => (
            <div className="featured-tool-card" key={idx}>
              <div className="featured-tool-icon">
                <TechIcon type={tool.iconType} />
              </div>
              <div className="featured-tool-name">{tool.name}</div>
              <div className="featured-tool-role">{tool.role}</div>
            </div>
          ))}
        </div>

        {/* Full Toolbox with Grouped Chips */}
        <div className="toolbox-categories">
          {TOOLBOX_CATEGORIES.map((cat, idx) => (
            <div className="toolbox-category-card" key={idx}>
              <div className="category-header">
                <div className="category-icon-wrap">
                  <CategoryIcon type={cat.icon} />
                </div>
                <h3 className="category-title">{cat.category}</h3>
              </div>
              <div className="chips-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <span className="tool-chip" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 4: WORK (Enterprise & Personal Tabs)
          ---------------------------------------------------------------------- */}
      <section className="work-section scroll-reveal" id="work">
        <div className="work-header-wrap">
          <div>
            <div className="section-label">Proven Experience</div>
            <h2 className="section-title">Professional Work & Projects</h2>
            <p className="section-subtitle">
              Production roles delivering enterprise single page applications, along with full-stack and AI/ML applications.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="work-tab-toggle" role="tablist" aria-label="Work experience filter">
            <button
              role="tab"
              aria-selected={activeWorkTab === 'enterprise'}
              className={`tab-btn ${activeWorkTab === 'enterprise' ? 'active' : ''}`}
              onClick={() => setActiveWorkTab('enterprise')}
            >
              Enterprise Roles ({ENTERPRISE_ROLES.length})
            </button>
            <button
              role="tab"
              aria-selected={activeWorkTab === 'personal'}
              className={`tab-btn ${activeWorkTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveWorkTab('personal')}
            >
              Key Projects ({PERSONAL_PROJECTS.length})
            </button>
          </div>
        </div>

        {/* TAB 1: Enterprise Roles Timeline */}
        {activeWorkTab === 'enterprise' && (
          <div className="timeline-list">
            {ENTERPRISE_ROLES.map((role, idx) => (
              <article className="timeline-card" key={idx}>
                <div className="timeline-top">
                  <div>
                    <h3 className="role-title">{role.role}</h3>
                    <div className="company-meta">
                      <span>{role.company}</span>
                      <span>•</span>
                      <span className="company-location">{role.location}</span>
                    </div>
                  </div>
                  <span className="timeline-date-badge">{role.period}</span>
                </div>

                <ul className="bullet-list">
                  {role.bullets.map((bullet, bIdx) => (
                    <li className="bullet-item" key={bIdx}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {/* TAB 2: Personal Projects Carousel */}
        {activeWorkTab === 'personal' && (
          <div>
            <div className="carousel-controls-bar">
              <span className="tech-strip-label">
                Swipe or use arrows to view {PERSONAL_PROJECTS.length} featured systems
              </span>
              <div className="carousel-nav-buttons">
                <button
                  className="carousel-arrow-btn"
                  onClick={() => scrollCarousel('left')}
                  aria-label="Previous project card"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  className="carousel-arrow-btn"
                  onClick={() => scrollCarousel('right')}
                  aria-label="Next project card"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div className="carousel-container" ref={carouselRef}>
              {PERSONAL_PROJECTS.map((proj) => (
                <div className="project-card" key={proj.id}>
                  <div className={`project-card-header ${proj.headerTheme === 'dark' ? 'ml-gradient' : ''}`}>
                    <div className="project-type-tag">{proj.type}</div>
                    <h3 className="project-card-title">{proj.title}</h3>
                  </div>

                  <div className="project-card-body">
                    <ul className="project-bullets">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>

                    <div className="project-tags-wrap">
                      {proj.stack.map((s, sIdx) => (
                        <span className="project-tag" key={sIdx}>{s}</span>
                      ))}
                    </div>

                    <div className="project-card-actions">
                      <button
                        className="view-modal-btn"
                        onClick={() => setSelectedProject(proj)}
                      >
                        Inspect Architecture
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                      <span className="link-placeholder-badge">
                        {proj.demoUrl ? 'Live Demo' : 'Source Verified'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 5: LEARNING / AI (Dark Red Band Section)
          ---------------------------------------------------------------------- */}
      <section className="ai-band-section scroll-reveal" id="ai-learning">
        <div className="ai-band-inner">
          <div className="ai-badge">Continuous Upskilling & Next-Gen Tech</div>
          <h2 className="ai-band-title">Generative AI & Agentic AI Focus</h2>
          <p className="ai-band-subtitle">
            Actively expanding into Generative and Agentic AI, integrating LLM workflows, RAG pipelines, and intelligent AI agents with modern web architectures.
          </p>

          <div className="ai-grid">
            {AI_UPSKILLING_PILLARS.map((pillar, idx) => (
              <div className="ai-card" key={idx}>
                <div>
                  <div className="ai-card-icon">
                    <CategoryIcon type="genai" />
                  </div>
                  <h3 className="ai-card-title" style={{ marginTop: '16px' }}>{pillar.title}</h3>
                  <p className="ai-card-desc">{pillar.desc}</p>
                </div>
                <div className="ai-card-tags">
                  {pillar.tags.map((t, tIdx) => (
                    <span className="ai-tag" key={tIdx}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 6: EDUCATION AND CERTIFICATIONS
          ---------------------------------------------------------------------- */}
      <section className="edu-section scroll-reveal" id="education">
        <div className="tools-header">
          <div className="section-label">Academic & Professional Development</div>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Formal engineering foundations combined with specialized machine learning and agentic intelligence certifications.
          </p>
        </div>

        <div className="edu-grid">
          {/* Column 1: Academic Degrees */}
          <div className="edu-column-card">
            <h3 className="edu-column-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Academic Background
            </h3>
            <div className="edu-items-list">
              {EDUCATION_DATA.map((item, idx) => (
                <div className="edu-item" key={idx}>
                  <div className="edu-degree">{item.degree}</div>
                  <div className="edu-year">{item.period}</div>
                  <div className="edu-institution">{item.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Advanced Certifications */}
          <div className="edu-column-card">
            <h3 className="edu-column-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              AI & ML Certifications
            </h3>
            <div className="edu-items-list">
              {CERTIFICATIONS_DATA.map((item, idx) => (
                <div className="edu-item" key={idx}>
                  <div className="edu-degree">{item.title}</div>
                  <div className="edu-year">{item.status}</div>
                  <div className="edu-institution">{item.institution}</div>
                  <div className="edu-details">{item.topics}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 7: CONTACT (Dark Red Box with Copy Buttons & Links)
          ---------------------------------------------------------------------- */}
      <section className="contact-section scroll-reveal" id="contact">
        <div className="contact-card-box">
          <div className="contact-box-grid">
            <div>
              <div className="ai-badge">Get In Touch</div>
              <h2 className="contact-heading">Let’s engineer something exceptional together.</h2>
              <p className="contact-subtext">
                Available for full-time senior frontend & full-stack roles, consulting on high-scale Angular/React SPAs, or building intelligent AI agents.
              </p>
            </div>

            <div className="contact-actions-panel">
              {/* Email Card: Direct Redirect + Copy without icons */}
              <div className="copy-row-card">
                <div className="copy-info-left">
                  <div>
                    <div className="copy-label">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="copy-value-link"
                      title="Click to directly send email"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="contact-btn-group">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="contact-action-btn direct-link"
                    title="Directly redirect to email client"
                  >
                    Open Mail
                  </a>
                  <button
                    type="button"
                    className={`contact-action-btn copy-btn ${copiedKey === 'email' ? 'copied' : ''}`}
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    title="Copy email to clipboard"
                  >
                    {copiedKey === 'email' ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Phone Card: Direct Redirect + Copy without icons */}
              <div className="copy-row-card">
                <div className="copy-info-left">
                  <div>
                    <div className="copy-label">Phone & WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="copy-value-link"
                      title="Click to directly call or WhatsApp"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="contact-btn-group">
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="contact-action-btn direct-link"
                    title="Directly redirect to phone dialer"
                  >
                    Call
                  </a>
                  <button
                    type="button"
                    className={`contact-action-btn copy-btn ${copiedKey === 'phone' ? 'copied' : ''}`}
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    title="Copy phone to clipboard"
                  >
                    {copiedKey === 'phone' ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* External Verified Links: Direct redirects without icons */}
              <div className="social-links-row">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Direct redirect to LinkedIn profile"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Direct redirect to GitHub profile"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 8: FOOTER
          ---------------------------------------------------------------------- */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-name">{PERSONAL_INFO.name}</span>
            <span className="footer-role">{PERSONAL_INFO.location} • Angular & Full-Stack Engineer</span>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Manu Prathap.
          </div>

          <button
            className="back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top ↑
          </button>
        </div>
      </footer>

      {/* ----------------------------------------------------------------------
          PROJECT DETAILS MODAL
          ---------------------------------------------------------------------- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true">
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div className="project-type-tag" style={{ color: 'var(--accent-red)' }}>{selectedProject.type}</div>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal dialog"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div>
                <div className="modal-section-title">Key Contributions & Architecture</div>
                <ul className="project-bullets">
                  {selectedProject.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="modal-section-title">Verified Technology Stack</div>
                <div className="project-tags-wrap">
                  {selectedProject.stack.map((tag, idx) => (
                    <span className="project-tag" key={idx}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="modal-placeholder-notice">
                <strong>Project Deployment & Repository:</strong>
                <p style={{ marginTop: '4px' }}>
                  {selectedProject.demoUrl ? (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent-red)' }}>
                      Open Live Application ↗
                    </a>
                  ) : (
                    <span>[Live Demo Link Placeholder — Add deployed URL in App.jsx]</span>
                  )}
                </p>
                <p style={{ marginTop: '4px' }}>
                  {selectedProject.repoUrl ? (
                    <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'var(--accent-red)' }}>
                      View Git Repository ↗
                    </a>
                  ) : (
                    <span>[Repository Placeholder — Add GitHub URL in App.jsx]</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
