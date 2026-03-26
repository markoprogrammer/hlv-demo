const areas = [
  { label: 'Microservices', detail: '200+ servisa u produkciji', accent: true },
  { label: 'ReactJS Frontend', detail: 'React 19, TypeScript, SSR', accent: false },
  { label: 'DevOps & CI/CD', detail: 'Continuous delivery pipeline', accent: false },
  { label: 'Big Data', detail: 'Analytics & real-time processing', accent: false },
  { label: 'Async Systems', detail: 'Event-driven arhitektura', accent: false },
  { label: 'Reactive Design', detail: 'Resilient, fault-tolerant', accent: false },
  { label: 'AI & ML', detail: 'Deep tech, production AI', accent: false },
  { label: 'Java Backend', detail: 'Senior & lead level inženjeri', accent: true },
]

export default function ExpertiseSection() {
  return (
    <section className="py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-[#4fc273] font-bold text-xs tracking-[0.3em] uppercase mb-3">Tehnička ekspertiza</p>
              <h2 className="font-bold text-4xl text-white leading-snug mb-4">Šta<br />gradimo.</h2>
              <p className="text-white/40 text-sm leading-relaxed">
                Kompleksni distribuirani sistemi. Visoke performanse. Pouzdana arhitektura koja radi 24/7.
              </p>
            </div>
            <div className="hidden md:block mt-6 p-5 border border-[#4fc273]/20 rounded-2xl">
              <p className="text-[#4fc273] font-extrabold text-3xl mb-1">8+</p>
              <p className="text-white/40 text-xs">tehnoloških domena kojima dominiramo</p>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {areas.map((area) => (
              <div
                key={area.label}
                className={`rounded-2xl p-5 flex flex-col justify-between min-h-[110px] border transition-colors hover:border-[#4fc273]/40 ${
                  area.accent ? 'bg-[#4fc273]/8 border-[#4fc273]/25' : 'bg-[#1a1a1a] border-white/6'
                }`}
              >
                <p className={`font-bold text-sm leading-tight ${area.accent ? 'text-[#4fc273]' : 'text-white'}`}>
                  {area.label}
                </p>
                <p className="text-white/35 text-xs mt-2 leading-snug">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
