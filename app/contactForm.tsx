'use client'

import React, { useState } from 'react';

const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfKblwtIyzJXhatjwT7IuVrN_XRdwBAm4s4Ss8rl1v7OIJzpQ/formResponse?usp=pp_url&entry.180773355=Nigel&entry.98408948=kahler.maynard@gmail.com'

function ContactForm() {
  return <form 
    className="flex flex-col items-center mx-16"
    method="get"
    action="https://docs.google.com/forms/d/e/1FAIpQLSfKblwtIyzJXhatjwT7IuVrN_XRdwBAm4s4Ss8rl1v7OIJzpQ/formResponse"
  >
    <input
      type="text"
      id="name"
      name="entry.180773355"
      placeholder="Name"
      required
      className="mb-6 p-2 border-b-2 border-black w-full text-black"
    />
    <input
      type="email"
      id="email"
      name="entry.98408948"
      placeholder="Email"
      required
      className="mb-6 p-2 border-b-2 border-black w-full text-black"
    />
    <input
      type="hidden"
      name="usp"
      value="pp_url"
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
};

export default ContactForm;