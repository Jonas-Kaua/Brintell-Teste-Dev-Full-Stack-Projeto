const {Sequelize, DataTypes} = require('sequelize');
const db = require('../../config/database');

const sequelize = new Sequelize(db);

const Aluno = sequelize.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, { sequelize, timestamps: false, tableName: "aluno"})

module.exports = Aluno;