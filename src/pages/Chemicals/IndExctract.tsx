import Back from "../../components/Back/Back";
import { industrialExtracts } from "../../data/chemicals";
import "./Chemicals.css";

const IndExtract = () => {
  return (
    <section className="page chemicalsPage">
      <Back />
      <img
        src="https://manuartestore.com/colombia/wp-content/uploads/2020/12/AdobeStock_331920136-1024x501-1.jpg"
        alt=""
        className="chemicalsImage"
      />
      <h1>Extractos Industriales</h1>

      <section className="chemProducts">
        <div className="catChemicals">
          {industrialExtracts.map((product, index) => {
            return <p key={index}>{product}</p>;
          })}
        </div>
      </section>
    </section>
  );
};

export default IndExtract;
