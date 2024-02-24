const http=require("http")
const fs =require("fs")


const homePage=fs.readFileSync('./todo.html')
const styleCss=fs.readFileSync('./style.css')
const js=fs.readFileSync('./script.js')

//const filecontent=fs.readFileSync('./test.txt','utf-8')
//console.log(filecontent)
//fs.writeFileSync('./test1.txt','oye hoy',{flag:'a'})
const server= http.createServer((req,res)=>{ if(req.url ==='/'){
    res.write(homePage)
    res.end()
}else if(req.url==='/script.js')
{
    res.end(js)

}
else if(req.url==='/style.css')
{
    res.write(styleCss)
    res.end()
}
else{
    res.end("404 page not found")
}

})

server.listen(8000,()=>{console.log("server is running at 8000 port")})