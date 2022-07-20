import { Route, Routes } from 'react-router-dom';
import './App.css'

import { Container } from '@chakra-ui/react';
import Main from './components/Main';
import HouseDetails from './components/HouseDetails';

function App() {



  return (
    <>
      <Container maxW="8xl">
    
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/house/:id' element={<HouseDetails />} />
        </Routes> 
      </Container>
    </>
  );
}

export default App;