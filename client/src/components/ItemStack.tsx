import { Table, TableContainer, Tbody, Td, Thead, Tr, Th, Tfoot, Button } from '@chakra-ui/react'
import { ItemCard } from './ItemCard';
import React, { useEffect } from 'react';
import { IItem, IOrderItemBase } from '../utils/serverEntities';
import { AddIcon } from '@chakra-ui/icons';

interface ItemStackProps {
    stackHeader: string;
    items?: IItem[]; 
    orderItems?: IOrderItemBase[];
    order: boolean;
    rowClick: (id: string) => void;
}

export const ItemStack: React.FC<ItemStackProps> = (props: ItemStackProps) => {
    const { stackHeader, items, orderItems, order, rowClick } = props;

    const handleRowClick = (id: string) => {
        console.log('click', id)
        rowClick(id);
    };
    useEffect(() => {
        // load items from menu
    }, []);

    let listItems;

    if (!order && items) {
        items?.map((item) => {
            listItems = (      
            <Tr key={item.Id} onClick={() => handleRowClick(item.Id)}>
                <Td>
                    <ItemCard 
                        ItemOptions={{
                            Id: item.Id,
                            Name:item.Name,
                            Description:item.Description,
                            Category:item.Category,
                            Price: item.Price
                        }}
                        Order={false}
                    />
                </Td>
            </Tr>
            );
        })
    } else if (order && orderItems) {
        orderItems?.map((item) => {
            listItems = (
                <Tr key={item.ItemId} onClick={() => handleRowClick(item.ItemId)}>
                    <Td>
                        <ItemCard 
                            OderItemOptions={{
                                ItemId: item.ItemId,
                                Quantity: item.Quantity
                            }}
                            Order
                        />
                    </Td>
                </Tr>
            );
        })
    }
    
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
                        <Button leftIcon={<AddIcon />} size={'sm'} m={4}>Add Item</Button>
                    </Tr>
                </Tfoot>}
            </Table>
        </TableContainer>
    );
}