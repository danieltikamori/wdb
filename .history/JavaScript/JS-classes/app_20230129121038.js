class Color {
  //capitalized name
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.colorName = name; //or just name
  }

  methodGreet() {
    return `Hello from ${this.colorName} color!!!`;
  }
  // methodRGB(){
  //   return `${this.r}, ${this.g}, ${this.b}`;
  // }
  // or
  methodRGB() { //or just rgb
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  methodRGBA(a=1.0){
    
  }

  methodHEX() { // or just hex
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 0, 0, "red");
const white = new Color(255, 255, 255, "white");
