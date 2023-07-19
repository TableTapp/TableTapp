import React, { useState } from 'react'
import { Container } from '@chakra-ui/react';

// Customer Views
import ScannerView from './views/customer/scanner-view';
import ItemView from './views/customer/item-view';
import MenuView from './views/customer/menu-view';
import CartView from './views/customer/cart-view';

// Restaurant Views

// Landing Page View
import LandingPage from './views/splashscreen/landingpage-view';

const CUSTOMER_KEY = 'CUSTOMER';
const RESTAURANT_KEY = 'RESTAURANT';
const LANDING_PAGE_KEY = 'LANDING_PAGE';

const CUSTOMER_SCANNER = 'CUSTOMER_SCANNER'; 
const CUSTOMER_MENU = 'CUSTOMER_MENU';
const CUSTOMER_ITEM_DETAILS = 'CUSTOMER_ITEM_DETAILS';
const CUSTOMER_CART = 'CUSTOMER_CART';

function App() {
	const [platform, setPlatfrom] = useState<string>(CUSTOMER_KEY);
	const [currentViewKey, setCurrentViewKey] = useState<string>(LANDING_PAGE_KEY);
	const [itemId, setItemId] = useState<string>('');
	
	const handleMenuBack = () => {
		setCurrentViewKey(CUSTOMER_MENU);
	};
	
	const handleToCart = () => {
		setCurrentViewKey(CUSTOMER_CART);
	};

	const handleToItem = (id: string) => {
		setItemId(id);
		setCurrentViewKey(CUSTOMER_ITEM_DETAILS);
	};

	const handleScannerResult = (scanResult: string) => {
		console.log(`App.tsx ${scanResult}`);
		setCurrentViewKey(CUSTOMER_MENU);
	};

	let currentView = <></>;
	if (platform == CUSTOMER_KEY) {
		switch (currentViewKey) {
			case CUSTOMER_SCANNER:
				currentView = <ScannerView scannerResult={handleScannerResult}/>;
				break;
			case CUSTOMER_MENU:
				currentView = <MenuView goToItem={handleToItem} goToCart={handleToCart}/>;
				break;	
			case CUSTOMER_ITEM_DETAILS:
				currentView = <ItemView id={itemId} handleBack={handleMenuBack}/>;
				break;	
			case CUSTOMER_CART:
				currentView = <CartView handleBack={handleMenuBack}/>;
				break;
			case LANDING_PAGE_KEY:
				currentView = <LandingPage />;
				break;
			default:
				console.log("Error Customer key does not exist");
				break;
		}
	}

	return (
		<Container h={'100%'} w={'100vw'} p={0} bg={'blackAlpha.50'} maxWidth={'none'}>
			{currentView}
		</Container>
	);
}

export default App
