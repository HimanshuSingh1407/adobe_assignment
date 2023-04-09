import React from "react";
import { Link } from "react-router-dom";
import { Container, Center, HStack, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Container maxW={"100%"} backgroundColor={"lightgray"} padding={"1rem"}>
        <Center>
          <HStack spacing={"3rem"} >
            <Button>
              <Link to={`/`}>User-Form</Link>
            </Button>
            <Button>
              <Link to={`/postForm`}>Post-Form</Link>
            </Button>
            <Button>
              <Link to={`/userList`}>User-List</Link>
            </Button>
            <Button>
              <Link to={`/postList`}>Post-List</Link>
            </Button>
          </HStack>
        </Center>
      </Container>
    </>
  );
};

export default Navbar;
