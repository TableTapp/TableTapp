import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import OrderQueues from '../../components/OrderQueue';
import TableGrid from '../../components/TableGrid';

interface TableInfo {
  number: string;
  seats: number;
  status: 'empty' | 'occupied' | 'reserved';
}


const TableScreen: React.FC = () => {
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

  const tableData: Array<Array<TableInfo>> = [
    [
      { number: 'T1', seats: 4, status: 'occupied' },
      { number: 'T2', seats: 4, status: 'empty' },
      { number: 'T3', seats: 2, status: 'reserved' }
    ],
    [
      { number: 'T4', seats: 2, status: 'empty' },
      { number: 'T5', seats: 6, status: 'reserved' },
      { number: 'T6', seats: 6, status: 'occupied' },
      { number: 'T7', seats: 2, status: 'empty' }
    ],
    [
      { number: 'T8', seats: 8, status: 'occupied' },
      { number: 'T9', seats: 8, status: 'reserved' }
    ]
  ];

  const handleTableClick = (tableNumber: string) => {
    // Handle table click event
    console.log(`Clicked on table ${tableNumber}`);
  };

  return (
    <Box width="100%" height="100%" flexShrink={0} borderRadius="10px" background="#gray.100" p={5}>
      <OrderQueues />
      <Box position="absolute" top="23%" left="22.9%">
        <TableGrid tableData={tableData} onTableClick={handleTableClick} />
      </Box>
    </Box>
  );
};

export default TableScreen;
