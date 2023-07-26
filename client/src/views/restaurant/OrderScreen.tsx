import React, {useEffect, useState} from 'react';
import { Box, Heading, SimpleGrid, Text, Icon, Badge } from '@chakra-ui/react';
import { TimeIcon, ViewIcon } from '@chakra-ui/icons';
import TableSummary from '../../components/OrderSummary';

interface Order {
  id: number; // Added 'id' field
  tableNumber: string;
  status: 'ready' | 'in progress';
  seats: number;
  items: { name: string; quantity: number }[];
}

const OrderScreen: React.FC = () => {
    useEffect(() => {
        // Disable vertical scrolling on mount
        document.body.style.overflowY = 'hidden';
        document.body.style.overflowX = 'hidden';
    
        // Enable vertical scrolling on unmount
        return () => {
          document.body.style.overflowY = 'auto';
          document.body.style.overflowX = 'auto';
        };
    }, []);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);


  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const orders: Order[] = [
    {
        id: 1,
        tableNumber: 'T1',
        status: 'ready',
        seats: 4,
        items: [
          { name: 'Item 1', quantity: 2 },
          { name: 'Item 2', quantity: 1 },
        ],
      },
      {
        id: 2,
        tableNumber: 'T2',
        status: 'in progress',
        seats: 2,
        items: [
          { name: 'Item 3', quantity: 1 },
          { name: 'Item 4', quantity: 3 },
        ],
      },
      {
          id: 3,
          tableNumber: 'T3',
          status: 'in progress',
          seats: 4,
          items: [
            { name: 'Item 5', quantity: 2 },
            { name: 'Item 6', quantity: 1 },
          ],
      },
      {
          id: 4,
          tableNumber: 'T4',
          status: 'ready',
          seats: 4,
          items: [
            { name: 'Item 7', quantity: 2 },
            { name: 'Item 8', quantity: 1 },
          ],
      },
      {
          id: 5,
          tableNumber: 'T5',
          status: 'ready',
          seats: 4,
          items: [
            { name: 'Item 9', quantity: 2 },
            { name: 'Item 10', quantity: 1 },
          ],
      },

      {
        id: 6,
        tableNumber: 'T6',
        status: 'ready',
        seats: 6,
        items: [
          { name: 'Item 1', quantity: 2 },
          { name: 'Item 3', quantity: 1 },
          { name: 'Item 6', quantity: 3 },
        ],
    },
    {
        id: 7,
        tableNumber: 'T7',
        status: 'in progress',
        seats: 6,
        items: [
          { name: 'Item 7', quantity: 2 },
          { name: 'Item 8', quantity: 2 },
          { name: 'Item 9', quantity: 2 },
        ],
    },

    // ... your order data here ...
  ];

  return (
    <Box p={4} sx={{ userSelect: 'none' }} ml={-45}>
      <Heading
        color="#2D3748"
        fontSize={24}
        fontFamily="Inter"
        fontWeight={600}
        whiteSpace="nowrap"
        position="absolute"
        top="6%"
        left="24%"
        mb={8}
      >
        Orders
      </Heading>
      <SimpleGrid columns={4} spacing={8} maxH="calc(3 * 200px)" textAlign="center" marginTop={42} marginLeft={-5}>
        {orders.map((order) => (
          <Box
            key={order.tableNumber}
            bg="#FFF"
            p={0}
            borderWidth="1px"
            borderRadius="md"
            
            boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="180px" // Smaller box width
            height="200px" // Increase box height
            onClick={() => handleOrderClick(order)}
            _hover={{ boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.4)' }} // Add the hover styles here            
            cursor="pointer" // Add this line to make the box clickable
          >
            <Box
              bg={order.status === 'ready' ? '#38A169' : '#DD6B20'}
              color="#FFF"
              px={2}
              py={1}
              textAlign="left"
              borderTopLeftRadius="md"
              borderTopRightRadius="md"
              width="180px" // Smaller box width
              height="40px" // Increase box height
            >
              <Text fontSize="20px" fontWeight="bold" display="flex" justifyContent="space-between">
                <Box>{`Table ${order.tableNumber}`}</Box>
                <Box>
                  <Icon as={ViewIcon} boxSize={4} mr={1} />
                  {order.seats}
                </Box>
              </Text>
            </Box>
            <Box flex="1" overflowY="auto" mt={1} ml={-50}>
              {order.items.map((item) => (
                <Box key={item.name} display="flex" alignItems="left" justifyContent="space-between" mt={2} >
                  <Badge bg="gray.100" color="#2D3748" px={2} py={1} borderRadius="full">
                    x{item.quantity}
                  </Badge>
                  <Text fontSize="16.5px" flex="1" ml={4} fontWeight={700}>
                    {item.name}
                  </Text>
                </Box>
              ))}
            </Box>
            {order.status === 'in progress' && (
              <Badge display="flex" alignItems="center" mb={1} ml={90} bg="#DD6B20" borderRadius={5}>
                <Icon as={TimeIcon} boxSize={4} mr={1} color="white" />
                <Text fontSize="sm" color="white">
                  15 min
                </Text>
              </Badge>
            )}
          </Box>
        ))}
      </SimpleGrid>
      {selectedOrder && (
        <TableSummary order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      )}
    </Box>
  );
};

export default OrderScreen;
