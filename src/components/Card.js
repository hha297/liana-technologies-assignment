import React from 'react';

const Card = ({
    imgUrl,
    title,
    href,
    onClick,
    description,
    className,
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className="flex flex-row md-max:flex-row cursor-pointer rounded-lg border border-gray-300 max-h-96 w-full overflow-hidden shadow-lg mb-20 md-max:mb-10"
        >
            <div className="w-full">
                <div className="w-full h-48 border-b mx-auto border-b-gray-300">
                    <img
                        src={imgUrl}
                        alt=""
                        className={`h-44 mx-auto ${className}`}
                    />
                </div>
                <div className="flex flex-col p-4 items-center">
                    <h1 className="text-black text-xl font-bold mb-3 xl-max:text-[16px] lg-max:text-sm md-max:text-lg sm-max:text-base overflow-hidden whitespace-nowrap">
                        {title}
                    </h1>
                    <p className="text-center xl-max:text-[12px] lg-max:text-xs md-max:text-sm sm-max:text-xs">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Card;
