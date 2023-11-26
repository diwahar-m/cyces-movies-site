import {Link  } from "react-router-dom"

export default function MovieCard({movie, changeUser}){
    console.log('movie',movie);
    let movieName = movie.name

    const handleClick=()=>{
        changeUser({"movieName": movie.name})
       
    }

    return(
         
        <Link to={`/home/${movieName}`}>
            <div key={movie.id} className=" m-[1rem]  border-[.1rem] p-[.3rem] rounded-lg cursor-pointer shadow-[red] shadow-lg
            transition-all duration-300 ease-in-out hover:scale-105 " onClick={handleClick}>
                <img src={movie.url} alt='movie' className="object-fill h-[20em] w-[15em] rounded-lg"/> 
                <div className="pl-[1rem]">
                    <div>
                        <h6 className='text-sm md:text-sm font-bold mt-[1rem]'>{movieName}</h6>                         
                        <p className='text-sm md:text-md font-base mb-[1rem]'>{movie.language}</p> 
                    </div>
                    <h6 className='text-sm md:text-md font-semibold mb-[2rem]'>Rs. 180/ per seat</h6> 
                        
                </div>
            </div> 

        </Link>

        
    )
}