
import { useState } from 'react'
import { Menu, X, Orbit } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080c19]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
          aria-label="Kishok Nanthakumar - Home"
        >
          <Orbit className="text-amber-300" size={28} />
          <span className="font-bold tracking-[0.15em]">
            KISHOK<span className="text-amber-300">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-slate-300 transition-colors hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-white/20 p-2 text-white transition-colors hover:border-amber-300/40 xl:hidden"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#080c19]/95 xl:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className="grid max-h-[calc(100dvh-72px)] gap-1 overflow-y-auto p-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
