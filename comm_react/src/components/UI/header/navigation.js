import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import HomeIcon from '../../assets/icons/home';
import ProfileIcon from '../../assets/icons/profile';
import GroupsIcon from '../../assets/icons/groups';
import NotificationsIcon from '../../assets/icons/notifications';
import DashboardIcon from '../../assets/icons/dashboard'


const Navigation = () => {
  return (
    <Box
      gap={"20px"}
      display={"grid"}
      flexDir={"col"}
      justifyContent={"center"}>
      <Text>
        <a href="/">
          <Flex gap={"8px"}>
            <HomeIcon />
            Home
          </Flex>
        </a>
      </Text>
      <Text>
        <a href="/profile">
          <Flex gap={"8px"}>
            <ProfileIcon />
            Profile
          </Flex>
        </a>
      </Text>
      <Text>
        <a href="/groups">
          <Flex gap={"8px"}>
            <GroupsIcon />
            Products
          </Flex>
        </a>
      </Text>
      <Text>
        <a href="/notifications">
          <Flex gap={"8px"}>
            <NotificationsIcon />
            Notifications
          </Flex>
        </a>
      </Text>
      <Text>
        <a href="/dashboard">
          <Flex gap={"8px"}>
            <DashboardIcon />
            Dashboard
          </Flex>
        </a>
      </Text>
    </Box>
  )
}

export default Navigation;