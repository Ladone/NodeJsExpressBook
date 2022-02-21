const http = require('http');
const port = process.env.PORT | 3000;

const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World');
});

server.listen(port, () => console.log(`Server has been started by port: ${port}; Press Ctrl+C for end process...`))