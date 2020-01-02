class MongoDB {
    create(item) {
       return console.log("Item adicionado ao MongoDB")
    }
    read(query) {
       return console.log("Item veio do MongoDB")
    }
    update(id, item) {
        return console.log("Item atualizado no MongoDB")
    }
    delete(id) {
        return console.log("Item deletado do MongoDB")
    }
}

module.exports = MongoDB