import React from 'react';
import WhatIsIncludedSection from "@/components/whats-included/WhatIsIncludedSection";
import CoverageComparisonSection from "@/components/whats-included/CoverageComparisonSection";
import WhyWeSetLimitsSection from "@/components/whats-included/WhyWeSetLimitsSection";
import HowItWorksPracticeSection from "@/components/whats-included/HowItWorksInPracticeSection";
import ReadyToSeeQualifies from "@/components/whats-included/ReadyToSeeQualifies";


const WhatsIncludedPage = () => {
    return (
        <div>
            <main>
                <WhatIsIncludedSection />
                <CoverageComparisonSection />
                <WhyWeSetLimitsSection />
                <HowItWorksPracticeSection />
                <ReadyToSeeQualifies />
            </main>
        </div>
    );
};

export default WhatsIncludedPage;
