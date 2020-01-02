
const assert = require('assert')
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())

const MOCK_HEROI_CADASTRAR = { 
    nome: 'Gavião Negro',
    poder: 'flexas'
} 
describe('Postgres Strategy', () => {
    before(async() => {
        await context.connect()
    });

    it('PostgresSQL connection ', async function () {
        const result = await context.isConnected()
        assert.equal(result, true)
    });
    it('should create a new object', async () => {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    });
    it('listar', async function () {
        const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
        delete result.id 
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    });
});