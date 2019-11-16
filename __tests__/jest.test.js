import {Person, mercuryYear, venusYear, marsYear, jupiterYear} from './../src/backend.js';

describe("Person",() => {
  let person1;
  beforeEach(() => {
    person1 = new Person("Ali", 27, "yes", "jupiter");
  });

  test("should display person name, age, yes or no if they exercise, and what planet in an object", () => {
    expect(person1.name).toEqual("Ali");
    expect(person1.age).toEqual(27);
    expect(person1.exercise).toEqual("yes")
  });

  test("calculate persons age on different planets", () => {
    expect(person1.checkAge()).toEqual(2);
  });

  test("how many years they will live if they anwer yes or no to exercising", () =>{
    expect(person1.checkExercise()).toEqual(100);
  });

  test("how many years they have left on a given planet", () =>{
    expect(person1.checkPlanetYearsLeft()).toEqual(6);
  });
  test("how far past life expectancy they have lived", () =>{
    expect(person1.yearsPast()).toEqual(undefined);
  });
});
