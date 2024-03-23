import './App.css';
import TutorCard from './TutorCard.js'; // Import the MediaCard component
import ImageButtonFunc from './ImageButtonFunc.js';

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
          <h2>Explore Subjects</h2>
        </div>
        <ImageButtonFunc />
      </section>

      <section className="tutors">
        <div className="container">
          <h2>Meet Our Tutors</h2>
          <div className="tutors-container">
            <div className="tutor-info">
              <TutorCard 
                tutorName="Tutor 1"
                tutorDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta tristique tempus. Nulla tempor mauris id ipsum tempor, at vestibulum ante blandit."
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor-info">
              <TutorCard 
                tutorName="Tutor 2"
                tutorDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta tristique tempus. Nulla tempor mauris id ipsum tempor, at vestibulum ante blandit."
                imageURL= "tutor2.png"
              />
            </div>
            <div className="tutor-info">
              <TutorCard 
                tutorName="Tutor 3"
                tutorDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta tristique tempus. Nulla tempor mauris id ipsum tempor, at vestibulum ante blandit."
                imageURL= "tutor3.png"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
