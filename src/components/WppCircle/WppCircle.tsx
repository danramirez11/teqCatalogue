import "./WppCircle.css";

import { FaWhatsapp } from "react-icons/fa";

const WppCircle = () => {
  const handleClick = () => {
    window.open("https://wa.link/wm03ff", "_blank");
  };

  return (
    <div className="wppCircle" onClick={handleClick}>
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WppCircle;
