import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export async function POST(req) {
//   const { body } = req;
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   var mailOptions = {
//     from: body.email,
//     to: process.env.MAIL_TO,
//     subject: "Contact Email",
//     text: body.message,
//     html: `<h4>Name : ${body.name}</h5> <p>Message : ${body.message}</p>`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       return new NextResponse.json(
//         JSON.stringify({ message: "Something went wrong!" })
//       );
//     } else {
//       return new NextResponse.json(JSON.stringify({ message: "success!" }));
//     }
//   });
// }

export async function POST(request) {
  const { name, email, message } = await request.json();
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  console.log(email);
  var mailOptions = {
    from: email,
    to: process.env.MAIL_TO,
    subject: "Contact Email",
    text: message,
    html: `<h4>Name : ${name}</h5> <p>Message : ${message} email:${email}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({ success: "true", messsage: "Successfully subitted." }),
      {
        status: 200,
        statusText: "Success",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ success: "true", messsage: "Successfully subitted." }),
      {
        status: 200,
        statusText: "Success",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
