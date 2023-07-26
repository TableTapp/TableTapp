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

interface IItem {
  Id: string;
  Name: string;
  Description: string;
  Price: number;
  Quantity: number;
  Category: string;
}

interface AddItemProps {
  onAddItem: (newItem: IItem) => void;
  onClose: () => void;
}

const AddItem: React.FC<AddItemProps> = ({ onAddItem, onClose }) => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState<number>(0);
  const [Category, setCategory] = useState('');

  const handleAddItem = () => {
    const newItem: IItem = {
      Id:"",
      Name,
      Description,
      Price,
      Quantity: 0,
      Category,
    };
    onAddItem(newItem);
    onClose();
  };

  return (
    <Box p={4}>
      <Heading as="h3" size="md" mb={4}>
        Add IItem
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
          <Input value={Price.toString()} onChange={(e) => setPrice(Number(e.target.value))} type='number'/>
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select value={Category} onChange={(e) => setCategory(e.target.value)}>
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
