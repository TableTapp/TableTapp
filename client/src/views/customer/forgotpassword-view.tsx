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
                        <Heading size='xl' color='#2D3748' textAlign='center' padding='2rem' >
                            Password Recovery
                        </Heading>
                        <Box bg='white' w ='70%' h="12vh" overflow='hidden'>
                            <Text fontSize='m' color='#2D3748' textAlign='center' padding='0.1rem' >
                            Please enter your email for the account you want to reset your password for.
                            </Text>
                        </Box>
                        <Box boxShadow='none' borderColor='red.300' borderBottomWidth='2px' w='70vw'>
                        <Input size = 'lg' variant='filled' borderRadius='none' backgroundColor='#D4D9DF' color='#2D3748' focusBorderColor ='red.400' placeholder="Enter your email" _placeholder={{color: 'white' }} onChange={handleEmailEntry}/>
                        </Box>
                        <Button
                            bg='red.400' 
                            color='white'
                            marginTop='1.5vh'
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
                        <Button
                            colorScheme='red.400' 
                            color='red.400'
                            size='lg'
                            marginTop='7vh'
                            w='70vw'
                            variant='outline'
                            _hover={{
                                bg: 'red.300',
                                }}
                            onClick={handleToLogin}
                            >
                            Back to Login
                        </Button>
                    </VStack>
                </Box>

            </Center>
        </Flex>

    );
};

export default ForgotPasswordView;
