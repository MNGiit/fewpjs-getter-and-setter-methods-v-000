// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diameter() {
    this.diameter = this.radius * 2;
  }
  get diameter() {
    return this.diameter;
  }
}