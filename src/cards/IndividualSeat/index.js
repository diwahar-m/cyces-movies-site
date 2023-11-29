import {useState, useEffect} from 'react';

export default function IndividualSeat({eachColumn, selectedSeats, updateSeat}){

   function checkingStatus(storage){
        if(storage.length > 2) {
            return JSON.parse(storage).find((each) => each.id == eachColumn.id);
        }
        console.log(storage); 
        return false

   }
   
    useEffect(()=>{
        (function updatingStorage(){
            console.log('Individual Seat')

        })()
        
    },[selectedSeats])


    const buttonHandler = (e)=>{
        if(!eachColumn.booked){

            if (selectedSeats.length === 0){
                eachColumn.selected = true;
                updateSeat([...selectedSeats, eachColumn]);
                localStorage.setItem('selectedSeats', JSON.stringify([...selectedSeats, eachColumn]));
            }else{
                // checks if seat is already selected by the user
                const seatSelection = selectedSeats.find( each => each.id === e.target.id); 
                if(seatSelection === undefined){
                    eachColumn.selected = true;
                    updateSeat([...selectedSeats, eachColumn]);
                    localStorage.setItem('selectedSeats', JSON.stringify([...selectedSeats, eachColumn]));
                    
                }
                else if(seatSelection.id === eachColumn.id){
                    eachColumn.selected = false;
                    updateSeat(selectedSeats.filter(seat => seat.id !== eachColumn.id));
                    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats.filter(seat => seat.id !== eachColumn.id)));
                    
    
                }else{
                    eachColumn.selected = true;
                    updateSeat([...selectedSeats, eachColumn]);
                    localStorage.setItem('selectedSeats', JSON.stringify([...selectedSeats, eachColumn]));
                }
                
            }

        }
    }


    return(
       

        <button onClick={buttonHandler} type='button' id={eachColumn.id} className={`lg:rounded-lg w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem] rounded  lg:w-[2.5rem] lg:h-[2.5rem] 
          border-[#1ed106] border-[.1rem] 
           flex justify-center items-center 
         ${ eachColumn.id.includes('4') ? 'lg:mr-[4rem] md:mr-[2rem] mr-[1rem]' : ''}
         ${eachColumn.booked ? 'text-[#ffffff] bg-[#a69392] border-[#a69392] mr-[.5rem] lg:mr-[1rem] cursor-auto' : 
         checkingStatus(localStorage.getItem('selectedSeats')) ? 'mr-[.5rem] lg:mr-[1rem] bg-[#1ed106] text-[#ffffff] cursor-pointer' : 'mr-[.5rem] lg:mr-[1rem] hover:bg-[#1ed106] hover:text-[#ffffff] text-[#1ed106] bg-[#ffffff] cursor-pointer'}
        ` } >
            {eachColumn.name.charAt(1)}
        </button>


    )
}
