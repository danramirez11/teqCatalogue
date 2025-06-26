import { useNavigate } from "react-router";
import logo from "../assets/logo-todo-envases.png";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="page homePage">
      <img src={logo} alt="Logo Todo Envases Y Químicos" />
      <h3>Bienvenido a nuestro catálogo</h3>
      <p>¿Qué te gustaría explorar?</p>
      <div className="buttons">
        <button className="blue" onClick={() => navigate("/envases-plasticos")}>
          Envases Plásticos
        </button>
        <button className="blue" onClick={() => navigate("/envases-vidrio")}>
          Envases de Vidrio
        </button>
      </div>
    </section>
  );
};

export default Home;
