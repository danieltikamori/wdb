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

  innerRGB(){ //function
    const {r,g,b} = this;
    return `${r} ${g} ${b}`;
  }
  // methodRGB(){
  //   return `${this.r}, ${this.g}, ${this.b}`;
  // }
  
  methodRGB() { //or just rgb
    return `RGB(${this.innerRGB()})`;
  }

  methodRGBA(a=1.0){
    return `RGBA(${this.innerRGB()}, ${a})`;
  }

  methodHEX() { // or just hex
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 0, 0, "red");
const white = new Color(255, 255, 255, "white");

//try:
document.body.style.backgroundColor = red.rgba(0.8)