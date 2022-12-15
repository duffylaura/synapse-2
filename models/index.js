const User = require('./user');
const Group = require('./group');
const Membership = require('./membership'); 

User.hasMany(Group, {
    foreignKey: "user_id",
});

Group.belongsTo(User, {
    foreignKey: "user_id", 
    onDelete: "CASCADE",
}); 

Membership.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Membership, {
    foreignKey: "user_id",
});

Group.hasMany(Membership, {
    foreignKey: "group_id",
});

Membership.belongsTo(Group, {
    foreignKey: "group_id",
}); 

module.exports = {User, Group, Membership}; 