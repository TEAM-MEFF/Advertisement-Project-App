import React, { useState } from 'react';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div
            className={`p-2 mx-5 w-[120px] sm:w-[270px] md:w-[400px] lg:w-[600px] ${inputValue.length > 0 ? 'w-[160px] sm:w-[350px] md:w-[500px] lg:w-[700px]' : 'hover:w-[160px] hover:mx-2 sm:hover:w-[350px] md:hover:w-[500px] lg:hover:w-[700px]'
                } h-fit bg-theme-color shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex items-center transition-all duration-300`}
        >
            <div className="flex items-center justify-center fill-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Isolation_Mode"
                    data-name="Isolation Mode"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                >
                    <path
                        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
                    ></path>
                </svg>
            </div>
            <input
                type="search"
                className="outline-none text-base bg-transparent w-full text-white font-normal px-4"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search by title, author, subject or ISBN..."
            />
        </div>
    );
};

export default SearchBox;
