var socket = io.connect('http://localhost:3000',{
    reconnection: true,
    reconnectionDelay: 3000,
    reconnectionAttempts: 20,
    forceNew: true
    })
    

socket.emit('mysql',{name:'rodrigo'})

socket.on('messages',(data)=>{
    console.log(data)
    printData(data)
})

function printData(data){
    let html=data.map(function(dato, index){
        return(`<div>
    <strong>${dato.user}:</strong><p>${dato.mensaje}</p>
    </div>`);
   }).join(" ")
    document.getElementById('messages').innerHTML=html
} 

socket.on('permission',(data)=>{
        if(data.permission === 'true'){
         alert('welcome to the chat!')
        }else if(data.permission === 'false'){
          alert('you are not logged so you will not be able to send messages')
        }
})

socket.on('message-status',(data)=>{
if(data.success ==='true'){
    
}
})
function addMessage()
{
    let payload ={
        user:'rodrigo',
        message:document.getElementById('texto').value
    }
    socket.emit('new-message',payload)
    return false
}

