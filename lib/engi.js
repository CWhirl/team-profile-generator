const EMPLOYEE = require('./employee');

class ENGI extends EMPLOYEE {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}
module.exports = ENGI;