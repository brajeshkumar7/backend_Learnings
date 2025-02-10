const http = require('http');
const homeRequest = require('./home');

const server = http.createServer(homeRequest);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})