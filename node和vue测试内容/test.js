console.log('start succ');
const http=require("http");
const fs=require("fs");
const path=require("path");
const server=http.createServer();
server.on('request',function(req,res){
	const url=req.url;
	console.log(url)
	
});
server.listen(80,function(){
	
});
console.log('end succ');