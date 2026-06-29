const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hello DevOps</title>

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
    text-align:center;
}

.container{
    width:100%;
}

h1{
    font-size:5rem;
    font-weight:800;
    letter-spacing:2px;
}

h2{
    font-size:8rem;
    font-weight:900;
    color:#27e87b;
    margin-top:10px;
}

p{
    margin-top:40px;
    font-size:2rem;
    color:#e5e5e5;
}

.heart{
    color:red;
}

.line{
    width:250px;
    height:3px;
    background:#27e87b;
    margin:35px auto;
    border-radius:10px;
}
</style>

</head>

<body>

<div class="container">

<h1>Hello</h1>

<h2>DevOps!</h2>

<div class="line"></div>

<p>Deployed with <span class="heart">❤️</span> to Microsoft Azure</p>

</div>

</body>
</html>
`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
