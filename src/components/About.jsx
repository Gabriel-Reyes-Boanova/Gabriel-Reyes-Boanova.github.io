import Section from './Section'

const points = [
  'Técnico em Mecatrônica no ensino médio',
  'Graduação em Sistemas para Internet no IFSul',
  'Backend com Java e Spring Boot, APIs e boas práticas',
  'Estudos de React e Frontend',
  'Aprendizado autodidata, na prática',
  'Projetos colaborativos e desafios com problemas reais',
]

export default function About() {
  return (
    <Section id="sobre" title="Aprendo construindo.">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>Meu interesse por tecnologia começou no ensino médio, no curso técnico de Mecatrônica. Foi ali que ganhei o gosto por raciocínio lógico e por resolver problemas, e isso me levou para o software.</p>
          <p>Hoje faço Tecnologia em Sistemas para Internet no IFSul (campus Charqueadas), e moro em São Jerônimo. Meu foco é o backend com Java e Spring Boot, e estou aprendendo React para chegar ao Full Stack.</p>
          <p>Estudo por conta própria e gosto de testar o que aprendo em projeto de verdade: já participei de um hackathon e de um desafio com problema real. Também me interesso por organização de código, arquitetura e construção de APIs.</p>
        </div>
        <ul className="space-y-3 rounded-xl border border-line bg-surface p-6">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{p}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
