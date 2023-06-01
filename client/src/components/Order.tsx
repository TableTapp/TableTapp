import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Tag } from '@chakra-ui/react';

interface OrderProps {
    id: string;
}

interface IOrderDetails {
    result: {
        TableNumber: number;
        Item: string;
        Status: string;    
    }
}

export const OrderComponent: React.FC<OrderProps> = (props: OrderProps) => {
    const [tableNumber, setTableNumber] = useState<number>();
    const [item, setItem] = useState<string>();
    const [status, setStatus] = useState<string>("Requested");
    
    const colorMapping = {
        Requested: "yellow",
        Approved: "green",
        InProgress: "orange",
        Delivered: "twitter"
    };

    useEffect(() => {
        async function getOrderDetails() {
            if(props.id) {
                const response = await axios.get<IOrderDetails>(
					`http://127.0.0.1:9090/order/${props.id}`
				);
                const data = response.data.result;
                setTableNumber(data.TableNumber);
                setItem(data.Item);
                setStatus(data.Status);
            }
        }
        getOrderDetails();
    });

    return (
        <>
            <Card maxW='sm'>
                <CardHeader>
                    <HStack spacing={10}>
                        <Heading size="lg">
                            Order 
                        </Heading>
                        <Tag colorScheme={colorMapping[status]} borderRadius='full'>{status}</Tag>
                    </HStack>
                </CardHeader>
                <CardBody alignSelf="center">
                    {item}
                </CardBody>
                <CardFooter>
                    <Button colorScheme='teal' size="sm">Table {tableNumber}</Button>
                </CardFooter>
            </Card>
        </>
    );
}