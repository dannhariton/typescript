function add(a: number, b: number) {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logThrow(error: string): never {
  console.log(error);
  throw new Error(error);
}

function job(callback: (message: string) => void) {
  //..
  callback("job done");
}

job(log);

type User2 = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User2 = {
  name: "max",
  age: 39,
  greet() {
    console.log("hello");
    return this.name;
  },
};

user.greet();
