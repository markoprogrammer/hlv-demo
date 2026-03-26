import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function HeroSvg() {
    return (_jsxs("svg", { viewBox: "0 0 500 500", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full", children: [_jsx("style", { children: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse-ring { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.4; } }
        @keyframes float-dot { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes dash { to { stroke-dashoffset: -200; } }

        .ring-1 { transform-origin: 250px 250px; animation: spin-slow 18s linear infinite; }
        .ring-2 { transform-origin: 250px 250px; animation: spin-reverse 12s linear infinite; }
        .ring-3 { transform-origin: 250px 250px; animation: spin-slow 28s linear infinite; }
        .pulse { animation: pulse-ring 3s ease-in-out infinite; }
        .dot-1 { animation: float-dot 3.2s ease-in-out infinite; }
        .dot-2 { animation: float-dot 4s ease-in-out infinite 0.5s; }
        .dot-3 { animation: float-dot 3.6s ease-in-out infinite 1.2s; }
        .moving-dash { stroke-dasharray: 80 120; animation: dash 4s linear infinite; }
      ` }), _jsx("circle", { cx: "250", cy: "250", r: "220", fill: "#4fc273", fillOpacity: "0.03", className: "pulse" }), _jsxs("g", { className: "ring-3", children: [_jsx("circle", { cx: "250", cy: "250", r: "200", stroke: "#4fc273", strokeOpacity: "0.08", strokeWidth: "1" }), _jsx("circle", { cx: "250", cy: "250", r: "200", stroke: "#4fc273", strokeOpacity: "0.25", strokeWidth: "1", strokeDasharray: "4 20", className: "moving-dash" })] }), _jsxs("g", { className: "ring-2", children: [_jsx("circle", { cx: "250", cy: "250", r: "155", stroke: "#4fc273", strokeOpacity: "0.12", strokeWidth: "1" }), [0, 72, 144, 216, 288].map((angle, i) => {
                        const r = 155;
                        const x = 250 + r * Math.cos((angle * Math.PI) / 180);
                        const y = 250 + r * Math.sin((angle * Math.PI) / 180);
                        return (_jsxs("g", { children: [_jsx("circle", { cx: x, cy: y, r: "4", fill: "#4fc273", fillOpacity: "0.5" }), _jsx("circle", { cx: x, cy: y, r: "8", stroke: "#4fc273", strokeOpacity: "0.2", strokeWidth: "1", fill: "none" })] }, i));
                    })] }), _jsxs("g", { className: "ring-1", children: [_jsx("circle", { cx: "250", cy: "250", r: "105", stroke: "#4fc273", strokeOpacity: "0.15", strokeWidth: "1.5" }), [0, 90, 180, 270].map((angle, i) => {
                        const r = 105;
                        const x = 250 + r * Math.cos((angle * Math.PI) / 180);
                        const y = 250 + r * Math.sin((angle * Math.PI) / 180);
                        return (_jsx("rect", { x: x - 4, y: y - 4, width: "8", height: "8", fill: "#4fc273", fillOpacity: "0.6", transform: `rotate(45, ${x}, ${y})` }, i));
                    })] }), _jsx("circle", { cx: "250", cy: "250", r: "38", fill: "#0a0a0a", stroke: "#4fc273", strokeOpacity: "0.3", strokeWidth: "1.5" }), _jsx("circle", { cx: "250", cy: "250", r: "24", fill: "#4fc273", fillOpacity: "0.08" }), _jsx("circle", { cx: "250", cy: "250", r: "10", fill: "#4fc273", fillOpacity: "0.7" }), _jsx("circle", { cx: "250", cy: "250", r: "4", fill: "#4fc273" }), _jsx("circle", { cx: "130", cy: "130", r: "3", fill: "#4fc273", fillOpacity: "0.5", className: "dot-1" }), _jsx("circle", { cx: "370", cy: "110", r: "2", fill: "#4fc273", fillOpacity: "0.4", className: "dot-2" }), _jsx("circle", { cx: "400", cy: "370", r: "3.5", fill: "#4fc273", fillOpacity: "0.3", className: "dot-3" }), _jsx("circle", { cx: "100", cy: "360", r: "2", fill: "#4fc273", fillOpacity: "0.35", className: "dot-1" }), [36, 108, 180, 252, 324].map((angle, i) => {
                const r2 = 155;
                const x2 = 250 + r2 * Math.cos((angle * Math.PI) / 180);
                const y2 = 250 + r2 * Math.sin((angle * Math.PI) / 180);
                return (_jsx("line", { x1: "250", y1: "250", x2: x2, y2: y2, stroke: "#4fc273", strokeOpacity: "0.07", strokeWidth: "1" }, i));
            })] }));
}
export default function HeroSection() {
    return (_jsxs("section", { className: "min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-16 relative overflow-hidden", children: [_jsx("div", { className: "absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#4fc273]/5 rounded-full blur-3xl pointer-events-none" }), _jsx("div", { className: "absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4fc273]/3 rounded-full blur-3xl pointer-events-none" }), _jsxs("div", { className: "relative z-10 w-full flex flex-col lg:flex-row items-center gap-12", children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-[#4fc273] font-bold text-sm tracking-[0.3em] uppercase mb-8", children: "Deep tech. AI you can trust. People who care." }), _jsxs("h1", { className: "font-extrabold leading-none text-white mb-10", style: { fontSize: 'clamp(4rem, 10vw, 8rem)' }, children: ["Do\u0111i.", _jsx("br", {}), "Igraj.", _jsx("br", {}), _jsx("span", { className: "text-[#4fc273]", children: "Pokidaj." })] }), _jsx("a", { href: "/posao", className: "inline-block bg-[#4fc273] text-black font-bold text-xl px-10 py-5 rounded-2xl hover:scale-105 transition-transform", children: "Pridru\u017Ei se!" })] }), _jsx("div", { className: "flex-shrink-0 w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] opacity-80", children: _jsx(HeroSvg, {}) })] })] }));
}
