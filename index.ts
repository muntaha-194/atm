#! /usr/bin/env node

import inquirer from "inquirer";

//user balance and pin code

let myBalance = 7000;
let myPin = 35753;

// welcome message
console.log("\n\tWELCOME TO MUNTAHA'S - ATM\t");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "ENTER YOUR PIN HERE:",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("CORRECT PIN!!! LOGIN SUCCESS FULLY");
  // console.log(`YOUR CURRENT ACCOUNT BALANCE IS ${myBalance}`);

  let OperationAnswer = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "SELECT AN OPERATION:",
      choices: ["Withdraw Amount", "Check Balance"],
    },
  ]);

  if (OperationAnswer.operation === "Withdraw Amount") {
    let AmountAnswer = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "ENTER THE AMOUNT YOU WANT TO WITHDRAW:",
      }
    ]);
    if (AmountAnswer.amount > myBalance) {
      console.log("INSUFFICIENT BALANCE");
    } else {
      myBalance -= AmountAnswer.amount;
      console.log(`${AmountAnswer.amount} WITHDRAWN SUCCESSFULLY`);
      console.log(`YOUR REMAINING BALANCE IS: ${myBalance}`);
    }
  } else if (OperationAnswer.operation === "check Balance") {
    console.log(`YOU ACCOUNT BALANCE IS: ${myBalance}`);
  }
} else {
  console.log("INCORRECT PIN !!!");
}
