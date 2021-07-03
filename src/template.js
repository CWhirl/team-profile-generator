function outputTeam (team) {
    function makeManager (manager) {
        return `<div class="card" style="width: 18rem;">
        <img src="../Assets/${manager.getRole()}Icon.png" class="card-img-top" alt="an Icon of an ${manager.getRole()}">
        <div class="card-body">
          <h5 class="card-title">
            Name: ${manager.name} <br>
            Position: ${manager.getRole()}</h5>
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
        <img src="../Assets/${engineer.getRole()}Icon.png" class="card-img-top" alt="an Icon of an ${engineer.getRole()}">
        <div class="card-body">
          <h5 class="card-title">
            Name: ${engineer.name} <br>
            Position: ${engineer.getRole()}</h5>
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
        <img src="../Assets/${intern.getRole()}Icon.png" class="card-img-top" alt="an Icon of an ${intern.getRole()}">
        <div class="card-body">
          <h5 class="card-title">
            Name: ${intern.name} <br>
            Position: ${intern.getRole()}</h5>
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
    .map(manager => makeManager(manager))
    .join(""));
    html.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => makeEngineer(engineer))
    .join(""));
    html.push(team.filter(employee => employee.getRole() === "Intern")
    .map(intern => makeIntern(intern))
    .join(""));
    return html.join("")
};

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 header">
                <h1 class="text-center">The Perfect Coding Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="team-card col-12 d-flex justify-content-center">
                ${outputTeam(team)}
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html> `;
};
