import React, { Fragment } from 'react';

const Slider = (props) => {
    return (
    <Fragment>
	    <div className="relative mt-16 bg-gray-100 border-2">
	        <img src="https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/slider-wall-clock.jpg" alt="" />
	        <div className="absolute inset-0 flex justify-between items-center mb-4">
	          <svg className="flex justify-center w-12 h-12 text-gray-700 opacity-25 cursor-pointer hover:text-yellow-700 hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
	          <svg className="flex justify-center w-12 h-12 text-gray-700 opacity-25 cursor-pointer hover:text-yellow-700 hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
	        </div>
	    </div>
    </Fragment>
    )
}

export default Slider;