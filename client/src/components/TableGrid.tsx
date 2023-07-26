import React, {useState, useEffect} from 'react';import {
  Box,
  Heading,
  Flex,
  Text,
  Badge,
  Button,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

interface TableInfo {
  number: string;
  seats: number;
  status: 'empty' | 'occupied' | 'reserved';
}

interface TableGridProps {
  tableData: Array<Array<TableInfo>>; // Array of arrays representing the table grid layout
  onTableClick: (tableNumber: string) => void; // Event handler for table click
}

const TableGrid: React.FC<TableGridProps> = ({ tableData, onTableClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSeats, setSelectedSeats] = useState<string>("");
  

  const getTextColor = (tableStatus: string) => {
    if (tableStatus === 'empty') {
      return '#38A169'; // Empty table color
    } else if (tableStatus === 'reserved') {
      return '#CCCC00	'; // Reserved table color
    } else {
      return '#E53E3E'; // Occupied table color
    }
  };

  const handleTableClick = (tableNumber: string) => {
    onTableClick(tableNumber);
  };

  // Handle "Close" button click
  const handleClose = () => {
    setSelectedSeats(""); // Reset the selected seats when closing the modal
    onClose();
  };

  const emptyTables = tableData.flat().filter(table => table.status === 'empty').length;
  const reservedTables = tableData.flat().filter(table => table.status === 'reserved').length;
  const occupiedTables = tableData.flat().filter(table => table.status === 'occupied').length;

  const [occupiedTableNumbers, setOccupiedTableNumbers] = useState<string[]>([]);

  // ... Other code ...

  // Function to randomly select an occupied table for the notification
  const showRandomNotification = () => {
    const occupiedTables = tableData.flat().filter(table => table.status === 'occupied');
    if (occupiedTables.length > 0) {
      const randomTable = occupiedTables[Math.floor(Math.random() * occupiedTables.length)];
      setOccupiedTableNumbers([randomTable.number]);
    }
  };

  useEffect(() => {
    showRandomNotification();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Box p={4} sx={{ userSelect: 'none' }}>
      <Heading
        color="#2D3748"
        fontSize={24}
        fontFamily="Inter"
        fontWeight={600}
        whiteSpace="nowrap"
        mt={3}
        mb={6}
      >
        Table Layout
        <Button
          ml={590} // Add margin to separate the button from the heading
          size="sm" // Adjust the button size as needed
          color="white"
          bg="#F56565"
          _hover={{ bg: '#F56565' }}
          _focus={{ boxShadow: 'none' }}
          _active={{ bg: '#F56565' }}
          borderRadius="md"
          onClick={onOpen} // Open the Add Table modal on button click
        >
          Add Table
        </Button>
      </Heading>
      {tableData.map((row, rowIndex) => (
        <Flex key={rowIndex} mb={10} ml={70}>
          {row.map(({ number, seats, status }, columnIndex) => (
            <Box
              key={columnIndex}
              bg="#FFF"
              borderWidth="1px"
              borderRadius="xl" // Make the edges of the table boxes rounder
              width={`${seats * 40}px`}
              height="100px"
              marginRight="10"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              
              onClick={() => handleTableClick(number)}
              position="relative"
            >
              <Text
                fontSize="2xl" // Increase the size of the font for the table number
                fontWeight="bold"
                color={getTextColor(status)}
              >
                {number}
              </Text>
              {(status === 'empty' || seats === 0) ? (
                <Text
                  fontSize="xs" // Decrease the size of the font for the number of seats
                  fontWeight="semibold"
                  color="#4A5568"
                  mt={1}
                >
                  {`${seats} Seats`}
                </Text>
              ) : (
                <Text
                  fontSize="xs" // Decrease the size of the font for the empty table text
                  fontWeight="semibold"
                  color="#4A5568" // Color for empty table
                  mt={1}
                >
                  {`${seats} Seats`}
                </Text>
              )}
              {status === 'occupied' && occupiedTableNumbers.includes(number) && (
                <WarningIcon
                  position="absolute" // Position the notification icon absolutely
                  top="5px" // Adjust the top position to place it in the upper right corner
                  right="5px" // Adjust the right position to place it in the upper right corner
                  color="red.500"
                  boxSize={6}
                />
              )}
            </Box>
          ))}
        </Flex>
      ))}
      <Flex position="absolute" bottom="-1%" left="46.5%" transform="translateX(-50%)" mt={2}>
        <Box
          bg="#FFF"
          p={2}
          borderRadius="md"
          width="850px"
          display="flex"
          alignItems="flex-start" // Align badges to the left
          justifyContent="flex-end"
          
        >
          <Badge colorScheme="green" mx={2}>
            Empty: {emptyTables}
          </Badge>
          <Badge colorScheme="yellow" mx={2}>
            Reserved: {reservedTables}
          </Badge>
          <Badge colorScheme="red" mx={2}>
            Occupied: {occupiedTables}
          </Badge>
        </Box>
      </Flex>
      {/* Add Table Modal */}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Table</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add the content of the Add Table modal here */}
            <Text>Select the number of seats:</Text>
            <Select
              value={selectedSeats}
              onChange={(e) => setSelectedSeats(e.target.value)}
              mt={2}
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            {/* Add the footer content of the Add Table modal here */}
            <Button bg="#f56565" color="white" onClick={handleClose} mr={3}>
              Save
            </Button>
            <Button bg="gray.100" color="black" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TableGrid;
