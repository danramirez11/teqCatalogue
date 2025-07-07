import { FaArrowLeft } from "react-icons/fa";
import "./Back.css";

const Back = () => {
  return (
    <div className="back" onClick={() => window.history.back()}>
      <span className="go-back">
        <FaArrowLeft />
        <p>Volver atrás</p>
      </span>
    </div>
  );
};

export default Back;
