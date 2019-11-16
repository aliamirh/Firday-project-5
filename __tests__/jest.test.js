import {Person, mercuryYear, venusYear, marsYear, jupiterYear} from './../src/backend.js';

describe("Person",() => {
  let person1;
  beforeEach(() => {
    person1 = new Person("Ali", 27, "yes", "mercury");
  });

  test("should display person name, age, yes or no if they exercise, and what planet in an object", () => {
    expect(person1.name).toEqual("Ali");
    expect(person1.age).toEqual(27);
    expect(person1.exercise).toEqual("yes")
  });

  test("calculate persons age on different planets", () => {
    expect(person1.checkAge()).toEqual(304);
  });

  test("how many years they will live if they anwer yes or no to exercising", () =>{
    expect(person1.checkExercise()).toEqual(100);
  });

  test("how many years they have left on a given planet", () =>{
    expect(person1.checkPlanetYearsLeft()).toEqual(undefined);
  });
});
