import React, { useEffect, useState } from 'react';
import {
    Card,
    CardBody,
    Image,
    Heading,
    Text,
    Stack
} from '@chakra-ui/react';

interface GenericProps {
    Name: string;
    Title: string;
}

export const PersonCard: React.FC<GenericProps> = (props: GenericProps) => {
    const { Name, Title } = props;
    return (
        <Card >
            <Image borderRadius={5}  height={'300'} aria-label='logo' objectFit='cover' src={'https://via.placeholder.com/300'} alt='Graphic'/>
            <CardBody>
                <Stack direction={'column'} gap={1}>
                    <Heading size='md'>{Name}</Heading>
                    <Text size='sm'>{Title}</Text>
                </Stack>
            </CardBody>
        </Card>
        
    );
}