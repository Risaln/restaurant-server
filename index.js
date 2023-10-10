// 1.import jsonserver
const jsonserver=require('json-server')

//2.create a server application using json-server
const server=jsonserver.create()

//3.setup path for db.json file
const router=jsonserver.router('db.json')

//4.return middleware used by json server
const middleware=jsonserver.defaults()

//5.setup a port number
const port=process.env.PORT || 3001

//6.use in server
server.use(middleware)
server.use(router)

//7.to run the port
server.listen(port,()=>{
    console.log('listening on the port' +port);
})

