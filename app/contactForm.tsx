import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ContactForm = ({ }) => (
  <form className="flex flex-col items-center mx-16">
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Name"
      value=""
      required
      className="mb-6 p-2 border-b-2 border-black w-full"
    />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      value=""
      required
      className="mb-6 p-2 border-b-2 border-black w-full"
    />
    <div>
      <button
        type="submit"
        className="bg-dark-orange rounded-md border-2 border-black px-32 py-4"
      >
        <div className="text-dark-blue text-4xl">
          Get Updates
        </div>
      </button>
    </div>
  </form>
);

export default ContactForm;