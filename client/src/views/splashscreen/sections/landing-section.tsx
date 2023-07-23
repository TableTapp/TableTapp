import { AbsoluteCenter, Box, Button, Container, Flex, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../../assets/logo-text.svg';
import { ArrowDownIcon } from '@chakra-ui/icons';

const LandingSection: React.FC = () => {
	return (
		<Container width={'100vw'} height={'100vh'} bg={'red.400'} maxWidth={'none'}>
            <Box width={'100%'} padding={8}>
                <Flex>
                    <Image height={'var(--chakra-sizes-12)'} aria-label='logo' src={Logo} alt='Logo'/>
                    <Spacer />
                    <Button colorScheme={'gray'} size={'lg'}>Login</Button>
                </Flex>
            </Box>
            <Box position={'absolute'} width={'70%'} height={'75vh'}>
                <AbsoluteCenter>
                    <Stack direction={'column'}>
                        <Text fontSize='6xl' as='b' color={'whiteAlpha.900'}> Some sort of zinger </Text>
                        <Stack direction={'row'} gap={5}>
                            <Button colorScheme={'gray'} size={'lg'}>Get Started</Button>
                            <Button colorScheme={'gray'} size={'lg'}  rightIcon={<ArrowDownIcon />}>Learn more</Button>
                        </Stack>
                    </Stack>
                </AbsoluteCenter>
            </Box>
        </Container>
        
	);
};

export default LandingSection;