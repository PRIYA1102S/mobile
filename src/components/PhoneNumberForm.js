import React, { useState } from 'react';
import axios from 'axios';

const PhoneNumberForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous errors

        axios.post('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/', { phone: phoneNumber })
            .then(response => {
                console.log('Response:', response);
            })
            .catch(error => {
                setErrorMessage('Error submitting phone number. Please try again.');
                console.error('Error submitting phone number:', error);
            });
    };

    return (
        <div className="bg-gradient-to-b from-blue-300 to-white flex items-center justify-center min-h-screen p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mb-8">
                <div className="flex justify-between items-center mb-4">
                    <button className="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <select className="border border-gray-300 rounded p-2 ml-4">
                        <option value="EN">EN</option>
                        {/* Add more language options here */}
                    </select>
                </div>
                <div className="mb-6">
                    <img src="/logo.png" alt="" className="w-full h-auto" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                            Enter your phone number
                        </label>
                        <div className="flex items-center border border-gray-300 rounded transition duration-300 ease-in-out focus-within:border-blue-500">
                            <span className="text-gray-500 mr-2">+91</span>
                            <input
                                type="tel"
                                id="phone"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="flex-1 focus:outline-none p-2 transition duration-300 ease-in-out transform focus:scale-105"
                                placeholder="__________"
                            />
                        </div>
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-bold mb-8">
                            {errorMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded mt-4 focus:outline-none hover:bg-gray transition"
                    >
                        CONTINUE
                    </button>
                </form>
                <div className="text-gray-600 text-xs mt-4">
                    <p>
                        Entertainment is a subscription service that will automatically renew for 1 USD/7 Day(s). You can unsubscribe
                        from the service at any time, by sending STOP to *** (for operator). To make use of this service, you must be
                        18 or more unless you have received permission from your parents or the person who is authorized to pay your
                        bill.
                    </p>
                    <p className="mt-2">
                        <a href="/terms" className="underline">
                            Terms & Conditions
                        </a>{' '}
                        •{' '}
                        <a href="/privacy" className="underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhoneNumberForm;
