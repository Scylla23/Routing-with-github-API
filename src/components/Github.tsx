import axios from "axios";
import { useLoaderData } from "react-router-dom";

interface GithubData {
  followers: number;
  name: string;
  avatar_url: string;
  login: string;
}

const Github = () => {

    const data = useLoaderData() as GithubData;
//   const [data, setData] = useState<GithubData | null>(null);

//   useEffect(() => {
//     axios
//       .get("https://api.github.com/users/Scylla23")
//       .then((response) => setData(response.data))
//       .catch((err) => console.log(err));
//   }, []);

  return (
    <div className="text-center  bg-gray-200 text-gray-800 m-4 p-4 text-3xl">
      Github Info
      <div className="text-3xl">Name: {data?.name}</div>
      <div className="text-3xl">UserName: {data?.login}</div>
      <img src={data?.avatar_url} alt="Github Picture" />
    </div>
  );
};

export default Github;

export const GithubInfoLoader = async () => {
  let res = await axios.get("https://api.github.com/users/Scylla23")
  return res.data;
};
