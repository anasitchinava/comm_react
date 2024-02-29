import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Spinner, Skeleton } from '@chakra-ui/react';

const DataFetcher = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return children({ products, isLoading });
};

const DataDrawer = ({ products, isLoading }) => {
  return (
    <Flex justifyContent="center" flexWrap="wrap" gap="20px" padding="20px">
      {isLoading ? (
        <Spinner size="xl" color="blue.500" />
      ) : (
        products.map((product, index) => (
          <Box
            key={index}
            width="300px"
            padding="20px"
            borderRadius="8px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            backgroundColor="white"
            color="black"
          >
            <Skeleton isLoaded={!isLoading}>
              <img src={product.image} alt={product.title} style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
              <Text fontSize="lg" fontWeight="bold">{product.title}</Text>
              <Text fontSize="md" marginTop="10px">${product.price}</Text>
              <Text fontSize="md" marginTop="10px">{product.description}</Text>
            </Skeleton>
          </Box>
        ))
      )}
    </Flex>
  );
};

const DataFetch = () => {
  return (
    <DataFetcher>
      {({ products, isLoading }) => (
        <DataDrawer products={products} isLoading={isLoading} />
      )}
    </DataFetcher>
  );
};

export default DataFetch;
