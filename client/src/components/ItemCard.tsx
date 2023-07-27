import React, { useCallback, useEffect, useState } from 'react';
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
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';

import { ICart, ICartPopulated, IItemPopulated, IOrderItemPopulated } from '../utils/serverEntities';

interface ItemCardProps {
    ItemOptions?: IItemPopulated;
    OrderItemOptions?: IOrderItemPopulated;
    Cart?: ICartPopulated;
    Order: boolean;
}

export const ItemCard: React.FC<ItemCardProps> = (props: ItemCardProps) => {
    const { 
        ItemOptions,
        OrderItemOptions,
        Order, 
        Cart
    } = props;

    const [cart, setCart] = useState<ICartPopulated>(Cart || {
        OrderItems: [],
        TotalPrice: 0,
        _id: ''
    });

    const [itemDetails, setItemDetails] = useState<IItemPopulated>({ 
        _id: '', 
        Price: 0, 
        Name: '', 
        Category: { Name: '' }, 
        Description: ''
    }); 

    const [orderItemDetails, setOrderItemDetails] = useState<IOrderItemPopulated>(OrderItemOptions || {
        _id: '',
        ItemId: { 
            _id: '', 
            Name: '', 
            Price: 0, 
            Category: '', 
            Description: ''
        },
        Quantity: 0,
        AdditionalRequests: ''
    });

    const deleteCartItem = useCallback(async () => {
        setCart(Order && Cart ? Cart : cart);
        const updatedOrderItems: string[] = cart.OrderItems
            .filter((orderItem) => orderItem._id !== orderItemDetails._id)
            .map((orderItem) => orderItem._id) as string[];
        const payload: ICart = {
            OrderItems: updatedOrderItems,
            TotalPrice: cart.TotalPrice - (orderItemDetails.ItemId.Price * orderItemDetails.Quantity)
        }
        await axios.patch(`http://127.0.0.1:9090/cart/${cart._id}`, payload);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    useEffect(() => {
        setItemDetails(ItemOptions ? ItemOptions : itemDetails);
        setOrderItemDetails(OrderItemOptions ? OrderItemOptions : orderItemDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ItemOptions]);

    let layout;
    if (!Order) {
        layout = (
            <Flex width={'87vw'} >
                <VStack align='left' spacing={2}>
                    <Heading size='md'>{itemDetails?.Name}</Heading>
                    <Text fontSize='sm' isTruncated maxWidth={200}>{itemDetails?.Description}</Text>
                    <Text as='b' fontSize='sm'>${itemDetails?.Price}</Text>
                </VStack>
                <Spacer />
                <ItemDisplay add />
            </Flex>
        );
    } else {
        layout = (
            <Flex width={'87vw'} gap={3} >
                <ItemDisplay quantity={orderItemDetails?.Quantity} />
                <Center p={4}>
                    <VStack align='left' spacing={2}>
                        <Heading size='md'>{orderItemDetails.ItemId?.Name}</Heading>
                        <Text as='b' fontSize='sm'>${orderItemDetails.ItemId?.Price}</Text>
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
                        onClick={() => deleteCartItem()}
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