import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from "../Pages/UserForm";
import PostForm from "../Pages/PostForm";
import UserList from "../Pages/UserList";
import PostList from "../Pages/PostList";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserForm />}></Route>
      <Route path="/postForm" element={<PostForm />}></Route>
      <Route path="/userList" element={<UserList />}></Route>
      <Route path="/postList" element={<PostList />}></Route>
    </Routes>
  );
};

export default AllRoutes;
