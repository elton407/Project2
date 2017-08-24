//Wknd models
// Create table for User
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        mobile_number: {
            type: DataTypes.STRING
        }
    })
    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Event);
        User.hasMany(models.Guest);
      };
    
      return User;
};