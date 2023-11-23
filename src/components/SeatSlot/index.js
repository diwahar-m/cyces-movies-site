import LeftBar from "../LeftBar"

export default function SeatSlot({userDetails}){

    return(
        <div className=' min-h-screen md:h-screen flex flex-col  md:flex-row '>
            
            <div className=" w-100  md:w-1/4 md:h-full flex flex-col flex-wrap justify-center ">
                <LeftBar userDetails={userDetails}/>
            </div> 

            <div className='border-t-4 md:border-t-0 mt-[2rem] md:mt-[0rem] md:inline-block border-[black] md:border-l-4 md:h-full'></div>


            <div className="  md:w-3/4 flex  justify-center items-center ">


                <div className="flex flex-col justify-between flex-wrap w-[20rem] sm:w-[34rem]  md:w-[35rem] lg:w-[40rem] ">

                    <div className="flex flex-wrap w-[20rem] sm:w-[28rem]  md:w-[31rem] lg:w-[35rem] ">


                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        <button type='submit' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                            border-[0.1rem]  border-[#7a7777] bg-[#D9D9D9] text-[#00000]
                            md:w-[2rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[2rem]  '>
                        </button> 
                        
                    
                    </div> 

                    <div className='w-[20rem] sm:w-[35rem]  md:w-[31rem] bg-[red] flex flex-col justify-between items-center w-[16rem] mt-[3rem]'>
                        <div className="flex justify-between w-[16rem] md:w-[10rem] lg:w-[16rem] ">
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 

                        </div>
                        <button type='submit' className='w-[17rem]  text-md h-[2.5rem] pl-2 mb-1 
                            border-[0.1rem] rounded-lg border-[#7a7777] bg-[#000000] text-[#ffffff]
                            md:w-[11rem]  md:h-[3rem]
                            lg:h-[3rem] lg:text-xl lg:w-[16rem]  '>
                            Book
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}