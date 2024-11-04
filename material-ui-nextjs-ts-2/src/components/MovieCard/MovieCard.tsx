import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FC} from 'react';
type OneProps ={
    data:{
    "title" : string;
    "director" : string;
    "release_year" : number;
    }
}

const MovieCard:FC<OneProps> = (moviedata:OneProps) => {
  return ( 
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="/images/sham-irani-1-poster-207x290.jpg"
        title="sham-irani"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily={'IRANSans'}>
          شام ایرانی
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color ='warning' sx={{}}>افزودن به علاقه مندی ها</Button>
        <Button size="small">بیشتر</Button>
      </CardActions>
    </Card>
  );
}
export default MovieCard;