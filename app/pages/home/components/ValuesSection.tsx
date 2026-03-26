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
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#4fc273] font-bold text-sm tracking-[0.3em] uppercase mb-4">HLV Framework</p>
        <h2 className="font-bold text-5xl text-white mb-16">
          "Želimo da budemo<br />
          <span className="text-white/40">najbolji IT poslodavac u regionu."</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.number} className="border border-[#4fc273]/40 rounded-2xl p-8 hover:border-[#4fc273] transition-colors group">
              <p className="text-[#4fc273]/40 font-extrabold text-5xl mb-6 group-hover:text-[#4fc273]/60 transition-colors">
                {value.number}
              </p>
              <h3 className="font-medium text-2xl text-white mb-4">{value.title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
