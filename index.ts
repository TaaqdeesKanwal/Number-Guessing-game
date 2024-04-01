#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber= Math.floor(Math.random()*6+1);

const answer= await inquirer.prompt([{
    name: "userGuessNumber",
    type:"number",
    message:"enter your guess number between 1 to 6",
}]);

if (answer.userGuessNumber === randomNumber){
    console.log("Congratulations!You guessed a right number")
}
else{
    console.log("Try again!you guess a wrong number")
}