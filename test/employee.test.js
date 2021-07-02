const EMPLOYEE = require("../lib/employee");


test("Creates a new Employee", () => {
    const employee = new EMPLOYEE("Trevor", 1, "tbnyk03@gmail.com");

    expect(employee.name).toBe("Trevor");
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe("tbnyk03@gmail.com");
});