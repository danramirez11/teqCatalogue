import LineButton from "../../components/LineButton/LineButton";
import "./Containers.css";
import { images } from "../../data/images";
import React from "react";
import { allLines } from "../../data/containers";
import Header from "../../components/Header/Header";
import LineCategory from "../../components/LineCategory/LineCategory";

const Containers = () => {
  const pharmacyRef = React.useRef<HTMLDivElement>(null);

  const scrollToPosition = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="page conatinersPage">
      <h1>Catálogo Envases</h1>

      <LineButton
        name={"Línea Farmacéutica"}
        image={images.varsol}
        onClick={() => scrollToPosition(pharmacyRef)}
      />

      {allLines.map((line, index) => (
        <div className="divLine" ref={pharmacyRef}>
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
