const http = require('http');
const { PORT = 3030 } = process.env; //port server

const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname , '../public'); 

const mimeTypes = {
  "html": "text/html",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "png": "image/png",
  "js": "text/javascript",
  "css": "text/css"
};

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, 'utf-8')
}
function getFile(FileName) {
  const FilePath = path.join(PUBLIC_DIRECTORY, FileName);
  return fs.readFileSync(FilePath)
}

function onRequest(req, res) {
    if(req.url == "/") {
      res.writeHead(200)
      res.end(getHTML("index.html"))
    }else if(req.url == "/cars") {
      res.writeHead(200)
      res.end(getHTML("carimobil.html"))
    }else if(req.url == "/coba") {
      res.writeHead(200)
      res.end(getHTML("coba.html"))
    }else if(req.url.match('png.*|js.*|css.*|jpg.*') != null) {
      console.log(req.url);
      let extension = req.url.match('png.*|js.*|css.*|jpg.*')[0];
      res.setHeader('Content-type' , mimeTypes[extension]);
      res.end(getFile(req.url))
      console.log(req.url)
    }else{
      res.writeHead(404)
      res.end(getHTML("404.html"))
  }
}

const server = http.createServer(onRequest);

// menjalankan server
server.listen(PORT, 'localhost', () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
})