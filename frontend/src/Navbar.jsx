import './style.css'


export default function Navbar() {
  return (
<>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#hero">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About me{" "}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service">
            My Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



</>


  )
}
