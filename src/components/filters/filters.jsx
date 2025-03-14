import './filters.scss'
import {Select} from "../../shared/UI/select/select.jsx";
import {useState} from "react";
export const Filters = () => {
    const [selectedValue, setSelectedValue] = useState(null)
    const [sortedValue, setSortedValue] = useState(null)

    return (
        <div className='filters'>

            <Select
                options={[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                    { value: '3', label: 'Option 3' }
                ]}
                value={selectedValue}
                onChange={setSelectedValue}
                placeholder="Все нейросети"
            />

            <Select
                options={[
                    { value: '4', label: 'Option 4' },
                    { value: '5', label: 'Option 5' },
                    { value: '6', label: 'Option 6' }
                ]}
                value={selectedValue}
                onChange={setSelectedValue}
                placeholder="Все теги"
            />

            <Select
                isMulti
                options={[
                    { value: '1', label: 'Фото' },
                    { value: '2', label: 'Видео' },
                ]}
                prefixIcon={
                    <img src="/assets/icons/file.svg" alt=""/>
                }
                value={sortedValue}
                onChange={setSortedValue}
                placeholder="Тип файлов"
            />
        </div>
    )
}