import React from "react";
import { Route, Routes } from "react-router";
import Homepage from "./Homepage";
import UserDetails from "./UserDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/userDetails" element={<UserDetails />} />
    </Routes>
  );
};

export default AllRoutes;
