import { getList } from "../../mock/list";
import { useDataFromLoader } from "../../utils/useDataFromLoader";
import styles from "./index.less";
import useStyles from "isomorphic-style-loader/useStyles";

const Home = () => {
  useStyles(styles);
  const list = useDataFromLoader(Home.loader);
  return (
    <div>
      <span>Hello world!</span>

      {list.map((item) => {
        return (
          <div className={styles.line} key={item.name}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

Home.loader = async () => {
  const data = await getList();
  return data;
};

export { Home };
