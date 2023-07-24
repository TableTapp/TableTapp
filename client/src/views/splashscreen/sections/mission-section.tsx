import { Box, Center, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SvgComponent from '../../../components/svgs/svgguy';

const MissionSection: React.FC = () => {
	return (
		<Container width={'100vw'} height={'50vh'} maxWidth={'none'} padding={0}>
            <Box zIndex={0} position={'absolute'} width={'100%'} height={'100%'}>
                <SvgComponent />
                <Center zIndex={1} position={'absolute'} top={'250'} width={'60%'} paddingStart={40}>
                    <Stack direction={'column'}>
                        <Heading fontSize='6xl' color={'#2D3748'}>Our Mission</Heading>
                        <Text fontSize='4xl' color={'#2D3748'}> Empower local restaurants with an all-in-one solution under one subscription. </Text>
                    </Stack>
                </Center>
            </Box>
        </Container>
	);
};

export default MissionSection;