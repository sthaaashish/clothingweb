import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import { Avatar, Badge, Box, IconButton, MenuItem, Stack, Tab, Tabs, Tooltip, Typography} from '@mui/material';
import aa from './images/aa.png'
import Menu from '@mui/material/Menu';
import bitmap from './images/bitmap.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


const Pages=["Home", "Mens", "Womens", "Accessories"]
const settings=["Profile", "Dashboard","Account","Logout"]

export default function Navbar({count}) {
    
    const [setting, setSetting]=useState(null);
    

    const handleOpenSetting =(event)=>{
        setSetting(event.currentTarget)
    }
    const handleCloseSetting=()=>{
        setSetting(null)
    }
  
  return (
    <div>
<AppBar position='static' sx={{backgroundColor:'#00796b', height:70}}>
      <Container maxWidth="xl" >
        <Box sx={{width:'100px', float:'left'}}>
            <Link to="/home" style={{textDecoration:'none'}}>
            <img src={bitmap} alt="cc" height="100px" width="150px" />  
            </Link>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
        <Tabs sx={{ marginLeft: 6 ,}}>
              {Pages.map((page, index) => (
                <Link key={index} to={`/${page}`} style={{color:'inherit', textDecoration: 'none' }}>
                  <Tab style={{ color:'inherit' }} label={page} />
                </Link>
              ))}
            </Tabs>
        
          <Stack spacing={2} direction="row" sx={{marginLeft:'50%'}}>
         <IconButton color="inherit">
         <Badge  color='warning'  badgeContent={count}>
            <ShoppingCartIcon />
            </Badge>
         </IconButton>
            
          
         <IconButton color='inherit'>
            <Badge badgeContent="0" color='warning'>
            <MailIcon/>
            </Badge>
            </IconButton>
          </Stack>
          <Box sx={{float:'right', marginTop:'29px'}} >
            <Tooltip>
              <IconButton onClick={handleOpenSetting} sx={{p:0, marginBottom:5}}>
                <Avatar src={aa} alt="aa" sx={{width:32, height:32, borderRadius:"50%" ,border: '1px solid white'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt:"40px"}}
              anchorEl={setting}
              onClose={handleCloseSetting}
              anchorOrigin={{vertical:'top', horizontal:'right'}}
              open={Boolean(setting)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseSetting}>
                  <Typography textAlign={"center"}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  </div>
  
  )
}
