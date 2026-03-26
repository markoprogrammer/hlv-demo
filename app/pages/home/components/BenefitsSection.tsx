const benefits = [
  { icon: '⏱', title: 'Do 45 min dnevno', description: 'Čuvamo tvoje vreme svaki radni dan' },
  { icon: '🌍', title: 'Remote 2 nedelje', description: 'Radi odakle god poželiš' },
  { icon: '🎤', title: 'Konferencije', description: 'Podržavamo tvoj razvoj i učešće' },
  { icon: '🍎', title: 'Hrana u kancelariji', description: 'Zdravi obroci i snackovi' },
  { icon: '🎵', title: 'Fokus okruženje', description: 'Muzika i prostor za duboki rad' },
  { icon: '🤝', title: 'Inicijative', description: 'Heapcon, StartIT, Petlja i više' },
]

export default function BenefitsSection() {
  return (
    <section className="py-8 pb-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="border border-white/8 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 border-b border-white/8">
            <div className="p-10 border-b md:border-b-0 md:border-r border-white/8">
              <p className="text-[#4fc273] font-bold text-xs tracking-[0.3em] uppercase mb-3">Zašto Hooloovoo?</p>
              <h2 className="font-bold text-4xl text-white leading-tight mb-4">
                Uslovi za tvoj<br />maksimalni potencijal.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed">
                Stvaramo okruženje gde svako od nas može da dostigne maksimum — i na poslu i van njega.
              </p>
            </div>
            <div className="p-10 flex flex-col justify-between">
              <p className="text-white/25 text-xs uppercase tracking-widest">Otvorene pozicije</p>
              <p className="font-extrabold text-7xl text-white leading-none">
                We're<br /><span className="text-[#4fc273]">hiring.</span>
              </p>
              <a
                href="/posao"
                className="inline-block self-start bg-black text-[#4fc273] font-bold text-base px-6 py-3 rounded-2xl border border-[#4fc273] hover:bg-[#4fc273]/10 transition-colors"
              >
                Vidi pozicije →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-white/8">
            {benefits.map((b) => (
              <div key={b.title} className="p-7 flex gap-4 hover:bg-white/2 transition-colors">
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{b.title}</h3>
                  <p className="text-white/35 text-xs leading-snug">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
