import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Employee from "./Employee";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Error from "./pages/Error";
import Add from './component/Add';
import Details from "./component/Details";
import Edit from './component/Edit';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Crud Operation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Employees
              </Link>
              <Link className="nav-link" to="/about-us">
                About us
              </Link>
              <Link className="nav-link" to="/policy">
                Policy
              </Link>
            </div>
          </div>
        </div>
      </nav>

     <div className="container">
     <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<Error />} />
        <Route path="/employee/add" element={<Add />} />
        <Route path="/employee/detail/:id" element={<Details />} />
        <Route path="/employee/edit/:id" element={<Edit />} />




      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
