const NotImplementedExecption = require('../helpers/notImplementedExecption')

class ICrud extends NotImplementedExecption {
    constructor() {
        super()
    }
    create(item){
        throw new NotImplementedExecption()
    }
    read(id){
        throw new NotImplementedExecption()
    }
    update(id, item) {
        throw new NotImplementedExecption()
    }
    delete(id) {
        throw new NotImplementedExecption()
    }
    isConnected() {
        throw new NotImplementedExecption()
    }
}

module.exports = ICrud