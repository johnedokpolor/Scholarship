"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import ApplicantCard from "@/components/ApplicantCard";

import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import progress from "../../public/progress.png";

const Page = () => {
  const [applicants, setApplicants] = useState([]);
  const [aderoju, setAderoju] = useState([]);
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(true);

  const paidApplicants = aderoju.filter((applicant: any) => applicant.paid);

  useEffect(() => {
    const fetchApplicants = async () => {
      const response = await axiosInstance.get("/apply");

      setApplicants(response.data.applicants);
      setAderoju(
        response.data.applicants.filter(
          (applicant: any) => applicant.referredBy === "ADEROJU"
        )
      );
    };
    setLoading(false);
    fetchApplicants();
  }, []);
  const togglePaid = () => {
    setPaid(!paid);
    if (paid) {
      return setAderoju(
        applicants.filter(
          (applicant: any) => applicant.referredBy === "ADEROJU"
        )
      );
    }
    setAderoju(paidApplicants);
  };

  return (
    <div className="space-y-3">
      <div className="bg-white text-center flex gap-3 items-center justify-center p-3 rounded-lg">
        <div>
          <span className="font-bold">
            No Of Aderoju&apos;s {paid ? "Paid" : ""} Applicants:{" "}
          </span>
          {aderoju.length} applicants
        </div>
        <button
          onClick={togglePaid}
          className="px-3 py-1 bg-blue-700 rounded text-white cursor-pointer"
        >
          View {paid ? "All" : "Paid"} Applicants
        </button>
      </div>
      {loading ? (
        <Image
          src={progress}
          alt="spinner"
          className="animate-spin size-30  m-auto "
        />
      ) : (
        <div className="flex flex-wrap justify-center gap-4 ">
          {aderoju.map((applicant: any) => (
            <ApplicantCard key={applicant._id} applicant={applicant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
