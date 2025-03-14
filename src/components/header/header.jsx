import './header.scss'

import {Search} from "../search/search.jsx";
import {Filters} from "../filters/filters.jsx";
import {Button} from "../../shared/UI/button/button.jsx";
import {DateRangeSort} from "../date-range-sort/date-range-sort.jsx";

export const Header = ({setIsOpenModal}) => {
    return (
        <header className='header'>
            <div className='header__row'>
                <Search/>
                <Filters/>
            </div>
            <div className='header__row'>
                <DateRangeSort
                    onSort={({ startDate, endDate }) => {
                        console.log('Сортировать по периоду:', startDate, endDate);
                    }}
                />
                <Button  onClick={() => setIsOpenModal(prev => !prev)}>Добавить </Button>
            </div>
        </header>
    )
}