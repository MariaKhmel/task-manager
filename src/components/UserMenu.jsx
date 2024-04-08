import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import authSelectors from "./redux/authSelectors";
console.log(authSelectors);
import authOpertions from "./redux/authOperations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  console.log(name);
  const avatar = "defAvatar";
  return (
    <>
      <div>
        {avatar}
        <span>Welcome, {name}</span>
        <button type="button" onClick={() => dispatch(authOpertions.logOut())}>
          Log out
        </button>
      </div>
    </>
  );
};

export default UserMenu;
