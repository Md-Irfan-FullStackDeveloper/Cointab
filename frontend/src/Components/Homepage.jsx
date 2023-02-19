import { Button, Flex, Spinner, useToast, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const url = "https://cointab-8fca.onrender.com";
const Homepage = () => {
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const toast = useToast();

  const handleFetch = async () => {
    setIsFetching(true);

    try {
      const data = await axios.post(`${url}/api/user/add`);

      if (data.data.message === "Data is already fetched") {
        setIsFetching(false);

        return toast({
          title: "Users data already fetched",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }

      setIsFetching(false);
      toast({
        title: "Users fetched successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      setIsFetching(false);
      console.log(error.message);
    }
  };

  const handleDelete = async () => {
    alert("Are sure you want to delete Users data");

    setIsDeleting(true);

    try {
      await axios.delete(`${url}/api/user`);
      setIsDeleting(false);

      toast({
        title: "Users deleted successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      setIsDeleting(false);
      console.log(error.message);
    }
  };

  const handleUserDetails = () => {
    navigate("/userDetails", { replace: true });
  };

  return (
    <Flex w="100%" h="100vh" align="center" justify="center" bg="#8458B3">
      <VStack spacing="10px">
        <Button onClick={handleFetch} colorScheme="green">
          Fetch Users {isFetching && <Spinner ml="10px" color="white" />}
        </Button>
        <Button onClick={handleDelete} variant="solid" colorScheme="red">
          Delete Users {isDeleting && <Spinner ml="10px" color="white" />}
        </Button>
        <Button onClick={handleUserDetails} colorScheme="yellow">
          User Details
        </Button>
      </VStack>
    </Flex>
  );
};

export default Homepage;
