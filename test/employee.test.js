const EMPLOYEE = require("../lib/employee");


test("Creates a new Employee", () => {
    const employee = new EMPLOYEE("Camden", 123, "camdenwhirl@gmail.com");

    expect(employee.name).toBe("Camden");
    expect(employee.id).toEqual(123);
    expect(employee.email).toBe("camdenwhirl@gmail.com");
});