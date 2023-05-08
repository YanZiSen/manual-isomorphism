interface newItem {
  desc: string;
  id: number;
}

export const newsList: newItem[] = [
  {
    desc: "没什么新闻",
    id: 1,
  },
];

export const getNews = async () => {
  console.log("getNews");
  return newsList;
};
