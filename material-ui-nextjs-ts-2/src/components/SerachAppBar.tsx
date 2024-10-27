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
      <AppBar position="static" sx={{ background: "#5c846a"}}>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0.01,
                 display: { xs: 'none', sm: 'block' },
                 mr: 2 ,
                 fontFamily: 'IRANYekan' ,
                 fontSize: 25 ,
                 color : 'orange',
                 
                 }}
          >
           <b>تیوی</b> 
          </Typography>
         {/* khat baadi */}
         <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,
                 display: { xs: 'none', sm: 'block' },
                 mr: 1 ,
                 fontFamily: 'IRANYekan' ,
                 fontSize: 25 ,
                 color : 'purple'
                 }}
          >
           <b><i>کلاب</i></b> 
          </Typography>
          <ButtonGroup variant="text" aria-label="Basic button group" color="warning" onClick={() => alert("نداریم")} sx={{fontFamily:'IRANYekan'}}>     
          <Button sx={{color:'inherit'}} >فیلم خارجی</Button>
          <Button sx={{color:'inherit'}}>فیلم ایرانی</Button>
          <Button sx={{color:'inherit'}}>سریال</Button>
          <Button sx={{color:'inherit',marginLeft:1}}>انیمیشن</Button>
          </ButtonGroup>
{/* m1,m18 */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="جستجو..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}