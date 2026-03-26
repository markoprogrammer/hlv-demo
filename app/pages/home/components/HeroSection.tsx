const tickerItems = [
  'Microservices', 'React 19', 'DevOps & CI/CD', 'Big Data', 'Java Backend',
  'AI & ML', 'TypeScript', 'Async Systems', 'Kindred Group', 'Gaming Industry',
  'Event-driven', '200+ servisa', '20M+ korisnika', 'Deep Tech',
]

interface Badge {
  label: string
  top?: string
  bottom?: string
  right: string
}

const badges: Badge[] = [
  { label: '200+ mikroservisa', top: '12%', right: '18%' },
  { label: 'React 19 + SSR', top: '28%', right: '4%' },
  { label: '20M+ korisnika', bottom: '32%', right: '12%' },
  { label: 'AI & Deep Tech', bottom: '18%', right: '34%' },
  { label: 'Java • Node • Go', top: '55%', right: '2%' },
]

function HeroSvg() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse-ring { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.45; } }
        @keyframes float-dot { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes dash { to { stroke-dashoffset: -200; } }
        .ring-1 { transform-origin: 250px 250px; animation: spin-slow 18s linear infinite; }
        .ring-2 { transform-origin: 250px 250px; animation: spin-reverse 12s linear infinite; }
        .ring-3 { transform-origin: 250px 250px; animation: spin-slow 28s linear infinite; }
        .pulse { animation: pulse-ring 3s ease-in-out infinite; }
        .dot-1 { animation: float-dot 3.2s ease-in-out infinite; }
        .dot-2 { animation: float-dot 4s ease-in-out infinite 0.5s; }
        .dot-3 { animation: float-dot 3.6s ease-in-out infinite 1.2s; }
        .moving-dash { stroke-dasharray: 80 120; animation: dash 4s linear infinite; }
      `}</style>
      <circle cx="250" cy="250" r="220" fill="#4fc273" fillOpacity="0.04" className="pulse" />
      <g className="ring-3">
        <circle cx="250" cy="250" r="200" stroke="#4fc273" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="250" cy="250" r="200" stroke="#4fc273" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 20" className="moving-dash" />
      </g>
      <g className="ring-2">
        <circle cx="250" cy="250" r="155" stroke="#4fc273" strokeOpacity="0.12" strokeWidth="1" />
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const r = 155
          const x = 250 + r * Math.cos((angle * Math.PI) / 180)
          const y = 250 + r * Math.sin((angle * Math.PI) / 180)
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="5" fill="#4fc273" fillOpacity="0.6" />
              <circle cx={x} cy={y} r="10" stroke="#4fc273" strokeOpacity="0.2" strokeWidth="1" fill="none" />
            </g>
          )
        })}
      </g>
      <g className="ring-1">
        <circle cx="250" cy="250" r="105" stroke="#4fc273" strokeOpacity="0.18" strokeWidth="1.5" />
        {[0, 90, 180, 270].map((angle, i) => {
          const r = 105
          const x = 250 + r * Math.cos((angle * Math.PI) / 180)
          const y = 250 + r * Math.sin((angle * Math.PI) / 180)
          return <rect key={i} x={x - 4} y={y - 4} width="8" height="8" fill="#4fc273" fillOpacity="0.7" transform={`rotate(45, ${x}, ${y})`} />
        })}
      </g>
      <circle cx="250" cy="250" r="38" fill="#000000" stroke="#4fc273" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="24" fill="#4fc273" fillOpacity="0.1" />
      <circle cx="250" cy="250" r="10" fill="#4fc273" fillOpacity="0.8" />
      <circle cx="250" cy="250" r="4" fill="#4fc273" />
      <circle cx="130" cy="130" r="3" fill="#4fc273" fillOpacity="0.5" className="dot-1" />
      <circle cx="370" cy="110" r="2.5" fill="#4fc273" fillOpacity="0.4" className="dot-2" />
      <circle cx="400" cy="370" r="3.5" fill="#4fc273" fillOpacity="0.35" className="dot-3" />
      <circle cx="100" cy="360" r="2" fill="#4fc273" fillOpacity="0.3" className="dot-1" />
      {[36, 108, 180, 252, 324].map((angle, i) => {
        const r2 = 155
        const x2 = 250 + r2 * Math.cos((angle * Math.PI) / 180)
        const y2 = 250 + r2 * Math.sin((angle * Math.PI) / 180)
        return <line key={i} x1="250" y1="250" x2={x2} y2={y2} stroke="#4fc273" strokeOpacity="0.07" strokeWidth="1" />
      })}
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col pt-16 relative overflow-hidden">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4fc273 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.04,
        }}
      />

      {/* Green glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#4fc273]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-[#4fc273]/4 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="flex-1 flex items-center px-6 md:px-16 lg:px-24">
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-8">

          {/* Left — text */}
          <div className="flex-1">
            <p className="text-[#4fc273] font-bold text-xs tracking-[0.3em] uppercase mb-6">
              Deep tech. AI you can trust. People who care.
            </p>
            <h1 className="font-extrabold leading-none text-white mb-8" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>
              Dođi.<br />
              Igraj.<br />
              <span className="text-[#4fc273]">Pokidaj.</span>
            </h1>

            {/* CTA + stat pills */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="/posao"
                className="inline-block bg-[#4fc273] text-black font-bold text-xl px-10 py-5 rounded-2xl hover:scale-105 transition-transform"
              >
                Pridruži se!
              </a>
              <div className="flex gap-3">
                <span className="border border-white/15 text-white/60 text-sm px-4 py-2 rounded-full">200+ inženjera</span>
                <span className="border border-white/15 text-white/60 text-sm px-4 py-2 rounded-full">Beograd · Novi Sad</span>
              </div>
            </div>

            {/* Mini stats row */}
            <div className="flex gap-6 border-t border-white/8 pt-6">
              {[
                { v: '200+', l: 'mikroservisa' },
                { v: '20M+', l: 'korisnika' },
                { v: '10+', l: 'godina iskustva' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-extrabold text-2xl text-[#4fc273] leading-none">{s.v}</p>
                  <p className="text-white/35 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — SVG + floating badges */}
          <div className="relative flex-shrink-0 w-72 h-72 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px]">
            <div className="opacity-85 w-full h-full">
              <HeroSvg />
            </div>
            {/* Floating badges */}
            {badges.map((b) => (
              <div
                key={b.label}
                className="absolute bg-black/70 border border-[#4fc273]/30 text-[#4fc273] text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap"
                style={{ top: b.top, bottom: b.bottom, right: b.right }}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-white/8 py-3 overflow-hidden bg-black/40 backdrop-blur-sm">
        <div className="flex gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="text-white/30 text-xs font-medium uppercase tracking-widest flex items-center gap-8">
              {item}
              <span className="text-[#4fc273]/40">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
