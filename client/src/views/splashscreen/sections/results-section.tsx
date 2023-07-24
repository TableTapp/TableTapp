import { Heading, Square, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import ReleaseNote from '../../../components/website/ReleaseNote';

const ResultSection: React.FC = () => {
    
	return (
		<Stack direction={'column'} gap={10} alignItems={'start'} paddingStart={40}>
			<Stack direction={'column'} gap={1}>
				<Stack direction={'row'} alignItems={'center'}>
					<Text fontSize={'2xl'}> 
						<FaRegCalendar />
					</Text>
					<Text fontSize={'2xl'}> 
						July 26th, 2023
					</Text>
				</Stack>
				<Stack direction={'row'} alignItems={'center'}>
					<Heading justifyContent={'start'} alignItems={'start'} fontSize={'6xl'}>Release Notes</Heading>
					<Square borderRadius={10} size='50px' bg={'red.400'}>
						<Text as={'b'} color={'whiteAlpha.900'} fontSize={'xl'}>
							1.0
						</Text>
					</Square>
				</Stack>
				<Text>
					Description of the release notes
				</Text>
			</Stack>
			<ReleaseNote Title={'New Feature'} Description={'Description of the new feature'} />
        </Stack>
	);
};

export default ResultSection;