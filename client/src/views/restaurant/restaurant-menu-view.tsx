import React, { useState } from 'react';
import { Box, Heading, VStack, HStack, Text, SimpleGrid, Button } from "@chakra-ui/react";
import MenuItem from '../../components/MenuItem';
import NewItem from '../../components/NewItem';
import TableSummary from '../../components/TableSummary';

const sampleMenuItems = [
	{ id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: '$10', image: 'https://en.wikipedia.org/wiki/Pizza#/media/File:Pizza-3007395.jpg' },
	{ id: 2, name: 'Burger', description: 'Juicy beef burger', price: '$8', image: 'https://en.wikipedia.org/wiki/Angus_burger#/media/File:Burger_King_-_Angus_XT_Burger.tiff' },
	{ id: 3, name: 'Salad', description: 'Healthy veggie salad', price: '$7', image: 'https://en.wikipedia.org/wiki/Salad#/media/File:Salad_platter.jpg' },
	// ...
];
interface ITable {
	number: number;	
	status: string;
	order: any[];
	subtotal: number;
	taxes: number;
	total: number;
}

const sampleTables: ITable[] = [
	{
		number: 1,
		status: "Order Requested",
		order: [{ name: "Pizza", quantity: 2, price: 20 }],
		subtotal: 20,
		taxes: 2,
		total: 22
	},
	// ...
];

const RestaurantMenuView: React.FC = () => {
	const [menuItems, setMenuItems] = useState(sampleMenuItems);
	const [itemId, setItemId] = useState(sampleMenuItems.length + 1);
	const [selectedTable, setSelectedTable] = useState<ITable | null>(null);

	const handleSave = (updatedItem: any) => {
		setMenuItems(prevItems => prevItems.map(item => item.id === updatedItem.id ? updatedItem : item));
	}

	const handleAdd = (newItem: any) => {
		setMenuItems(prevItems => [...prevItems, { ...newItem, id: itemId }]);
		setItemId(prevId => prevId + 1);
	}

	const handleTableClick = (tableNumber: number) => {
		setSelectedTable(sampleTables.find((table: ITable) => table?.number === tableNumber) || null);
	}

	const handleAccept = () => {
		// Accept order
		setSelectedTable(null);
	}

	const handleDecline = () => {
		// Decline order
		setSelectedTable(null);
	}

	return (
		<>
			<VStack align="start" p={5} spacing={5}>
				<Box>
				<Heading size="lg">Order Queue</Heading>
				{sampleTables.map((table, index) => (
					<Text key={index} onClick={() => handleTableClick(table.number)}>
					Order {table.status}: Table {table.number}
					</Text>
				))}
				</Box>

				<Box>
				<Heading size="lg">Categories</Heading>
				<HStack spacing={4}>
					<Button>All</Button>
					<Button>Pizzas</Button>
					<Button>Burgers</Button>
					<Button>Salads</Button>
					<Button>Desserts</Button>
				</HStack>
				</Box>

				<Box>
				<Heading size="lg">Items</Heading>
				<NewItem onAdd={handleAdd} />
				<SimpleGrid columns={3} spacing={10}>
					{menuItems.map((item) => (
					<MenuItem key={item.id} item={item} onSave={handleSave} />
					))}
				</SimpleGrid>
				</Box>
				{selectedTable && (
				<TableSummary table={selectedTable} onAccept={handleAccept} onDecline={handleDecline} />
				)}
			</VStack>
		</>
	);
};
export default RestaurantMenuView;