import { entrepenursData } from "../../data/chemicals";
import "./Chemicals.css";
import logo from "../../assets/logo-todo-envases.png";
import Back from "../../components/Back/Back";

const Entrepeneurs = () => {
  return (
    <section className="page chemicalsPage">
      <Back />
      <img
        src="https://www.niir.org/blog/wp-content/uploads/2020/08/Chemicals.jpg"
        alt=""
        className="chemicalsImage"
      />
      <h1>Herramientas para Emprender</h1>

      <section className="separator" style={{ height: "50vh" }}>
        <img src={logo} alt="Logo Todo Envases y Químicos" />
        <p>
          <b>
            Transforma tus ideas en negocio.
            <span className="textBlue">
              {" "}
              Te damos la base, tú creas la magia.
            </span>
          </b>
        </p>
      </section>

      <section className="chemProducts">
        {Object.keys(entrepenursData).map((c) => {
          const key = c as keyof typeof entrepenursData;
          const isLast =
            c ===
            Object.keys(entrepenursData)[
              Object.keys(entrepenursData).length - 1
            ];

          return (
            <section className="chemCategory" key={c}>
              <h3>{c}</h3>
              <div className="catChemicals">
                {entrepenursData[key].map((product: string, index) => {
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

export default Entrepeneurs;
