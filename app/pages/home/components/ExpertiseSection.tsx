const areas = [
  { label: 'Microservices', detail: '200+ servisa' },
  { label: 'ReactJS Frontend', detail: 'React 19' },
  { label: 'DevOps & CI/CD', detail: 'Continuous delivery' },
  { label: 'Big Data', detail: 'Analytics & processing' },
  { label: 'Async Systems', detail: 'Event-driven' },
  { label: 'Reactive Design', detail: 'Resilient architecture' },
  { label: 'AI & ML', detail: 'Deep tech' },
  { label: 'Java Backend', detail: 'Senior & lead level' },
]

export default function ExpertiseSection() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#1a1a1a]/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl text-white mb-4">Šta radimo</h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl">
          Kompleksni sistemi, visoke performanse, pouzdana arhitektura.
        </p>

        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <div
              key={area.label}
              className="flex items-center gap-3 bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-3 hover:border-[#4fc273]/50 transition-colors"
            >
              <span className="text-white font-medium">{area.label}</span>
              <span className="text-[#4fc273] text-sm">{area.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
