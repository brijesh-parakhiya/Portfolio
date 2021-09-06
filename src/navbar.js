import React , {useState} from 'react'
import Time from '../src/add/time'


function navbar() {


    return (
      
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">PROFILE</a>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Skill</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#" >Portfolio</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="contact" >Contact</a>
      </li>

    </ul>

  </div>
  <Time/>
</nav>
        </div>
    )
}

export default navbar



// _______________________________________






// ------------------------------------------------------------------