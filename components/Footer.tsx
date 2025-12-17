export default function Footer() {
  return (
    <footer className="px-10 py-16 bg-[#0B1020] border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">DreamHome VR</h3>
          <p className="text-gray-400 text-sm">
            An immersive virtual reality platform redefining how people
            design, experience, and purchase homes.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Product</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>How it works</li>
            <li>Solutions</li>
            <li>Features</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: hello@dreamhomevr.com</li>
            <li>LinkedIn</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} DreamHome VR. All rights reserved.
      </div>
    </footer>
  );
}
