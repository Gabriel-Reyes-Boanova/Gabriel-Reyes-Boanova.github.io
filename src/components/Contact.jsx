import { Github, Linkedin, Mail } from 'lucide-react'
import Section from './Section'
import ExtLink from './ExtLink'
import { profile } from '../data/profile'

const btn = 'inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold hover:border-accent'

export default function Contact() {
  return (
    <Section id="contato" title="Vamos construir algo juntos?">
      <p className="max-w-2xl leading-relaxed text-muted">
        Estou em busca da minha primeira oportunidade na área de desenvolvimento de software e aberto a conhecer novas pessoas,
        participar de projetos e trocar conhecimentos. Se você é recrutador, desenvolvedor ou tem interesse em conversar sobre
        tecnologia, será um prazer entrar em contato.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ExtLink href={profile.linkedin} className={`${btn} bg-accent text-accent-ink hover:opacity-90`}><Linkedin size={18} />LinkedIn</ExtLink>
        <ExtLink href={profile.github} className={btn}><Github size={18} />GitHub</ExtLink>
        {profile.email && <a href={`mailto:${profile.email}`} className={btn}><Mail size={18} />{profile.email}</a>}
      </div>
    </Section>
  )
}
