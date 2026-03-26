import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const areas = [
    { label: 'Microservices', detail: '200+ servisa' },
    { label: 'ReactJS Frontend', detail: 'React 19' },
    { label: 'DevOps & CI/CD', detail: 'Continuous delivery' },
    { label: 'Big Data', detail: 'Analytics & processing' },
    { label: 'Async Systems', detail: 'Event-driven' },
    { label: 'Reactive Design', detail: 'Resilient architecture' },
    { label: 'AI & ML', detail: 'Deep tech' },
    { label: 'Java Backend', detail: 'Senior & lead level' },
];
export default function ExpertiseSection() {
    return (_jsx("section", { className: "py-24 px-6 md:px-16 lg:px-24 bg-[#1a1a1a]/30", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "font-bold text-5xl text-white mb-4", children: "\u0160ta radimo" }), _jsx("p", { className: "text-white/50 text-lg mb-12 max-w-xl", children: "Kompleksni sistemi, visoke performanse, pouzdana arhitektura." }), _jsx("div", { className: "flex flex-wrap gap-3", children: areas.map((area) => (_jsxs("div", { className: "flex items-center gap-3 bg-[#1a1a1a] border border-white/10 rounded-2xl px-5 py-3 hover:border-[#4fc273]/50 transition-colors", children: [_jsx("span", { className: "text-white font-medium", children: area.label }), _jsx("span", { className: "text-[#4fc273] text-sm", children: area.detail })] }, area.label))) })] }) }));
}
