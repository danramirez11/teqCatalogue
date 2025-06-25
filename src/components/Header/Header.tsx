import type { ConHeader } from "../../types/containers";
import "./Header.css";

const Header = ({ header }: { header: ConHeader }) => {
  return (
    <section className="header">
      <img src={header.image} alt="" />
      <h1>{header.name}</h1>
      <p>{header.desc}</p>
      <div className="tags">
        {header.tags &&
          header.tags.length > 0 &&
          header.tags.map((t, i) => {
            return (
              <p key={i} className="tag">
                {t}
              </p>
            );
          })}
      </div>
      <div className="separatorLine" />
    </section>
  );
};

export default Header;
