import React from "react";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <MainNavigation />
      <h1>ErrorPage</h1>
    </div>
  );
};

export default ErrorPage;
