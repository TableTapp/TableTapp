import React, { useState } from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    VStack,
    HStack,
    Button,
    AbsoluteCenter,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Stack,
    CheckboxGroup,
    Checkbox,
    DrawerHeader,
    DrawerCloseButton,
    Icon,
    IconButton,
    InputGroup,
    Container,
    InputRightAddon,
    Select,
    DrawerFooter,
    Alert,
    AlertIcon,
    Slide,
    useDisclosure
} from '@chakra-ui/react';
import { MdCreditCard } from 'react-icons/md'
import { FaGooglePay, FaApplePay } from "react-icons/fa";
import _ from 'lodash';

interface PaymentDrawerProps {
    isDrawerOpen: boolean;
    onDrawerClose: () => void;
    onPayment: () => void;
    paymentTotal: number;
}

export const PaymentDrawer: React.FC<PaymentDrawerProps> = (props: PaymentDrawerProps) => {
    const { isDrawerOpen, paymentTotal, onDrawerClose, onPayment } = props;
    const [isCard, setIsCard] = useState<boolean>(false);
    const [isApplePay, setIsApplePay] = useState<boolean>(false);
    const [isGooglePay, setIsGooglePay] = useState<boolean>(false);
    const [paymentLoading, setPaymentLoading] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCard = () => {
        setIsCard(!isCard);
        setIsApplePay(false);
        setIsGooglePay(false);
        onClose();
    };

    const handleApplePay = () => {
        setIsApplePay(!isApplePay);
        setIsCard(false);
        setIsGooglePay(false);
        onClose();
    };

    const handleGooglePay = () => {
        setIsGooglePay(!isGooglePay);
        setIsCard(false);
        setIsApplePay(false);
        onClose();
    };

    const handlePayment = () => {
        if (isCard || isApplePay || isGooglePay) {  
            setPaymentLoading(true);
            _.delay(payed, 3000);
        } else {
            onOpen();
        }
    };

    const payed = () => {
        setPaymentLoading(false);
        onPayment();
    };

    return (
        <Drawer placement={"bottom"} size='xl' onClose={onDrawerClose} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius={15}>
        <DrawerHeader borderRadius={5}>
            <DrawerCloseButton padding={3} />
        </DrawerHeader>
          <DrawerBody>
            <VStack gap={3}>
                <HStack gap={5}>
                    <IconButton 
                        colorScheme={isApplePay ? 'red' : 'gray'} 
                        onClick={handleApplePay} 
                        aria-label='apple-pay-button' 
                        icon={<Icon w={14} h={8} as={FaApplePay}/>} 
                        width={'40vw'} 
                        isRound={false} 
                    />
                    <IconButton 
                        colorScheme={isGooglePay ? 'red' : 'gray'} 
                        onClick={handleGooglePay} 
                        paddingX={10} 
                        aria-label='apple-pay-button' 
                        icon={<Icon w={14} h={8} as={FaGooglePay}/>} 
                        width={'40vw'} 
                        isRound={false} 
                    />
                </HStack>
                <Container position={'relative'} padding='4'>
                    <Divider />
                    <AbsoluteCenter bg={'white'} p={2}>
                        Or Pay Using
                    </AbsoluteCenter>
                </Container>
                <Button colorScheme={isCard ? 'red' : 'gray'} onClick={handleCard} w={"100%"} leftIcon={<Icon as={MdCreditCard}/>}>Card</Button>
                {isCard && (
                <>
                <FormControl>
                    <FormLabel>Card Information</FormLabel>
                    <InputGroup>
                        <Input placeholder='Card Number'/>
                        <InputRightAddon pointerEvents='none'>
                            <Icon as={MdCreditCard} />
                        </InputRightAddon>
                    </InputGroup>
                    <Stack direction='row' paddingTop={3}>
                        <Input placeholder='MM' />
                        <Input placeholder='YY' />
                        <Input placeholder='CVV' />
                    </Stack>
                </FormControl>
                <FormControl>
                    <FormLabel>Country or Region</FormLabel>
                    <Stack direction='column'>
                        <Select placeholder='Canada' />
                        <Input placeholder='Postal Code'/>
                    </Stack>
                </FormControl>
                <CheckboxGroup colorScheme='red'>
                    <Checkbox>Save this card for future purchases</Checkbox>
                </CheckboxGroup>
                </>
                )}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
                <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                    <Alert status='error'>
                        <AlertIcon />
                            Please Select a payment type
                    </Alert>
                </Slide>
                <Button isLoading={paymentLoading} colorScheme='red' w={"100%"} onClick={handlePayment}>Pay ${paymentTotal ||0.00}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
}