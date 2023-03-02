const express = require('express')
const bodyParser = require('body-parser')
const app =express()


let startTime = null
let remainingTime = null
let interval = null
let timer=null

app.use(bodyParser.json())

app.post('/start', (req, res) => {
  const { hours, minutes, seconds } = req.body;
  remainingTime = hours * 3600000 + minutes * 60000 + seconds * 1000;
  startTime = new Date();
  clearInterval(interval);
 
  interval = setInterval(() => {
    const elapsed = new Date() - startTime;
    const remaining = remainingTime - elapsed;
    if (remaining < 0) {
      clearInterval(interval);
   
      return res.json({ remainingTime: 'Time is up!', timer: '' });
    }
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    const timer = `Ends in: ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    const remainingTimeMsg = `Ends in: ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    //process.stdout.write(`${remainingTimeMsg}\r`);
    process.stdout.write(`${timer}\r`);

  }, 1000);
});


app.listen(3040, () => {
console.log('Server started');
});
