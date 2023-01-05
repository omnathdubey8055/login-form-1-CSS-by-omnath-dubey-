var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omias8055@gmail.com",
    pass: "jkgeuyvxhtqxrrcw",
  },
});

var mailOptions1 = {
  from: "omias8055@gmail.com",
  to: "omias8055@gmail.com",
  subject: "THE CURRENT TIMES NEWS WEBSITE",
  html: `<!DOCTYPE html>
	<html lang="en">
	
	<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<style>
					.card {
							text-align: center;
							width: 100%;
							background-color: rgb(223, 243, 223);
					}
			</style>
	</head>
	
	<body>
			<div class="card">
					<h3>Registration Request</h3>
					<h>Dear,<b>Omnath Dubey</b></h><br />
					<a> We Have Received Your Registration Request..</a><br />
					<a>Company Name- <b>THE CURRENT TIMES</b> </a><br />
					<a>Mobile No-<b>9838381169</b></a>
					<p>Thanks For Showing Intrest We Will Back To You Shortly...</p>
					<h5>
							Wish Regards <br /> Team TSS
					</h5>
			</div>
	</body>
	
	</html>`,
};

transporter.sendMail(mailOptions1, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
