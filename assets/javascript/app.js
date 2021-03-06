var contactAddress = "mark.bullard42@gmail.com";
var queryString = require("querystring"); // provides utilities for parsing and formatting URL query strings

// helps send the email for the user upon clicking submit
var nodemailer = require("nodemailer").createTransport({
  service: "gmail",
  auth: {
    user: process.env.gmail_address,
    pass: process.env.gmail_password,
  },
});

module.exports.contact = (event, context, callback) => {
  var body = querystring.parse(event.body);
  nodemailer.sendMail(
    {
      from: body.from,
      to: [contactAddress],
      subject: body.subject || "[No subject]",
      html: body.message || "[No message]",
    },
    function (err, info) {
      if (err) return callback(err);
      callback(null, { statusCode: 200, body: "Success!" });
    }
  );
};
