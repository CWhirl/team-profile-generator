const employee = require('./employee');

class engi extends employee {
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
module.exports = engi;