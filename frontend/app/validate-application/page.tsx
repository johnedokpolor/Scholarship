"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/utils/axiosInstance";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import progress from "../public/progress.png";
import Image from "next/image";

const Page = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.patch("/validate", { email });
      console.log(response);
      toast.success(response.data.message);
      setEmail("");
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-white max-w-[700px]  rounded-md w-[90%] p-5 m-5 "
      >
        <h1 className="font-bold text-2xl">Validate Your Application</h1>
        <label className="text-base font-semibold">
          {" "}
          Email <br />
          <input
            type="email"
            className="border w-full font-medium outline-0 rounded border-black px-2 py-2"
            placeholder="Enter the email used during application"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            required
          />
        </label>
        <button className="bg-blue-700 px-3 py-2 cursor-pointer text-white rounded">
          {loading ? <Image src={progress} alt="spinner" /> : "Validate"}
        </button>
      </form>
    </div>
  );
};

export default Page;
