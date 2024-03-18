import './App.css';

function App() {
  return (

    <div className="App">
      <nav className="navbar">
        <div className="container">
          {/* <img src={logo} className="navbar-logo" alt="logo" /> */}
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Tutors</a></li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">Courses</button>
                <div className="dropdown-content">
                  <a href="#">Add courses here</a>
                  <a href="#">...</a>
                  <a href="#">...</a>
                  <a href="#">...</a>
                </div>
              </div>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="App-header">
        <h1>
        Welcome to UottawaFriends.com!
        </h1>
      </header>
    </div>
  );
}

export default App;
