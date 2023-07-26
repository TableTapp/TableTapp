import { useState } from "react";
import axios from 'axios';
import Logo2 from "../../assets/Logo2.svg";

import { 
    Flex,
    Button,
    VStack,
    Input,
    InputGroup,
    IconButton,
    InputRightElement,
    Text,
    Box,
    Heading,
    Center,
    Link
} from "@chakra-ui/react";

import {ArrowBackIcon
} from '@chakra-ui/icons'

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
    const handlePasswordInput = (event:any) => {setUserEmail(event.target.value);};

    const handleCreateAccount = async () => {
        try {
            // Call axios API endpoint here
            // Pass email and password as parameters to the API endpoint
                //const response = await axios.post("http://127.0.0.1:9090/auth/signin", { Username: userEmail, Password: userPassword });
                //console.log(response);
                goToCreateAccount();
            } catch(e){
                console.log("Error: ", e); // Update the error state
            } 
    };

    const handleBack = async () => {
        goToStartedView();
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
                        onClick={handleBack}
                        marginLeft='2vw'
                        marginTop='2vw'
                    />
                    <VStack>
                        <VStack marginTop='9.5vh'>
                            <Heading size='xl' color='#2D3748' textAlign='center' padding='1.5rem'>
                                Create Account
                            </Heading>
                            <VStack>
                                <Input
                                    focusBorderColor='red.400'
                                    pr='4.5rem'
                                    w = '100%'
                                    size='lg'
                                    placeholder='First Name'
                                    _placeholder={{}}
                                    onChange={handleFirstNameInput}
                                />
                                <Input
                                    focusBorderColor='red.400'
                                    pr='4.5rem'
                                    w = '100%'
                                    size='lg'
                                    placeholder='Lase Name'
                                    _placeholder={{}}
                                    onChange={handleLastNameInput}
                                />
                                <Input
                                    focusBorderColor='red.400'
                                    pr='4.5rem'
                                    w = '100%'
                                    size='lg'
                                    placeholder='Email Address'
                                    _placeholder={{}}
                                    onChange={handleEmailInput}
                                />
                                <Input
                                    focusBorderColor='red.400'
                                    pr='4.5rem'
                                    w = '100%'
                                    size='lg'
                                    placeholder='Phone Number'
                                    _placeholder={{}}
                                    onChange={handlePhoneInput}
                                />
                                <InputGroup>
                                    <Input
                                        focusBorderColor='red.400'
                                        pr='4.5rem'
                                        w = '100%'
                                        size='lg'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Password'
                                        _placeholder={{}}
                                        onChange={handleFirstNameInput}
                                    />
                                    <InputRightElement width='4.5rem' marginTop='0.1rem'>
                                        <Button size='xs' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}

                                        </Button>
                                    </InputRightElement>
                                </InputGroup>                                        
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
                    </VStack>
                </Box>
            </Center>
        </Flex>
    );
}

export default AccountView;
