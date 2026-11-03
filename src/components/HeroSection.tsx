import HeroEnergy from './HeroEnergy'
import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
        
{/* Small luxury label - top right */}
<div className="pointer-events-none absolute right-8 top-28 z-20 hidden items-center gap-3 xl:flex">
  <span className="text-xs text-amber-200/70">01</span>
  <span className="h-px w-8 bg-white/20" />
  <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
    Introduction
  </span>
</div>

{/* Portfolio label - bottom left */}
<div className="pointer-events-none absolute bottom-6 left-6 z-20 hidden items-center gap-3 xl:flex">
  <span className="h-px w-8 bg-amber-200/40" />
  <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
    Portfolio / 2026
  </span>
</div>
<HeroEnergy />
      {/* Cinematic background lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Editorial content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-9 flex flex-wrap items-center gap-3"
          >
            
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.5)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-300">
              Open to professional opportunities
            </span>

            <span className="hidden h-px w-8 bg-white/20 sm:block" />

            <span className="flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
              <MapPin size={11} />
              Crawley, United Kingdom
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-amber-200/75">
              Software Engineer · Cybersecurity
            </p>

            <h1 className="text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
  <span className="block bg-gradient-to-r from-[#FFF2C6] via-[#E7C878] to-[#CDA65A] bg-clip-text text-transparent">
    Kishok
  </span>
              <span className="mt-2 block bg-gradient-to-r from-white via-slate-200 to-amber-200/80 bg-clip-text pb-3 text-transparent">
                Nanthakumar.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 max-w-xl"
          >
            <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
              Building thoughtful digital experiences
              at the intersection of
              <span className="text-white">
                {' '}engineering, security and design.
              </span>
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
              A computing and software engineering graduate
              exploring the possibilities of secure,
              purposeful technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#e7d3ae] px-7 py-4 text-sm font-semibold text-[#11131d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f3e3c7]"
            >
              Explore selected work
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-amber-200/40 hover:bg-white/[0.08]"
            >
              Let's connect
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-amber-200/60 to-transparent" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Explore the universe below
            </span>

            <ArrowDown
              size={13}
              className="text-amber-200/60"
            />
          </motion.div>
        </div>

       
{/* Luxury editorial portrait */}
<motion.div
  initial={{ opacity: 0, y: 30, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.1, delay: 0.2 }}
  className="relative mx-auto w-full max-w-[420px] pb-10"
>
  {/* Atmospheric lighting */}
  <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-[75px]" />

  {/* Editorial frame */}
  <div className="relative">
    <div className="absolute -left-4 -top-4 h-20 w-20 rounded-tl-[2rem] border-l border-t border-amber-200/40" />

    <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-br-[2rem] border-b border-r border-amber-200/40" />

    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#10182b] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
      <img
        src="/profile.jpeg"
        alt="Portrait of Kishok Nanthakumar"
        className="h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {/* Subtle cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050711]/60 via-transparent to-transparent" />

      {/* Portrait caption */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-100/80">
            The person behind the code
          </p>

          <p className="mt-2 text-xl font-medium tracking-tight text-white">
            Kishok Nanthakumar
          </p>
        </div>

        <span className="hidden rounded-full border border-white/25 bg-black/25 px-3 py-2 text-[10px] tracking-[0.2em] text-white backdrop-blur-md sm:inline-block">
          001
        </span>
      </div>
    </div>
  </div>

  {/* Editorial descriptor */}
  <div className="mt-7 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-amber-200/50" />

      <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
        Engineering × Creativity
      </span>
    </div>

    <span className="text-[10px] tracking-[0.2em] text-amber-200/60">
      01 / 07
    </span>
  </div>
</motion.div>

      </div>
    </section>
  )
}
