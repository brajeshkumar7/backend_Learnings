const http = require('http');
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>This is page for taking input</title></head>
            <body><h1>Enter your details</h1>
            <form action="/submit-details" method="POST">
            <label for="name">Enter your name:</label>
            <input type="text" id="name" name="username" placeholder="enter your name here"><br><br>
            <label for= "gender">Gender:</label>
            <label for="gender">male <input type ="radio" id="gender" name="gender" value="male">
            <label for="gender">female <input type="radio" id="gender" name="gender" value="female">
            <label for="gender">other <input type="radio" id="gender" name="gender" value="other">
            <br><br>
            <input type="submit" value="submit">
            </body></html>
            `)
        return res.end();
    }

    else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
        fs.writeFileSync('user-details.txt', 'Brajesh Singh');
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullBody);
            const realData = Object.fromEntries(params);
            fs.writeFile('user-details.txt', JSON.stringify(realData), error => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head><title>This is the fallback of the page</title></head>
        <body><h1>I am in the default section</h1>
        </body>
        </html>
        `)
        return res.end();
    }
})

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})