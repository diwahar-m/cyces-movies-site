import LeftBar from "../LeftBar"; 
import { useState, useRef } from "react";  
import { useNavigate } from "react-router-dom";
import SeatCard from "../SeatCard/index";
import './style.css';

// function SeatCard({index,seatHandler}) { 

//     // const buttonHandler = (e)=>{
//     //     seatHandler(e.target.id);
//     //     console.log(e.target.id)
//     // }  

//     let seatId = `seat-${index}` ; 

//     const buttonHandler = (seatId)=>{
//         seatHandler(seatId)
//     }

//     return(
//         <li id={seatId}  >
//             <div>
//                 <button id={seatId}  onClick={buttonHandler(seatId)} type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
//                 border-[0.1rem]  border-[#7a7777] text-[#00000] bg-[#D9D9D9]
//                 md:w-[2rem]  md:h-[3rem]
//                 lg:h-[3rem] lg:text-xl lg:w-[2rem]'>
//                 </button> 

//             </div>
//         </li>
//     )
// }

export default function SeatSlot({userDetails, changeDetails}){ 

    const navigate = useNavigate('');

    const [seatIds, updateSeat] = useState([]);

    const [error, updateError] = useState('');   

    const seat = useRef(''); 

    console.log(seat);

    const seatHandler = (id) =>{
        let selectedSeat = document.getElementById(id);

        console.log(seatIds)

        if(seatIds.includes(id)){
            const removingItem = seatIds.filter(each => each!==id)
            updateSeat(removingItem);
            selectedSeat.classList.remove('selected');
        }else{
            updateSeat([...seatIds, id]);
            selectedSeat.classList.add('selected');
            updateError('');
        }

    }

    const bookingHandler = ()=>{
        if(seatIds.length <1){
            updateError('*Please book seats for the movie');
            return;
        }

        changeDetails({seatscount:seatIds.length, price: seatIds.length*180}); 
        navigate('/success');

    }
   


    return(
        <div className=' min-h-screen md:h-screen flex flex-col  md:flex-row '>
            
            <div className=" w-100  md:w-1/4 md:h-full flex flex-col flex-wrap justify-center ">
                <LeftBar userDetails={userDetails}/>
            </div> 

            <div className='border-t-4 md:border-t-0 mt-[2rem] md:mt-[0rem] md:inline-block border-[black] md:border-l-4 md:h-full'></div>


            <div className="  md:w-3/4 flex  justify-center items-center ">


                <div className="flex flex-col justify-between flex-wrap w-[20rem] sm:w-[34rem]  md:w-[35rem] lg:w-[40rem] ">

                    <ul className="flex flex-wrap w-[20rem] sm:w-[28rem]  md:w-[31rem] lg:w-[35rem] ">

                        {
                            Array.from({length:15},(_,index)=>(
                                <SeatCard key={index} index={index}  seatHandler={seatHandler} /> 
                                
                            ))
                        }
                        {/* <button id='1' onClick={seatHandler} type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button id='2' type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button id='3' type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button id='4' type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button id='5' type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button id='6' type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button>  */}
                        
                    
                    </ul> 

                    <div className='w-[20rem] sm:w-[35rem]  md:w-[31rem] flex flex-col justify-between items-center w-[16rem] mt-[3rem]'>
                        <div className="flex justify-between w-[16rem] md:w-[10rem] lg:w-[16rem] ">
                            <p className='text-sm md:text-md font-base mb-[1rem]'>{`Total Seats: ${seatIds.length}`}</p> 
                            <p className='text-sm md:text-md font-base mb-[1rem]'>{`Price: ${seatIds.length*180}`}</p> 

                        </div>
                        <button onClick={bookingHandler} type='button' className='w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                            border-[0.1rem] rounded-lg border-[#7a7777] bg-[#000000] text-[#ffffff]
                            md:w-[11rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[16rem]  '>
                            Book
                        </button> 
                        <p className='text-[red]'>{error}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}