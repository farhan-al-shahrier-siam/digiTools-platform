import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className="p-6 md:py-28 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center space-y-10">
                <div className="space-y-4">
                    <h2 className="font-extrabold text-3xl  md:text-4xl">Ready to Transform Your Workflow?</h2>
                    <p className="text-sm md:text-[16px]">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                </div>
                <div className="space-y-4">
                    <button className="btn rounded-full text-purple-600 mr-4">Explore Products</button>
                    <button className="btn btn-outline rounded-full">View Pricing</button>
                    <p>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>

            <div className="bg-black p-28">
                <div className="text-white grid grid-cols-6 items-start justify-between container mx-auto gap-12">
                    <div className="col-span-2">
                        <h2 className="font-extrabold text-4xl mb-4">DigiTools</h2>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl">Product</h3>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl">Company</h3>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl">Resources</h3>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Contact</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl">Social Links</h3>
                        <div className="flex gap-2">
                            <FaSquareInstagram className="text-4xl btn p-0" />
                            <FaFacebookSquare className="text-4xl btn p-0" />
                            <FaTwitterSquare className="text-4xl btn p-0" />
                        </div>
                    </div>
                </div>
                <div className="text-white flex justify-between border-t border-gray-600 mt-20 pt-5">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-5">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
