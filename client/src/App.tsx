import { useState, useEffect } from 'react'
import { Container, Heading, Highlight, Center, AbsoluteCenter, VStack, HStack, Button, Box, Card, StackDivider, Flex, Spacer, useTimeout } from '@chakra-ui/react';
import { OrderComponent } from './components/Order';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<any>>([]);
  const [ordersReceived, setOrdersReceived] = useState<boolean>(false);
  useEffect(() => {
    async function loadOrders() {
      const response = await axios.get(`http://127.0.0.1:9090/order`);
      setData(response.data.results);
      setTimeout(() => {
        console.log("Delayed for 1 second.");
        setLoading(false);
      }, 1000);
    }
    if (loading) { loadOrders(); setOrdersReceived(true); }
  });

  const orders = data.map((order) => {
    console.log(order)
    return (
      <OrderComponent id={order._id}/>
    );
  });

  return (
    <>
      <Container maxW='2xl' padding="0">
        <Card w='100vw' color={'blackAlpha.900'} borderRadius={0} padding={3}>
          <Flex>
            <Heading>
              TableTapp
            </Heading>
            <Spacer />
            <Button colorScheme='teal' size='lg' isLoading={loading} loadingText='Orders' onClick={() => setLoading(true)}>
              Get Orders
            </Button>
          </Flex>
        </Card>
        <AbsoluteCenter>
          <HStack spacing={5}>
            {ordersReceived ? orders : <Heading>Click Get Orders</Heading>}
          </HStack>
        </AbsoluteCenter>
      </Container>
    </>
  );
}

export default App
