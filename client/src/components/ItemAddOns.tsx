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
import { IAddOn } from '../utils/serverEntities';


interface ItemAddOnsProps {
    itemOptions: {
        category: string;
        AddOns: IAddOn[]
    };
}

export const ItemAddOns: React.FC<ItemAddOnsProps> = (props: ItemAddOnsProps) => {
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
                {itemOptions.AddOns.map((addOn) => (
                    <Tr key={addOn._id}>
                        <Td>
                            <Checkbox />
                        </Td>
                        <Td alignItems={'flex-start'}  alignContent={'start'} alignSelf={'left'}>
                            {addOn.Name}
                        </Td>
                        <Td isNumeric>
                            <Text as={'b'} fontSize='md'>+ ${addOn.Price}</Text>
                        </Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}