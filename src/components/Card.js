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
            className="flex flex-col cursor-pointer rounded-lg border border-gray-300 max-h-96 w-1/2 overflow-hidden shadow-lg mb-20"
        >
            <div className="">
                <div className="w-full h-48 border-b mx-auto border-b-gray-300">
                    <img
                        src={imgUrl}
                        alt=""
                        className={`h-44 mx-auto ${className}`}
                    />
                </div>
                <div className="flex flex-col p-4 items-center">
                    <h1 className="text-black text-xl font-bold mb-3">
                        {title}
                    </h1>
                    <p className="text-center">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Card;
