import {  Heading, Square, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface FeatureCardProps {
    Title: string;
    Description: string;
}

const ReleaseNote: React.FC<FeatureCardProps> = (props: FeatureCardProps) => {
    const { Title, Description } = props;
	return (
		<Stack direction={'column'} gap={2} alignItems={'start'}>
			<Stack direction={'row'} alignItems={'center'}>
                <Square borderRadius={10} size='30px' bg={'red.400'}>
                    <Text as={'b'} color={'whiteAlpha.900'}>
                        1
                    </Text>
                </Square>
                <Heading justifyContent={'start'} alignItems={'start'} size={'lg'}>{Title}</Heading>
            </Stack>
            <Text>
                {Description}
            </Text>
        </Stack>
	);
};

export default ReleaseNote;