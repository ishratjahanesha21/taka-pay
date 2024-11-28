import React from 'react';
const Loader = () => {
    return (
        <div className="container w-2/4 mx-auto md:w-2/4 lg:w-1/4 lg:mx-auto mt-12 lg:mt-12 justify-items-center">
            <div className="flex flex-1 items-center justify-center mx-auto  ">
                <p className="text-md font-medium pt-8 ">Loading ...</p>
            </div>
        </div>
    );
};

export default Loader;