function logger(param) {
    console.log(param);
}


class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`${this.name} say hello to you`)
    }
}



module.exports = {
    logger,
    User
};
