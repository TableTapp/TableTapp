import React, { useEffect, useState } from 'react';
import {
    Box,
    Center,
    Flex,
    Heading,
    IconButton,
    Spacer,
    Text,
    VStack
} from '@chakra-ui/react';
import { ItemDisplay } from './ItemDisplay';
import { IItem, IOrderItemBase } from '../utils/serverEntities';
import { DeleteIcon } from '@chakra-ui/icons';

interface ItemProps {
    ItemOptions?: IItem,
    OderItemOptions?: IOrderItemBase,
    Order: boolean;
}

export const ItemCard: React.FC<ItemProps> = (props: ItemProps) => {
    const { ItemOptions, OderItemOptions, Order } = props;

    const orderList = Order && OderItemOptions ? OderItemOptions : null; 
    const itemList = !Order && ItemOptions ? ItemOptions : null; 

    const [orderItem, setOrderItem] = useState<IItem>({} as IItem);

    useEffect(() => {
        setOrderItem({Id:'98098', Name: 'Item 1', Category: 'Cat12', Description: 'Item 1 description', Price: 5.95});
    }, []);

   
    let layout;
    if (!Order) {
        layout = (
            <Flex width={'87vw'} >
                <VStack align='left' spacing={2}>
                    <Heading size='md'>{itemList?.Name}</Heading>
                    <Text fontSize='sm'>{itemList?.Description}</Text>
                    <Text as='b' fontSize='sm'>${itemList?.Price}</Text>
                </VStack>
                <Spacer />
                <ItemDisplay add />
            </Flex>
        );
    } else {
        layout = (
            <Flex width={'87vw'} gap={3} >
                <ItemDisplay quantity={orderList?.Quantity} />
                <Center p={4}>
                    <VStack align='left' spacing={2}>
                        <Heading size='md'>{orderItem?.Name}</Heading>
                        <Text as='b' fontSize='sm'>${orderItem?.Price}</Text>
                    </VStack>
                </Center>
                <Spacer />
                <Center>
                    <IconButton 
                        colorScheme='gray'
                        aria-label='item-add-btn'
                        size='sm'
                        zIndex={3}
                        borderRadius='full'
                        icon={<DeleteIcon />}
                    />
                </Center>
            </Flex>
        );
    }

    return (
        <Box bg='white'>
            {layout}
        </Box>
    );
}