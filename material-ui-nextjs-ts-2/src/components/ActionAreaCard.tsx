`use client`
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    //<a href='' target='_blank'>
    <Card sx={{ maxWidth: 200 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= "https://www.uptvs.com/wp-contents/uploads/2024/10/sham-irani-1-poster-207x290.jpg"
          alt="شام ایرانی"
        />
        <CardContent>
          <Typography fontFamily={'Yekan'} variant="h6" component="div" align='center'>
           سریال شام ایرانی 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       

  );
}
