import {Search} from "../../components/search/search.jsx";
import {Filters} from "../../components/filters/filters.jsx";

export const Header = () => {
    return (
        <header className='header'>
            <Search/>
            <Filters/>
            
        </header>
    )
}