import React from 'react'
import './NavB.css'
import { Link } from 'react-router-dom'

function NavB() {
  return (
    <div>
      <section className="main-header">
        <div className="container ">
          <nav className="navbar navbar-expand-lg main-nav px-0 d-flex justify-content-between">
            <div>
              <a className="navbar-brand" href="/mojo">
              <h1>Avante</h1>
            </a>
            </div>
            <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar icon-bar-1" />
              <span className="icon-bar icon-bar-2" />
              <span className="icon-bar icon-bar-3" />
            </button>
            <div className="collapse navbar-collapse" id="mainMenu">
              <ul className="navbar-nav ml-auto text-uppercase f1">
                <li>
                  {/* <a href="#home" className="active active-first">home</a> */}
                  <Link to="/">home</Link>
                </li>
                <li>
                  <a href="#about">about us</a>
                </li>
                <li>
                  <a href="#service">services</a>
                </li>
                <li>
                  <a href="#project">projects</a>
                </li>
                <li>
                  <a href="#team">team</a>
                </li>
                <li>
                  <a href="#testimony">testimonils</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </div>
        {/* /.container */}
      </section>
    </div>
  )
}

export default NavB