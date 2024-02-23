import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Banner = ({
    imgUrl,
    title,
    showButton,
    className,
    onClick,
}) => {
    const navigate = useNavigate();
    return (
        <div onClick={onClick}>
            <div className="relative flex justify-center items-center cursor-pointer">
                <img
                    src={imgUrl}
                    alt=""
                    className={`${className} w-full opacity-90 object-cover bg-center bg-no-repeat bg-cover`}
                />
                <div className="absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 text-white">
                    <div className="text-center mb-6 text-5xl font-thin">
                        {title}
                    </div>
                    {showButton && ( // Kiểm tra showButton trước khi hiển thị Button
                        <Button
                            onClick={() =>
                                navigate(
                                    '/software-fueling-digital-marketing',
                                )
                            }
                            className={'font-normal'}
                        >
                            Learn more
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
