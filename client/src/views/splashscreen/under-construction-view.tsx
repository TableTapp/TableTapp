import { AbsoluteCenter, Box, Button, Icon, IconButton, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

interface UnderConstructionViewProps {
    backToLandingPage: () => void;
}

const UnderConstructionView: React.FC<UnderConstructionViewProps> = (props: UnderConstructionViewProps) => {
    const { backToLandingPage } = props;
	return (
		<Box width={'100vw'} height={'100vh'} bg={'red.400'} padding={0}>
            <IconButton onClick={backToLandingPage} aria-label='back' icon={<Icon as={FiArrowLeft}/>} margin={5}/>
            <AbsoluteCenter>
                <Stack direction={'column'} gap={2} alignItems={'center'} textAlign={'center'}>
                    <Text color={'white'} fontSize='6xl' as={'b'} margin={0}> Under Construction </Text>
                    <Stack direction={'row'} gap={5} alignItems={'center'} justifyItems={'center'}>
                        <Text color={'white'} fontSize={'2xl'} marginTop={3}> Please check back later.</Text> 
                        <Button marginTop={5}>Notify Team</Button>
                    </Stack>
                </Stack>
            </AbsoluteCenter>
        </Box>
	);
};

export default UnderConstructionView;