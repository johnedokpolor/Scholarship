/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";

const PartnerCard = ({ partner }: { partner: any }) => {

  const deletePartner = async () => {
    try {
      const response = await axiosInstance.delete(
        `/api/partners/${partner._id}`
      );
      console.log(response.data);
      toast.success("Partner deleted successfully");
      window.location.href="/total-partners"
    } catch (error:any) {
      console.log(error.message);
    }
  };
  return (
    <div
      key={partner._id}
      className="bg-white relative  space-y-3 rounded-md p-5 pt-5"
    >
      <button
        onClick={deletePartner}
        className="bg-red-600 text-white absolute top-3 right-3 text-sm  cursor-pointer py-1 rounded-md px-3"
      >
        Delete
      </button>
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
    </div>
  );
};

export default PartnerCard;
