import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Flex,
    HStack,
    Heading,
    IconButton,
    Spacer,
    Text,
    VStack
} from '@chakra-ui/react';
import _ from 'lodash';
import { CloseIcon } from '@chakra-ui/icons';
import { Search } from './Search';

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

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection }

        default:
            throw new Error()
    }
}
const initialState = {
    loading: false,
    results: [],
    value: '',
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const {menu, item, cart, headerOptions} = props;
    
    const numberOfOrders = menu && headerOptions.tableDetails ? headerOptions.tableDetails.Customers.length : ''; 
    
    //search state
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const onSearchValueChange = (val: string) => setSearchValue(val);
    const [searchResults, setSearchResults] = useState<object>({});
    const [state, dispatch] = React.useReducer(reducer, initialState)



	useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
	}, []);

    const timeoutRef = React.useRef<number>();

    const handleSearchChange = React.useCallback((e: any, data: any) => {
        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })
    
        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY' })
                return
            }
        
            const re = new RegExp(_.escapeRegExp(data.value), 'i')
            const isMatch = (result: any) => re.test(result.title)
        
            dispatch({
                type: 'FINISH_SEARCH',
                results: _.filter(source, isMatch),
            })
        }, 300)
    }, []);

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
                    
                {/* <Search 
                    placeholder='Search menu...'
                    value={ searchValue }
                    isLoading={ isLoading }
                    input={ { iconPosition: 'left' } }
                    onSearchChange={ handleSearchChange }
                    onResultSelect={(e:any, data:any) =>
                        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                      }
                /> */}
            </Flex>
        </Container>
	);
};

export default Header;