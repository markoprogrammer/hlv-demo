function HeroSvg() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse-ring { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.4; } }
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

      {/* Outer glow */}
      <circle cx="250" cy="250" r="220" fill="#4fc273" fillOpacity="0.03" className="pulse" />

      {/* Ring 3 — outermost, dashed */}
      <g className="ring-3">
        <circle cx="250" cy="250" r="200" stroke="#4fc273" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="250" cy="250" r="200" stroke="#4fc273" strokeOpacity="0.25" strokeWidth="1"
          strokeDasharray="4 20" className="moving-dash" />
      </g>

      {/* Ring 2 */}
      <g className="ring-2">
        <circle cx="250" cy="250" r="155" stroke="#4fc273" strokeOpacity="0.12" strokeWidth="1" />
        {/* Nodes on ring 2 */}
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const r = 155
          const x = 250 + r * Math.cos((angle * Math.PI) / 180)
          const y = 250 + r * Math.sin((angle * Math.PI) / 180)
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="#4fc273" fillOpacity="0.5" />
              <circle cx={x} cy={y} r="8" stroke="#4fc273" strokeOpacity="0.2" strokeWidth="1" fill="none" />
            </g>
          )
        })}
      </g>

      {/* Ring 1 — inner */}
      <g className="ring-1">
        <circle cx="250" cy="250" r="105" stroke="#4fc273" strokeOpacity="0.15" strokeWidth="1.5" />
        {[0, 90, 180, 270].map((angle, i) => {
          const r = 105
          const x = 250 + r * Math.cos((angle * Math.PI) / 180)
          const y = 250 + r * Math.sin((angle * Math.PI) / 180)
          return (
            <rect
              key={i}
              x={x - 4} y={y - 4} width="8" height="8"
              fill="#4fc273" fillOpacity="0.6"
              transform={`rotate(45, ${x}, ${y})`}
            />
          )
        })}
      </g>

      {/* Center core */}
      <circle cx="250" cy="250" r="38" fill="#0a0a0a" stroke="#4fc273" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="250" cy="250" r="24" fill="#4fc273" fillOpacity="0.08" />
      <circle cx="250" cy="250" r="10" fill="#4fc273" fillOpacity="0.7" />
      <circle cx="250" cy="250" r="4" fill="#4fc273" />

      {/* Floating accent dots */}
      <circle cx="130" cy="130" r="3" fill="#4fc273" fillOpacity="0.5" className="dot-1" />
      <circle cx="370" cy="110" r="2" fill="#4fc273" fillOpacity="0.4" className="dot-2" />
      <circle cx="400" cy="370" r="3.5" fill="#4fc273" fillOpacity="0.3" className="dot-3" />
      <circle cx="100" cy="360" r="2" fill="#4fc273" fillOpacity="0.35" className="dot-1" />

      {/* Connector lines from center to edge nodes */}
      {[36, 108, 180, 252, 324].map((angle, i) => {
        const r2 = 155
        const x2 = 250 + r2 * Math.cos((angle * Math.PI) / 180)
        const y2 = 250 + r2 * Math.sin((angle * Math.PI) / 180)
        return (
          <line
            key={i}
            x1="250" y1="250" x2={x2} y2={y2}
            stroke="#4fc273" strokeOpacity="0.07" strokeWidth="1"
          />
        )
      })}
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-16 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#4fc273]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4fc273]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <p className="text-[#4fc273] font-bold text-sm tracking-[0.3em] uppercase mb-8">
            Deep tech. AI you can trust. People who care.
          </p>
          <h1 className="font-extrabold leading-none text-white mb-10" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>
            Dođi.<br />
            Igraj.<br />
            <span className="text-[#4fc273]">Pokidaj.</span>
          </h1>
          <a
            href="/posao"
            className="inline-block bg-[#4fc273] text-black font-bold text-xl px-10 py-5 rounded-2xl hover:scale-105 transition-transform"
          >
            Pridruži se!
          </a>
        </div>

        {/* SVG animation */}
        <div className="flex-shrink-0 w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] opacity-80">
          <HeroSvg />
        </div>
      </div>
    </section>
  )
}
