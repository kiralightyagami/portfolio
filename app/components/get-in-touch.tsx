"use client";

import { useState } from 'react';

export const GetInTouch = () => {
    const [email, setEmail] = useState('');

    const handleSendEnquiry = () => {
        const subject = encodeURIComponent('Enquiry from Portfolio');
        const body = encodeURIComponent(`Hi,\n\nI'm reaching out from your portfolio.\n\nFrom: ${email}`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=asvinshrivas332@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
        setEmail(''); 
    };

    return (
        <div className="p-12">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-2 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a 
                question or want to say hi, hit that button.
            </p>
            
            <div className="mb-6">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                    Reach me at: <span className="text-black dark:text-white font-medium">asvinshrivas332@gmail.com</span>
                </p>
            </div>
            
            <div className="relative w-1/2">
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white shadow-input rounded-md px-2 py-3 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 pr-32"
                />
                <button
                    onClick={handleSendEnquiry}
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white dark:text-neutral-300 px-4 py-2 rounded-md transition-colors duration-200 font-medium text-xs"
                >
                    Send Enquiry
                </button>
            </div>
        </div>
    );
};