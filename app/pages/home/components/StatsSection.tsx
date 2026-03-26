const stats = [
  { value: '200+', label: 'inženjera u timu' },
  { value: '20M+', label: 'korisnika mesečno' },
  { value: '1.5M+', label: 'aktivnih korisnika' },
  { value: '200+', label: 'mikroservisa' },
]

export default function StatsSection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="border border-white/8 rounded-2xl overflow-hidden grid md:grid-cols-3">
          <div className="md:col-span-2 p-10 border-b md:border-b-0 md:border-r border-white/8">
            <p className="text-[#4fc273] font-bold text-xs tracking-[0.3em] uppercase mb-5">Klijent — Kindred Group</p>
            <h2 className="font-bold text-4xl text-white leading-snug mb-5">
              Softver koji pokreće<br />
              <span className="text-[#4fc273]">gaming industriju.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-lg">
              Hooloovoo razvija softver za gaming i betting industriju.
              Kindred Group je jedan od vodećih operatora u svetu —
              sa transakcijama na nivou PayPal-a.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/4 rounded-xl p-4">
                  <p className="font-extrabold text-3xl text-[#4fc273] leading-none mb-1">{stat.value}</p>
                  <p className="text-white/50 text-xs leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-10 flex flex-col justify-between bg-[#4fc273]/3">
            <p className="text-white/30 text-xs uppercase tracking-widest">Skalabilnost</p>
            <div>
              <p className="font-extrabold text-8xl text-white leading-none mb-2">99<span className="text-[#4fc273]">%</span></p>
              <p className="text-white/50 text-sm">uptime garantija na production sistemima</p>
            </div>
            <div className="h-px bg-white/10" />
            <p className="text-white/30 text-xs">Microservices · Event-driven · Auto-scaling</p>
          </div>
        </div>
      </div>
    </section>
  )
}
