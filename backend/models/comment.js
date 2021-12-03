module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    charset: 'utf8mb4',  //이모티콘도 같이 넣기 위함.
    collate: 'utf8mb4_general_ci'
  });
  Comment.associate = (db) => {  // model간의 관계 설정. 
    db.Comment.belongsTo(db.User);  //사용자 id도 같이 들어감
    db.Comment.belongsTo(db.Post);
  };

  return Comment;
}