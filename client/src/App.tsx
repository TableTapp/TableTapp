import React, { useState } from 'react'
import { Container, Slide } from '@chakra-ui/react';

// Customer Views
import ScannerView from './views/customer/scanner-view';
import ItemView from './views/customer/item-view';
import MenuView from './views/customer/menu-view';
import CartView from './views/customer/cart-view';
import OrderStatusView from './views/customer/order-status-view';
import { ICart } from './utils/serverEntities';

// Restaurant Views

const CUSTOMER_KEY = 'CUSTOMER';
const RESTAURANT_KEY = 'RESTAURANT';

const CUSTOMER_SCANNER = 'CUSTOMER_SCANNER'; 
const CUSTOMER_MENU = 'CUSTOMER_MENU';
const CUSTOMER_ITEM_DETAILS = 'CUSTOMER_ITEM_DETAILS';
const CUSTOMER_CART = 'CUSTOMER_CART';
const CUSTOMER_ORDER_STATUS = 'CUSTOMER_ORDER_STATUS';
const CUSTOMER_LOGIN = 'CUSTOMER_LOGIN';

function App() {
	const [platform, setPlatfrom] = useState<string>(CUSTOMER_KEY);
	const [currentViewKey, setCurrentViewKey] = useState<string>(CUSTOMER_MENU);
	const [itemId, setItemId] = useState<string>('');
	const [cart, setCart] = useState<ICart>({OrderItems: [], TotalPrice: 0});
	
	const handleMenuBack = () => {
		setCurrentViewKey(CUSTOMER_MENU);
	};
	
	const handleToCart = () => {
		setCurrentViewKey(CUSTOMER_CART);
	};

	const handleToItem = (itemId: string, cart: ICart) => {
		setItemId(itemId);
		setCart(cart);
		setCurrentViewKey(CUSTOMER_ITEM_DETAILS);
	};

	const handleScannerResult = (scanResult: string) => {
		console.log(`App.tsx ${scanResult}`);
		setCurrentViewKey(CUSTOMER_MENU);
	};

	const handleToOrderStatus = () => {
		setCurrentViewKey(CUSTOMER_ORDER_STATUS);
	};

	let currentView = <></>;
	if (platform == CUSTOMER_KEY) {
		switch (currentViewKey) {
			case CUSTOMER_SCANNER:
				currentView = <ScannerView scannerResult={handleScannerResult}/>;
				break;
			case CUSTOMER_MENU:
				currentView = (
					<MenuView
						cartId='64a61e1c2874514ada6c39c0'
						tableId='64a61dba2874514ada6c39bc'
						menuId='64a67f586e0c9689237cac3b'
						goToItem={handleToItem}
						goToCart={handleToCart}
					/>
				);
				break;
			case CUSTOMER_ITEM_DETAILS:
				currentView = (
					<ItemView
						cart={cart}
						id={itemId}
						handleBack={handleMenuBack}
					/>
				);
				break;
			case CUSTOMER_CART:
				currentView = (
					<CartView
						handlePayment={handleToOrderStatus}
						id='64a61e1c2874514ada6c39c0'
						handleBack={handleMenuBack}
					/>
				);
				break;
			case CUSTOMER_ORDER_STATUS:
				currentView = (
					<OrderStatusView />
				);
				break;
			default:
				console.log("Error Customer key does not exist");
				break;
		}
	}

	return (
		<Container h={'100%'} w={'100vw'} p={0} bg={'blackAlpha.50'}>
			{currentView}
		</Container>
	);
}

export default App
