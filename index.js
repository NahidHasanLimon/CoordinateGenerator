const fs = require("fs")
const inquirer = require('inquirer');
const { format } = require("path");
const  fetchCoOrdinates  = require('./fetch')
console.log('type of', typeof fetchCoOrdinates);
console.log('before result')
 fetchCoOrdinates('Dhaka',  5, 'keno').then((response)=>{
    console.log('response is', response)
})
console.log('results of', resultsof)
return;

const questions = [
  {
    type: "input",
    name: "whichAddress",
    message: "Enter your city or country!",
    validate(input) {
        if (input != null && input != '') {
          return true;
        }
      },
  },
  {
    type: 'list',
    name: 'whichFromat',
    message: 'Do you want database specific dataset or just co ordinates in a json file ?',
    choices: [ 'only-co-ordinates', 'database-specific-co-ordinates'],
  },
  {
    type: 'list',
    name: 'whichDatabase',
    message: 'Which database you want to use?',
    choices: [ 'MySQL', 'MongoDB'],
    when: (answers) => answers['whichFromat'] === 'Database-specific-co-ordinates',
  },
  {
    type: "input",
    name: "howManyRows",
    message: "How many co-ordinates you want to generate?",
    validate(input) {
      if (input != null && input != '' && Number.isInteger(parseInt(input))) {
        return true;
      }
    },
  },
  
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    AnswerRecievedAndGenerate(answers)

  });

  function AnswerRecievedAndGenerate(answers){

      // console.log('hey ::: the answer is: ', answers);
      console.log('hey ::: the answer is: ', Number.isInteger(parseInt(answers.howManyRows)));
      fetchCoOrdinates(answers.whichAddress,answers.whichFromat, Number.isInteger(parseInt(answers.howManyRows) ) )
  }
return;








// Use geocoding API to get the latitude and longitude of the place

  
  console.log('here we go: ', fetchAndGenrate);


  // fetchAndGenrate.then((response) => {
  //   console.log('randomCordinates:  ', randomCordinates)
  //   console.log('customObj', customObj)
  //   const data = JSON.stringify(customObj)

  //   fs.writeFileSync('mongodb.json', data);
  // })
