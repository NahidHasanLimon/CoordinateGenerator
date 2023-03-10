const inquirer = require("inquirer");
const { answerRecievedAndGenerate } = require("./coordinate-helper.js");
const { questions } = require("./question.js");
const fs = require("fs");



inquirer.prompt(questions).then((answers) => {
  answerRecievedAndGenerate(answers);
});


