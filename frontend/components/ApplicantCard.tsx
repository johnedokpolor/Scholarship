/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";


const ApplicantCard = ({
  applicant,
  total,
}: {
  applicant: any;
  total?: boolean;
}) => {

  const deleteApplicant = async () => {
    try {
      const response = await axiosInstance.delete(
        `/api/apply/${applicant._id}`
      );
      console.log(response.data);
      toast.success("Applicant deleted successfully");
      window.location.href="/total-applicants-zq2"
    } catch (error:any) {
      console.log(error.message);
    }
  };
  return (
    <div
      key={applicant._id}
      className="bg-white relative max-w-md w-[90%] space-y-3 rounded-md p-5"
    >
         <button
        onClick={deleteApplicant}
        className="bg-red-600 text-white absolute top-3 right-3 text-sm  cursor-pointer py-1 rounded-md px-3"
      >
        Delete
      </button>
      {total && (
        <p>
          <span className="font-bold">Id:</span> {applicant._id}
        </p>
      )}
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
