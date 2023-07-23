import React from 'react';
import {
    Container,
    Flex,
    Heading,
    IconButton,
    Spacer,
    Text,
    VStack
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface ITableBase {
	Customers: string[],
	Status: string
}

interface IHeaderOptions {
    title: string;
    subtitle: string;
    tableDetails?: ITableBase;
    onCartClose?: () => void;
}
interface HeaderProps {
    headerOptions: IHeaderOptions;
    menu?: boolean;
    item?: boolean;
    cart?: boolean;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {menu, cart, headerOptions} = props;
    
    const numberOfOrders = menu && headerOptions.tableDetails ? headerOptions.tableDetails.Customers.length : ''; 

	return (
        <Container w='100vw' color='gray.700' bg='white' padding={6} background='white'>
            <Flex w='88vw'>
                <VStack alignItems={'left'} textAlign={'left'} gap={0.5}>
                    <Heading>{headerOptions.title}</Heading>
                    <Text>{headerOptions.subtitle}</Text>
                </VStack>
                <Spacer />
                {
                    (menu && <Heading>1/{numberOfOrders}</Heading>) ||
                    (cart && <IconButton variant='ghost' aria-label='close-cart' icon={<CloseIcon/>} onClick={headerOptions.onCartClose}></IconButton>)
                }
            </Flex>
        </Container>
	);
};

export default Header;