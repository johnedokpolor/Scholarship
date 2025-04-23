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
        <strong>FRONTEND SCHOLARSHIP BOOTCAMP</strong>! We're thrilled to see
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
