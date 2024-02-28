import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import DropdownInput from '../components/DropdownInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/modal/Modal';

const menuLinks = [
    { to: '/company', label: 'Company' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/news', label: 'News & Events' },
    { to: '/intranet', label: 'Intranet' },
];

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(
        window.innerWidth,
    );
    const [searchValue, setSearchValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener(
                'resize',
                handleResize,
            );
        };
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
        // Hide  error message if search field is not empty
        if (event.target.value.trim() !== '') {
            setShowError(false);
        }
    };

    const handleSearch = () => {
        if (searchValue.trim() === '') {
            setShowError(true); // Display error message if search field is empty
            return;
        }
        // Search
        alert(`You have searched for: ${searchValue}`);
    };

    return (
        <div>
            <div className="w-full h-20 bg-primary">
                <div className="flex justify-end items-center ml-20 h-full lg-max:justify-center lg-max:ml-40 text-white">
                    <NavLink
                        to="/news"
                        className={
                            'mx-4 hover:underline mb-max:hidden'
                        }
                    >
                        News
                    </NavLink>
                    <NavLink
                        to="/intranet"
                        className={
                            'mx-4 hover:underline mb-max:hidden'
                        }
                    >
                        Intranet
                    </NavLink>
                    <DropdownInput
                        className={'xs-max:hidden'}
                    ></DropdownInput>
                </div>
            </div>
            <div className="w-4/5 h-28 mx-auto flex mb-max:flex-col mb-max:mt-8 mb-max:mb-12 mb-max:mx-auto mb-max:gap-y-8 justify-between text-gray-500 items-center">
                <div className="flex flex-row items-center">
                    <img
                        src="/liana-logo.png"
                        className="w-40 h-12 mr-10 cursor-pointer"
                        alt=""
                    />
                    {windowWidth <= 1040 ? (
                        <FontAwesomeIcon
                            icon={faBars}
                            className="absolute top-5 right-5 xs-max:right-0 xs-max:left-1/2 xs-max:transform xs-max:-translate-x-1/2 text-2xl text-white rounded-md px-4 py-2 flex justify-center cursor-pointer"
                            onClick={openModal}
                        />
                    ) : (
                        <>
                            <NavLink
                                to="/company"
                                className={
                                    'mx-4 hover:text-primary hover:underline'
                                }
                            >
                                Company
                            </NavLink>
                            <NavLink
                                to="/products"
                                className={
                                    'mx-4 hover:text-primary hover:underline'
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={
                                    'mx-4 hover:text-primary hover:underline'
                                }
                            >
                                Contact Us
                            </NavLink>
                        </>
                    )}
                </div>
                <div className="relative flex flex-row">
                    <div className="flex flex-row">
                        <input
                            placeholder="Search"
                            type="text"
                            value={searchValue}
                            onChange={handleInputChange}
                            S
                            className="block appearance-none w-full mr-3 bg-white border border-gray-300 px-3 py-2 lg-max:pr-14 rounded-lg shadow leading-tight focus:outline-none lg-max:py-3 focus:border-gray-500"
                        />

                        {windowWidth <= 1040 ? (
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="absolute right-0 top-0 mt-[0.4px] mr-[12px] cursor-pointer bg-primary text-white px-4 py-[14.6px] rounded-tr-lg rounded-br-lg"
                                onClick={handleSearch}
                            />
                        ) : (
                            <Button
                                onClick={handleSearch}
                                className={'font-normal'}
                            >
                                Search
                            </Button>
                        )}
                    </div>
                    {showError && (
                        <p className="text-red-500 absolute mt-12 text-sm">
                            Please input keyword search
                        </p>
                    )}
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                name="Menu / Dang Hoang Ha"
                menuLinks={menuLinks}
            />
        </div>
    );
};

export default Header;
