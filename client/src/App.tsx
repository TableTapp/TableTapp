import React, { useState } from 'react'
import { Container } from '@chakra-ui/react';

// Customer Views
import ScannerView from './views/customer/scanner-view';
import ItemView from './views/customer/item-view';
import MenuView from './views/customer/menu-view';
import CartView from './views/customer/cart-view';
import LoginView from './views/customer/login-view';
import StartedView from './views/customer/started-view';
import AccountView from './views/customer/createaccount-view';
import ConfirmView from './views/customer/confirm-view';

// Restaurant Views

const CUSTOMER_KEY = 'CUSTOMER';
const RESTAURANT_KEY = 'RESTAURANT';

const CUSTOMER_SCANNER = 'CUSTOMER_SCANNER'; 
const CUSTOMER_MENU = 'CUSTOMER_MENU';
const CUSTOMER_ITEM_DETAILS = 'CUSTOMER_ITEM_DETAILS';
const CUSTOMER_CART = 'CUSTOMER_CART';
const CUSTOMER_LOGIN = 'CUSTOMER_LOGIN';
const CUSTOMER_GETSTARTED = 'CUSTOMER_GETSTARTED';
const CUSTOMER_CREATEACCOUNT = 'CUSTOMER_CREATEACCOUNT';
const CUSTOMER_CONFIRMEMAIL = 'CUSTOMER_CONFIRMEMAIL';

function App() {
	const [platform, setPlatfrom] = useState<string>(CUSTOMER_KEY);
	const [currentViewKey, setCurrentViewKey] = useState<string>(CUSTOMER_SCANNER);
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
		setCurrentViewKey(CUSTOMER_GETSTARTED);
	};

	const handleToLogin = () => {
		setCurrentViewKey(CUSTOMER_LOGIN)
	};

	const handleGetStarted = () => {
		setCurrentViewKey(CUSTOMER_CREATEACCOUNT)
	};

	const handleCreateAccount = () => {
		setCurrentViewKey(CUSTOMER_CONFIRMEMAIL)
	}

	// const handleToConfirmEmail = () => {
	// 	setCurrentViewKey(CUSTOMER_CONFIRMEMAIL)
	// }



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
			case CUSTOMER_LOGIN:
				currentView = <LoginView goToMenu={handleMenuBack}/>
				break;
			case CUSTOMER_GETSTARTED:
				currentView = <StartedView goToLogin={handleToLogin} goToGetStarted={handleGetStarted}/>
				break;
			case CUSTOMER_CREATEACCOUNT:
				currentView = <AccountView goToCreateAccount={handleCreateAccount} goBack={handleGetStarted}/>
				break;
			case CUSTOMER_CONFIRMEMAIL:
				currentView = <ConfirmView goToLogin={handleToLogin} />
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
