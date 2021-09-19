module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
        roleId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        rolename: {
            type: Sequelize.STRING
        }
    });

    return Role;
};