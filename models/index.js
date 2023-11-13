'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve(__dirname, '../config/config.json'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

(async () => {
  const files = await fs.promises.readdir(__dirname);
  for (const file of files) {
    if (file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js') {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
  }

  for (const model of Object.values(db)) {
    if (model.associate) {
      model.associate(db);
    }
  }

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;
})();