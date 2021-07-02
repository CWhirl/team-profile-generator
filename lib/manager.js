const EMPLOYEE = require('./employee');

class MANAGER extends EMPLOYEE {
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