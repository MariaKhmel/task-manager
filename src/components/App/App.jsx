import { Routes, Route } from "react-router-dom";
import HomeView from "../views/HomeView";
import RegisterView from "../views/RejisterView";
import LoginView from "../views/LoginView";
import ToDosView from "../views/ToDosView";
import AppBar from "../AppBar";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route exact path="/" Component={HomeView} />
        <Route path="/register" Component={RegisterView} />
        <Route path="/login" Component={LoginView} />
        <Route path="/todos" Component={ToDosView} />
      </Routes>
    </>
  );
}

export default App;
