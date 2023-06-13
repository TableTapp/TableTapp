import React, { useEffect, useState } from 'react';
import {
    Table,
    TableContainer,
    Thead,
    Tbody,
    Text,
    Th,
    Tr,
    Td,
    Checkbox
} from '@chakra-ui/react';


interface ItemOptionsProps {
    itemOptions: {
        category: string;
        items: {Option: string, Id: string, Price: number}[]
    };
}

export const ItemOptions: React.FC<ItemOptionsProps> = (props: ItemOptionsProps) => {
    const { itemOptions } = props;
    return (
        <TableContainer bg={'white'} w={'100%'}>
            <Table variant='simple' p={0}>
                <Thead>
                    <Tr>
                        <Th>
                            {itemOptions.category}
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                {itemOptions.items.map((item) => (
                    <Tr key={item.Id}>
                        <Td>
                            <Checkbox />
                        </Td>
                        <Td alignItems={'flex-start'}  alignContent={'start'} alignSelf={'left'}>
                            {item.Option}
                        </Td>
                        <Td isNumeric>
                            <Text as={'b'} fontSize='md'>+ ${item.Price}</Text>
                        </Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}