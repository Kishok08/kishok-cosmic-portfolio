
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  BriefcaseBusiness,
  ChevronDown,
  HeartHandshake,
  MapPin,
} from 'lucide-react'

type Experience = {
  role: string
  organisation: string
  location: string
  period: string
  category: 'Employment' | 'Volunteering'
  description: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    role: 'Sales & Customer Service Representative',
    organisation: 'Shell / Little Waitrose',
    location: 'Redhill, United Kingdom',
    period: 'Nov 2024 – Present',
    category: 'Employment',
    description:
      'Supporting daily retail operations, customer service and accurate transactions in a fast-paced environment.',
    responsibilities: [
      'Customer service and transaction processing',
      'Stock management and shop-floor organisation',
      'Problem-solving and customer enquiries',
      'Working independently and collaboratively',
    ],
  },
  {
    role: 'Sales Executive & Inventory',
    organisation: 'Akam Food City',
    location: 'Jaffna, Sri Lanka',
    period: 'Jul 2021 – Feb 2023',
    category: 'Employment',
    description:
      'Supported sales operations and inventory activities.',
    responsibilities: [
      'Assisted with sales and customer enquiries',
      'Supported stock monitoring and inventory organisation',
      'Maintained accurate operational records',
    ],
  },
  {
    role: 'E-commerce Content Management',
    organisation: 'Amitlanka.lk',
    location: 'Sri Lanka',
    period: 'Feb 2021 – Jun 2021',
    category: 'Employment',
    description:
      'Worked with digital product content and online retail information.',
    responsibilities: [
      'Maintained online product content',
      'Supported digital catalogue organisation',
      'Checked information for accuracy and consistency',
    ],
  },
  
{
  role: 'Student Forum Leader',
  organisation: 'Maavai Bharathy Marumalarchi Manram',
  location: 'Maviddapuram, Jaffna, Sri Lanka',
  period: '2015 – 2023',
  category: 'Volunteering',
  description:
    'Led the student forum within a local community organisation, supporting children and young people through cultural activities, creative development and community engagement.',
  responsibilities: [
     'Led and supported local children through youth development and community activities',
    'Helped organise cultural programmes, temple festivals and traditional celebrations',
    'Coordinated dance, singing, drama and other performing arts activities',
    'Supported sports competitions and recreational activities for young people',
    'Helped organise educational programmes, public speaking and debate activities',
    'Encouraged teamwork, confidence, creativity and leadership among children',
    'Participated in community fundraising initiatives and charitable activities',
    'Helped collect donations to support communities affected by flooding',
    'Supported the provision of relief assistance to flood-affected areas using collected funds',
    'Worked with community members and volunteers to coordinate events and activities',
  ],
},
]

export default function ExperienceSection() {
  const [filter, setFilter] = useState<
    'All' | 'Employment' | 'Volunteering'
  >('All')

  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = experiences.filter(
    (item) => filter === 'All' || item.category === filter
  )

 
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28"
    >
      {/* Premium editorial heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 bg-amber-200/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
            04 / Professional Journey
          </span>
        </div>

        <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
          Experience &
          <span className="block bg-gradient-to-r from-[#fff0bf] via-[#d9b66a] to-[#a97932] bg-clip-text text-transparent">
            Impact.
          </span>
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
          Professional experience and volunteering that have
          strengthened my communication, organisation,
          digital skills and problem-solving.
        </p>
      </motion.div>

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-3">
        {(['All', 'Employment', 'Volunteering'] as const).map(
          (item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item)
                setExpanded(null)
              }}
              aria-pressed={filter === item}
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                filter === item
                  ? 'border-[#e7d3ae] bg-[#e7d3ae] text-[#11131d]'
                  : 'border-white/15 bg-white/[0.04] text-slate-300 hover:border-amber-200/40 hover:text-amber-100'
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Experience cards */}
      <div className="space-y-5">
        {filtered.map((item, index) => {
          const key = `${item.organisation}-${item.role}`
          const isOpen = expanded === key

          return (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={`relative overflow-hidden rounded-[1.75rem] border bg-[#0b1224]/85 backdrop-blur-xl transition-colors duration-300 ${
                isOpen
                  ? 'border-amber-200/30'
                  : 'border-white/10 hover:border-amber-200/25'
              }`}
            >
              {/* Subtle gold top accent */}
              <div className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-amber-200/40 to-transparent" />

              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : key)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
              >
                <div className="flex min-w-0 gap-5">
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-200/15 bg-amber-200/[0.06] text-amber-200 sm:flex">
                    {item.category === 'Volunteering' ? (
                      <HeartHandshake size={26} strokeWidth={1.5} />
                    ) : (
                      <BriefcaseBusiness size={26} strokeWidth={1.5} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-amber-200">
                        {item.period}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-amber-200/50" />

                      <span className="text-xs uppercase tracking-[0.12em] text-slate-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                      {item.role}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-slate-300">
                      {item.organisation}
                    </p>

                    <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <MapPin size={14} className="text-amber-200/70" />
                      {item.location}
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  size={20}
                  className={`mt-1 shrink-0 text-amber-200 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 py-7 sm:px-8">
                      <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-6 bg-amber-200/50" />
                        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-amber-200">
                          Responsibilities & Skills
                        </h4>
                      </div>

                      <ul className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
                        {item.responsibilities.map(
                          (responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-3 leading-7"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200/70" />
                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
