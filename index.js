let value1 = "1" + 2;
let value2 = 1 + "2";

// console.log(value1, typeof value1);
// console.log(value2, typeof value2);

value1 = "1" + 2 + 2;
value2 = 1 + 2 + "2";

// console.log(value1, typeof value1);
// console.log(value2, typeof value2);

//These two are easy.
// console.log("1" + "2");
// console.log(1 + 2);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);

// console.log("2" == 2);
// console.log("2" === 2);

value1 = Symbol("123");
value2 = Symbol("123");

// console.log(value1 === value2);

// value1 = null;
// console.log(typeof value1);

// let value3;
// console.log(typeof value3); //undefined

// let value4 = 123456789n;
// console.log(typeof value4);

// let value5 = Symbol("123");
// console.log(typeof value5);

value1 = "mayank";
value2 = value1;
//Note that the two are primitive data types.
//They are passed by value.
//So, when we say value2 = value1.
//A copy of value1 is assigned to value2.

value2 = "jha";
console.log(value1, value2); // mayank jha
//Changing the value of value2 does not change the value of value1.

let user1 = {
  name: "mayank",
};
user2 = user1;

user2.name = "jha";
console.log(user1.name, user2.name);
//Because reference variables are passed by reference
//changing the value in the second variable also
//changes the value of the first variable.
