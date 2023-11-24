import LeftBar from "../LeftBar"; 
import { useNavigate } from "react-router-dom"; 

export default function DeleteAccount({userDetails, changeDetails}){

    const navigate  = useNavigate();

    const buttonHandler = () =>{
        changeDetails({});
        navigate('/');
    }

    return(
        <div className=' min-h-screen md:h-screen flex flex-col  md:flex-row '>
            
            <div className=" w-100  md:w-1/4 md:h-full flex flex-col flex-wrap justify-center ">
                <LeftBar userDetails={userDetails}/>
            </div> 

            <div className='border-t-4 md:border-t-0 mt-[2rem] md:mt-[0rem] md:inline-block border-[black] md:border-l-4 md:h-full'></div>


            <div className="mt-[4rem]  md:w-3/4  flex flex-col  justify-center items-center ">
                
                <div className="flex flex-wrap  w-[15rem]   md:w-[30rem] ">
                    <button type='button' onClick={buttonHandler} className='w-[17rem]  text-xl h-[2.5rem] pl-2 mb-1 border-[0.1rem] rounded border-[#7a7777] bg-[red] text-[#ffffff]
                     md:w-[28rem]  md:h-[3.5rem]
                      lg:h-[3.8rem] lg:text-2xl lg:w-[30rem]  '>Delete your account</button>
                    <p className='text-sm md:text-md font-base mt-[1rem] mb-[1rem]'>This will lead to login screen</p>
                    
                </div> 

                
            </div>
        </div>
    )
}