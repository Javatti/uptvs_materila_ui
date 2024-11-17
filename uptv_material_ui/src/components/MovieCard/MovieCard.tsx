'use clients';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Grid2';
import Link from 'next/link'
import {FC} from 'react';

import {MovieType} from "@/Types/movie.type";

import MovieDetailDialog from "@/components/MovieDetailDialog/MovieDetailDialog"
import ButtonGroup from '@mui/material/ButtonGroup';


const MovieCard:FC<MovieType> = (movieData) => {
  
  const _movieData = movieData.data;

  const handleClick = () =>
  {
    console.log(_movieData.title);
  }
  return ( 
    <Grid item xs={12} sm={6} md={4} lg={3}>
     <Link href= {`/movies/${_movieData.id}`}>
      <Card sx= {{ maxWidth: 345 }} onClick={handleClick}>
      <CardMedia
        sx={{ height: 350 ,}}
        image= {_movieData.image}
        title= {_movieData.title}
      />
      <CardContent sx={{margin:0}}>
        <Typography sx={{margin: 0 , padding:0 ,  textAlign:'center'}} gutterBottom variant="h5" component="div" fontFamily={'IRANSans'}>
        {_movieData.title}
        </Typography>
        
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        </Typography> */}
      </CardContent>
      <CardActions>
        <ButtonGroup>
        <Button size="small" color ='warning' variant='contained' >افزودن به علاقه مندی ها</Button>
        <Button size="small" color='success' variant='outlined'>بیشتر</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
    </Link>
    <MovieDetailDialog isOpen={false} />
    </Grid>
  );
}
export default MovieCard;