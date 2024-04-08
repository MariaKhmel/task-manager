import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" exact>
        Registration
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
