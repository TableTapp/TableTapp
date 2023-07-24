import { Box,  Container, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { PersonCard } from '../../../components/website/PersonCard';

const TeamInfo: React.FC = () => {

    const team = [
        {
            Name: 'Adil Zafar',
            Title: 'a dude'
        },
        {
            Name: 'Aryan Sahel',
            Title: 'a dude'
        },
        {
            Name: 'Kai Herrero',
            Title: 'a dude'
        },
        {
            Name: 'Kris Lemieux',
            Title: 'a dude'
        }
    ];

	return (
		<Container width={'100vw'} height={'100vh'} bg={'whiteAlpha.400'} maxWidth={'none'}>
            <Stack direction={'column'} gap={10} alignItems={'center'}>
                <Stack direction={'row'} padding={8} width={'90vw'}>
                    <Stack direction={'column'} justifyContent={'center'}>
                        <Text fontSize='5xl' as='b'> Meet Team Team </Text>
                        <Text fontSize={'2xl'}> We are a team of 4 students from the University of Victoria. </Text>
                    </Stack>
                    <Spacer />
                    <Image borderRadius={13} height={'500'} aria-label='logo' src={'https://via.placeholder.com/500'} alt='Graphic'/>
                </Stack>
                <Stack direction={'row'} padding={8} width={'90vw'} zIndex={2}>
                    {team.map((person, index) => {
                        return ( 
                            <>
                                <PersonCard key={index} Name={person.Name} Title={person.Title} /> 
                                { index !== 3 ? <Spacer /> : <></> }
                            </>
                        )
                    })}
                </Stack>
                <Box position={'absolute'} bottom={0} bg={'red.400'} width={'100%'} height={'40vh'} />
            </Stack>

        </Container>
        
	);
};

export default TeamInfo;