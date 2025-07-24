interface Authenticatable {
  //..
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

// interface Authenticatable {
//   role: string;
// }

class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login() {}
  logout() {}
}

let user: Authenticatable;

user = {
  email: "email@email.com",
  password: "abc1",
  // role: "admin",

  login() {
    // reach out to a db
  },

  logout() {
    // reach to a db
  },
};

function auth(user: Authenticatable) {}
