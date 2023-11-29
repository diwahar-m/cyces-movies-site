import IndividualSeat from "../IndividualSeat";

export default function ScreenRowSeats({eachRow, filteredScreenSeats, selectedSeats, updateSeat, seatCount, updateCount}){

    

    const selectedScreen = JSON.parse(localStorage.getItem('userScreen'))

    const seatColumns = selectedScreen.seats[eachRow];



    return(

        <div id={eachRow}>
            <div className="flex  mt-[1rem] mb-[1rem]">
                    <h1 className='text-lg md:text-2xl mr-[1rem] md:mr-[2rem] lg:text-3xl text-[#918c7d] 
                    lg:mr-[5rem]'>{eachRow}</h1>
                    <div className="flex  ">
                        {
                            seatColumns.map( eachColumn =>(
                                <IndividualSeat key={eachColumn.id} eachColumn={eachColumn} selectedSeats={selectedSeats} updateSeat={updateSeat}/>
                            ))
                        }
                    </div>

            </div>
        </div>


    )
}