// Add your Circle class here
let pi = 3.14;
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference( circumference ) {
    this.radius = circumference / (3.14 * 2);
  }

  get circumference() {
    return (this.radius * 2) * 3.14;
  }

  set area(area) {
    this.radius = Math.sqrt(area / 3.14);
  }

  get area() {
    return pi * (this.radius * this.radius);
  }
}