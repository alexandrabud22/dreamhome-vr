export default function Hero() {
  return (
    <section className="min-h-screen px-10 py-28 bg-gradient-to-b from-[#0F1115] to-[#1C1F26] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* Left: Text content */}
      <div>
        <span className="inline-block mb-6 text-sm bg-[#E28A4A]/10 text-[#E28A4A] px-4 py-1 rounded-full tracking-wide">
          Early access
        </span>

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
          Step inside your{" "}
          <span className="text-[#E28A4A]">future home</span> — before it’s built.
        </h1>

        <p className="text-gray-400 max-w-xl mb-12">
          Explore, customize, and confidently choose your home through immersive
          virtual experiences designed for modern living.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#E28A4A] hover:bg-[#d77c3f] transition px-8 py-4 rounded-lg font-medium text-black">
            Join the waitlist →
          </button>

          <button className="border border-gray-600 px-8 py-4 rounded-lg text-gray-300 hover:text-white transition">
            See how it works
          </button>
        </div>
      </div>

      {/* Right: Visual placeholder */}
      <div className="bg-[#151821] rounded-2xl h-[420px] flex items-center justify-center text-gray-500">
        Hero image / video placeholder
      </div>
    </section>
  );
}
