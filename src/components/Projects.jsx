import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

// A experiência da RBS aparece primeiro por ser o projeto baseado em necessidade real de uma empresa.
const order = ['planeta-atlantida', 'elosaude', 'java-annotations']

export default function Projects() {
  const sorted = order.map((id) => projects.find((p) => p.id === id)).filter(Boolean)
  return (
    <Section id="projetos" title="Projetos em destaque" intro="Três projetos, três contextos: um desafio real, um hackathon e um repositório de estudos aberto.">
      <div className="space-y-8">{sorted.map((p) => <ProjectCard key={p.id} p={p} />)}</div>
    </Section>
  )
}
