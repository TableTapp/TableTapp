import { Flex, Heading, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import { FeatureCard } from '../../../components/website/FeatureCard';
import { FeatureBuzz } from '../../../components/website/FeatureBuzzWord';

//assets

const DesignSection: React.FC = () => {
    const featureInfo = [
        {
            Title: 'Front of House',
            Description: 'blurb',
            Image: '/assets/foh.png'
        },
        {
            Title: 'Back of House',
            Description: 'blurb',
            Image: '/assets/boh.png'
        },
        {
            Title: 'Customer',
            Description: 'blurb',
            Image: '/assets/customer.png'
        }
    ];
    const featureBuzzWords = [
        {
            Title: 'Reliable',
            points: [
                'MERN dev Stack',
                'AWS database Hosting',
                'Heroku App Hosting',
            ]
        },
        {
            Title: 'Secure',
            points: [
                'JWT Authentication',
                'HTTP only cookies',
                'Password Hashing',
            ]
        },
        {
            Title: 'Simple',
            points: [
                '',
                '',
                ' ',
            ]
        },
    ];
	return (
        <Stack direction={'column'} gap={10} padding={40}>
            <Heading fontSize='6xl'>Features</Heading>
            <Flex direction={'row'} width={'100%'}>
                {featureInfo.map((feature, index) => {
                    return (
                        <>
                            <FeatureCard
                                key={index}
                                Title={feature.Title}
                                Description={feature.Description}
                                ImgSrc={feature.Image}
                            />
                            { index !== 2 ? <Spacer /> : null}
                        </>
                    )
                })}
            </Flex>
            <Flex direction={'row'} width={'100%'}>
                {featureBuzzWords.map((feature, index) => {
                    return (
                        <>
                            <FeatureBuzz
                                key={index}
                                Title={feature.Title}
                                Points={feature.points}
                            /> 
                            { index !== 2 ? <Spacer /> : null}
                        </>
                    )
                })}
            </Flex>
        </Stack>
	);
};

export default DesignSection;