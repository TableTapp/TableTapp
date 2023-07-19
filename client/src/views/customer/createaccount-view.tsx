import { useState } from "react";
import axios from 'axios';
import Logo2 from "../../assets/Logo2.svg";

import { 
    Flex,
    Button,
    VStack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
    Box,
    Image,
    Heading,
    Center,
    Divider,
    Link,
    HStack
} from "@chakra-ui/react";


//pass account details
interface createAccountProps {
    goToStartedView: () => void;
    goToCreateAccount: () => void;
}

const AccountView: React.FC<createAccountProps> = (props: createAccountProps) => {
    const {goToCreateAccount,goToStartedView} = props;

    //show password when clicking "show"
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleCreateAccount = async () => {
        goToCreateAccount();
    };
    const handleBack = async () => {
        goToStartedView();
    }

    return(
        <Flex>
            <Center>
                <VStack>
                    <VStack marginTop='20vh'>
                        <Heading size='xl' color='#2D3748' textAlign='center'>
                            Create Account
                        </Heading>
                    </VStack>
                    <VStack padding='0.3rem'>
                        <Input size = 'lg' w='90%' variant='filled' borderRadius='none' bg='#D4D9DF' placeholder="First Name"/>
                        <Input size = 'lg' w='90%' variant='filled' borderRadius='none' bg='#D4D9DF' placeholder="Last Name"/>
                        <Input size = 'lg' w='90%' variant='filled' borderRadius='none' bg='b#D4D9DF' placeholder="Email Address"/>
                        <InputGroup>
                            <Input size = 'lg' w='90%' variant='filled' borderRadius='none' bg='#D4D9DF' placeholder="Password"/>
                            <InputRightElement width='4.5rem'>
                                <Button size='xs' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </VStack>
                    <VStack marginTop='10vh'>
                        <Button
                            bg='red.400' 
                            color='#2D3748'
                            size='lg'
                            w='72%'
                            variant='solid'
                            _hover={{
                                bg: 'red.500',
                                }}
                            onClick={handleCreateAccount}
                            >
                                Sign Up
                        </Button>
                    </VStack>
                    <VStack>
                        <HStack>
                            <Text color='#2D3748'>
                                By signing up you agree with our{' '}
                            </Text>
                                <Link color='#2D3748'>
                                    Privacy Policy
                                </Link>
                            <Text color='#2D3748'>
                                &{''}
                            </Text>
                                <Link color='#2D3748'>
                                    Terms of Service
                                </Link>
                        </HStack>
                    </VStack>
                    <Button
                        bg='red.400' 
                        color='#2D3748'
                        size='lg'
                        w='72%'
                        variant='solid'
                        _hover={{
                            bg: 'red.500',
                            }}
                        onClick={handleBack}
                        >
                        Back
                    </Button>
                </VStack>
            </Center>
        </Flex>
    );
}

export default AccountView;
