# api-for-timer


## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Execute `npm install express cors body-parser nodemon` 
- Type `node index.js` command in terminal to start the server
- Now open postman to test api
- create a new request by clicking the "New" button in the top left corner of the postman window.
- In the "Enter request URL" field, enter the endpoint for the API `http://localhost:3040/start`
- Send a JSON request body with the Content-Type header set to raw/json. 
Here's an json:
`
{
  "hours": 1,
  "minutes": 30,
  "seconds": 0
}
`
- click on send button timer will start 




