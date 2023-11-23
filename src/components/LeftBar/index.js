


export default function LeftBar({userDetails}){


    return(
        <div className=' flex flex-col justify-center items-center  mt-[2rem] md:mt-[0rem]'>
                   
                    
            <div className='flex flex-wrap flex-shrink flex-col justify-between md:mr-[1rem]'>
                <h6 className='text-sm md:text-lg font-semibold mb-[2rem] '>Hi, {userDetails.username}</h6> 
            
                <button type='submit' className='w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                border-[0.1rem] rounded-lg border-[#7a7777] text-[#000000] bg-[#ffffff]
                md:w-[11rem]  md:h-[3rem]
                lg:h-[3rem] lg:text-xl lg:w-[16rem]  '>Account</button> 
                <button type='submit' className='w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                border-[0.1rem] rounded-lg border-[#7a7777] bg-[#000000] text-[#ffffff]
                md:w-[11rem]  md:h-[3rem]
                lg:h-[3rem] lg:text-xl lg:w-[16rem]  '>Timing</button> 
                <button type='submit' className='w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                border-[0.1rem] rounded-lg border-[#7a7777] text-[#000000] bg-[#ffffff]
                md:w-[11rem]  md:h-[3rem]
                lg:h-[3rem] lg:text-xl lg:w-[16rem]  '>Seats</button> 
            </div>
        
        
        
        </div>
    )
}