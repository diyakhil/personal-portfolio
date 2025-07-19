import nodemailer from "nodemailer";

export async function POST(req) {
  //NextRequest doesn't expose a body property like Express or the Pages Router.
  //instead .json() and some other methods give access to the body directly
  //this is why we do req.json() instead of req.body'
  let data;

  //have to wrap this in try catch otherwise errors out on first load - have to investigate this
  try {
    data = await req.json();
  } catch (err) {
    console.error("Error parsing JSON:", err, req);
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: data.email,
      to: process.env.EMAIL_USER,
      subject: `Email from ${data.name} <${data.email}>`,
      text: data.message,
      html: `<p>${data.message}</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent" }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Email failed" }), {
      status: 500,
    });
  }
}
