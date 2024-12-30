import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-white">
          Monet
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/resolutions" className="text-neutral-400 hover:text-white transition-colors">
            Resolutions
          </Link>
          <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-neutral-400 hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
            Pricing
          </a>
          <button className="bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-800">
          <div className="container-padding py-4 flex flex-col gap-4">
            <Link to="/resolutions" className="text-neutral-400 hover:text-white transition-colors">
              Resolutions
            </Link>
            <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-neutral-400 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
              Pricing
            </a>
            <button className="bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;