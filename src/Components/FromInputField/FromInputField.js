import React from 'react';
import { AiFillEnvironment } from "react-icons/ai";
const FromInputField = () => {
    return (
        <div>
            <div>
                <label class="block uppercase tracking-wide text-gray-700 text-l  mb-2" for="grid-city">
                    From
                </label>
                <div className="relative">
                    < AiFillEnvironment className="absolute flex left-3 top-3 " />
                    <input class=" bg-gray-100 text-gray-700 border-b-4 border-gray-200 w-full py-3 px-14  leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-city" type="search" placeholder=" Select Departure" />
                </div>
            </div>
        </div>

    );
};

export default FromInputField;