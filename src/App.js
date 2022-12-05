import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={dogs.map((dog) => dog.name)} />
        <Routes>
          <Route exact="true" path="/dogs" element={<DogList dogs={dogs} />} />
          <Route
            exact="true"
            path="/dogs/:name"
            element={<DogDetails dogs={dogs} />}
          />
          <Route exact="true" path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1200",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "https://static.stacker.com/s3fs-public/00006276.png",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "https://cdn.jwplayer.com/v2/media/YHhsX51u/poster.jpg?width=1920",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src:
        "https://www.morrisanimalfoundation.org/sites/default/files/styles/article/public/2020-03/MBS_DogEvolution_blg_031820.jpg?h=b1512c13&itok=Cqx3F-nn",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
