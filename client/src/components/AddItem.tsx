import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Spacer,
  chakra,
} from '@chakra-ui/react';
import axios from 'axios';
import { IItem } from '../utils/serverEntities';
import api from '../services/api';

interface AddItemProps {
  onAddItem: (newItem: IItem) => void;
  onClose: () => void;
  setMenu: React.Dispatch<React.SetStateAction<IItem[]>>; // Add this lin
}

const AddItem: React.FC<AddItemProps> = ({ onAddItem, onClose, setMenu }) => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState<number>(0);
  const [Category, setCategory] = useState('64a487eb9be7edb65c5c6bc8');

  const handleAddItem = async () => {
    const newItem: IItem = {
      Name: Name,
      Description: Description,
      Price:Price,
      Category:Category,
    };
    try {
      // Make an API request to create the new item on the backend
      console.log(newItem)
      const response = await api.postItem(newItem);
      const createdItem: IItem = response.result;

      // Update the menu state with the newly created item
      setMenu((prevMenu) => [...prevMenu, createdItem]);

      onClose(); // Close the modal after adding the item
    } catch (error) {
      console.log(error);
      // Handle any error that occurred during the API request
      // You can show an error message to the user if needed
    }
    onAddItem(newItem); // Call the onAddItem callback to add the new item to the list
    onClose(); // Close the modal after adding the item
  };

  return (
    <Box p={4}>
      <Heading as="h3" size="md" mb={4}>
        Add Item
      </Heading>
      <VStack spacing={4} align="start">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={Name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input value={Description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input value={Price.toString()} onChange={(e) => setPrice(Number(e.target.value))} type="number" />
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select value={Category} onChange={(e) => setCategory(e.target.value)}>
            <option value="64a487eb9be7edb65c5c6bc8">Category 3</option>
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
            mr={4}
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
            onClick={handleAddItem}
            _hover={{ bg: '#F56565' }}
            _focus={{ boxShadow: 'none' }}
            _active={{ bg: '#F56565' }}
            borderRadius="md"
            width="80px"
            height="40px"
          >
            Add
          </chakra.button>
        </Box>
      </VStack>
    </Box>
  );
};

export default AddItem;
