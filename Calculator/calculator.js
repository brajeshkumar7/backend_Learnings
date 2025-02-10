const calculatorhandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
         <html>
        <head><title>calculator</title></head>
        <body>
        <h1>Do your sum</h1>
       <form action="/calculate-result" method="POST">
       <input placeholder="enter first number" name ="firstNum">
        <input placeholder="enter second number" name ="secondNum">
        <input type="submit" value="sum">
        </body>
        </html>
        `)
    return res.end();
}

exports.calculatorhandler = calculatorhandler;