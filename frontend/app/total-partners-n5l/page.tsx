"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import progress from "../../public/progress.png";
import PartnerCard from "@/components/PartnerCard";

const Page = () => {
  const [partners, setPartners] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicants = async () => {
      const response = await axiosInstance.get("/api/partners");

      setPartners(response.data.partners);
      setLoading(false);
    };
    fetchApplicants();
  }, []);

  console.log(partners);

  return (
    <div className="space-y-3">
      <div className="bg-white text-center flex gap-3 items-center justify-center p-3 rounded-lg">
        <div>
          <span className="font-bold">No Of Total Partners: </span>
          {partners.length} partners
        </div>
      </div>
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
            {partners.map((partner: any) => (
              <PartnerCard key={partner._id} partner={partner} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
