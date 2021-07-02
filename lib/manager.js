const EMPLOYEE = require('./employee');

class MANAGER extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    getofficeNumber(){
        return this.officeNumber;
    }
}
module.exports = MANAGER;