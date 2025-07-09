import { useNavigate } from "react-router";
import logo from "../assets/logo-todo-envases.png";
import "./Home.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { menuButtons } from "../data/buttons";
import LineButton from "../components/LineButton/LineButton";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="page homePage">
      <img src={logo} alt="Logo Todo Envases Y Químicos" />
      <h3>Bienvenido a Nuestro Catálogo</h3>
      <section className="linesButtons menuButtons">
        {menuButtons.map((b, i) => {
          return (
            <LineButton
              name={b.name}
              image={b.image}
              key={i}
              onClick={() => {
                navigate(b.url);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          );
        })}
        <TbHandClick className="menu-click" size={75} fill="white" />
      </section>

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
