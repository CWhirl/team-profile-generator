const ENGINEER = require("../lib/engi");


test("Creates a new Engineer", () => {
    const engineer = new ENGINEER("Camden", 123, "camdenwhirl@gmail.com", "CWhirl");

    expect(engineer.name).toBe("Camden");
    expect(engineer.id).toEqual(123);
    expect(engineer.email).toBe("camdenwhirl@gmail.com");
    expect(engineer.github).toBe("CWhirl");
    expect(engineer.getGithub()).toEqual("CWhirl");
    expect(engineer.getRole()).toBe("Engineer");
});

