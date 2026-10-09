// Site configuration for Indian Institute of Language (IIL)
export const site = {
  name: "Indian Institute of Language",
  short: "IIL",
  tagline: "Speak with Confidence. Grow with Purpose.",
  founder: "Aftab Alam",
  role: "Founder & Chief Mentor",
  whatsapp: "919102824592",
  phoneDisplay: "+91 91028 24592",
  address: "Near Kailash Hotel, Yadopur Road, Gopalganj, Bihar 841428",
  city: "Gopalganj, Bihar",
  landmark: "Near Kailash Hotel, Yadopur Road",
  timings: "Monday - Saturday: 7:00 AM – 7:00 PM (Flexible Batches)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=IIL+Spoken+English+Academy+Near+Kailash+Hotel+Yadopur+Road+Gopalganj+Bihar",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Near+Kailash+Hotel,+Yadopur+Road,+Gopalganj,+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagramFounder: "https://www.instagram.com/iilbyaftabalam/",
  instagramFounderHandle: "@iilbyaftabalam",
  instagramInstitute: "https://www.instagram.com/iilbyaftabalam/",
  instagramInstituteHandle: "@iilbyaftabalam",
  instagramUrl: "https://www.instagram.com/iilbyaftabalam/",
  instagramHandle: "@iilbyaftabalam",
  announcement: "🎓 Admissions Open for New Batches · Offline & Classroom Training in Gopalganj",
  stats: [
    { value: "5,000+", label: "Students Mentored", desc: "Trained across Bihar & online" },
    { value: "10+ Years", label: "Teaching Excellence", desc: "Proven track record in spoken English" },
    { value: "98%", label: "Confidence Boost", desc: "Reported elimination of stage fear" },
    { value: "4.9 ★", label: "Student Rating", desc: "Loved by learners & professionals" },
  ],
  pillars: [
    { title: "Zero Hesitation", desc: "Overcome fear of speaking English in public and meetings" },
    { title: "Practical Speaking", desc: "Daily conversational drills, role-plays and mock scenarios" },
    { title: "Personality Grooming", desc: "Body language, eye contact, stage presence & charisma" },
    { title: "Career Ready", desc: "Job interview readiness, group discussions and presentation skills" },
  ]
};

// Official courses offered at IIL
export const courses = [
  {
    id: "basic-grammar",
    title: "Basic English Grammar",
    tagline: "Strong Foundation",
    text: "Build an unbreakable grammar foundation. Learn sentence structure, tenses, parts of speech, and everyday phrasing from ground zero.",
    level: "Beginner",
    topics: ["Tenses & Sentence Framing", "Daily Conversational Structures", "Common Errors Correction"],
    badge: "Foundation"
  },
  {
    id: "advance-grammar",
    title: "Advance English Grammar",
    tagline: "Flawless Accuracy",
    text: "Move far beyond the basics with advanced sentence clauses, voice modulation, refined idiom usage, and complex professional expressions.",
    level: "Intermediate to Advance",
    topics: ["Complex Clause Phrasing", "Idiomatic Fluency", "Professional Writing Structure"],
    badge: "Advanced"
  },
  {
    id: "public-speaking",
    title: "Public Speaking & Stage Presence",
    tagline: "Conquer Stage Fear",
    text: "Overcome hesitation and speak in front of audiences with authority. Master voice projection, podium poise, and speech structuring.",
    level: "All Levels",
    topics: ["Eliminating Stage Fright", "Audience Engagement", "Voice Modulation & Delivery"],
    badge: "High Demand"
  },
  {
    id: "vocabulary",
    title: "Vocabulary & Conversational Agility",
    tagline: "Expressive English",
    text: "Expand your active vocabulary exponentially. Speak without stuttering or searching for words using dynamic verbal associations.",
    level: "Practical Drills",
    topics: ["500+ High-impact Words", "Collocations & Phrasal Verbs", "Contextual Recall Exercises"],
    badge: "Fluency"
  },
  {
    id: "job-interview",
    title: "Job Interview Preparation",
    tagline: "Career Transformation",
    text: "Crack technical & HR interviews with flying colours. Master 'Introduce Yourself', situational questions, resume defence, and corporate etiquette.",
    level: "Career Focused",
    topics: ["HR & Mock Interviews", "Confidence Under Pressure", "Salary & Role Negotiation Phrasing"],
    badge: "Placement"
  },
  {
    id: "presentation-skill",
    title: "Presentation & Debate Skills",
    tagline: "Executive Communication",
    text: "Learn to design, structure, and deliver high-impact presentations and win arguments respectfully in corporate & academic debates.",
    level: "Leadership",
    topics: ["Storytelling Frameworks", "Impromptu Speech (JAM)", "Debate Strategy & Retorts"],
    badge: "Leadership"
  },
];

