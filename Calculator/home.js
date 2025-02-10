const { sumHandler } = require('./sum')
const { calculatorhandler } = require('./calculator')

const homeRequest = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Home</title></head>
            <body>
            <h1>Welcome</h1>
            <a href="/calculator">Go To Calculator</a>
            </body>
            </html>
            `)
        return res.end();
    }
    else if (req.url.toLowerCase() === '/calculator') {
        return calculatorhandler(req, res);
    }

    else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
        return sumHandler(req, res);
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <html>
            <head><title>Home</title></head>
            <body>
            <h1>Erro 404 page not found</h1>
            <a href="/">Go To Home</a>
            </body>
            </html>
            `)
    return res.end();
}

module.exports = homeRequest;