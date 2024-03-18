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

      <section className="tutors">
        <div className="container">
          <h2>Meet Our Tutors</h2>
          <div className="tutors">
            <div className="tutor-info">
              <img src="tutor1.jpg" alt="Tutor 1" />
              <h3>Tutor 1</h3>
              <p>Tutor Description</p>
            </div>
            <div className="tutor-info">
              <img src="tutor2.jpg" alt="Tutor 2" />
              <h3>Tutor 2</h3>
              <p>Tutor Description</p>
            </div>
            <div className="tutor-info">
              <img src="tutor3.jpg" alt="Tutor 3" />
              <h3>Tutor 3</h3>
              <p>Tutor</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
