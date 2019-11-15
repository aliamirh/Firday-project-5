import {Person, mercuryYear, venusYear, marsYear, jupiterYear} from './../src/backend.js';
describe("Person",() => {
  test("should display person name and age in an object", () => {
    let person1 = new Person("Ali", 27, true, "earth");
    expect(person1.name).toEqual("Ali");
    expect(person1.age).toEqual(27);
    expect(person1.exercise).toEqual(true)
  });
  test("calculate persons age on different planets", () => {
    let person2 = new Person("Ali",27, true, "mercury");
    expect(person2.checkAge()).toEqual(undefined);

  });
});
