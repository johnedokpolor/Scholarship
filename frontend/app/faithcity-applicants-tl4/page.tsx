"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApplicantCard from "@/components/ApplicantCard";

import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import progress from "../../public/progress.png";

const Page = () => {
  const [applicants, setApplicants] = useState([]);
  const [faithcity, setFaithcity] = useState([]);
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(true);

  const paidApplicants = faithcity.filter((applicant: any) => applicant.paid);

  useEffect(() => {
    const fetchApplicants = async () => {
      const response = await axiosInstance.get("/api/apply");

      setApplicants(response.data.applicants);
      setFaithcity(
        response.data.applicants.filter(
          (applicant: any) => applicant.referredBy === "FAITHCITY"
        )
      );
    };
    setLoading(false);
    fetchApplicants();
  }, []);
  const togglePaid = () => {
    setPaid(!paid);
    if (paid) {
      return setFaithcity(
        applicants.filter(
          (applicant: any) => applicant.referredBy === "FAITHCITY"
        )
      );
    }
    setFaithcity(paidApplicants);
  };

  return (
    <div className="space-y-3">
      <div className="bg-white text-center flex gap-3 items-center justify-center p-3 rounded-lg">
        <div>
          <span className="font-bold">
            No Of Faithcity&apos;s {paid ? "Paid" : ""} Applicants:{" "}
          </span>
          {faithcity.length} applicants
        </div>
        <button
          onClick={togglePaid}
          className="px-3 py-1 bg-blue-700 rounded text-white cursor-pointer"
        >
          View {paid ? "All" : "Paid"} Applicants
        </button>
        <div>
          <span className="font-bold">Amount Generated: </span> ₦
          {250 * paidApplicants.length}
        </div>
      </div>
      {loading ? (
        <div className="bg-black rounded-lg ">
          <Image
            src={progress}
            alt="spinner"
            className="animate-spin size-30  m-auto "
          />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 ">
          {faithcity.map((applicant: any) => (
            <ApplicantCard key={applicant._id} applicant={applicant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
