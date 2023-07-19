import { useState, useCallback } from "react";
import axios from 'axios';
import Logo from "../../assets/Logo.svg";
import apple from "../../assets/apple.svg"
import meta from "../../assets/meta.svg"
import google from "../../assets/google.svg"

// Components
import { 
    Flex,
    Button,
    IconButton,
    VStack,
    Input, 
    Box,
    Image,
    Heading,
    Avatar,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Center,
    Divider,
    HStack,
} from "@chakra-ui/react";

import { LockIcon, CloseIcon
} from '@chakra-ui/icons'

interface LoginProps {
    goToForgotPassword: () => void;
    goToMenu: () => void;
    //need entries for google, facebook, and apple login
}
// Define a Login page component
const LoginView: React.FC<LoginProps> = (props: LoginProps) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const {goToForgotPassword, goToMenu } = props;

    //show password when clicking "show"
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleUsernameInput = (event:any) => {setUserEmail(event.target.value);};
    const handlePasswordInput = (event:any) => {setUserPassword(event.target.value);};

    const handleLogin =  async () => {

        //console.log(userEmail);
        //console.log(userPassword);

        try {
        // Call axios API endpoint here
        // Pass email and password as parameters to the API endpoint
            const response = await axios.post("http://127.0.0.1:9090/auth/signin", { Username: userEmail, Password: userPassword });
            console.log(response);
            goToMenu();
        } catch(e){
            console.log("Error: ", e); // Update the error state
        } 
    }

    const handleForgotPassword = async () => {
        goToForgotPassword();
    }

    const handleGoogle = async () => {
        //go to Google API call
    }
    const handleMeta = async () => {
        //go to Meta API call
    }
    const handleApple = async () => {
        //go to Apple API call
    }

    return (
        <Flex>
            <Center>
                <Box bg = 'white' w='100vw' h='100vh' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                    <VStack marginTop='12vh'>
                        <Box align='center' marginBottom='4rem'>
                            <Image src={Logo} boxSize='40%'/>
                        </Box>
                        <Heading size='xl' color='#2D3748' textAlign='center' padding='1rem'>
                            Sign In
                        </Heading>
                        <InputGroup size = 'lg' w='70%'>
                            <InputLeftElement>
                                <Avatar size='xs' src='https://bit.ly/broken-link' bg='#D9D9D9' />
                            </InputLeftElement>
                            <Input
                                focusBorderColor='red.400' 
                                placeholder='Email'
                                onChange={handleUsernameInput}
                            />
                        </InputGroup>
                        <InputGroup size='lg' w='70%'>
                            <InputLeftElement>
                                <LockIcon boxSize={6} color='#D9D9D9'/>
                            </InputLeftElement>
                            <Input
                                focusBorderColor='red.400'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                onChange={handlePasswordInput}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </VStack>
                    <VStack marginTop={7}>
                        <Button
                        bg='red.400' 
                        colorScheme="white"
                        size='lg'
                        w='70%'
                        variant='solid'
                        _hover={{
                            bg: 'red.300',
                            }}
                        onClick={handleLogin}
                        >
                            Log In
                        </Button>
                        <Button size='sm' colorScheme='gray.100' onClick={handleForgotPassword} variant='link' >
                        Forgot Password?
                        </Button>
                        
                        <Divider orientation='horizontal' color='#D9D9D9' w='65%'/>
                        
                        <HStack  spacing='1rem'>
                            <IconButton variant='ghost' aria-label="none" size='sm' icon={<Image src={google} boxSize='100%'/>} onClick={handleGoogle}/>
                            <IconButton variant='ghost' aria-label="none" size='sm' icon={<Image src={meta} boxSize='100%'/>} onClick={handleMeta}/>
                            <IconButton variant='ghost' aria-label="none" size='sm' icon={<Image src={apple} boxSize='100%' onClick={handleApple}/>}/>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </Flex>
    );
};

export default LoginView;
