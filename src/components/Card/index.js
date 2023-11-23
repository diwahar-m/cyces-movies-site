

export default function Card(){

    return(
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
    )
}