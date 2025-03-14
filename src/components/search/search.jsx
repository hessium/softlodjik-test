import './search.scss'
import {Input} from "../../shared/UI/input/input.jsx";

export const Search = () => {
    return (
        <div className='search'>
            <Input
                type='search'
                variant='icon'
                placeholder='Поиск медиа файлов по названию или ID'
                prefixIcon={<img src='/assets/icons/search.svg' alt=''/> }
            />
        </div>
    )
}