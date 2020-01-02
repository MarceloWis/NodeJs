class Postgres {
    create(item) {
        return console.log("Item adicionado ao Postgres")
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