#! /usr/bin/env node
//  This line is called a shebang, it tells the operating system to run it with nodejs
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentences",
        type: "input",
        message: "Enter your sentence to count the word"
    }
]);
const word = answer.sentences.trim().split(" ");
console.log(word);
console.log(`Your sentence word counter is ${word.length}`);
