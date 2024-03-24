import './App.css';
import TutorCard from './TutorCard.js';
import ImageButtonFunc from './ImageButtonFunc.js';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import OurTutors from "./pages/OurTutors";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

// Homepage
function Home() {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to UottawaFriends.com!</h1>
      </header>

      <section className="tutors">
        <div className="container">
          <h2>Explore Subjects</h2>
        </div>
        <ImageButtonFunc />
      </section>

      <section className="tutors">
        <div className="container">
          <h2>Meet Some of Our Tutors</h2>
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

// Routing different pages from navbar
function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className="container">
            {/* Link to homepage */}
            <Link to="/">
              <img src="UOttFriendsLogo.png" className="navbar-logo" alt="logo" />
            </Link>
            <ul className="navbar-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/our-tutors">Our Tutors</Link></li>
              <li>
                <div className="dropdown">
                <Link to="/courses" className="dropbtn">Courses</Link>
                  <div className="dropdown-content">
                    <a href="#">Add courses here</a>
                    <a href="#">...</a>
                    <a href="#">...</a>
                    <a href="#">...</a>
                  </div>
                </div>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-tutors" element={<OurTutors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

