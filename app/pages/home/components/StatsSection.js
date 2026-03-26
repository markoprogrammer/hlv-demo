import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const stats = [
    { value: '200+', label: 'inženjera u timu' },
    { value: '20M+', label: 'korisnika mesečno' },
    { value: '1.5M+', label: 'aktivnih korisnika' },
    { value: '200+', label: 'mikroservisa' },
];
export default function StatsSection() {
    return (_jsx("section", { className: "py-24 px-6 md:px-16 lg:px-24", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "mb-16 max-w-2xl", children: [_jsxs("h2", { className: "font-bold text-5xl text-white mb-6", children: ["Softver koji pokre\u0107e", _jsx("br", {}), _jsx("span", { className: "text-[#4fc273]", children: "gaming industriju." })] }), _jsx("p", { className: "text-white/60 text-lg leading-relaxed", children: "Hooloovoo razvija softver za gaming i betting industriju. Na\u0161 klijent Kindred Group je jedan od vode\u0107ih operatora u svetu \u2014 sa transakcijama na nivou PayPal-a." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: stats.map((stat) => (_jsxs("div", { className: "bg-[#1a1a1a]/80 rounded-2xl p-6", children: [_jsx("p", { className: "font-extrabold text-5xl text-[#4fc273] mb-2", children: stat.value }), _jsx("p", { className: "text-white/60 text-sm", children: stat.label })] }, stat.label))) })] }) }));
}
