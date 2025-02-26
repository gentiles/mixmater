import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
// import styled from "styled-components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <>
            <div className="loading" />
            <h3>Loading</h3>
          </>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
