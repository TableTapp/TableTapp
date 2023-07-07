import { useState } from "react";
import axios from 'axios';
import Logo from "../../assets/Logo.svg"

// Components
import { 
    Flex,
    Button,
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
    Link,
    HStack
} from "@chakra-ui/react";

import { LockIcon, CloseIcon, ExternalLinkIcon
} from '@chakra-ui/icons'

interface LoginProps {
    goToForgotPassword?: () => void;
    goToMenu: () => void;
    //need entries for google, facebook, and apple login
}
// Define a Login page component
const LoginView: React.FC<LoginProps> = (props: LoginProps) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const {goToForgotPassword, goToMenu } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    //show password when clicking "show"
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleForgotPassword = async () => {

    }

    const handleLogin = async () => {
        setIsLoading(true);
        setError("");
        goToMenu();

        try {
        // Call axios API endpoint here
        // Pass email and password as parameters to the API endpoint

            async function getLoginDetails () {
                const response = await axios.post("/api/login", { userEmail, userPassword });
                // Handle the response from the server
                // ...
            }


        } catch (error) {
            setError("Login failed. Please try again."); // Update the error state
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Flex>
            <Center>
                <Box bg = 'white' w='100vw' h='100vh' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                    <VStack marginTop={50}>
                        <Box align='center'>
                            <Image src={Logo} boxSize='40%'/>
                        </Box>
                        <Heading size='xl' colorScheme='' textAlign='center' padding='0.9rem'>
                            Sign In
                        </Heading>
                        <InputGroup size = 'lg' w='90%'>
                            <InputLeftElement>
                                <Avatar size='xs' src='https://bit.ly/broken-link' color='#2D3748' />
                            </InputLeftElement>
                            <Input 
                                placeholder='Email'
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </InputGroup>
                        <InputGroup size='lg' w='90%'>
                            <InputLeftElement>
                                <LockIcon color='#2D3748'/>
                            </InputLeftElement>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
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
                        w='90%'
                        variant='solid'
                        _hover={{
                            bg: 'red.400',
                            }}
                        onClick={handleLogin}
                        >
                            Log In
                        </Button>
                        <Link size='sm' colorScheme='gray.100' isExternal>
                        Forgot Password?
                        </Link>
                        
                        <Divider orientation='horizontal' colorScheme='#2D3748' w='65%'/>
                        
                        <HStack>
                            <CloseIcon/>
                            <CloseIcon/>
                            <CloseIcon/>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </Flex>
    );
};

export default LoginView;
