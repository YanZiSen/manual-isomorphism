import { getUser } from "../../mock/user";
import { useDataFromLoader } from "../../utils/useDataFromLoader";

const User = () => {
  const userInfo = useDataFromLoader(User.loader);
  return <div>user: {JSON.stringify(userInfo)}</div>;
};
User.loader = async () => {
  let data = await getUser();
  return data;
};
export { User };
