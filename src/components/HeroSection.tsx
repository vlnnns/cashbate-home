// You might not need MainButton anymore, but keeping the import in case it's used elsewhere.
// I've replaced it with the custom input-group structure below.
import MainButton from './MainButton';

const HeroSection = () => {
    return (
        // Added 'pt-20' and 'pb-32' for vertical padding to better match the visual space in the image
        // Removed gap-20 and handled spacing with 'mt-4' and 'mt-12' on child elements
        <section className="flex flex-col justify-center items-start text-left pt-20 pb-32 max-w-7xl mx-auto">
            <div>
                {/* Updated size to better match the visual hierarchy in the image */}
                <h1 className="text-4xl sm:text-7xl font-bold leading-tight text-gray-800">
                    Sell Your Home Faster —<br/><span className="text-blue-500">No Sale, No Pay.</span>
                </h1>
                {/* Updated max-width and font size to better match the image */}
                <p className="text-xl text-gray-600 mt-6 max-w-lg">
                    CASHBATE is an incentive solution that shares risk with you by covering
                    cosmetic upgrades to help your home sell quicker and for more.
                    <br/>It's not a credit, not a loan.
                </p>
            </div>

            {/* Input and Button Group Container */}
            <form className="relative mt-12 w-full max-w-3xl">
                <div className="flex bg-white shadow-lg rounded-full h-16 w-full">
                    {/* Input Field: Rounded only on the left, full height of container, no border */}
                    <input
                        type="text"
                        placeholder="Enter Property Address"
                        className="flex-grow p-4 pl-8 text-gray-600 text-lg 
                                   rounded-l-full focus:outline-none bg-transparent 
                                   h-full w-2/3 border-0"
                    />

                    {/* Button: Rounded only on the right, full height of container */}
                    <button
                        type="submit"
                        className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white 
                                   font-semibold py-3 px-8 text-lg rounded-full 
                                   transition duration-300 transform 
                                   -translate-x-3 whitespace-nowrap h-[calc(100%-10px)] 
                                   self-center mr-1"
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} // For explicit padding
                    >
                        See if Your Home Qualifies &gt;&gt;
                    </button>
                </div>
            </form>

            {/* Disclaimer Text */}
            <p className="text-sm text-gray-500 mt-6 max-w-3xl">
                CASHBATE covers cosmetic upgrades up to <b className="font-semibold">$9,888</b> in value, with no upfront cost.
                Payment is settled at closing. If your home doesn't sell after 6 months, you owe $0 for our contribution.
            </p>
        </section>
    );
};

export default HeroSection;