let hobbies = ["Sports", "Cookies", 10];

hobbies.push("Hey");
hobbies.push(10);

// let users : (string | number)[];
let users: Array<string | number>;

let results: [number, number];

results = [-1, 1];
// results = [5, 10, 12];
// results = [-1, "1"]; // erorr, string not type number

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Max",
  age: 38,
  hobbies: ["sport"],
  role: {
    description: "hi",
    id: 12,
  },
};

let val: {} = "value";

let obj: Record<string, string | number>;

obj = {
  entry1: 2,
  entry2: "2",
};
