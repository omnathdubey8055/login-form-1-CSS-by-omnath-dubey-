var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "omias8055@gmail.com",
        pass: "jkgeuyvxhtqxrrcw",
    },
});

var mailOptions5 = {
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
					
					.button {
							background-color: green;
							color: aliceblue;
							padding: 10px;
							border-radius: 10px;
					}
			</style>
	</head>
	
	<body>
			<div class="card">
					<h3>New Bid Received</h3>
					<h>Dear,<b>Omnath Dubey</b></h><br />
					<a> New bid received for requirement.</a><br />
					<h>ID-<b>@omnathdubey,</b></h><br />
					<a> Please login to view accept bid.</a><br /><br />
					<button class="button" href="#">View Bid</button>
					<h5>
							Wish Regards <br /> Team TSS
					</h5>
			</div>
	</body>
	
	</html>`,
};

transporter.sendMail(mailOptions5, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});