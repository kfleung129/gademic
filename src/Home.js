import NavBar from "./NavBar";
import { Box, Flex } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react";

const Home = () => {
  return(
    <ChakraProvider>
      <NavBar/>
      <h1>
        Hello, this is Homepage!
      </h1>
    </ChakraProvider>
    
  );
}

export default Home
