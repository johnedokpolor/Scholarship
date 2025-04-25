"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

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
  const [loading, setLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const handleChange = (key: string, value: string) => {
    setApplicant({ ...applicant, [key]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (applicant.number.length !== 11) {
      toast.error("Please enter a valid 11 digit number");
    }
    if (
      applicant.haveLaptop === "" ||
      applicant.hearAboutUs === "" ||
      applicant.referredBy === ""
    ) {
      toast.error("Please select all dropdown fields");
    }

    try {
      await axiosInstance.post("/apply", applicant);
      toast.success("Application submitted successfully");
      setLoading(false);
      setIsApplied(true);
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      if (axiosError.message === "timeout of 10000ms exceeded") {
        setLoading(false);
        return toast.error("Request timed out, please try again");
      }
      toast.error(axiosError?.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };
  const handleLinkClick = (link: string) => {
    // opens url in a new window tab
    window.open(link, "_blank");
  };

  return (
    <div>
      {isApplied ? (
        <div className="flex items-center justify-center h-screen">
          <div className=" text-center  bg-white max-w-[700px] rounded-md w-[90%] p-5">
            <h1 className="text-2xl font-bold">Congratulations🎉</h1>
            <p>
              You successfully applied for the scholarship, an application mail
              will be sent to you shortly.📧
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white max-w-[700px] rounded-md w-[90%] p-5 m-5 "
        >
          <h1 className="font-bold text-2xl">
            GLacademy&apos;s FRONTEND SCHOLARSHIP BOOTCAMP🎓🧑🏻‍💻
          </h1>
          <label className="text-base font-semibold">
            {" "}
            Name <br />
            <input
              type="text"
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              placeholder="Full Name"
              onChange={({ target }) => handleChange("name", target.value)}
              value={applicant.name}
              required
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
              maxLength={11}
              required
            />
          </label>
          <label className="text-base font-semibold">
            {" "}
            Institution <br />
            <input
              type="text"
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              placeholder="Your Institution leave N/A if none"
              onChange={({ target }) =>
                handleChange("institution", target.value)
              }
              value={applicant.institution}
              required
            />
          </label>
          <label className="text-base font-semibold">
            {" "}
            Do you have a laptop? <br />
            <select
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              value={applicant.haveLaptop}
              onChange={({ target }) =>
                handleChange("haveLaptop", target.value)
              }
              required
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
              onChange={({ target }) =>
                handleChange("hearAboutUs", target.value)
              }
              required
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
              onChange={({ target }) =>
                handleChange("referredBy", target.value)
              }
              required
            >
              <option>--Please choose an option--</option>
              <option value="Mr Aderoju">Mr Aderoju</option>
              <option value="Mr Nuhu">Mr Nuhu</option>
              <option value="Mrs Abdulfattah">Mrs Abdulfattah</option>
              <option value="Mrs Joy Konyeha">Mrs Joy Konyeha</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className="text-base font-semibold">
            {" "}
            Why should we choose you? <br />
            <textarea
              maxLength={250}
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              value={applicant.reason}
              onChange={({ target }) => handleChange("reason", target.value)}
              placeholder="Among other participants why should we choose you? Max length of 250 characters "
              required
            />
          </label>
          <label className="text-base font-semibold">
            Want to increase your chances? Follow our socials
            <ul className="list-disc pl-5">
              <li
                onClick={() =>
                  handleLinkClick("https://x.com/glacademy_code?s=09")
                }
              >
                <a className="underline text-blue-700 cursor-pointer">
                  Twitter
                </a>
              </li>
              <li
                onClick={() =>
                  handleLinkClick("https://www.instagram.com/glacademy_code")
                }
              >
                <a className="underline text-blue-700 cursor-pointer">
                  Instagram
                </a>
              </li>
            </ul>
          </label>
          <div>
            <input type="checkbox" className="mr-2" required />
            <label>
              I confirm that I have reviewed and verified the accuracy of the
              information provided.
            </label>
          </div>
          <button className="bg-blue-700 px-3 py-2 cursor-pointer text-white rounded">
            {loading ? "Applying..." : "Apply"}
          </button>
        </form>
      )}
    </div>
  );
}
