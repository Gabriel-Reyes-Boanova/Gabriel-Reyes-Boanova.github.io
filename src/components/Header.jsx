import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../data/profile'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) { /* ignora */ }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
          {profile.short}<span className="text-accent">.</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-muted transition-colors hover:text-ink">{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="rounded-lg border border-line p-2 text-muted transition-colors hover:text-ink">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label="Abrir menu"
            className="rounded-lg border border-line p-2 text-muted lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal (celular)" className="border-t border-line bg-bg lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-ink">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
