import React from 'react';
import './OurTutors.css'; 
import OurTutorsCard from './OurTutorsCard.js';

function OurTutors() {
  return (
    <div className="page-container">
      <h1>Our Tutors</h1>
      <section className="tutors2">
        <div className="container">
          <div className="tutors2-container">
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Dennis"
                tutorDescription="Mathematics, Statistics, Physics"
                tutorCourses="MAT1320, MAT1321, MAT1322, PHY1121, PHY1122"
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Poppy"
                tutorDescription="Language arts, English"
                tutorCourses="ENG1100, ENG1112, ENG1124, ENG1131, ENG1141"
                imageURL= "tutor2.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Bella"
                tutorDescription="Biology, Chemistry, Biochemistry"
                tutorCourses="BIO1140, BIO2133, BIO2135, BCH3170, BCH3346"
                imageURL= "tutor3.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Terry"
                tutorDescription="Chemistry, Mathematics"
                tutorCourses="CHM1311, CHM1321, CHM2123, CHM2128, MAT1322"
                imageURL= "tutor4.png"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="tutors2">
        <div className="container">
          <div className="tutors2-container">
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Lola"
                tutorDescription="Computer Science, Mathematics"
                tutorCourses="ITI1100, ITI1101, CSI2110, CSI2120, MAT1341"
                imageURL= "tutor5.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Francis"
                tutorDescription="Software & Computer Engineering"
                tutorCourses="SEG2105, SEG3125, CEG2136, CEG3155, CEG3156"
                imageURL= "tutor6.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Liberty"
                tutorDescription="Accounting, Marketing"
                tutorCourses="ADM1370, ADM2302, ADM2303, ADM2304, ADM3302"
                imageURL= "tutor5.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Victoria"
                tutorDescription="Mathematics, Statistics, Physics"
                tutorCourses="MAT1320, MAT1321, MAT1322, PHY1121, PHY1122"
                imageURL= "tutor2.png"
              />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="tutors2">
        <div className="container">
          <div className="tutors2-container">
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Rosa"
                tutorDescription="Health Sciences, Biology"
                tutorCourses="HSS1100, HSS1101, HSS2102, HSS3106, HSS3108"
                imageURL= "tutor3.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Mohammed"
                tutorDescription="Physics, Chemistry"
                tutorCourses="PHY1321, PHY1322, PHY2325, PHY2333, CHM2132"
                imageURL= "tutor4.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Justin"
                tutorDescription="Computer Science, Software Engineering"
                tutorCourses="ITI1120, ITI1121, SEG2105, CSI2110, SEG3125"
                imageURL= "tutor1.png"
              />
            </div>
            <div className="tutor2-info">
              <OurTutorsCard 
                tutorName="Parker"
                tutorDescription="Accounting, Marketing"
                tutorCourses="ADM1370, ADM2302, ADM2303, ADM2304, ADM3302"
                imageURL= "tutor6.png"
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