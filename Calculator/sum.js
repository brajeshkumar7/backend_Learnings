const sumHandler = (req, res) => {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk)
    })
    req.on('end', () => {
        const fullBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(fullBody);
        const dataObject = Object.fromEntries(params);
        const result = (Number)(dataObject.firstNum) + (Number)(dataObject.secondNum);
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                <html>
                <head><title>Sum</title></head>
                <body>
                <h1>Your sum is: ${result}</h1>
                </body>
                </html>
                `)
        return res.end();
    })

}

exports.sumHandler = sumHandler;