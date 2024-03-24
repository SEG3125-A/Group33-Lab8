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
                tutorName="Dennis"
                tutorDescription="Dennis is a dedicated tutor with a passion for mathematics. Dennis has a knack for simplifying complex concepts and making them easy to understand for students of all levels. He believes in fostering a learning environment where students feel empowered to ask questions."
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor-info">
              <TutorCard 
                tutorName="Poppy"
                tutorDescription="Poppy is an enthusiastic tutor specializing in language arts. With her creative approach to teaching, Poppy aims to inspire a love for literature and writing in her students. She believes in the power of storytelling and encourages her students to express themselves freely."
                imageURL= "tutor2.png"
              />
            </div>
            <div className="tutor-info">
              <TutorCard 
                tutorName="Bella"
                tutorDescription="Bella is a patient and knowledgeable tutor who excels in science education. With her background in biology, Bella brings real-world examples into the classroom to help students grasp complex scientific concepts. She is dedicated to providing personalized support to each student."
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
                    {/* Can add in links to specific courses here */}
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

