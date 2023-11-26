import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';


export default function TheatreCard({theatre, selectedMovie, screens}){
   
    const [screenList, updateScreens] = useState([]); 

    const filteringScreens= ()=>{
        const screenLists = theatre.screens.filter(screen =>
             screen.movieId === selectedMovie.id) 
        updateScreens(screenLists);
        
    }

    useEffect(()=>{
        filteringScreens();
    },[])

    function screenCard(screen){
            return(
                <div id={screen.id} className='flex flex-col md:mr-[3rem]'>
                    <button type='button' className='p-1 rounded text-sm md:text-sm text-[green] border-[green] border-[.1rem] mt-[1rem]
                        hover:text-[#ffffff] hover:bg-[green] focus:text-[#ffffff] focus:bg-[green]'>{screen.name}</button>                         
                    <p className='text-sm text-center mt-[.2rem] md:text-md text-[red] font-base mb-[1rem]'>{screen.timing}</p> 
                </div>
            )
    }

    const handleClick=()=>{
        console.log('Pressed');
    }

    return(
         

        <div key={theatre.id} 
        className="w-4/6 md:w-full m-[1rem]  border-[.1rem] p-[.3rem] rounded-lg cursor-pointer shadow-[red]
         shadow-lg flex flex-col justify-center md:justify-start md:flex-row" 
        onClick={handleClick}
        >
            <div className="">
                
                    <h6 className='text-sm md:text-lg font-bold mt-[1rem]'>Theatre: {theatre.name}</h6>                         
                    <p className='text-sm md:text-lg font-base mb-[1rem]'>Location: {theatre.location}</p> 
                 
                    
            </div>
            <div className="md:ml-[2rem] self-center flex flex-col md:flex-row ">
                    {
                        screenList.map(screen =>(
                            screenCard(screen)
                        ))
                    }
                    
                    
            </div>
        </div>  
    )
}