//  two ways for type assertions
let message;

message='abc';

// 1st way of assertion
let ucase=(<string> message).toUpperCase();
console.log(ucase);

// 2nd way of assertion
let alternative=(message as string).toUpperCase();
console.log(alternative);


