// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.diameter = radius * radius * 3.14;
  }
  
  get diameter() {
    return this.diameter;
  }
}