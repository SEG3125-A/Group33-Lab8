import React from 'react';
import './OurTutors.css'; 
import OurTutorsCard from './OurTutorsCard.js';

function OurTutors() {
  return (
    <div className="page-container">
      <h1>Our Tutors</h1>
      <section className="tutors">
        <div className="container">
          <div className="tutors-container">
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Dennis"
                tutorDescription=""
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Poppy"
                tutorDescription=""
                imageURL= "tutor2.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Bella"
                tutorDescription=""
                imageURL= "tutor3.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Bella"
                tutorDescription=""
                imageURL= "tutor3.png"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="tutors">
        <div className="container">
          <div className="tutors-container">
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Dennis"
                tutorDescription=""
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Poppy"
                tutorDescription=""
                imageURL= "tutor2.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Bella"
                tutorDescription=""
                imageURL= "tutor3.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Bella"
                tutorDescription=""
                imageURL= "tutor3.png"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="tutors">
        <div className="container">
          <div className="tutors-container">
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Dennis"
                tutorDescription=""
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Poppy"
                tutorDescription=""
                imageURL= "tutor2.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Bella"
                tutorDescription=""
                imageURL= "tutor3.png"
              />
            </div>
            <div className="tutor-info">
              <OurTutorsCard 
                tutorName="Bella"
                tutorDescription=""
                imageURL= "tutor3.png"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default OurTutors;