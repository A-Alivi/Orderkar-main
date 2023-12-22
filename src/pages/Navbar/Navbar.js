import React from "react";

function Navbar()
{
    return(
        <>

  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
          ☰
        </button>
        <span class="navbar-brand">
        <a class="navbar-brand " style={{display:"inline-block"}} href="#">
          <img src={require('../../assets/images/logo/ORDERKARtagline.png')}  width="150" height="70" alt=""/>
        </a> 
        </span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link fw-bold " href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item fw-bold" href="#">Web App</a>
                    <a class="dropdown-item fw-bold" href="#">Mobile App</a>
                    <a class="dropdown-item fw-bold" href="#">Restaurent Analytics</a>
                  </div>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Packages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">About-Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Contact-US</a>
            </li>
          </ul>
        </div>
        <nav class="navbar navbar-light collapse navbar-collapse bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
    </nav>
  </header>


  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabel">Menu</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
      <li class="nav-item">
              <a class="nav-link fw-bold " href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item fw-bold" href="#">Web App</a>
                    <a class="dropdown-item fw-bold" href="#">Mobile App</a>
                    <a class="dropdown-item fw-bold" href="#">Restaurent Analytics</a>
                  </div>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Packages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">About-Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Contact-US</a>
            </li>
      </ul>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  </div>
        </>
    );
}

export default Navbar;