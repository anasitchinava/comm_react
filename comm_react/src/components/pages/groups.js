import React from 'react'
import DataFetch from '../UI/dataFetch'
import { Box } from '@chakra-ui/react'

const Groups = () => {
  return (
    <Box
      overflow={"scroll"}
      height={"100vh"}>
      <DataFetch />
    </Box>
  )
}

export default Groups;