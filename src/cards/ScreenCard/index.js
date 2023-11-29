import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ScreenCard({screen,theatre, changeUser, user}){

    const {movieName} = useParams();

    const navigate = useNavigate();

   

    const handleClick=()=>{
        screen["selected"]= true ;
        changeUser({"userTheatre": theatre});
        localStorage.setItem('userTheatre', JSON.stringify(theatre));
        changeUser({"userScreen": screen}) ;
        localStorage.setItem('userScreen', JSON.stringify(screen));
        navigate(`/home/${movieName}/${theatre.name}/${screen.name}`)
    }

    return(
        // <Link to={`/home/${movieName}/${theatre.name}/${screen.name}`} >
            <div id={screen.id} className='flex flex-col mr-[1rem] md:mr-[3rem] cursor-pointer' onClick={handleClick}>
                <button type='button' className={`p-1 rounded text-sm md:text-sm text-[green] border-[green] border-[.1rem] 
                    hover:text-[#ffffff] hover:bg-[green] focus:text-[#ffffff] focus:bg-[green]`} >{screen.timing}</button>                         
                {/* <p className='text-sm text-center mt-[.2rem] md:text-md text-[red] font-base mb-[1rem]'>{screen.timing}</p>  */}
            </div>

        // </Link>

        
        
    )
}