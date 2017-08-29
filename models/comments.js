// module.exports = function (sequelize, DataTypes) {
//     var Comments = sequelize.define("Comments", {
//         comment_body: {
//             type: DataTypes.STRING,
//             allowNull: true

            
//         }
//     });

    
//     // Comments.associate = function (models) {
//     //     // Associating user with Posts
//     //     // When a user is deleted, also delete any associated Posts
//     //     Comments.belongsTo(models.Users, {
//     //         foreignKey: {
//     //             allowNull: false
//     //         }
//     //     });
//     //     Comments.belongsTo(models.Event, {
//     //         foreignKey: {
//     //             allowNull: false
//     //         }
//     //     });
//     // }
//     return Comments;
// };

module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define("Comments", {
       
        comment_body: {
            type: DataTypes.STRING
        }

      
    });

    // Event.associate = function (models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Event.belongsTo(models.Users);
    // };

    return Comments;

}; //closes the entire modal 