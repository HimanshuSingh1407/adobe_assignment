import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import axios from "axios";

const UserAnalytics = () => {
  const [userCount, setUserCount] = useState(0);
  const [topUsers, setTopUsers] = useState([]);

  const fetchUserData = async () => {
    const response = await fetch(
      "http://localhost:8080/users/analytics/users/top-active"
    );
    const data = await response.json();
    const userCount = Object.keys(data).length;
    const topUsers = Object.entries(data)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    setUserCount(userCount);
    setTopUsers(topUsers);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Box padding={"1rem"}>
      <Heading size="lg">User Analytics</Heading>
      <Text mb={4}>Total number of users: {userCount}</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>User ID</Th>
            <Th>Number of Posts</Th>
          </Tr>
        </Thead>
        <Tbody>
          {topUsers.map(([userId, postCount], index) => (
            <Tr key={userId}>
              <Td>{index + 1}</Td>
              <Td>{userId}</Td>
              <Td>{postCount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserAnalytics;
