import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginView;
