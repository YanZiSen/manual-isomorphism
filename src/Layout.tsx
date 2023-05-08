import { Outlet } from "react-router";
import { getNews } from "../mock/news";
import { useDataFromLoader } from "../utils/useDataFromLoader";
export const Layout = () => {
  const news = useDataFromLoader(Layout.loader);
  return (
    <div>
      Hello world;
      {news.map((item) => {
        return <div key={item.id}>{item.desc}</div>;
      })}
      <Outlet />
    </div>
  );
};

Layout.loader = getNews;
