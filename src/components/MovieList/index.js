import { useNavigate } from "react-router-dom"

export default function MovieList(){ 

    const navigate = useNavigate();

    return(
        <div className='h-screen flex-col justify-between items-center px-[2rem] py-[4rem] '>

            <div className="px-[1.5rem]  flex flex-col justify-between md:items-center
                md:flex-row md:w-full">
                    <div className="flex flex-col justify-between ">
                        <h6 className='text-sm md:text-md font-bold mb-[1rem]'>Tagline</h6> 
                        <h1 className='text-3xl md:text-5xl font-black mb-[2rem]'>Movies</h1> 
                        <p className='text-sm md:text-md font-semibold mb-[2rem]'>Please select the movie you wish to watch</p> 
                    
                    </div>
                    <button type='submit' className='w-[5rem]   text-sm h-[2.5rem]  mb-1 border-[0.1rem] rounded-3xl border-[#7a7777]  
                     md:w-[5rem]  md:h-[3rem]
                      lg:h-[3rem] lg:text-sm lg:w-[5rem] flex justify-center items-center '>View All</button> 
            </div> 


            <div className=" flex flex-wrap my-2">

                <div className=" m-[1rem]" onClick={()=>{navigate('/timeslot')}}>
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div> 

                <div className="">
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div> 

                <div className="">
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div> 

                <div className="">
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div>
                <div className="">
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div> 

                <div className="">
                    <img src={process.env.PUBLIC_URL + '/assets/film-movie.png'} className="h-[10em] w-[15em]"/> 
                    <div className="">
                        <div>
                            <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>Movie name</h6>                         
                            <p className='text-sm md:text-md font-base mb-[1rem]'>Tamil</p> 
                        </div>
                        <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                            
                    </div>
                </div>

            </div>

        </div>
    )
}