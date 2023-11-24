import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

export default function Success({userDetails}){

    const navigate = useNavigate();

    const [completedProfile, updateProfile] = useState({});

        let seats = userDetails.seatscount ? userDetails.seatscount : '_';
        let time = userDetails.timeslot ? userDetails.timeslot : '_' ;
        let price = userDetails.price ? userDetails.price : '_' ;

    useEffect(()=>{

        const timeUp =()=>{
            setInterval(()=>{
                navigate('/account')
            },9000)
        }
        
        updateProfile(userDetails); 
        if(completedProfile.price >0 && userDetails.price){
            timeUp();
        } 

    },[navigate, userDetails])

    return(
        <div className='h-screen  w-screen flex flex-col justify-center items-center px-[5rem]  '>
            <div className="w-full ">
                <div className="flex flex-col md:flex-row justify-between ">
                    <div>
                        <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name: </h6>                         
                        <p className='text-sm md:text-md font-base mb-[1rem]'>{`Total Seats: ${seats}`}</p>
                    </div>
                    <div>
                        <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>{`Show Time: ${time}`}</h6>                         
                        <p className='text-sm md:text-md font-base mb-[1rem]'>{`Price: ${price}`}</p>
                    </div>

                </div>
                <h1 className="text-[#41f70a] text-3xl md:text-5xl font-black mt-[2rem] mb-[2rem]"> Successfully Booked</h1> 
                <p>Booking information will be sent to your email id.</p>

            </div>
            
        </div>


    )
}