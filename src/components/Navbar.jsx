

function Navbar(){

  return(
    <nav className="navbar">

      <div className="logo">
        Ashify
      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>


      <div className="nav-actions">

        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search..."
          />
        </div>


        <div className="icons-container">

          <button className="icon-btn">
            ❤️ 
            <span className="badge">
              0
            </span>
          </button>


          <button className="icon-btn">
            🛒
            <span className="badge">
              0
            </span>
          </button>

        </div>

      </div>

    </nav>
  )

}

export default Navbar;