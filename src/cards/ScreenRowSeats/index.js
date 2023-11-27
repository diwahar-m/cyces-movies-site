import IndividualSeat from "../IndividualSeat";

export default function ScreenRowSeats({eachRow, filteredScreenSeats, selectedSeats, updateSeat}){

    const seatColumns = filteredScreenSeats[eachRow];

    return(

        <div id={eachRow}>
            <div className="flex mt-[1rem] mb-[1rem]">
                    <h1 className='text-3xl text-[#918c7d] mr-[5rem]'>{eachRow}</h1>
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