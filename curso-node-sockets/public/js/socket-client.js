
const lblOnLine = document.querySelector('#lblOnLine')
const lblOffLine = document.querySelector('#lblOffLine')


// socket cliente
const socket = io();

//detectar cambios de coneccion del lado del cliente
socket.on('connect', () => {
    console.log('conectado', )
    lblOnLine.style.display = '';
    lblOffLine.style.display = 'none';
})

socket.on('disconnect', () => {
    console.log('desconectado', )
    lblOnLine.style.display = 'none';
    lblOffLine.style.display = '';
})