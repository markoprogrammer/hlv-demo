import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const benefits = [
    { icon: '⏱', title: 'Do 45 min dnevno', description: 'Čuvamo tvoje vreme svaki radni dan' },
    { icon: '🌍', title: 'Remote 2 nedelje', description: 'Radi odakle god poželiš' },
    { icon: '🎤', title: 'Konferencije', description: 'Podržavamo tvoj razvoj i učešće' },
    { icon: '🍎', title: 'Hrana u kancelariji', description: 'Zdravi obroci i snackovi' },
    { icon: '🎵', title: 'Fokus okruženje', description: 'Muzika i prostor za duboki rad' },
    { icon: '🤝', title: 'Inicijative', description: 'Heapcon, StartIT, Petlja i više' },
];
export default function BenefitsSection() {
    return (_jsx("section", { className: "py-24 px-6 md:px-16 lg:px-24", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-16 items-start", children: [_jsxs("div", { className: "md:w-1/3", children: [_jsxs("h2", { className: "font-bold text-5xl text-white mb-6", children: ["Za\u0161to", _jsx("br", {}), _jsx("span", { className: "text-[#4fc273]", children: "Hooloovoo?" })] }), _jsx("p", { className: "text-white/50 text-lg leading-relaxed", children: "Stvaramo uslove da svako od nas dostigne maksimalni potencijal \u2014 i na poslu i van njega." }), _jsx("a", { href: "/posao", className: "inline-block mt-8 bg-black text-[#4fc273] font-bold text-lg px-8 py-4 rounded-2xl border border-[#4fc273] hover:bg-[#4fc273]/10 transition-colors", children: "Otvorene pozicije" })] }), _jsx("div", { className: "md:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: benefits.map((b) => (_jsxs("div", { className: "bg-[#1a1a1a]/80 rounded-2xl p-6", children: [_jsx("span", { className: "text-2xl mb-3 block", children: b.icon }), _jsx("h3", { className: "font-medium text-lg text-white mb-1", children: b.title }), _jsx("p", { className: "text-white/40 text-sm", children: b.description })] }, b.title))) })] }) }) }));
}
