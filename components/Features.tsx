const features = [
  {
    title: "Immersive VR walkthroughs",
    description:
      "Explore properties with full 360° VR experiences using compatible headsets or web-based 3D viewers.",
  },
  {
    title: "Real-time customization",
    description:
      "Instantly change wall colors, flooring, furniture, and lighting with simple interactions.",
  },
  {
    title: "AI-assisted design suggestions",
    description:
      "Receive intelligent recommendations for layouts, color schemes, and furniture based on preferences.",
  },
  {
    title: "Furniture marketplace integration",
    description:
      "Browse and purchase items from partner brands directly within your virtual design.",
  },
  {
    title: "Cloud saving and collaboration",
    description:
      "Save designs securely, collaborate with others, and access projects across devices.",
  },
];

export default function Features() {
  return (
    <section className="px-10 py-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Key features</h2>
        <p className="text-gray-400">
          Everything you need to design and experience your perfect space
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-[#11162A] p-10 rounded-2xl border border-white/5 hover:border-orange-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
