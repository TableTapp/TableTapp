import { Flex, Heading, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import { FeatureCard } from '../../../components/website/FeatureCard';
import { FeatureBuzz } from '../../../components/website/FeatureBuzzWord';

//assets

const DesignSection: React.FC = () => {
    const featureInfo = [
        {
            Title: 'Front of House',
            Description: '“Graphic and informational design to enable your staff to deliver the best service possible without the expense of traversing technology.” ',
            Image: '/assets/foh.png'
        },
        {
            Title: 'Back of House',
            Description: '“Our accessible back of house KDS allows the kitchen to easily view tickets. Our design showcases order information plainly so that efficiency can be your number one priory”',
            Image: '/assets/boh.png'
        },
        {
            Title: 'Customer',
            Description: '“Ease of access to every aspect of your restaurant’s menu so customers don’t miss a single aspect of your resturant’s experience!                     ”',
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
                'Ergonimic',
                'User Friendly',
                'Minimal Design',
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