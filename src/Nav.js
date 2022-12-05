import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = ({ names }) => {
  return (
    <div className="Nav-Bar">
      <NavLink className="Nav-Home" end to={"/dogs"}>
        Home
      </NavLink>
      {names.map((name) => (
        <NavLink className="Nav" end to={`/dogs/${name}`}>
          {name}
        </NavLink>
      ))}
    </div>
  );
};
export default Nav;
