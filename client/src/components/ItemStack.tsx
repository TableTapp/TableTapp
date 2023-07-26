import React from 'react';
import { 
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Thead, 
    Tr, 
    Th, 
    Tfoot, 
    Button 
} from '@chakra-ui/react'
import { ItemCard } from './ItemCard';
import { ICartPopulated, IItemPopulated, IOrderItemPopulated } from '../utils/serverEntities';
import { AddIcon } from '@chakra-ui/icons';

interface ItemStackProps {
    stackHeader: string;
    items?: IItemPopulated[];
    orderItems?: IOrderItemPopulated[];
    cart?: ICartPopulated;
    order: boolean;
    rowClick: (id: string) => void;
    addNewItem: () => void;
}


export const ItemStack: React.FC<ItemStackProps> = (props: ItemStackProps) => {
    const { 
        stackHeader, 
        items, 
        orderItems,
        order, 
        cart, 
        rowClick, 
        addNewItem 
    } = props;

    const handleRowClick = (id: string) => {
        console.log('clicked', id)
        rowClick(id);
    };

    const list = () => {
        if (!order && items) {
            return (items?.map((item) => (
                <Tr key={item._id} onClick={() => handleRowClick(item?._id as string)}>
                    <Td>
                        <ItemCard 
                            ItemOptions={{
                                _id: item._id,
                                Name: item.Name,
                                Description: item.Description,
                                Category: item.Category,
                                Price: item.Price
                            }}
                            Order={false}
                        />
                    </Td>
                </Tr>
            )));
        } else if (order && orderItems) {
            return (orderItems?.map((item) => (
                <Tr key={item._id}>
                    <Td>
                        <ItemCard 
                            Cart={cart}
                            OrderItemOptions={{
                                _id: item._id,
                                ItemId: item.ItemId,
                                Quantity: item.Quantity,
                                AdditionalRequests: item.AdditionalRequests
                            }}
                            Order
                        />
                    </Td>
                </Tr>
            )));
        }
    };

    const listItems = list();
  
    return (
        <TableContainer bg={'white'}>
            <Table variant='simple' p={0}>
                <Thead>
                    <Tr>
                        <Th>{stackHeader}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {listItems}
                </Tbody>
                {order && <Tfoot>
                    <Tr>
                        <Button 
                            leftIcon={<AddIcon />} 
                            size={'sm'} 
                            m={4}
                            onClick={addNewItem}
                        >
                            Add Item
                        </Button>
                    </Tr>
                </Tfoot>}
            </Table>
        </TableContainer>
    );
}