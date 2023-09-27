import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../RestaurantCardComponent/ResCard.css"
import res1 from "../assets/res1.jpg"

export const MediaCard=()=> {
  return (
    <div className='CardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        className="card-media"
        sx={{ height: 140 }}
        image={res1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shiva Dhaba
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Shiva Dhaba are a widespread group of Dhabha, with over 6,0branches, ranging across all over India.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
        <Button size="small">Add To Favourite</Button>
      </CardActions>
    </Card>
    </div>
  );
}
