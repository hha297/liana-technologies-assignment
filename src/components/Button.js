import React from 'react';

const Button = ({ onClick, className, children }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-primary rounded-lg inline-block px-4 py-[10px] cursor-pointer text-white font-bold  ${className}`}
        >
            {children}
        </div>
    );
};

export default Button;
