import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SvgComponent from '../../../components/svgs/svgguy';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const MissionSection: React.FC = () => {
	return (
		<Container width={'100vw'} height={'50vh'} maxWidth={'none'} padding={0} marginBottom={20}>
            <Box zIndex={0} position={'absolute'} width={'100%'}>
                <SvgComponent />
            </Box>
            
            <Flex zIndex={1} position={'absolute'} width={'100%'}  paddingStart={40} marginTop={60}>
                <Stack direction={'column'} gap={5}>
                    <Heading fontSize='6xl'>Our Mission</Heading>
                    <Text fontSize='4xl' maxWidth={'50vw'}> Empower local restaurants with an all-in-one solution under one subscription. </Text>
                    <Button 
                        width={'-moz-fit-content'} 
                        rightIcon={<ArrowForwardIcon />} 
                        variant={'solid'} 
                        bg={'red.400'} 
                        color={'whiteAlpha.900'}
                    >
                        Learn More
                    </Button>
                </Stack>
            </Flex>
        </Container>
	);
};

export default MissionSection;