import Section from './Section'
import { technologies } from '../data/technologies'

function Badge({ name, status }) {
  const using = status === 'uso'
  return (
    <li className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm ${using ? 'border-accent text-ink' : 'border-dashed border-line text-muted'}`}>
      <span className={`h-2 w-2 rounded-full ${using ? 'bg-accent' : 'border border-muted'}`} aria-hidden="true" />
      {name}<span className="sr-only"> ({using ? 'já utilizo' : 'estudando'})</span>
    </li>
  )
}

export default function Technologies() {
  return (
    <Section id="tecnologias" title="Tecnologias e ferramentas"
      intro="Sem barras de porcentagem: aqui separo o que já usei em projetos do que ainda estou estudando.">
      <div className="mb-8 flex flex-wrap gap-6 text-sm text-muted">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" />Já utilizo em projetos</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full border border-muted" />Estudando</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {technologies.map((g) => (
          <div key={g.group} className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-lg font-semibold">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((i) => <Badge key={i.name} {...i} />)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
