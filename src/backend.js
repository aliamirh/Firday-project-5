export const mercuryYear = .24
export const venusYear = .62
export const marsYear = 1.88
export const jupiterYear = 11.68




export class Person {
  constructor (name, age, exercise, planet) {
  this.name = name;
  this.age = age;
  this.exercise = exercise;
  this.planet = planet;
  }
  checkAge(){
    if (this.planet === "mercury"){
      return Math.floor(this.age / mercuryYear)
    }else if (this.planet === "venus"){
      return Math.floor(this.age / venusYear)
    }else if (this.planet === "mars"){
      return Math.floor(this.age / marsYear)
    }else if (this.planet === "jupiter"){
      return Math.floor(this.age / jupiterYear)
    }
  }
  checkExercise(){
    if (this.exercise === "yes"){
      return 100;
    }else if(this.exercise === "no"){
      return 80;
    }
  }
  checkPlanetYearsLeft(){
    if (this.planet === "mercury"){
      return Math.floor((this.checkExercise() - this.age) / mercuryYear);
    }else if(this.planet === "mercury"){
      return Math.floor((this.checkExercise() - this.age) / venusYear);
    }else if(this.planet === "mars"){
      return Math.floor((this.checkExercise() - this.age) / marsYear);
    }else if(this.planet === "jupiter"){
      return Math.floor((this.checkExercise() - this.age) / jupiterYear);
    }
  }
  yearsPast(){
    if (this.checkAge() > this.checkExercise()){
      return this.checkAge() - this.checkExercise();
    }else{
      return "not past life expectancy"
    }
  }
};
