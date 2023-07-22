/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useCallback, useEffect, useState } from 'react';
import { Box, SimpleGrid, Text, chakra, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import Food from './Food_Pics/food.jpg';
import EditItem from './EditItem';
import AddItem from './AddItem';
import axios from 'axios';

interface IItem {
  Id: string;
  Name: string;
  Description: string;
  Price: number;
  Quantity: number;
  Category: string;
}

interface ItemProps {
  menuId: string;
}

const ItemList: React.FC<ItemProps> = (props: ItemProps) => {
  const {
    menuId
  } = props;

  const [menu, setMenu] = useState<IItem[]>([]);

  const getMenuItems = useCallback(async () => {
    const menuResponse =  await axios.get(`http://127.0.0.1:9090/menu/${menuId}`)
    const items: IItem[] = [];
    try {
      menuResponse.data.result.Items.map(async (itemId: string) => {
        const item = await axios.get(`http://127.0.0.1:9090/item/${itemId}`)
        const itemResponse = {
          Id: item.data.result._id,
          Name: item.data.result.Name,
          Description: item.data.result.Description,
          Price: item.data.result.Price,
          Quantity: item.data.result.Quantity,
          Category: item.data.result.Category
        };
        items.push(itemResponse);
      });
      setMenu(items);
    } 
    catch (error){
      console.log(error)
    } finally {
        setMenu(items);
    }
  }, [menuId]);

  const createNewItem = useCallback( async(item:IItem) => {
    const payload = {
      Name: item.Name,
      Description: item.Description,
      Price: item.Price,
      Quantity: item.Quantity,
      Category: item.Category
    }
    try{
      console.log(item)
      const response = await axios.post(`http://127.0.0.1:9090/item/`,payload)
    }
    catch (error){
      console.log(error)
    }
  },[])

  useEffect(() => {
    getMenuItems()
  },[])

  const [itemsList, setItemsList] = useState<IItem[]>(menu);
  const [selectedItem, setSelectedItem] = useState<IItem | null>(null);
  const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);
  


  const handleItemClick = (item: IItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSaveChanges = (updatedItem: IItem) => {
    const updatedItems = itemsList.map((item) =>
      item.Id === updatedItem.Id ? { ...item, ...updatedItem } : item
    );

    setItemsList(updatedItems);
    handleCloseModal();
  };

  const handleDeleteItem = (itemId: string) => {
    const updatedItems = itemsList.filter((item) => item.Id !== itemId);
  
    setItemsList(updatedItems);
    handleCloseModal();
  };

  const handleOpenAddItemModal = () => {
    setAddItemModalOpen(true);
  };

  const handleCloseAddItemModal = () => {
    setAddItemModalOpen(false);
  };

  const handleAddItem = (newItem: IItem) => {
    createNewItem(newItem);
    getMenuItems();
  };

  return (
    <Box p={4} position="absolute" top="49%" left="23%" sx={{ userSelect: 'none' }}>
      <Box height="320px" overflowY="scroll" css={{ '&::-webkit-scrollbar': { display: 'none' } }}>
        <SimpleGrid columns={4} spacing={8}>
          {menu.map((item) => (
            <Box
              key={item.Id}
              as="div"
              borderWidth="1px"
              borderRadius="10px"
              overflow="hidden"
              bg="#FFF"
              width="180px"
              height="160px"
              _hover={{
                bg: '#F56565',
                color: '#FFF',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)',
              }}
              onClick={() => handleItemClick(item)}
            >
              <Box bg="#f6dec8" width="150px" height="80px" mx="auto" my="4" borderRadius="10px"/>
              <Box p={4}>
                <Text fontWeight="bold" fontSize="17px" mt={-6}>
                  {item.Name}
                </Text>
                <chakra.p
                  color="var(--gray-700, #2D3748)"
                  fontFamily="Inter"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight={500}
                  lineHeight="16px"
                  letterSpacing="0.6px"
                  mt={1}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  className="truncate"
                >
                  {item.Description.length > 11 ? `${item.Description.slice(0, 11)}...` : item.Description}
                </chakra.p>
                <Text
                  color="var(--gray-700, #2D3748)"
                  textAlign="right"
                  fontFamily="Inter"
                  fontSize="17px"
                  fontStyle="normal"
                  fontWeight={600}
                  lineHeight="20px"
                  mt={-5}
                >
                  {item.Price}
                </Text>
              </Box>
            </Box>
          ))}

          <Box
              borderWidth="1px"
              borderRadius="10px"
              overflow="hidden"
              bg="#FFF"
              width="180px"
              height="160px"
              _hover={{
                bg: '#F56565',
                color: '#FFF',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)',
              }}
              onClick={handleOpenAddItemModal}
            >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                fontSize="48px"
                color="#F56565"
                _hover={{ color: 'white' }}
              >
              +
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Modal isOpen={!!selectedItem} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent width="450px">
          <EditItem item={selectedItem!} onSaveChanges={handleSaveChanges} onDelete={handleDeleteItem} onClose={handleCloseModal} />
        </ModalContent>
      </Modal>
      <Modal isOpen={!!isAddItemModalOpen} onClose={handleCloseAddItemModal} size="xl">
        <ModalOverlay />
        <ModalContent width="450px">
          <AddItem onAddItem={handleAddItem} onClose={handleCloseAddItemModal} />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ItemList;
