const HeroSection = () => {
    return (
        // Added 'pt-20' and 'pb-32' for vertical padding to better match the visual space in the image
        // Removed gap-20 and handled spacing with 'mt-4' and 'mt-12' on child elements
        <section className="flex flex-col justify-center items-start text-left pt-20 pb-32 max-w-7xl mx-auto px-4">
            <div>
                {/* Updated size to better match the visual hierarchy in the image */}
                <h1 className="text-4xl sm:text-7xl font-bold leading-tight text-gray-800">
                    Sell Your Home Faster —<br/><span className="text-[#2563EB]">No Sale, No Pay.</span>
                </h1>
                {/* Updated max-width and font size to better match the image */}
                <p className="text-lg sm:text-xl text-gray-600 mt-6 max-w-lg leading-tight">
                    CASHBATE is an incentive solution that shares risk with you by covering
                    cosmetic upgrades to help your home sell quicker and for more.
                    <br/>It&aposs not a credit, not a loan.
                </p>
            </div>

            {/* Input and Button Group Container */}
            <form className="relative mt-12 w-full max-w-3xl">
                {/* Responsive flex container: flex-col on mobile, sm:flex-row on larger screens */}
                <div className="flex flex-col sm:flex-row bg-white shadow-lg  w-full sm:h-16 rounded-4xl p-2">
                    {/* Input Field: Full width on mobile, grows on larger screens */}
                    <input
                        type="text"
                        placeholder="Enter Property Address"
                        className="flex-grow p-4 pl-8 text-gray-600 text-lg
                                   rounded-full focus:outline-none bg-transparent
                                   h-16 sm:h-full w-full border-0"
                    />

                    {/* Button: Full width on mobile, shrinks on larger screens */}
                    <button
                        type="submit"
                        className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white 
                                   font-medium py-3 px-2 text-lg rounded-full
                                   transition duration-300 transform 
                                   sm:-translate-x-3 whitespace-nowrap h-16 sm:h-[calc(100%)]
                                   sm:self-center sm:mr-1"
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} // For explicit padding
                    >
                        See if Your Home Qualifies &gt;&gt;
                    </button>
                </div>
            </form>

            {/* Disclaimer Text */}
            <p className="test-xs sm:text-sm text-gray-500 mt-6 max-w-3xl leading-tight">
                CASHBATE covers cosmetic upgrades up to <b className="font-semibold">$9,888</b> in value, with no upfront cost.
                Payment is settled at closing. If your home doesn&apost sell after 6 months, you owe $0 for our contribution.
            </p>
        </section>
    );
};

export default HeroSection;

