import { useState } from "react";
import api from "../../services/api";

import { 
    Flex,
    Button,
    VStack,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Box,
    Heading,
    Center,
    Link,
} from "@chakra-ui/react";


//pass account details
interface createAccountProps {
    goToStartedView: () => void;
    goToCreateAccount: () => void;
}

const AccountView: React.FC<createAccountProps> = (props: createAccountProps) => {
    const {goToCreateAccount,goToStartedView} = props;

    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userPassword, setUserPassword] = useState("");

    //show password when clicking "show"
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleFirstNameInput = (event:any) => {setUserFirstName(event.target.value);};
    const handleLastNameInput = (event:any) => {setUserLastName(event.target.value);};
    const handleEmailInput = (event:any) => {setUserEmail(event.target.value);};
    const handlePhoneInput = (event:any) => {setUserPhone(event.target.value);};
    const handlePasswordInput = (event:any) => {setUserPassword(event.target.value);};

    const handleCreateAccount = async () => {
        const name = userFirstName + " " + userLastName;
        const payload = {Name: name, Email: userEmail, Phone: userPhone, Password: userPassword}
        api.postSignup(payload);
        goToCreateAccount();
    };

    const handleBack = async () => {
        goToStartedView();
    };

    return(
        <Flex>
            <Center>
                <Box bg = 'white' w='100vw' h='100vh' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                    <VStack>
                        <VStack marginTop='12.5vh'>
                            <Heading size='xl' color='#2D3748' textAlign='center' padding='1.5rem'>
                                Create Account
                            </Heading>
                            <VStack>
                                <Box boxShadow='none' borderColor='red.300' borderBottomWidth='2px' w='70vw'>
                                <Input size = 'lg' variant='filled' borderRadius='none' backgroundColor='#D4D9DF' color='#2D3748' focusBorderColor ='red.400' placeholder="First Name" _placeholder={{color: 'white' }} onChange={handleFirstNameInput}/>
                                </Box>
                                <Box boxShadow='none' borderColor='red.300' borderBottomWidth='2px' w='70vw'>
                                <Input size = 'lg' variant='filled' borderRadius='none' backgroundColor='#D4D9DF' color='#2D3748' focusBorderColor ='red.400' placeholder="Last Name" _placeholder={{color: 'white' }} onChange={handleLastNameInput}/>
                                </Box>
                                <Box boxShadow='none' borderColor='red.300' borderBottomWidth='2px' w='70vw'>
                                <Input size = 'lg' variant='filled' borderRadius='none' backgroundColor='#D4D9DF' color='#2D3748' focusBorderColor ='red.400' placeholder="Email Address" _placeholder={{color: 'white' }} onChange={handleEmailInput}/>
                                </Box>
                                <Box boxShadow='none' borderColor='red.300' borderBottomWidth='2px' w='70vw'>
                                <Input size = 'lg' variant='filled' borderRadius='none' backgroundColor='#D4D9DF' color='#2D3748' focusBorderColor ='red.400' placeholder="Phone Number" _placeholder={{color: 'white' }} onChange={handlePhoneInput}/>
                                </Box>
                                
                                <Box boxShadow='none' borderColor='red.300' borderBottomWidth='2px' w='70vw'>
                                    <InputGroup>
                                        <Input size = 'lg' variant='filled' borderRadius='none' bg='#D4D9DF' color='#2D3748' placeholder="Password" _placeholder={{color: 'white' }} onChange={handlePasswordInput} type={show ? 'text' : 'password'}/>
                                        <InputRightElement width='4.5rem' marginTop='0.3rem'>
                                            <Button size='xs' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                            </VStack>    
                        </VStack>
                        <VStack marginTop='5vh'>
                            <Button
                                bg='red.400' 
                                color='white'
                                size='lg'
                                w='70vw'
                                variant='solid'
                                _hover={{
                                    bg: 'red.300',
                                    }}
                                onClick={handleCreateAccount}
                                >
                                    Sign Up
                            </Button>
                        </VStack>
                        <VStack>
                            <Box w='70vw'>
                                <Text color='#2D3748' align='center' noOfLines={2}>
                                    By signing up you agree with our {' '}
                                    <Link color='#2D3748'>
                                        Privacy Policy 
                                    </Link>
                                    , & {''}
                                    <Link color='#2D3748'>
                                        Terms of Service
                                    </Link>
                                </Text>
                            </Box>
                        </VStack>
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
                            onClick={handleBack}
                            >
                            Back to Get Started
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </Flex>
    );
}

export default AccountView;
