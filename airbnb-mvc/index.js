const path = require('path');
const express = require('express');
const storeRouter = require("./routes/storeRouter")
const { hostRouter } = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const { pageNotFound } = require('./controllers/errors')


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(pageNotFound);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});