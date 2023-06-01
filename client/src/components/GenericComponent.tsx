import React, { useEffect, useState } from 'react';
import {
    AbsoluteCenter,
    HStack,
    Button,
    Text
} from '@chakra-ui/react';

interface GenericProps {
    name: string;
}

export const GenericComponent: React.FC<GenericProps> = (props: GenericProps) => {
    const [count, setCount] = useState(0);
    
    return (
        <AbsoluteCenter>
            <HStack>
                <Button colorScheme='blue' onClick={() => setCount(count+1)}>
                    Update count
                </Button>
                <Text fontSize='xl'>
                    {`${count} ${props.name}`} 
                </Text>
            </HStack>
        </AbsoluteCenter>
    );
}