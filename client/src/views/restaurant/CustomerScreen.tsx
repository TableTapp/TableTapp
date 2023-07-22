import React, { useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Flex, Badge } from '@chakra-ui/react';

interface Customer {
  ranking: number;
  name: string;
  email: string;
  phoneNumber: string;
  ordersInLastMonth: number;
}

const CustomerScreen: React.FC = () => {
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

  const customerData: Customer[] = [
    {
      ranking: 1,
      name: 'Peter Parker',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      ordersInLastMonth: 10,
    },
    {
      ranking: 2,
      name: 'Tony Stark',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      ordersInLastMonth: 10,
    },
    {
      ranking: 3,
      name: 'Albert Einstein',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      ordersInLastMonth: 10,
    },
    {
      ranking: 4,
      name: 'Fay Queser',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      ordersInLastMonth: 10,
    },
    {
      ranking: 5,
      name: 'Johnny Appleseed',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
      ordersInLastMonth: 10,
    },
    // Add more customer entries as needed
    // {
    //   ranking: ...,
    //   name: ...,
    //   email: ...,
    //   phoneNumber: ...,
    //   ordersInLastMonth: ...,
    // },
  ];

  const renderCustomers = () =>
    customerData.map((customer) => (
      <Tr key={customer.ranking}>
        <Td>
        <Flex align="center">
            {customer.ranking === 1 ? (
              <Box
                color="#FFFFFF"
                bg="#D4AF37" // Gold color
                borderRadius="20px"
                px={2}
                py={1}
                mr={1}
              >
                {customer.ranking}
              </Box>
            ) : customer.ranking === 2 ? (
              <Box
                color="#FFFFFF"
                bg="#C0C0C0" // Silver color
                borderRadius="20px"
                px={2}
                py={1}
                mr={1}
              >
                {customer.ranking}
              </Box>
            ) : customer.ranking === 3 ? (
              <Box
                color="#FFFFFF"
                bg="#CD7F32" // Bronze color
                borderRadius="20px"
                px={2}
                py={1}
                mr={1}
              >
                {customer.ranking}
              </Box>
            ) : (
              customer.ranking
            )}
          </Flex>
        </Td>
        <Td>{customer.name}</Td>
        <Td>{customer.email}</Td>
        <Td>{customer.phoneNumber}</Td>
        <Td>{customer.ordersInLastMonth}</Td>
      </Tr>
    ));

  return (
    <Box p={4} sx={{ userSelect: 'none' }} mt={3} ml={-20}>
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
        Customer List
      </Heading>
      <Table
        width="950px"
        variant="simple"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="md"
        mt={8}
        ml={5}
        bg="white"
      >
        <Thead>
          <Tr>
            <Th>Ranking</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Orders in The Past Month</Th>
          </Tr>
        </Thead>
        <Tbody>{renderCustomers()}</Tbody>
      </Table>
    </Box>
  );
};

export default CustomerScreen;
