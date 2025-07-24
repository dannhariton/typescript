// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

type Role = "admin" | "editor" | "guest" | "reader";
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let role: Role = "admin";

function access(role: Role) {
  //..
}

let res: [1 | -1, 1 | -1];

res = [-1, 1];
