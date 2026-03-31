import React from "react";
import { IoMdDoneAll } from "react-icons/io";

const PricingSection = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center mb-10">
                <h2 className="font-extrabold text-5xl mb-8">Simple, Transparent Pricing</h2>
                <p className="text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="grid p-4 grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                <div className="text-[#627382] border-2 border-gray-300 rounded-2xl p-6 bg-[#F2F2F2]">
                    <h3 className="font-bold text-2xl text-black">Starter</h3>
                    <p>Perfect for getting started</p>
                    <h2 className="my-6">
                        <span className="font-bold text-4xl text-black">$0</span>/Month
                    </h2>
                    <p className="flex items-center gap-2">
                        {" "}
                        <IoMdDoneAll className="text-green-500" />
                        Access to 10 free tools
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Basic templates
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Community support
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />1 project per month
                    </p>

                    <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white mt-20">Get Started Free</button>
                </div>
                <div className="relative text-white border-2 border-gray-100 rounded-2xl p-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                    <p className=  "absolute -top-4 right-1/3 w-28 text-[14px] bg-amber-300 rounded-full px-3 py-2 text-nowrap">Most Popular</p>
                    <h3 className="font-bold text-2xl">Pro</h3>
                    <p>Best for professionals</p>
                    <h2 className="my-6">
                        <span className="font-bold text-white text-4xl">$29</span>/Month
                    </h2>
                    <p className="flex items-center gap-2">
                        {" "}
                        <IoMdDoneAll className="text-green-500" />
                        Access to all premium tools
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Unlimited templates
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Priority support
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Unlimited projects
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Cloud sync
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Advanced analytics
                    </p>

                    <button className="btn w-full bg-white rounded-full text-black mt-20">Start Pro Trial</button>
                </div>
                <div className="text-[#627382] border-2 border-gray-300 rounded-2xl p-6 bg-[#F2F2F2]">
                    <h3 className="font-bold text-2xl text-black">Enterprise</h3>
                    <p>For teams and businesses</p>
                    <h2 className="my-6">
                        <span className="font-bold text-4xl text-black">$99</span>/Month
                    </h2>
                    <p className="flex items-center gap-2">
                        {" "}
                        <IoMdDoneAll className="text-green-500" />
                        Everything in Pro
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Team collaboration
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />
                        Custom integrations
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />Dedicated support
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />SLA guarantee
                    </p>
                    <p className="flex items-center gap-2">
                        <IoMdDoneAll className="text-green-500" />Custom branding
                    </p>

                    <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white mt-20">Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
