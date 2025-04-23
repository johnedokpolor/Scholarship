"use client";
import { useState } from "react";

const page = () => {
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    number: "",
    haveLaptop: "",
    hearAboutUs: "",
    referredBy: "",
    reason: "",
  });

  const handleSubmit = () => {};
  return (
    <div>
      <h1>FRONTEND SCHOLARSHIP BOOTCAMP🎓🧑🏻‍💻</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name
          <input type="text" placeholder="Full Name" />
        </label>
      </form>
    </div>
  );
};

export default page;
