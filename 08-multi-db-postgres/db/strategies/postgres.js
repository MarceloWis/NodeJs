const Sequelize = require('sequelize')
const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null;
        this._herois = null;
    }

     async connect() {
        this._driver = new Sequelize(
            'heroes',
            'marcelowis',
            'minhasenhasecreta',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false,
            }
        )
       await this.defineModel()
    }

     async isConnected() {
        try {
           await this._driver.authenticate()
            return true
        } catch (error) {
            console.log("Error Postgres conection")
        }
    }
    async defineModel() {
        this._herois = this._driver.define('heroes', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                required: true,
            },
            poder: {
                type: Sequelize.STRING,
                required: true,
            }
        }, { 
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
         })
         await this._herois.sync()
    }
    async create(item) {
       const { dataValues } = await this._herois.create(item)
        return  dataValues
     }
     read(query) {
        return console.log("Item veio do Postgres")
     }
     update(id, item) {
         return console.log("Item atualizado no Postgres")
     }
     delete(id) {
         return console.log("Item deletado do Postgres")
     }
}

module.exports = Postgres