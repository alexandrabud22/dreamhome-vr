"use client";

export default function WaitlistForm() {
  return (
    <form
      action="https://formspree.io/f/mldqyydz"
      method="POST"
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
        className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-semibold"
      >
        Join the waitlist →
      </button>
    </form>
  );
}
