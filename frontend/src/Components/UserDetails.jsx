import { Button, Flex, Heading, Select, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const getData = async (
    { gender = "", city = "", state = "", country = "" },
    page = 1
  ) => {
    const { data } = await axios.get(
      `https://cointab-8fca.onrender.com/api/user`,
      {
        params: {
          gender: gender,
          "location.city": city,
          "location.state": state,
          "location.country": country,
          page: page,
        },
      }
    );

    setUserData(data);
    setTotalpage(Math.floor(data.length / 10));
  };

  function buttons() {
    let arr = new Array(totalpage).fill(1);
    let buttons = arr.map((item, i) => (
      <Button
        margin={"5px"}
        colorScheme={"facebook"}
        disabled={page == i + 1}
        key={i}
        onClick={(e) => setPage(i + 1)}
      >
        {i + 1}
      </Button>
    ));
    return buttons;
  }

  useEffect(() => {
    const queryParams = {};
    if (gender) {
      queryParams.gender = gender;
    }

    if (city) {
      queryParams.city = city;
    }

    if (state) {
      queryParams.state = state;
    }

    if (country) {
      queryParams.country = country;
    }

    if (page) {
      queryParams.page = page;
    }

    setSearchParams(queryParams);
    getData(queryParams, page);
  }, [gender, city, state, country, page]);

  // console.log(userData);
  return (
    <>
      <Flex w="100%" h="70px" align="center" justify="center" boxShadow="lg">
        <Link to="/">
          <Text fontSize="xl" fontWeight="500" color="blue">
            Back to Homepage
          </Text>
        </Link>
      </Flex>

      <Flex
        boxShadow="lg"
        gap="1rem"
        align="center"
        p="1rem"
        w="60%"
        margin="50px auto"
      >
        <Select
          onChange={(e) => setGender(e.target.value)}
          placeholder="Filter by gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        {/* filter by city */}
        <Select
          onChange={(e) => setCity(e.target.value)}
          placeholder="Filter by city"
        >
          <option value="El Venadillo">El Venadillo</option>
          <option value="Aksaray">Aksaray</option>
          <option value="Sursee">Sursee</option>
          <option value="Shelbourne">Shelbourne</option>
          <option value="Melbourne">Melbourne</option>
        </Select>

        {/* filter by state */}
        <Select
          onChange={(e) => setState(e.target.value)}
          placeholder="Filter by state"
        >
          <option value="Campeche">Campeche</option>
          <option value="Artvin">Artvin</option>
          <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="New South Wales">New South Wales</option>
        </Select>

        {/* filter by country */}
        <Select
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Filter by Country"
        >
          <option value="Mexico">Mexico</option>
          <option value="Turkey">Turkey</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </Select>
      </Flex>

      <VStack w="60%" m="100px auto" spacing="2rem">
        {userData?.length === 0 && <Heading> Users not found </Heading>}
        {userData?.map((el, index) => (
          <Card item={el} key={index} />
        ))}
      </VStack>

      <Flex w="60%" align="center" m="25px auto">
        <Button
          colorScheme={"whatsapp"}
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
        >
          Pre
        </Button>
        {userData?.length > 0 && buttons()}
        <Button
          colorScheme={"whatsapp"}
          disabled={page == totalpage}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default UserDetails;
