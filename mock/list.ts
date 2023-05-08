interface Item {
  name: string;
  age: number;
}
export const list: Item[] = [
  {
    name: "Bob",
    age: 20,
  },
];

export const getList = () => {
  console.log("invoke");
  return Promise.resolve(list);
};
