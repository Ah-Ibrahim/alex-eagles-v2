import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="section-inline-padding py-5 absolute left-0 right-0">
      <nav className="flex items-center justify-between text-text-primary">
        <div className="text-xl font-bold">AlexEagles</div>
        <button>
          <Menu />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
