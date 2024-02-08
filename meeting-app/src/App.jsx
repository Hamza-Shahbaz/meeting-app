import { useState } from 'react';
import Month from './features/Month'
import { Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { nextMonth, previousMonth } from './features/Month/monthSlice';
import { monthCount } from './features/Month/monthSlice';

function App() {
  const month = useSelector((state) => state.month.month)
  const dispatch = useDispatch()
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
        <h1 className="text-3xl font-bold underline" style={{ margin: '0' }}> {/* Adjusted margin to reduce space */}
          Hello world!
        </h1>
        <Button onClick={() => { dispatch(nextMonth()) }}>next</Button>
        <Button onClick={() => { dispatch(previousMonth()) }}>previous</Button>
      </Box>
      <Box>
        <Month selectedMonth={month} selectedYear={'2024'} />
      </Box>
    </Box>
  )
}

export default App
