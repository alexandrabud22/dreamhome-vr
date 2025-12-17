export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#0B1020]/80 backdrop-blur">
      <div className="text-xl font-semibold">
        DreamHome VR
      </div>

      <ul className="hidden md:flex gap-8 text-sm text-gray-300">
        <li className="hover:text-white cursor-pointer">How it works</li>
        <li className="hover:text-white cursor-pointer">Solutions</li>
        <li className="hover:text-white cursor-pointer">Features</li>
        <li className="hover:text-white cursor-pointer">Roadmap</li>
      </ul>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
        Join waitlist
      </button>
    </nav>
  );
}
