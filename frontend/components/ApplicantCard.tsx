/* eslint-disable @typescript-eslint/no-explicit-any */

const ApplicantCard = ({ applicant }: { applicant: any }) => {
  return (
    <div
      key={applicant._id}
      className="bg-white max-w-md w-[90%] space-y-3 rounded-md p-5"
    >
      <p>
        <span className="font-bold">Id:</span> {applicant._id}
      </p>
      <p>
        <span className="font-bold">Full Name:</span> {applicant.name}
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
        <span className="font-bold">Referral Code:</span> {applicant.referredBy}
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
  );
};

export default ApplicantCard;
