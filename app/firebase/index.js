import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyDbx09ufN7LTCCB77ui_StM5u7gsxp_i5c",
		authDomain: "todo-app-56.firebaseapp.com",
		databaseURL: "https://todo-app-56.firebaseio.com",
		storageBucket: "todo-app-56.appspot.com",
		messagingSenderId: "200145457203"
	};

	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;