import React from "react";
import "./Nav.css";


const Nav = props => (
      <nav className="navbar navbar-dark bg-primary">
        <ul>
          <li>
            <h3>Memory Game</h3>
          </li>

          <li>
            <h3>{props.greeting}</h3>
          </li>
          <li>
            <h3>
              Score: <span>{props.score}</span> | Top Score: <span>
              {props.topScore}</span>
            </h3>
          </li>
        </ul>
      </nav>
    );


export default Nav;
