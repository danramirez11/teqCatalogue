import LineButton from "../../components/LineButton/LineButton";
import "./Containers.css";
import { allLines } from "../../data/containers";
import Header from "../../components/Header/Header";
import LineCategory from "../../components/LineCategory/LineCategory";
import useSectionRefs from "../../hooks/useRefs";

const Containers = () => {
  const sectionRefs = useSectionRefs(allLines.map((line) => line.id));

  const scrollToSection = (id: string) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="page conatinersPage">
      <h1>Catálogo Envases</h1>

      {allLines.map((line, index) => (
        <LineButton
          key={index}
          name={line.header.name}
          image={line.header.image}
          onClick={() => scrollToSection(line.id)}
        />
      ))}

      {allLines.map((line, index) => (
        <div key={index} className="lineSection" ref={sectionRefs[line.id]}>
          <Header key={index} header={line.header} />
          {line.categories.map((category, catIndex) => (
            <LineCategory key={catIndex} line={category} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Containers;
