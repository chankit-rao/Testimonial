import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Testimonial(props) {

    let reviews = props.reviews;
    let min = 0, max = 4;
    let randNum = Math.floor(Math.random() * (max - min + 1) + min);
    let [handler, setHandler] = useState(0)



    function leftShiftHandler() {

        if (handler === 0) {
            setHandler(handler);
        }
        else {
            handler = handler - 1;
            setHandler(handler);
        }

    }

    function rightShiftHandler() {
        if (handler === 4) {
            setHandler(handler);
        }
        else {
            handler = handler + 1;
            setHandler(handler);
        }
    }

    function surpriseHandler() {

        setHandler(randNum);
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex justify-center flex-col mt-10 p-10 transition-all duration-700">

            <Card review={reviews[handler]}></Card>

            <div>
                <div className="flex text-3xl mt-5 gap-3 text-violet-600 font-bold justify-center">
                    <button className="cursor-pointer hover:text-violet-800" onClick={leftShiftHandler}>
                        <FiChevronLeft />
                    </button>
                    <button className="cursor-pointer hover:text-violet-800" onClick={rightShiftHandler}>
                        <FiChevronRight />
                    </button>
                </div>

                <div >
                    <button className="bg-violet-600 hover:bg-violet-800 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg " onClick={surpriseHandler}>Surprise Me</button>
                </div>

            </div>

        </div>
    );

}

export default Testimonial;