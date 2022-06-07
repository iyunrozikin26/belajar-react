'use strict';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(16);
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Job, {foreignKey : 'authorId'})
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'email wajib diisi'
        },
        notEmpty : {
          msg : 'email tidak boleh kosong'
        },
        isEmail : {
          msg : 'format email salah'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : 'password wajib diisi'
        },
        notEmpty : {
          msg : 'password tidak boleh kosong'
        },
        len : {
          args : [5],
          msg : 'panjang password minimal 5'
        }
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate : (user) => {
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  });
  return User;
};