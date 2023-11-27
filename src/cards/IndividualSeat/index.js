import {useState} from 'react';

export default function IndividualSeat({eachColumn, selectedSeats, updateSeat}){

    const [selectedButtonIds, updateButton] = useState([]); // for coloring of buttons



    const buttonHandler = (e)=>{
        if (selectedSeats.length === 0){
            updateSeat([...selectedSeats, eachColumn]);
            updateButton([...selectedButtonIds, eachColumn.id])
            
        }else{
            // checks if seat is already selected by the user
            const seatSelection = selectedSeats.find( each => each.id === e.target.id); 
            if(seatSelection === undefined){
                updateSeat([...selectedSeats, eachColumn]);
                updateButton([...selectedButtonIds, eachColumn.id]);
                
            }
            else if(seatSelection.id === eachColumn.id){
                
                updateSeat(selectedSeats.filter(seat => seat.id !== eachColumn.id));
                updateButton(selectedButtonIds.filter( button => button !== eachColumn.id));
            }else{
                updateSeat([...selectedSeats, eachColumn])
                updateButton([...selectedButtonIds, eachColumn.id]);
            }
            
        }
        console.log( e.target.id)

    }


    return(
       

        <button onClick={buttonHandler} type='button' id={eachColumn.id} className={`rounded-lg mr-[1rem]  w-[2.5rem] h-[2.5rem] 
         cursor-pointer border-[#1ed106] border-[.1rem] flex justify-center items-center hover:bg-[#1ed106] hover:text-[#ffffff]
        ${selectedButtonIds.indexOf(eachColumn.id) !== -1 ? 'bg-[#1ed106] text-[#ffffff]' : 'text-[#1ed106] bg-[#ffffff]'}` } >
            {eachColumn.name.charAt(1)}
        </button>


    )
}