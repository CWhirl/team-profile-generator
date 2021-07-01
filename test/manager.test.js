const Manager = require("../lib/manager");


test("Creates a new Manager", () => {
    const manager = new Manager("Trevor", 1, "tbnyk03@gmail.com", 100);

    expect(manager.name).toBe("Trevor");
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe("tbnyk03@gmail.com");
    expect(manager.officeNumber).toEqual(100);
    expect(manager.getofficeNumber()).toEqual(100);
    expect(manager.getRole()).toBe("Manager");
});