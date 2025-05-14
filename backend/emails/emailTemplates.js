export const APPLICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Application Received</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        line-height: 1.6;
        background-color: #f4f4f4;
      }
      .container {
        width: full;
        background-color:white; 
        padding: 25px 10px;
        margin: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }
      h1 {
        color: #4caf50;
      }
      p {
        margin-bottom: 16px;
      }
      .footer {
        font-size: 12px;
        color: #888;
        margin-top: 40px;
        text-align: center;
        color: #888;
      }
      ul {
        padding-left: 20px;
      }
      .join-link {
        display: flex;
        justify-content: center;
        width: fit-content;
        background-color: rgb(6, 85, 6);
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 7px;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
    <h1>Your Application Is In 🎉</h1>
      <p>Hi <strong>{APPLICANT}</strong>,</p>
      <p>
        ✅ Thank you for applying to our
        <strong>FRONTEND SCHOLARSHIP BOOTCAMP</strong>! We're filled with joy to see
        your passion for software development and to have your application in
        our review queue.
      </p>

      <p>
        ✨ This isn’t just another form you filled out — it’s the first step
        toward something potentially life-changing. You’ve shown initiative,
        ambition, and a desire to grow — and that already sets you apart.
      </p>

      <p>
        🔍 Over the coming days, our selection team will begin reviewing
        applications. We're not just looking at backgrounds or grades — we’re
        looking for <b>potential</b>, <b>passion</b>, and <b>drive</b>. And
        here's the exciting part:
      </p>

      <p>
        <em
          >Some of the most promising candidates will be handpicked to move
          forward — but only a limited number of spots are available.</em
        >
        👀
      </p>

      <p>
        🧠 We'll be watching closely for those who truly stand out — not just on
        paper, but in purpose.
      </p>


      <p>
        If you’re selected, we’ll notify you by email with the next steps. Until
        then, keep your inbox open — and your fingers crossed. 🤞
      </p>
      <p>
        🔔 <strong>Want to increase your chances?</strong> We’re prioritizing
        applicants who stay connected! Those who follow our social media pages
        will be considered <strong>first</strong> during the shortlisting
        process. Why? Because we believe the most committed learners stay
        engaged — and we want to support those who are already part of our
        growing community. 💬📱
      </p>
      <ul>
        <li><a href="https://x.com/glacademy_code?s=09">Twitter</a></li>
        <li><a href="https://www.instagram.com/glacademy_code/">Instagram</a></li>
      </ul>

      <p>Have any questions? Feel free to join our community and ask.</p>

      <a href="https://chat.whatsapp.com/E2lFh78iYeFDObMT6Z2FH7" class="join-link"> Click Here to Join</a>
      <p>
        Wishing you all the best,
        <br />
        GLacademy Team.
      </p>

      <div class="footer">
        <div>
          <p>
            This is an automated message, please do not reply to this email.
          </p>
        </div>
    </div>
  </body>
</html>
`;
export const PARTNERSHIP_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Partnership Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        line-height: 1.6;
        background-color: #f4f4f4;
      }
      .container {
        width: full;
        background-color:white; 
        padding: 25px 10px;
        margin: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }
      h1 {
        color: #4caf50;
      }
      p {
        margin-bottom: 16px;
      }
      .footer {
        font-size: 12px;
        color: #888;
        margin-top: 40px;
        text-align: center;
        color: #888;
      }
      ul {
        padding-left: 20px;
      }
      .join-link {
        display: flex;
        justify-content: center;
        width: fit-content;
        background-color: rgb(6, 85, 6);
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 7px;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
    <h1>Partnership Confirmation 🎉</h1>
      <p>Hi Partner <strong>{APPLICANT}</strong>,</p>
      <p>
        ✅ Thank you for partnering with us! We're filled with joy to collaborate and work together to create opportunities and make a lasting impact in the tech space.
      </p>

     
      <p>
        🔔 Moving forward these are the steps ahead:
      </p>
      <ul>
        <li>You send the link to your applicants.</li>
        <li>They apply for the scholarship using your unique refferal code "<b>{REFERRALCODE}</b>"</li>
        <li>They secure their slot by making necessary payment.</li>
        <li>You get credited within 7 days after classes begin.</li>
      </ul>
      <p>
       💳 Your payment details are as follows:
      </p>
      <ul>
        <li><b>Account Name: </b>{ACCOUNTNAME}</li>
        <li><b>Account Number: </b>{ACCOUNTNUMBER}</li>
        <li><b>Bank Name: </b>{BANKNAME}</li>
      </ul>

      <p>Have any questions? Feel free to contact us.</p>

      <p>
        Wishing you all the best,
        <br />
        GLacademy Team.
      </p>

      <div class="footer">
        <div>
          <p>
            This is an automated message, please do not reply to this email.
          </p>
        </div>
    </div>
  </body>
</html>
`;
export const PARTNERSHIP_REPORT_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Partnership Report</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        line-height: 1.6;
        background-color: #f4f4f4;
      }
      .container {
        width: full;
        background-color:white; 
        padding: 25px 10px;
        margin: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }
      h1 {
        color: #4caf50;
      }
      p {
        margin-bottom: 16px;
      }
      .footer {
        font-size: 12px;
        color: #888;
        margin-top: 40px;
        text-align: center;
        color: #888;
      }
      ul {
        padding-left: 20px;
      }
      .join-link {
        display: flex;
        justify-content: center;
        width: fit-content;
        background-color: rgb(6, 85, 6);
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 7px;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
    <h1>Partnership Report</h1>
      <p>Hi Partner <strong>Jason</strong>,</p>
      <p>
        ✅ A new partner has sent his application with details as follows:
      </p>
      <ul>
        <li><b>Name: </b>{NAME}</li>
        <li><b>Email: </b>{EMAIL}</li>
      </ul>

      <a href="https://techscholarship.vercel.app/total-partners-n5l" classname="join-link">View Partner</a>

    

      <div class="footer">
        <div>
          <p>
            This is an automated message, please do not reply to this email.
          </p>
        </div>
    </div>
  </body>
</html>
`;
export const SCHOLARSHIP_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Scholarship Award Notification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        line-height: 1.6;
        background-color: #f4f4f4;
      }
      .container {
        width: full;
        background-color:white; 
        padding: 25px 10px;
        margin: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }
      h1 {
        color: #4caf50;
      }
      p {
        margin-bottom: 16px;
      }
      .footer {
        font-size: 12px;
        color: #888;
        margin-top: 40px;
        text-align: center;
        color: #888;
      }
      ul {
        padding-left: 20px;
      }
      .join-link {
        display:block;
        background-color: rgb(6, 85, 6);
        color: white;
        margin-top:10px;
        width: fit-content;
        text-decoration: none;
        padding: 10px;
        border-radius: 7px;
      }
    </style>
  </head>
  <body>
    <div class="container">
    <h1>Scholarship Award Notification</h1>
      <p>Hi <strong>{NAME}</strong>,</p>
      <p>
      We are glad to inform you that you have been selected as the recipient of the <b>FRONTEND SCHOLARSHIP BOOTCAMP</b> award!
      </p>

      <p><strong>Important: Please note that to secure your scholarship, you must confirm your acceptance within the next 7 days. The deadline to secure your slot is 20th May, 2025.</strong> If we do not hear from you by then, unfortunately, we may need to offer the scholarship to another candidate.</p>

      <a class="join-link" href="https://techscholarship.vercel.app/secure-slot" classname="join-link">Secure Slot 
      for Nigerians</a>
      <a class="join-link" href="https://selar.com/78777r" classname="join-link">Secure Slot For Non Nigerians</a>

      <p>Please let us know if you have any questions or need additional information regarding the next steps. We’ll be happy to assist you as you prepare to use this scholarship to further your studies.</p>
        <p>Once again, congratulations — we look forward to seeing all the amazing things you’ll accomplish!</p>

      <a class="join-link" href="https://techscholarship.vercel.app/secure-slot" classname="join-link">Secure Slot For Nigerians</a>

      <a class="join-link" href="https://selar.com/78777r" classname="join-link">Secure Slot For Non Nigerians</a>
    
      <div class="footer">
        <div>
          <p>
            This is an automated message, please do not reply to this email.
          </p>
        </div>
    </div>
  </body>
</html>
`;
