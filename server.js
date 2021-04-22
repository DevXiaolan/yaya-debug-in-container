const http = require('http');

const name = 'Ya-Ya~'
const PORT = 4321;

http.createServer(
  (req, res) => {
    res.end('easy debug in container');
  }
).listen(PORT,()=>{
  console.log(`Listen on ${PORT}, ${name}`);
});