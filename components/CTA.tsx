import WaitlistForm from "./WaitlistForm";

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

      <WaitlistForm />
    </section>
  );
}
