import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown'
import { MenuButton } from '@mui/base/MenuButton'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import profileImage from '../assets/profile-img.jpg'
import PermCameraMicIcon from '@mui/icons-material/PermCameraMic'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Box sx={{ height: 70, display: 'flex', justifyItems: 'between', alignItems: 'center' }}>
      <Link to='/'>
        <Box>
          <PermCameraMicIcon sx={{ fontSize: 36 }} />
        </Box>
      </Link>
      <Dropdown>
        <MenuButton>
          <img src={profileImage} className='header_profile-img' />
        </MenuButton>
        <List>
          <ListItemButton>
            Profile
          </ListItemButton>
        </List>
      </Dropdown >
    </Box>
  );
}

export default Header
