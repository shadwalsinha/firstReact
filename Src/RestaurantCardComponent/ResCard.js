import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../RestaurantCardComponent/ResCard.css";
import res1 from "../../assets/res1.jpg";


export const MediaCard = ({resData}) => {
  return (
    <div className="CardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className="card-media"
          sx={{ height: 240 }}
          image={res1}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {resData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {resData.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{resData.rating} Star</Button>
          <Button size="small">{resData.foodtype}</Button>
        </CardActions>
      </Card>
    </div>
  );
};
