import { Link } from 'react-router-dom'

function NavbarKudos() {

  return (
    <>
        <nav className="navbar navbar-expand-md bg-light mb-4">
          <div className="container-fluid">
          <h4 className="p-1">My company</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-2" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                </li>
              </ul>
                <button className="btn btn-outline-secondary" type="submit">Log out</button>
            </div>
          </div>
        </nav>
    </>
  );
}

export default NavbarKudos;
