import { useState } from "react";
import axios from 'axios';
import Logo2 from "../../assets/Logo2.svg";

// Components
import { 
    Flex,
    Button,
    VStack,
    Text,
    Box,
    Image,
    Heading,
    Center,
    Divider,
    Link,
    HStack
} from "@chakra-ui/react";

interface getStartedProps {
    goToLogin: () => void;
    goToGetStarted: () => void;
    goToCreateAccount: () => void;
}

const StartedView: React.FC<getStartedProps> = (props: getStartedProps) => {
    const {goToLogin, goToGetStarted, goToCreateAccount} = props;

   
    const handleLogin = async () => {
        goToLogin();
    };
    const handleCreateAccount = async () => {
        goToCreateAccount();
    };

    const handleGetStarted = async () => {
        goToGetStarted();
    };
    
    return(
        <Flex>
            <Center>
                <Box bg='red.400' w='100vw' h='100vh' borderRadius='none' overflow='hidden'>
                    <VStack marginTop='12vh'>
                        <Box align='center'>
                            <Image src={Logo2} boxSize='50%'/>
                        </Box>
                        <Heading size='xl' color='white' textAlign='center'>
                            TableTapp
                        </Heading>
                    </VStack>
                    <VStack marginTop='40vh'>
                        <Button
                        bg='white' 
                        color='#2D3748'
                        size='lg'
                        w='72%'
                        variant='solid'
                        _hover={{
                            bg: 'white',
                            }}
                        onClick={handleGetStarted}
                        >
                            Get Started
                        </Button>
                    </VStack>
                    <Box align ='center' marginTop='1.5vh'>
                        <Text color='white' align='center'>
                            Already have an account? {' '}
                            <Button as = 'u' size='m' colorScheme='gray.100' _hover={{bg: 'gray.200'}} onClick={handleLogin} variant='link'>
                                Login 
                            </Button>
                            . Or you can {' '}
                            <Button as = 'u' size='m' colorScheme='gray.100' _hover={{bg: 'gray.200'}} onClick={handleCreateAccount} variant='link'>
                                Create a new account
                            </Button>
                        </Text>
                    </Box>
                </Box>
            </Center>
        </Flex>
    );
}

export default StartedView;

