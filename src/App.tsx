import React, { useEffect, useState, useRef } from "react";
import { getList } from "../mock/list";
interface Item {
  name: string;
  age: number;
}
declare let __SSR: boolean;
const useData: <T>(initData: T) => [T, React.Dispatch<T>] = (initialData) => {
  const hasServerData = useRef(false);
  const [data, setData] = useState(() => {
    if (__SSR) {
      // @ts-ignore
      return global.__innerData;
    } else {
      let el = document.getElementById("ssrInnerData");
      let data = JSON.parse(el?.innerText || JSON.stringify(""));
      if (data) {
        hasServerData.current = true;
        el && el.parentNode?.removeChild(el);
        return data;
      }
    }
    return initialData;
  });
  useEffect(() => {
    if (hasServerData.current) {
      return;
    }
    getList().then((res) => setData(res));
  }, []);
  return [data, setData];
};

const App = () => {
  const [list, setList] = useData<Item[]>([]);
  return (
    <div>
      <span>Hello world!</span>

      {list.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </div>
  );
};
App.getInitialData = async () => {
  let data = await getList();
  return data;
};

export { App };
