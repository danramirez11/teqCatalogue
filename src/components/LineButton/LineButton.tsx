import "./LineButton.css";

interface LineButtonProps {
  name: string;
  onClick: () => void;
  image: string;
}

const LineButton = ({ name, onClick, image }: LineButtonProps) => {
  return (
    <button
      className="lineButton"
      onClick={onClick}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.8), transparent), url("${image}")`,
      }}
    >
      <h3>{name}</h3>
    </button>
  );
};

export default LineButton;
