/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import { Box, SimpleGrid, Text, chakra, Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';
import Food from './Food_Pics/food.jpg';
import EditItem from './EditItem';
import AddItem from './AddItem';

interface Item {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const ItemList: React.FC = () => {
  const items: Item[] = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of Item 1',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 2,
      name: 'Item 2',
      description: 'Description of Item 2',
      price: '$15.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 3,
      name: 'Item 3',
      description: 'Description of Item 3',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 4,
      name: 'Item 4',
      description: 'Description of Item 4',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 5,
      name: 'Item 5',
      description: 'Description of Item 5',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 6,
      name: 'Item 6',
      description: 'Description of Item 6',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 7,
      name: 'Item 7',
      description: 'Description of Item 7',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 8,
      name: 'Item 8',
      description: 'Description of Item 8',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 9,
      name: 'Item 9',
      description: 'Description of Item 9',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 10,
      name: 'Item 10',
      description: 'Description of Item 10',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
  {
      id: 11,
      name: 'Item 11',
      description: 'Description of Item 11',
      price: '$10.99',
      image: Food,
      category: 'drinks',
  },
    // Item data here
  ];

  const [itemsList, setItemsList] = useState<Item[]>(items);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);
  


  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleSaveChanges = (updatedItem: Item) => {
    const updatedItems = itemsList.map((item) =>
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    );

    setItemsList(updatedItems);
    handleCloseModal();
  };

  const handleDeleteItem = (itemId: number) => {
    const updatedItems = itemsList.filter((item) => item.id !== itemId);
  
    setItemsList(updatedItems);
    handleCloseModal();
  };

  const handleOpenAddItemModal = () => {
    setAddItemModalOpen(true);
  };

  const handleCloseAddItemModal = () => {
    setAddItemModalOpen(false);
  };

  const handleAddItem = (newItem: Item) => {
    const updatedItemsList = [...itemsList, newItem];
    setItemsList(updatedItemsList);
  };

  return (
    <Box p={4} position="absolute" top="47%" left="23%" sx={{ userSelect: 'none' }}>
      <Box height="320px" overflowY="scroll">
        <SimpleGrid columns={4} spacing={4}>
          {itemsList.map((item) => (
            <Box
              key={item.id}
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
                  {item.name}
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
                  {item.description.length > 11 ? `${item.description.slice(0, 11)}...` : item.description}
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
                  {item.price}
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
