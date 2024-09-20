'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produto.hasMany(models.Item,
        {foreignKey: 'ProdutoId',}
     );
     
     Produto.belongsToMany(models.Venda,
        {foreignKey: 'ProdutoId', through: 'Item', });
     
      
    }
  }
  Vendedor.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendedor',
  });
  return Vendedor;
};