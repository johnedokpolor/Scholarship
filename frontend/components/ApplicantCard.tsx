/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdDelete, MdEdit } from "react-icons/md";

const ApplicantCard = ({
  applicant,
  total,
}: {
  applicant: any;
  total?: boolean;
}) => {
  const router = useRouter();
  const deleteApplicant = async () => {
    try {
      const response = await axiosInstance.delete(
        `/api/apply/${applicant._id}`
      );
      console.log(response.data);
      toast.success("Applicant deleted successfully");
      window.location.href = "/total-applicants-zq2";
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div
      key={applicant._id}
      className="bg-white relative max-w-md w-[90%] space-y-3 rounded-md p-5"
    >
      {total && (
        <div className="flex gap-2 absolute top-2 right-2">
          <div className="bg-blue-500 p-2  text-xl text-white rounded-md  cursor-pointer">
            <MdEdit className="   " />
          </div>
          <div className="bg-red-500 p-2  text-xl text-white rounded-md  cursor-pointer">
            <MdDelete onClick={deleteApplicant} className="   " />
          </div>
        </div>
      )}

      <p>
        <span className="font-bold">Id:</span> {applicant._id}
      </p>

      <p>
        <span className="font-bold">Full Name:</span> {applicant.name}
      </p>
      {total && (
        <div className="space-y-3">
          <p>
            <span className="font-bold">Email:</span> {applicant.email}
          </p>

          <p>
            <span className="font-bold">Number:</span> {applicant.number}
          </p>
          <p>
            <span className="font-bold">Reason:</span> {applicant.reason}
          </p>
        </div>
      )}
      <p>
        <span className="font-bold">Do you have a laptop:</span>{" "}
        {applicant.haveLaptop}
      </p>
      <p>
        <span className="font-bold">Referral Code:</span> {applicant.referredBy}
      </p>
      <p>
        <span className="font-bold">How did you hear about us :</span>{" "}
        {applicant.hearAboutUs}
      </p>

      <p>
        <span className="font-bold">Has Paid:</span>{" "}
        {applicant.paid ? "True" : "False"}
      </p>
    </div>
  );
};

export default ApplicantCard;
