#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
//Advanture Game
//Object Orianted Program {OOP} Concept CLass make
//Create a player Class
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
//Create a Opponent Class
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.bold.italic.redBright("Pleace Enter Your Good Name: ")
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.bold.italic.greenBright("Select Your Opponent"),
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //Skeleton
    if (opponent.select === "Skeleton" /*,"Alien" , "Zombie"*/) {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.bold.italic.blueBright("What would you like to do ?"),
                choices: ["Attack", "Drink Porton", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic(chalk.bold.italic.redBright(`You Lose, Better luck Next Time`)));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic(`You Win..`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Porton") {
            p1.fuelIncrease();
            console.log(chalk.bold.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.red(`You Lose, Better luck Next Time`));
            process.exit();
        }
    }
    //Alien
    if (opponent.select === "Alien" /*,"Alien" , "Zombie"*/) {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.bold.italic.greenBright("What would you like to do ?"),
                choices: ["Attack", "Drink Porton", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(`You Lose, Better luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.blueBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`${o1.name} Fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic(`You Win..`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Porton") {
            p1.fuelIncrease();
            console.log(chalk.bold.cyan(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.red(`You Lose, Better luck Next Time`));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select === "Zombie" /*,"Alien" , "Zombie"*/) {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.bold.italic.yellowBright("What would you like to do ?"),
                choices: ["Attack", "Drink Porton", "Run For Your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.blueBright(`${o1.name} Fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.blue(`You Lose, Better luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.greenBright(`You Win..`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Porton") {
            p1.fuelIncrease();
            console.log(chalk.bold.yellow(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.red(`You Lose, Better luck Next Time`));
            process.exit();
        }
    }
} while (true);
