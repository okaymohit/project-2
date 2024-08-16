import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCapsules } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const Islogin = localStorage.getItem('Status');


  return (
    <>
      {/* <!---------------------------------Navbar ----------------------------> */}
      <div className="superNav border-bottom py-2 bg-light">
      </div>
      <div></div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm" style={{ opacity: 0.5 }}>
        <div className="container" id='navbar'>
          <NavLink className="navbar-brand" to="/"><FontAwesomeIcon icon={faCapsules} /> <strong>Pharmafleet</strong></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group" style={{ backgroundColor: "#0d6efd" }}>
                <span className="border-warning input-group-text bg-warning text-white" ><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <input type="text" className="form-control border-warning" />
                <button className="btn btn-warning text-white" style={{ backgroundColor: "#0d6efd" }}>Search</button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to='/' className="nav-link mx-2 text-uppercase">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link mx-2 text-uppercase">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/medicens" className="nav-link mx-2 text-uppercase">Medicines</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link mx-2 text-uppercase">About</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              {Islogin ? (
                <li className="nav-item">
                  <NavLink className="nav-link mx-2 text-uppercase" to="/logout"><FontAwesomeIcon icon={faUser} /> Logout</NavLink>
                </li>
              ) :
                (
                  <><li className="nav-item">
                    <NavLink className="nav-link mx-2 text-uppercase" to="/login"><FontAwesomeIcon icon={faUser} /> Login</NavLink>
                  </li><li className="nav-item">
                      <NavLink className="nav-link mx-2 text-uppercase" to="/registration"><FontAwesomeIcon icon={faUser} /> Registration</NavLink>
                    </li></>
                )}

            </ul>
          </div>
        </div>
      </nav>
      {/* <!---------------------------------Navbar ----------------------------> */}
    </>
  );
}
export default Navbar
