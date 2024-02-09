import { Box, Typography } from '@mui/material'
import React from 'react'
import '@fontsource/roboto/300.css';

const MonthDay = ({ date }) => {
    const styles = {
        marginTop: '0.5rem',
        fontSize: '0.8rem'
    };
    return (
        <Box
            sx={{
                flex: '1',
                border: '1px solid rgb(218,220,224)',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <Typography sx={styles}>
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </Typography>
            <Typography sx={{...styles, marginTop:'0.2rem'}}>
                {date.toLocaleDateString()}
            </Typography>
        </Box>
    )
}

export default MonthDay