import { useState, useRef } from "react";
import LeftBar from "../LeftBar"; 
import { useNavigate } from "react-router-dom"; 
import { FaArrowAltCircleRight } from "react-icons/fa";
import './style.css' ;

// already pressed => 
// if button pressed => change color and transfer state 
// 

export default function TimeSlot({userDetails, changeDetails}){ 

    const navigate = useNavigate(); 

    const [error, updateError] = useState(''); 
 
    const time = useRef('');
    // let isSelected = false ;
  
    const timeHandler = event =>{
        // if no button selected
        if(time.current === ''){
            time.current = event.target.id; 
            // isSelected = true;
            changeDetails({ ['timeslot']: event.target.id}); 
            event.target.classList.add('selected');
            updateError('');
         } // if same button was selected 
        else if(time.current === event.target.id){
            
            changeDetails({ ['timeslot']: '_'}); 
            event.target.classList.remove('selected'); 

            if(userDetails.timeslot===''){
                event.target.classList.add('selected');
                // isSelected = true;
                changeDetails({ ['timeslot']: event.target.id}); 
            }

        } else{
            // if other buttons are selected 
            let previousTime = document.getElementById(time.current);
            previousTime.classList.remove('selected');

            time.current = event.target.id; 
            changeDetails({ ['timeslot']: event.target.id}); 
            event.target.classList.add('selected');
            updateError('');
        }
        

    }

    const navigationHandler = ()=>{
        if(userDetails.timeslot) navigate('/seats') 
        else updateError('*Please select a timeslot for your movie')
    }

    return(
        <div className=' min-h-screen md:h-screen flex flex-col  md:flex-row '>
            
            <div className=" w-100  md:w-1/4 md:h-full flex flex-col flex-wrap justify-center ">
                <LeftBar userDetails={userDetails}/>
            </div> 

            <div className='border-t-4 md:border-t-0 mt-[2rem] md:mt-[0rem] md:inline-block border-[black] md:border-l-4 md:h-full'></div>


            <div className="  md:w-3/4 flex flex-col  justify-center items-center ">
                {/* time slot container */}
                <div className="flex flex-wrap w-[15rem]  md:w-[40rem] ">

                    <button id='9:30am'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]' >9 : 30 AM</button> 
                    <button id='10:30am'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]'>10 : 30 AM</button> 
                    <button id='11:30am'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]'>11 : 30 PM</button> 
                    <button id='12:30pm'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]'>12 : 30 PM</button> 
                    <button id='1:30pm'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]'>1 : 30 PM</button> 
                    <button id='2:30pm'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]'>2 : 30 PM</button> 
                    <button id='3:30pm'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]'>3 : 30 PM</button> 
                    <button id='4:30pm'  type='button' onClick={timeHandler}  className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]'>4 : 30 PM</button> 
                    
                </div> 

                <div className='w-[15rem] flex flex-wrap mt-[1rem]   md:w-[40rem] p-[1rem]  '>
                    <div className=''>
                        <p className='text-sm md:text-md font-base mb-[.5rem]'>Please select your time slot</p>
                        <div className="flex ">
                            <p className='text-md md:text-md font-base mb-[1rem] '>Now Select your seats</p> 
                            <button onClick={navigationHandler} type='button' className='pb-[0.7rem] ml-[.4rem] hover:ml-[.8rem] '>
                                <FaArrowAltCircleRight color='green'/>
                            </button>
                        
                        </div> 
                        <p className='text-[red]'>{error}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}