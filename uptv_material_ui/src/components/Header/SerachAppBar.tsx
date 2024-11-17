'use client';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import globalStyles from '../../../public/globalyStyles';
import DownloadIcon from '@mui/icons-material/Download'
import { Button, ButtonGroup } from '@mui/material';
import Image from 'next/image';
import { Margin } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
//! با فلکس می بایستی نوار سرچ رو یک دیو کنم


export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#000000"}}>
        <Toolbar sx={{marginRight:2}}>
      
          <Image
            
            alt='up-tv'
            src={"/images/logo.jpg"}
            width={95}
            height={50}
          />
          <ButtonGroup variant="text" aria-label="Basic button group"  onClick={() => alert("نداریم")} sx={{ fontFamily: 'IRANSans', marginRight:3 }}>
            <Button sx={{ color: 'inherit' }} >فیلم خارجی</Button>
            <Button sx={{ color: 'inherit' }}>فیلم ایرانی</Button>
            <Button sx={{ color: 'inherit' }}>سریال</Button>
            <Button sx={{ color: 'inherit' }}>انیمیشن</Button>
            <Button sx={{ color: 'inherit' }}>دوبله فارسی</Button>
            <Button sx={{ color: 'inherit' }}>انیمه</Button>
            <Button sx={{ color: 'inherit' }}>سایر</Button>
            <Button sx={{ color: 'inherit' }}>استخدام</Button>
            <Button sx={{ color: 'inherit'}}>ارتباط با ما</Button>
          </ButtonGroup>
          
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250  , boxShadow:"none" , backgroundColor:"#101014",marginRight:60}}
    >

      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
        sx={{ mr: 1, flex: 1 ,color:'white',fontFamily:"IRANSans"}}
        placeholder="کلمه مورد نظر"
        
        />
            <SearchIcon sx={{color:"#bbc1c6",mr:1}}/>
      
        </Paper>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}