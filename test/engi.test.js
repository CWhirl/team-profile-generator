const Engineer = require("../lib/engi");


test("Creates a new Engineer", () => {
    const engineer = new Engineer("Trevor", 1, "tbnyk03@gmail.com", "tbruce00");

    expect(engineer.name).toBe("Trevor");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe("tbnyk03@gmail.com");
    expect(engineer.github).toBe("tbruce00");
    expect(engineer.getGithub()).toEqual("tbruce00");
    expect(engineer.getRole()).toBe("Engineer");
});

