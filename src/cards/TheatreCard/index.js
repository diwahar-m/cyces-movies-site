import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import ScreenCard from '../ScreenCard';

export default function TheatreCard({theatre, selectedMovie, changeUser, user}){
   
    const [theatreObject, updateTheatre]  = useState({});
    const [movie, updateMovie] = useState({});
    const [screenList, updateScreens] = useState([]);

    const filteringScreens= ()=>{
       
        
        updateTheatre(theatre);
        const screenLists = theatre.screens.filter(screen =>
            screen.movieId === selectedMovie.id) 
        updateMovie(selectedMovie);
        updateScreens(screenLists);
        
    }

    useEffect(()=>{
        filteringScreens();
    },[])

    
    return(
        
            theatre  && (

                <div  id={theatre.id}
                    className="w-4/6 md:w-full m-[1rem]  border-[.1rem] p-[.3rem] rounded-lg cursor-pointer shadow-[#777d78]
                    shadow-lg flex flex-col justify-center md:justify-start md:flex-row" 
                    
                >
                    <div className="">
                        
                            <h6 className='text-sm md:text-lg font-bold mt-[1rem]'>Theatre: {theatre.name}</h6>                         
                            <p className='text-sm md:text-lg font-base mb-[1rem]'>Location: {theatre.location}</p> 
                        
                            
                    </div>

                    {
                        screenList &&
                        (
                            <div className="md:ml-[2rem] self-center flex flex-col md:flex-row ">
                                {
                                    screenList.map(screen =>(
                                        <ScreenCard key={screen.id} user={user} screen={screen} theatre={theatre} changeUser={changeUser}/>
                                           
                                        ))
                                }
                            </div>

                        )
                    }
                    
                </div> 

            )
         

         
    )
}