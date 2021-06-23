const http = require('http');

const server = http.createServer((req, res) => {
    res.write('heloodosauduasd')
    res.end()
});
const port = 3000;

server.listen(port)

console.log(`Listening on port: ${port}`)