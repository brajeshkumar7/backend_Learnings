const express = require('express');
//as body parser is depricated so the use of this is not recommended at all us simply express.urlencoded instead of this
//const bodyParser = require('body-parser')

const app = express();
app.use((req, res, next) => {
    console.log('first dummy middleware', req.url, req.method);
    next();
})
app.use((req, res, next) => {
    console.log('second dummy middleware', req.url, req.method);
    next();
})
/*app.use((req, res, next) => {
    console.log('third middleware', req.url, req.method);
    res.send('<h1>I am in the third middleware');
})*/
app.get("/", (req, res, next) => {
    console.log('handling / home path for the middleware')
    res.send('<h1>Welcome to home</h1>');
})
app.get("/contact-us", (req, res, next) => {
    console.log('handling /contact-us get method path for the middleware')
    res.send(`<h1>Give your contact details</h1>
        <form action="contact-us", method="post">
        <label for="name">Enter your name:</label><input type=""text" placeholder="enter your name" id="name" name="username">
        <label for="email">Enter your email:</label><input type ="mail" id="email" name="usermail">
        <input type="submit" value="submit">
        </form>
        `);
})

app.use(express.urlencoded());

app.post('/contact-us', (req, res, next) => {
    console.log('handling /contact-us post method path for the middleware', req.body);
    res.send('<h1>Thank you for contacting us, we will move to you shortly</h1>');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})