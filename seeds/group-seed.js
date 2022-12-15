const { Group } = require("../models");

const groupSeed = [
    {
        "name":"helloWorld"
    },
    {"name":"loveToCode"
}
];

const seedGroups = () => Group.bulkCreate(groupSeed);

module.exports = seedGroups;