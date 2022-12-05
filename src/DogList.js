import { useNavigate } from "react-router-dom";
import "./DogList.css";
const DogList = ({ dogs }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/dogs/${name}`);
  };

  return (
    <div className="DogList">
      <h1>{"Dogs!"}</h1>
      {dogs.map((dog) => (
        <div className="DogList-dog" onClick={() => handleClick(dog.name)}>
          <h2>{dog.name}</h2> <img src={dog.src} alt={dog.name} />{" "}
        </div>
      ))}
    </div>
  );
};
export default DogList;
