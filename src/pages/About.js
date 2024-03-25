import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const styles = {
    color: '#576065',
  };
  const h2Styles = {
    color: '#782829',
  };

  return (
    <div style={styles}>
      <h1>About</h1>
      <p>Welcome to our website!</p>
      <p>Our mission is to provide university students with the tools and resources they need to excel academically.</p>
      <h2 style={h2Styles}>Features</h2>
      <ul>
        <li><strong>Course Information:</strong> Access comprehensive information about various courses, including syllabi, textbooks, and course materials.</li>
        <li><strong>Tutor Booking:</strong> Find and book tutors for personalized assistance in specific subjects.</li>
        <li><strong>Study Group Booking:</strong> Create or join study groups to collaborate with peers and enhance your learning experience.</li>
      </ul>
      <h2 style={h2Styles}>Benefits</h2>
      <ul>
        <li><strong>Convenience:</strong> Access all your academic resources in one place, saving time and effort.</li>
        <li><strong>Personalized Support:</strong> Receive one-on-one assistance from tutors tailored to your individual learning needs.</li>
        <li><strong>Collaboration:</strong> Foster collaboration and peer learning through study groups.</li>
      </ul>
      <h2 style={h2Styles}>How It Works</h2>
      <p>Simply navigate through our website to:</p>
      <ol>
        <li>Search for course information.</li>
        <li>Find and book tutors for assistance.</li>
        <li>Create or join study groups for collaborative learning.</li>
      </ol>
      <h2 style={h2Styles}>Contact Us</h2>
      <p>If you have any questions, feedback, or inquiries, please feel free to contact us{' '}
        <Link to="/contact" style={{ color: '#c83f42' }}>HERE</Link></p>
      <p>Thank you for choosing our website to support your academic journey!</p>
    </div>
  );
}

export default About;

