import { Box } from '@mui/material';
import React from 'react'
import MonthRow from './MonthRow';
import { useSelector } from 'react-redux';

const Month = () => {
    const selectedMonth = useSelector((state) => state.month.month)
    const selectedYear = useSelector((state) => state.month.year)
    const firstDay = new Date(selectedYear, selectedMonth, 1);
    let count = firstDay.getDay()
    const firstSunday = new Date(firstDay)
    firstSunday.setDate(firstSunday.getDate() - count)
    const getWeeksInMonth = () => {
        let dateCheck = new Date(firstSunday)
        dateCheck.setDate(dateCheck.getDate() + 28)
        if (dateCheck.getMonth() === selectedMonth+1) {
            return 4
        }
        dateCheck.setDate(dateCheck.getDate() + 7)
        if (dateCheck.getMonth() === selectedMonth+1) {
            return 5
        }
        else {
            return 6
        }
    }
    const monthMaker = () => {
        let weeks = getWeeksInMonth()
        let weeksArray = []
        for (let i = 0; i < weeks; i++) {
            let currentSunday = new Date(firstSunday);
            currentSunday.setDate(currentSunday.getDate() + (i * 7));
            weeksArray.push(<MonthRow date={currentSunday} weekCount={i} key={i} />)
        }
        return weeksArray
    }
    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            {monthMaker()}
        </Box>
    )
}

export default Month