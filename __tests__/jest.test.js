
describe("person object",() => {
  test("should display person name and age in an object", () => {
    let person1 = new Person("Ali", 27);
    expect(person1.name).toEqual("Ali");
    expect(person1.age).toEqual(27);
  });
});
