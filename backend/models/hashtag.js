module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',  //이모티콘도 같이 넣기 위함.
    collate: 'utf8mb4_general_ci'
  });
  Hashtag.associate = (db) => {  // model간의 관계 설정. 
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag'});
  };

  return Hashtag;
}