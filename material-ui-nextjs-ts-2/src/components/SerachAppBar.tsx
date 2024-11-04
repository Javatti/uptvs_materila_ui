'use client'
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
import globalStyles from '../../public/globalyStyles';
import DownloadIcon from '@mui/icons-material/Download'
import { Button, ButtonGroup } from '@mui/material';
import Image from 'next/image';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 1,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 9),

  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '9ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#0a0a0e" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            alt='up-tv'
            src={"/images/logo.jpg"}
            width={90}
            height={55}

          />
          <ButtonGroup variant="text" aria-label="Basic button group"  onClick={() => alert("نداریم")} sx={{ fontFamily: 'IRANSans' }}>
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
          {/* m1,m18 */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              
              //TODO: code redesign 

              placeholder="کلمه مورد نظر"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}