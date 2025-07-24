function genError(msg?: string) {
  throw new Error(msg);
}

genError("A error");

type UserProps = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};

let input = null;
// const didProvideInput = input || false;
const didProvideInput = input ?? false;
