import { useParams,useNavigate } from "react-router-dom";
import {useEffect, useState, useRef} from 'react';
import ScreenRowSeats from "../../cards/ScreenRowSeats";

export default function SeatList({jsonData, user}){ 

     const navigate = useNavigate() ;

    let selectedSeatLocalStorage = localStorage.getItem('selectedSeats');
    // console.log('Local storage-selectedSeats', selectedSeatLocalStorage)

    let initialValue ;
    if(selectedSeatLocalStorage == null){
       initialValue = []
    }else initialValue = JSON.parse(localStorage.getItem('selectedSeats'))
    // console.log( 'initialValue', initialValue) ;
    // const initialValue = != undefined ? JSON.parse(localStorage.getItem('selectedSeats')) : [] ;

    const [selectedSeats, updateSeat] = useState(initialValue);
    const [error, updateError] = useState('');   
    const [successMsg, updateSuccess] = useState(false);
   

    const {screenName, theatreName, movieName} = useParams();

    let selectedSeatStorage = '';

    let userTheatre = JSON.parse(localStorage.getItem('userTheatre'));
    let userScreen = JSON.parse(localStorage.getItem('userScreen'));

    // checking whether path & user selected theatre & screen are same
    // for showing the price in selected screen only
    function checkPath(){
        let moviename = JSON.parse(localStorage.getItem('user')).userMovie.name ;
        let theatrename = JSON.parse(localStorage.getItem('userTheatre')).name ;
        let screenname = JSON.parse(localStorage.getItem('userScreen')).name ;

        console.log( moviename, theatrename, screenname)
        console.log( movieName, theatreName, screenName)

        if(moviename == movieName && theatrename == theatreName){
                if(screenname == screenName){ console.log('Yes'); return true} 
        } 
        return false ;
    }
   

    useEffect(()=>{
        
        // console.log('selectedSeats ',selectedSeats);
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        selectedSeatStorage = JSON.parse(localStorage.getItem('selectedSeats'));
        // console.log(selectedSeatStorage);
        updateError('')
        
    },[selectedSeats])

    


    const bookingHandler = () =>{

        
        let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); 
        if(selectedSeats[0] !== undefined){
            // console.log(selectedSeats) ;
            selectedSeats.forEach( eachSeat => eachSeat.booked = true )

            // console.log( 'BookedSeats', selectedSeats);
            let userDetails = JSON.parse(localStorage.getItem('userDetails')) ;

            const users={
                userDetails,
                selectedSeats 
            } 
            updateSuccess(true);

        }else updateError('*Please select a seat!')

    }

    
    const filteredTheatre = JSON.parse(localStorage.getItem('userTheatre'));
    // Object containing seats of a screen
    const filteredScreenSeats = JSON.parse(localStorage.getItem('userScreen')).seats; 
    const filteredScreenRows = Object.keys(filteredScreenSeats);
    // console.log(filteredScreenRows);
    // console.log(filteredScreenSeats[filteredScreenRows[0]]);

    





    return(
        <div className=' h-screen flex-col justify-between items-center px-[2rem] py-[4rem] '>

            <div className="px-[.3rem] md:px-[1.5rem]  flex justify-between md:items-center md:flex-row md:w-full">

                    <button type='type' onClick={()=>{navigate(`/home/${movieName}`)}}  className='w-[5rem]   text-sm h-[2.5rem]  mb-1 border-[0.1rem] 
                    text-xs  w-[3.5rem] rounded-3xl border-[#7a7777] md:w-[5rem]  md:h-[3rem] text-[black] border-[black] hover:text-[#ffffff] hover:bg-[black]
                      lg:h-[3rem] lg:text-sm lg:w-[5rem] flex justify-center items-center '>Back</button> 
                    
                    
                    <button type='type' className='text-xs w-[3.5rem] md:w-[5rem]   
                    text-sm h-[2.5rem]  mb-1 border-[0.1rem] 
                    rounded-3xl border-[#7a7777]  
                     md:w-[5rem]  md:h-[3rem]
                      lg:h-[3rem] lg:text-sm lg:w-[5rem] flex justify-center items-center '>Log out</button> 
            </div> 
            <div  className={`${!successMsg ? 'flex' : 'hidden'}  md:px-[1.5rem]  flex-col justify-center items-center md:items-center
                md:flex-col md:w-full `} >
                    <div className=" w-full flex flex-col-reverse items-center">
                        
                       
                        {   filteredScreenRows.map( eachRow =>(
                                    <ScreenRowSeats key={eachRow} eachRow={eachRow} filteredScreenSeats={filteredScreenSeats}
                                     selectedSeats={selectedSeats} updateSeat={updateSeat} />
                                )
                            )
                        }

                    </div>
                    <div className=' w-full flex justify-center flex-col'>
                        <div className='lg:ml-[6rem] mt-[5rem] flex flex-col items-center'>
                            <div className="flex justify-between">
                                <h6 className="mr-[3rem] ">Seats: 
                                    <span>
                                    {/* {localStorage.getItem('selectedSeats') !== '[]' && isSameScreen ? selectedSeats.length : '0'} */}
                                    {checkPath() ? selectedSeats.length : '0'}
                                    
                                    </span></h6>
                                <h6>Price: Rs:
                                    <span>
                                    {/* {localStorage.getItem('selectedSeats') !== '[]' && isSameScreen ? selectedSeats.length * 180 : '0'} */}
                                    
                                    </span>  
                                </h6>

                            </div>
                            <button type='button' onClick={bookingHandler} className='w-[14rem]  text-xl h-[2.5rem] 
                                pl-2 mb-1 border-[0.1rem] rounded-3xl
                                border-[#7a7777] bg-[#000000] text-[#ffffff] md:w-[14rem]  md:h-[3.5rem]
                            lg:h-[3.8rem] lg:text-2xl lg:w-[14rem]  '>Book tickets</button> 
                            <p className='text-[red] text-center'>{error}</p>


                        </div>
                        
                    </div>
                
            </div>


            <div className={`${successMsg ? 'flex' : 'hidden'} w-full mt-[1rem]  justify-center`}>
                <div className="p-5 border-[#868a91] rounded-lg shadow-2xl shadow-[#0df205]">
                    <h1 className="mb-[1rem]">{`Hi, ${localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')).name : ''} !`}</h1>
                    <div className="">
                        <h1 className="text-5xl mb-[2rem] text-[#0df205]">Successfully Booked !</h1>
                        <h5 className="mb-[1rem]">{`You have booked 
                        ${localStorage.getItem('selectedSeats') !== '[]' ? selectedSeats.length : '0'} 
                        seats`}</h5>
                        
                        <p className="mb-[1rem]">Thank you for Bookings .</p>
                        <h5 className="mb-[1rem]"> Booking information will be sent to your email id.</h5>
                        <div className="flex justify-center">

                            <button type='type' onClick={()=>{updateSuccess(false); navigate('/home')}} className='text-xs w-[3.5rem] md:w-[5rem]    
                                text-sm h-[2.5rem]  mb-1  border-[.1rem] hover:border-[0rem]
                                rounded-3xl border-[#7a7777]  
                                md:w-[5rem]  md:h-[3rem]
                                lg:h-[3rem] lg:text-sm lg:w-[5rem] flex justify-center items-center hover:text-[#ffffff] hover:bg-[#0df205] '>Ok</button> 
                        </div>
                    </div>
                </div>
                            
            </div>

       </div>   
           
    )
}

// ${llocalStorage.getItem('selectedSeats') !== '[]' ? selectedSeats.length : '0'}