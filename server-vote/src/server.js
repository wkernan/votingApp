import Server from 'socket.io';

export default function startServer(store) {
	const io = new Server().attach(8090);

	// sending out the whole state to everyone connected whenever a change occurs
	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	// listen to connection events and emit the current state
	io.on('connection', (socket) => {
		socket.emit('state', store.getState().toJS())
	});
}