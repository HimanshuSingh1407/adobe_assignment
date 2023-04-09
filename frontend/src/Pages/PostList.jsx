import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Button,
  useDisclosure,
  Heading,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const BasicUsage = ({ isOpen, onClose, onOpen, posts }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box key={posts.id}>
              <Text>{posts.id}</Text>
              <Text>{posts.content}</Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

function InitialFocus({
  isOpen,
  onClose,
  onOpen,
  setContent,
  content,
  editPost,
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Textarea
                ref={initialRef}
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={editPost}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: modalIsOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();
  const [content, setContent] = useState("");
  const [state, setState] = useState({});
  const [id, setId] = useState("");

  const getPosts = () => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const fetchPosts = (id) => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => setState(response.data))
      .catch((error) => console.log(error));
  };

  const editPost = () => {
    axios
      .put(`http://localhost:8080/posts/${id}`, { ...content })
      .then((response) => getPosts())
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/posts/${id}`).then(() => {
      getPosts();
    });
  };

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>User Id</Th>
            <Th>Content</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post) => (
            <Tr key={post.id}>
              <Td>{post.id}</Td>
              <Td>{post.content}</Td>
              <Td display={"flex"} justifyContent={"space-around"}>
                <IconButton
                  onClick={() => {
                    onOpen();
                    fetchPosts(post.id);
                  }}
                  icon={<FaEye />}
                  aria-label="View user"
                />
                <IconButton
                  onClick={() => {
                    openModal();
                    setId(post.id);
                  }}
                  icon={<FaEdit />}
                  aria-label="Edit user"
                />
                <IconButton
                  onClick={() => handleDelete(post.id)}
                  icon={<FaTrash />}
                  aria-label="Delete user"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <BasicUsage
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        posts={state}
      />
      <InitialFocus
        isOpen={modalIsOpen}
        onClose={closeModal}
        onOpen={openModal}
        setContent={setContent}
        content={content}
        editPost={editPost}
      />
    </>
  );
};

export default PostList;
