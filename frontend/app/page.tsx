"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [applicant, setApplicant] = useState({
    name: "",
    email: "",
    number: "",
    institution: "",
    haveLaptop: "",
    hearAboutUs: "",
    referredBy: "",
    reason: "",
  });
  const handleChange = (key: string, value: string) => {
    setApplicant({ ...applicant, [key]: value });
  };
  const handleSubmit = () => {};
  console.log(applicant);

  return (
    <div className="bg-white max-w-[700px] w-[90%] p-5">
      <h1 className="font-bold text-2xl">
        GLacademy's FRONTEND SCHOLARSHIP BOOTCAMP🎓🧑🏻‍💻
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
        <label className="text-base font-semibold">
          {" "}
          Name <br />
          <input
            type="text"
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            placeholder="Full Name"
            onChange={({ target }) => handleChange("name", target.value)}
            value={applicant.name}
          />
        </label>
        <label className="text-base font-semibold">
          {" "}
          Email <br />
          <input
            type="email"
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            placeholder="Enter a Valid Email Address"
            onChange={({ target }) => handleChange("email", target.value)}
            value={applicant.email}
          />
        </label>
        <label className="text-base font-semibold">
          {" "}
          WhatsApp Number <br />
          <input
            type="number"
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            placeholder="Enter a Valid WhatsApp Number"
            onChange={({ target }) => handleChange("number", target.value)}
            value={applicant.number}
          />
        </label>
        <label className="text-base font-semibold">
          {" "}
          Institution <br />
          <input
            type="text"
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            placeholder="Your Institution leave N/A if none"
            onChange={({ target }) => handleChange("institution", target.value)}
            value={applicant.institution}
          />
        </label>
        <label className="text-base font-semibold">
          {" "}
          Do you have a laptop? <br />
          <select
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            value={applicant.haveLaptop}
            onChange={({ target }) => handleChange("haveLaptop", target.value)}
          >
            <option>--Please choose an option--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label className="text-base font-semibold">
          {" "}
          How did you hear about us ? <br />
          <select
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            value={applicant.hearAboutUs}
            onChange={({ target }) => handleChange("hearAboutUs", target.value)}
          >
            <option>--Please choose an option--</option>
            <option value="Facebook">Facebook</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="text-base font-semibold">
          {" "}
          Who referred you? <br />
          <select
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            value={applicant.referredBy}
            onChange={({ target }) => handleChange("referredBy", target.value)}
          >
            <option>--Please choose an option--</option>
            <option value="Mr Aderoju">Mr Aderoju</option>
            <option value="Mr Nuhu">Mr Nuhu</option>
            <option value="Mrs Abdulfattah">Mrs Abdulfattah</option>
            <option value="Mrs Joy Konyeha">Mrs Joy Konyeha</option>
          </select>
        </label>
        <label className="text-base font-semibold">
          {" "}
          Why should we choose you? <br />
          <textarea
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            value={applicant.reason}
            onChange={({ target }) => handleChange("reason", target.value)}
            placeholder="Among other participants why should we choose you?"
          />
        </label>
      </form>
    </div>
  );
}
