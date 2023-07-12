import React, {useState} from 'react';
import { Box, Heading, VStack, Text, Flex , Button} from "@chakra-ui/react";
// import MenuScreen from '../views/restaurant/MenuScreen';
import TableSummary from './OrderSummary';

const OrderQueues: React.FC = () => {

  interface Order {
    id: number;
    tableNumber: string;
    status: string;
  }

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  // Replace this with your actual order queues data
  const orderQueues: Order[] = [
    { id: 1, tableNumber: "T1", status: "Requested" },
    { id: 2, tableNumber: "T2", status: "Ready" },
    { id: 3, tableNumber: "T3", status: "In Progress" },
    { id: 4, tableNumber: "T4", status: "In Progress" },
    { id: 5, tableNumber: "T5", status: "Requested" },
    { id: 6, tableNumber: "T6", status: "In Progress" },
    { id: 7, tableNumber: "T7", status: "Requested" },
    { id: 8, tableNumber: "T8", status: "In Progress" },
    // Add more order queues as needed
  ];

  // Replace this with the logic to get deleted order IDs
  const deletedOrderIds = [6,7,8];

  // Filter out deleted orders
  const filteredOrderQueues = orderQueues
    .filter((order) => !deletedOrderIds.includes(order.id))
    .slice(0, 3); // Limit to three orders

  // const handleViewAllOrders = () => {
  //   // Redirect the user to the orders screen
  //   // Implement the redirection logic here
  //   return <MenuScreen/>
  // };

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseDrawer = () => {
    setSelectedOrder(null);
  };


  return (
    <Box bg="gray.100" p={5} width="25%" sx={{ userSelect: 'none' }}>
      <VStack align="start" spacing={4} p={1}>
        <Heading
          color="#2D3748"
          fontSize={24}
          fontFamily="Inter"
          fontWeight={600}
          whiteSpace="nowrap"
          position="fixed"
          top="6%"
          left="24%"
          mb={8}
        >
          Order Queue
        </Heading>
        <Flex direction="row" gap={6} ml="-54%">
          {filteredOrderQueues.map((order) => (
            <Button
              key={order.id}
              width="180px"
              height="70px"
              borderRadius="10px"
              background="#FFF"
              boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
              mt="4px"
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="0 10px"
              onClick={() => handleOrderClick(order)}
              >
              <Box
                display="flex"
                alignItems="center"
                gap="8px"
                flexShrink={0}
                borderRadius="6px"
                background={
                  order.status === "Requested"
                    ? "var(--blue-500, #3182CE)"
                    : order.status === "In Progress"
                    ? "#DD6B20"
                    : order.status === "Ready"
                    ? "#38A169"
                    : ""
                }
                position="absolute"
                top="8px"
                right="8px"
                >
                <Text
                  color="var(--white, #FFF)"
                  fontSize="12px"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight={500}
                  lineHeight="24px"
                  textAlign="center"
                  padding="2px 6px"
                >
                  {order.status}
                </Text>
              </Box>

              <Text
                color="#718096"
                textAlign="center"
                fontSize="12px"
                fontFamily="Inter"
                fontWeight={500}
                lineHeight="20px"
                position="absolute"
                top="50px"
                right="8px"
                >
                Order ID: {order.id}
              </Text>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
                marginRight="-231px"
                bg="#D9D9D9" // Set the background color to gray.100
                width="50px" // Adjust the width as needed
                height="50px" // Adjust the height as needed
                borderRadius="10px"
                boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
              >
                <Text
                  color="#2D3748"
                  textAlign="center"
                  fontSize="30px"
                  fontFamily="Inter"
                  fontStyle="normal"
                  fontWeight={700}
                  lineHeight="120%"
                >
                  {order.tableNumber}
                </Text>
              </Box>
            </Button>
          ))}
        </Flex>
        {selectedOrder && <TableSummary order={selectedOrder} onClose={handleCloseDrawer} />}
        {/* {orderQueues.length >= 4 && (
          <Box
            as="button"
            position="absolute"
            onClick={handleViewAllOrders}
            right={238}
            bottom={540}
            
            m={4} // Add margin for spacing
            p={2} // Add padding for the box
            width="90px"
            height="70px"
            
            borderRadius="10px"
            background="#F56565"
            boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
            mt="14px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              fontSize="15px"
              color="#fff"
              textAlign="center"
            >
              View All +
            </Text>
        </Box>
        )} */}
      </VStack>
    </Box>

  )
}
export default OrderQueues;
