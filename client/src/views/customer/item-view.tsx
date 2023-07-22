/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

// UI Components
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
	Textarea
} from '@chakra-ui/react';
import Header from '../../components/Header';
import {
	AddIcon, 
	ArrowBackIcon, 
	ChatIcon, 
	MinusIcon 
} from '@chakra-ui/icons';

// Utils	
import axios from 'axios';
import { ItemAddOns } from '../../components/ItemAddOns';
import { ICart, ICartPopulated, IItem, IOrderItem, IOrderItemPopulated } from '../../utils/serverEntities';
import _ from 'lodash';

interface ItemViewProps {
	handleBack: () => void;
	id: string;
	cart: ICartPopulated;
}

const ItemView: React.FC<ItemViewProps> = (props: ItemViewProps) => {
	const { handleBack, id } = props;
	const [amount, setAmount] = useState<number>(1);
	const [specialInstructions, setSpecialInstructions] = useState<string>('');
	const [showSpecialInstructions, setShowSpecialInstructions] = useState<boolean>(false);
	const [cart, setCart] = useState<ICartPopulated>(props.cart);
	const [itemDetails, setItemDetails] = useState<IItem>({
		_id: '',
		Name: '',
		Description: '',
		Price: 0,
		Category: ''
	});


	const getItem = useCallback(async () => {
		try {
			const response = await axios.get(`http://127.0.0.1:9090/item/${id}`);
			const item: IItem = {
				_id: response.data.result._id,
				Name: response.data.result.Name,
				Description: response.data.result.Description,
				Price: response.data.result.Price,
				Category: response.data.result.Category,
				AddOns: response.data.result.ItemAddOns
			};
			setItemDetails(item)
		} catch (error) {
			console.log(error);
		}
	}, []);


	const addItem = async () => {
		let orderItemResponse;
		let orderItemId = '';
		let priceSign = 1;
		const payload = {
			ItemId: id,
			Quantity: amount,
			AdditionalRequests: specialInstructions,
		};
		const addItem = _.map(cart.OrderItems, (oi: IOrderItemPopulated) => {
			console.log(oi.ItemId._id, id)
			if (oi.ItemId._id === id) {
				orderItemId = oi._id as string;
				priceSign = oi.Quantity < amount ? -1 : 1;
			}
			return oi.ItemId._id
		});
		console.log(addItem, id, addItem.includes(id))
		if (addItem.includes(id)) {

			orderItemResponse = await axios.patch(`http://127.0.0.1:9090/orderItem/${orderItemId}`, payload);
			console.log('Item already in cart');
		} else {
			orderItemResponse = await axios.post(`http://127.0.0.1:9090/orderItem/`, payload);
			const cartPayload: ICart = {
				OrderItems: [...cart.OrderItems, orderItemResponse.data.result ? orderItemResponse.data.result._id : orderItemResponse.data.results._id],
				TotalPrice: _.map(cart.OrderItems, (oi: IOrderItemPopulated) => oi.ItemId.Price * oi.Quantity).reduce((a, b) => a + b, 0) + (itemDetails.Price * amount * priceSign),
			};
			const cartResponse = await axios.patch(`http://127.0.0.1:9090/cart/${cart._id}`, cartPayload);
			setCart(cartResponse.data.result);
		}
	}	

	const handleSpecialInstructionsChange = (e: any) => {
		setSpecialInstructions(e.target.value);
	};

	const handleShowSpecialClick = () => {
		setShowSpecialInstructions(!showSpecialInstructions);
	};

	const handleAddItem = () => {
		addItem();
		handleBack();
	};	

	useEffect(() => {
		// Perform any initialization or side effects here
		getItem();
	}, [getItem]);

	// Render your view component here
	return (
		<>
			<IconButton 
				size={'md'} 
				m={3} 
				bg='white' 
				aria-label='back-btn' 
				position='absolute' 
				onClick={handleBack} 
				borderRadius='full' 
				icon={<ArrowBackIcon />} 
			/>
			<Center>
				<Button 
					colorScheme='red' 
					size='lg' 
					position='fixed' 
					bottom={0} 
					marginBottom={4} 
					boxShadow='2xl' 
					zIndex={4} 
					onClick={handleAddItem}
				>
					<Flex width='80vw'>Add item <Spacer />${itemDetails.Price*amount}</Flex>
				</Button>
			</Center>
			<VStack gap={2}>
				<Img 
					src="https://via.placeholder.com/428x185"
					objectFit='contain'
					width='100vw'
					height='20vh'
				/>
				<Header item headerOptions={{ title: itemDetails.Name, subtitle: itemDetails.Description }}/>
				{itemDetails.AddOns && <ItemAddOns itemOptions={{
					AddOns: itemDetails.AddOns, 
					category: 'addon category'
				}}
				/>}
				<Box bg='white' w={'100vw'} h={60}>
					<Center h={40}>
						<VStack>
							<Button leftIcon={<ChatIcon />} onClick={handleShowSpecialClick} colorScheme='gray' size='xs'>
								Special Instruction
							</Button>
							{showSpecialInstructions && <Textarea
								value={specialInstructions} 
								onChange={handleSpecialInstructionsChange}
								placeholder='Special Instructions ...'
								size='lg'
							/>}
							<ButtonGroup>
								<IconButton 
									aria-label='minus-one-btn' 
									icon={<MinusIcon />} 
									size='sm' 
									borderRadius='full' 
									onClick={() => setAmount(amount-1)} 
								/>
									<Text as={'b'} p={0.5}>{amount}</Text>
								<IconButton 
									aria-label='plus-one-btn' 
									icon={<AddIcon />} 
									size='sm' 
									borderRadius='full' 
									onClick={() => setAmount(amount+1)} 
								/>
							</ButtonGroup>
						</VStack>
					</Center>
				</Box>
			</VStack>
		</>
	);
};

export default ItemView;