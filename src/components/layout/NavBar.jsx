const m = require("mithril");

import NavButton from "../ui/NavButton.jsx";
import { home, list, smile, frown, add, map } from "../../services/svg.jsx"
import img from "../../services/images/santa.png"

const NavBar = {
  view: () => (
    <nav class="navbar fixed-bottom navbar-expand-lg navbar-light" style="background-color: rgb(228, 114, 114)">
      {/* <div class="nav-bar"> */}
      <div class="container-fluid">
        {/* button that pulls up nav menu when displayed on phone screen */}

        {/* home path set to the app title in the navbar */}
        <a class="navbar-brand" href="#">
          Naughty or Nice
          {/* <img src={img} alt="" width="" height="24" class="d-inline-block align-top"></img> */}
          <img src={img} alt=""></img>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>



        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* paths can be named whatever you want */}
            <NavButton path={`santas-list`} icon={list} linkText={` SANTAS LIST`} />
            <NavButton path={`nice-list`} icon={smile} linkText={` NICE LIST`} />
            <NavButton path={`naughty-list`} icon={frown} linkText={` NAUGHTY LIST`} />
            <NavButton path={`add-child`} icon={add} linkText={` ADD PERSON`} />
            <NavButton path={`map`} icon={map} linkText={` MAP`} />
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  ),
};

export default NavBar;
