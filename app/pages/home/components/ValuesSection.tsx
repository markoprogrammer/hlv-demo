const values = [
  {
    number: '01',
    title: 'Budi svoj',
    description: 'Nismo svi isti – i u tome je lepota. Različitost perspektiva je naša snaga, ne prepreka.',
  },
  {
    number: '02',
    title: 'Prati svoju čuku',
    description: 'Verujemo u intuiciju i lično prosuđivanje. Donosiš odluke koje su prave za tebe i tim.',
  },
  {
    number: '03',
    title: 'Pobuni se, posvedi se',
    description: 'Sloboda da dovediš u pitanje — i hrabrost da se potpuno posvetiš kada se odlučiš.',
  },
]

export default function ValuesSection() {
  return (
    <section className="py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-[#4fc273] font-bold text-xs tracking-[0.3em] uppercase mb-3">HLV Framework</p>
            <h2 className="font-bold text-5xl text-white leading-tight">Tri principa.<br />Jedna kultura.</h2>
          </div>
          <p className="text-white/40 text-base max-w-xs md:text-right hidden md:block">
            "Želimo da budemo<br />
            <span className="text-white/70">najbolji IT poslodavac u regionu."</span>
          </p>
        </div>
        <div className="border border-white/8 rounded-2xl overflow-hidden divide-y divide-white/8">
          {values.map((value) => (
            <div key={value.number} className="grid md:grid-cols-12 group hover:bg-white/2 transition-colors">
              <div className="md:col-span-2 px-8 py-7 flex items-center border-b md:border-b-0 md:border-r border-white/8">
                <span className="font-extrabold text-5xl text-[#4fc273]/20 group-hover:text-[#4fc273]/40 transition-colors leading-none">
                  {value.number}
                </span>
              </div>
              <div className="md:col-span-3 px-8 py-7 flex items-center border-b md:border-b-0 md:border-r border-white/8">
                <h3 className="font-bold text-2xl text-white">{value.title}</h3>
              </div>
              <div className="md:col-span-7 px-8 py-7 flex items-center">
                <p className="text-white/50 text-base leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
