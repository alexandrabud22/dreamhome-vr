const solutions = [
  {
    title: "Home buyers & renters",
    pain: "Struggling to visualize how a space will look with your furniture?",
    solution:
      "See your future home fully furnished and personalized before signing the lease or making an offer.",
  },
  {
    title: "Interior designers & architects",
    pain:
      "Spending hours on 2D mockups that clients can’t fully understand?",
    solution:
      "Present immersive VR walkthroughs that improve client understanding and reduce revision cycles.",
  },
  {
    title: "Real estate agents & developers",
    pain:
      "Difficulty showcasing properties under construction or vacant units?",
    solution:
      "Offer virtual staging and VR tours that attract more buyers and reduce time on market.",
  },
  {
    title: "Furniture brands & retailers",
    pain:
      "High return rates because customers can’t envision products in their space?",
    solution:
      "Enable customers to try before they buy with AR/VR product placement and instant checkout.",
  },
];

export default function Solutions() {
  return (
    <section className="px-10 py-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Solutions by user type
        </h2>
        <p className="text-gray-400">
          Transforming the way every stakeholder experiences real estate
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="bg-[#11162A] p-10 rounded-2xl border border-white/5 hover:border-orange-500/40 transition"
          >
            <h3 className="text-2xl font-semibold mb-6">
              {item.title}
            </h3>

            <p className="text-gray-400 mb-4">
              <span className="text-sm uppercase tracking-wide text-gray-500">
                Pain point
              </span>
              <br />
              {item.pain}
            </p>

            <p className="text-gray-300">
              <span className="text-sm uppercase tracking-wide text-orange-400">
                Solution
              </span>
              <br />
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
