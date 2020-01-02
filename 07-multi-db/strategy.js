class NotImplementedExecption extends Error {
    constructor(){
        super("Not implemented Execption")
    }
}

class ICrud {
    create(item) {
         throw new NotImplementedExecption()
    }
    read(query) {
        throw new NotImplementedExecption()
    }
    update(id, item) {
        throw new NotImplementedExecption()
    }
    delete(id) {
        throw new NotImplementedExecption()
    }
}

class ContextStrategy {
    constructor(strategy) {
        return this._database = strategy
    }
    create(item) {
        return this._database.create(item)
    }
    read(query) {
        return this._database.read(query)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    delete(id) {
        return this._database.delete(id)
    }
}

class MongoDB {
    create(item) {
        console.log(`O item foi adicionado no MongoDB`)
    }
}

class Postgres {
    create(item) {
        console.log(`O item foi adicionado no Postgres`)
    }
}

const contextMongoDB = new ContextStrategy(new MongoDB())
contextMongoDB.create({ name: 'Marcelo' })

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create("Marcelo")