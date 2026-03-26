import { Link } from 'react-router'

const navLinks = [
  { label: 'Temelji', href: '/temelji' },
  { label: 'Zaposleni', href: '/zaposleni' },
  { label: 'Posao', href: '/posao' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/">
          <img
            src="https://hooloovoo.rs/wp-content/uploads/2020/06/hooloovoo_logo_desktop.png"
            alt="Hooloovoo"
            loading="lazy"
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://en.hooloovoo.rs"
            className="text-[#4fc273] text-sm font-bold hover:text-[#3da85e] transition-colors"
          >
            EN
          </a>
        </nav>
      </div>
    </header>
  )
}
