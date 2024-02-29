import React, { useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Dashboard = () => {
    const [data] = useState([
        {
            name: "Net Income",
            amount: "20.178.00 $",
            last_period: "+23,9"
        },
        {
            name: "Avr. Order Value",
            amount: "896.00 $",
            last_period: "-13,9"
        },
        {
            name: "Orders",
            amount: "7,559",
            last_period: "+12,5"
        }
    ]);

    return (
        <Flex justifyContent="center" gap="5px">
            {data.map((item, index) => (
                <Box
                    key={index}
                    width="300px"
                    height={"200px"}
                    padding="20px"
                    borderRadius="8px"
                    boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                    backgroundColor={item.last_period.includes('-') ? '#FF7F7F' : '#90EE90'}
                    color="white"
                    marginBottom="20px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text fontSize="lg" fontWeight="bold" marginBottom="10px">{item.name}</Text>
                    <Text fontSize="md">{item.amount}</Text>
                    <Text fontSize="md">Last Period: {item.last_period}</Text>
                </Box>
            ))}
        </Flex>
    );
}

export default Dashboard;
