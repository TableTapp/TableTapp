import { useState } from "react";
//import axios from 'axios';


// Components
import { 
    Flex,
    IconButton,
    Button,
    VStack,
    Input, 
    Text,
    Box,
    Heading,
    Center
} from "@chakra-ui/react";

import {ArrowBackIcon
} from '@chakra-ui/icons'

interface ForgotPasswordProps {
    goToLogin: () => void;
}

const ForgotPasswordView: React.FC<ForgotPasswordProps> = (props: ForgotPasswordProps) => {
    const [userEmail, setUserEmail] = useState("");
    const {goToLogin} = props;

    const handleSendEmail = async () => {
        //api call for sending an email
        console.log(userEmail)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEmailEntry = (event:any) => {setUserEmail(event.target.value);};

    const handleToLogin = async () => {
        goToLogin();
    };

    return(
        <Flex>
            <Center>
                <Box bg = 'white' w='100vw' h='100vh' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                    <IconButton
                        aria-label="none"
                        variant='outline'
                        color='red.400'
                        isRound={true}
                        icon={<ArrowBackIcon/>}
                        onClick={handleToLogin}
                        marginLeft='2vw'
                        marginTop='2vw'
                    />
                    <VStack marginTop="15vh">
                        <Heading size='xl' color='#2D3748' textAlign='center' padding='2rem' >
                            Password Recovery
                        </Heading>
                        <Box bg='white' w ='70%' h="12vh" overflow='hidden'>
                            <Text fontSize='m' color='#2D3748' textAlign='center' padding='0.1rem' >
                            Please enter your email for the account you want to reset your password for.
                            </Text>
                        </Box>
                        <Input
                                focusBorderColor='red.400'
                                pr='4.5rem'
                                w = '70%'
                                placeholder='Recovery Email'
                                _placeholder={{}}
                                onChange={handleEmailEntry}
                            />
                        <Button
                            bg='red.400' 
                            color='white'
                            marginTop=''
                            size='lg'
                            w='70%'
                            variant='solid'
                            _hover={{
                                bg: 'red.300',
                                }}
                            onClick={handleSendEmail}
                            >
                                Recover Your Account
                        </Button>
                        <Box bg='white' w ='70%' h="12vh" overflow='hidden'>
                            <Text fontSize='m' color='#2D3748' textAlign='center' padding='0.1rem' >
                                If you didn't receive an email, we can resend it to you {''}
                                <Button as = 'u' size='m' colorScheme='gray.100' _hover={{bg: 'gray.200'}} onClick={handleSendEmail} variant='link'>
                                    here
                                </Button>
                            </Text>   
                        </Box>
                    </VStack>
                    <VStack marginTop="5vh">
                    </VStack>
                </Box>
            </Center>
        </Flex>

    );
};

export default ForgotPasswordView;
