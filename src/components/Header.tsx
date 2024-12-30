import { Menu, X, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <nav className="container-padding mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-semibold text-primary">
            Resolutions
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/resolutions" className="text-neutral-600 hover:text-primary transition-colors">
              Today
            </Link>
            <a href="#upcoming" className="text-neutral-600 hover:text-primary transition-colors">
              Upcoming
            </a>
            <a href="#filters" className="text-neutral-600 hover:text-primary transition-colors">
              Filters
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors">
            <Plus className="w-4 h-4" />
            Add Resolution
          </button>
        </div>

        <button 
          className="md:hidden text-neutral-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-b border-neutral-200">
          <div className="container-padding py-4 flex flex-col gap-4">
            <Link to="/resolutions" className="text-neutral-600 hover:text-primary transition-colors">
              Today
            </Link>
            <a href="#upcoming" className="text-neutral-600 hover:text-primary transition-colors">
              Upcoming
            </a>
            <a href="#filters" className="text-neutral-600 hover:text-primary transition-colors">
              Filters
            </a>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors">
              <Plus className="w-4 h-4" />
              Add Resolution
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;