module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
        comment_body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    
    Comments.associate = function (models) {
        // Associating user with Posts
        // When a user is deleted, also delete any associated Posts
        Comments.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
        Comments.belongsTo(models.Event, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Comments;
};