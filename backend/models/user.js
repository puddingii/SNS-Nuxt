module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    email: { 
      type: DataType.STRING(40),
      allowNull: false
    },
    nickname: { 
      type: DataType.STRING(20),
      allowNull: false
    },
    password: { 
      type: DataType.STRING(100),
      allowNull: false
    },
  }, {
    charset: 'utf8', 
    collate: 'utf8_general_ci'
  });
  User.associate = (db) => {

  };
  return User;
};