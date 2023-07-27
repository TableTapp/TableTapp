import { Button, Flex, Icon, Spacer, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { DownloadIcon } from '@chakra-ui/icons';
import { MdCopyright } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';

const FooterSection: React.FC = () => {
	return (
		<Flex padding={10} bg='red.400'>
            <Flex alignItems={'center'}>
                <Icon as={MdCopyright} color={'white'}/>
                <Text color='white' fontSize='large' as={'b'}>2023 TableTapp</Text>
            </Flex>
            <Spacer/>
            <a href='https://drive.google.com/file/d/1XMPBDfkMGVxPSVy5VXwTPdKQg0L5TIuc/view?usp=drive_link' download={true}>
                <Button leftIcon={<DownloadIcon />} colorScheme='gray' size={'lg'} marginEnd={5}>
                    Final Report 
                </Button>
            </a>
            <a href='https://github.com/TableTapp/TableTapp'>
                <IconButton aria-label='github' icon={<Icon as={FiGithub}/>} size={'lg'} />
            </a>
        </Flex>
	);
};

export default FooterSection;