import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const NewItem = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', image: '' });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    onAdd(newItem);
    setNewItem({ name: '', description: '', price: '', image: '' });
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>+ Add Item</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={newItem.name} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={newItem.description} onChange={handleChange} />
              </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input name="price" value={newItem.price} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input name="image" value={newItem.image} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewItem;
           
