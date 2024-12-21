"use client";

import React, { useState } from 'react';

export const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const form = e.target as HTMLFormElement;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        form.reset(); // Clear the form
      } else {
        setFormStatus('Failed to send message. Try again later.');
      }
    } catch (error) {
      setFormStatus('Error occurred. Please try again.');
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black" id="contact">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-white">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/meoojagj"
          method="POST"
          className="max-w-2xl mx-auto bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-white/90 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-white/90 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-400 focus:border-emerald-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-4 py-2 text-gray-900 bg-white/90 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-400 focus:border-emerald-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-emerald-400 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
          >
            Submit
          </button>

          {formStatus && (
            <p className="mt-4 text-center text-sm text-white">{formStatus}</p>
          )}
        </form>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent opacity-30" />
      </div>
    </section>
  );
};
