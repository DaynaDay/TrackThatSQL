const viewQuestions = [
    {
        name: "view",
        message: "Which would you like to view?",
        type: "list",
        choices: ["Department", "Role", "Employees"] 
    }
];

const addQuestions = [
    {
        name: "add",
        message: "Which would you like to add to?",
        type: "list",
        choices: ["Department", "Role", "Employees"]
    }
];

const updateQuestions = [
    {
        name: "update",
        message: "Which would you like to update?",
        type: "list",
        choices: ["Department", "Role", "Employees"]
    },
];

module.exports = { viewQuestions, addQuestions, updateQuestions };
