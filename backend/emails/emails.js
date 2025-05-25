import nodemailer from "nodemailer";
import {
  APPLICATION_EMAIL_TEMPLATE,
  PARTNERSHIP_EMAIL_TEMPLATE,
  PARTNERSHIP_REPORT_EMAIL_TEMPLATE,
  PAYMENT_CONFIRMATION_EMAIL_TEMPLATE,
  SCHOLARSHIP_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

var transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: "465",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
export const sendApplicationEmail = (email, name) => {
  var mailOptions = {
    from: `"GLacademy" ${process.env.EMAIL}`,
    to: `${name} ${email}`,
    subject: "Application Confirmed",
    html: APPLICATION_EMAIL_TEMPLATE.replace("{APPLICANT}", name),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendPartnershipEmail = (
  email,
  name,
  referralCode,
  accountNumber,
  bankName
) => {
  var mailOptions = {
    from: `"GLacademy" ${process.env.EMAIL}`,
    to: `${name} ${email}`,
    subject: "Partnership Confirmed",
    html: PARTNERSHIP_EMAIL_TEMPLATE.replace("{APPLICANT}", name)
      .replace("{REFERRALCODE}", referralCode)
      .replace("{BANKNAME}", bankName)
      .replace("{ACCOUNTNAME}", name)
      .replace("{ACCOUNTNUMBER}", accountNumber),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendPaymentConfirmationmail = (
  email,
  name,
  referralCode,
  accountNumber,
  bankName
) => {
  var mailOptions = {
    from: `"GLacademy" ${process.env.EMAIL}`,
    to: `${name} ${email}`,
    subject: "Payment Confirmation",
    html: PAYMENT_CONFIRMATION_EMAIL_TEMPLATE.replace("{PARTNER}", name)
      .replace("{REFERRALCODE}", referralCode)
      .replace("{BANKNAME}", bankName)
      .replace("{ACCOUNTNAME}", name)
      .replace("{ACCOUNTNUMBER}", accountNumber),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendPartnershipReportEmail = (email, name) => {
  var mailOptions = {
    from: `"GLacademy" ${process.env.EMAIL}`,
    to: `"GLacademy" "johnedokpolor@gmail.com"`,
    subject: "Partnership Report",
    html: PARTNERSHIP_REPORT_EMAIL_TEMPLATE.replace("{NAME}", name).replace(
      "{EMAIL}",
      email
    ),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const sendScholarshipEmail = (email, name) => {
  var mailOptions = {
    from: `"GLacademy" ${process.env.EMAIL}`,
    to: `${name} ${email}`,
    subject: "Award Notifification",
    html: SCHOLARSHIP_EMAIL_TEMPLATE.replace("{NAME}", name).replace(
      "{EMAIL}",
      email
    ),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
