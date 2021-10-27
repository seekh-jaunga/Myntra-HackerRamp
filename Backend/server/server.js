const express = require('express');
const http = require('http');
const socketIO = require('socket.io'); 
const path = require('path');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 8080;
const app = express();
var server = http.createServer(app); 
var io = socketIO(server);
const {generateMessage,generateLocationMessage} = require('./utils/message');
var usersObj = new Users();
var roomsObj = new Chatrooms();
var mssgsObj = new Messages();

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New user connected');

    socket.on('join-room',(params,callback)=>{
        if(users.isPresentInRoom(params.uid,params.cid)){
            return callback('Username already exists in this room');
        }

      	socket.join(params.cid);
        roomsObj.removeUser(params.cid,params.uid);
        usersObj.addUserToRoom(params.uid,params.cid);

        //Telling other users that a new user joined
        socket.broadcast.to(params.cid).emit('newMessage',generateMessage('Admin',`${params.name} has joined`));
        callback();
        
    });

    socket.on('disconnect',()=>{
        console.log(`${socket.id} is offline`);
    });
  
    socket.on('createMessage',(message,callback)=>{
        
        var user = usersObj.getUser(message.sen_id);
        if(user && isRealString(message.msg)){
            if(tag){
                socket.to(message.rec_id).emit('newMessage',generateMessage(user.cname,message.msg)); //personal message
             }else{
                io.to(message.rec_id).emit('newMessage',generateMessage(user.cname,message.msg));     //group message
             }
        }
        callback();
    });
})




server.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
 