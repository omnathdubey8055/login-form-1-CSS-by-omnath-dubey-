var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "omias8055@gmail.com",
        pass: "jkgeuyvxhtqxrrcw",
    },
});

var mailOptions3 = {
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
					<h3>Buyer Registration Completed</h3>
					<h>Dear,<b>Omnath Dubey</b><br /></h>
					<a> Your buyer registration required is accepted.<br /></a><br />
					<a class="color">Login ID - <b>@omnath</b> </a><br /><br />
					<a class="color">Password - <b>xyz123</b></a>
					<h5>
							Wish Regards <br /> Team TSS
					</h5>
			</div>
	</body>
	
	</html>`,
};

transporter.sendMail(mailOptions3, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});