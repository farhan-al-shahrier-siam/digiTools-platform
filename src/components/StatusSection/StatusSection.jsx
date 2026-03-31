import React from "react";

const StatusSection = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-16 grid md:grid-cols-3 text-center text-white space-y-8 md:space-y-0">
            <div>
                <h1 className="font-extrabold text-6xl">50K+</h1>
                <p className="">Active Users</p>
            </div>
            <div>
                <h1 className="font-extrabold text-6xl">200+</h1>
                <p>Premium Tools</p>
            </div>
            <div>
                <h1 className="font-extrabold text-6xl">4.9</h1>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default StatusSection;
