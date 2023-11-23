import './App.css'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import MovieList from './components/MovieList';
import TimeSlot from './components/TimeSlot';
import SeatSlot from './components/SeatSlot';
import DeleteAccount from './components/DeleteAccount'; 
import {useState} from  'react';

function App() { 

  const [userDetails, updateDetails] = useState({});

  return (
    

      <Router>
        <Routes>
          <Route path='/' element={<SignUp userDetails={userDetails} updateDetails={updateDetails} />}/>
          <Route path='/movielist' element={<MovieList/>}/>
          <Route path='/timeslot' element={<TimeSlot  userDetails={userDetails} />}/>
          <Route path='/seatslot' element={<SeatSlot userDetails={userDetails} />}/>
          <Route path='/deleteaccount' element={<DeleteAccount/>}/>
        </Routes>
      </Router>
    
    
  );
}

export default App; 