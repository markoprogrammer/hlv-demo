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
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="font-bold text-5xl text-white mb-6">
              Zašto<br />
              <span className="text-[#4fc273]">Hooloovoo?</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Stvaramo uslove da svako od nas dostigne maksimalni potencijal —
              i na poslu i van njega.
            </p>
            <a
              href="/posao"
              className="inline-block mt-8 bg-black text-[#4fc273] font-bold text-lg px-8 py-4 rounded-2xl border border-[#4fc273] hover:bg-[#4fc273]/10 transition-colors"
            >
              Otvorene pozicije
            </a>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#1a1a1a]/80 rounded-2xl p-6">
                <span className="text-2xl mb-3 block">{b.icon}</span>
                <h3 className="font-medium text-lg text-white mb-1">{b.title}</h3>
                <p className="text-white/40 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
