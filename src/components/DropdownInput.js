import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

function DropdownInput({ className }) {
    const [selectedOption, setSelectedOption] = useState(
        'Select Language',
    );

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth < 610,
    );
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 610);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener(
                'resize',
                handleResize,
            );
        };
    }, []);
    return (
        <div
            className={`relative w-44 text-black mr-40 ml-4 ${className}
            }`}
        >
            <select
                value={selectedOption}
                onChange={handleDropdownChange}
                className={`block appearance-none cursor-pointer w-full sm-max:w-[116px] mb-max:w-[128px] ${className} bg-white border border-gray-100 hover:border-gray-500 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:border-gray-500 `}
            >
                <option
                    value="selectlanguage"
                    disabled
                    className="text-gray-400 xs-max:hidden"
                >
                    Select Language
                </option>
                <option
                    value="english"
                    className="overflow-hidden overflow-ellipsis"
                >
                    In English
                </option>
                <option value="finnish">In Finnish</option>
            </select>
            <FontAwesomeIcon
                className="absolute top-0 right-0 m-[10px] text-gray-600 cursor-pointer"
                icon={faCaretDown}
            />
        </div>
    );
}

export default DropdownInput;
