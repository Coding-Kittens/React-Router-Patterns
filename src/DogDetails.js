import { useParams } from "react-router-dom";
import "./DogDetails.css";
const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const [dog] = dogs.filter((dog) => dog.name === name);
  return (
    <div className="DogDetails">
      {" "}
      <h1>{dog.name}</h1>
      <h2>Facts:</h2>
      <img src={dog.src} alt={dog.name} />
      <ul>
        <li>{`${dog.name} is ${dog.age} years old.`}</li>
        {dog.facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
};
export default DogDetails;
