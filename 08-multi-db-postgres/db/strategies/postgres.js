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
     async read(query = {}) {
         const result = await this._herois.findAll({ where: query, raw: true })
        return result
     }
     async update(id, item) {
        const result = await this._herois.update(item, { where: { id } })
         return result
     }
     async delete(id) {
        const result = await this._herois.destroy({ where: { id } })
        return result
     }
}

module.exports = Postgres