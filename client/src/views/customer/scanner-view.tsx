import { AbsoluteCenter, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Scanner from '../../components/Scanner';

interface ScannerProps {
	scannerResult: (result: string) => void;
}

const ScannerView: React.FC<ScannerProps> = (props: ScannerProps) => {
	// make a post request creating a new table session with this customer
	const handleNewResult = (e: string) => {
		props.scannerResult(e);
	};

	return (
		<Container>
			<VStack marginTop={40}>	
				<Heading as='h1' size='xl' textAlign='center'>
					Welcome to TableTapp!
				</Heading>
				<Text textAlign='center' as='p'>
					Scan the QR code on your table to order or view the menu
				</Text>
			</VStack>
			<AbsoluteCenter>
				<Scanner result={handleNewResult}/>
			</AbsoluteCenter>
		</Container>
	);
};

export default ScannerView;