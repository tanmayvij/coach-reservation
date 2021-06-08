const Sequelize = require('sequelize');

const config = {
        username: 'root',
        password: '',
        database: 'coachreservation',
        host: 'localhost',
        dialect: "mysql",
        migrationStorage: "json",
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        }
    };

const sequelize = new Sequelize(config.database, config.username, config.password, config);

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Train = require('./models/Train_SQL')(sequelize, Sequelize);

module.exports = db;