#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bgCyanBright("\n                                   "));
console.log(chalk.bgCyanBright("      "+chalk.bgGreen.bold(" WORDS ")+"   "+chalk.bgGreen.bold(" COUNTER ")+"         "));
console.log(chalk.bgCyanBright("                                   \n"));
console.log(chalk.bgCyanBright("   "+chalk.bgBlue.bold(" We Will Count the Words of your Given Text ")+"   "));

let condition = true

while (condition) {
    const answer :{
        Sentence :string
    } = await inquirer.prompt([
       {
        name:"Sentence",
        type:"input",
        message:chalk.yellow("\n Enter the text for counting the words:")
       }
    ])
    const words = answer.Sentence.trim().split(" ")
    console.log("\n");
    console.log(words);
    
    console.log(chalk.magenta.italic("\nYour Words:  ")+chalk.bgBlue.bold(words));
    
  console.log(chalk.bgGrey.italic("\nTotal Words in your Given Text is:"),chalk.bgBlueBright("  "+words.length+"  "));
    
     
    const formore = await inquirer.prompt([
        {
            name:"wantmore",
            type:"confirm",
            message:chalk.bgRed.italic("\nAre Want to Count More Words?"),
            default:true
        }
    ])
    condition = formore.wantmore
}
console.log(chalk.bgCyanBright("\n                               "));
console.log(chalk.bgCyanBright("        "+chalk.bgBlue.bold("Thanks For Using...")+"       "));
console.log(chalk.bgCyanBright("                                 "));

// console.log("the end");