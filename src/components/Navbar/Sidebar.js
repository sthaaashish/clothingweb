import React, { useState } from 'react'
import {List,IconButton,ListItemButton,ListItemIcon,ListItemText} from '@mui/material'
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';


const Pages = ["Home", "Mens", "Womens", "Accessories"];

export default function Sidebar() {
    const [drawerOpen, setDrawerOpen]=useState(false);
  return (
         <>
          
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List>
                {
                    Pages.map((page, index) =>
                    <Link to={`/${page}`}
                     key={index}
                     style={{textDecoration:'none', color:'white'}}>
                   
                    <ListItemButton key={index}>
                        <ListItemIcon>
                            <ListItemText>
                                {page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    </Link>)
                }
              </List>
            </Drawer>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </>
    
  )
}
