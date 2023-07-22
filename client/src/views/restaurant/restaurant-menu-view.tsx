/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { Flex, Box, VStack, Text, Button } from "@chakra-ui/react";
import TableScreen from './TableScreen';
import MenuScreen from './MenuScreen';
import OrderScreen from './OrderScreen';
import CustomerScreen from './CustomerScreen';

const RestaurantMenuView: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('menu');

  const handleScreenChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'tables':
        return <TableScreen/>; // Placeholder for Tables screen
      case 'menu':
        return <MenuScreen/>;
      case 'orders':
        return <OrderScreen/>; // Placeholder for Orders screen
      case 'customers':
        return <CustomerScreen/>; // Placeholder for Customers screen
      default:
        return null;
    }
  };

  return (
	<Box bg="gray.100" height="100vh" width="100vw" p={4}>
    <Flex height="100vh" width="100vw">
      {/* Left-hand panel */}
	<Box
		flex="0 0 20%"
        bg="#FFF"
        p={5}
        boxShadow="xl"
        zIndex="docked"
        position="sticky"
        top={0}
		borderRadius="10px"
		height="calc(100vh - 3rem)" // Adjust the height to fit within the screen
		
	>
	<VStack width="30%" bg="#FFF" p={5} spacing={5} alignItems={"flex-start"} marginLeft="-8%">
		<Text
			fontSize="32px"
			fontWeight={550}
			color="#2D3748"
			fontFamily="Inter"
			fontStyle="normal"
			lineHeight="120%"
			textAlign="left"
			mb={2} // Add margin-bottom to create spacing
			sx={{ userSelect: 'none' }}
		>
			TableTapp
		</Text>
		<Button
			fontSize="28px"
			fontFamily="Inter"
			fontStyle="normal"
			fontWeight={450}
			mb={2} // Add margin-bottom to create spacing
			
			color={selectedTab === 'tables' ? '#FFF' : '#2D3748'}
			bg={selectedTab === 'tables' ? '#F56565' : '#FFF'}
			borderRadius="3px"
			p={2}
			onClick={() => handleScreenChange('tables')}
			_hover={{ bg: '#F56565', color: '#FFF'}}
			
		>
			Tables
		</Button>
		<Button
			fontSize="28px"
			fontFamily="Inter"
			fontStyle="normal"
			fontWeight={450}
			textAlign="left"
			mb={2} // Add margin-bottom to create spacing
			px={6} // Add horizontal padding
  			py={2} // Add vertical padding
			color={selectedTab === 'menu' ? '#FFF' : '#2D3748'}
			bg={selectedTab === 'menu' ? '#F56565' : '#FFF'}
			borderRadius="3px"
			p={2}
			onClick={() => handleScreenChange('menu')}
			_hover={{ bg: '#F56565', color: '#FFF' }}
		>
			Menu
		</Button>
		<Button
			fontSize="28px"
			fontFamily="Inter"
			fontStyle="normal"
			fontWeight={450}
			textAlign="left"
			mb={2} // Add margin-bottom to create spacing
			color={selectedTab === 'orders' ? '#FFF' : '#2D3748'}
			bg={selectedTab === 'orders' ? '#F56565' : '#FFF'}
			borderRadius="3px"
			p={2}
			onClick={() => handleScreenChange('orders')}
			_hover={{ bg: '#F56565', color: '#FFF' }}
		>
			Orders
		</Button>
		<Button
			fontSize="28px"
			fontFamily="Inter"
			fontStyle="normal"
			fontWeight={450}
			textAlign="left"
			mt={2} // Add margin-bottom to create spacing
			color={selectedTab === 'customers' ? '#FFF' : '#2D3748'}
			bg={selectedTab === 'customers' ? '#F56565' : '#FFF'}
			borderRadius="3px"
			p={2}
			onClick={() => handleScreenChange('customers')}
			_hover={{ bg: '#F56565', color: '#FFF' }}
		>
			Customers
		</Button>
	</VStack>
	<Box
		sx={{ userSelect: 'none' }}
		position="absolute"
		bottom="1rem"
		left="50%"
		transform="translateX(-50%)"
		textAlign="center"
		fontWeight="bold"
		fontSize="15px"
		>
		© 2023 TableTapp
	</Box>
	</Box>

	  <Box flex="1" p={5} ml="5%">
        {renderContent()}
      </Box>
    </Flex>
	</Box>
  );
}

export default RestaurantMenuView;