import { useState } from "react";
import axios from 'axios';

// Components
import { 
    Flex,
    Button,
    VStack,
    Input, 
    Container,
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

import { LockIcon, CloseIcon
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
            <Container>
                <VStack marginTop={144}>
                    <Heading size='md' colorScheme='gray' textAlign='center'>
                        Sign In
                    </Heading>
                    <InputGroup>
                        <InputLeftElement>
                            <Avatar size='xs' src='https://bit.ly/broken-link' />
                        </InputLeftElement>
                        <Input 
                            placeholder='Email'
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup size='md'>
                    <InputLeftElement>
                        <LockIcon />
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
                    <Button 
                    bg='red.400' 
                    size='lg' 
                    variant='solid'
                    _hover={{
                        bg: 'red.500',
                      }}
                    onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Link>
                    Forgot Password?
                    </Link>
                    <Center>
                        <Divider orientation='vertical' />
                    </Center>
                    <HStack>
                        <CloseIcon/>
                        <CloseIcon/>
                        <CloseIcon/>
                    </HStack>
                </VStack>
            </Container>
        </Flex>
    );
};

export default LoginView;
