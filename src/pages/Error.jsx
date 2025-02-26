import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  const error = useRouteError();
  // console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="error" />
          <h3>Oops! It's a dead end</h3>
          <Link to="/" className="btn ">
            Back Home
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  );
};

export default Error;
