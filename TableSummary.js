import React from 'react';
import { Box, Heading, VStack, HStack, Text, Button } from "@chakra-ui/react";

const TableSummary = ({ table, onAccept, onDecline }) => {
  return (
    <Box bg="gray.50" p={4} w="100%" h="100%" position="fixed" left={0} top={0} zIndex={10}>
      <VStack align="start">
        <HStack>
          <Heading size="md">Table {table.number}</Heading>
          <Text>({table.status})</Text>
        </HStack>

        <VStack align="start">
          {table.order.map((item, index) => (
            <Text key={index}>{item.quantity}x {item.name} - ${item.price}</Text>
          ))}
        </VStack>

        <VStack align="start">
          <Text>Subtotal: ${table.subtotal}</Text>
          <Text>Taxes: ${table.taxes}</Text>
          <Text>Total: ${table.total}</Text>
        </VStack>

        <HStack>
          <Button colorScheme="green" onClick={onAccept}>Accept</Button>
          <Button colorScheme="red" onClick={onDecline}>Decline</Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default TableSummary;
