import { useState } from "react";
//import axios from 'axios';


// Components
import { 
    Flex,
    Button,
    VStack,
    Input, 
    Text,
    Box,
    Heading,
    Center,

} from "@chakra-ui/react";

interface ForgotPasswordProps {
    goToLogin: () => void;
}

const ForgotPasswordView: React.FC<ForgotPasswordProps> = (props: ForgotPasswordProps) => {
    const [userEmail, setUserEmail] = useState("");
    const {goToLogin} = props;

    const handleSendEmail = async () => {
        //api call for sending an email
    }
    const handleEmailEntry = (event:any) => {setUserEmail(event.target.value);};

    const handleToLogin = async () => {
        goToLogin();
    };

    return(
        <Flex>
            <Center>
                <Box bg = 'white' w='100vw' h='100vh' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                    <VStack marginTop="20vh">
                        <Heading size='xl' colorScheme='' textAlign='center' padding='2rem' >
                            Password Recovery
                        </Heading>
                        <Box bg='white' w ='70%' h="12vh" overflow='hidden'>
                            <Text fontSize='m' colorScheme='' textAlign='center' padding='0.1rem' >
                            Please enter your email for the account you want to reset your password for.
                            </Text>
                        </Box>
                        <Input size = 'lg' w='70%' variant='flushed' borderRadius='none' backgroundColor='white' focusBorderColor ='red.400' placeholder="  Enter your email" _placeholder={{color: '#2D3748' }} onChange={handleEmailEntry}/>
                        <Button
                            bg='red.400' 
                            color='white'
                            marginTop='3vh'
                            size='lg'
                            w='70%'
                            variant='solid'
                            _hover={{
                                bg: 'red.500',
                                }}
                            onClick={handleSendEmail}
                            >
                                Recover Your Account
                        </Button>
                        <Box bg='white' w ='70%' h="12vh" overflow='hidden'>
                            <Text fontSize='m' colorScheme='' textAlign='center' padding='0.1rem' >
                                If you didn't receive an email, we can resend it to you {''}
                                <Button as = 'u' size='m' colorScheme='gray.100' _hover={{bg: 'gray.200'}} onClick={handleSendEmail} variant='link'>
                                    here
                                </Button>
                            </Text>   
                        </Box>
                    </VStack>
                    <VStack marginTop="5vh">
                        <Box bg='white' w ='70%' h="12vh" overflow='hidden'>
                            <Text fontSize='m' colorScheme='' textAlign='center' padding='0.1rem' >
                                Return to the login page {''}
                                <Button as = 'u' size='m' colorScheme='gray.100' _hover={{bg: 'gray.200'}} onClick={handleToLogin} variant='link'>
                                    here
                                </Button>
                            </Text> 
                        </Box>
                    </VStack>
                </Box>

            </Center>
        </Flex>

    );
};

export default ForgotPasswordView;
