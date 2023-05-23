import { Box, Button, Link, IconButton, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
// import PrivacyPolicy from './PrivacyPolicy';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, } from 'react-router-dom';

export default function Footer() {
  return (
    <Box sx={{backgroundColor: '#00796b', mt:3, color: '#ffff', display:'flex', justifyContent:'space-between'}}>
      <Box sx={{ textAlign: 'left', mt:3, marginLeft: 3}}>
        <Typography variant='h5'>Shrestha Fashion</Typography>
        <Typography>Kathmandu, Nepal</Typography>
        <Typography>Contact: 9745221132, 981801929</Typography>
        <Typography>Email: shresthaFashion@gmail.com</Typography>
      </Box>
      <Box>
        <Stack sx={{mt:3}}>
          <Typography variant='h6'>Our policy</Typography>
          <Link component={RouterLink} to='/return-exchange-policy' color='inherit' underline='hover'>
            <Typography>Return and Exchange Policy</Typography>
          </Link>
          <Link component={RouterLink} to='/privacy-policy' color='inherit' underline='hover'>
            <Typography>Privacy policy</Typography>
          </Link>
          <Link component={RouterLink} to='/do-not-sell-private-information' color='inherit' underline='hover'>
            <Typography>Do not sell private information</Typography>
          </Link>
          <Link component={RouterLink} to='/legal-notice' color='inherit' underline='hover'>
            <Typography>Legal notice</Typography>
          </Link> 

        </Stack>
        <Typography gutterBottom variant='h6' marginTop="12px">Connect with us</Typography>
        <IconButton color='inherit'>
          <FacebookIcon/>   
        </IconButton>
        <IconButton color='inherit'> <InstagramIcon /></IconButton>
        <IconButton color='inherit'> <TwitterIcon /></IconButton>   
      </Box>
  <form>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', mt:3, mb:4}}>
        <Stack spacing={2} sx={{display: 'flex', flexDirection: 'column', marginRight: 3}}>
          <Typography variant='h5'>Feedback form</Typography>
          <TextField color='primary' label="Enter your Name" variant='filled'/>
          <TextField color='primary' label="Enter your Email" type="email" variant='filled'/>
          <TextField  color='primary' label="Enter your message" variant='filled' />
          <Button variant='filled' type='submit'  color='success'>Submit</Button>
        </Stack>
      </Box>
      </form>
   
    </Box>
  )
}