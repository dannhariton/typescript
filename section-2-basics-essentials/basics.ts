let userName: string; //number, boolean
let age = 38;

userName = "Max";
// age = '32'

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add("10");
