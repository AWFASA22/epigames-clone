import { MagnifyingGlass } from 'phosphor-react';
import './Search.css'

const Search=()=>
{
    return(
        <div className="Search">
            <ul>
                <li>
                    <span>
                        <MagnifyingGlass size={20} weight="light" />
                        <input input="text" placeholder='Search store'></input>
                    </span>
                </li>
                <li style={{color:"white"}}>Discover</li>
                <li>Browse</li>
                <li>News</li>
            </ul>
            
            
        </div>

    );
}
export default Search;