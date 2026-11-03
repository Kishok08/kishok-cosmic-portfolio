
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowUpRight,
  X,
  FolderCode,
  ShieldCheck,
  Layers3,
  Palette,
  
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'

type Category =
  | 'Full Stack'
  | 'Cybersecurity'
  | 'Software'
  | 'UI / UX'

type Project = {
  title: string
  category: Category
  status: string
  description: string
  details: string[]
  tech: string[]
  github?: string
  images?: string[]
}

const GITHUB_PROFILE = 'https://github.com/Kishok08'

const projects: Project[] = [
  {
    title: 'Earnova',
    category: 'Full Stack',
    status: 'In progress',
    description:
      'An ongoing business-management web application focused on practical workflows and a modern user experience.',
    details: [
      'Developing a responsive web application using React and TypeScript.',
      'Exploring backend integration and data-driven workflows.',
      'Designing reusable components and intuitive interfaces.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    // github: 'https://github.com/Kishok08/actual-repository',
  },
  {
    title: 'Automated Front-End Issue Detection System',
    category: 'Cybersecurity',
    status: 'Academic project',
    description:
      'A Flask-based tool designed to identify front-end quality and security issues using automated testing tools.',
    details: [
      'Integrated Google Lighthouse for website quality analysis.',
      'Used OWASP ZAP for web security assessment.',
      'Developed a reporting workflow for presenting findings.',
    ],
    tech: ['Python', 'Flask', 'Lighthouse', 'OWASP ZAP'],
  },
  {
    title: 'Crime Heatmap & Public Dashboard',
    category: 'Full Stack',
    status: 'Academic project',
    description:
      'A data visualisation dashboard for exploring geographical crime information.',
    details: [
      'Created interactive geographical visualisations.',
      'Designed dashboard charts for exploring data patterns.',
      'Worked with a database-backed data delivery workflow.',
    ],
    tech: ['PHP', 'MySQL', 'Leaflet', 'Chart.js', 'Tailwind CSS'],
  },
  {
    title: 'Penetration Testing Toolkit',
    category: 'Cybersecurity',
    status: 'In progress',
    description:
      'A Python toolkit exploring security assessment workflows and reporting.',
    details: [
      'Developing network-scanning functionality using Nmap.',
      'Exploring DNS and domain information gathering.',
      'Planning additional security checks and PDF reporting.',
    ],
    tech: ['Python', 'Nmap', 'DNS', 'PDF Reporting'],
  },
  {
    title: 'Taxi Management System',
    category: 'Full Stack',
    status: 'Academic project',
    description:
      'A PHP-based application for managing taxi service information and workflows.',
    details: [
      'Worked on application logic and data management.',
      'Developed web-based interfaces for operational tasks.',
    ],
    tech: ['PHP', 'Web Development'],
  },
  {
    title: 'AI Chatbot',
    category: 'Software',
    status: 'Academic project',
    description:
      'A Python and Flask chatbot application exploring conversational interfaces.',
    details: [
      'Built a Flask-based application interface.',
      'Worked with Python logic for conversational interactions.',
    ],
    tech: ['Python', 'Flask'],
  },
  {
    title: 'Dental Care System',
    category: 'Software',
    status: 'Academic project',
    description:
      'A Java-based application exploring patient and dental service management.',
    details: [
      'Applied object-oriented programming concepts.',
      'Designed application features around a healthcare scenario.',
    ],
    tech: ['Java', 'OOP'],
  },
  {
    title: 'Rent Calculation System',
    category: 'Software',
    status: 'Academic project',
    description:
      'A C# application for rent-related calculations and record management.',
    details: [
      'Developed calculation logic using C#.',
      'Worked with MySQL for data storage.',
    ],
    tech: ['C#', 'MySQL'],
  },
  {
    title: 'Hospital Management System',
    category: 'Full Stack',
    status: 'Academic project',
    description:
      'A web interface exploring common hospital administration workflows.',
    details: [
      'Developed responsive pages using web technologies.',
      'Structured interfaces for healthcare-related information.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Monitoring & Tracking UI',
    category: 'UI / UX',
    status: 'Design project',
    description:
      'An interface design concept for monitoring and tracking information.',
    details: [
      'Created interface concepts using Adobe XD.',
      'Explored dashboard layout, visual hierarchy and usability.',
    ],
    tech: ['Adobe XD', 'UI Design', 'Wireframing'],
    // Add real screenshots after placing them in public/projects/monitoring/
    // images: [
    //   '/projects/monitoring/wireframe-1.png',
    //   '/projects/monitoring/dashboard.png',
    // ],
  },
]

const filters = [
  'All',
  'Full Stack',
  'Cybersecurity',
  'Software',
  'UI / UX',
] as const

function iconFor(category: Category) {
  switch (category) {
    case 'Cybersecurity':
      return ShieldCheck
    case 'Full Stack':
      return Layers3
    case 'UI / UX':
      return Palette
    default:
      return FolderCode
  }
}

export default function ProjectsSection() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>('All')

  const [selected, setSelected] = useState<Project | null>(null)
  const [imageIndex, setImageIndex] = useState(0)

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  )

  const openProject = (project: Project) => {
    setImageIndex(0)
    setSelected(project)
  }

  const closeProject = () => setSelected(null)

  const galleryImages =
    selected?.category === 'UI / UX'
      ? selected.images ?? []
      : []

  useEffect(() => {
    if (!selected) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeProject()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selected])

  const changeImage = (direction: number) => {
    if (galleryImages.length === 0) return

    setImageIndex((current) =>
      (current + direction + galleryImages.length) %
      galleryImages.length
    )
  }

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
    >
      {/* SECTION HEADER */}
      <div className="mb-10">
        <p className="mb-3 text-xs tracking-[0.3em] text-amber-300">
          05 / SELECTED WORK
        </p>

        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Selected{' '}
              <span className="text-amber-300">Projects.</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              A collection of software engineering, cybersecurity,
              data visualisation and interface design projects.
            </p>
          </div>

          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-amber-300/40 hover:text-amber-200"
          >
            <FolderCode size={17} />
            GitHub Profile
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* FILTERS */}
      <div className="mb-9 flex flex-wrap gap-2.5">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
              filter === item
                ? 'border-amber-300 bg-amber-300 text-slate-950'
                : 'border-white/15 bg-white/[0.035] text-slate-300 hover:border-amber-300/40 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div
        layout
        className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const Icon = iconFor(project.category)
            const isDesign = project.category === 'UI / UX'
            const hasImages =
              isDesign && (project.images?.length ?? 0) > 0

            return (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1224]/85 backdrop-blur-xl transition-colors duration-300 hover:border-amber-300/35"
              >
                {/* DESIGN PREVIEW - UI/UX ONLY */}
                {isDesign && (
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#101b2c]">
                    {hasImages ? (
                      <img
                        src={project.images![0]}
                        alt={`${project.title} interface preview`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3">
                        <Palette
                          size={34}
                          strokeWidth={1.3}
                          className="text-amber-300/70"
                        />
                        <span className="text-xs tracking-[0.16em] text-slate-500">
                          DESIGN GALLERY
                        </span>
                      </div>
                    )}

                    <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#0b1224]/90 px-3 py-1 text-[10px] tracking-wider text-amber-200">
                      UI / UX
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-6 flex items-start justify-between gap-3">
                    {!isDesign ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.07] text-amber-300">
                        <Icon size={23} strokeWidth={1.5} />
                      </div>
                    ) : (
                      <span className="text-xs tracking-[0.16em] text-amber-300">
                        CREATIVE PRACTICE
                      </span>
                    )}

                    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">
                      {project.status}
                    </span>
                  </div>

                  {!isDesign && (
                    <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-amber-300">
                      {project.category}
                    </p>
                  )}

                  <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.06] bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
                    >
                      {isDesign ? 'View Design' : 'View Details'}
                      <ArrowUpRight size={16} />
                    </button>

                    {project.github && !isDesign && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white"
                      >
                        <FolderCode size={17} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-[#10192b] p-6 shadow-2xl md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs tracking-wider text-amber-300">
                    {selected.category} · {selected.status}
                  </p>

                  <h3 className="text-2xl font-semibold text-white">
                    {selected.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label="Close project details"
                  className="rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-amber-300/30 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* UI/UX GALLERY */}
              {selected.category === 'UI / UX' && (
                <div className="mt-7">
                  {galleryImages.length > 0 ? (
                    <>
                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b1224]">
                        <img
                          src={galleryImages[imageIndex]}
                          alt={`${selected.title} design ${imageIndex + 1}`}
                          className="max-h-[400px] w-full object-contain"
                        />

                        {galleryImages.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() => changeImage(-1)}
                              aria-label="Previous design"
                              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white"
                            >
                              <ChevronLeft size={20} />
                            </button>

                            <button
                              type="button"
                              onClick={() => changeImage(1)}
                              aria-label="Next design"
                              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </div>

                      <p className="mt-3 text-center text-xs text-slate-500">
                        {imageIndex + 1} / {galleryImages.length}
                      </p>

                      {galleryImages.length > 1 && (
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                          {galleryImages.map((image, index) => (
                            <button
                              key={`${image}-${index}`}
                              type="button"
                              onClick={() => setImageIndex(index)}
                              aria-label={`Show design ${index + 1}`}
                              className={`h-1.5 rounded-full transition-all ${
                                imageIndex === index
                                  ? 'w-7 bg-amber-300'
                                  : 'w-2 bg-white/25 hover:bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex min-h-44 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/15 bg-white/[0.025] p-6 text-center">
                      <Palette
                        size={30}
                        className="text-amber-300/70"
                      />
                      <p className="text-sm text-slate-400">
                        Design screenshots and wireframes will be added here.
                      </p>
                    </div>
                  )}
                </div>
              )}

              <p className="mt-7 leading-7 text-slate-300">
                {selected.description}
              </p>

              <h4 className="mt-8 font-semibold text-amber-200">
                Project Highlights
              </h4>

              <ul className="mt-4 space-y-3">
                {selected.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    {detail}
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 font-semibold text-amber-200">
                Technologies
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {selected.github && selected.category !== 'UI / UX' && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-300/30 px-5 py-2.5 text-sm font-medium text-amber-200 transition-colors hover:bg-amber-300/10"
                >
                  <FolderCode size={17} />
                  View Source on GitHub
                  <ExternalLink size={15} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
