export default function Hero() {
  return (
    <section className="px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* Left: Text content */}
      <div>
        <span className="inline-block mb-6 text-sm bg-orange-500/10 text-orange-400 px-4 py-1 rounded-full">
          Now in early access
        </span>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Design, experience, and buy your dream home —{" "}
          <span className="text-orange-500">before it exists.</span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-10">
          Step into immersive VR environments to visualize, customize, and
          furnish your future home in real time. Make confident decisions
          with intelligent design assistance.
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
            Join the waitlist →
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-lg text-gray-300 hover:text-white transition">
            See how it works
          </button>
        </div>
      </div>

      {/* Right: Visual placeholder */}
      <div className="bg-[#11162A] rounded-2xl h-[420px] flex items-center justify-center text-gray-500">
        Hero image / video placeholder
      </div>
    </section>
  );
}
