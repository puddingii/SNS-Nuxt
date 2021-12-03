module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
  });
  Post.associate = (db) => {  // model간의 관계 설정. 
    db.Post.belongsTo(db.User);  //사용자 id도 같이 들어감
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
  };

  return Post;
}