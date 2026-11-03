
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Code2,
  ShieldCheck,
  Palette,
  MapPin,
  BriefcaseBusiness,
} from 'lucide-react'

const interests = [
  {
    icon: Code2,
    number: '01',
    title: 'Software Engineering',
    description:
      'Full-stack applications, practical development and thoughtful digital solutions.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Cybersecurity',
    description:
      'Security fundamentals, web application testing and digital forensics.',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Creative Technology',
    description:
      'Interface design, data visualisation and user-focused experiences.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-28"
    >
      {/* Section introduction */}
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
            02 / The Story
          </span>
        </div>

        <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
          Beyond the
          <span className="block bg-gradient-to-r from-[#fff0bf] via-[#d9b66a] to-[#a97932] bg-clip-text text-transparent">
            Code.
          </span>
        </h2>
      </motion.div>

      {/* Main editorial layout */}
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Professional introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-amber-200/15 bg-[#0b1224]/85 p-8 backdrop-blur-xl md:p-12"
        >
          <div className="absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-amber-200/60 to-transparent" />

          <p className="text-xs uppercase tracking-[0.28em] text-amber-200/70">
            A little about me
          </p>

          <h3 className="mt-7 text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
            Engineering practical solutions.
            <span className="block text-amber-200">
              Exploring what's possible.
            </span>
          </h3>

          <p className="mt-7 text-base leading-8 text-slate-300">
            I'm Kishok Nanthakumar, a UK-based graduate with
            qualifications in Software Engineering and
            Computing with Cyber Security Technology.
            I enjoy building practical applications,
            understanding how systems work and developing
            secure, thoughtful digital experiences.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            My interests span software development,
            cybersecurity, data visualisation and creative
            design. I bring together analytical thinking,
            problem-solving and an appreciation for
            intuitive user experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
            <MapPin size={16} className="text-amber-200" />

            <span className="text-sm text-slate-300">
              Crawley, United Kingdom
            </span>

            <span className="mx-2 hidden h-4 w-px bg-white/20 sm:block" />

            <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
              Open to UK opportunities
            </span>
          </div>
        </motion.div>

        {/* Career opportunity panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-[#192037]/95 via-[#0c1325]/95 to-[#090e1c]/95 p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/[0.07] blur-[80px]" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]" />

              <span className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Career Status
              </span>
            </div>

            <BriefcaseBusiness
              size={34}
              strokeWidth={1.4}
              className="mt-12 text-amber-200"
            />

            <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white">
              Open to new
              <span className="block text-amber-200">
                opportunities.
              </span>
            </h3>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              I'm actively seeking graduate, junior and
              entry-level opportunities where I can
              contribute, continue learning and grow
              professionally.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Particularly interested in software
              development, IT support, cybersecurity
              and related technical roles.
            </p>
          </div>

          <a
            href="#contact"
            className="group relative mt-10 flex items-center justify-between rounded-full border border-amber-200/30 bg-amber-200/10 px-6 py-4 text-sm font-medium text-amber-100 transition-all duration-300 hover:border-amber-200/60 hover:bg-amber-200/15"
          >
            Let's discuss an opportunity

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Technical interests */}
      <div className="mt-16">
        <div className="mb-7 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Areas of interest
          </span>

          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {interests.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1224]/75 p-7 transition-colors duration-300 hover:border-amber-200/35"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                    className="text-amber-200"
                  />

                  <span className="text-xs tracking-[0.2em] text-slate-600">
                    {item.number}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-amber-200/70 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
