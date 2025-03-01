/*import logo from './logo.svg';*/
import "./App.css";
import { Login } from "./CPS-Frontend/Login Page/login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Form from "./CPS-Frontend/Main Form/form";
import Landing from "./CPS-Frontend/landing/landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form/:typeid" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
