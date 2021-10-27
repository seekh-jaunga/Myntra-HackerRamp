users = [];
chatrooms = [];
messages = [];

class Chatrooms{
	
	addChatroom(cid,cname,admin,members,msgs){
		var chatroom = {cid,cname,admin,members,msgs};
		chatrooms.push(chatroom);
		return chatroom;
	}
	removeChatroom(cid){
        chatrooms = chatrooms.filter(room=>room.cid!==cid);
	}
	removeUser(cid,uid){
       for(var i=0;i<chatrooms.length;i++){
       	if(chatrooms[i].cid==cid){
       		chatrooms[i].members = chatrooms[i].members.filter(user=>user.uid!==uid);
       		break;
       	}
       }
	}
	updateRoomUser(cid,uid){
		for(var i=0;i<chatrooms.length;i++){
			if(chatrooms[i].cid==cid){
				chatrooms[i].members.push(uid);
				break;
			}
		}
	}
}

class Users{

	addUser(uid,friends,chatrooms){
		var user = {uid,friends,c_rooms};
		users.push(user);
		return user;
	}
	getUser(uid){
        return users.filter(user=>user.uid===id)[0];
	}
	removeUser(uid){

       for(var i=0;i<users.length;i++){
          if(users[i].uid==uid){
          	var ch = new Chatrooms();
          	for(var j=0;j<users[i].c_rooms.length;j++)ch.removeUser(users[i].c_rooms[j].cid,uid);
          	break;
          }
       }

        var user = this.getUser(uid);
        if(user){
           users = users.filter(user=>user.uid!==uid);
        }
      
        return user;
	}
	addUserToRoom(uid,cid){
		for(var i=0;i<users.length;i++){
			if(users[i].uid==uid){
              users[i].c_rooms.push(cid);
              ch = new Chatrooms();
              ch.updateRoomUser(cid,uid);
              break;
			}
		}
	}
}


class Messages{
	
	addMessage(mid,sen_id,msg,tag,rec_id){
		var message = {mid,sen_id,msg,tag,rec_id};
		this.messages.push(message);
		return message;
	}
}

module.exports = {Users,Chatrooms,Messages};