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

    // Create FormData to handle form submissions
    const submitData = new FormData();
    submitData.append("name", name);
    submitData.append("email", email);
    submitData.append("message", message);

    try {
      const APICALL = await fetch("/api/contact", {
        method: "POST",
        body: submitData,
      });
      
      const response = await APICALL.json();
      
      if (APICALL.ok) {
        toast.success(response.message || "Form submitted successfully!");
        
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(response.error || "Failed to submit form");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 py-10 max-w-lg mx-auto">
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          className="focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white shadow-input rounded-md px-3 py-2 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          className="focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white shadow-input rounded-md px-3 py-2 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
          type="email"
          placeholder="john.doe@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600 dark:text-neutral-300"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          className="focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white shadow-input resize-none rounded-md px-3 py-2 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 min-h-[120px]"
          placeholder="I'm interested in your services..."
        />
      </div>
      <button
        type="submit"
        className="bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white dark:text-neutral-300 px-4 py-3 rounded-md transition-colors duration-200 font-medium w-full"
      >
        Send message
      </button>
    </form>
  );
};
