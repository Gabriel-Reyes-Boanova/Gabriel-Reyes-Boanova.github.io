import { ExternalLink, Github } from 'lucide-react'
import ExtLink from './ExtLink'

// Ilustração do fluxo do EloSaúde: paciente → UBS → especialista → hospital, com retorno à unidade de origem
function CareFlow() {
  const nodes = ['Paciente', 'UBS', 'Especialista', 'Hospital']
  return (
    <figure className="rounded-lg border border-line bg-bg p-5" aria-label="Fluxo do cuidado: paciente, UBS, especialista e hospital, com a informação voltando à UBS">
      <div className="flex items-center justify-between gap-1">
        {nodes.map((n, i) => (
          <div key={n} className="flex flex-1 items-center">
            <span className="rounded-md border border-accent px-2 py-2 text-center text-xs font-medium sm:px-3 sm:text-sm">{n}</span>
            {i < nodes.length - 1 && <span className="h-px flex-1 bg-accent" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <p className="mt-4 border-t border-dashed border-line pt-3 text-xs text-muted">A informação acompanha o paciente e volta para a unidade de origem.</p>
    </figure>
  )
}

export default function ProjectCard({ p }) {
  const featured = p.variant === 'featured'
  const study = p.variant === 'study'

  return (
    <article className={`rounded-2xl border bg-surface p-6 sm:p-8 ${featured ? 'border-accent' : 'border-line'} ${study ? 'border-dashed' : ''}`}>
      <p className="text-sm text-accent">{p.category}</p>
      <h3 className={`mt-2 font-bold tracking-tight ${featured ? 'text-2xl sm:text-3xl' : 'text-2xl'}`}>{p.name}</h3>
      <p className="mt-3 max-w-3xl text-muted">{p.context}</p>

      <div className={`mt-6 grid gap-6 ${p.variant === 'flow' ? 'lg:grid-cols-2' : 'md:grid-cols-2'}`}>
        <div className="space-y-4 text-sm leading-relaxed">
          <div><h4 className="font-semibold">{study ? 'Por que existe' : 'Problema'}</h4><p className="mt-1 text-muted">{p.problem}</p></div>
          <div><h4 className="font-semibold">{study ? 'O que é' : 'Solução'}</h4><p className="mt-1 text-muted">{p.solution}</p></div>
        </div>
        <div className="space-y-5">
          {p.variant === 'flow' && <CareFlow />}
          <div>
            <h4 className="text-sm font-semibold">{study ? 'O que reúne' : 'Principais funcionalidades'}</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-muted">
              {p.features.map((f) => <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />{f}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {p.mine && (
        <div className="mt-6 rounded-lg border border-accent/60 bg-bg p-5">
          <h4 className="text-sm font-semibold">Minhas contribuições</h4>
          <ul className="mt-2 grid gap-1.5 text-sm text-muted sm:grid-cols-2">
            {p.mine.map((m) => <li key={m} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />{m}</li>)}
          </ul>
          <p className="mt-3 text-xs text-muted">Projeto desenvolvido em equipe, a partir de um desafio baseado em problema real. Sem vínculo de trabalho com a RBS.</p>
        </div>
      )}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
        {p.tech.map((t) => <li key={t} className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">{t}</li>)}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <ExtLink href={p.repo} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink hover:opacity-90"><Github size={16} />Ver no GitHub</ExtLink>
        {p.demo && <ExtLink href={p.demo} className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold hover:border-accent"><ExternalLink size={16} />Ver demonstração</ExtLink>}
      </div>
    </article>
  )
}
