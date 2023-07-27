/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

// UI Components
import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot
} from '@chakra-ui/react';
import Header from '../../components/Header';
import { PaymentDrawer } from '../../components/PaymentDrawer';
import { ItemStack } from '../../components/ItemStack';

// Utils
import { ICartPopulated, IOrderItemPopulated } from '../../utils/serverEntities';
import _ from 'lodash';
import api from '../../services/api';

interface cartViewProps {
	handleBack: () => void;
    handlePayment: () => void;
	id: string;
}


const CartView: React.FC<cartViewProps> = (props: cartViewProps) => {
	const { handleBack, handlePayment, id } = props;
    const [orderItems, setOrderItems] = useState<IOrderItemPopulated[]>([]);
    const [PaymentDrawerIsOpen, setPaymentDrawerIsOpen] = useState<boolean>(false);

    const [cart, setCart] = useState<ICartPopulated>({
        OrderItems: [], 
        TotalPrice: 0
    });

	const handleCheckout = () => {
        setPaymentDrawerIsOpen(!PaymentDrawerIsOpen);
	};	

    const handleToPayment = () => {
        handlePayment();
    };

    const handleBackToMenu = () => {
        handleBack();
	};

    const getCart = useCallback(async () => {
        const cartData = await api.getCart(id);
        setCart(cartData);
        console.log(cartData.OrderItems)
        setOrderItems(cartData.OrderItems);
    }, [id]);

	useEffect(() => {
		// Perform any initialization or side effects here
        setOrderItems([]);
        getCart();
        console.log(cart)
	}, [id]);

	// Render your view component here
	return (
		<>
			<Center>
				<Button 
					colorScheme='red' 
					size='lg' 
                    w={'90%'}
					position='fixed' 
					bottom={0} 
					marginBottom={4} 
					boxShadow='2xl' 
					zIndex={4} 
					onClick={handleCheckout}
				>
					Checkout
				</Button>
			</Center>
            <PaymentDrawer 
                paymentTotal={_.round(cart.TotalPrice + cart.TotalPrice*0.12, 2)} 
                onPayment={handleToPayment} 
                isDrawerOpen={PaymentDrawerIsOpen} 
                onDrawerClose={handleCheckout}
            />
			<VStack gap={2}>
				<Header 
                    cart 
                    headerOptions={{ 
                        title: 'Cart', 
                        subtitle: 'Restaurant Name', 
                        onCartClose: handleBackToMenu 
                    }}
                />
                <ItemStack 
                    rowClick={() => {return}} 
                    order 
                    stackHeader='Items' 
                    cart={cart} 
                    orderItems={orderItems} 
                    addNewItem={handleBackToMenu}
                />
				<Box bg='white' w={'100vw'} h={60}>
					<TableContainer>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>
                                        Summary
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text>Subtotal</Text>
                                    </Td>
                                    <Td isNumeric>
                                        <Text>${cart.TotalPrice}</Text>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text>Fee</Text>
                                    </Td>
                                    <Td isNumeric>
                                        <Text>${_.round(cart.TotalPrice*0.12, 2)}</Text>
                                    </Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Td>
                                        <Text as='b'>Total</Text>
                                    </Td>
                                    <Td isNumeric>
                                        <Text as='b'>
                                            ${_.round(cart.TotalPrice + cart.TotalPrice*0.12, 2)}
                                        </Text>
                                    </Td>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
				</Box>
                <Box padding={10}></Box>
			</VStack>
		</>
	);
};

export default CartView;