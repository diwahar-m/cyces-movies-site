import LeftBar from "../LeftBar"; 
import { useNavigate } from "react-router-dom";


export default function TimeSlot({userDetails}){ 

    const navigate = useNavigate();

    return(
        <div className=' min-h-screen md:h-screen flex flex-col  md:flex-row '>
            
            <div className=" w-100  md:w-1/4 md:h-full flex flex-col flex-wrap justify-center ">
                <LeftBar userDetails={userDetails}/>
            </div> 

            <div className='border-t-4 md:border-t-0 mt-[2rem] md:mt-[0rem] md:inline-block border-[black] md:border-l-4 md:h-full'></div>


            <div className="  md:w-3/4 flex  justify-center items-center ">

                <div className="flex flex-wrap w-[15rem]  md:w-[40rem] ">

                    <button onClick={()=>{navigate('/seatslot')}} type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto m-[1rem] 
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>9 : 30 AM</button> 
                    <button onClick={()=>{navigate('/seatslot')}}  type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto mb-1 m-[1rem]
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>10 : 30 AM</button> 
                    <button onClick={()=>{navigate('/seatslot')}}  type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto mb-1 m-[1rem]
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>11 : 30 AM</button> 
                    <button onClick={()=>{navigate('/seatslot')}}  type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto mb-1 m-[1rem]
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>12: 30 AM</button>  

                    <button onClick={()=>{navigate('/seatslot')}}  type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto mb-1 m-[1rem]
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>1 : 30 AM</button> 
                    <button onClick={()=>{navigate('/seatslot')}}  type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto mb-1 m-[1rem]
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>2 : 30 AM</button> 
                    <button onClick={()=>{navigate('/seatslot')}}  type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto mb-1 m-[1rem]
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>3 : 30 AM</button> 
                    <button onClick={()=>{navigate('/seatslot')}}  type='submit' className='w-[5rem]  text-sm h-[2.5rem] p-auto mb-1 m-[1rem]
                        border-[0.1rem] rounded-lg border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                        md:w-[7rem]  md:h-[3rem]
                        lg:h-[3rem] lg:text-xl lg:w-[7rem]  '>4 : 30 AM</button> 
                </div>
            </div>
        </div>

    )
}