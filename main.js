const http = require('http')

const server = http.createServer((request, response) => {
   console.log(request.url)

   response.end('<h1>Hello word</h1>')
});



server.listen(8080, () => {
    console.log("ouvindo req na porta 8080")
})
