import { Box, Button } from '@mui/material'
import { useState } from 'react';
import Month from './features/Month'
import { useSelector, useDispatch } from 'react-redux';
import { nextMonth, previousMonth } from './features/Month/monthSlice';
import { monthCount } from './features/Month/monthSlice';
import MyHeader from './features/MyHeader';

function App() {
  const month = useSelector((state) => state.month.month)
  const styles = {
    container: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr', // Header takes auto height, content takes remaining space
      minHeight: '100vh', // Minimum height of the viewport
    },
  };

  return (
    <Box sx={styles.container}>
      <Box>
        <MyHeader/>
      </Box>
      <Box>
        <Month selectedMonth={month} selectedYear={'2024'} />
      </Box>
    </Box>
  )
}

export default App
