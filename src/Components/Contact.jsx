import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-28">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
                Have questions or need assistance? Feel free to reach out to us. 
                We're here to help and will get back to you as soon as possible.
            </p>
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <form>
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
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Or reach us directly at: 
                        <a href="mailto:support@example.com" className="text-blue-600 hover:underline ml-1">
                            iamrokishorekumar@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;