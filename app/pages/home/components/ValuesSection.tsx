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
    title: 'Pobuni se, posveti se',
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

        <div className="space-y-0">
          {values.map((value, idx) => (
            <div
              key={value.number}
              className={`grid md:grid-cols-12 group py-8 ${idx < values.length - 1 ? 'border-b border-white/8' : ''}`}
            >
              <div className="md:col-span-2 mb-3 md:mb-0">
                <span className="font-extrabold text-5xl text-[#4fc273]/15 group-hover:text-[#4fc273]/30 transition-colors leading-none">
                  {value.number}
                </span>
              </div>
              <div className="md:col-span-3 mb-2 md:mb-0 flex md:items-center">
                <h3 className="font-bold text-2xl text-white">{value.title}</h3>
              </div>
              <div className="md:col-span-7 flex md:items-center">
                <p className="text-white/50 text-base leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
