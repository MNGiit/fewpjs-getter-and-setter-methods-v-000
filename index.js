// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diameter() {
    this.diameter = this.radius * this.radius * 3.14;
  }
  get diameter() {
    return this.diameter;
  }
}