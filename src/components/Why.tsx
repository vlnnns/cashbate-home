"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';

// Data for the list items shown in the screenshot
const cashbateFeatures = [
    "Not credit, not a loan.",
    "No upfront payment with base solution.",
    "Licensed contractors only.",
    "Risk-sharing incentive.",
];

/**
 * A responsive component showcasing the key benefits of CASHBATE.
 * It features a list of benefits and a supporting visual element.
 */
const WhyCashbate: React.FC = () => {
    return (
        // Outer container: centered content with a slight shadow and rounded corners, mimicking the screenshot's design
        <section className="py-16 md:py-24 flex justify-center">
            <div className="container max-w-6xl mx-auto px-4">

                {/* Main Content Grid: Switches to two columns on medium screens and up */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col space-y-8">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight font-inter">
                            Why CASHBATE
                        </h2>

                        {/* Features List */}
                        <ul className="space-y-6">
                            {cashbateFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    {/* Checkmark Icon (simulating the blue checkmark in the screenshot) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="23" viewBox="0 0 33 23" fill="none">
                                        <path d="M11.5116 17.9078L28.8148 0.604688C29.2231 0.196355 29.6995 -0.0078125 30.2439 -0.0078125C30.7884 -0.0078125 31.2648 0.196355 31.6731 0.604688C32.0814 1.01302 32.2856 1.49826 32.2856 2.0604C32.2856 2.62253 32.0814 3.10709 31.6731 3.51406L12.9408 22.2974C12.5325 22.7057 12.0561 22.9099 11.5116 22.9099C10.9672 22.9099 10.4908 22.7057 10.0825 22.2974L1.3033 13.5182C0.894965 13.1099 0.698964 12.6253 0.715298 12.0646C0.731631 11.5038 0.944644 11.0185 1.35434 10.6089C1.76403 10.1992 2.24927 9.99499 2.81005 9.99635C3.37083 9.99771 3.85538 10.2019 4.26371 10.6089L11.5116 17.9078Z" fill="#155DFC"/>
                                    </svg>

                                    {/* Feature Text */}
                                    <span className="text-xl md:text-2xl font-medium text-neutral-900 ">
                    {feature}
                  </span>
                                </li>
                            ))}
                        </ul>

                        {/* Action Button */}
                        <div className="pt-4">
                            <button
                                // Using a primary blue button style similar to the image
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold
                           py-3 px-6 rounded-lg shadow-lg hover:shadow-xl
                           transition duration-300 transform hover:scale-[1.02]
                           w-fit text-lg whitespace-nowrap"
                                onClick={() => console.log('Learn Why Sellers Choose Us clicked')}
                            >
                                Learn Why Sellers Choose Us
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image (The original image is a bit tricky to replicate perfectly with a standard URL,
             so this uses a styled placeholder that attempts to match the look-and-feel of a stock photo with
             a slightly lighter background treatment, placing it on the right side.) */}
                    <div className="md:order-last order-first relative h-full w-full overflow-hidden rounded-xl">
                        {/* Note: In a real project, you would replace this placeholder URL with your actual image path
                (e.g., from your Next.js public folder) or use the Next.js <Image> component. */}
                        <img
                            src="/whyCashbate.png"
                            alt="Three happy people celebrating"
                            className="w-full h-full object-cover object-center"
                            // The image in the screenshot is slightly obscured by the main card's edge,
                            // but for a clean web component, a contained image is better.
                            // This placeholder uses a light background to simulate the high-key look.
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyCashbate;
