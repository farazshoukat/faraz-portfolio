export interface Project {
  slug: string
  title: string
  tagline: string // one-line result shown on card
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
    slug: "doc-poly-clinic",
    title: "Doc Poly Clinic",
    tagline: "Clinic digitalization platform with AI voice booking + maternal-fetal risk prediction",
    category: "Full-Stack · ML",
    techStack: ["React", "Vite", "FastAPI", "Python", "Random Forest", "XGBoost", "PostgreSQL"],
    coverImage: "/images/projects/doc-poly-clinic.jpg",
    problem:
      "A polyclinic was managing patient bookings and high-risk maternity cases entirely on paper. Appointment scheduling required front-desk staff to handle every call manually, and clinicians had no structured way to flag maternal-fetal risk from CTG data or vitals — decisions were made ad hoc.",
    whatIBuilt: [
      "A full-stack clinic management platform built on React/Vite (frontend) and FastAPI (backend), deployed with a PostgreSQL database.",
      "Phase 1: a maternal-fetal health risk prediction model trained on clinical vitals and CTG data, comparing Random Forest and XGBoost classifiers with interpretability audits (SHAP) and heuristic fallbacks for edge cases.",
      "Phase 2: a voice assistant for patient booking — callers speak their request, the system extracts intent, checks availability, and confirms the appointment slot without any front-desk involvement.",
      "A two-tier clinical dashboard giving GPs a longitudinal vitals view and flagging high-risk cases automatically.",
    ],
    outcome:
      "End-to-end platform handling both patient intake and clinical risk assessment. Random Forest model achieved strong performance on CTG classification. Voice booking reduced front-desk call handling for routine appointments.",
    repoUrl: "https://github.com/farazshoukat/maternal_fetal_risk_system",
  },
  {
    slug: "meeting-pipeline",
    title: "Meeting-to-Action-Items Pipeline",
    tagline: "LangGraph multi-agent system that turns meeting transcripts into tracked action items",
    category: "AI Agents · LangGraph",
    techStack: ["LangGraph", "FastAPI", "Python", "Slack API", "Google Calendar API", "LangChain"],
    coverImage: "/images/projects/meeting-pipeline.jpg",
    problem:
      "After meetings, action items lived in someone's notes — or nowhere. Teams forgot follow-ups, context was lost, and there was no reliable connection between what was discussed and what actually got scheduled or tracked in Slack.",
    whatIBuilt: [
      "A LangGraph multi-agent orchestration system with a FastAPI backend that ingests raw meeting transcripts (text or audio-to-text).",
      "Three specialized agents: an extraction agent (pulls action items with assignees and deadlines), a classification agent (deduplicates, prioritizes, formats), and a routing agent (posts to Slack and creates Google Calendar events).",
      "A human-approval checkpoint in the graph — extracted action items are surfaced for review before being posted, so nothing fires without a human sign-off.",
      "A self-correction loop: if the Slack or Calendar API call fails, the agent retries with reformatted output rather than silently dropping the item.",
    ],
    outcome:
      "Zero missed follow-ups from meetings that run through the pipeline. The human-approval step gave users confidence in the output before it hit their calendars. Demonstrated at the 'AI agents' search term — a fully working multi-agent system with real API integrations.",
  },
  {
    slug: "farmguardian",
    title: "FarmGuardian",
    tagline: "Offline-first crop disease detection and farm advisory app for Punjab farmers",
    category: "Mobile · ML · React Native",
    techStack: [
      "React Native",
      "TFLite",
      "EfficientNet-B0",
      "Random Forest",
      "Supabase",
      "i18next",
      "Expo",
    ],
    coverImage: "/images/projects/farmguardian.jpg",
    problem:
      "Smallholder farmers in Punjab face crop losses from diseases they can't identify without an agronomist. Connectivity in rural fields is unreliable, support in Urdu is rare, and existing agricultural apps assume a stable internet connection and English literacy.",
    whatIBuilt: [
      "A React Native mobile app with full Urdu localization and RTL layout support, designed for low-literacy users.",
      "On-device disease detection using a TFLite-quantized EfficientNet-B0 model (91% accuracy) — the inference runs entirely offline, so farmers can use it mid-field with no signal.",
      "Yield prediction across 5 major crops using a Random Forest model trained on local climate and soil data, with cure and treatment recommendations surfaced alongside each diagnosis.",
      "Crop planning calendar, mandi (market) price tracking, and a farm advisory feed integrated with Supabase for online sync when connectivity is available.",
    ],
    outcome:
      "Awarded 3rd Place and 1st Place (People's Choice Award) at COMSATS FYP Spring 2026 showcase. Disease detection runs fully offline with 91% accuracy. Urdu RTL support and simple UI designed for farmers, not tech users.",
    repoUrl: "https://github.com/musadiq7860/FARMGUARDIAN",
    teamCredits: "Built with Musadiq Qaysir and Abdullah Arshad.",
  },
  {
    slug: "voice-receptionist",
    title: "AI Voice Receptionist",
    tagline: "Low-latency voice AI demo handling inbound calls with natural conversation",
    category: "AI · Voice · Real-time",
    techStack: ["FastAPI", "Python", "WebSockets", "LLM API", "TTS", "STT", "React"],
    coverImage: "/images/projects/voice-receptionist.jpg",
    problem:
      "Reception desks and scheduling lines handle high volumes of routine calls — appointment confirmations, hour queries, directions — that don't require a human but currently have no better option than a clunky IVR menu.",
    whatIBuilt: [
      "A real-time voice AI receptionist that handles inbound calls with natural conversation — no menu trees, no hold music.",
      "End-to-end pipeline: speech-to-text → LLM reasoning with a system prompt defining the receptionist persona and business context → text-to-speech response, all over WebSocket for minimal round-trip latency.",
      "A React frontend with a visual call interface — live transcription display, speaking indicator, and call controls.",
      "Designed to be configured per-business: swap the system prompt and knowledge base, and the same stack handles different receptionists.",
    ],
    outcome:
      "30-second demo proves the concept immediately — the voice interaction is natural enough that callers respond conversationally rather than speaking in menu-style commands. Working reel on Instagram.",
    instagramReel: "https://instagram.com/faraz.work",
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
