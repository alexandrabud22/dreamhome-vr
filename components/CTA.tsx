export default function CTA() {
  return (
    <section className="px-10 py-32 text-center bg-gradient-to-b from-[#0B1020] to-[#11162A]">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        The future of home design starts now
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        Join early adopters exploring immersive VR home design, intelligent
        customization, and seamless purchasing — all in one platform.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-medium text-lg">
          Get early access
        </button>

        <button className="border border-gray-600 px-8 py-4 rounded-lg text-gray-300 hover:text-white transition text-lg">
          Contact us
        </button>
      </div>
    </section>
  );
}
