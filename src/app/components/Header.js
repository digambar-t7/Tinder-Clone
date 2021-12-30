import React from 'react';
import './css/Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

const Header = () => {
    return (<>
        <div className='header-container'>
            <IconButton>
                <PersonIcon fontSize="large" className="icon person" />
            </IconButton>
            <img className='logo' src={require('../images/tinder-logo.png')} alt='tinder-clone.png' />
            <IconButton>
                <ForumIcon fontSize='large' className='icon forum' />
            </IconButton>
        </div>
        <hr />
    </>
    )
}

export default Header
