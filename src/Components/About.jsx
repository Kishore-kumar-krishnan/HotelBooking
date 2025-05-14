import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div className="p-8 font-sans bg-gray-50 text-gray-800 mt-30">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* Left Side - Content */}
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold text-center md:text-left mb-6 text-blue-500">About Us</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Welcome to <span className="font-semibold">Zoyo Hotel Booking</span>, your trusted partner in finding the perfect stay for your travels. 
                        Our mission is to make booking accommodations seamless, reliable, and tailored to your needs.
                    </p>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Who We Are</h2>
                        <p className="leading-relaxed">
                            At <span className="font-semibold">Hotel Booking</span>, we are a team of passionate travel enthusiasts dedicated to connecting travelers with the best hotels around the world. 
                            Whether you're planning a business trip, a family vacation, or a romantic getaway, we strive to provide you with the best options at competitive prices.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Vision</h2>
                        <p className="leading-relaxed">
                            We envision a world where finding and booking accommodations is effortless and enjoyable. 
                            Our platform is designed to empower travelers with the tools and information they need to make informed decisions.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Why Choose Us?</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Wide selection of hotels to suit every budget and preference.</li>
                            <li>Secure and hassle-free booking process.</li>
                            <li>24/7 customer support to assist you at every step.</li>
                            <li>Exclusive deals and discounts for our valued customers.</li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Join Us on Your Journey</h2>
                        <p className="leading-relaxed">
                            Let us help you create unforgettable travel experiences. 
                            Thank you for choosing <span className="font-semibold">Hotel Booking</span> as your trusted travel partner.
                        </p>
                    </div>
                </div>

                {/* Right Side - Logo */}
                <div className="md:w-1/3 flex justify-center items-center mt-8 md:mt-0">
                    <img 
                        src={assets.logo}
                        alt="Zoyo Hotel Booking Logo" 
                        className="w-64 h-auto transform transition-transform duration-500 hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;