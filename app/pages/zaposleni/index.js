import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import HeroSection from './components/HeroSection';
import TeamGrid from './components/TeamGrid';
export default function ZaposleniPage() {
    return (_jsxs("div", { className: "bg-black min-h-screen", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(TeamGrid, {}), _jsx(Footer, {})] }));
}
