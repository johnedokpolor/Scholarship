/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";

const PartnerCard = ({ partner }: { partner: any }) => {
  const router = useRouter();

  // Function to delete a partner
  const deletePartner = async () => {
    try {
      const response = await axiosInstance.delete(
        `/api/partners/${partner._id}`
      );
      console.log(response.data);
      toast.success("Partner deleted successfully");
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div
      key={partner._id}
      className="bg-white relative w-[90%] max-w-md  space-y-3 rounded-md p-5 pt-5"
    >
      <div className="flex gap-2 absolute top-2 right-2">
        <div className="bg-blue-500 p-2  text-xl text-white rounded-md  cursor-pointer">
          <MdEdit className="   " />
        </div>
        <div className="bg-red-500 p-2  text-xl text-white rounded-md  cursor-pointer">
          <MdDelete onClick={deletePartner} className="   " />
        </div>
      </div>
      <p>
        <span className="font-bold">Id:</span> {partner._id}
      </p>

      <p>
        <span className="font-bold">Full Name:</span> {partner.name}
      </p>

      <p>
        <span className="font-bold">Email:</span> {partner.email}
      </p>

      <p>
        <span className="font-bold">Number:</span> {partner.number}
      </p>
      <p>
        <span className="font-bold">Referral Code:</span> {partner.referralCode}
      </p>
      <p>
        <span className="font-bold">Bank Name:</span> {partner.bankName}
      </p>
      <p>
        <span className="font-bold">Account Number:</span>{" "}
        {partner.accountNumber}
      </p>
      <p>
        <span className="font-bold">Reason:</span> {partner.reason}
      </p>
      <p>
        <span className="font-bold">Amount Generated:</span> ₦
        {partner.amountGenerated}
      </p>
    </div>
  );
};

export default PartnerCard;
