var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "omias8055@gmail.com",
        pass: "jkgeuyvxhtqxrrcw",
    },
});

var mailOptions10 = {
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
								background-color: rgb(12, 101, 129);
								color: aliceblue;
								padding: 10px;
								border-radius: 10px;
						}
				</style>
		</head>
		
		<body>
				<div class="card">
						<h3>New requirement intimation</h3>
						<h> Hello Dear,<b>{NAME}</b></h><br />
						<a>Welcome On Board!</a><br />
						<a>Here is a requirement that might be of your interest, kindly go through
						the details</a
					><br />
					<h
						>{...........................................................................................................................................
						} </h
					><br />
					<button class="button">BID NOW</button>
		
					<a></a>
				</div>
		</body>
		
		</html>`,
};

transporter.sendMail(mailOptions10, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});