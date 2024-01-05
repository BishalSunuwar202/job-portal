import React from "react";
import ProfileNavigation from "../components/ProfileNavigation";
import { Outlet } from "react-router-dom";

const ProfileRootLayout = () => {
  return (
    <>
      <ProfileNavigation />
      <Outlet />
    </>
  );
};

export default ProfileRootLayout;
