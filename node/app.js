var io = require('socket.io').listen(3000);

	io.of('/private').authorization(function (handshakeData, callback) {
	
	  console.log(handshakeData);
	
	  handshakeData.foo = 'baz';
	
	  callback(null, true);
	
	})
	.on('connection', function (socket) {
	
	  console.log(socket.handshake.foo);
	
	});