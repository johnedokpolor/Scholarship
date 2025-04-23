import nodemailer from "nodemailer";
import { APPLICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

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
