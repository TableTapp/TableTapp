import React, {useEffect} from 'react';
import {
  Box,
} from '@chakra-ui/react';
import OrderQueues from '../../components/OrderQueue';
import Categories from '../../components/Categories';
import ItemList from '../../components/ItemList';

const MenuScreen: React.FC = () => {
  useEffect(() => {
    // Disable vertical scrolling on mount
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';

    // Enable vertical scrolling on unmount
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'auto';
    };
  }, []);


  return (
    <Box width="100%" height="100%" flexShrink={0} borderRadius="10px" background="#gray.100" p={5} >
        <OrderQueues />
        <Categories/>
        <ItemList/>
  </Box>
  );
};
export default MenuScreen;