import type { ConCategory } from "../../types/containers";
import "./LineCategory.css";

const LineCategory = ({ line }: { line: ConCategory }) => {
  return (
    <section className="lineCategory">
      <h3>{line.name}</h3>
      {line.lids && line.lids.length > 0 && (
        <>
          <small>Tapas Disponibles</small>
          <div className="lids">
            {line.lids.map((l, i) => {
              return (
                <div key={i} className="lid">
                  <img src={l} alt={l} />
                </div>
              );
            })}
          </div>
        </>
      )}
      <div className="images">
        {line.images &&
          line.images.length > 0 &&
          line.images.map((i, j) => {
            return (
              <div key={j} className="image">
                <img src={i} alt={i} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default LineCategory;
