'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import SearchAppBar from '@/components/Header/SerachAppBar';
import { Button } from '@mui/material';
import {Card,CardContent,CardMedia,CardActionArea} from '@mui/material'
import MovieList from '@/components/Footer/MovieList';
import Image from 'next/image';
import Footer from '../components/Footer/Footer'
import MovieCard from '../components/MovieCard/MovieCard'

export default function Home() {
  return (
  
    <>
   <SearchAppBar/>
   <Container maxWidth="xl"/>
   <MovieList/>
   <Footer caption = "hello" version={2} />
     </>  
  );
}

