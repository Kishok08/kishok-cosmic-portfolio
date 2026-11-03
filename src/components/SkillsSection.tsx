
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Code2,
  ShieldCheck,
  Database,
  Users,
  Pencil,
  X,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Software Engineering',
    subtitle: 'DEVELOPMENT & APPLICATIONS',
    icon: Code2,
    animation: 'code',
    skills: [
      'Python', 'JavaScript', 'TypeScript', 'PHP',
      'Java', 'C#', 'SQL', 'HTML5', 'CSS3',
      'React', 'Tailwind CSS', 'Bootstrap',
      'Chart.js', 'Leaflet', 'Responsive Design',
      'Flask', 'Node.js', 'REST APIs',
      'Web Applications', 'Laravel (Learning)',
    ],
  },
  {
    title: 'Cybersecurity & IT',
    subtitle: 'PROTECTION & ANALYSIS',
    icon: ShieldCheck,
    animation: 'security',
    skills: [
      'OWASP ZAP', 'Nmap', 'Autopsy',
      'Web Security Testing', 'Digital Forensics',
      'Security Fundamentals', 'Vulnerability Assessment',
      'Penetration Testing Fundamentals', 'OWASP Top 10',
      'Technical Troubleshooting', 'Software Installation',
      'Computer Hardware Fundamentals',
      'Networking Fundamentals', 'Problem Diagnosis',
      'Technical Documentation',
    ],
  },
  {
    title: 'Data & Digital Tools',
    subtitle: 'ANALYTICS & WORKFLOW',
    icon: Database,
    animation: 'data',
    skills: [
      'MySQL', 'Supabase', 'Power BI',
      'Data Visualisation', 'Database Design',
      'SQL Queries', 'Git', 'GitHub',
      'VS Code', 'Google Lighthouse',
      'phpMyAdmin', 'Browser Developer Tools',
    ],
  },
  {
    title: 'Professional Skills',
    subtitle: 'PEOPLE & LEADERSHIP',
    icon: Users,
    animation: 'people',
    skills: [
      'Customer Communication', 'Active Listening',
      'Team Collaboration', 'Customer Service',
      'Interpersonal Skills', 'English', 'Tamil',
      'Problem-Solving', 'Analytical Thinking',
      'Time Management', 'Adaptability',
      'Attention to Detail', 'Organisation',
      'Independent Working', 'Continuous Learning',
      'Youth Leadership', 'Event Coordination',
      'Community Engagement', 'Team Coordination',
      'Public Speaking', 'Volunteer Collaboration',
    ],
  },
  {
    title: 'Creative Practice',
    subtitle: 'ART & VISUAL THINKING',
    icon: Pencil,
    animation: 'creative',
    skills: [
      'Portrait Sketching', 'Pencil Drawing',
      'Artistic Creativity', 'Visual Observation',
      'Creative Expression', 'Design Thinking',
      'Adobe XD', 'Photoshop', 'UI Design',
      'Wireframing', 'Visual Design',
      'Creative Activities',
    ],
  },
]

