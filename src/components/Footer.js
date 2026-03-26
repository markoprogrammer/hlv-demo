import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
const footerLinks = [
    { label: 'Temelji', href: '/temelji' },
    { label: 'Zaposleni', href: '/zaposleni' },
    { label: 'Posao', href: '/posao' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
];
export default function Footer() {
    return (_jsx("footer", { className: "border-t border-white/10 py-12 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6", children: [_jsx("img", { src: "https://hooloovoo.rs/wp-content/uploads/2020/06/hooloovoo_logo_desktop.png", alt: "Hooloovoo", className: "h-7 w-auto opacity-80" }), _jsx("nav", { className: "flex flex-wrap justify-center gap-6", children: footerLinks.map((link) => (_jsx(Link, { to: link.href, className: "text-white/50 hover:text-white text-sm transition-colors", children: link.label }, link.href))) }), _jsx("p", { className: "text-white/30 text-sm", children: "\u00A92025 HOOLOOVOO, Belgrade, Serbia" })] }) }));
}
