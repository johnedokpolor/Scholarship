"use client";
import ApplicantCard from "@/components/ApplicantCard";
/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import progress from "../../public/progress.png";
import toast from "react-hot-toast";

const Page = () => {
  const [applicants, setApplicants] = useState([]);
  const [allApplicants, setAllApplicants] = useState([]);
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(true);
  const paidApplicants = applicants.filter((applicant: any) => applicant.paid);

  useEffect(() => {
    const fetchApplicants = async () => {
      const response = await axiosInstance.get("/api/apply");

      setApplicants(response.data.applicants);
      setAllApplicants(response.data.applicants);
      setLoading(false);
    };
    fetchApplicants();
  }, []);
  const togglePaid = () => {
    setPaid(!paid);
    if (paid) {
      return setAllApplicants(applicants);
    }
    setAllApplicants(paidApplicants);
  };
  console.log(applicants.map((applicant: any) => applicant.number));
  console.log(allApplicants);

  const sendReminder = async () => {
    try {
      const response = await axiosInstance.get("/api/reminder");
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Reminder sent successfully");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="space-y-3">
      <div className="bg-white text-center flex gap-3 items-center justify-center p-3 rounded-lg">
        <div>
          <span className="font-bold">
            No Of {paid ? "Paid" : ""} Applicants:{" "}
          </span>
          {allApplicants.length} applicants
        </div>
        <button
          onClick={togglePaid}
          className="px-3 py-1 bg-blue-700 rounded text-white cursor-pointer"
        >
          View {paid ? "All" : "Paid"} Applicants
        </button>
        <div>
          <span className="font-bold">Amount Generated: </span> ₦
          {5000 * paidApplicants.length}
        </div>
      </div>
      <button
        onClick={sendReminder}
        className="px-3 py-1 bg-blue-700 rounded text-white cursor-pointer"
      >
        Send Reminder
      </button>

      <div className="flex flex-wrap justify-center gap-4 ">
        {loading ? (
          <div className="bg-black rounded-lg">
            <Image
              src={progress}
              alt="spinner"
              className="animate-spin size-30  m-auto "
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 ">
            {allApplicants.map((applicant: any) => (
              <ApplicantCard
                key={applicant._id}
                applicant={applicant}
                total={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
