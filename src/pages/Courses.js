import React from 'react';
import ImageButtonFunc from '../ImageButton.js';

function Courses() {
  const styles = {
    color: '#576065',
  };
  return (
    <div style={styles}>
      <section className="subjects">
        <div className="container">
          <h2>Explore Subjects</h2>
        </div>
        <ImageButtonFunc />
      </section>
    </div>
  );
}

export default Courses;