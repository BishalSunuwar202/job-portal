import React from "react";
import ProfileNavigation from "../components/profile/ProfileNavigation";
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
