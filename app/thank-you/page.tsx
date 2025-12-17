import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          You’re on the waitlist 🎉
        </h1>

        <p className="text-gray-400 mb-10">
          Thank you for your interest in DreamHome VR.  
          We’ll keep you updated as we roll out early access and new features.
        </p>

        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
