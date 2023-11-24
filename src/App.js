import './App.css'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import MovieList from './components/MovieList';
import TimeSlot from './components/TimeSlot';
import SeatSlot from './components/SeatSlot';
import DeleteAccount from './components/DeleteAccount'; 
import Success from './components/Success';
import {useState, useEffect} from  'react';


function App() { 

  const [userDetails, updateDetails] = useState({}); 

  useEffect(()=>{
    console.log(userDetails);
  },[userDetails])

  const changeDetails =(value) =>{
    updateDetails({...userDetails, ...value}); 
    console.log(userDetails)
  }

  return (
    

      <Router>
        <Routes>
          <Route path='/' element={<SignUp userDetails={userDetails} changeDetails={changeDetails} />}/>
          <Route path='/movielist' element={<MovieList/>}/>
          <Route path='/timing' element={<TimeSlot  userDetails={userDetails} changeDetails={changeDetails} />}/>
          <Route path='/seats' element={<SeatSlot userDetails={userDetails} changeDetails={changeDetails}/>}/>
          <Route path='/success' element={<Success userDetails={userDetails}/>}/>
          <Route path='/account' element={<DeleteAccount userDetails={userDetails} changeDetails={changeDetails}/>}/>
        </Routes>
      </Router>
    
    
  );
}

export default App; 