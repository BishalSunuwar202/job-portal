import React from "react";
import ProfileForm from "../components/profile/ProfileForm";
import { json, useLoaderData } from "react-router-dom";

const ProfileFormPage = () => {
  const profileData = useLoaderData();

  return (
    <>
      <ProfileForm profileData={profileData} />;
    </>
  );
};

export default ProfileFormPage;

export async function loader({ request, params }) {
  try {
    const response = await fetch(
      "https://mero-job-bcb98-default-rtdb.firebaseio.com/Profile/ProfileData.json"
    );
    if (!response.ok) {
      throw json({ message: "Could not fetch data", status: 500 });
    } else {
      const resData = await response.json();
      console.log(resData)
      return resData;
      // return (response.json());
    }
  } catch (error) {
    console.error("There was an error", error);
  }
}

export async function action({ request, params }) {
  const data = await request.formData();

  const profileData = {
    JobCategories: data.get("Job Categories"),
    PreferredIndustries: data.get("Preferred Industries"),
    PreferredJobTitle: data.get("Preferred Job Title"),
    LookingFor: data.get("Looking For"),
    AvailableFor: data.get("Available for"),
    Specializations: data.get("Specializations"),
    Skills: data.get("Skills"),
    ExpectedSalary: data.get("Expected Salary"),
    CurrentSalary: data.get("Current Salary"),
    CarrerObjectuveSummary: data.get("Carrer Objectuve Summary"),
    JobPreferenceLocation: data.get("Job Preference Location"),
  };

  try {
    const response = await fetch(
      "https://mero-job-bcb98-default-rtdb.firebaseio.com/Profile/ProfileData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      }
    );

    if (!response.ok) {
      throw json({ message: "could not save profile" }, { status: 500 });
    }
    // window.location.reload();
  } catch (err) {
    console.error("error:", err);
  }
}