// Reels play in this order. Real mp4 files in /public/reels.
export const reels = [
  { id: "r1", src: "/reels/r1.mp4", poster: "/reels/r1.jpg", title: "Be the change you wanna see", duration: "0:25", category: "Mindset" },
  { id: "r2", src: "/reels/r2.mp4", poster: "/reels/r2.jpg", title: "You can speak, learn, grow", duration: "0:19", category: "Motivation" },
  { id: "r3", src: "/reels/r3.mp4", poster: "/reels/r3.jpg", title: "Every setback has a comeback", duration: "0:15", category: "Inspiration" },
  { id: "r4", src: "/reels/r4.mp4", poster: "/reels/r4.jpg", title: "Father and son conversation", duration: "0:22", category: "Dialogue Practice" },
  { id: "r5", src: "/reels/r5.mp4", poster: "/reels/r5.jpg", title: "Learn with us, grow with us", duration: "0:18", category: "Classroom Energy" },
  { id: "r6", src: "/reels/r6.mp4", poster: "/reels/r6.jpg", title: "Learn with us, grow with us (2)", duration: "0:17", category: "Student Drills" },
  { id: "r7", src: "/reels/r7.mp4", poster: "/reels/r7.jpg", title: "Process is more important than result", duration: "0:24", category: "Philosophy" },
  { id: "r8", src: "/reels/r8.mp4", poster: "/reels/r8.jpg", title: "Company role play project", duration: "0:28", category: "Roleplay & Mock" },
  { id: "r9", src: "/reels/r9.mp4", poster: "/reels/r9.jpg", title: "Sometimes fun, sometimes learn", duration: "0:20", category: "IIL Life" },
  { id: "r10", src: "/reels/r10.mp4", poster: "/reels/r10.jpg", title: "Together we win together", duration: "0:21", category: "Community" },
];

// Real IIL authentic photographs supplied by the institute
export const gallery = [
  {
    src: "/img/group.jpg",
    alt: "Aftab Alam with a vibrant group of IIL students at the academy",
    caption: "Aftab Alam with proud IIL students celebrating speech milestones",
    tag: "Community",
    span: "col-span-2 row-span-2"
  },
  {
    src: "/img/class.jpg",
    alt: "Students actively participating during an interactive session at IIL Gopalganj",
    caption: "Interactive classroom session: Students standing & speaking confidently",
    tag: "Classroom Drills",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/img/award.jpg",
    alt: "A student receiving an academic recognition award at IIL",
    caption: "Student receiving an excellence award for outstanding speech fluency",
    tag: "Achievement",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/img/mug.jpg",
    alt: "A student receiving an official IIL customized mug on stage",
    caption: "Recognition ceremony: Rewarding consistent learners with IIL honours",
    tag: "Milestone",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/img/podcast.jpg",
    alt: "Founder Aftab Alam in a podcast-style conversation on English fluency",
    caption: "Aftab Alam sharing insights on spoken English psychology and youth empowerment",
    tag: "Mentorship",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/img/poster.jpg",
    alt: "Official IIL event and achievement celebration banner",
    caption: "IIL Academy milestones, public demonstrations & student speeches",
    tag: "Celebration",
    span: "col-span-1 row-span-1"
  },
  {
    src: "/img/poster2.jpg",
    alt: "IIL students showcase banner in Gopalganj",
    caption: "Student batch showcase: Real transformation through dedicated practice",
    tag: "Batch Showcase",
    span: "col-span-1 row-span-1"
  }
];

export const faqs = [
  {
    q: "Do I need prior English knowledge to join IIL?",
    a: "No! We start from your current level — whether you know zero grammar or can read but hesitate while speaking. Our batches are personalized so every learner feels comfortable and supported."
  },
  {
    q: "How does IIL remove stage fright and public speaking fear?",
    a: "Through daily mandatory speaking practice, podium presentations, extempore drills (JAM), group debates, and supportive constructive feedback in every single class."
  },
  {
    q: "Where is the institute located in Gopalganj?",
    a: "We are located Near Kailash Hotel, Yadopur Road, Gopalganj, Bihar. It is easily accessible with convenient transport connections."
  },
  {
    q: "How can I check batch timings and admission fees?",
    a: "Click on 'Enquire for Admission' or any course card to chat directly with Founder Aftab Alam and the IIL team on WhatsApp. We share instant details regarding ongoing batches."
  }
];
