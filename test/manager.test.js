const MANAGER = require("../lib/manager");


test("Creates a new Manager", () => {
    const manager = new MANAGER("Camden", 123, "camdenwhirl@gmail.com", 56);

    expect(manager.name).toBe("Camden");
    expect(manager.id).toEqual(123);
    expect(manager.email).toBe("camdenwhirl@gmail.com");
    expect(manager.officeNumber).toEqual(100);
    expect(manager.getofficeNumber()).toEqual(56);
    expect(manager.getRole()).toBe("Manager");
});