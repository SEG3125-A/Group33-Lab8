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
  //translation state code inspired by react legacy documentation as mentioned in app.js
  const [translate, setTranslate] = useState(true);
  const change = () => {
    setTranslate(!translate);
  };

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const subjectCourses = {
    Administration: ['ADM1370', 'ADM2302', 'ADM2303', 'ADM2304', 'ADM3302'],
    [translate?"Biochemistry":"Biochimie"]: ['BCH3170', 'BCH3346'],
    [translate?"Biology":"La biologie"]: ['BIO1140', 'BIO2133', 'BIO2135'],
    [translate?"Chemistry":"Chimie"]: ['CHEM1311', 'CHEM1321', 'CHEM2123', 'CHM2128', 'CHM2132'],
    [translate?'Computer Science':"L'informatique"]: ['ITI110', 'ITI1101', 'ITI1120', 'ITI1121','CSI2110', 'CSI2120'],
    [translate?'Economics':'Économie']: [],
    [translate?"English":"Anglaise"]: ['ENG1100', 'ENG1112', 'ENG1124', 'ENG1131', 'ENG1141'],
    [translate?"Geology":"Géologie"]: [],
    [translate?'Health Science':"Sciences de la santé"]: ['HSS1100', 'HSS1101', 'HSS2102', 'HSS3106', 'HSS3108'],
    [translate?"Mathematics":"Mathématiques"]: ['MATH1101', 'MATH1102', 'MATH1201'],
    [translate?"Psychology":"Psychologie"]: [],
    [translate?'Software Engineering':"Génie logiciel"]: []
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

  const styles = {
    color: '#576065',
  };

  return (
    <div className="study-group" style={styles}>
       <button onClick={change}>Translate/Traduire</button>
      <h2>{translate?"Study Groups":"Groupes d'étude"}</h2>
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
          <Typography>{translate? "Select a subject": "Sélectionnez un sujet"}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <select value={selectedSubject} onChange={handleSubjectChange}>
              <option value="">{translate? "Select a subject": "Sélectionnez un sujet"}</option>
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
          <Typography>{translate?"Select a course": "Sélectionnez un cours"}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {subjectCourses[selectedSubject]?.length ? (
            <form>
              <select value={selectedCourse} onChange={handleCourseChange}>
                <option value="">{translate?"Select a course": "Sélectionnez un cours"}</option>
                {subjectCourses[selectedSubject].map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </form>
          ) : (
            <Typography>{translate?"No courses available for this subject":"Aucun cours disponible pour ce sujet"}</Typography>
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
                <GroupIcon /> {translate?"Members":"Membres"} {groups[groupName].members.length} / {groups[groupName].limit}
              </div>
              <div>
                {groups[groupName].members.map((member, index) => (
                  <div key={index}>
                    <PersonIcon /> {member}
                    <button onClick={() => leaveGroup(groupName, member)}>{translate?"Leave Group":"Quitter le groupe"}</button>
                  </div>
                ))}
              </div>
              <button onClick={() => joinGroup(groupName)}>{translate?"Join Group":"Rejoindre le groupe"}</button>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
