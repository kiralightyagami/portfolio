"use client";
import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    //need to add a backend to handle the form data
    const APICALL = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    if (APICALL.ok) {
      toast.success("Form submitted");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-10 max-w-lg mx-auto">
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          className="focus:outline-none focus:ring-2 focus:ring-2 shadow-input rounded-md px-2 py-1 text-sm"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          className="focus:outline-none focus:ring-2 focus:ring-2 shadow-input rounded-md px-2 py-1 text-sm"
          type="text"
          placeholder="john.doe@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          className="focus:outline-none focus:ring-2 focus:ring-2 shadow-input resize-none rounded-md px-2 py-1 text-sm"
          placeholder="I'm interested in your services..."
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
