// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Link
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdown"
//               role="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link disabled" href="#">
//               Disabled
//             </a>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// }

// function MainContent() {
//   return <h1>I'm learning React!</h1>;
// }

// JSX

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// const h2 = document.createElement("h2");
// h2.textContent = "This is an imperative way to program";
// h2.className = "header";
// document.getElementById("root").append(h2);

// const h1 = <h1>ReactJS Sample</h1>
// console.log(h1);

// ReactDOM.render(h1, document.getElementById("root"));

// const navBar = (
//   <nav>
//     <h1>ReactJS Sample</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(navBar, document.getElementById("root"));

// const MainContent = (
//   <div>
//     <img src="react.png" width="40px" />
//     <h1>Fun Facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordon Walke</li>
//       <li>Has well over 100K stars in GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

function Page() {
  return (
    <div>
      <header>
        <img src="react.png" width="40px" />
        <h1>ReactJS Sample</h1>
      </header>
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
      <ul>
        <li>Want to learn something new</li>
        <li>Extensive Community</li>
        <li>Most loved and used library</li>
        <li>High paying jobs</li>
      </ul>
      <footer>
        <small>© 2023 EJH development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
