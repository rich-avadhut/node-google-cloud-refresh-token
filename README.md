# node-google-cloud-refresh-token
Que:
**How to get the google cloud access token using node. (Node,npm,google cloud)**

Ans:
**To get the refresh token of google cloud while using the google service eg. Dialogflow, Google Auth etc**

### Follow are the steps
1) Install Express using
   - _**npm install express**_

Express allows you to get query params and URI easily. You can create route using Express etc.


2) Install Google API using
   - _**npm install googleapis**_

googleapis allows to make the authentication and generate the access/refresh token using the Google Project's Private key.


3) Run 
   - _**node index.js**_
   
   -- Use above command to run the webservice, that we have created. 
   
Note : This example is running on port `8080`. You can be able to view the result on URL `http://localhost:8080/google-cloud/refresh-token`, This is the simple get request.

_**Best Luck**_
