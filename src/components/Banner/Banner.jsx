import React from "react";
import BannerImg from "../../assets/banner.png";
import { PiDotDuotone, PiPlayPauseBold } from "react-icons/pi";

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="w-full max-w-125 h-auto mx-auto" src={BannerImg} alt="" />
                    <div>
                        <p className="flex items-center text-[#9514FA] mb-4"><PiDotDuotone className="text-3xl" /> <span className="bg-[#9614fa10] rounded-full py2 px-4">New: AI-Powered Tools Available</span></p>
                        <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
                        <p className="py-6">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                        <div className="space-x-1">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Explore Products</button>
                            <button className="btn btn-outline border border-[#9514FA] rounded-full">
                                <PiPlayPauseBold /> Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
