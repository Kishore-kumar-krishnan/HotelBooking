import React from 'react';

const Contact = () => {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-15">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 cursor-pointer"
            >
                Send Message
            </button>
        </form>
    </div>
    );
};

export default Contact;