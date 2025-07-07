import LineButton from "../../components/LineButton/LineButton";
import "./Containers.css";
import { allLines } from "../../data/containers";
import Header from "../../components/Header/Header";
import LineCategory from "../../components/LineCategory/LineCategory";
import useSectionRefs from "../../hooks/useRefs";
import logo from "../../assets/logo-todo-envases.png";
import Back from "../../components/Back/Back";

const Containers = () => {
  const sectionRefs = useSectionRefs(allLines.map((line) => line.id));

  const scrollToSection = (id: string) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="page conatinersPage">
      <Back />
      <h1>Catálogo Envases Plásticos</h1>

      <section className="linesButtons">
        {allLines.map((line, index) => (
          <LineButton
            key={index}
            name={line.header.name}
            image={line.header.image}
            onClick={() => scrollToSection(line.id)}
          />
        ))}
      </section>

      <section className="separator">
        <img src={logo} alt="Logo Todo Envases y Químicos" />
        <p>
          <b>
            Variedad de tamaños y estilos para
            <span className="textBlue"> adaptarse a tu negocio.</span>
          </b>
        </p>
      </section>

      {allLines.map((line, index) => (
        <div key={index} className="lineSection" ref={sectionRefs[line.id]}>
          <Header key={index} header={line.header} />
          {line.categories.map((category, catIndex) => {
            const isLast = catIndex === line.categories.length - 1;
            return (
              <div key={catIndex}>
                <LineCategory line={category} />
                {isLast ? (
                  <div className="endOfCategory" />
                ) : (
                  <div className="separatorLine" />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default Containers;
