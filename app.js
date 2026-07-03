const http = require('http');

const APP_TITLE = process.env.APP_TITLE || "Hello DevOps!";
const COMPANY_NAME = process.env.COMPANY_NAME || "Microsoft Azure";
const ENVIRONMENT = process.env.ENVIRONMENT || "Development";
const VERSION = process.env.VERSION || "1.0.1";

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>${APP_TITLE}</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:linear-gradient(135deg,#021B3A,#063970,#021B3A);
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.container{
    text-align:center;
}

h1{
    font-size:6rem;
    color:white;
}

h2{
    font-size:8rem;
    color:#27e87b;
    margin-bottom:25px;
}

.info{
    margin-top:30px;
    font-size:1.8rem;
    line-height:2.2;
    color:#ececec;
}

.label{
    color:#27e87b;
    font-weight:bold;
}

.line{
    width:260px;
    height:3px;
    background:#27e87b;
    margin:35px auto;
    border-radius:20px;
}

.footer{
    margin-top:40px;
    font-size:1.2rem;
    color:#bfbfbf;
}

</style>

</head>

<body>

<div class="container">

<h1>Hello</h1>

<h2>DevOps!</h2>

<div class="line"></div>

<div class="info">

<div><span class="label">Application :</span> ${APP_TITLE}</div>

<div><span class="label">Environment :</span> ${ENVIRONMENT}</div>

<div><span class="label">Company :</span> ${COMPANY_NAME}</div>

<div><span class="label">Version :</span> ${VERSION}</div>

<div><span class="label">Server Time :</span> ${new Date().toLocaleString()}</div>

</div>

<div class="footer">

Deployed with ❤️ to Microsoft Azure

</div>

</div>

</body>

</html>
`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
