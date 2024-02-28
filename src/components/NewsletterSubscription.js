import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from './Button';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubscribe = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrorMessage('Invalid email address');
            return;
        }
        if (email.trim() === '') {
            setErrorMessage('Email cannot be empty!');

            return;
        }
        // Clear error message if email is not empty
        setErrorMessage('');
        toast.success('Subscribe successfully!!!');
        console.log(email);
    };

    return (
        <div className="border-t border-gray-300 flex flex-col items-center pt-10 py-6">
            <h1 className="font-bold text-2xl md-max:text-xl">
                Subscribe to our newsletter
            </h1>
            <p className="text-center my-4 mx-8">
                Follow our story and get the latest
                promotional news about our products and
                events.
            </p>
            <div className="flex flex-row mt-4 mb-2">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMessage('');
                    }}
                    placeholder="Your email address"
                    className="border border-gray-300 focus:border-gray-400 rounded-lg px-4 py-2 mr-2"
                />
                <Button
                    onClick={handleSubscribe}
                    className="px-4 py-2 font-normal text-white rounded-lg"
                >
                    Subscribe
                </Button>
            </div>
            {errorMessage && (
                <div className="text-red-500 mt-2">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default NewsletterSubscription;
