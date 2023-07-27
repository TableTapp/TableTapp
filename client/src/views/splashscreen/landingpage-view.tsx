import { Stack } from '@chakra-ui/react';
import React from 'react';

// Sections
import LandingSection from './sections/landing-section';
import TeamInfo from './sections/team-info';
import FooterSection from './sections/footer-section';
import MissionSection from './sections/mission-section';
import BackgroundSection from './sections/background-section';
import DesignSection from './sections/design-section';
import ResultSection from './sections/results-section';
import AwardSection from './sections/award-section';

interface LandingPageProps {
    goToCustomer: () => void;
    goToRestaurant: () => void;
    goToContactSales: () => void;
}

const LandingPage: React.FC<LandingPageProps> = (props: LandingPageProps) => {
    const { goToCustomer, goToRestaurant, goToContactSales } = props;
	return (
		<Stack direction={'column'} p={0} maxWidth={'none'} gap={'none'}>
            <LandingSection toContactSales={goToContactSales} toCustomerLogin={goToCustomer} toRestaurantLogin={goToRestaurant}/>
            <MissionSection />
            <BackgroundSection />
            <DesignSection />
            <ResultSection />
            <AwardSection />
            <TeamInfo />
            <FooterSection />
        </Stack>  
	);
};

export default LandingPage;