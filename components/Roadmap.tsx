const roadmap = [
  {
    phase: "Phase 1",
    title: "Web & 3D MVP",
    description:
      "Launch a responsive web platform with interactive 3D home visualization and basic customization features.",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "VR headset integration",
    description:
      "Enable full immersive experiences using popular VR headsets such as Meta Quest and HTC Vive.",
    status: "In progress",
  },
  {
    phase: "Phase 3",
    title: "AI design assistance",
    description:
      "Introduce intelligent layout optimization and personalized design recommendations powered by AI.",
    status: "Planned",
  },
  {
    phase: "Phase 4",
    title: "Marketplace & enterprise tools",
    description:
      "Expand with a global furniture marketplace, analytics dashboards, and enterprise-grade collaboration tools.",
    status: "Planned",
  },
];

export default function Roadmap() {
  return (
    <section className="px-10 py-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Product roadmap</h2>
        <p className="text-gray-400">
          A clear, scalable path from MVP to full platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {roadmap.map((item) => (
          <div
            key={item.phase}
            className="bg-[#11162A] p-8 rounded-2xl border border-white/5"
          >
            <span className="text-sm text-orange-400 font-medium">
              {item.phase}
            </span>

            <h3 className="text-xl font-semibold mt-4 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              {item.description}
            </p>

            <span
              className={`inline-block text-xs px-3 py-1 rounded-full ${
                item.status === "Completed"
                  ? "bg-green-500/10 text-green-400"
                  : item.status === "In progress"
                  ? "bg-orange-500/10 text-orange-400"
                  : "bg-gray-500/10 text-gray-400"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
