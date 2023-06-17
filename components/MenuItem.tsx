import React, { useState } from 'react';
import { Button, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const MenuItem = ({ item, onSave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({ ...item });

  const handleChange = (e) => {
    setUpdatedItem({ ...updatedItem, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    onSave(updatedItem);
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={updatedItem.name} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={updatedItem.description} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input name="price" value={updatedItem.price} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuItem;
