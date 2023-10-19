'use client'

import React, { useState } from 'react';

const NewContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(
        `https://northamerica-northeast2-quiri-domain-401614.cloudfunctions.net/landing-page-submit`,
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
            })
          }
    ).then((response) => {
        console.log(response);
        if (response.status === 200) {
            setShowModal(true);
        }
    }).catch((error) => {
        console.log(error);
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center xl:mx-16">
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="mb-6 p-2 border-b-2 border-black w-full text-black"
        />
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="mb-6 p-2 border-b-2 border-black w-full text-black"
        />
        <div>
            <button
                type="submit"
                className="bg-dark-orange rounded-md border-2 border-black px-10 py-4"
            >
            <div className="text-dark-blue text-2xl xl:text-3xl">
                Get Updates
            </div>
            </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
            <div className="relative flex flex-col-reverse xl:flex-row pt-12 xl:pt-0 m-10 bg-white rounded overflow-hidden shadow-[15px_17px_15px_0_rgba(53,195,209,1)] xl:shadow-[30px_34px_15px_0_rgba(53,195,209,1)]">
                <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 m-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <line x1="5" y1="5" x2="45" y2="45" stroke="#666" strokeWidth="4" />
                        <line x1="5" y1="45" x2="45" y2="5" stroke="#666" strokeWidth="4" />
                    </svg>
                </button>
                <img
                    src="discussion.png"
                    alt="Philosophers discussing"
                    className=""
                />
                <div className="flex flex-col items-center justify-center p-8">
                    <div className="text-quiri-orange text-3xl mb-12">
                        Thank you for your interest!
                    </div>
                    <div className="text-quiri-teal text-3xl">
                        We&apos;ll be in touch soon.
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default NewContactForm;
