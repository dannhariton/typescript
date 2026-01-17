function addNumbers(a: number, b: number) {
  return a + b;
}

function multiplyNumbers(a: number, b: number) {
  return a * b;
}

function findLargest(numbers: number[]) {
  let largest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

function getLetterCount(str: string) {
  let letterCount: Record<string, number> = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;
}

const myNumber = 42;
const myString = "Hello, TypeScript!";
const myBoolean = true;
const myArray = [1, 2, 3, 4, 5];
const myObject = { name: "John Doe", age: 30 };

let myAny: any = 42;
myAny = "Hello, TypeScript!";
myAny = { name: "Jane Doe", age: 25 };
/* ******************************************************************************************************************************** */

function linearSearch(array: number[], target: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

function binarySearch(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number) {
    this.value = value;
    this.children = [];
  }

  addChild(node: TreeNode) {
    this.children.push(node);
  }
}

function depthFirstSearch(root: TreeNode, target: number) {
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    if (!node) return;
    if (node.value === target) {
      return node;
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }

  return null;
}

let root = new TreeNode(1);
let child1 = new TreeNode(2);
let child2 = new TreeNode(3);
let grandchild1 = new TreeNode(4);
let grandchild2 = new TreeNode(5);

// 2. Cover the following code with types. Each class should implement an interface
interface BurgerType {
  patty?: string;
  cheese?: string;
  sauce?: string;
  toppings?: string[];
}

class BurgerBuilder {
  burger: BurgerType;

  constructor() {
    this.burger = {};
  }

  addPatty(type: string) {
    this.burger.patty = type;
    return this;
  }

  addCheese(type: string) {
    this.burger.cheese = type;
    return this;
  }

  addSauce(type: string) {
    this.burger.sauce = type;
    return this;
  }

  addToppings(toppings: string[]) {
    this.burger.toppings = toppings;
    return this;
  }

  build() {
    return new Burger(this.burger);
  }
}

class Burger {
  patty: string | undefined;
  cheese: string | undefined;
  sauce: string | undefined;
  toppings: string[] | undefined;

  constructor(burger: BurgerType) {
    this.patty = burger.patty;
    this.cheese = burger.cheese;
    this.sauce = burger.sauce;
    this.toppings = burger.toppings;
  }

  describe() {
    let description = `Burger with ${this.patty} patty, `;
    if (this.cheese) {
      description += `${this.cheese} cheese, `;
    }
    if (this.sauce) {
      description += `${this.sauce} sauce, `;
    }
    if (this.toppings) {
      description += `${this.toppings.join(", ")} toppings`;
    }
    return description;
  }
}

let burger = new BurgerBuilder()
  .addPatty("beef")
  .addCheese("cheddar")
  .addSauce("ketchup")
  .addToppings(["lettuce", "tomato"])
  .build();
console.log(burger.describe());

/* ******************************************************************************************************************************** */
class Person {
  name: any;
  age: any;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`);
  }
}
/* ******************************************************************************************************************************** */
class BankAccount {
  owner: any;
  balance: any;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`${amount} deposited. Current balance is ${this.balance}.`);
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log(`Insufficient funds. Current balance is ${this.balance}.`);
    } else {
      this.balance -= amount;
      console.log(`${amount} withdrawn. Current balance is ${this.balance}.`);
    }
  }
}
/* ******************************************************************************************************************************** */
interface Shape {
  width: number;
  height: number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }
}
/* ******************************************************************************************************************************** */
interface TodoListI {
  tasks: string[];
}

class TodoList implements TodoListI {
  tasks: string[];
  constructor() {
    this.tasks = [];
  }

  addTask(task: string) {
    this.tasks.push(task);
    console.log(`Task "${task}" added. Total tasks: ${this.tasks.length}.`);
  }

  removeTask(task: string) {
    let index = this.tasks.indexOf(task);
    if (index === -1) {
      console.log(`Task "${task}" not found.`);
    } else {
      this.tasks.splice(index, 1);
      console.log(`Task "${task}" removed. Total tasks: ${this.tasks.length}.`);
    }
  }
}
/* ******************************************************************************************************************************** */
class Book {
  id: string;
  title: string;
  author: string;
  publishedYear: string;
  constructor(id: string, title: string, author: string, publishedYear: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
  }
}

class BookCollection {
  books: Book[];
  constructor() {
    this.books = [];
  }

  async fetchData() {
    const response = await fetch("https://my-book-api.com/books");
    const data = await response.json();
    this.books = data.map(
      (book: Book) => new Book(book.id, book.title, book.author, book.publishedYear)
    );
  }

  logBooks() {
    console.log(this.books);
  }

  findBookById(id: string) {
    return this.books.find((book) => book.id === id);
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  removeBookById(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
