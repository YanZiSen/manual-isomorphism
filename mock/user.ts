interface User {
  name: string;
  age: number;
  address: string;
}

export const user: User = {
  name: "Tim",
  age: 200,
  address: "sdfasdfasdfasdf",
};

export const getUser = () => {
  console.log("invoke");
  return Promise.resolve(user);
};
