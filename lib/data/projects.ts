export interface Project {
  slug: string
  title: string
  tagline: string // one-line result shown on card
  filters: string[]
  category: string
  techStack: string[]
  coverImage: string
  // Case study page content
  problem: string
  whatIBuilt: string[]
  outcome: string
  repoUrl?: string
  demoUrl?: string
  teamCredits?: string
  instagramReel?: string
}

export const projects: Project[] = [
  {
    "slug": "farmguardian",
    "title": "FarmGuardian",
    "tagline": "An offline farming assistant. Built for Punjab, with AI that works in the field.",
    "category": "Mobile · Machine Learning",
    "filters": [
      "Mobile",
      "Machine Learning"
    ],
    "techStack": [
      "React Native",
      "TFLite",
      "EfficientNet-B0",
      "Random Forest",
      "Supabase",
      "i18next"
    ],
    "coverImage": "/images/projects/farmguardian.jpg",
    "problem": "Farmers need crop disease detection and practical farming guidance even when an internet connection is unavailable. FarmGuardian brings these tools together in an offline-first mobile app for Punjab farmers.",
    "whatIBuilt": [
      "On-device tomato leaf disease detection using TFLite and EfficientNet-B0, achieving 91% accuracy.",
      "Random Forest yield prediction for maize, wheat, rice, tomato, and potato, paired with cure recommendations.",
      "Crop planning with water and fertilizer guidance, crop recommendations, and daily mandi price tracking.",
      "Full Urdu localization through i18next, with Supabase supporting the application."
    ],
    "outcome": "Won 3rd Place and 1st Place (People’s Choice) at the COMSATS Abbottabad FYP Competition, Spring 2026. The reported 91% accuracy applies specifically to tomato leaf disease.",
    "repoUrl": "https://github.com/farazshoukat/FARMGUARDIAN",
    "teamCredits": "Final Year Project · Built with a 3-person team under faculty supervision."
  },
  {
    "slug": "job-copilot",
    "repoUrl": "https://github.com/farazshoukat/job-copilot",
    "demoUrl": "https://job-copilot-cyan.vercel.app",
    "title": "Job Copilot",
    "tagline": "From resume PDF to tailored bullet points and a cover letter in under 60 seconds.",
    "category": "Full-Stack · Generative AI",
    "filters": [
      "Full-Stack",
      "AI & Automation"
    ],
    "techStack": [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Groq",
      "Supabase"
    ],
    "coverImage": "/images/projects/job-copilot.svg",
    "problem": "Tailoring a resume and cover letter for each job application takes time. Job Copilot connects an existing resume with the requirements of a specific job description.",
    "whatIBuilt": [
      "A responsive Next.js interface that accepts a resume PDF and job description.",
      "A FastAPI backend with Groq inference to rewrite resume bullet points against ATS keywords and generate a tailored cover letter.",
      "Supabase user session management and a frontend deployed on Vercel."
    ],
    "outcome": "Generates tailored resume bullet points and a cover letter within 60 seconds."
  },
  {
    "slug": "multilingual-support-agent",
    "title": "Multilingual AI Support Agent",
    "tagline": "Detect the language. Understand the intent. Route the ticket to the right team.",
    "category": "AI · Workflow Automation",
    "filters": [
      "Full-Stack",
      "AI & Automation"
    ],
    "techStack": [
      "FastAPI",
      "React",
      "Groq",
      "Supabase",
      "N8N",
      "Python"
    ],
    "coverImage": "/images/projects/multilingual-support-agent.svg",
    "problem": "Customer support queries arrive in different languages and need to reach the appropriate department. Manual classification and escalation add repetitive work to the support queue.",
    "whatIBuilt": [
      "An end-to-end support system that detects query language, classifies intent, and routes tickets using a Groq-powered LLM.",
      "N8N automation workflows for real-time ticket escalation notifications.",
      "Supabase logging with a React frontend and FastAPI backend."
    ],
    "outcome": "Reduced manual triage effort by an estimated 65% through automated routing and escalation."
  },
  {
    "slug": "ai-portfolio-cv-generator",
    "title": "AI Portfolio & CV Generator",
    "tagline": "Turn a GitHub profile and LinkedIn PDF into a live portfolio and an ATS-ready CV.",
    "category": "Full-Stack · Generative AI",
    "filters": [
      "Full-Stack",
      "AI & Automation"
    ],
    "techStack": [
      "FastAPI",
      "React",
      "Groq",
      "Supabase",
      "WeasyPrint"
    ],
    "coverImage": "/images/projects/ai-portfolio-cv-generator.svg",
    "problem": "Building a portfolio and formatting a CV can mean entering the same professional information in several places. This tool starts with a GitHub profile URL and LinkedIn PDF.",
    "whatIBuilt": [
      "An AI-powered workflow that generates a live portfolio site and a downloadable, ATS-optimized CV.",
      "Server-side PDF rendering with WeasyPrint and persistent user data in Supabase.",
      "An automated deployment pipeline to Vercel on every generation."
    ],
    "outcome": "Produces a deployed portfolio and downloadable CV in under 60 seconds."
  },
  {
    "slug": "doc-poly-clinic",
    "demoUrl": "https://maternal-fetal-risk-system.vercel.app",
    "title": "Maternal-Fetal Risk System",
    "tagline": "Clinical vitals and CTG data brought together in a two-tier AI risk assessment dashboard.",
    "category": "Full-Stack · Machine Learning",
    "filters": [
      "Full-Stack",
      "Machine Learning"
    ],
    "techStack": [
      "React",
      "FastAPI",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Random Forest"
    ],
    "coverImage": "/images/projects/doc-poly-clinic.jpg",
    "problem": "Assessing maternal health risk and fetal distress requires working with clinical vitals and Cardiotocogram data. This project brings both into a structured dashboard and assessment API.",
    "whatIBuilt": [
      "A two-tier dashboard and API comparing Random Forest and XGBoost models optimized for high-risk recall.",
      "A React/Vite frontend with role-based access, longitudinal vitals visualization, and real-time fetal assessment.",
      "A FastAPI service with graceful fallback to clinical heuristics when the ML backend is offline.",
      "Feature importance and permutation analysis for interpretability, plus demographic parity and equal opportunity fairness audits."
    ],
    "outcome": "Delivered an integrated risk assessment platform with model comparison, interpretability, fairness audits, and an offline-backend fallback.",
    "repoUrl": "https://github.com/farazshoukat/maternal_fetal_risk_system",
    "teamCredits": "Built with a 2-person team."
  },
  {
    slug: "ai-invoice-extractor",
    title: "AI Invoice Extractor",
    tagline: "Turn invoice PDFs and receipt images into structured records, ready for a dashboard or spreadsheet.",
    category: "AI · Document Automation",
    filters: ["Full-Stack", "AI & Automation"],
    techStack: ["Python", "Flask", "Tesseract OCR", "Groq", "PostgreSQL", "Google Sheets", "Supabase"],
    coverImage: "/images/projects/ai-invoice-extractor.svg",
    repoUrl: "https://github.com/farazshoukat/ai-invoice-extractor",
    problem: "Invoices and receipts contain useful financial data in formats that are awkward to search, organize, and transfer into a spreadsheet.",
    whatIBuilt: ["A Flask application with sign-up, login, document upload, and a dashboard.", "An OCR-to-LLM pipeline: Tesseract reads PDF pages or images, then Groq structures vendor, date, total, currency, and line items into JSON.", "PostgreSQL persistence and Google Sheets integration, with separate upload and JSON extraction routes."],
    outcome: "A source-available document-processing workflow connecting file intake, structured extraction, database storage, and spreadsheet logging."
  },
  {
    slug: "rag-business-docs-chatbot",
    title: "Business Docs RAG Chatbot",
    tagline: "Upload a business document. Ask a question. Retrieve the context behind the answer.",
    category: "AI · Retrieval-Augmented Generation",
    filters: ["AI & Automation"],
    techStack: ["Python", "Flask", "LangChain", "Groq", "Chroma", "Sentence Transformers"],
    coverImage: "/images/projects/rag-business-docs-chatbot.svg",
    repoUrl: "https://github.com/farazshoukat/rag-business-docs-chatbot",
    problem: "Finding a specific answer in business documents can require repeated manual searching. This project connects document ingestion with retrieval-assisted question answering.",
    whatIBuilt: ["Flask upload and chat endpoints with session-specific document ingestion.", "Chroma collections that retrieve relevant document chunks for each session.", "A LangChain pipeline with Groq inference, prompted to answer from retrieved context and acknowledge missing information."],
    outcome: "A document question-answering API with session-scoped retrieval and cached chains for follow-up queries."
  },
  {
    slug: "ai-pathfinder",
    title: "AI Pathfinding Visualizer",
    tagline: "Explore how search algorithms navigate a grid, one step at a time.",
    category: "Interactive · Algorithms",
    filters: ["Interactive"],
    techStack: ["JavaScript", "HTML", "CSS", "A*", "Best-First Search", "BFS"],
    coverImage: "/ai-pathfinding-algorithm-visualization-grid.jpg",
    repoUrl: "https://github.com/farazshoukat/AI-pathfinder",
    teamCredits: "Learning project adapted from jumailj’s Ai-PathFinding-Visualizer, credited in the repository README.",
    problem: "Search algorithms are easier to understand when their exploration becomes visible. A grid provides a concrete way to observe routes and obstacles.",
    whatIBuilt: ["A browser-based pathfinding project using JavaScript, HTML, and CSS.", "Grid visualization for A*, best-first search, and breadth-first search.", "Separate modules for algorithms, maze generation, grid properties, and visualization controls."],
    outcome: "An interactive algorithm exploration project, with source code available for inspecting the search and visualization logic."
  }
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
