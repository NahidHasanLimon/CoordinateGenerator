module.exports.questions = [
  {
    type: "input",
    name: "whichAddress",
    message: "Enter your city or country!",
    validate(input) {
      if (input != null && input != "") {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "whichFromat",
    message:
      "Do you want only coordinates || database specific coordinates || OSM response in a json file ?",
    choices: [
      "only-co-ordinates",
      "database-specific-co-ordinates",
      "osm-addresses-default",
    ],
  },
  {
    type: "list",
    name: "whichDatabase",
    message: "Which database you want to use?",
    // choices: ["MySQL", "MongoDB"],
    choices: ["MongoDB"],
    when: (answers) =>
      answers["whichFromat"] === "database-specific-co-ordinates",
  },
  {
    type: "input",
    name: "howManyRows",
    message: "How many pairs of long,lat you want to generate?",
    when: (answers) => answers["whichFromat"] !== "osm-addresses-default",
    validate(input) {
      if (input != null && input != "" && Number.isInteger(parseInt(input))) {
        return true;
      }
    },
  },
];
