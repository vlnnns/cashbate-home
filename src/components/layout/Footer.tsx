"use client";
import { Instagram, Facebook, Mail, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'What’s Included', href: '/whats-included' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Why CASHBATE', href: '/why-cashbate' },
];

const socialLinks = [
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Mail, href: '#email', label: 'Email' },
    { icon: MessageSquare, href: '#whatsapp', label: 'WhatsApp' },
];

const Footer: React.FC = () => {
    const desktopDisclaimer = "CASHBATE is not a contractor. All work is performed by licensed and insured contractors who meet strict standards. We provide the incentive and risk-sharing structure that helps homeowners sell faster and for more.";
    const mobileDisclaimer = "CASHBATE is not a contractor. Work is performed by licensed and insured professionals.";
    const currentYear = new Date().getFullYear();

    const Logo = () => (
        <div className="flex items-center space-x-2">
            <Image
                src="/logos/logo-white.png"
                alt="logo"
                className="w-36 h-auto"
                width={144}
                height={30}
            />
        </div>
    );

    return (
        <footer className="bg-neutral-800 text-neutral-400 ">
            <div className="container max-w-6xl mx-auto px-4 pt-12 pb-6">

                {/* TOP SECTION: Logo, Disclaimer, and Navigation */}
                <div className="flex flex-col md:flex-row justify-between border-b border-gray-700/50 pb-8 space-y-10 md:space-y-0">

                    {/* Logo and Disclaimer Column */}
                    {/* !!! ЗМІНЕНО: Додано 'flex flex-col items-center md:items-start' для центрування на мобільному !!! */}
                    <div className="w-full md:w-5/12 space-y-4 flex flex-col items-center md:items-start">
                        <Logo />

                        {/* Disclaimer for Desktop (md:block) */}
                        {/* !!! ЗМІНЕНО: Додано 'md:text-left' (text-center тепер успадковується) !!! */}
                        <p className="hidden md:block text-sm leading-relaxed text-neutral-500 text-center md:text-left">
                            {desktopDisclaimer}
                        </p>

                        {/* Disclaimer for Mobile (md:hidden) */}
                        {/* !!! ЗМІНЕНО: Додано 'text-center' !!! */}
                        <p className="md:hidden text-sm leading-relaxed text-neutral-500 text-center">
                            {mobileDisclaimer}
                        </p>
                    </div>

                    {/* Navigation Links Column (Right side on desktop) */}
                    <div className="w-full md:w-fit">
                        {/* !!! ЗМІНЕНО: Додано 'justify-center md:justify-start' !!! */}
                        <ul className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-3 md:flex-nowrap md:justify-start md:gap-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white hover:text-blue-500 transition-colors text-base font-normal"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION: Copyright, Legal, and Social Icons */}
                {/* (Цей блок вже мав 'items-center', 'text-center' та 'flex-col-reverse', тому він вже центрується на мобільному) */}
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-6 space-y-4 sm:space-y-0 text-sm">

                    {/* Copyright and Legal Links */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                        <p className="text-neutral-500">
                            &copy; {currentYear} Cashbate. All rights reserved.
                        </p>
                        <a href="/Website%20Terms%20of%20Use.pdf" className="hover:text-white transition-colors">Terms of Use</a>
                        <a href="/Online%20Privacy%20Policy.pdf" className="hover:text-white transition-colors">Privacy Policy</a>
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
                                className="p-2 rounded-full hover:bg-neutral-700 transition-colors"
                            >
                                <social.icon className="w-5 h-5 text-neutral-400 hover:text-white" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;