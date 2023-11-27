import { Link, useParams } from 'react-router-dom';

export default function ScreenCard({screen,theatre, changeUser, user}){

    const {movieName} = useParams();

   

    const handleClick=()=>{
        screen["selected"]= true ;
        changeUser({"userTheatre": theatre});
        // changeUser({"userScreen": screen}) ;
    }

    return(
        <Link to={`/home/${movieName}/${theatre.name}/${screen.name}`} >
            <div id={screen.id} className='flex flex-col md:mr-[3rem]' onClick={handleClick}>
                <button type='button' className={`p-1 rounded text-sm md:text-sm text-[green] border-[green] border-[.1rem] mt-[1rem]
                    hover:text-[#ffffff] hover:bg-[green] focus:text-[#ffffff] focus:bg-[green]`} >{screen.name}</button>                         
                <p className='text-sm text-center mt-[.2rem] md:text-md text-[red] font-base mb-[1rem]'>{screen.timing}</p> 
            </div>

        </Link>

        
        
    )
}