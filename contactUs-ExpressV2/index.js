const express = require('express');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const path = require('path');
const rootDir = require('./utils/path');


const app = express();
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);
app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})