import { Link } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

interface ComingSoonProps {
  page: string
}

export default function ComingSoon({ page }: ComingSoonProps) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #4fc273 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.04,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4fc273]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-lg">
          <p className="text-[#4fc273] font-bold text-xs tracking-[0.3em] uppercase mb-6">{page}</p>
          <h1 className="font-extrabold text-7xl text-white leading-none mb-4">
            Uskoro.
          </h1>
          <p className="text-white/40 text-lg mb-10">
            Ova stranica je u pripremi. Vrati se uskoro.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-[#4fc273] font-bold text-base px-8 py-4 rounded-2xl border border-[#4fc273] hover:bg-[#4fc273]/10 transition-colors"
          >
            ← Nazad na početnu
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
