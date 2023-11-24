import './style.css'

export default function SeatCard({index,seatHandler}) { 

    const buttonHandler = (e)=>{
        seatHandler(e.target.id);
        console.log(e.target.id)
    } 

    

    return(
        <li id={`seat-${index}`}  >
            <div>
                <button id={`seat-${index}`}  onClick={buttonHandler} type='button' className='w-[2rem]  text-sm h-[3rem] p-auto m-[1rem] 
                border-[0.1rem]  border-[#7a7777] text-[#00000] bg-[#D9D9D9]
                md:w-[2rem]  md:h-[3rem]
                lg:h-[3rem] lg:text-xl lg:w-[2rem]'>
                </button> 

            </div>
            

        </li>
        

    )
}