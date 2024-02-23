import React from 'react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import DropdownInput from '../components/DropdownInput';

const Header = () => {
    return (
        <div>
            <div className="w-full h-20 bg-primary">
                <div className="flex justify-end items-center h-full mr-10 text-white">
                    <NavLink
                        to="/news"
                        className={'mx-4 hover:underline'}
                    >
                        News
                    </NavLink>
                    <NavLink
                        to="/intranet"
                        className={'mx-4 hover:underline'}
                    >
                        Intranet
                    </NavLink>
                    <DropdownInput></DropdownInput>
                </div>
            </div>
            <div className="w-4/5 h-32 mx-auto flex justify-between text-gray-500 items-center">
                <div className="flex flex-row items-center">
                    <img
                        src="/liana-logo.png"
                        className="w-40 h-12 mr-10 cursor-pointer"
                        alt=""
                    />
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
                </div>
                <div className="flex flex-row">
                    <input
                        placeholder="Search"
                        type="text"
                        className="block appearance-none w-full mr-3 bg-white border border-gray-300 px-3 py-2 rounded-lg shadow leading-tight focus:outline-none focus:border-gray-500"
                    />
                    <Button
                        onClick={() => alert('Search')}
                        className={'font-normal'}
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
