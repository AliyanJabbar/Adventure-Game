#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  health: number = 100;

  constructor(name: string, HP: number) {
    this.name = name;
    this.health = HP;
  }

  healthDecrease() {
    this.health -= 25;
    return this.health;
  }
}

class Opponent extends Player {
  constructor(name: string, HP: number) {
    super(name, HP);
  }
}
// for player name
let player = await inquirer.prompt({
  name: "playerName",
  type: "input",
  message: chalk.yellow("WRITE THE NAME OF YOUR PLAYER..."),
});

// for opponent name
let opponent = await inquirer.prompt({
  name: "opponentName",
  type: "list",
  message: chalk.yellow("SELECT YOUR OPPONENT..."),
  choices: ["VAMPIRE", "GODZILLA", "MONKEY KING"],
});
// making objects to collect data
let opponentObj = new Opponent(opponent.opponentName, 100);
let playerObj = new Opponent(player.playerName, 100);

console.log(
  `${chalk.bold.green(player.playerName)} VS ${chalk.bold.red(
    opponent.opponentName
  )}`
);

let question = await inquirer.prompt({
  name: "select",
  type: "list",
  message: chalk.bold.italic.magenta(
    "SELECT ONE OF THE FOLLOWING TO PROCEED..."
  ),
  choices: [
    `WANT TO FIGHT WITH THE ${opponent.opponentName}`,
    "STORY OF THE GAME",
    "EXIT THE GAME",
],
});
let condition = true;
while (condition == true) {
switch(true){
case(question.select == `WANT TO FIGHT WITH THE ${opponent.opponentName}`) :{
    // for player select
    let playerSelect = await inquirer.prompt({
      name: "select",
      type: "list",
      message: chalk.yellow("WHAT DO YOU WANT TO SELECT?"),
      choices: ["STONE", "PAPER", "SCISSOR"],
    });
    //  for opponent select
    let opponentSelect: string | number = Math.floor(Math.random() * 3) + 1;
    if (opponentSelect === 1) {
      opponentSelect = "STONE";
    }
    if (opponentSelect === 2) {
      opponentSelect = "PAPER";
    }
    if (opponentSelect === 3) {
      opponentSelect = "SCISSOR";
    }

    //conditions
    if (playerSelect.select == opponentSelect) {
      console.log(chalk.bold.magenta("DRAW"));
      console.log(
        chalk.italic.underline.red(`OPPONENT ALSO SELECTED ${opponentSelect}`)
      );
    }
    if (playerSelect.select == "STONE" && opponentSelect == "PAPER") {
      playerObj.healthDecrease();
      console.log(chalk.bold.underline(`OPPONENT SELECTED ${opponentSelect}`));
      console.log(
        chalk.bold.red(`${player.playerName}'s HEALTH IS: ${playerObj.health}`)
      );
      console.log(
        chalk.bold.green(
          `${opponent.opponentName}'s HEALTH IS: ${opponentObj.health}`
        )
      );
    }
    if (playerSelect.select == "STONE" && opponentSelect == "SCISSOR") {
      opponentObj.healthDecrease();
      console.log(chalk.bold.underline(`OPPONENT SELECTED ${opponentSelect}`));
      console.log(
        chalk.bold.green(
          `${player.playerName}'s HEALTH IS: ${playerObj.health}`
        )
      );
      console.log(
        chalk.bold.red(
          `${opponent.opponentName}'s HEALTH IS: ${opponentObj.health}`
        )
      );
    }
    if (playerSelect.select == "PAPER" && opponentSelect == "STONE") {
      opponentObj.healthDecrease();
      console.log(chalk.bold.underline(`OPPONENT SELECTED ${opponentSelect}`));
      console.log(
        chalk.bold.green(
          `${player.playerName}'s HEALTH IS: ${playerObj.health}`
        )
      );
      console.log(
        chalk.bold.red(
          `${opponent.opponentName}'s HEALTH IS: ${opponentObj.health}`
        )
      );
    }
    if (playerSelect.select == "PAPER" && opponentSelect == "SCISSOR") {
      playerObj.healthDecrease();
      console.log(chalk.bold.underline(`OPPONENT SELECTED ${opponentSelect}`));
      console.log(
        chalk.bold.red(`${player.playerName}'s HEALTH IS: ${playerObj.health}`)
      );
      console.log(
        chalk.bold.green(
          `${opponent.opponentName}'s HEALTH IS: ${opponentObj.health}`
        )
      );
    }
    if (playerSelect.select == "SCISSOR" && opponentSelect == "STONE") {
      playerObj.healthDecrease();
      console.log(chalk.bold.underline(`OPPONENT SELECTED ${opponentSelect}`));
      console.log(
        chalk.bold.red(`${player.playerName}'s HEALTH IS: ${playerObj.health}`)
      );
      console.log(
        chalk.bold.green(
          `${opponent.opponentName}'s HEALTH IS: ${opponentObj.health}`
        )
      );
    }
    if (playerSelect.select == "SCISSOR" && opponentSelect == "PAPER") {
      opponentObj.healthDecrease();
      console.log(chalk.bold.underline(`OPPONENT SELECTED ${opponentSelect}`));
      console.log(
        chalk.bold.green(
          `${player.playerName}'s HEALTH IS: ${playerObj.health}`
        )
      );
      console.log(
        chalk.bold.red(
          `${opponent.opponentName}'s HEALTH IS: ${opponentObj.health}`
        )
      );
    }

    // for win or lose
    if (playerObj.health <= 0) {
      console.log(
        `${chalk.magenta(opponent.opponentName)} KILLED THE ${chalk.magenta(
          player.playerName
        )}`
      );
      console.log(
        chalk.bold.underline.bgRed(`${player.playerName} LOSE THE GAME!~!`)
      );
      condition = false;
    }
    if (opponentObj.health <= 0) {
      console.log(
        `${chalk.magenta(player.playerName)} KILLED THE ${chalk.magenta(
          opponent.opponentName
        )}`
      );
      console.log(
        chalk.bold.underline.bgGreen(`${player.playerName} WON THE GAME!~!`)
    );
    condition = false;
}
}
break
case (question.select == "EXIT THE GAME"): {
    console.log(chalk.bold.red("EXITING..."));
    process.exit(); //for exiting the while loop or we can use "condition = false"
}
break
case(question.select == "STORY OF THE GAME"):{
    console.log(chalk.italic.blue(`There was a person name ${player.playerName}, going from the dark Jungle. Suddenly ${opponent.opponentName} appear infront of ${player.playerName} from nowhere.Now the ${opponent.opponentName} is challenging ${player.playerName} to play STONE,PAPER and SCISSOR. if ${player.playerName} lose, the ${opponent.opponentName} will kill ${player.playerName}.Now ${player.playerName} has to fight for his life. BEWARE! of ${opponent.opponentName} he is very smart!~!`))
        process.exit()
    }
    
}
}
