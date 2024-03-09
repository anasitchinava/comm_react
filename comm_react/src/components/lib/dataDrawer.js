import { Box, Text, Flex, Spinner, Skeleton } from '@chakra-ui/react';

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
                        marginLeft={"10%"}
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

export default DataDrawer;