import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OurTutorsCard({ tutorName, tutorDescription, tutorCourses, imageURL }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
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
          <strong>Specialization:</strong> {tutorDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Courses:</strong> {tutorCourses}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
}