import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './date-range-sort.scss';
import DatePicker from "react-datepicker";
import {Button} from "../../shared/UI/button/button.jsx";

export const DateRangeSort = ({ onSort }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleSort = () => {
        if (startDate && endDate) {
            onSort({ startDate, endDate });
        }
    };

    return (
        <>
            <div className="date-range-sort">
                <div className="date-range-sort__header">
                    Период
                </div>

                <div className="date-range-sort__inputs">
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Дата с"
                        dateFormat="dd.MM.yyyy"
                        className="date-range-sort__input"
                    />

                    <span className="date-range-sort__arrow">
                    <img src="/assets/icons/swapright.svg" alt=""/>
                </span>

                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="Дата по"
                        dateFormat="dd.MM.yyyy"
                        className="date-range-sort__input date-range-sort__input--icon"
                    />
                </div>
            </div>

            <Button
                variant='blue-light'
                size='medium'
                onClick={handleSort}
                style={{width: '32px', height: '32px'}}
            >
                <img src="/assets/icons/burger.svg" alt=""/>
            </Button>
        </>
    );
};