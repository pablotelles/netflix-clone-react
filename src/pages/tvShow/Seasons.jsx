import './tvShow.css'
import {useParams} from 'react-router-dom'
import Episodes from './episodes';

function Seasons({item}){
    const {id} = useParams()    
    let season = [];
    for( let i in item.seasons){
        season.push(item.seasons[i]);     
        }
    return(
        <>  
            <div className='tv-show'>
                <div className='tv__season--options'>
                {season.map((item, index) =>(     
                        <div className="tv__season--episodes">  
                            <div>          
                                <h3
                                className='seaseon__title'
                                value={item.name}
                                onClick={(ev)=>{
                                }}                        
                                >{item.name}</h3>
                            </div>   
                            <Episodes id={id} season={item.season_number} />
                        </div>                             
                ))}
                </div>                 
            </div>
         </>
    )
}

export default Seasons;