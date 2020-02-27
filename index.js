// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    return this.radius * this.radius * 3.14;
  }
}