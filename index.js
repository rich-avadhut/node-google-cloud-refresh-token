var express = require("express");

var {google} = require("googleapis");
var app = express();

app.get('/google-cloud/refresh-token', function (req, res) {
  var serviceAccount = require(__dirname+"/key/gcloud/credentials.json"); // Google Cloud key file path
  var scopes = [
    "https://www.googleapis.com/auth/cloud-platform"
  ];
  var jwtClient = new google.auth.JWT(
    serviceAccount.client_email,
    null,
    serviceAccount.private_key,
    scopes
  );
  jwtClient.authorize(function(error, tokens) {
    if (error) {
      res.json({ success: false, msg: "Error while requesting to generate refresh token.",error:error });
    } else if (tokens.access_token === null) {
      res.json({ success: false, msg: "You don't have permission to generate access tokens." });
    } else {
      var accessToken = tokens.access_token;
      res.json({ success: true, token: accessToken });
    }
  });
});
var server = app.listen(8080, function () {
    console.log("listening..");
})
