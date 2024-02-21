import { Box } from '@mui/material';
import React from 'react';
import MonthDay from './MonthDay';

const MonthRow = ({ date, weekCount }) => {
    // Function to generate indexes (days of the week)
    const generateIndexes = () => {
        let indexes = [];
        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(date)
            currentDate.setDate(currentDate.getDate() + i)
            indexes.push(<MonthDay date={currentDate} weekCount={weekCount} key={i}/>);
        }
        return indexes;
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexGrow: '1',
            }}
        >
            {generateIndexes()}
        </Box>
    );
};

export default MonthRow;
