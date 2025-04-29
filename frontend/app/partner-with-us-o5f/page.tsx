"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";
import progress from "../../public/progress.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [partner, setPartner] = useState({
    name: "",
    email: "",
    number: "",
    referralCode: "",
    accountNumber: "",
    bankName: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const handleChange = (key: string, value: string) => {
    setPartner({ ...partner, [key]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (partner.number.length !== 11) {
      return toast.error("Please enter a valid 11 digit number");
    }

    try {
      await axiosInstance.post("/api/partners", partner);
      toast.success("Application submitted successfully");
      setLoading(false);
      setIsApplied(true);
    } catch (error: any) {
      console.log(error);
      if (error.message === "timeout of 10000ms exceeded") {
        setLoading(false);
        return toast.error("Request timed out, please try again");
      }
      toast.error(error?.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <div>
      {isApplied ? (
        <div className="flex items-center justify-center h-screen">
          <div className=" text-center  bg-white max-w-[700px] rounded-md w-[90%] p-5">
            <h1 className="text-2xl font-bold">Congratulations🎉</h1>
            <p>
              You&apos;ve successfully submitted your application, Please check
              your spam folder for your application mail if you don&apos;t see
              it in your inbox.🔍
              <br />
              Have any questions? Reach Out😄
            </p>
            <button className="px-3 py-2 mt-3 bg-blue-700 rounded text-white cursor-pointer">
              <Link href="https://wa.link/rn39vd">Reach Out</Link>
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white max-w-[700px] rounded-md w-[90%] p-5 m-5 "
        >
          <h1 className="font-bold text-2xl">Partner With Us</h1>
          <label className="text-base font-semibold">
            {" "}
            Full Name <br />
            <input
              type="text"
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              placeholder="Full Name"
              onChange={({ target }) => handleChange("name", target.value)}
              value={partner.name}
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
              value={partner.email}
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
              value={partner.number}
              maxLength={11}
              required
            />
          </label>
          <label className="text-base font-semibold">
            {" "}
            Refferal Code <br />
            <input
              type="text"
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              placeholder="Input your unique referral code here"
              onChange={({ target }) =>
                handleChange("referralCode", target.value)
              }
              value={partner.referralCode}
              required
            />
          </label>
          <label className="text-base font-semibold">
            {" "}
            Account Number <br />
            <input
              type="text"
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              placeholder="Input your account number here"
              onChange={({ target }) =>
                handleChange("accountNumber", target.value)
              }
              value={partner.accountNumber}
              required
            />
          </label>
          <label className="text-base font-semibold">
            {" "}
            Bank Name <br />
            <input
              type="text"
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              placeholder="The Name of your Bank"
              onChange={({ target }) => handleChange("bankName", target.value)}
              value={partner.bankName}
              required
            />
          </label>

          <label className="text-base font-semibold">
            {" "}
            Why do you want to partner with us? <br />
            <textarea
              maxLength={250}
              className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
              value={partner.reason}
              onChange={({ target }) => handleChange("reason", target.value)}
              placeholder="Why do you want to partner with us? Max length of 250 characters "
              required
            />
          </label>

          <div>
            <input type="checkbox" className="mr-2" required />
            <label>
              I confirm that I have reviewed and verified the accuracy of the
              information provided.
            </label>
          </div>
          <button className="bg-blue-700 px-3 py-2  cursor-pointer text-white rounded">
            {loading ? (
              <Image
                src={progress}
                alt="Spinner"
                className="animate-spin size-5 mx-auto"
              />
            ) : (
              "Apply"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
