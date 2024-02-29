import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import SettingsIcon from '../../assets/icons/settings';

const ActionNavigation = () => {
  return (
    <Box
      gap={"20px"}
      justifyContent={"center"}>
      <Text>
        <a href="/settings">
          <Flex gap={"8px"}>
            <SettingsIcon />
            Settings
          </Flex>
        </a>
      </Text>
    </Box>
  )
}

export default ActionNavigation;