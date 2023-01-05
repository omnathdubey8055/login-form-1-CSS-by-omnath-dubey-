var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "omias8055@gmail.com",
        pass: "jkgeuyvxhtqxrrcw",
    },
});

var mailOptions8 = {
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
					<h3>Registration Approval</h3>
					<h> Hello Dear,<b>{NAME}</b></h><br />
					<a>Welcome On Board!</a><br />
					<a>Username: […] <br />
					Password: […]</a
				><br />
				<h>Here is a video tutorial about how to use our services. </h><br />
				<a
					>For support, feel free to mail us at
					support@textilesourcingsolutions.in</a
				>
				<a></a>
			</div>
	</body>
	
	</html>`,
};

transporter.sendMail(mailOptions8, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});