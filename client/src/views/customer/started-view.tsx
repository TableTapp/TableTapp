import Logo2 from "../../assets/Logo2.svg";

// Components
import { 
    Flex,
    Button,
    VStack,
    Text,
    Box,
    Image,
    Heading,
    Center
} from "@chakra-ui/react";

interface getStartedProps {
    goToLogin: () => void;
    goToGetStarted: () => void;
    goToCreateAccount: () => void;
}

const StartedView: React.FC<getStartedProps> = (props: getStartedProps) => {
    const {goToLogin, goToGetStarted, goToCreateAccount} = props;

   
    const handleLogin = async () => {
        goToLogin();
    };
    const handleCreateAccount = async () => {
        goToCreateAccount();
    };

    const handleGetStarted = async () => {
        goToGetStarted();
    };
    
    return(
        <Flex>
            <Center>
                <Box bg='red.400' w='100vw' h='100vh' borderRadius='none' overflow='hidden'>
                    <VStack marginTop='12vh'>
                        <Center>
                            <Image src={Logo2} boxSize='50%'/>
                        </Center>
                        <Heading size='xl' color='white' textAlign='center'>
                            TableTapp
                        </Heading>
                    </VStack>
                    <VStack marginTop='35vh'>
                        <Button
                        bg='white' 
                        color='#2D3748'
                        size='lg'
                        w='72%'
                        variant='solid'
                        _hover={{
                            bg: 'white',
                            }}
                        onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Button
                        bg='red.400' 
                        color='white'
                        size='lg'
                        w='72%'
                        variant='outline'
                        border='1px'
                        borderColor='white'
                        _hover={{
                            bg: 'red.500',
                            }}
                        onClick={handleGetStarted}
                        >
                            View Menu
                        </Button>
                    </VStack>
                    <Center marginTop='1vh'>
                        <Text color='white' align='center'>
                            Or you can create a {' '}
                            <Button as = 'u' size='m' colorScheme='gray.100' _hover={{bg: 'gray.200'}} onClick={handleCreateAccount} variant='link'>
                                new account
                            </Button>
                        </Text>
                    </Center>
                </Box>
            </Center>
        </Flex>
    );
}

export default StartedView;

