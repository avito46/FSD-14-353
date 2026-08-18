import http from 'http'

const server=http.createServer()
server.on('request',(req,res)=>{
    res.write("<h1>Welcome to server side programming</h1>")
    res.write("Nodemon is tracking files")
    res.end()
})

server.listen(5000,()=>{
    console.log("Server is running")
})