import {Person, mercuryYear, venusYear, marsYear, jupiterYear} from './../src/backend.js';
describe("Person",() => {
  test("should display person name, age, yes or no if they exercise, and what planet in an object", () => {
    let person1 = new Person("Ali", 27, "yes", "earth");
    expect(person1.name).toEqual("Ali");
    expect(person1.age).toEqual(27);
    expect(person1.exercise).toEqual("yes")
  });
  test("calculate persons age on different planets", () => {
    let person2 = new Person("Ali",27, "yes", "venus");
    expect(person2.checkAge()).toEqual(43);
  });
  test("how many years they will live if they anwer yes or no to exercising", () =>{
    let person3 = new Person("Ali",27 ,"yes", "mercury");
    expect(person3.checkExercise()).toEqual(100);
  });
});
