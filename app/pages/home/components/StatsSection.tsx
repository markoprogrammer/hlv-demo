const stats = [
  { value: '200+', label: 'inženjera u timu' },
  { value: '20M+', label: 'korisnika mesečno' },
  { value: '1.5M+', label: 'aktivnih korisnika' },
  { value: '200+', label: 'mikroservisa' },
]

export default function StatsSection() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-bold text-5xl text-white mb-6">
            Softver koji pokreće<br />
            <span className="text-[#4fc273]">gaming industriju.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Hooloovoo razvija softver za gaming i betting industriju. Naš klijent Kindred Group
            je jedan od vodećih operatora u svetu — sa transakcijama na nivou PayPal-a.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#1a1a1a]/80 rounded-2xl p-6">
              <p className="font-extrabold text-5xl text-[#4fc273] mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
