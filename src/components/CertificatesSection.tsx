
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Award,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react'

type Category =
  | 'Virtual Experience'
  | 'Cybersecurity Training'
  | 'Academic Achievement'

type Credential = {
  title: string
  issuer: string
  category: Category
  status: string
  link?: string
}

const credentials: Credential[] = [
  {
    title: 'Identity and Access Management Job Simulation',
    issuer: 'Tata Consultancy Services · Forage',
    category: 'Virtual Experience',
    status: 'Completed',
  },
  {
    title: 'Offensive Security & Defensive Security Learning',
    issuer: 'TryHackMe',
    category: 'Cybersecurity Training',
    status: 'Learning activities',
  },
  {
    title: 'BSc (Hons) Computing with Cyber Security Technology',
    issuer: 'Northumbria University',
    category: 'Academic Achievement',
    status: 'Upper Second-Class Honours (2:1)',
  },
  {
    title: 'BEng (Hons) Software Engineering',
    issuer: 'London Metropolitan University',
    category: 'Academic Achievement',
    status: 'Upper Second-Class Honours (2:1)',
  },
  {
    title: 'HND Computing (Software Engineering)',
    issuer: 'Pearson BTEC',
    category: 'Academic Achievement',
    status: 'Merit',
  },
  {
    title: 'Foundation Diploma in ICT with English',
    issuer: 'IDM',
    category: 'Academic Achievement',
    status: 'Distinction',
  },
]

const filters = [
  'All',
  'Professional Learning',
  'Academic Achievements',
] as const

function getIcon(category: Category) {
  switch (category) {
    case 'Academic Achievement':
      return GraduationCap
    case 'Cybersecurity Training':
      return ShieldCheck
    default:
      return Award
  }
}

export default function CertificatesSection() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>('All')

  const filteredCredentials = credentials.filter((item) => {
    if (activeFilter === 'All') return true

    if (activeFilter === 'Professional Learning') {
      return item.category !== 'Academic Achievement'
    }

    return item.category === 'Academic Achievement'
  })

  return (
    <section
      id="certificates"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
    >
      {/* SECTION HEADER */}
      <div className="mb-11">
        <p className="mb-3 text-xs tracking-[0.3em] text-amber-300">
          06 / CREDENTIALS
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Certifications &amp;{' '}
          <span className="text-amber-300">
            Achievements.
          </span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A collection of academic qualifications,
          technical training and professional development
          that reflects my commitment to continuous learning.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? 'border-amber-300 bg-amber-300 text-slate-950'
                  : 'border-white/15 bg-white/[0.035] text-slate-300 hover:border-amber-300/40 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <span className="text-xs tracking-wider text-slate-500">
          {String(filteredCredentials.length).padStart(2, '0')}
          {' / '}
          {String(credentials.length).padStart(2, '0')}
          {' CREDENTIALS'}
        </span>
      </div>

      {/* CREDENTIAL GRID */}
      <motion.div
        layout
        className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredCredentials.map((item) => {
            const Icon = getIcon(item.category)

            return (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="group relative flex min-h-[285px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1224]/85 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-amber-300/35"
              >
                {/* TOP ACCENT */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/0 to-transparent transition-all duration-500 group-hover:via-amber-300/50" />

                <div className="mb-7 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.07] text-amber-300">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">
                    {item.category === 'Academic Achievement'
                      ? 'Academic'
                      : 'Training'}
                  </span>
                </div>

                <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-amber-300">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.issuer}
                </p>

                <div className="mt-auto pt-7">
                  <div className="border-t border-white/10 pt-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {item.category === 'Academic Achievement' ? (
                          <GraduationCap
                            size={15}
                            className="shrink-0 text-amber-300/80"
                          />
                        ) : item.category === 'Cybersecurity Training' ? (
                          <BookOpen
                            size={15}
                            className="shrink-0 text-amber-300/80"
                          />
                        ) : (
                          <Award
                            size={15}
                            className="shrink-0 text-amber-300/80"
                          />
                        )}

                        <span className="text-xs leading-5 text-slate-300">
                          {item.status}
                        </span>
                      </div>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View credential for ${item.title}`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 transition-colors hover:text-amber-200"
                        >
                          View
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* FOOTER */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="max-w-xl text-xs leading-6 text-slate-500">
          Credentials and learning activities are presented
          according to their actual completion status.
          Verification links can be added when available.
        </p>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-amber-200"
        >
          Professional development
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  )
}
