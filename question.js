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
      "Do you want full OSM response || database specific dataset || just co ordinates in a json file ?",
    choices: [
      "only-co-ordinates",
      "osm-addresses",
      "database-specific-co-ordinates",
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
    message: "How many co-ordinates you want to generate?",
    when: (answers) => answers["whichFromat"] !== "osm-addresses",
    validate(input) {
      if (input != null && input != "" && Number.isInteger(parseInt(input))) {
        return true;
      }
    },
  },
];
