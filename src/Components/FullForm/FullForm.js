import forms from '@tailwindcss/forms';
import React from 'react';
import Departure from '../Departure & Return/Departure';
import FromInputField from '../FromInputField/FromInputField';

import PassengerInput from '../PassengerInput/PassengerInput';
import ToInputField from '../ToInputField/ToInputField';
import Voucher from '../Voucher/Voucher';
import './FullForm.css'

const FullForm = () => {
    return (
        <div className="container m-60 p-10 border-2 rounded-xl">
            <forms>
                <p className="text-6xl font-thin text-red-500">Flight deals with Virgin Atlantic</p>
                <div role="radiogroup" class="mx-auto py-12 flex">

                    <div class="flex items-center">
                        <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input aria-labelledby="label1" checked type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                            <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                        </div>
                        <label id="label1" class="ml-2 text-xl leading-4 font-normal text-gray-800 dark:text-gray-100">One Way</label>
                    </div>

                    <div class="flex items-center ml-6">
                        <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <input aria-labelledby="label2" type="radio" name="radio" class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                            <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                        </div>
                        <label id="label2" class="ml-2 text-xl leading-4 font-normal text-gray-800 dark:text-gray-100">Round trip</label>
                    </div>
                </div>
                <div className=" container grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-1 ">
                    <div className="flex flex-col justify-center align-center ">
                        <FromInputField></FromInputField>
                        <br />
                        <PassengerInput></PassengerInput>

                    </div>
                    <div className="flex flex-col justify-center align-center ">
                        <ToInputField></ToInputField>
                        <br />
                        <Voucher />
                    </div>

                    <div className="flex flex-col justify-center align-center ">
                        <Departure></Departure>
                        <button type="submit" class="bg-red-700 hover:bg-red-100 hover:text-gray-800 text-gray-100 font-bold py-2 px-40 border-b-4 border-blue-dark hover:border-blue rounded">
                            Book Now
                        </button>
                    </div>
                </div>
                <br />


            </forms>
        </div>

    );
};

export default FullForm;