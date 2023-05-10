import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { getNews } from "../mock/news";
import { useDataFromLoader } from "../utils/useDataFromLoader";
export const Layout = () => {
  const news = useDataFromLoader(Layout.loader);
  return (
    <div>
      Hello world;
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user">User</NavLink>
      {news.map((item) => {
        return <div key={item.id}>{item.desc}</div>;
      })}
      <Outlet />
    </div>
  );
};

Layout.loader = getNews;
