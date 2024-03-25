// Adapted from https://mui.com/material-ui/react-accordion/
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import './Booking.css';

export default function Booking() {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedCourse, setSelectedCourse] = React.useState('');
  const [selectedTutor, setSelectedTutor] = React.useState('');

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const subjectCourses = {
    Administration: ['ADM1370', 'ADM2302', 'ADM2303', 'ADM2304', 'ADM3302'],
    Biochemistry: ['BCH3170', 'BCH3346'],
    Biology: ['BIO1140', 'BIO2133', 'BIO2135'],
    Chemistry: ['CHEM1311', 'CHEM1321', 'CHEM2123', 'CHM2128', 'CHM2132'],
    'Computer Science': ['ITI110', 'ITI1101', 'ITI1120', 'ITI1121','CSI2110', 'CSI2120'],
    Economics: [],
    English: ['ENG1100', 'ENG1112', 'ENG1124', 'ENG1131', 'ENG1141'],
    Geology: [],
    'Health Science': ['HSS1100', 'HSS1101', 'HSS2102', 'HSS3106', 'HSS3108'],
    Mathematics: ['MATH1101', 'MATH1102', 'MATH1201'],
    Psychology: [],
    'Software Engineering': []
  };

  const tutors = {
    Dennis: ['MAT1320', 'MAT1321', 'MAT1322', 'PHY1121', 'PHY1122'],
    Poppy: ['ENG1100', 'ENG1112', 'ENG1124', 'ENG1131', 'ENG1141'],
    Bella: ['BIO1140', 'BIO2133', 'BIO2135', 'BCH3170', 'BCH3346'],
    Terry: ['CHM1311', 'CHM1321', 'CHM2123', 'CHM2128', 'MAT1322'],
    Lola: ['ITI1100', 'ITI1101', 'CSI2110', 'CSI2120', 'MAT1341'],
    Francis: ['SEG2105', 'SEG3125', 'CEG2136', 'CEG3155', 'CEG3156'],
    Liberty: ['ADM1370', 'ADM2302', 'ADM2303', 'ADM2304', 'ADM3302'],
    Victoria: ['MAT1320', 'MAT1321', 'MAT1322', 'PHY1121', 'PHY1122'],
    Rosa: ['HSS1100', 'HSS1101', 'HSS2102', 'HSS3106', 'HSS3108'],
    Mohammed: ['PHY1321', 'PHY1322', 'PHY2325', 'PHY2333', 'CHM2132'],
    Justin: ['ITI1120', 'ITI1121', 'SEG2105', 'CSI2110', 'SEG3125'],
    Parker: ['ADM1370', 'ADM2302', 'ADM2303', 'ADM2304', 'ADM3302']
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedCourse('');
    setSelectedTutor('');
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
    setSelectedTutor('');
  };

  const handleTutorChange = (event) => {
    setSelectedTutor(event.target.value);
  };

  return (
    <div className="booking">
        <h2>Booking Page</h2>
      <Accordion 
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Select a subject</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <select value={selectedSubject} onChange={handleSubjectChange}>
              <option value="">Select a subject</option>
              {Object.keys(subjectCourses).map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </form>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={!!selectedSubject} // Expand only if subject is selected
        sx={{
          '& .MuiAccordion-region': { height: !!selectedSubject ? 'auto' : 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Select a course</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {subjectCourses[selectedSubject]?.length ? (
            <form>
              <select value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select a course</option>
                {subjectCourses[selectedSubject].map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </form>
          ) : (
            <Typography>No tutors available for this subject</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={!!selectedCourse} // Expand only if course is selected
        sx={{
          '& .MuiAccordion-region': { height: !!selectedCourse ? 'auto' : 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Select a tutor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <select value={selectedTutor} onChange={handleTutorChange}>
              <option value="">Select a tutor</option>
              {/* Filter tutors based on selected course */}
              {Object.keys(tutors).map((tutor) => (
                tutors[tutor].includes(selectedCourse) && (
                  <option key={tutor} value={tutor}>{tutor}</option>
                )
              ))}
            </select>
          </form>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Select a date and time</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Personal information</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}