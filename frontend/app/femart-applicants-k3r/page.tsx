"use client";
import ApplicantCard from "@/components/ApplicantCard";
/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    const fetchApplicants = async () => {
      const response = await axiosInstance.get("/apply");

      setApplicants(response.data.applicants);
    };
    fetchApplicants();
  }, []);
  const femart = applicants.filter(
    (applicant: any) => applicant.referredBy === "FEMart"
  );
  return (
    <div className="space-y-3">
      <div className="bg-white text-center p-3 rounded-lg">
        <span className="font-bold">No Of Applicants: </span>
        {femart.length} applicants
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
        {femart.map((applicant: any) => (
          <ApplicantCard key={applicant._id} applicant={applicant} />
        ))}
      </div>
    </div>
  );
};

export default Page;
