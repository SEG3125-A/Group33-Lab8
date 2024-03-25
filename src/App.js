import './App.css';
import TutorCard from './TutorCard.js';
import ImageButtonFunc from './ImageButton.js';
import React, {useState} from 'react';
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
import Booking from "./pages/Booking";
import StudyGroup from "./pages/StudyGroup";
import Administration from "./pages/Administration";
import { FaRegUser } from 'react-icons/fa'; 
import { GrWorkshop, GrGroup, GrSchedule, GrBook } from "react-icons/gr";
import { TfiCommentsSmiley } from "react-icons/tfi";

// Homepage
function Home() {
  //state code inspired by react legacy documentation: https://legacy.reactjs.org/docs/hooks-state.html
  const [translate, setTranslate] = useState(true);

  const change = () => {
    setTranslate(!translate);
  };

  return (
    <div>
      <button onClick={change}>{translate ? 'Click to translate home-page' : "Cliquez pour traduire la page d'accueil"}</button>
      <header className="App-header">
        <div className="overlay"></div>
        <h1>{translate ? 'Welcome to UottawaFriends.com!': 'Bienvenue sur UottawaFriends.com!'}</h1>
      </header>

      <section className="tutors">
        <div className="container">
          <h2>{translate ? 'Meet Some of Our Tutors':'Rencontrez certains de nos tuteurs'}</h2>
          <div className="tutors-container">
            <div className="tutor-info">
              <TutorCard 
                tutorName="Dennis"
                tutorDescription={translate ? "Dennis is a dedicated tutor with a passion for mathematics. Dennis has a knack for simplifying complex concepts and making them easy to understand for students of all levels. He believes in fostering a learning environment where students feel empowered to ask questions." : "Dennis est une tutrice dévouée et passionnée par les mathématiques. Dennis a le don de simplifier des concepts complexes et de les rendre faciles à comprendre pour les étudiants de tous niveaux. Il croit en la promotion d'un environnement d'apprentissage dans lequel les étudiants se sentent habilités à poser des questions."}
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor-info">
              <TutorCard 
                tutorName="Poppy"
                tutorDescription={translate? "Poppy is an enthusiastic tutor specializing in language arts. With her creative approach to teaching, Poppy aims to inspire a love for literature and writing in her students. She believes in the power of storytelling and encourages her students to express themselves freely." : "Poppy est une tutrice enthousiaste spécialisée dans les arts du langage. Avec son approche créative de l'enseignement, Poppy vise à inspirer l'amour de la littérature et de l'écriture à ses élèves. Elle croit au pouvoir de la narration et encourage ses élèves à s'exprimer librement."}
                imageURL= "tutor2.png"
              />
            </div>
            <div className="tutor-info">
              <TutorCard 
                tutorName="Bella"
                tutorDescription={translate?"Bella is a patient and knowledgeable tutor who excels in science education. With her background in biology, Bella brings real-world examples into the classroom to help students grasp complex scientific concepts. She is dedicated to providing personalized support to each student." : "Bella est une tutrice patiente et compétente qui excelle dans l'enseignement des sciences. Grâce à sa formation en biologie, Bella apporte des exemples concrets en classe pour aider les élèves à comprendre des concepts scientifiques complexes. Elle se consacre à fournir un soutien personnalisé à chaque élève."}
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
  //state code inspired by react legacy documentation: https://legacy.reactjs.org/docs/hooks-state.html
  const [translate, setTranslate] = useState(true);
  const change = () => {
    setTranslate(!translate);
  };

 // let test = true;
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
              <li><Link to="/about"><FaRegUser />{translate? "About": "À propos"}</Link></li>
              <li><Link to="/our-tutors"><GrWorkshop />{translate? "Our Tutors": "Nos tuteurs"}</Link></li>
              <li><Link to="/booking"><GrSchedule />{translate?"Book Tutor":"Livre tuteur"}</Link></li>
              <li>
                <div className="dropdown">
                <Link to="/courses" className="dropbtn"><GrBook />{translate? "Courses":"Cours"}</Link>
                  <div className="dropdown-content">
                    {/* Can add in links to specific courses here */}
                    <Link to="/administration">Administration</Link>
                    <a href="#">Biochemistry</a>
                    <a href="#">Biology</a>
                    <a href="#">Chemistry</a>
                    <a href="#">Comp. Science</a>
                    <a href="#">Economics</a>
                    <a href="#">English</a>
                    <a href="#">Geology</a>
                    <a href="#">Health Science</a>
                    <a href="#">Mathematics</a>
                    <a href="#">Psychology</a>
                    <a href="#">Soft. Engineering</a>
                  </div>
                </div>
              </li>
              <li><Link to="/study-group"><GrGroup />{translate? "Study Groups": "Groupes d'étude"}</Link></li>
              <li><Link to="/contact"><TfiCommentsSmiley /> Contact</Link></li>
              <button onClick={change}>{translate ? 'Click to translate link-info' : "Cliquez pour traduire les informations sur le lien"}</button>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-tutors" element={<OurTutors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/study-group" element={<StudyGroup />} />
          <Route path="/administration" element={<Administration />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
