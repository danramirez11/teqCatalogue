import Back from "../../components/Back/Back";
import Header from "../../components/Header/Header";
import LineCategory from "../../components/LineCategory/LineCategory";
import { onlyLidsLine } from "../../data/containers";

const LidsOnly = () => {
  return (
    <section className="page conatinersPage">
      <Back />
      <h1>Catálogo de Tapas</h1>

      {onlyLidsLine.map((line, index) => (
        <div key={index} className="lineSection">
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

export default LidsOnly;
