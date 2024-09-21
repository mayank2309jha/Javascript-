//Making a simple Promise
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("Task 1 done");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  //console.log("Promise 1 resolved");
});

//Promise Number 2: Sending Data in the resolved Part.
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("Task 2 done");
    resolve({ name: "Mayank Jha", age: 22 });
  }, 1000);
}).then((user) => {
  //console.log("Promise 2 resolved");
  //console.log(user);
});

//Promise Number 3: It can be resolved or rejected depending
//Also see that then keyword has been used twice
//Also see the finally keyword
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (error) {
      reject("Something went wrong");
    } else {
      resolve({ name: "Monkey Jha", age: 1000 });
    }
    //console.log("Task 3 Done");
  }, 1000);
})
  .then((user) => {
    //console.log(user);
    return user.name;
  })
  .then((userName) => {
    //console.log(userName);
  })
  .catch((error) => {
    //console.log(error);
  })
  .finally(() => {
    //console.log("Promise 3 completed");
  });

//Promise Number 4: Handling Promises with async await
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "MJ", age: 22 });
    //console.log("Promise-4 resolved");
  }, 1000);
});

async function consumePromiseFour() {
  const response = await promiseFour;
  //console.log(response);
}

consumePromiseFour();

//Getting data from an API using fetch, fetch gets the data from a link

async function getData() {
  const response = await fetch("https://cat-fact.herokuapp.com/facts");
  const data = await response.json();
  console.log(data[0].text);
}

getData();

//Doing the same thing using then

fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data[1].text);
  })
  .catch((error) => console.log(err));
