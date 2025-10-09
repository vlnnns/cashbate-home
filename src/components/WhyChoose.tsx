/**
 * Reusable component for displaying a single feature card.
 * Uses inline SVG for the icon to ensure the component is fully self-contained.
 */
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white px-6 sm:px-8 py-16 rounded-3xl transition duration-300 hover:shadow-2xl flex flex-col items-start justify-between h-full">
        {/* Icon Container */}
        <div className="text-blue-600 mb-6">
            {icon}
        </div>

        {/* Content */}
        <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600 text-base">
                {description}
            </p>
        </div>
    </div>
);

/**
 * Main component for the "Why Home Sellers Choose CASHBATE" section.
 */
const WhyChooseCashbateSection = () => {
    // Data for the four feature cards, including custom SVG for each icon
    const features = [
        {
            title: "Faster Sale",
            description: "Homes sell quicker with upgrades",
            // Arrow with speed lines
            icon: (
                <svg width="48" height="48" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 25h40" />
                    <path d="M35 15l10 10-10 10" />
                    <path d="M10 15h5M10 35h5" strokeDasharray="5 5" />
                    <path d="M20 15h5M20 35h5" strokeDasharray="5 5" />
                </svg>
            ),
        },
        {
            title: "Higher Offers",
            description: "Updated homes bring stronger comps",
            // Upward trending graph/bar chart
            icon: (
                <svg width="48" height="48" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="30" width="8" height="15" rx="1" />
                    <rect x="19" y="20" width="8" height="25" rx="1" />
                    <rect x="33" y="10" width="8" height="35" rx="1" />
                    <path d="M43 7l-2-2-2 2" />
                </svg>
            ),
        },
        {
            title: "No Upfront Cost",
            description: "Pay at closing",
            // Winding road with a location pin
            icon: (
                <svg width="48" height="48" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 5 C 40 10, 10 40, 40 45" strokeDasharray="10 5" />
                    <circle cx="40" cy="45" r="3" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
        {
            title: "Risk-Free Solution",
            description: "If your home doesn't sell, you owe $0 for our contribution",
            // Dollar sign
            icon: (
                <svg width="48" height="48" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M25 5v40" />
                    <path d="M35 15c-5 0-10 5-10 10s5 10 10 10" />
                    <path d="M15 15c5 0 10 5 10 10s-5 10-10 10" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 antialiased max-w-7xl mx-auto">
            <div className="">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 lg:mb-16 leading-tight">
                    Why Home Sellers <br className="sm:hidden" /> Choose CASHBATE
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseCashbateSection;
