#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt(
    {
      message: "Select the Operator",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division", "Factorial"],
    },
);

if(answer.operator === "Addition"){
    let answer1 = await inquirer.prompt(
    [
        {
            name: "firstNumber",
            message: "Enter the first number :",
            type: "number"
        },
        { 
            name: "secondNumber",
            message: "Enter the second number :",
            type: "number", 
        },
    ]
    )
    console.log(answer1.firstNumber + answer1.secondNumber);
} 
else if(answer.operator === "Subtraction"){
    let answer1 = await inquirer.prompt(
        [
            {
                name: "firstNumber",
                message: "Enter the first number :",
                type: "number"
            },
            { 
                name: "secondNumber",
                message: "Enter the second number :",
                type: "number", 
            },
        ]
        )
    console.log(answer1.firstNumber - answer1.secondNumber);
} 
else if(answer.operator === "Multiplication"){
    let answer1 = await inquirer.prompt(
        [
            {
                name: "firstNumber",
                message: "Enter the first number :",
                type: "number"
            },
            { 
                name: "secondNumber",
                message: "Enter the second number :",
                type: "number", 
            },
        ]
        )
    console.log(answer1.firstNumber * answer1.secondNumber);
}
else if(answer.operator === "Division"){
    let answer1 = await inquirer.prompt(
        [
            {
                name: "firstNumber",
                message: "Enter the first number :",
                type: "number"
            },
            { 
                name: "secondNumber",
                message: "Enter the second number :",
                type: "number", 
            },
        ]
        )
    console.log(answer1.firstNumber / answer1.secondNumber);
}
else if(answer.operator === "Factorial"){
    
    let factorial = await inquirer.prompt(
        {
            name: "fnumber",
            message: "Enter the factorial:",
            type: "number"
        }
    )
    
    function functionOfFactorial(){
    let result = 1;
    for(let i = 1; i <= factorial.fnumber; i++){
          result *= i
        }
        console.log(`The Factorial of ${factorial.fnumber}! is ${result} `)
    }
    functionOfFactorial()
}
else {
    console.log("Select Valid Operator")
}