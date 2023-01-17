function Header() {
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

function MainContent() {
  return (
    <div className="main">
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordon Walke</li>
        <li>Has well over 100K stars in GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <hr />
      <h1>Reasons I am excited to learn React</h1>
      <ol>
        <li>Want to learn something new</li>
        <li>Extensive Community</li>
        <li>Most loved and used library</li>
        <li>High paying jobs</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2023 EJH development. All rights reserved.</small>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
