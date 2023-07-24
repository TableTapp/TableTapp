import React from 'react';
import { VStack, HStack, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Badge } from "@chakra-ui/react";

interface TableSummaryProps {
  order: Order;
  onClose: () => void;
}

interface Order {
  id: number;
  tableNumber: string;
  status: string;
}

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const TableSummary: React.FC<TableSummaryProps> = (props: TableSummaryProps) => {
  const { order, onClose } = props;

  // Sample order items (replace this with actual order items for each table)
  const orderItems: OrderItem[] = [
    { id: 1, name: "Item 1", quantity: 2, price: 10.99 },
    { id: 2, name: "Item 3", quantity: 1, price: 15.99 },
    { id: 3, name: "Item 6", quantity: 3, price: 10.99 },
  ];

  // Calculate total price
  const totalPrice = orderItems.reduce((total, item) => total + item.quantity * item.price, 0);

  // Tax percentage and amount
  const taxPercentage = 10;
  const taxAmount = (totalPrice * (taxPercentage / 100)).toFixed(2);

  // Tip percentage and amount
  const tipPercentage = 15;
  const tipAmount = (totalPrice * (tipPercentage / 100)).toFixed(2);

  // Final price
  const finalPrice = (totalPrice + parseFloat(taxAmount) + parseFloat(tipAmount)).toFixed(2);

  return (
    <Drawer isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent style={{ userSelect: 'none' }}>
        <DrawerCloseButton color="gray.600" _hover={{ color: "gray.800" }} />
        <DrawerHeader borderBottomWidth="1px" pb={2}>
          <Text fontSize="xl" fontWeight="bold" color="gray.800">
            Order Summary
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <VStack align="start" spacing={4} p={4}>
            <HStack justifyContent="space-between" width="100%">
              <Text fontSize="2xl" fontWeight="bold">
                Table {order.tableNumber}
              </Text>
              <Badge
                colorScheme={
                  order.status === "Requested"
                    ? "blue"
                    : order.status === "In Progress"
                    ? "orange"
                    : "green"
                }
                fontWeight="bold"
                fontSize="sm"
                py={1}
                px={2}
                borderRadius="full"
                position="relative"
                top={1}
              >
                {order.status}
              </Badge>
            </HStack>

            {orderItems.map((item) => (
              <HStack
                key={item.id}
                justifyContent="space-between"
                width="100%"
                bg="gray.100"
                p={2}
                borderRadius="md"
              >
                <Text fontSize="md" fontWeight="bold">
                  {item.name}
                </Text>
                <Badge
                  colorScheme="white"
                  fontSize="xs"
                  borderRadius="full"
                  position="relative"
                  top={0}
                  right={8}
                  bg="white"
                  px={2}
                >
                  x{item.quantity}
                </Badge>
                <Text fontSize="md" color="gray.700" fontWeight="medium">
                  ${(item.quantity * item.price).toFixed(2)}
                </Text>
              </HStack>
            ))}

            {/* Manual positioning of price breakdown section */}
            <HStack justifyContent="space-between" width="100%" mt={56} pt={2} borderTopWidth="1px">
              <VStack align="start" spacing={1}>
                <Text>Total Price:</Text>
                <Text>Tax ({taxPercentage}%):</Text>
                <Text>Tip ({tipPercentage}%):</Text>
              </VStack>
              <VStack align="end" spacing={1}>
                <Text>${totalPrice.toFixed(2)}</Text>
                <Text>${taxAmount}</Text>
                <Text>${tipAmount}</Text>
              </VStack>
            </HStack>

            <HStack justifyContent="space-between" width="100%" mt={4}>
              <Text fontSize="lg" fontWeight="bold">
                Final Price:
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                ${finalPrice}
              </Text>
            </HStack>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default TableSummary;
