import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ValuesSection from './components/ValuesSection';
import ExpertiseSection from './components/ExpertiseSection';
import BenefitsSection from './components/BenefitsSection';
export function meta(_) {
    return [
        { title: 'Hooloovoo — Deep tech. AI you can trust. People who care.' },
        { name: 'description', content: 'Hooloovoo razvija softver za gaming i betting industriju. Mikroservisi, AI, full-stack razvoj.' },
    ];
}
export default function HomePage() {
    return (_jsxs("div", { className: "bg-black min-h-screen", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(StatsSection, {}), _jsx(ValuesSection, {}), _jsx(ExpertiseSection, {}), _jsx(BenefitsSection, {}), _jsx(Footer, {})] }));
}
