import { useState, useEffect } from "react"; 
import {useNavigate} from 'react-router-dom';


export default function LeftBar({userDetails}){  

    const navigate = useNavigate();

    const [currentPath, updateState] = useState('')

        useEffect(()=>{
            updateState(window.location.pathname)
        },[])

    const selectedButton = 'bg-[#000000] text-[#ffffff]'; 
    const otherButtons = 'text-[#000000] bg-[#ffffff]' 
    
    return(
        <div className=' flex flex-col justify-center items-center  mt-[2rem] md:mt-[0rem]'>
                   
                    
            <div className='flex flex-wrap flex-shrink flex-col justify-between md:mr-[1rem]'>
                <h6 className='text-sm md:text-lg font-semibold mb-[2rem] '>Hi, {userDetails.username}</h6> 
            
                <button onClick={()=>{ navigate('/account')}} id ='account' type='button' className={`w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                border-[0.1rem] rounded-lg border-[#7a7777] 
                md:w-[11rem]  md:h-[3rem]
                lg:h-[3rem] lg:text-xl lg:w-[16rem]  ${currentPath ==='/account' ? selectedButton : otherButtons}`}>Account</button> 
                <button onClick={()=>{ navigate('/timing')}} id='timing' type='button' className={`w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                border-[0.1rem] rounded-lg border-[#7a7777] 
                md:w-[11rem]  md:h-[3rem]
                lg:h-[3rem] lg:text-xl lg:w-[16rem]  ${currentPath === '/timing' ? selectedButton : otherButtons} `}>Timing</button> 
                <button onClick={()=>{ navigate('/seats')}} id='seats' type='button' className={`w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                border-[0.1rem] rounded-lg border-[#7a7777] 
                md:w-[11rem]  md:h-[3rem]
                lg:h-[3rem] lg:text-xl lg:w-[16rem]  ${currentPath ==='/seats' ? selectedButton : otherButtons}`}>Seats</button> 
            </div>
        
        
        
        </div>
    )
}