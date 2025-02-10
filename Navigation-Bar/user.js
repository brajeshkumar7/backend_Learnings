const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Navigation Bar</title></head>
            <body><h1>Links of the pages</h1>
            <nav><ul>
           <li> <a href="/Home">Home</a></li>
           <li> <a href="/Men">Men</a></li>
           <li><a href="/Women">Women</a></li>
           <li> <a href="/Kids">Kids</a></li>
           <li> <a href="/Cart">Cart</a></li>
            </body></html>
            `);
        return res.end();
    }
    else if (req.url === '/Home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body> <h1>Welcome to Home Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/Men') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Men</title></head>');
        res.write('<body> <h1>Welcome to Men Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/Women') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Women</title></head>');
        res.write('<body> <h1>Welcome to Women Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/Kids') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Kids</title></head>');
        res.write('<body> <h1>Welcome to kids Section</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/Cart') {
        res.write('<html>');
        res.write('<head><title>Cart</title></head>');
        res.write('<body> <h1>Welcome to Your Cart</h1></body>');
        res.write('</html>');
        return res.end();
    }

    res.write('<h1>This is the fallback</h1>');
}

module.exports = requestHandler;