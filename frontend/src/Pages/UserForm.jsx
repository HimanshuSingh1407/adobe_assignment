import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

const UserForm = () => {
  return (
    <Box
      maxW="md"
      mx="auto"
      padding={"2rem"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      marginTop={"5rem"}
    >
      <Heading textAlign={"center"} marginBottom={"2rem"}>
        User Form
      </Heading>
      <FormControl id="username">
        <FormLabel>Name</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>

      {/* <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl> */}

      <FormControl id="bio">
        <FormLabel>Bio</FormLabel>
        <Input type="textarea" />
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
