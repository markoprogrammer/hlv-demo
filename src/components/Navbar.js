import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
const navLinks = [
    { label: 'Temelji', href: '/temelji' },
    { label: 'Zaposleni', href: '/zaposleni' },
    { label: 'Posao', href: '/posao' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
];
export default function Navbar() {
    return (_jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [_jsx(Link, { to: "/", children: _jsx("img", { src: "https://hooloovoo.rs/wp-content/uploads/2020/06/hooloovoo_logo_desktop.png", alt: "Hooloovoo", className: "h-8 w-auto" }) }), _jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [navLinks.map((link) => (_jsx(Link, { to: link.href, className: "text-white/70 hover:text-white text-sm font-medium transition-colors", children: link.label }, link.href))), _jsx("a", { href: "https://en.hooloovoo.rs", className: "text-[#4fc273] text-sm font-bold hover:text-[#3da85e] transition-colors", children: "EN" })] })] }) }));
}
