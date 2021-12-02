module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_general_ci'
  })
}