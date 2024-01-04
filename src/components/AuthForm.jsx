import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const AuthForm = () => {
  return (
    <div className="mx-20 mt-6  flex">
      <div className="max-w-sm bg-sky-700">
        <h2>Register for a better opporturnity!</h2>
        <div className="flex">
          <RiCheckboxCircleFill />

          <h1>#1 Job Site of Nepal</h1>
        </div>
        <p>
          Google Analytics, Social Medias, Jobseeker and Employer have always
          put us on top!
        </p>
        <div className="flex">
          <RiCheckboxCircleFill />
          <h1>Most Trusted Job Portal in Nepal</h1>
        </div>
        <p>
          Over 400 million+ page views since the inception year 2009 over 6.5
          million+ monthly visitors and it's growing everyday.
        </p>
        <div className="flex">
          <RiCheckboxCircleFill />
          <h1>It's FREE and It will Always Be</h1>
        </div>
        <p>
          At merojob we don't put a price on opportunity, what you see is what
          you get! An average of 25,000 job opportunities to choose from. No
          registration fees. No hidden costs.
        </p>
        <div className="flex">
          <RiCheckboxCircleFill />
          <h1>We Provide Career Opportunities</h1>
        </div>
        <p>
          We are proud to have partnered with more than 40,000+ businesses and
          launched over 2,00,000+ careers and counting.
        </p>
      </div>
      <form className="max-w-sm flex flex-col">
        {/* <label htmlFor="Full Name">FullName</label> */}
        <input
          className="border-2 h-10 m-4"
          type="text"
          placeholder="Full Name"
          id="username"
          name="username"
          required
        />

        <select className="border-2 h-10 m-4 " name="jobs" id="jobs">
          <option value="select">Select preferred job category</option>
          <option value="Architechture/Interior Designing">
            Architechture/Interior Designing
          </option>
          <option value="Engineering">
            Construction/Engineering/Architecture
          </option>
          <option value="Creative">Creative/Graphic/Designing</option>
        </select>

        <input
          className="border-2 h-10 m-4 p-4"
          type="tel"
          placeholder="Mobile Number"
          id="Mobile Number"
          name="Mobile Number"
          required
        />

        <input
          className="border-2 h-10 m-4 p-4"
          type="email"
          placeholder="Email Addresss"
          id="email"
          name="email"
          required
        />

        <input
          className="border-2 h-10 m-4 p-4"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
        />

        <p className="m-4">
          By clicking on 'Create JobSeeker Account' below your are agreeing to
          the terms and privacy of merojob
        </p>

        <button>Create Jobseeker Account</button>
      </form>
    </div>
  );
};

export default AuthForm;
