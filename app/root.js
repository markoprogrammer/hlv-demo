import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './app.css';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
export function Layout({ children }) {
    return (_jsxs("html", { lang: "sr", children: [_jsxs("head", { children: [_jsx("meta", { charSet: "utf-8" }), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }), _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap", rel: "stylesheet" }), _jsx(Meta, {}), _jsx(Links, {})] }), _jsxs("body", { className: "bg-black text-white font-display antialiased", children: [children, _jsx(ScrollRestoration, {}), _jsx(Scripts, {})] })] }));
}
export default function App() {
    return _jsx(Outlet, {});
}
