const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to home page');
    } else if (req.url === '/about') {
        res.end('welcome to custom page');
    } else {
        res.end(`
            <h1>oops</h1>
            <p>we can't able to see page</p>
            <a href="/">back home</a>
        `);
    }
});

server.listen(5000);
