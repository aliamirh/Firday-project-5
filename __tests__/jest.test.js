import {Person, mercuryYear, venusYear, marsYear, jupiterYear} from './../src/backend.js';
describe("Person",() => {
  test("should display person name and age in an object", () => {
    let person1 = new Person("Ali", 27, true, "earth");
    expect(person1.name).toEqual("Ali");
    expect(person1.age).toEqual(27);
    expect(person1.exercise).toEqual(true)
  });
  test("calculate persons age on different planets", () => {
    let person2 = new Person("Ali",27, true, "venus");
    expect(person2.checkAge()).toEqual(43);
  });
  test("how many years they have left", () =>{
    let person3 = new Person("Ali", 27, "mars");
    expect(person3.yearsLeft()).toEqual(undefined);
  });
});
