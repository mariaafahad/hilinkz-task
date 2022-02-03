import forms from '@tailwindcss/forms';
import React from 'react';
import './Passenger.css'

const PassengerInput = () => {

    function decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        value--;
        target.value = value;
    }

    function increment(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        value++;
        target.value = value;
    }

    const decrementButtons = document.querySelectorAll(
        `button[data-action="decrement"]`
    );

    const incrementButtons = document.querySelectorAll(
        `button[data-action="increment"]`
    );

    decrementButtons.forEach(btn => {
        btn.addEventListener("click", decrement);
    });

    incrementButtons.forEach(btn => {
        btn.addEventListener("click", increment);
    });
    return (
        <div>

            <forms class="group inline-block">
                <h1>Passengers/Travel Class</h1>
                <button
                    id="dropdownButton"
                    class=" bg-gray-100 text-gray-700 border-b-4 border-gray-100 rounded py-2 px-12 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                >
                    <div className="flex">
                        <label class=" text-gray-600 text-l mb-1">
                            Passengers/travel class
                        </label>
                        <span>
                            <svg
                                class="flex fill-current h-4 w-4 transform group-hover:-rotate-180 m-2
        transition duration-150 ease-in"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </span>
                    </div>
                </button>
                <ul
                    class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top  py-2 "
                >
                    <li class="rounded-sm relative px-16 py-2 hover:bg-gray-100">
                        <button
                            class="w-full text-left flex items-center outline-none focus:outline-none"
                        >

                            <span class="pr-6 mb-4">Travel class</span>
                            <br />
                            <select class="appearance-none">
                                <option>Economy</option>
                                <option>Premium</option>
                                <option>Upperclass</option>
                            </select>

                        </button>
                        <br />


                        <h1>Passengers</h1>
                        <div class="custom-number-input h-10 w-32 flex mt-6 ">

                            <br />
                            <label for="custom-input-number" class="w-full mx-6 text-gray-700 text-sm ">Adult
                            </label>

                            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl text-red-800 font-thin">−</span>
                                </button>
                                <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  " name="custom-input-number" value="0"></input>
                                <button data-action="increment" class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl text-red-800  font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <br />
                        <div class="custom-number-input h-10 w-32 flex">
                            <label for="custom-input-number" class="w-full mx-6 text-gray-700 text-sm ">Young adult
                            </label>
                            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl text-red-800  font-thin">−</span>
                                </button>
                                <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  " name="custom-input-number" value="0"></input>
                                <button data-action="increment" class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl text-red-800  font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <br />
                        <div class="custom-number-input h-10 w-32 flex">
                            <label for="custom-input-number" class="w-full mx-6 text-gray-700 text-sm ">Child
                            </label>
                            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl text-red-800  font-thin">−</span>
                                </button>
                                <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  " name="custom-input-number" value="0"></input>
                                <button data-action="increment" class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl text-red-800  font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <br />
                        <div class="custom-number-input h-10 w-32 flex">
                            <label for="custom-input-number" class="w-full mx-6 text-gray-700 text-sm ">Infant
                            </label>
                            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" class=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl text-red-800  font-thin">−</span>
                                </button>
                                <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  " name="custom-input-number" value="0"></input>
                                <button data-action="increment" class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl text-red-800  font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <button type="submit" class="bg-red-700 hover:bg-red-100 hover:text-gray-800 text-gray-100 font-bold py-2 px-8 border-b-4 border-blue-dark hover:border-blue rounded">Done</button>
                    </li>
                </ul>

            </forms >
            <hr />



        </div >
    );
};

export default PassengerInput;

{/* <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
<button
    class="w-full text-left flex items-center outline-none focus:outline-none"
>
    <span class="pr-1 flex-1">Python</span>
    <span class="mr-auto">
        <svg
            class="fill-current h-4 w-4
transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
        </svg>
    </span>
</button>
<ul
    class="bg-white border rounded-sm absolute top-0 right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
>
    <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
    <li class="px-3 py-1 hover:bg-gray-100">3+</li>
</ul> */}