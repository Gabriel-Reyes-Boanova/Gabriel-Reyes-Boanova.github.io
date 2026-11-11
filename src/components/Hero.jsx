import { Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import ExtLink from './ExtLink'

const btn = 'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors'

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
      <div>
        <p className="rise inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Disponível para novas oportunidades
        </p>
        <h1 className="rise rise-2 mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="rise rise-2 mt-4 max-w-xl text-lg text-accent">{profile.role}</p>
        <p className="rise rise-3 mt-6 max-w-xl leading-relaxed text-muted">
          Olá! Sou Gabriel, estudante de Tecnologia em Sistemas para Internet e apaixonado por desenvolvimento de software.
          Gosto de transformar problemas reais em soluções tecnológicas, aprender novas ferramentas e construir aplicações que gerem valor.
        </p>
        <p className="rise rise-3 mt-4 flex items-center gap-2 text-sm text-muted"><MapPin size={16} aria-hidden="true" />{profile.location}</p>

        <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
          <a href="#projetos" className={`${btn} bg-accent text-accent-ink hover:opacity-90`}>Conheça meus projetos</a>
          <ExtLink href={profile.linkedin} className={`${btn} border border-line hover:border-accent`}>Meu LinkedIn</ExtLink>
        </div>
        <div className="rise rise-3 mt-6 flex gap-4 text-muted">
          <ExtLink href={profile.github} aria-label="GitHub de Gabriel" className="hover:text-ink"><Github size={22} /></ExtLink>
          <ExtLink href={profile.linkedin} aria-label="LinkedIn de Gabriel" className="hover:text-ink"><Linkedin size={22} /></ExtLink>
        </div>
      </div>

      {/* Representação de código: o que eu faço, em poucas linhas */}
      <div className="rise rise-3 overflow-hidden rounded-xl border border-line bg-surface font-mono text-[13px] leading-6 shadow-sm" aria-hidden="true">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 text-xs text-muted">Gabriel.java</span>
        </div>
        <pre className="overflow-x-auto p-5 text-muted"><code>{`public class Gabriel {
  String foco   = "Backend";
  String stack  = "Java + Spring Boot";
  String estudo = "React";
  String curso  = "TSI · IFSul";

  void aprender() {
    // aprendo construindo
    projetoReal.entregar();
  }
}`}</code></pre>
      </div>
    </section>
  )
}
