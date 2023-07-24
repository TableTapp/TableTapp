import React from 'react';
import {
    Heading,
    Text,
    Stack,
    Box
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';


interface FeatureCardProps {
    Title: string;
    Points: string[];
}

export const FeatureBuzz: React.FC<FeatureCardProps> = (props: FeatureCardProps) => {
    const { Title, Points } = props;
    return (

        <Stack direction={'column'} gap={1}>
            <Heading zIndex={2}>{Title}</Heading>
            <Box width={'100%'} bgColor={'red.400'} height={'5'}/>
            {Points.map((point, index) => {
                return (
                    <Stack direction={'row'}>
                        <MdCheck /> 
                        <Text key={index} fontSize={'large'}> {point}</Text>
                    </Stack>
                )
            })}
        </Stack>
    );
}