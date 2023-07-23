// import { useState } from 'react'
import { Container } from '@chakra-ui/react';

// Customer Views
// import ScannerView from './views/customer/scanner-view';
// import ItemView from './views/customer/item-view';
// import MenuView from './views/customer/menu-view';
// import CartView from './views/customer/cart-view';

// Restaurant Views

// Landing Page View
import LandingPage from './views/splashscreen/landingpage-view';

const CUSTOMER_KEY = 'CUSTOMER';
// const RESTAURANT_KEY = 'RESTAURANT';
const LANDING_PAGE_KEY = 'LANDING_PAGE';

// const CUSTOMER_SCANNER = 'CUSTOMER_SCANNER'; 
// const CUSTOMER_MENU = 'CUSTOMER_MENU';
// const CUSTOMER_ITEM_DETAILS = 'CUSTOMER_ITEM_DETAILS';
// const CUSTOMER_CART = 'CUSTOMER_CART';

function App() {
	const platform = CUSTOMER_KEY;
	const currentViewKey = LANDING_PAGE_KEY;
	let currentView = <></>;
	if (platform == CUSTOMER_KEY) {
		switch (currentViewKey) {
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
