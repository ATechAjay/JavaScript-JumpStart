```js
function userIntro(from) {
  console.log(`${this.firstName} ${this.lastName} from ${from}.`);
}

const user1 = {
  firstName: "Elon",
  lastName: "Musk",
};

const user1Intro = userIntro.bind(user1);

// const user1Intro = userIntro.bind(user1 , "America");

// "user1" object is borrowing the "userIntro()" function.

// console.log(typeof user1Intro); // function
user1Intro("America");
```
