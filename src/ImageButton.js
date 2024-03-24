// Adapted from https://mui.com/material-ui/react-button/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './ImageButton.css'; 

const images = [
  {
    url: '/courseImages/business.png',
    title: 'Administration',
    width: '25%',
  },
  {
    url: '/courseImages/biochemistry.png',
    title: 'Biochemistry',
    width: '25%',
  },
  {
    url: '/courseImages/bacteria.png',
    title: 'Biology',
    width: '25%',
  },
  {
    url: '/courseImages/chemistry-class.png',
    title: 'Chemistry',
    width: '25%',
  },
  {
    url: '/courseImages/data-science.png',
    title: 'Computer Science',
    width: '25%',
  },
  {
    url: '/courseImages/profit-growth.png',
    title: 'Economics',
    width: '25%',
  },
  {
    url: '/courseImages/literature.png',
    title: 'English',
    width: '25%',
  },
  {
    url: '/courseImages/rocks.png',
    title: 'Geology',
    width: '25%',
  },
  {
    url: '/courseImages/healthcare.png',
    title: 'Health Science',
    width: '25%',
  },
  {
    url: '/courseImages/math.png',
    title: 'Mathematics',
    width: '25%',
  },
  {
    url: '/courseImages/science-book.png',
    title: 'Psychology',
    width: '25%',
  },
  {
    url: '/courseImages/engineer.png',
    title: 'Software Engineering',
    width: '25%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

export default function ImageButtonFunc() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          className="image-button" // Add the class name here
        >
          <span className="image-src" style={{ backgroundImage: `url(${image.url})` }} />
          <span className="image-backdrop" />
          <span className="image">
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
            >
              {image.title}
              <span className="image-marked" />
            </Typography>
          </span>
        </ImageButton>
      ))}
    </Box>
  );
}
