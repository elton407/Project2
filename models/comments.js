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

    // Post.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Post.belongsTo(models.Guest, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    Comments.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
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