import { Stack } from '@chakra-ui/react';
import React from 'react';

// Sections
import LandingSection from './sections/landing-section';
import TeamInfo from './sections/team-info';
import FooterSection from './sections/footer-section';

const LandingPage: React.FC = () => {
	return (
		<Stack direction={'column'} p={0} maxWidth={'none'} gap={'none'}>
            <LandingSection />
            <TeamInfo />
            <FooterSection />
        </Stack>
	);
};

export default LandingPage;