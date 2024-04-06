#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//user balance and pin code
let myBalance = 7000;
let myPin = 35753;
// welcome message
console.log(chalk.yellow("\n\tWELCOME TO MUNTAHA'S-ATM\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.blue("ENTER YOUR PIN HERE:"),
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nCORRECT PIN!!! LOGIN SUCCESSFULLY!!!\n"));
    // console.log(`YOUR CURRENT ACCOUNT BALANCE IS ${myBalance}`);
    let OperationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.blue("SELECT AN OPERATION:"),
            choices: ["Withdraw Amount", "Check Balance"],
        },
    ]);
    if (OperationAnswer.operation === "Withdraw Amount") {
        let WithdrawAnswer = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: chalk.blue("SELECT A WITHDRAWL METHOD"),
                choices: ["Fast Cash", "Enter Amount"],
            },
        ]);
        if (WithdrawAnswer.withdrawMethod === "Fast Cash") {
            let fastcashAnswer = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: chalk.blue("SELECT AMOUNT:"),
                    choices: [
                        "1000",
                        "2000",
                        "3000",
                        "4000",
                        "5000",
                        "6000",
                        "7000",
                        "8000",
                        "9000",
                        "10000",
                    ],
                },
            ]);
            if (fastcashAnswer.fastcash > myBalance) {
                console.log(chalk.red("INSUFFICIENT AMOUNT"));
            }
            else {
                myBalance -= fastcashAnswer.fastcash;
                console.log(chalk.green `${fastcashAnswer.fastcash} WITHDRAW SUCCESSFULLY`);
                console.log(chalk.yellow `YOUR REMAINING BALANCE IS: ${myBalance}`);
            }
        }
        else if (WithdrawAnswer.withdrawMethod === "Enter Amount") {
            let AmountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.blue("ENTER THE AMOUNT YOU WANT TO WITHDRAW:"),
                },
            ]);
            if (AmountAnswer.amount > myBalance) {
                console.log(chalk.red("\nINSUFFICIENT BALANCE\n"));
            }
            else {
                myBalance -= AmountAnswer.amount;
                console.log(chalk.green `${AmountAnswer.amount} WITHDRAWN SUCCESSFULLY`);
                console.log(chalk.yellow `YOUR REMAINING BALANCE IS: ${myBalance}`);
            }
        }
    }
    else if (OperationAnswer.operation === "Check Balance") {
        console.log(chalk.yellow `YOU ACCOUNT BALANCE IS ${myBalance}`);
    }
}
else {
    console.log(chalk.red("INCORRECT PIN !!! TRY AGAIN..."));
}
