import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDbx09ufN7LTCCB77ui_StM5u7gsxp_i5c",
	authDomain: "todo-app-56.firebaseapp.com",
	databaseURL: "https://todo-app-56.firebaseio.com",
	storageBucket: "todo-app-56.appspot.com",
	messagingSenderId: "200145457203"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
	app: {
		name: 'todo',
		version: '0.1.1'
	},
	isRunning: true,
	user: {
		name: 'andrew',
		age: 25
	}
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
// 	console.log('child_added: ', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
// 	console.log('child_changed: ', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
// 	console.log('child_removed: ', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
// 	text: 'walk ...!'
// });
//
// console.log('todo id: ', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('new child_added: ', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'todo 1'
});

todosRef.push({
	text: 'todo 2'
});