import { useParams,useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import ScreenRowSeats from "../../cards/ScreenRowSeats";

export default function SeatList({jsonData, user}){ 


    const [selectedSeats, updateSeat] = useState([])

    // let selectedSeats2;

    const {screenName} = useParams();


    useEffect(()=>{
        console.log('selectedSeats ',selectedSeats);
        // localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        // selectedSeats2 = JSON.parse(localStorage.getItem('selectedSeats'));
    },[selectedSeats])




    const filteredTheatreList = jsonData.theatres.filter( theatre => theatre.id === user.userTheatre.id);
    const filteredTheatre = filteredTheatreList[0];
    const filteredScreenList = filteredTheatre.screens.filter( screen => screen.name === screenName);
    // Object containing seats of a screen
    const filteredScreenSeats = filteredScreenList[0].seats; 
    const filteredScreenRows = Object.keys(filteredScreenSeats);
    console.log(filteredScreenRows);
    console.log(filteredScreenSeats[filteredScreenRows[0]]);


    console.log(filteredTheatre[0]);

    console.log(user)

    const {movieName} = useParams();


    const navigate = useNavigate();
   

    return(
        <div className=' h-screen flex-col justify-between items-center px-[2rem] py-[4rem] '>

            <div className="px-[1.5rem]  flex justify-between md:items-center
                md:flex-row md:w-full">

                    <button type='type' onClick={()=>{navigate(`/home/${movieName}`)}}  className='w-[5rem]   text-sm h-[2.5rem]  mb-1 border-[0.1rem] 
                    rounded-3xl border-[#7a7777] md:w-[5rem]  md:h-[3rem] text-[black] border-[black] hover:text-[#ffffff] hover:bg-[black]
                      lg:h-[3rem] lg:text-sm lg:w-[5rem] flex justify-center items-center '>Back</button> 
                    
                    
                    <button type='type' className='w-[5rem]   text-sm h-[2.5rem]  mb-1 border-[0.1rem] rounded-3xl border-[#7a7777]  
                     md:w-[5rem]  md:h-[3rem]
                      lg:h-[3rem] lg:text-sm lg:w-[5rem] flex justify-center items-center '>Log out</button> 
            </div> 
            <div  className="md:px-[1.5rem]  flex flex-col justify-center items-center md:items-center
                md:flex-col md:w-full">
                    <div className="w-full flex flex-col-reverse items-center">
                        
                       
                        {   filteredScreenRows.map( eachRow =>(
                                    <ScreenRowSeats key={eachRow} eachRow={eachRow} filteredScreenSeats={filteredScreenSeats}
                                     selectedSeats={selectedSeats} updateSeat={updateSeat} />
                                )
                            )
                        }








                    </div>
                    <div className='flex justify-center flex-col'>
                        <div className="flex w-3/5 justify-between">
                            <h6 className="mr-[3rem] ">Seats: <span>{selectedSeats.length}</span></h6>
                            <h6>Cost: {selectedSeats.length * 180}</h6>

                        </div>
                        <button type='button' className='w-[17rem]  text-xl h-[2.5rem] 
                        pl-2 mb-1 border-[0.1rem] rounded-3xl
                         border-[#7a7777] bg-[#000000] text-[#ffffff] md:w-[28rem]  md:h-[3.5rem]
                      lg:h-[3.8rem] lg:text-2xl lg:w-[30rem]  '>Book tickets</button> 

                    </div>
                
            </div>

       </div>   
           
    )
}