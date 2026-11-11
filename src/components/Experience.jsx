import Section from './Section'
import ExtLink from './ExtLink'
import { timeline } from '../data/profile'

export default function Experience() {
  return (
    <Section id="formacao" title="Formação e experiências">
      <ol className="relative ml-2 space-y-10 border-l border-line pl-8">
        {timeline.map((t) => (
          <li key={t.title} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" aria-hidden="true" />
            <p className="text-sm text-accent">{t.kind}{t.period && ` · ${t.period}`}</p>
            <h3 className="mt-1 text-xl font-semibold">{t.title}</h3>
            <p className="text-sm text-muted">{t.place}</p>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{t.text}</p>
            {t.link && <ExtLink href={t.link.href} className="mt-3 inline-block text-sm font-semibold text-accent underline underline-offset-4">{t.link.label}</ExtLink>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
