import React, { useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const PostForm = ({ onSubmit, initialValues = {} }) => {
  const [title, setTitle] = useState(initialValues.title || "");
  const [content, setContent] = useState(initialValues.content || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <Box maxW="md" mx="auto">
      <FormControl id="title">
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </FormControl>

      <FormControl id="content">
        <FormLabel>Content</FormLabel>
        <Textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          size="md"
          resize="none"
          rows={10}
        />
      </FormControl>

      <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default PostForm;
