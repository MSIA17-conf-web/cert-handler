
// Dependencies
const fs = require('fs');
const http = require('http');
const path = require('path');
const https = require('https');
const express = require('express');

const app = express();

// const options = {
// 	key: fs.readFileSync("/etc/letsencrypt/live/homenco.space/privkey.pem"),
// 	cert: fs.readFileSync("/etc/letsencrypt/live/homenco.space/fullchain.pem"),
// 	ca: fs.readFileSync("/etc/letsencrypt/live/homenco.space/chain.pem")
//   };

app.use(express.static(path.join(__dirname, 'public')))

app.get("/hello", (req, res) => {
	res.send({hello:" Message from HTTP-ACME Server"}).end()
})

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(options, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');
// });