import './App.css'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import MovieList from './components/MovieList';
import TheatreList from './components/TheatreList';
import SeatList from './components/SeatList';

import TimeSlot from './components/TimeSlot';
import SeatSlot from './components/SeatSlot';
import DeleteAccount from './components/DeleteAccount'; 
import Success from './components/Success';
import {useState, useEffect} from  'react';


function App() { 

  const [userDetails, updateDetails] = useState({}); // users info 


  const [jsonData,updateJsonData] = useState([]); // complete json data
  const [user, updateUser] = useState({}); // user selected details

  const changeJson = (object)=>{
    updateJsonData(object);
  }
 

  const changeUser = (object)=>{
    updateUser({...user,...object});
    
  }

  useEffect(()=>{
    console.log(user);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    localStorage.setItem('user', JSON.stringify(user))
 
  },[userDetails,user])

  const changeDetails =(value) =>{ // updating user info
    updateDetails({...userDetails, ...value}); 
    console.log(userDetails)
  }

  return (
    

      <Router>
        <Routes>
          <Route path='/' element={<SignUp changeUser={changeUser} userDetails={userDetails} changeDetails={changeDetails} />}/>
          <Route path='/home' element={<MovieList jsonData={jsonData} changeJson={changeJson} changeUser={changeUser}/>}/>
          <Route path='/home/:movieName' element={<TheatreList jsonData={jsonData} changeUser={changeUser} user={user}/>}/>
          <Route path='/home/:movieName/:theatreName/:screenName' element={<SeatList jsonData={jsonData} user={user} />}/>

          <Route path='/timing' element={<TimeSlot  userDetails={userDetails} changeDetails={changeDetails} />}/>
          <Route path='/seats' element={<SeatSlot userDetails={userDetails} changeDetails={changeDetails}/>}/>
          <Route path='/success' element={<Success userDetails={userDetails}/>}/>
          <Route path='/account' element={<DeleteAccount userDetails={userDetails} changeDetails={changeDetails}/>}/>
        </Routes>
      </Router>
    
    
  );
}

export default App; 