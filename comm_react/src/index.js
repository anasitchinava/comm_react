import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/layout/header';
import { Flex } from '@chakra-ui/react';
import Dashboard from './components/pages/dashboard';
import Groups from './components/pages/groups';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <h1>Profile Page</h1>,
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/notifications",
    element: <h1>Notifications Page</h1>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <h1>Settings Page</h1>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Flex gap={"20px"}>
      <Header />
      <RouterProvider router={router}/>
    </Flex>
  </ChakraProvider>
);
