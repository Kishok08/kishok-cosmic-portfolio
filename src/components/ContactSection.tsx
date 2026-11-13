
import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Mail,
  BriefcaseBusiness,
Code2,
  Download,
  ArrowUpRight,
  MapPin,
  Copy,
  Check,
  ArrowRight,
  ArrowUp,
} from 'lucide-react'

const EMAIL = 'nanthakkishok08@gmail.com'
const GITHUB = 'https://github.com/Kishok08'

// Add your verified LinkedIn URL when ready.
const LINKEDIN = 'http://www.linkedin.com/in/kishok-nanthakumar-0671b6251'

const contactLinks = [
  {
    title: 'Email',
    description: 'For opportunities, projects and collaboration.',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me professionally.',
    value: 'Professional network',
    href: LINKEDIN,
    icon: BriefcaseBusiness,
  },
  {
    title: 'GitHub',
    description: 'Explore my repositories and technical work.',
    value: '@Kishok08',
    href: GITHUB,
    icon: Code2,
  },
]

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
    } catch {
      // Clipboard may be unavailable on non-secure origins.
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pb-10 pt-24"
    >
      {/* CONTACT HERO */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden rounded-[2rem] border border-amber-300/15 bg-[#0b1224]/90 px-6 py-10 backdrop-blur-xl sm:px-9 md:px-12 md:py-16"
      >
        {/* AMBIENT BACKGROUND */}

<motion.div
  aria-hidden="true"
  className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-500/[0.09] blur-3xl"
  animate={{
    opacity: [0.35, 0.8, 0.35],
    scale: [1, 1.18, 1],
  }}
  transition={{
    duration: 9,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
/>
        <div className="pointer-events-none absolute -bottom-36 left-1/4 h-72 w-72 rounded-full bg-amber-300/[0.045] blur-3xl" />

        <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1.5fr_0.5fr]">
          <div>
            <p className="mb-6 text-xs tracking-[0.3em] text-amber-300">
              07 / LET'S CONNECT
            </p>

            
<motion.h2
  initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  viewport={{ once: true }}
  transition={{
    duration: 0.9,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl"
>
  Have an idea?
  <br />
  Let's make it{' '}
  <motion.span
    className="inline-block text-amber-300"
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.5 }}
  >
    happen.
  </motion.span>
</motion.h2>


            <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">
              I'm interested in opportunities across software
              engineering, cybersecurity and IT. Whether you're
              hiring, collaborating on a project or simply
              looking to connect, I'd be glad to hear from you.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-slate-300">
              <MapPin size={16} className="text-amber-300" />
              Crawley, United Kingdom
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <motion.a whileHover={{ y: -3, scale: 1.025 }}
whileTap={{ scale: 0.97 }}
transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-amber-200"
              >
                <Mail size={17} />
                Get in Touch
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>

              <a
                href="/Kishok_Nanthakumar_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-amber-300/40 hover:bg-white/[0.07]"
              >
                <Download size={17} />
                Download CV
              </a>
            </div>
          </div>

          {/* DECORATIVE SIDE PANEL */}
          <div className="hidden flex-col items-end justify-end lg:flex">
           
<motion.div
  className="flex h-40 w-40 items-center justify-center rounded-full border border-amber-300/15"
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <motion.div
    className="flex h-28 w-28 items-center justify-center rounded-full border border-amber-300/25"
    animate={{
      rotate: [0, 8, 0, -8, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <ArrowUpRight
      size={46}
      strokeWidth={1}
      className="text-amber-300"
    />
  </motion.div>
</motion.div>


            <p className="mt-8 text-right text-[11px] uppercase leading-6 tracking-[0.2em] text-slate-500">
              Let's create
              <br />
              something meaningful
            </p>
          </div>
        </div>
      </motion.div>

      {/* CONTACT CHANNELS */}
      <div className="mb-6 mt-12 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-amber-300">
            DIRECT CHANNELS
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Find me online.
          </h3>
        </div>

        <p className="text-xs text-slate-500">
          Open to professional connections
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {contactLinks.map((link, index) => {
          const Icon = link.icon

          return (
            <motion.article
              key={link.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group flex min-h-[230px] flex-col rounded-2xl border border-white/10 bg-[#0b1224]/80 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-amber-300/35"
            >
              <div className="mb-7 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.07] text-amber-300">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {link.href ? (
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith('mailto:')
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      link.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={`Open ${link.title}`}
                    className="rounded-full border border-white/10 p-2 text-slate-400 transition-colors hover:border-amber-300/30 hover:text-amber-300"
                  >
                    <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-slate-500">
                    Coming soon
                  </span>
                )}
              </div>

              <h4 className="text-lg font-semibold text-white">
                {link.title}
              </h4>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                {link.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-2 pt-5">
                <span className="min-w-0 break-all text-xs text-amber-200/80">
                  {link.value}
                </span>

                {link.href && (
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-300"
                  />
                )}
              </div>
            </motion.article>
          )
        })}
      </div>

      {/* QUICK EMAIL */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-5">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
            PREFER EMAIL?
          </p>

          <p className="mt-2 break-all text-sm font-medium text-white sm:text-base">
            {EMAIL}
          </p>
        </div>

        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 px-5 py-2.5 text-sm font-medium text-amber-200 transition-colors hover:bg-amber-300/10"
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy Email
            </>
          )}
        </button>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              Kishok Nanthakumar
              <span className="ml-2 text-amber-300">.</span>
            </p>

            <p className="mt-1.5 text-xs text-slate-500">
              Software Engineering · Cybersecurity · IT
            </p>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kishok Nanthakumar.
            All rights reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-slate-300 transition-colors hover:border-amber-300/40 hover:text-amber-200"
          >
            Back to top
            <ArrowUp size={15} />
          </a>
        </div>
      </footer>
    </section>
  )
}
