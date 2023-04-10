import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const PostAnalytics = () => {
  const [postCount, setPostCount] = useState(0);
  const [mostLikedPosts, setMostLikedPosts] = useState([]);

  const fetchPostData = async () => {
    axios.get("https://adobebackend-mjc1.onrender.com/post/analytics").then((response) => {
      setPostCount(response.data.postCount);
      setMostLikedPosts(response.data.mostLikedPosts);
    });
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <Box>
      <Heading as="h2" size="lg" mb="4">
        Post Analytics
      </Heading>
      <Text mb="4">Total number of posts: {postCount}</Text>
      <Text mb="4">Top 5 most liked posts:</Text>
      <UnorderedList>
        {mostLikedPosts.map((post) => (
          <ListItem key={post.id}>
            <Text>{post.title}</Text>
            <Text fontSize="sm" color="gray.500">
              Likes: {post.likes}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default PostAnalytics;
