function outputTeam (team) {
    function makeManager (manager) {
        return `<div class="card" style="width: 18rem;">
        <img src="../Assets/${manager.getRole}Icon.png" class="card-img-top" alt="an Icon of an ${manager.getRole}">
        <div class="card-body">
          <h5 class="card-title">
            Name: ${manager.name} <br>
            Position: ${manager.getRole}</h5>
          <p class="card-text">
              ID: ${manager.id} <br>
              Email: ${manager.email} <br>
              Office Number: ${manager.officeNumber}
          </p>
        </div>
        </div>`
    }

    function makeEngineer (engineer) {
        return `<div class="card" style="width: 18rem;">
        <img src="../Assets/${engineer.getRole}Icon.png" class="card-img-top" alt="an Icon of an ${engineer.getRole}">
        <div class="card-body">
          <h5 class="card-title">
            Name: ${engineer.name} <br>
            Position: ${engineer.getRole}</h5>
          <p class="card-text">
              ID: ${engineer.id} <br>
              Email: ${engineer.email} <br>
              GitHub: <a href = "https://github.com/${engineer.github}">${engineer.github}</a>
          </p>
        </div>
        </div>`
    }

    function makeIntern (intern) {
        return `<div class="card" style="width: 18rem;">
        <img src="../Assets/${intern.getRole}Icon.png" class="card-img-top" alt="an Icon of an ${intern.getRole}">
        <div class="card-body">
          <h5 class="card-title">
            Name: ${intern.name} <br>
            Position: ${intern.getRole}</h5>
          <p class="card-text">
              ID: ${intern.id} <br>
              Email: ${intern.email} <br>
              School: ${intern.github}
          </p>
        </div>
        </div>`
    }
    const html = []
    html.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => buildManager(manager))
    .join(""));
    html.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => buildEngineer(engineer))
    .join(""));
    html.push(team.filter(employee => employee.getRole() === "Intern")
    .map(intern => buildIntern(intern))
    .join(""));
    return html.join("")
};


