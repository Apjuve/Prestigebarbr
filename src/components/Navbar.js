import React from "react";


function Navbar ({currentPage, handlePageChange}) {
    return (
        <nav>
            <div>
                <a href="/">
                    PrestigeBarber 
                </a>
            </div>

            <div>
                <ul>
                <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#Services"
                onClick={() => handlePageChange("Services")}
                className={
                  currentPage === "Services" ? "nav-link active" : "nav-link"
                }
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            </ul>
            </div>
        </nav>
    )
}


export default  Navbar;