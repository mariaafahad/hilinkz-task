import React from 'react';

const Voucher = () => {
    return (
        <div>
            <div class=" px-3 mb-6 md:mb-0">
                <label class=" text-gray-700 text-l mb-2">
                    Voucher or Event code
                </label>

                <input class=" bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-14 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder=" Enter code" />
            </div>
        </div>
    );
};

export default Voucher;