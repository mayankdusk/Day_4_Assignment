import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <section className="logo">
        <h1>Hootsuite</h1>
      </section>
      <section className="links">
        <ul>
          <li>Plateform</li>
          <li>Plans</li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Education</li>
        </ul>
      </section>

      <section className="signin">
        <div id="luc">
          <p id="contact">Contact Us</p>
          <p id="login">Log in</p>
        </div>
        <button>Sign Up</button>
      </section>
    </div>
  );
};

export default Navbar;
