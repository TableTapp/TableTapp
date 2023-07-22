
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
    IItemPopulated,
    ICartPopulated
} from '../../utils/serverEntities';
import _ from 'lodash';
import api from '../../services/api';

interface MenuProps {
    menuId: string;
    tableId: string;
    cartId: string;
    goToCart: () => void;
    goToItem: (ItemId: string, cart: ICartPopulated) => void;
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
        const table = await api.getTable(tableId);
        setTableDetails(table);
    }, [tableId]);

    const getCart = useCallback(async () => {
        const cart = await api.getCart(cartId);
        setCart(cart);
    }, [cartId]);

    const getMenuItems = useCallback(async () => {
        const menuData = await api.getMenu(menuId);
        const items: IItemPopulated[] = [];
        try {
            menuData.result.Items.map(async (itemId: string) => {
                const item = await api.getItem(itemId, true) as IItemPopulated;
                items.push(item);
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