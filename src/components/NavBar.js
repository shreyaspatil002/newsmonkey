import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg nav justify-content-center navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item"> <a className="nav-link" href="/">About us</a></li>
                  <a className="nav-link" href="/general">general</a>
                  <a className="nav-link" href="/sports">sports</a>
                  <a className="nav-link" href="/science">science</a>
                  <a className="nav-link" href="/business">business</a>
                  <a className="nav-link" href="/health">health</a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
