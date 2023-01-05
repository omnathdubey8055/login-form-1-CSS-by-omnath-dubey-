var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "omias8055@gmail.com",
    pass: "jkgeuyvxhtqxrrcw",
  },
});

var mailOptions2 = {
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
								background-color: #1b90bb;
								color: #ffffff;
						}
						
						.button {
								background-color: green;
								color: aliceblue;
								padding: 10px;
								border-radius: 10px;
								border-color: #ffffff;
						}
						
						#simple_table {
								font-family: arial, sans-serif;
								border-collapse: collapse;
								width: 100%;
								background-color: #ffffff;
								color: black;
								text-align: center;
						}
						
						#simple_table td,
						#simple_table th {
								text-align: center;
								padding: 8px;
								border: 1px solid #808080;
						}
						
						#simple_table tr:nth-child(even) {
								background-color: #dddddd;
						}
						
						#simple_table tr:hover {
								background-color: #ffff99;
						}
				</style>
		</head>
		
		<body>
				<div class="card">
						<h3>Requirement ID</h3>
						<p>New requirement created in system details are as follows.</p>
		
						<p>Please login to submit your response at the earliest.</p>
		
						<button class="button" href="#">Submit Response</button>
				</div>
				<table id="simple_table">
						<tr>
								<th>Buyer</th>
								<th>(.....................)</th>
						</tr>
		
						<tr>
								<td>Yarntype</td>
								<td>(....................)</td>
						</tr>
						<tr>
								<td>Delivery Period</td>
								<td>(....................)</td>
						</tr>
						<tr>
								<td>Required Qty</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>Unit</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>CSP</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>Target Price</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>Payment Terms</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>Test Report</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>BCI Certificate</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>Delivery Location</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>Target Mills</td>
								<td>(.....................)</td>
						</tr>
						<tr>
								<td>Remarks</td>
								<td>(.....................)</td>
						</tr>
				</table>
		</body>
		
		</html>`,
};

transporter.sendMail(mailOptions2, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
