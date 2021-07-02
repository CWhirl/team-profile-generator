const EMPLOYEE = require('./employee');

class INTERN extends EMPLOYEE {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}
module.exports = INTERN;