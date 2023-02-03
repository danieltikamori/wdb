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

  innerRGB(){
    const {r,g,b} = this;
    return `${r} ${g} ${b}`;
  }
  // methodRGB(){
  //   return `${this.r}, ${this.g}, ${this.b}`;
  // }
  // or
  methodRGB() { //or just rgb
    this.innerRGB()
    return `RGB(this.innerRGB)`;
  }

  methodRGBA(a=1.0){
    const { r, g, b, a } = this;
    return `RGBA(${r}, ${g}, ${b}, ${a})`;
  }

  methodHEX() { // or just hex
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 0, 0, "red");
const white = new Color(255, 255, 255, "white");
