import React, { useEffect, useState } from 'react';
import { IMenuResponse, ICartResponse, ITableResponse, IMenuBase, ITableBase, ICart } from '../../utils/serverEntities';
import axios from 'axios';

// Components
import { Button, Center, Flex, Spacer, VStack } from '@chakra-ui/react';
import Header from '../../components/Header';
import { ItemStack } from '../../components/ItemStack';

interface MenuProps {
    menuId: string;
    tableId: string;
    cartId: string;
    goToCart: () => void;
    goToItem: (id: string) => void
}

const MenuView: React.FC<MenuProps> = (props: MenuProps) => {
    const { menuId, tableId, cartId, goToCart } = props;
    const [menu, setMenu] = useState<IMenuBase>({
        Category: '', 
        Items: [
            {Id:'98098', Name: 'Item 1', Category: 'Cat12', Description: 'Item 1 description', Price: 5.95},
            {Id:'9898', Name: 'Item 2', Category: 'Cat12', Description: 'Item 2 description', Price: 3.25},
            {Id:'9809', Name: 'Item 3', Category: 'Cat12', Description: 'Item 3 description', Price: 10.24}
        ]
    });
    const [tableDetails, setTableDetails] = useState<ITableBase>({Customers: ['','',''], Status: 'RESERVED' });
    const [cart, setCart] = useState<ICart>({OrderItems: [], TotalPrice: 0});

    const TABLE_NUMBER = 1;

    useEffect(() => {
        async function getMenuItems() {
            const response = await axios.get<IMenuResponse>(`http://127.0.0.1:9090/item/${menuId}`);
            setMenu(response.data.results);
        }
        async function getTableDetails() {
            const response = await axios.get<ITableResponse>(`http://127.0.0.1:9090/table/${tableId}`);
            setTableDetails(response.data.results);
        }
        async function getCartDetails() {
            const response = await axios.get<ICartResponse>(`http://127.0.0.1:9090/cart/${cartId}`);
            setCart(response.data.results);
        }
        getMenuItems();
        getTableDetails();
        getCartDetails();
    }, [menuId, tableId, cartId]);

    const handleViewCart = () => {
        goToCart();
    };

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
					onClick={handleViewCart}
				>
					<Flex width='80vw'>Cart <Spacer />${cart.TotalPrice}</Flex>
				</Button>
			</Center>
			<VStack gap={2}>
				<Header menu headerOptions={{ title: 'Menu', subtitle: `Table ${TABLE_NUMBER}`, tableDetails: tableDetails}}/>
                <ItemStack rowClick={props.goToItem} order={false} stackHeader='Cat 12' items={menu.Items}/> 
                <ItemStack rowClick={props.goToItem} order={false} stackHeader='Cat 10' items={menu.Items}/>               
              
			</VStack>
        </>
    );
};

export default MenuView;