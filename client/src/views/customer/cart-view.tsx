import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Center,
    Flex,
    IconButton,
	ButtonGroup,
    Img,
    Spacer,
    Text,
    VStack,
	Textarea,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot
} from '@chakra-ui/react';
import axios from 'axios';
import { AddIcon, ArrowBackIcon, ChatIcon, MinusIcon } from '@chakra-ui/icons';
import Header from '../../components/Header';
import { ItemCard } from '../../components/ItemCard';
import { ICart, ICartResponse } from '../../utils/serverEntities';
import { ItemStack } from '../../components/ItemStack';

interface cartViewProps {
	handleBack: () => void;
	id: string;
    itemsId: string;
}


const CartView: React.FC<cartViewProps> = (props: cartViewProps) => {
	const { handleBack, id } = props;
	const [amount, setAmount] = useState<number>(1);
    const [cart, setCart] = useState<ICart>({
        OrderItems: [
            {ItemId: 'ert', Quantity: 3}, 
            {ItemId: 'tged', Quantity: 2}
        ], TotalPrice: 89.8
    });
	const [specialInstructions, setSpecialInstructions] = useState<string>();
	const [showSpecialInstructions, setShowSpecialInstructions] = useState<boolean>(false);


	const handleCheckout = () => {
        return
	};	

    const handleBackToMenu = () => {
        handleBack();
	};

	useEffect(() => {
		// Perform any initialization or side effects here
        async function getCartDetails() {
            const response = await axios.get<ICartResponse>(`http://127.0.0.1:9090/cart/${id}`);
            setCart(response.data.results);
        }
        getCartDetails();
	}, [id]);

	// Render your view component here
	return (
		<>
			<Center>
				<Button 
					colorScheme='blue' 
					size='lg' 
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
			<VStack gap={2}>
				<Header cart headerOptions={{ title: 'Cart', subtitle: 'Restaurant Name', onCartClose: handleBackToMenu }}/>
                <ItemStack order stackHeader='Items' orderItems={cart.OrderItems}/>
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
                                        <Text as='b'>$20.4</Text>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text>Fee</Text>
                                    </Td>
                                    <Td isNumeric>
                                        <Text as='b'>$9.50</Text>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td w={'100%'}>
                                        <Center>
                                            <ButtonGroup>
                                                <Button>15%</Button>
                                                <Button>18%</Button>
                                                <Button>25%</Button>
                                            </ButtonGroup>
                                        </Center> 
                                    </Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Td>
                                        <Text as='b'>Total</Text>
                                    </Td>
                                    <Td isNumeric>
                                        <Text as='b'>{cart.TotalPrice}</Text>
                                    </Td>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
				</Box>
			</VStack>
		</>
	);
};

export default CartView;