import React, { useState } from 'react';
import { IconButton, Box, Flex, Image, Img, ButtonGroup, Text, Button, Circle, Center, AbsoluteCenter } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'

interface ItemDisplayProps {
    add?: boolean;
    quantity?: number;
}

export const ItemDisplay: React.FC<ItemDisplayProps> = (props: ItemDisplayProps) => {
    const { add, quantity } = props;
    const [itemQuantity, setItemQuantity] = useState<number>(quantity || 0);

    return (
        <Flex>
            <Center marginStart={5}>
                {itemQuantity >= 0 && 
                    <Circle 
                        position={'absolute'}
                        zIndex={3}
                        bg='white'
                        color={"black"}
                        borderRadius='full'
                        aria-label='item-quantity-btn'
                        boxShadow='lg'
                        size='34px'
                    >
                        <Text as='b'>x{itemQuantity}</Text>
                    </Circle>
                }
            </Center>
            <Img 
                src="https://via.placeholder.com/80"
                borderRadius='md'
                boxSize='80px'
            />
            <Center marginStart={-3.5}>
                {add && 
                    <IconButton
                        bg='white'
                        color={"black"}
                        aria-label='item-add-btn'
                        size='sm'
                        zIndex={3}
                        boxShadow='lg'
                        borderRadius='full'
                        icon={<AddIcon />}
                    />
                }
            </Center>
        </Flex>        
    );
}
