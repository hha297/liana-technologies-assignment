import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';

const Banner = ({
    imgUrl,
    title,
    showButton,
    className,
    onClick,
    //type to distinguish whether banner size is large or small
    size,
}) => {
    let textClass = '';
    if (size === 'small') {
        textClass =
            'xl-max:text-4xl lg-max:text-3xl md-max:text-2xl sm-max:text-xl'; // Check banner size, if it is small banner, change the font size
    }
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
                    <div
                        className={`${textClass} text-center mb-6 text-5xl font-thin lg-max:text-4xl sm-max:text-3xl mb-max:text-2xl`}
                    >
                        {title}
                    </div>
                    {showButton && ( // Kiểm tra showButton trước khi hiển thị Button
                        <Button
                            onClick={() =>
                                navigate(slugify(title))
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
