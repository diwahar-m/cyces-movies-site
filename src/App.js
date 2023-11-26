import './App.css'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import MovieList from './components/MovieList';
import TheatreList from './components/TheatreList';
import TimeSlot from './components/TimeSlot';
import SeatSlot from './components/SeatSlot';
import DeleteAccount from './components/DeleteAccount'; 
import Success from './components/Success';
import {useState, useEffect} from  'react';


function App() { 

  const [userDetails, updateDetails] = useState({}); 

  const [jsonData,updateJsonData] = useState([]);
  const changeJson = (object)=>{
    updateJsonData(object);
  }
  const [user, updateUser] = useState([]); 
  const changeUser = (object)=>{
    updateUser([...user,object]);
  }

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
          <Route path='/home' element={<MovieList jsonData={jsonData} changeJson={changeJson} changeUser={changeUser}/>}/>
          <Route path='/home/:movieName' element={<TheatreList jsonData={jsonData} />}/>
          <Route path='/timing' element={<TimeSlot  userDetails={userDetails} changeDetails={changeDetails} />}/>
          <Route path='/seats' element={<SeatSlot userDetails={userDetails} changeDetails={changeDetails}/>}/>
          <Route path='/success' element={<Success userDetails={userDetails}/>}/>
          <Route path='/account' element={<DeleteAccount userDetails={userDetails} changeDetails={changeDetails}/>}/>
        </Routes>
      </Router>
    
    
  );
}

export default App; 