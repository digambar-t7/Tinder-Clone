import React from 'react';
import './css/SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
    return (
        <div className='swipe-btns' >
            <IconButton>
                <ReplayIcon fontSize='large' className='replay btn' />
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large' className='close btn' />
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize='large' className='star btn' />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large' className='fav btn' />
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize='large' className='flash btn' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons;
