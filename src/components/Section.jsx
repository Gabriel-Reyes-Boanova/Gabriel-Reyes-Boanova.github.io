export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  )
}
