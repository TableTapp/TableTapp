import React, {useState} from 'react';
import { Box, Heading, VStack, Text, HStack } from '@chakra-ui/react';
import All from './Categories_Icons/All.png';
import Appetizers from './Categories_Icons/Appetizers.png';
import Desserts from './Categories_Icons/Desserts.png';
import Drinks from './Categories_Icons/Drinks.png';
import Entrees from './Categories_Icons/Entrees.png';
import Specials from './Categories_Icons/Specials.png';
// Import other images as needed

const Categories: React.FC = () => {
    const categories = [
        { name: 'All items', icon: <img src={All} alt="All" />, count: "24" },
        { name: 'Specials', icon: <img src={Specials} alt="Specials" /> , count: "5" },
        { name: 'Drinks', icon: <img src={Drinks} alt="Drinks" /> , count: "6"},
        { name: 'Appetizers', icon: <img src={Appetizers} alt="Appetizers" />, count: "7" },
        { name: 'Entrees', icon: <img src={Entrees} alt="Entrees" /> , count: "7"},
        { name: 'Desserts', icon: <img src={Desserts} alt="Desserts" /> , count: "4"},
    ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Box bg="gray.100" p={5} width="25%" position="absolute" top="23%" left="22.6%" sx={{ userSelect: 'none' }}>
      <VStack align="start" spacing={4}>
        <Heading color="#2D3748" fontSize={24} fontFamily="Inter" fontWeight={600}>
          Categories
        </Heading>
        <HStack spacing={4}>
          {categories.map((category) => (
            <Box
              as="button"
              key={category.name}
              width="95px" // Modify the width here
              height="95px" // Modify the height here
              borderRadius="10px"
              bg={selectedCategory === category.name ? '#F56565' : '#FFF'}
              boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column" // Display the icon and text in a column layout
              onClick={() => handleCategoryClick(category.name)}
              cursor="pointer"
            >
              {category.icon}
              <Text
                color={selectedCategory === category.name ? '#FFF' : 'var(--gray-700, #2D3748)'}
                textAlign="center"
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight={700}
                lineHeight="120%"
                mt={1}
              >
                {category.name}
              </Text>
              <Text
                color={selectedCategory === category.name ? '#FFF' : 'var(--gray-700, #2D3748)'}
                textAlign="center"
                fontFamily="Inter"
                fontSize="12px"
                fontStyle="normal"
                fontWeight={500}
                lineHeight="120%"
                mt={1}
                
              >
                {category.count} items
              </Text>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Categories;
