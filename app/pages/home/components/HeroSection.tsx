export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-16 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#4fc273]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4fc273]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        <p className="text-[#4fc273] font-bold text-sm tracking-[0.3em] uppercase mb-8">
          Deep tech. AI you can trust. People who care.
        </p>
        <h1 className="font-extrabold leading-none text-white mb-10" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}>
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
    </section>
  )
}
