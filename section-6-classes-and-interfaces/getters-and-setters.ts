class User {
  private _firstName = "";
  private _lastName = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";

  static greet() {
    console.log("Hello");
  }
}

const max = new User();
max.firstName = "Max";
max.lastName = "Crazy";
console.log(max.fullName);

class Employee extends User {
  constructor(public jobTitle: string) {
    super();
    //.. super.firstName = 'Max'
  }

  work() {
    //..
  }
}

abstract class UIElement {
  constructor(public id: string) {}

  abstract clone(target: string): void;
}

class SideDrawerElement extends UIElement {
  constructor(public id: string, public position: "left" | "right") {
    super(id);
  }

  clone(target: string) {}
}
