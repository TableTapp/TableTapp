import { Button, Flex, Icon, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { DownloadIcon } from '@chakra-ui/icons';
import { MdCopyright } from 'react-icons/md';

const FooterSection: React.FC = () => {
	return (
		<Flex h={'20'} w={'100vw'}>
            <Icon as={MdCopyright} color={'white'}/>
            <Text fontSize='sm' color={'white'}>  2023 TableTapp </Text>
            <Spacer/>
            <Button leftIcon={<DownloadIcon />} colorScheme='gray' size={'lg'}>
                Final Report 
            </Button>
        </Flex>
	);
};

export default FooterSection;