import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface ContactFormProps {
  onSubmit: (formData: { name: string; email: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ name, email });
    // Optionally, you can reset the form fields here
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
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
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;