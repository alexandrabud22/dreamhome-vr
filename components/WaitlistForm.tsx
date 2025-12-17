"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mldqyydz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">
          You’re on the waitlist 🎉
        </h3>
        <p className="text-gray-400">
          Thanks for signing up. We’ll keep you updated as DreamHome VR evolves.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="px-4 py-3 rounded-lg text-black w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-semibold disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Join the waitlist →"}
      </button>
    </form>
  );
}
