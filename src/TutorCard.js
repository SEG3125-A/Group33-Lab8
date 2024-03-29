// Adapted from https://mui.com/material-ui/react-card/
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TutorCard({ tutorName, tutorDescription, imageURL }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Link to bring user to either tutors page or booking page when they click on card */}
      <Link to="/our-tutors" style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageURL}
          alt={tutorName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tutorName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tutorDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
