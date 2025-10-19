//1. import json server
const JSONServer=require('json-server')

//.2.create server for running json file
const rclinic=JSONServer.create()

//3.create middleware
const middleware=JSONServer.defaults()

//6.import db.json file
const router =JSONServer.router("db.json")

//4.define port to run the server
const PORT = 5000 || process.env.PORT  
 

//5.use middleware
rclinic.use(middleware)

//7.use router
rclinic.use(router)

//8. tell server to listen for client request

rclinic.listen(PORT,()=>{
    console.log(`clinic page started at port number ${PORT}`);
    
})