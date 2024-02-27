import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Overlay from './Overlay';
import Button from '../Button';
import DropdownInput from '../DropdownInput';

function Modal({ isOpen, closeModal, name, menuLinks }) {
    const [isSmallScreen, setIsSmallScreen] =
        useState(true);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 360);
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
        <>
            <Overlay isOpen={isOpen} onClose={closeModal}>
                <nav
                    className="bg-white xl-max:w-3/12 md-max:w-4/12 sm-max:w-[44%] sm-max:px-3 sm-max:text-base ml-auto flex h-full w-1/6 transform flex-col border-l-2 border-solid border-l-white/5 p-6 text-lg shadow-lg transition-transform duration-300 ease-linear "
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className="border-b-2 border-solid ">
                        <li className="mb-4 w-full border-b border-solid border-[#494844] pb-5 font-medium text-white">
                            <div
                                className="w-4/5 overflow-hidden overflow-ellipsis whitespace-nowrap text-primary"
                                title={name}
                            >
                                {name}
                            </div>
                            <button
                                onClick={closeModal}
                                className="absolute right-2 top-4 cursor-pointer border-none bg-transparent p-2 px-4 text-primary transition-all duration-300 hover:border-none hover:text-red-500 active:scale-90"
                            >
                                <FontAwesomeIcon
                                    className="sm-max:h-4 sm-max:w-4 h-5 w-5"
                                    icon={faXmark}
                                />
                            </button>
                        </li>

                        {menuLinks.map((link) => (
                            <li
                                key={link.to}
                                className="mb-4"
                            >
                                <NavLink
                                    to={link.to}
                                    className="text-gray-500 hover:text-primary hover:underline"
                                    activeClassName="text-primary"
                                    onClick={closeModal}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col text-sm gap-y-1">
                        <Button>Sign In</Button>
                        <Button
                            className={
                                'bg-red-600 hover:bg-red-800'
                            }
                        >
                            Or Log Out Function Implement
                            Here
                        </Button>
                    </div>

                    {isSmallScreen ? (
                        <div className="mt-2 shadow-xl flex pr-2">
                            <DropdownInput
                                className={
                                    'right-4 mx-auto xs-max:w-[112px]'
                                }
                            />
                        </div>
                    ) : (
                        ''
                    )}
                </nav>
            </Overlay>
        </>
    );
}

export default Modal;
