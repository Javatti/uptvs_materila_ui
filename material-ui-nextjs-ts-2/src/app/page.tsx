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
import Image from 'next/image';
import Footer from '../components/Footer/Footer'
import MovieCard from '../components/MovieCard/MovieCard'
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
   <SearchAppBar/>
   <Container  sx={{ marginTop:2,padding:4, height: '100vh' }} >
    <Box>
    <MovieCard/> 
    </Box>
    </Container>
    {/* <Image 
    alt='sham-irani'
    src={"/images/sham-irani-1-poster-207x290.jpg"}
    width={200}
    height={200}

    /> */}
      
      <Footer caption = "hello" version={2} />
     </>  
  );
}

