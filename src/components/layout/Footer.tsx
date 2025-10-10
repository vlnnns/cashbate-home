"use client";
// Changed 'Whatsapp' to 'Phone' or 'MessageSquare' since 'Whatsapp' is often not available.
// I will use MessageSquare to better represent a chat/message icon as seen in the screenshot.
import { Instagram, Facebook, Mail, MessageSquare } from 'lucide-react'; // Using lucide-react for icons

// Data for navigation links
const navLinks = [
    { name: 'How It Works', href: '#' },
    { name: 'What’s Included', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Why CASHBATE', href: '#' },
];

// Data for social media links (using placeholder links)
const socialLinks = [
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Mail, href: '#email', label: 'Email' },
    // Using MessageSquare as a generic chat/message icon instead of the unavailable 'Whatsapp'
    { icon: MessageSquare, href: '#whatsapp', label: 'WhatsApp' },
];

/**
 * Responsive footer component for the CASHBATE website.
 */
const Footer: React.FC = () => {
    // Disclaimers as requested
    const desktopDisclaimer = "CASHBATE is not a contractor. All work is performed by licensed and insured contractors who meet strict standards. We provide the incentive and risk-sharing structure that helps homeowners sell faster and for more.";
    const mobileDisclaimer = "CASHBATE is not a contractor. Work is performed by licensed and insured professionals.";

    const currentYear = new Date().getFullYear();

    // Simple SVG for the CASHBATE logo (you'd replace this with your official SVG/image)
    const Logo = () => (
        <div className="flex items-center space-x-2">
            <img src="/logos/logo-white.png" alt="logo" className="w-36"/>
        </div>
    );

    return (
        <footer className="bg-gray-900 text-gray-400 dark:bg-black dark:text-gray-500">
            <div className="container max-w-6xl mx-auto px-4 pt-12 pb-6">

                {/* TOP SECTION: Logo, Disclaimer, and Navigation */}
                <div className="flex flex-col md:flex-row justify-between border-b border-gray-700/50 pb-8 space-y-10 md:space-y-0">

                    {/* Logo and Disclaimer Column */}
                    <div className="w-full md:w-5/12 space-y-4">
                        <Logo />

                        {/* Disclaimer for Desktop (md:block) */}
                        <p className="hidden md:block text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                            {desktopDisclaimer}
                        </p>

                        {/* Disclaimer for Mobile (md:hidden) */}
                        <p className="md:hidden text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                            {mobileDisclaimer}
                        </p>
                    </div>

                    {/* Navigation Links Column (Right side on desktop) */}
                    <div className="w-full md:w-fit">
                        <ul className="flex flex-col sm:flex-row md:flex-row md:space-x-8 space-y-3 sm:space-y-0">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white hover:text-blue-500 transition-colors text-base font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION: Copyright, Legal, and Social Icons */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-6 space-y-4 sm:space-y-0 text-sm">

                    {/* Copyright and Legal Links */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                        <p className="text-gray-500">
                            &copy; {currentYear} Cashbate. All rights reserved.
                        </p>
                        <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
