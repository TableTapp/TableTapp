import { Container, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { PersonCard } from '../../../components/website/PersonCard';
import Logo from '../../../assets/Logo.svg';
const TeamInfo: React.FC = () => {

    const team = [
        {
            Name: 'Adil Zafar',
            Title: 'Backend Developer, Security Expert'
        },
        {
            Name: 'Aryan Sahel',
            Title: 'Restaurant Front End Developer, Market Researcher'
        },
        {
            Name: 'Kai Herrero',
            Title: 'Back of House/Login Expert, Graphic Design Front End Developer'
        },
        {
            Name: 'Kris Lemieux',
            Title: 'Customer Expert, UX/UI Designer, Scrum master, Full stack developer'
        }
    ];

	return (
		<Container bg={'whiteAlpha.400'} maxWidth={'none'}>
            <Stack direction={'column'} gap={10} alignItems={'center'}>
                <Stack direction={'row'} padding={8} width={'90vw'}>
                    <Stack direction={'column'} justifyContent={'center'}>
                        <Text fontSize='6xl' as='b'> Meet the TableTapp Team </Text>
                        <Text fontSize={'2xl'}> We are a team of 4 students from the University of Victoria. </Text>
                    </Stack>
                    <Spacer />
                    <Image borderRadius={13} height={'500'} aria-label='logo' src={Logo} alt='Graphic'/>
                </Stack>
                <Stack direction={'row'} padding={8} width={'90vw'} zIndex={2}>
                    {team.map((person, index) => {
                        return ( 
                            <>
                                <PersonCard ImgSrc='fsdafsd' key={index} Name={person.Name} Title={person.Title} /> 
                                { index !== 3 ? <Spacer /> : <></> }
                            </>
                        )
                    })}
                </Stack>
            </Stack>
        </Container>
        
	);
};

export default TeamInfo;