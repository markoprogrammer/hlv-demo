import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const values = [
    {
        number: '01',
        title: 'Budi svoj',
        description: 'Nismo svi isti – i u tome je lepota. Različitost perspektiva je naša snaga, ne prepreka.',
    },
    {
        number: '02',
        title: 'Prati svoju čuku',
        description: 'Verujemo u intuiciju i lično prosuđivanje. Donosiš odluke koje su prave za tebe i tim.',
    },
    {
        number: '03',
        title: 'Pobuni se, posvedi se',
        description: 'Sloboda da dovediš u pitanje — i hrabrost da se potpuno posvetiš kada se odlučiš.',
    },
];
export default function ValuesSection() {
    return (_jsx("section", { className: "py-24 px-6 md:px-16 lg:px-24", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("p", { className: "text-[#4fc273] font-bold text-sm tracking-[0.3em] uppercase mb-4", children: "HLV Framework" }), _jsxs("h2", { className: "font-bold text-5xl text-white mb-16", children: ["\"\u017Delimo da budemo", _jsx("br", {}), _jsx("span", { className: "text-white/40", children: "najbolji IT poslodavac u regionu.\"" })] }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: values.map((value) => (_jsxs("div", { className: "border border-[#4fc273]/40 rounded-2xl p-8 hover:border-[#4fc273] transition-colors group", children: [_jsx("p", { className: "text-[#4fc273]/40 font-extrabold text-5xl mb-6 group-hover:text-[#4fc273]/60 transition-colors", children: value.number }), _jsx("h3", { className: "font-medium text-2xl text-white mb-4", children: value.title }), _jsx("p", { className: "text-white/50 text-base leading-relaxed", children: value.description })] }, value.number))) })] }) }));
}
