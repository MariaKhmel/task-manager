import { useState } from "react";
import authOpertions from "../redux/authOperations";
import { useDispatch } from "react-redux";

const RegisterView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOpertions.register({ name, email, password }));
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);
      case "name":
        return setName(value);
      default:
        return;
    }
  };
  return (
    <>
      <h1>Register Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterView;
