import { useNavigate } from "react-router";
import logo from "../assets/logo-todo-envases.png";
import "./Home.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="page homePage">
      <img src={logo} alt="Logo Todo Envases Y Químicos" />
      <h3>Bienvenido a Nuestro Catálogo</h3>
      <p>¿Qué te Gustaría Explorar?</p>
      <span className="clickText">
        <p>Dale click a los botones azules</p> <TbHandClick />{" "}
      </span>
      <div className="buttons">
        <button className="blue" onClick={() => navigate("/envases-plasticos")}>
          Envases Plásticos
        </button>
        <button className="blue" onClick={() => navigate("/envases-vidrio")}>
          Envases de Vidrio
        </button>
        <button
          className="blue"
          onClick={() => navigate("/extractos-industriales")}
        >
          Extractos Industriales
        </button>
        <button
          className="blue"
          onClick={() => navigate("/herramientas-emprender")}
        >
          Herramientas para Emprender
        </button>
        <button className="blue" onClick={() => navigate("/quimicos")}>
          Productos Químicos
        </button>
        <button className="blue" onClick={() => navigate("/tapas")}>
          Tapas
        </button>
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
