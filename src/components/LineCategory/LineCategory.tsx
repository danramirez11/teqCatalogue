import type { ConCategory } from "../../types/containers";
import "./LineCategory.css";

const LineCategory = ({ line }: { line: ConCategory }) => {
  return (
    <section className="lineCategory">
      <h3>{line.name}</h3>
      {line.lids && line.lids.length > 0 && (
        <div className="lids">
          <small>tapas disponibles</small>
          {line.lids.map((l, i) => {
            return (
              <div key={i} className="lid">
                <img src={l} alt={l} />
              </div>
            );
          })}
        </div>
      )}
      {line.images &&
        line.images.length > 0 &&
        line.images.map((i, j) => {
          return (
            <div key={j} className="image">
              <img src={i} alt={i} />
            </div>
          );
        })}
      <hr />
    </section>
  );
};

export default LineCategory;
