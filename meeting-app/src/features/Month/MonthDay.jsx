import { Box, Typography } from '@mui/material'
import React from 'react'
import '@fontsource/roboto/300.css';
import { useSelector } from 'react-redux';

const MonthDay = ({ date, weekCount }) => {
    const selectedMonth = useSelector((state) => state.month.month)
    const styles = {
        marginTop: '0.5rem',
        fontSize: '1rem',
        color: date.getMonth() == selectedMonth ? 'rgb(60,64,67)' : '#70757a',
        fontWeight : '700'
    };
    const monthPrint = () => {
        if (date.getDate() == 1) {
            return date.toLocaleDateString('en-US', { month : "short" })
        }
    }
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
            {weekCount == 0 && <Typography sx={styles}>
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </Typography>}
            <Typography sx={{...styles, marginTop:'0.2rem'}}>
                {monthPrint()} {date.getDate()}
            </Typography>
        </Box>
    )
}

export default MonthDay