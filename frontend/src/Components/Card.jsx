import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ item }) => {
  return (
    <Flex
      gap="1rem"
      w="100%"
      align="center"
      justify="space-between"
      boxShadow={"lg"}
      p="1rem"
      borderRadius="8px"
    >
      <Image w="50px" borderRadius={"full"} src={item?.picture.medium} />
      <Heading size="md">
        {item?.name.title + " " + item?.name.first + " " + item?.name.last}
      </Heading>
      <Text>Gender: {item?.gender}</Text>
      <Text>
        Location: City: {item?.location.city} State: {item?.location.state}{" "}
        Country: {item?.location.country}
      </Text>
    </Flex>
  );
};

export default Card;
