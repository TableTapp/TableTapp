import React, { useState } from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Select, Button, Spacer, chakra } from '@chakra-ui/react';

interface Item {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface EditItemProps {
  item: Item;
  onSaveChanges: (updatedItem: Item) => void;
  onDelete: (itemId: number) => void; // Added onDelete prop
  onClose: () => void;
}

const EditItem: React.FC<EditItemProps> = ({ item, onSaveChanges, onDelete, onClose }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);

  const handleSaveChanges = () => {
    const updatedItem: Item = {
      ...item,
      name,
      description,
      price,
      category,
    };
    onSaveChanges(updatedItem);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <Box p={4}>
      <Heading as="h3" size="md" mb={4}>
        Edit Item
      </Heading>
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="specials">Specials</option>
            <option value="drinks">Drinks</option>
            <option value="appetizers">Appetizers</option>
            <option value="entrees">Entrees</option>
            <option value="desserts">Desserts</option>
          </Select>
        </FormControl>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            color="black"
            onClick={onClose}
            mr={2}
            _hover={{ bg: 'gray.200' }}
            _focus={{ boxShadow: 'none' }}
            _active={{ bg: 'gray.300' }}
            borderRadius="md"
            width="80px"
            height="40px"
          >
            Cancel
          </Button>
          <Spacer />
          <chakra.button
            color="white"
            bg="#F56565"
            onClick={handleSaveChanges}
            _hover={{ bg: '#F56565' }}
            _focus={{ boxShadow: 'none' }}
            _active={{ bg: '#F56565' }}
            borderRadius="md"
            width="80px"
            height="40px"
          >
            Save
          </chakra.button>
          <chakra.button
            color="black"
            bg="gray.100"
            onClick={handleDelete}
            mb={5}
            mt={5}
            ml={170}
            _hover={{ bg: 'gray.200' }}
            _focus={{ boxShadow: 'none' }}
            _active={{ bg: 'gray.300' }}
            borderRadius="md"
            width="80px"
            height="40px"
          >
            Delete
          </chakra.button>
        </Box>
      </VStack>
    </Box>
  );
};

export default EditItem;
