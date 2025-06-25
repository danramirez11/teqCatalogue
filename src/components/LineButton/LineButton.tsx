import "./LineButton.css";

interface LineButtonProps {
  name: string;
  onClick: () => void;
  image: string;
}

const LineButton = ({ name, onClick, image }: LineButtonProps) => {
  return (
    <button className="lineButton" onClick={onClick}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </button>
  );
};

export default LineButton;
