// // function add (a, b) {
// // 	return a + b;
// // }
// // console.log (add (3, 2));
// //
// // var toAdd = [9, 15];
// // console.log (add(...toAdd));
//
// var group1 = ['one', 'two'];
// var group2 = ['33', '33'];
// var final = [...group2, 3, ...group1];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

var final = function (a, b) {
	console.log(...a , ...b);
};

function greet (name, age) {
	console.log(`Hi ${name} you are! ${age}`);
}
greet(...person);
greet(...personTwo);

final(person, personTwo);



var names = ['mike', 'ben'];
var final = ['andrew', ...names];

final.forEach(function (name) {
	console.log(`Hi ${name}`)
})





