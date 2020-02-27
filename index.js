// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diameter() {
    this.diameter = this.radius * 2;
  }
  get diameter() {
    return this.radius * 2;
  }
  
  get circumference() {
    return diameter() * 3.14;
  }
  
  get area() {
    
  }
}