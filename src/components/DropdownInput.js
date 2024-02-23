import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function DropdownInput() {
    const [selectedOption, setSelectedOption] = useState(
        'Select Language',
    );

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="relative w-44 text-black mr-40 ml-4">
            <select
                value={selectedOption}
                onChange={handleDropdownChange}
                className="block appearance-none w-full bg-white border border-gray-100 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:border-gray-500"
            >
                <option
                    value="selectlanguage"
                    disabled
                    className="text-gray-400"
                >
                    Select Language
                </option>
                <option value="english">In English</option>
                <option value="finnish">In Finnish</option>
            </select>
            <FontAwesomeIcon
                className="absolute top-0 right-0 m-[10px] text-gray-600"
                icon={faCaretDown}
            />
        </div>
    );
}

export default DropdownInput;
