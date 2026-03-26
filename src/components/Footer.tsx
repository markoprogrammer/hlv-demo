import { Link } from 'react-router'

const footerLinks = [
  { label: 'Temelji', href: '/temelji' },
  { label: 'Zaposleni', href: '/zaposleni' },
  { label: 'Posao', href: '/posao' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img
          src="https://hooloovoo.rs/wp-content/uploads/2020/06/hooloovoo_logo_desktop.png"
          alt="Hooloovoo"
          loading="lazy"
          className="h-7 w-auto opacity-80"
        />
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-white/30 text-sm">©2025 HOOLOOVOO, Belgrade, Serbia</p>
      </div>
    </footer>
  )
}
