import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink to="/" exact>
        Main
      </NavLink>
      <NavLink to="/todos" exact>
        Notes
      </NavLink>
    </>
  );
};

export default Navigation;
