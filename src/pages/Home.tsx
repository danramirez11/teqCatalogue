import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>home</h1>

      <button className="green" onClick={() => navigate("/envases")}>
        envases
      </button>
    </>
  );
};

export default Home;
