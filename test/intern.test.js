const INTERN = require("../lib/intern");


test("Creates a new Intern", () => {
    const intern = new INTERN("Camden", 123, "camdenwhirl@gmail.com", "Denver University");
    
    expect(intern.name).toBe("Camden");
    expect(intern.id).toEqual(123);
    expect(intern.email).toBe("camdenwhirl@gmail.com");
    expect(intern.school).toBe("Denver University");
    expect(intern.getSchool()).toBe("Denver University");
    expect(intern.getRole()).toBe("Interncamdenwhirl@gmail.com");
});