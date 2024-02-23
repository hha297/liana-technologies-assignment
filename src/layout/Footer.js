import React from 'react';
import Button from '../components/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-black h-52 flex justify-between p-8">
            <div className="text-white flex flex-col px-8">
                <h1 className="text-xl">
                    Liana Technologies
                </h1>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="font-bold text-sm mt-8">
                            Sales and inquiries
                        </div>
                        <div className="text-sm">
                            Email: sales@lianatech.com
                        </div>
                        <div className="text-sm">
                            Phone: +358103877053
                        </div>
                    </div>
                    <Button
                        onClick={() => navigate('/contact')}
                        className={
                            'ml-12 mt-auto py-1 font-normal'
                        }
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
            <div className="text-white flex flex-col px-8">
                <div className="flex flex-row items-center">
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
                </div>
                <div
                    to="/"
                    className="flex flex-row justify-end cursor-pointer px-4 mt-16"
                >
                    <NavLink
                        to="https://www.facebook.com/LianaTechFI"
                        className="rounded-full bg-primary w-8 h-8 flex items-center justify-center"
                    >
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            className="text-white text-lg"
                        />
                    </NavLink>
                    <NavLink
                        to="https://twitter.com/LianaTech_FI"
                        className="rounded-full mx-2 bg-primary w-8 h-8 flex items-center justify-center"
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-white text-lg"
                        />
                    </NavLink>
                    <NavLink
                        to="https://www.linkedin.com/in/dang-hoang-ha-b08925257/"
                        className="rounded-full bg-primary w-8 h-8 flex items-center justify-center"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="text-white text-lg"
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;
