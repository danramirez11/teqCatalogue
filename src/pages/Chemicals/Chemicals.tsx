import { chemicals } from "../../data/chemicals";
import "./Chemicals.css";

const ChemicalsPage = () => {
  return (
    <section className="page chemicalsPage">
      <img
        src="https://www.pwc.com/content/dam/pwc/gx/en/issues/esg/gettyimages-521813119-cc-metadata.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
        alt=""
        className="chemicalsImage"
      />
      <h1>Catálogo Químicos</h1>

      <section className="chemProducts">
        {Object.keys(chemicals).map((c) => {
          const key = c as keyof typeof chemicals;
          const isLast =
            c === Object.keys(chemicals)[Object.keys(chemicals).length - 1];

          return (
            <section className="chemCategory" key={c}>
              <h3>{c}</h3>
              <div className="catChemicals">
                {chemicals[key].map((product: string, index) => {
                  return <p key={index}>{product}</p>;
                })}
              </div>
              {!isLast && <div className="separatorLine" />}
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default ChemicalsPage;
