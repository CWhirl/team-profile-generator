const Intern = require("../lib/intern");


test("Creates a new Intern", () => {
    const intern = new Intern("Trevor", 1, "tbnyk03@gmail.com", "Denver University");
    
    expect(intern.name).toBe("Trevor");
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe("tbnyk03@gmail.com");
    expect(intern.school).toBe("Denver University");
    expect(intern.getSchool()).toBe("Denver University");
    expect(intern.getRole()).toBe("Intern");
});

