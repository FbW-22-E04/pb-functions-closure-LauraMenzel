//1
//Closure is a feature were an inner function has access to an outer function.

//2

function personalDice(name) {
  return function () {

    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
zoesRoll();


//2a :It is used at the inner function, the variable is being called from the parent function.
//2b : It is always a number between 1 and 6 . It is randomly changing.
//2c : It is in the inner circle where it is created.
console.log("----------------------------------------------------------------------------------------------------");

//3

function createBase(p){

return function(m){

    console.log(p + m);
};
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

