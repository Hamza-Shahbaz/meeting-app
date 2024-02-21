import { Box, Button } from '@mui/material'
import { useState, useEffect } from 'react';
import Month from './features/Month'
import MyHeader from './features/MyHeader';
import { Route, Routes } from 'react-router-dom';

function App() {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr', // Header takes auto height, content takes remaining space
      minHeight: '100vh', // Minimum height of the viewport
    },
  };

  return (
    <Routes>
      <Route path='/' element={<CalendarMainLayout/>}/>
      <Route path='/create-meeting' element={<input value={'this is random'}/>}/>
    </Routes>
  )
}

function CalendarMainLayout() {
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
        <MyHeader />
      </Box>
      <Box>
        <Month />
      </Box>
    </Box>
  )

}

export default App
