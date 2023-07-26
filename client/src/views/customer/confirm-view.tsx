import Logo2 from "../../assets/Logo2.svg";

import { 
    Flex,
    Button,
    Text,
    VStack,
    Box,
    Image,
    Heading,
    Center
} from "@chakra-ui/react";

interface ConfirmViewProps {
    goToLogin: () => void;
    goToGetStarted: () => void;
}

const ConfirmView: React.FC<ConfirmViewProps> = (props: ConfirmViewProps) => {
    const {goToLogin, goToGetStarted} = props;

    const handleToLogin = async () => {
        goToLogin();
    };
    const handleSendEmail = async () => {
        //sends an email to the users email
    };

    const handleBack = async () => {
        goToGetStarted();
    };

    return(
        <Flex>
            <Center>
                <Box bg = 'white' w='100vw' h='100vh' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <VStack marginTop='12vh'>
                        <Center>
                            <Image src={Logo2} boxSize='40%'/>
                        </Center>
                        <Heading size='xl' color='#2D3748' textAlign='center' padding='2rem'>
                            Please check your email for a confirmation link
                        </Heading>
                        <Center w='70%'>
                            <Text textAlign={'center'}>
                                After confirming your account details you can login to your account
                            </Text>
                        </Center>
                        <Button
                        bg='red.400' 
                        marginTop='2rem'
                        colorScheme="white"
                        size='lg'
                        w='70%'
                        variant='solid'
                        _hover={{
                            bg: 'red.300',
                            }}
                        onClick={handleToLogin}
                        >
                            Log In
                        </Button>
                        <Center w='70%' marginTop='2rem'>
                            <Text>
                                If you didn't receive an email you can resend it by clicking {' '}
                                <Button as = 'u' size='m' colorScheme='gray.100' _hover={{bg: 'gray.200'}} onClick={handleSendEmail} variant='link'>
                                    here
                                </Button>
                            </Text>
                        </Center>
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
};
export default ConfirmView;
