
import { useState } from 'react'
import {
  GraduationCap,
  ChevronDown,
  BookOpen,
  Award,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const education = [
  {
    degree: 'BSc (Hons) Computing with Cyber Security Technology',
    university: 'Northumbria University — London Campus',
    period: '2024 – 2025',
    grade: 'Second Class Upper (2:1)',
    modules: [
      'Digital Forensics',
      'Ethical Hacking',
      'Cyber Security Governance & Assurance',
      'Computing Project',
      'Project Analysis and Practice',
      'Technology Strategy & Leadership',
    ],
  },
  {
    degree: 'BEng (Hons) Software Engineering',
    university: 'London Metropolitan University',
    period: '2024',
    grade: 'Second Class Upper (2:1)',
    modules: [
      'Advanced Software Engineering',
      'Application Development',
      'Software Development Projects',
    ],
  },
  {
    degree: 'Higher National Diploma — Computing (Software Engineering)',
    university: 'ESOFT Metro Campus, Sri Lanka',
    period: '2023 – 2024',
    grade: 'Merit',
    modules: [
      'Programming',
      'Networking',
      'Security',
      'Database Design',
      'Algorithms',
      'Systems Analysis',
      'Web and Application Development',
      'Business Intelligence',
    ],
  },
]

export default function EducationSection() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section
      id="education"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28"
    >
      {/* Editorial heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 bg-amber-200/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
            03 / Academic Journey
          </span>
        </div>

        <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
          Built on
          <span className="block bg-gradient-to-r from-[#fff0bf] via-[#d9b66a] to-[#a97932] bg-clip-text text-transparent">
            Knowledge.
          </span>
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
          An academic foundation spanning software engineering,
          cybersecurity and computing — combining technical
          understanding with practical project experience.
        </p>
      </motion.div>

      
{/* Education timeline */}
<div className="relative ml-2 border-l border-amber-200/20 pl-7 sm:ml-4 sm:pl-12">

  {/* Flowing golden energy */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 -left-[2px] w-[3px] overflow-hidden"
  >
    <div className="education-energy-flow" />
  </div>

  {education.map((item, index) => {

          const isExpanded = expanded === index

          return (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline energy node */}
              <div className="absolute -left-[37px] top-10 flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/60 bg-[#0b1224] shadow-[0_0_18px_rgba(226,188,104,0.15)] sm:-left-[59px]">
                <div className="h-2 w-2 rounded-full bg-amber-200" />
              </div>

              {/* Academic card */}
              
<div
  className={`education-aura-card relative overflow-hidden rounded-[1.75rem] border bg-[#0b1224]/85 backdrop-blur-xl transition-all duration-500 ${
    isExpanded
      ? 'education-aura-active border-amber-200/30'
      : 'border-white/10 hover:border-amber-200/25'
  }`}
>
  {/* Animated electric-gold border */}
  <div
    aria-hidden="true"
    className="education-aura-border pointer-events-none absolute inset-0 rounded-[inherit]"
  />

                <div className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-amber-200/40 to-transparent" />

                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isExpanded ? null : index)
                  }
                  aria-expanded={isExpanded}
                  aria-controls={`education-panel-${index}`}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
                >
                  <div className="flex min-w-0 gap-5">
                    <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-200/15 bg-amber-200/[0.06] text-amber-200 sm:flex">
                      <GraduationCap size={27} strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
                          {item.period}
                        </span>

                        <span className="text-xs tracking-[0.2em] text-slate-600">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-3 text-sm text-slate-300">
                        {item.university}
                      </p>

                      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-200/15 bg-amber-200/[0.06] px-4 py-2 text-xs text-amber-100">
                        <Award size={14} />
                        {item.grade}
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`mt-1 shrink-0 text-amber-200 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`education-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-6 pb-8 pt-6 sm:px-8">
                        <div className="mb-5 flex items-center gap-3">
                          <BookOpen
                            size={17}
                            className="text-amber-200"
                          />

                          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                            Relevant Modules
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.modules.map((module) => (
                            <span
                              key={module}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs leading-relaxed text-slate-300 transition-colors hover:border-amber-200/25 hover:text-amber-100"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
