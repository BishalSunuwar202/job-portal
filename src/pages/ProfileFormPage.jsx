import React from "react";
import ProfileForm from "../components/profile/ProfileForm";
import { json,  } from "react-router-dom";

const ProfileFormPage = () => {
  return <ProfileForm />;
};

export default ProfileFormPage;

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
      "https://mero-job-bcb98-default-rtdb.firebaseio.com/ProfileData.json",
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
    window.location.reload();
  } catch (err) {
    console.error("error:", err);
  }
}
