
import React, { useCallback, useEffect, useState } from 'react';


// UI Components
import { 
    Button, 
    Center, 
    Flex, 
    Slide, 
    Spacer, 
    VStack 
} from '@chakra-ui/react';
import Header from '../../components/Header';
import { ItemStack } from '../../components/ItemStack';

// Utils
import { 
    ITableBase, 
    ICart, 
    IItemPopulated,
    ICartPopulated
} from '../../utils/serverEntities';
import axios from 'axios';
import _ from 'lodash';

interface MenuProps {
    menuId: string;
    tableId: string;
    cartId: string;
    goToCart: () => void;
    goToItem: (ItemId: string, cart: ICart) => void;
}

enum TableStatus {
    Reserved = "RESERVED",
    Occupied = "OCCUPIED",
    Open = "OPEN",
}

const MenuView: React.FC<MenuProps> = (props: MenuProps) => {
    const { 
        menuId, 
        tableId, 
        cartId, 
        goToCart, 
        goToItem 
    } = props;

    const [menu, setMenu] = useState<IItemPopulated[]>([]);
    const [groupedMenuItems, setGroupedMenuItems] = useState<IItemPopulated[][]>([]);
    const [tableDetails, setTableDetails] = useState<ITableBase>({
        Customers: [], 
        Status: TableStatus.Open, 
        Seats: 0, 
        TableNumber: 0 
    });
    const [cart, setCart] = useState<ICartPopulated>({OrderItems: [], TotalPrice: 0});

    const getTable = useCallback(async () => {
        const tableResponse = await axios.get(`http:///127.0.0.1:9090/table/${tableId}`);
        const table: ITableBase = {
            Customers: tableResponse.data.result.Customers,
            Status: tableResponse.data.result.Status,
            Seats: tableResponse.data.result.Seats,
            TableNumber: tableResponse.data.result.TableNumber
        };
        setTableDetails(table);
    }, [tableId]);

    const getCart = useCallback(async () => {
        const cartResponse = await axios.get(`http://127.0.0.1:9090/cart/${cartId}`);
        const cart: ICartPopulated = {
            _id: cartResponse.data.result._id,
            OrderItems: cartResponse.data.result.OrderItems,
            TotalPrice: cartResponse.data.result.TotalPrice
        };
        setCart(cart);
    }, [cartId]);

    const getMenuItems = useCallback(async () => {
        const menuResponse = await axios.get(`http://127.0.0.1:9090/menu/${menuId}`);
        const items: IItemPopulated[] = [];
        try {
            menuResponse.data.result.Items.map(async (itemId: string) => {
                const item = await axios.get(`http://127.0.0.1:9090/item/${itemId}`);
                const itemResponse: IItemPopulated = {
                    _id: item.data.result._id,
                    Name: item.data.result.Name,
                    Description: item.data.result.Description,
                    Price: item.data.result.Price,
                    Category: {
                        Name: item.data.result.Category.Name,
                        _id: item.data.result.Category._id
                    }
                };
                items.push(itemResponse);
            });
            setMenu(items);
        } finally {
            setMenu(items); 
        }
    }, [menuId]);

    const groupItems = useCallback(() => {
        const groupedItems = Object.values(menu.reduce((acc, item) => {
            acc[item.Category.Name] = acc[item.Category.Name] ?? [];
            acc[item.Category.Name].push(item);
            return acc;
        }, {} as {[key: string]: IItemPopulated[]}));

        setGroupedMenuItems(groupedItems);
    },[menu]);

    useEffect(() => {
        _.delay(getMenuItems, 200);
        getCart();
        getTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuId]);

    useEffect(() => {
        _.delay(groupItems, 250);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menu, groupItems]);

    const handleViewCart = () => {
        goToCart();
    };

    const itemClick = (itemId: string) => {
        goToItem(itemId, cart);
    };

    return (
        <>
            <Center>
				<Button 
					colorScheme='red' 
					size='lg' 
					position='fixed' 
					bottom={0} 
					marginBottom={4} 
					boxShadow='2xl' 
					zIndex={4} 
					onClick={handleViewCart}
				>
					<Flex 
                        width='80vw'
                    >
                        ({cart.OrderItems.length})Cart <Spacer />${cart.TotalPrice}
                    </Flex>
				</Button>
			</Center> 
			<VStack gap={2}>
				<Header 
                    menu 
                    headerOptions={{ 
                    title: 'Menu', 
                    subtitle: `Table ${tableDetails.TableNumber}`, 
                    tableDetails: tableDetails
                    }}
                />
                    {groupedMenuItems.map((group) => {
                        return (
                            // <Slide direction="top" in={true}>
                                <ItemStack
                                    addNewItem={()=>{return}} 
                                    rowClick={itemClick} 
                                    order={false} 
                                    stackHeader={group[0].Category.Name} 
                                    items={group}
                                />
                            // </Slide>
                        );
                    })
                    }
			</VStack>
        </>
    );
};

export default MenuView;