import {
  Box,
  Button,
  Container,
  Flex,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

//const url = "https://randomuser.me/api/?results=55";
const Homepage = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleFetch = async () => {
    if (isFetching) {
      return alert("Fetching is in Progress");
    }

    setIsFetching(true);
    try {
      const data = await axios.get();
    } catch (error) {
      setIsFetching(false);
      console.log(error);
    }
  };

  return (
    <Flex w="100%" h="100vh" align="center" justify="center" bg="#8458B3">
      <VStack spacing="10px">
        <Button colorScheme="green">
          Fetch Users {isFetching && <Spinner color="white" />}
        </Button>
        <Button variant="solid" colorScheme="red">
          Delete Users 
        </Button>
        <Button colorScheme="yellow">User Details</Button>
      </VStack>
    </Flex>
  );
};

export default Homepage;
