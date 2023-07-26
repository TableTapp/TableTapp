import { 
    AbsoluteCenter, 
    Box, 
    Button, 
    Container, 
    Flex, 
    Heading, 
    Image, 
    Spacer, 
    Stack 
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../../../assets/logo-text.svg';
import { ArrowDownIcon } from '@chakra-ui/icons';

interface LandingSectionProps {
    toCustomerLogin: () => void;
    toRestaurantLogin: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = (props: LandingSectionProps) => {
    const {toCustomerLogin, toRestaurantLogin} = props;
	return (
		<Container width={'100vw'} height={'100vh'} bg={'red.400'} maxWidth={'none'}>
            <Box width={'100%'} padding={8} bg={'red.400'}>
                <Flex>
                    <Image height={'var(--chakra-sizes-12)'} aria-label='logo' src={Logo} alt='Logo'/>
                    <Spacer />
                    <Button colorScheme={'gray'} size={'lg'} onClick={toCustomerLogin}>Login to Customer</Button>
                    <Button colorScheme={'gray'} size={'lg'} onClick={toRestaurantLogin}>Login to Vendor</Button>
                </Flex>
            </Box>
            <Box position={'absolute'} width={'70%'} height={'75vh'}>
                <AbsoluteCenter>
                    <Stack direction={'column'}>
                        <Heading fontSize='6xl' as='b' color={'whiteAlpha.900'} paddingBottom={8}> Serving Success, one tap at a time </Heading>
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