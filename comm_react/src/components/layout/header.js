import React from 'react';
import { Box, Flex, Text, Input } from '@chakra-ui/react';
import Navigation from './../UI/header/navigation';
import ActionNavigation from './../UI/header/actionNavigation';
import ProfilePic from '../assets/img/profile';

const Header = () => {
    return (
        <Box
            background={"#F2F2F2"}
            display={"flex"}
            flexDirection={"column"}
            height={"100vh"}
            paddingX={"40px"}
            paddingTop={"2%"}
        >
            <Flex
                alignItems="center"
                marginBottom={4}
            >
                <ProfilePic />
                <Flex flexDir="column" marginLeft={2}>
                    <Text>John Doe</Text>
                </Flex>
            </Flex>

            <Input placeholder="Search..." width="200px" marginBottom={4} />

            <Box paddingTop={15}>
                <Navigation />
            </Box>

            <Box marginTop="auto" paddingTop={4}>
                <ActionNavigation />
            </Box>
        </Box>
    );
}

export default Header;
