import React from "react";
import ProfileForm from "../components/profile/ProfileForm";

const ProfileFormPage = () => {
  return <ProfileForm />;
};

export default ProfileFormPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const profileData = {
    jobCategories: data.get("Job Categories"),
    preferredIndustries: data.get("preferred Industries")
  };

  const response = await fetch(
    "https://mero-job-bcb98-default-rtdb.firebaseio.com/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );
}