function SkillVisual({ type }: { type: string }) {
  return (
    <div
      aria-hidden="true"
      className="skill-visual relative flex h-20 items-center justify-center"
    >
      {type === 'code' && (
        <svg viewBox="0 0 160 70" className="h-16 w-40">
          <path
            className="skill-code-line"
            d="M48 16 L28 35 L48 54 M112 16 L132 35 L112 54 M91 10 L69 60"
            fill="none"
            stroke="#e4c381"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            className="skill-code-dot"
            cx="80"
            cy="35"
            r="3"
            fill="#ffe8ad"
          />
        </svg>
      )}

      {type === 'security' && (
        <svg viewBox="0 0 160 70" className="h-16 w-40">
          <path
            d="M80 5 L108 17 V36 Q103 54 80 64 Q57 54 52 36 V17 Z"
            fill="none"
            stroke="#e4c381"
            strokeWidth="1.7"
          />
          <path
            d="M68 35 L77 44 L94 26"
            fill="none"
            stroke="#ffe8ad"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="skill-shield-scan"
            d="M51 35 H109"
            stroke="#ffe8ad"
            strokeWidth="1.5"
            opacity="0"
          />
        </svg>
      )}

      {type === 'data' && (
        <svg viewBox="0 0 160 70" className="h-16 w-40">
          <path
            d="M35 10 V60 H130"
            fill="none"
            stroke="#e4c381"
            strokeOpacity=".35"
            strokeWidth="1.5"
          />
          <path
            className="skill-data-line"
            d="M43 51 L68 35 L90 43 L119 15"
            fill="none"
            stroke="#e4c381"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            className="skill-data-dot"
            cx="119"
            cy="15"
            r="4"
            fill="#ffe8ad"
          />
        </svg>
      )}

      {type === 'people' && (
        <svg viewBox="0 0 160 70" className="h-16 w-40">
          <g fill="none" stroke="#e4c381" strokeWidth="1.7">
            <circle cx="58" cy="22" r="9" />
            <circle cx="102" cy="22" r="9" />
            <path d="M39 59 Q40 39 58 39 Q76 39 77 59" />
            <path d="M83 59 Q84 39 102 39 Q120 39 121 59" />
          </g>
          <path
            className="skill-people-link"
            d="M70 22 H90"
            stroke="#ffe8ad"
            strokeWidth="2"
            strokeDasharray="3 4"
          />
        </svg>
      )}

      {type === 'creative' && (
        <svg viewBox="0 0 160 70" className="h-16 w-40">
          <path
            className="skill-pencil-stroke"
            d="M40 56 Q28 29 55 14 Q80 0 99 23 Q111 41 91 57"
            fill="none"
            stroke="#e4c381"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M106 11 L130 35 L122 43 L98 19 Z"
            fill="none"
            stroke="#ffe8ad"
            strokeWidth="1.6"
          />
          <path
            d="M98 19 L93 48 L122 43"
            fill="none"
            stroke="#e4c381"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </div>
  )
}

export default function SkillsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<string | null>(null)

  const activeGroup = skillGroups.find(
    (group) => group.title === expanded
  )

  const scrollCards = (direction: -1 | 1) => {
    const container = carouselRef.current
    if (!container) return

    const firstCard = container.querySelector<HTMLElement>(
      '[data-skill-card]'
    )

    const distance = firstCard
      ? firstCard.offsetWidth + 20
      : 340

    container.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28"
    >
      {/* Premium editorial heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 bg-amber-200/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
            05 / Capabilities & Expertise
          </span>
        </div>

        <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
          Skills &
          <span className="block bg-gradient-to-r from-[#fff0bf] via-[#d9b66a] to-[#a97932] bg-clip-text text-transparent">
            Craft.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
          Engineering knowledge, security awareness,
          professional strengths and creative perspective.
        </p>
      </motion.div>

      {/* Carousel navigation */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Explore my expertise
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollCards(-1)}
            aria-label="Scroll skills left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-amber-100 transition-colors hover:border-amber-200/40 hover:bg-amber-200/10"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => scrollCards(1)}
            aria-label="Scroll skills right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-amber-100 transition-colors hover:border-amber-200/40 hover:bg-amber-200/10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Fixed-height horizontal cards */}
      <div
        ref={carouselRef}
        role="region"
        aria-label="Skill categories"
        tabIndex={0}
        className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-5 outline-none focus-visible:ring-2 focus-visible:ring-amber-200/60"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#75603e transparent',
        }}
      >
        {skillGroups.map((group, index) => {
          const Icon = group.icon
          const isOpen = expanded === group.title

          return (
            <motion.article
              key={group.title}
              data-skill-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className={`skill-explorer-card group relative h-[390px] w-[85%] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border bg-[#0b1224]/95 backdrop-blur-xl sm:w-[310px] lg:w-[340px] ${
                isOpen
                  ? 'border-amber-200/40'
                  : 'border-white/10 hover:border-amber-200/35'
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />

              <div className="flex h-full min-h-0 flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/15 bg-amber-200/[0.06] text-amber-200">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <span className="text-xs tracking-[0.2em] text-amber-200/55">
                    0{index + 1} / 05
                  </span>
                </div>

                <SkillVisual type={group.animation} />

                <div className="mt-auto flex flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-xs uppercase tracking-[0.13em] text-amber-200/75">
                    {group.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {group.skills.slice(0, 5).join(' · ')}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isOpen ? null : group.title)
                    }
                    aria-expanded={isOpen}
                    aria-controls="skills-detail-panel"
                    className="mt-5 flex w-full items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-amber-100 transition-colors hover:text-white"
                  >
                    <span>
                      {isOpen ? 'Hide skills' : 'Explore skills'}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>

      {/* Separate details panel — cards never resize */}
      <AnimatePresence mode="wait">
        {activeGroup && (
          <motion.div
            id="skills-detail-panel"
            key={activeGroup.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="mt-5 rounded-[1.75rem] border border-amber-200/25 bg-[#0b1224]/95 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-amber-200/70">
                  Complete skill set
                </p>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {activeGroup.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setExpanded(null)}
                aria-label="Close skill details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-amber-200/40 hover:text-amber-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeGroup.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs leading-relaxed text-slate-300 transition-colors hover:border-amber-200/25 hover:text-amber-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-4 text-xs tracking-wide text-slate-500">
        Swipe or use the arrows to explore. Select a card to view
        the complete skill set.
      </p>
    </section>
  )
}
