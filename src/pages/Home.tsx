import { useNavigate } from "react-router";
import logo from "../assets/logo-todo-envases.png";
import "./Home.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
        <button className="blue" onClick={() => navigate("/quimicos")}>
          Químicos
        </button>
        <p>Presiona un botón para ver su respectivo catálogo</p>
      </div>

      <section className="social-media">
        <FaInstagram
          size={30}
          onClick={() =>
            window.open("https://www.instagram.com/tequimicos/", "_blank")
          }
          cursor={"pointer"}
        />
        <FaFacebook
          size={30}
          onClick={() =>
            window.open("https://www.facebook.com/envasesyquimicos", "_blank")
          }
          cursor={"pointer"}
        />
      </section>
    </section>
  );
};

export default Home;
