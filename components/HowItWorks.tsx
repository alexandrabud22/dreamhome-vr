const steps = [
  {
    step: "Step 01",
    title: "Choose a home or upload a floor plan",
    description:
      "Browse from available properties or upload your own architectural plans to get started.",
  },
  {
    step: "Step 02",
    title: "Enter VR or 3D mode",
    description:
      "Put on your VR headset or use our web-based 3D viewer to step inside your future home.",
  },
  {
    step: "Step 03",
    title: "Customize layout, furniture, colors, and lighting",
    description:
      "Experiment with layouts, swap furniture, change colors, and adjust lighting in real time.",
  },
  {
    step: "Step 04",
    title: "Save, share, or purchase instantly",
    description:
      "Save your designs, share them with others, or purchase furniture directly from the platform.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-10 py-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">How it works</h2>
        <p className="text-gray-400">
          From concept to reality in four simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((item) => (
          <div
            key={item.step}
            className="bg-[#11162A] p-8 rounded-2xl border border-white/5 hover:border-orange-500/40 transition"
          >
            <span className="text-orange-500 text-sm font-medium">
              {item.step}
            </span>

            <h3 className="text-xl font-semibold mt-4 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
