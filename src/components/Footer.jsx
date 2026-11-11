import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 text-sm text-muted">
        <p>Gabriel Reyes Boanova · 2026 · São Jerônimo, RS</p>
        <a href="#inicio" className="inline-flex items-center gap-2 hover:text-ink"><ArrowUp size={16} />Voltar ao topo</a>
      </div>
    </footer>
  )
}
