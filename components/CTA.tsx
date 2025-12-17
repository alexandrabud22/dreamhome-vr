import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  return (
    <section className="px-10 py-32 bg-gradient-to-b from-[#1C1F26] to-[#0F1115] text-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        Begin shaping your{" "}
        <span className="text-[#E28A4A]">future home</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Join early adopters exploring a more confident, immersive way to
        experience and design living spaces — before they’re built.
      </p>

      <div className="flex justify-center">
        <WaitlistForm />
      </div>
    </section>
  );
}
