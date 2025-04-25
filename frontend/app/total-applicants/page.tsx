"use client";
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

  return (
    <div className="space-y-3">
      <div className="bg-white text-center p-3 rounded-lg">
        <span className="font-bold">No Of Applicants: </span>
        {applicants.length} applicants
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
        {applicants.map((applicant: any) => (
          <div
            key={applicant._id}
            className="bg-white max-w-md w-[90%] space-y-3 rounded-md p-5"
          >
            <p>
              <span className="font-bold">Id:</span> {applicant._id}
            </p>
            <p>
              <span className="font-bold">Name:</span> {applicant.name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {applicant.email}
            </p>

            <p>
              <span className="font-bold">Number:</span> {applicant.number}
            </p>
            <p>
              <span className="font-bold">Do you have a laptop:</span>{" "}
              {applicant.haveLaptop}
            </p>
            <p>
              <span className="font-bold">Who referred you:</span>{" "}
              {applicant.referredBy}
            </p>
            <p>
              <span className="font-bold">How did you hear about us :</span>{" "}
              {applicant.hearAboutUs}
            </p>
            <p>
              <span className="font-bold">Reason:</span> {applicant.reason}
            </p>
            <p>
              <span className="font-bold">Has Paid:</span>{" "}
              {applicant.paid ? "True" : "False"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
