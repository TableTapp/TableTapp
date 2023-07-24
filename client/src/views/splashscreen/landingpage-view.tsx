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
const LandingPage: React.FC = () => {
	return (
		<Stack direction={'column'} p={0} maxWidth={'none'} gap={'none'}>
            <LandingSection />
            <MissionSection />
            <BackgroundSection />
            <DesignSection />
            <ResultSection />
            <TeamInfo />
            <FooterSection />
        </Stack>
	);
};

export default LandingPage;