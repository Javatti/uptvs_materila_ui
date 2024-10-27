import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import SearchAppBar from '@/components/SerachAppBar';
import { Button } from '@mui/material';
import {Card,CardContent,CardMedia,CardActionArea} from '@mui/material'
import ActionAreaCard from '../components/ActionAreaCard';
export default function Home() {
  return (
  /*  <Container maxWidth="xl">
      <Box sx={{
        background: "red",
        borderRadius: "15px",
        p: 4,
        m:4,
      }}>
        <Typography variant="h1">hello world</Typography>
      </Box>
    </Container>*/
    <>
   <SearchAppBar></SearchAppBar>
   <Container  sx={{ marginTop:2,padding:4, height: '100vh' }} >
    <Box>
    <Card sx={{ maxWidth: 200 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image= "/images/sham-irani-1-poster-207x290.jpg"
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
       
    </Box>
    </Container>
     </>  
  );
}

