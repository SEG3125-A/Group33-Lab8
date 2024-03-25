import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import './StudyGroup.css';

export default function StudyGroup() {
  const [expanded, setExpanded] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [groups, setGroups] = useState({});

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

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedCourse('');
    setGroups({});
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
    generateGroups(event.target.value);
  };

  const generateGroups = (course) => {
    // Generate groups based on course
    const generatedGroups = {};
    for (let i = 1; i <= 5; i++) {
      generatedGroups[`Group ${i}`] = {
        members: [],
        limit: 10
      };
    }
    setGroups(generatedGroups);
  };

  const joinGroup = (groupName) => {
    const updatedGroups = { ...groups };
    if (updatedGroups[groupName].members.length < updatedGroups[groupName].limit) {
      updatedGroups[groupName].members.push('New Member ');
      setGroups(updatedGroups);
    }
  };

  const leaveGroup = (groupName) => {
    const updatedGroups = { ...groups };
    updatedGroups[groupName].members.pop();
    setGroups(updatedGroups);
  };

  return (
    <div className="study-group">
      <h2>Study Groups</h2>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Select a Subject</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <select value={selectedSubject} onChange={handleSubjectChange}>
              <option value="">Select a Subject</option>
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
          <Typography>Select a Course</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {subjectCourses[selectedSubject]?.length ? (
            <form>
              <select value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select a Course</option>
                {subjectCourses[selectedSubject].map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </form>
          ) : (
            <Typography>No courses available for this subject</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      {Object.keys(groups).map((groupName) => (
        <Accordion key={groupName}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${groupName}-content`}
            id={`${groupName}-header`}
          >
            <Typography>{groupName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="group-info">
              <div>
                <GroupIcon /> Members: {groups[groupName].members.length} / {groups[groupName].limit}
              </div>
              <div>
                {groups[groupName].members.map((member, index) => (
                  <div key={index}>
                    <PersonIcon /> {member}
                    <button onClick={() => leaveGroup(groupName, member)}>Leave Group</button>
                  </div>
                ))}
              </div>
              <button onClick={() => joinGroup(groupName)}>Join Group</button>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

