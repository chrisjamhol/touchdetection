var socket = io.connect('http://localhost');
socket.on('test', function (data) {
	console.log(data);
	socket.emit('my other event', { my: 'data' });
});