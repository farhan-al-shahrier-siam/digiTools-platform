import React from "react";
import User from "../../assets/user.png";
import Pakage from "../../assets/package.png";
import Rocket from "../../assets/rocket.png";

const StepsSection = () => {
    return (
        <div className="p-5 md:p-28 bg-[#f9fafc81] container mx-auto">
            <div className="mb-10">
                <h2 className="font-extrabold text-5xl text-center mb-8">Get Started in 3 Steps</h2>
                <p className="text-[#627382] text-center">Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center border-2 border-gray-100 rounded-2xl p-6 items-center space-y-2">
                    <div className="flex justify-end">
                        <div className="w-10 h-10 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">01</div>
                    </div>
                    <div className="flex h-25 w-25 rounded-full mx-auto bg-[#9614fa1d] items-center justify-center">
                        <img className="mx-auto" src={User} alt="" />
                    </div>
                    <h3 className="font-bold text-2xl">Create Account</h3>
                    <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="text-center border-2 border-gray-100 rounded-2xl p-6 items-center space-y-2">
                    <div className="flex justify-end">
                        <div className="w-10 h-10 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">02</div>
                    </div>
                    <div className="flex h-25 w-25 rounded-full mx-auto bg-[#9614fa1d] items-center justify-center">
                        <img className="mx-auto" src={Pakage} alt="" />
                    </div>
                    <h3 className="font-bold text-2xl">Choose Products</h3>
                    <p className="text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="text-center border-2 border-gray-100 rounded-2xl p-6 items-center space-y-2">
                    <div className="flex justify-end">
                        <div className="w-10 h-10 flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">03</div>
                    </div>
                    <div className="flex h-25 w-25 rounded-full mx-auto bg-[#9614fa1d] items-center justify-center">
                        <img className="mx-auto" src={Rocket} alt="" />
                    </div>
                    <h3 className="font-bold text-2xl">Start Creating</h3>
                    <p className="text-[#627382]">Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;
