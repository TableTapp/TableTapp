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
	Textarea
} from '@chakra-ui/react';
import axios from 'axios';
import { AddIcon, ArrowBackIcon, ChatIcon, MinusIcon } from '@chakra-ui/icons';
import Header from '../../components/Header';
import { ItemOptions } from '../../components/ItemOptions';
import { IItem, IItemResponse, IOrderItemBase } from '../../utils/serverEntities';

interface ItemViewProps {
	handleBack: () => void;
	id: string;
}

const ItemView: React.FC<ItemViewProps> = (props: ItemViewProps) => {
	const { handleBack, id } = props;
	const [amount, setAmount] = useState<number>(1);
	const [specialInstructions, setSpecialInstructions] = useState<string>();
	const [showSpecialInstructions, setShowSpecialInstructions] = useState<boolean>(false);

	const [itemDetails, setItemDetails] = useState<IItem>({
		Id: '9798',
		Name: 'Item',
		Description: 'Item description',
		Price: 6.99,
		Category: 'Category'
	});

	const addItem = async () => {
		const payload: IOrderItemBase = {
			ItemId: id,
			Quantity: amount
		};
		await axios.post<IOrderItemBase>(`http://127.0.0.1:9090/item/`, payload);
	}	


	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
		async function getItemDetails() {
			const response = await axios.get<IItemResponse>(`http://127.0.0.1:9090/item/${id}`);
			setItemDetails(response.data.results)
		}
		getItemDetails();
	}, [id]);

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
					colorScheme='blue' 
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
				<ItemOptions itemOptions={{items:[{Option: 'addon 1', Id: '1', Price: 2.3}, {Option: 'addon 2', Id: '1', Price: 2.3}], category: 'addon category'}}/>
				<Box bg='white' w={'100vw'} h={60}>
					<Center h={40}>
						<VStack>
							<Button leftIcon={<ChatIcon />} colorScheme='gray' size='xs'>
								Special Instruction
							</Button>
							{showSpecialInstructions && <Textarea
								value={specialInstructions} 
								onChange={handleSpecialInstructionsChange}
								placeholder='Special Instructions ...'
								size='md'
								onClick={handleShowSpecialClick}
							/>}
							<ButtonGroup>
								<IconButton aria-label='minus-one-btn' icon={<MinusIcon />} size='sm' borderRadius='full' onClick={() => setAmount(amount-1)} />
									<Text as={'b'} p={0.5}>{amount}</Text>
								<IconButton aria-label='plus-one-btn' icon={<AddIcon />} size='sm' borderRadius='full' onClick={() => setAmount(amount+1)} />
							</ButtonGroup>
						</VStack>
					</Center>
				</Box>
			</VStack>
		</>
	);
};

export default ItemView;