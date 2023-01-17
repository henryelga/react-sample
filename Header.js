import React from "react"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="react.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}
